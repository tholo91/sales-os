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

const pendingActionPriority = [
  "interaction_debrief",
  "inbound_reply",
  "content_reply",
  "scheduled_call",
  "proposal",
  "follow_up",
  "decision_follow_up",
];

const pendingActionSkillDefaults = {
  interaction_debrief: "capture-learning",
  inbound_reply: "handle-reply",
  content_reply: "handle-reply",
  scheduled_call: "prepare-call",
  proposal: "prepare-offer",
  follow_up: "handle-follow-up",
  decision_follow_up: "handle-follow-up",
};

const safeReference = /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/;

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

export function parsePendingActions(text) {
  const actions = [];
  let inActions = false;
  let current = null;

  for (const rawLine of text.split(/\r?\n/)) {
    const trimmed = rawLine.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const indent = rawLine.match(/^\s*/)[0].length;

    if (indent === 0) {
      inActions = /^actions:\s*(?:\[\])?\s*$/.test(trimmed);
      current = null;
      continue;
    }
    if (!inActions) continue;

    const first = trimmed.match(/^-\s+([^:]+):(?:\s*(.*))?$/);
    if (first) {
      current = { [first[1]]: scalar(first[2] ?? "") };
      actions.push(current);
      continue;
    }

    const field = trimmed.match(/^([^:]+):(?:\s*(.*))?$/);
    if (current && field) current[field[1]] = scalar(field[2] ?? "");
  }

  return actions;
}

function pendingActionTime(value) {
  if (!value) return null;
  const text = String(value);
  const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(text) ? `${text}T00:00:00Z` : text);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function routePendingActions(actions, today, { knownTargetRefs = null, knownInteractionRefs = null } = {}) {
  const active = actions
    .filter(({ status }) => status !== "completed" && status !== "cancelled")
    .map((action) => ({ ...action, dueTime: pendingActionTime(action.due_at) }))
    .sort((left, right) => {
      const leftPriority = pendingActionPriority.indexOf(left.type);
      const rightPriority = pendingActionPriority.indexOf(right.type);
      const normalizedLeft = leftPriority === -1 ? pendingActionPriority.length : leftPriority;
      const normalizedRight = rightPriority === -1 ? pendingActionPriority.length : rightPriority;
      return normalizedLeft - normalizedRight
        || (left.dueTime?.valueOf() ?? Number.POSITIVE_INFINITY) - (right.dueTime?.valueOf() ?? Number.POSITIVE_INFINITY)
        || String(left.id ?? "").localeCompare(String(right.id ?? ""));
    });

  const invalid = active.map((action) => {
    const expectedSkill = pendingActionSkillDefaults[action.type];
    const skill = action.skill || expectedSkill;
    const missing = [];
    if (!action.id) missing.push("id");
    if (!action.type || !expectedSkill) missing.push("type");
    if (!skill) missing.push("skill");
    if (expectedSkill && skill !== expectedSkill) missing.push("skill_for_type");
    if (!action.target_ref || !safeReference.test(String(action.target_ref))) missing.push("target_ref");
    if (knownTargetRefs && !knownTargetRefs.has(action.target_ref)) missing.push("contact_record");
    if (!action.source_interaction_ref || !safeReference.test(String(action.source_interaction_ref))) missing.push("source_interaction_ref");
    if (knownInteractionRefs && !knownInteractionRefs.has(action.source_interaction_ref)) missing.push("interaction_record");
    if (!action.dueTime) missing.push("due_at");
    if (!["open", "blocked"].includes(action.status)) missing.push("status");
    if (!action.reason) missing.push("reason");
    if (!action.created_at) missing.push("created_at");
    if (action.status === "blocked" || action.blocked_reason) missing.push(action.blocked_reason || "blocked_reason");
    return { action, missing };
  }).find(({ missing }) => missing.length);

  if (invalid) {
    const { action, missing } = invalid;
    return {
      skill: "sales-setup",
      action_id: action.id ?? null,
      target_ref: action.target_ref ?? null,
      reason: `Pending action ${action.id ?? "without id"} is blocked or incomplete: ${[...new Set(missing)].join(", ")}.`,
    };
  }

  const action = active.find(({ dueTime }) => dueTime <= today);
  if (!action) return null;
  const skill = action.skill || pendingActionSkillDefaults[action.type];

  return {
    skill,
    action_id: action.id,
    target_ref: action.target_ref,
    reason: `Pending action ${action.id} is due.`,
  };
}

export function routeStatus(status, today = new Date(), pendingActions = [], options = {}) {
  if (Number(status.schema_version) !== 3) {
    return { skill: "sales-setup", reason: "Status schema v3 is required; migrate this project before routing." };
  }
  const dated = (value) => value ? new Date(`${value}T23:59:59Z`) : null;
  const reviewAfter = dated(status.review_after);
  if (!reviewAfter || Number.isNaN(reviewAfter.valueOf()) || reviewAfter < today) {
    return { skill: "sales-setup", reason: "Project context is missing a valid freshness date or is stale." };
  }

  const a = status.artifacts ?? {};
  const current = status.current_outreach ?? {};
  const activity = status.activity ?? {};

  if (a.profile !== "complete" || a.project !== "complete") {
    return { skill: "sales-setup", reason: "Founder or project context is incomplete." };
  }
  if (options.pendingActionsMissing) {
    return { skill: "sales-setup", reason: `Pending-actions file ${status.pending_actions_ref ?? "is not referenced"} is missing.` };
  }
  const pendingRoute = routePendingActions(pendingActions, today, options);
  if (pendingRoute) return pendingRoute;

  const commercialMode = status.commercial_mode;
  const supportedCommercialMode = ["service", "saas", "pilot", "membership", "product", "none"].includes(commercialMode);
  const requiredOfferMissing = commercialMode !== "none" && a.offer !== "complete";
  if (a.positioning !== "complete" || !supportedCommercialMode || requiredOfferMissing) {
    return { skill: "shape-positioning", reason: "Commercial positioning, mode, or the required active offer is incomplete." };
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
    if (current.draft_mode === "reddit_dm") {
      return { skill: "reddit-dm", reason: "A verified Reddit target explicitly supports one human-reviewed private message." };
    }
    if (current.draft_mode !== "outreach") {
      return { skill: "sales-setup", reason: "The draft lane is missing a supported draft mode." };
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
    current_outreach: { target_ref: null, stage: "needs_target", draft_mode: "outreach" },
    activity: { ...(status.activity ?? {}), last_outreach_at: date },
  };
}

export function resolvePendingAction(actions, { actionId, status = "completed", resolvedAt } = {}) {
  if (!actionId) throw new Error("A pending action id is required.");
  if (!["completed", "cancelled"].includes(status)) throw new Error("Resolution status must be completed or cancelled.");
  if (!resolvedAt || Number.isNaN(new Date(resolvedAt).valueOf())) throw new Error("A valid resolution timestamp is required.");

  let matches = 0;
  const next = actions.map((action) => {
    if (action.id !== actionId) return { ...action };
    matches += 1;
    if (!["open", "blocked"].includes(action.status)) throw new Error(`Pending action ${actionId} is already resolved.`);
    return { ...action, status, resolved_at: resolvedAt, blocked_reason: null };
  });
  if (matches !== 1) throw new Error(`Expected exactly one pending action with id ${actionId}.`);
  return next;
}

export function routeFile(file, today) {
  const status = parseStatus(fs.readFileSync(file, "utf8"));
  if (Number(status.schema_version) !== 3) return routeStatus(status, today);

  const pendingRef = status.pending_actions_ref;
  const pendingFile = pendingRef ? path.resolve(path.dirname(file), pendingRef) : null;
  const missing = !pendingFile || !fs.existsSync(pendingFile);
  const pendingActions = missing ? [] : parsePendingActions(fs.readFileSync(pendingFile, "utf8"));
  const references = (directory) => {
    if (!fs.existsSync(directory)) return new Set();
    return new Set(fs.readdirSync(directory)
      .filter((entry) => entry.endsWith(".md"))
      .map((entry) => entry.slice(0, -3)));
  };
  return routeStatus(status, today, pendingActions, {
    pendingActionsMissing: missing,
    knownTargetRefs: references(path.resolve(path.dirname(file), "contacts")),
    knownInteractionRefs: references(path.resolve(path.dirname(file), "interactions")),
  });
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
