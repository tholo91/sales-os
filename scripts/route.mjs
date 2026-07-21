import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function scalar(value) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;
  return trimmed.replace(/^['"]|['"]$/g, "");
}

export function parseStatus(text) {
  const status = { artifacts: {}, current_outreach: {}, pending: {}, activity: {} };
  let section = null;

  for (const rawLine of text.split(/\r?\n/)) {
    if (!rawLine.trim() || rawLine.trimStart().startsWith("#")) continue;
    const indent = rawLine.match(/^\s*/)[0].length;
    const match = rawLine.trim().match(/^([^:]+):(?:\s*(.*))?$/);
    if (!match) continue;
    const [, key, rawValue = ""] = match;

    if (indent === 0) {
      section = rawValue === "" ? key : null;
      if (rawValue !== "") status[key] = scalar(rawValue);
    } else if (["artifacts", "current_outreach", "pending", "activity"].includes(section)) {
      status[section][key] = scalar(rawValue);
    }
  }

  return status;
}

export function routeStatus(status, today = new Date()) {
  const dated = (value) => value ? new Date(`${value}T23:59:59Z`) : null;
  const reviewAfter = dated(status.review_after);
  if (!reviewAfter || Number.isNaN(reviewAfter.valueOf()) || reviewAfter < today) {
    return { skill: "sales-setup", reason: "Project context is missing a valid freshness date or is stale." };
  }

  const a = status.artifacts ?? {};
  const p = status.pending ?? {};
  const current = status.current_outreach ?? {};
  const activity = status.activity ?? {};

  if (a.profile !== "complete" || a.project !== "complete") {
    return { skill: "sales-setup", reason: "Founder or project context is incomplete." };
  }
  if (p.interaction_debrief === true) {
    return { skill: "capture-learning", reason: "A real interaction must be captured before more work." };
  }
  if (p.scheduled_call === true) {
    return { skill: "prepare-call", reason: "A scheduled or offered call needs preparation." };
  }
  if (p.follow_up_due === true) {
    return { skill: "handle-follow-up", reason: "A real interaction has a follow-up decision due." };
  }
  if ([a.problem_hypothesis, a.target_person, a.learning_goal].some((value) => value !== "complete")) {
    return { skill: "validate-problem", reason: "The minimum validation context is incomplete." };
  }

  const experimentReviewAt = dated(activity.experiment_review_at);
  if (activity.experiment_review_at && Number.isNaN(experimentReviewAt.valueOf())) {
    return { skill: "sales-setup", reason: "The experiment review date is invalid." };
  }
  if (experimentReviewAt && experimentReviewAt < today) {
    return {
      skill: "sales-next",
      mode: "experiment-review",
      reason: "The active experiment is due for an evidence review before more outreach.",
    };
  }

  if (current.stage === "needs_target") {
    return { skill: "find-conversations", reason: "Select one qualified current conversation for this lane." };
  }
  if (current.stage === "needs_draft") {
    if (!current.target_ref) {
      return { skill: "find-conversations", reason: "The draft lane has no real target reference; source one before drafting." };
    }
    return { skill: "draft-outreach", reason: "A qualified target is ready for one human-reviewed draft." };
  }
  if (current.stage === "awaiting_manual_send") {
    if (!current.target_ref) {
      return { skill: "sales-setup", reason: "The manual-send lane is missing its target reference." };
    }
    return { skill: "record-outreach", reason: "The founder must act manually, then confirm the attempt for logging." };
  }
  return { skill: "sales-setup", reason: "The current outreach lane is missing or invalid." };
}

export function recordManualOutreach(status, { confirmed = false, date = null } = {}) {
  if (!confirmed) throw new Error("Founder confirmation is required before recording outreach.");
  if (status.current_outreach?.stage !== "awaiting_manual_send" || !status.current_outreach?.target_ref) {
    throw new Error("A real target in the awaiting_manual_send lane is required.");
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? "")) {
    throw new Error("A YYYY-MM-DD outreach date is required.");
  }

  return {
    ...status,
    current_outreach: { target_ref: null, stage: "needs_target" },
    activity: { ...(status.activity ?? {}), last_outreach_at: date },
  };
}

export function routeFile(file, today) {
  return routeStatus(parseStatus(fs.readFileSync(file, "utf8")), today);
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  const file = process.argv[2];
  if (!file) {
    console.error("Usage: node scripts/route.mjs <status.yaml>");
    process.exit(2);
  }
  console.log(JSON.stringify(routeFile(file), null, 2));
}
