import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parsePendingActions, parseStatus } from "./route.mjs";

const migratedActionSkills = {
  interaction_debrief: "capture-learning",
  scheduled_call: "prepare-call",
  follow_up: "handle-follow-up",
};

function topLevelSection(lines, name) {
  const start = lines.findIndex((line) => line === `${name}:`);
  if (start === -1) return null;
  let end = start + 1;
  while (end < lines.length && (lines[end].startsWith(" ") || !lines[end].trim())) end += 1;
  return { start, end };
}

function migrateStatusText(text, pendingFileName) {
  const lines = text.replace(/\r\n/g, "\n").split("\n").filter((line) => !/^review_after:/.test(line));
  const schema = lines.findIndex((line) => /^schema_version:\s*2\s*$/.test(line));
  if (schema === -1) throw new Error("Expected a schema_version 2 status file.");
  lines[schema] = "schema_version: 3";
  if (!lines.some((line) => /^commercial_mode:/.test(line))) {
    const projectSlug = lines.findIndex((line) => /^project_slug:/.test(line));
    lines.splice(projectSlug === -1 ? schema + 1 : projectSlug + 1, 0, "commercial_mode: null");
  }

  const artifacts = topLevelSection(lines, "artifacts");
  if (!artifacts) throw new Error("The v2 status file has no artifacts section.");
  const artifactLines = lines.slice(artifacts.start + 1, artifacts.end);
  const additions = [];
  if (!artifactLines.some((line) => /^\s+positioning:/.test(line))) additions.push("  positioning: missing");
  if (!artifactLines.some((line) => /^\s+offer:/.test(line))) additions.push("  offer: missing");
  if (additions.length) {
    const projectOffset = artifactLines.findIndex((line) => /^\s+project:/.test(line));
    const insertAt = projectOffset === -1 ? artifacts.end : artifacts.start + 2 + projectOffset;
    lines.splice(insertAt, 0, ...additions);
  }

  const pending = topLevelSection(lines, "pending");
  if (pending) lines.splice(pending.start, pending.end - pending.start);

  const currentOutreach = topLevelSection(lines, "current_outreach");
  if (!currentOutreach) throw new Error("The v2 status file has no current_outreach section.");
  if (!lines.slice(currentOutreach.start + 1, currentOutreach.end).some((line) => /^\s+draft_mode:/.test(line))) {
    lines.splice(currentOutreach.end, 0, "  draft_mode: outreach");
  }

  if (!lines.some((line) => /^pending_actions_ref:/.test(line))) {
    const activity = lines.findIndex((line) => line === "activity:");
    if (activity === -1) lines.push(`pending_actions_ref: ${pendingFileName}`);
    else lines.splice(activity, 0, `pending_actions_ref: ${pendingFileName}`);
  }

  return `${lines.join("\n").replace(/\n+$/, "")}\n`;
}

function pendingActionsBase(projectSlug, today) {
  return [
    "schema_version: 1",
    `project_slug: ${projectSlug || "null"}`,
    `created_at: ${today}`,
    `updated_at: ${today}`,
    "actions: []",
    "",
  ].join("\n");
}

function appendPendingActions(text, actions, today) {
  if (!actions.length) return text;
  const existingIds = new Set(parsePendingActions(text).map(({ id }) => id));
  const missing = actions.filter(({ id }) => !existingIds.has(id));
  if (!missing.length) return text;

  const blocks = missing.flatMap((action) => [
    `  - id: ${action.id}`,
    `    type: ${action.type}`,
    `    skill: ${action.skill}`,
    "    target_ref: null",
    "    source_interaction_ref: null",
    "    status: blocked",
    `    due_at: ${today}T00:00:00Z`,
    `    reason: Migrated from status.yaml pending.${action.legacyField}`,
    `    created_at: ${today}`,
    "    blocked_reason: missing_target_ref_and_source_interaction_ref",
  ]);

  const normalized = text.replace(/\r\n/g, "\n");
  if (/^actions:\s*\[\]\s*$/m.test(normalized)) {
    return `${normalized.replace(/^actions:\s*\[\]\s*$/m, ["actions:", ...blocks].join("\n")).replace(/\n+$/, "")}\n`;
  }
  if (!/^actions:\s*$/m.test(normalized)) {
    return `${normalized.replace(/\n+$/, "")}\nactions:\n${blocks.join("\n")}\n`;
  }
  return `${normalized.replace(/\n+$/, "")}\n${blocks.join("\n")}\n`;
}

export function migrateStatusV2ToV3({ statusText, pendingActionsText = null, pendingFileName = "pending-actions.yaml", now = new Date() }) {
  const status = parseStatus(statusText);
  const version = Number(status.schema_version);
  if (version === 3) {
    return { changed: false, statusText, pendingActionsText, createdActions: [] };
  }
  if (version !== 2) throw new Error(`Unsupported status schema version: ${status.schema_version ?? "missing"}.`);

  const today = now.toISOString().slice(0, 10);
  const legacy = status.pending ?? {};
  const createdActions = [
    ["interaction_debrief", legacy.interaction_debrief],
    ["scheduled_call", legacy.scheduled_call],
    ["follow_up", legacy.follow_up_due],
  ].filter(([, active]) => active === true).map(([type]) => ({
    id: `migrated-${type.replaceAll("_", "-")}`,
    type,
    skill: migratedActionSkills[type],
    legacyField: type === "follow_up" ? "follow_up_due" : type,
  }));

  const base = pendingActionsText ?? pendingActionsBase(status.project_slug, today);
  return {
    changed: true,
    statusText: migrateStatusText(statusText, pendingFileName),
    pendingActionsText: appendPendingActions(base, createdActions, today),
    createdActions: createdActions.map(({ id }) => id),
  };
}

function writeAtomic(file, content) {
  const temporary = path.join(path.dirname(file), `.${path.basename(file)}.tmp-${process.pid}`);
  fs.writeFileSync(temporary, content, "utf8");
  fs.renameSync(temporary, file);
}

export function migrateStatusFile(statusFile, { pendingFile = null, write = false, now = new Date() } = {}) {
  const resolvedStatus = path.resolve(statusFile);
  const resolvedPending = path.resolve(pendingFile ?? path.join(path.dirname(resolvedStatus), "pending-actions.yaml"));
  if (resolvedPending === resolvedStatus) throw new Error("Status and pending-actions files must be different paths.");
  const statusText = fs.readFileSync(resolvedStatus, "utf8");
  const pendingActionsText = fs.existsSync(resolvedPending) ? fs.readFileSync(resolvedPending, "utf8") : null;
  const result = migrateStatusV2ToV3({
    statusText,
    pendingActionsText,
    pendingFileName: path.relative(path.dirname(resolvedStatus), resolvedPending),
    now,
  });

  if (write && result.changed) {
    const backup = `${resolvedStatus}.v2.bak`;
    if (!fs.existsSync(backup)) fs.copyFileSync(resolvedStatus, backup, fs.constants.COPYFILE_EXCL);
    if (pendingActionsText !== null) {
      const pendingBackup = `${resolvedPending}.v2.bak`;
      if (!fs.existsSync(pendingBackup)) fs.copyFileSync(resolvedPending, pendingBackup, fs.constants.COPYFILE_EXCL);
    }
    writeAtomic(resolvedPending, result.pendingActionsText);
    writeAtomic(resolvedStatus, result.statusText);
  }

  return { ...result, statusFile: resolvedStatus, pendingFile: resolvedPending, wrote: write && result.changed };
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  const positional = process.argv.slice(2).filter((argument) => argument !== "--write");
  if (!positional[0]) {
    console.error("Usage: node scripts/migrate-status-v2-to-v3.mjs <status.yaml> [pending-actions.yaml] [--write]");
    process.exit(2);
  }
  try {
    const result = migrateStatusFile(positional[0], { pendingFile: positional[1], write: process.argv.includes("--write") });
    console.log(JSON.stringify({
      changed: result.changed,
      wrote: result.wrote,
      statusFile: result.statusFile,
      pendingFile: result.pendingFile,
      createdActions: result.createdActions,
    }, null, 2));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
