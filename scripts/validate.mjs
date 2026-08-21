import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const expectedSkills = [
  "sales-copilot",
  "sales-next",
  "sales-setup",
  "shape-positioning",
  "validate-problem",
  "find-conversations",
  "draft-outreach",
  "draft-public-post",
  "reddit-dm",
  "record-outreach",
  "handle-reply",
  "handle-follow-up",
  "prepare-call",
  "prepare-offer",
  "capture-learning",
];
const metadataFields = [
  "source_url",
  "publisher",
  "retrieved_at",
  "last_verified_at",
  "jurisdiction",
  "license_or_terms",
  "confidence",
  "review_after",
];
const artifactFields = [
  "schema_version",
  "created_at",
  "updated_at",
  "last_verified_at",
  "review_after",
  "source_repo",
  "source_files",
  "confidence",
];
const expectedSteps = [
  "copilot",
  "route",
  "setup",
  "position",
  "validate",
  "source",
  "engage",
  "publish",
  "record",
  "reply",
  "continue",
  "call",
  "offer",
  "learn",
];

function read(relative) {
  const file = path.join(root, relative);
  if (!fs.existsSync(file)) {
    errors.push(`Missing ${relative}`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
}

function frontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split("\n")) {
    const field = line.match(/^([a-zA-Z0-9_-]+):(?:\s*(.*))?$/);
    if (field) data[field[1]] = field[2] ?? "";
  }
  return data;
}

for (const name of expectedSkills) {
  const relative = `.agents/skills/${name}/SKILL.md`;
  const skillRoot = path.join(root, ".agents", "skills", name);
  const text = read(relative);
  const meta = frontmatter(text);
  if (!meta) errors.push(`${relative}: missing YAML frontmatter`);
  if (meta?.name !== name) errors.push(`${relative}: name must match directory`);
  if (!meta?.description) errors.push(`${relative}: description is required`);
  if (/\[TODO|TODO:/.test(text)) errors.push(`${relative}: unresolved TODO`);
  if (text.split("\n").length >= 500) errors.push(`${relative}: must stay below 500 lines`);
  if (/^## Workflow$/m.test(text)) errors.push(`${relative}: numbered procedure belongs in core/steps`);
  for (const entry of fs.readdirSync(skillRoot)) {
    if (entry.startsWith("SKILL") && entry !== "SKILL.md") {
      errors.push(`${relative}: unexpected conflicting entry ${entry}`);
    }
  }
  const openai = read(`.agents/skills/${name}/agents/openai.yaml`);
  if (!openai.includes(`$${name}`)) errors.push(`${relative}: openai.yaml default_prompt must invoke $${name}`);
}

for (const step of expectedSteps) read(`core/steps/${step}.md`);

const knowledgeRoot = path.join(root, "knowledge");
for (const file of fs.readdirSync(knowledgeRoot, { recursive: true })) {
  if (!file.endsWith(".md")) continue;
  if (file.startsWith(path.join("sources", "notebooklm")) && !file.endsWith("manifest.md")) continue;
  const relative = path.join("knowledge", file);
  const meta = frontmatter(read(relative));
  if (!meta) {
    errors.push(`${relative}: missing provenance frontmatter`);
    continue;
  }
  for (const field of metadataFields) {
    if (!(field in meta)) errors.push(`${relative}: missing ${field}`);
  }
}

for (const name of ["profile.md", "project.md", "positioning.md", "offer.md", "validation.md", "icp.md", "evidence.md", "contacts.md", "contact.md", "experiments.md", "interaction.md", "voice.md"]) {
  const relative = `templates/${name}`;
  const meta = frontmatter(read(relative));
  if (!meta) {
    errors.push(`${relative}: missing artifact frontmatter`);
    continue;
  }
  for (const field of artifactFields) {
    if (!(field in meta)) errors.push(`${relative}: missing ${field}`);
  }
}

const agents = read("AGENTS.md");
for (const guardrail of ["Do not send", "Do not finalize outreach", "stale", "workspace/"]) {
  if (!agents.includes(guardrail)) errors.push(`AGENTS.md: missing guardrail '${guardrail}'`);
}

const gitignore = read(".gitignore");
if (!gitignore.split(/\r?\n/).includes("workspace/")) errors.push(".gitignore: workspace/ must be private");

const catalog = read("core/workflow-catalog.yaml");
for (const skill of expectedSkills) {
  if (!catalog.includes(skill)) errors.push(`workflow catalog does not reference ${skill}`);
}

const status = read("templates/status.yaml");
for (const field of ["schema_version: 3", "commercial_mode: null", "positioning: missing", "offer: missing", "current_outreach:", "draft_mode: outreach", "pending_actions_ref: pending-actions.yaml", "activity:", "experiment_review_at:", "last_outreach_at:"]) {
  if (!status.includes(field)) errors.push(`templates/status.yaml: missing ${field}`);
}
for (const legacy of ["next_skill:", "next_action:", "real_target:", "review_ready_draft:", "outreach_attempt:", "pending:"]) {
  if (status.includes(legacy)) errors.push(`templates/status.yaml: legacy field ${legacy}`);
}

const pendingActions = read("templates/pending-actions.yaml");
for (const field of ["schema_version: 1", "project_slug:", "actions: []", "only executable", "target_ref", "source_interaction_ref", "blocked_reason"]) {
  if (!pendingActions.includes(field)) errors.push(`templates/pending-actions.yaml: missing ${field}`);
}

read("knowledge/foundations/audience-language.md");
read("tests/evals/trigger-cases.json");
read("tests/evals/output-cases.json");
read("tests/evals/sales-copilot-cases.json");
read("tests/evals/copilot-golden-outputs.json");

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${expectedSkills.length} skills, ${metadataFields.length} knowledge metadata fields, templates, adapters, and guardrails.`);
