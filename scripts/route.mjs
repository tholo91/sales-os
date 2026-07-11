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
  const status = { artifacts: {}, pending: {} };
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
    } else if (section === "artifacts" || section === "pending") {
      status[section][key] = scalar(rawValue);
    }
  }

  return status;
}

export function routeStatus(status, today = new Date()) {
  const reviewAfter = status.review_after ? new Date(`${status.review_after}T23:59:59Z`) : null;
  if (!reviewAfter || Number.isNaN(reviewAfter.valueOf()) || reviewAfter < today) {
    return { skill: "sales-setup", reason: "Project context is missing a valid freshness date or is stale." };
  }

  const a = status.artifacts ?? {};
  const p = status.pending ?? {};

  if (a.profile !== "complete" || a.project !== "complete") {
    return { skill: "sales-setup", reason: "Founder or project context is incomplete." };
  }
  if (a.real_interaction === "complete" && a.interaction_debrief !== "complete") {
    return { skill: "capture-learning", reason: "A real interaction must be captured before more work." };
  }
  if (p.scheduled_call === true) {
    return { skill: "prepare-call", reason: "A scheduled or offered call needs preparation." };
  }
  if ([a.problem_hypothesis, a.target_person, a.learning_goal].some((value) => value !== "complete")) {
    return { skill: "validate-problem", reason: "The minimum validation context is incomplete." };
  }
  if (a.real_target !== "complete") {
    return { skill: "find-conversations", reason: "A real person or discussion is required before drafting." };
  }
  if (p.follow_up_due === true) {
    return { skill: "handle-follow-up", reason: "A real interaction has a follow-up decision due." };
  }
  if (a.review_ready_draft !== "complete") {
    return { skill: "draft-outreach", reason: "A qualified real target is ready for a human-reviewed draft." };
  }
  if (a.outreach_attempt !== "complete") {
    return { skill: "record-outreach", reason: "The draft is ready; send it manually if you approve, then record the attempt and its date." };
  }
  return { skill: "capture-learning", reason: "Record the outcome before selecting another action." };
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
