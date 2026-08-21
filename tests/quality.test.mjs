import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const skills = [
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

function read(relative) {
  return fs.readFileSync(path.join(root, relative), "utf8");
}

function json(relative) {
  return JSON.parse(read(relative));
}

test("trigger corpus contains three positive and three near-miss prompts per skill", () => {
  const cases = json("tests/evals/trigger-cases.json");
  assert.equal(cases.length, skills.length * 6);
  assert.equal(new Set(cases.map(({ id }) => id)).size, cases.length);
  assert.equal(new Set(cases.map(({ prompt }) => prompt)).size, cases.length);

  for (const skill of skills) {
    const ownCases = cases.filter(({ subject_skill }) => subject_skill === skill);
    assert.equal(ownCases.length, 6, skill);
    assert.equal(ownCases.filter(({ kind }) => kind === "positive").length, 3, skill);
    assert.equal(ownCases.filter(({ kind }) => kind === "near_miss").length, 3, skill);
    for (const entry of ownCases) {
      assert.ok(skills.includes(entry.expected_skill), entry.id);
      if (entry.kind === "positive") assert.equal(entry.expected_skill, skill, entry.id);
      if (entry.kind === "near_miss") assert.notEqual(entry.expected_skill, skill, entry.id);
    }
  }
});

test("sales copilot end-to-end corpus covers product, community, free, group, and service paths", () => {
  const cases = json("tests/evals/sales-copilot-cases.json");
  assert.equal(cases.length, 5);
  assert.deepEqual(
    new Set(cases.map(({ project }) => project)),
    new Set(["heyspeak", "nomadspots", "brief-nach-berlin", "spiesser", "synthetic-service"]),
  );
  for (const entry of cases) {
    assert.equal(entry.expected_entrypoint, "sales-copilot", entry.id);
    assert.ok(entry.phases.length >= 4, entry.id);
    assert.ok(entry.hard_gates.includes("manual_external_action_only"), entry.id);
  }
});

test("copilot-facing skills share the four-part handoff contract", () => {
  for (const skill of ["sales-copilot", "shape-positioning", "draft-public-post", "handle-reply", "prepare-call", "prepare-offer"]) {
    const text = read(`.agents/skills/${skill}/SKILL.md`);
    for (const heading of ["Nächste Aktion", "Fertiges Asset", "Dein manueller Schritt", "Sag mir danach"]) {
      assert.match(text, new RegExp(heading), `${skill}: ${heading}`);
    }
  }
});

test("golden copilot outputs keep one ordered wrapper across routed specialist assets", () => {
  const cases = json("tests/evals/copilot-golden-outputs.json");
  assert.equal(cases.length, 5);
  const headings = ["Nächste Aktion:", "Fertiges Asset:", "Dein manueller Schritt:", "Sag mir danach:"];
  for (const entry of cases) {
    const positions = headings.map((heading) => entry.output.indexOf(heading));
    assert.ok(positions.every((position) => position >= 0), entry.id);
    assert.deepEqual([...positions].sort((left, right) => left - right), positions, entry.id);
    for (const heading of headings) assert.equal(entry.output.split(heading).length - 1, 1, `${entry.id}: ${heading}`);
    assert.doesNotMatch(entry.output, /\$(sales|draft|handle|prepare|capture|find|shape)-/i, entry.id);
    assert.match(entry.output, /selbst|manuell|Nenne|Bestätige/, entry.id);
  }
});

test("output corpus covers the eight hard acceptance scenarios", () => {
  const cases = json("tests/evals/output-cases.json");
  assert.equal(cases.length, 8);
  assert.deepEqual(new Set(cases.map(({ project }) => project)), new Set(["heyspeak", "nomadspots"]));
  for (const entry of cases) {
    assert.ok(entry.hard_gates.length >= 4, entry.id);
    assert.ok(skills.includes(entry.expected_skill), entry.id);
  }
  for (const id of [
    "heyspeak-reddit-de",
    "nomadspots-linkedin-en",
    "nomadspots-linkedin-sie",
    "placeholder-refusal",
    "german-cold-email-risk",
    "silence-follow-up",
    "overdue-experiment",
    "post-send-next-target",
  ]) {
    assert.ok(cases.some((entry) => entry.id === id), id);
  }
});

test("draft contract enforces brief evidence-first output", () => {
  const draft = read(".agents/skills/draft-outreach/SKILL.md");
  assert.match(draft, /Return exactly one draft first/);
  assert.match(draft, /Add `Risk:` only when a real risk exists/);
  assert.match(draft, /alternative only when explicitly requested/);
  assert.match(draft, /language-evidence packet/);
  assert.doesNotMatch(draft, /lower-pressure version/i);
});

test("channel guidance has distinct native shapes", () => {
  const reddit = read("knowledge/channels/reddit.md");
  assert.match(reddit, /no greeting or sign-off by default/i);
  assert.match(reddit, /Give the useful answer or honest reaction first/);
  assert.match(reddit, /Disclose the founder or product affiliation/);
  assert.match(reddit, /Inbound cold DM/);
  assert.match(reddit, /Default to stopping on Reddit/);

  const linkedin = read("knowledge/channels/linkedin.md");
  assert.match(linkedin, /true identity/);
  assert.match(linkedin, /Do not pitch in the invitation note/);
  assert.match(linkedin, /match the founder's own channel and language evidence/);

  const slack = read("knowledge/channels/slack.md");
  assert.match(slack, /No unsolicited DMs/);
  assert.match(slack, /exact workspace's rules and recent live norms/);

  const email = read("knowledge/channels/email.md");
  assert.match(email, /Before writing, verify the relationship/);
  assert.match(email, /do not solve it with softer wording/);
});

test("Reddit DM guidance has a narrow gate and a focused eval case", () => {
  const skill = read(".agents/skills/reddit-dm/SKILL.md");
  assert.match(skill, /real target/);
  assert.match(skill, /Prefer a helpful public reply first/);
  assert.match(skill, /Never reuse one message/);
  assert.match(skill, /Return exactly one draft first/);
  assert.match(skill, /Silence is not a reason/);

  const cases = json("tests/evals/reddit-dm-cases.json");
  assert.equal(cases.length, 1);
  assert.equal(cases[0].expected_skill, "reddit-dm");
  assert.ok(cases[0].hard_gates.includes("follow_up_stops_after_silence"));
});

test("all skill procedures are canonical in core steps", () => {
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
  for (const step of expectedSteps) assert.ok(fs.existsSync(path.join(root, "core", "steps", `${step}.md`)), step);
  for (const skill of skills) assert.doesNotMatch(read(`.agents/skills/${skill}/SKILL.md`), /^## Workflow$/m, skill);
});

test("workspace state template uses a v3 acquisition lane and referenced action queue", () => {
  const status = read("templates/status.yaml");
  assert.match(status, /^schema_version: 3$/m);
  assert.match(status, /^commercial_mode: null$/m);
  assert.match(status, /^  positioning: missing$/m);
  assert.match(status, /^  offer: missing$/m);
  assert.match(status, /^current_outreach:$/m);
  assert.match(status, /^  stage: needs_target$/m);
  assert.match(status, /^  draft_mode: outreach$/m);
  assert.match(status, /^pending_actions_ref: pending-actions.yaml$/m);
  assert.match(status, /^activity:$/m);
  assert.doesNotMatch(status, /^pending:$/m);
  assert.doesNotMatch(status, /^next_(skill|action):/m);
  assert.doesNotMatch(status, /^  (real_target|review_ready_draft|outreach_attempt|real_interaction):/m);
});

test("workflow catalog declares the router priority in executable order", () => {
  const catalog = read("core/workflow-catalog.yaml");
  const priorities = [
    "stale_or_missing_context",
    "invalid_or_blocked_pending_action",
    "due_pending_action",
    "missing_positioning_or_required_offer",
    "missing_validation_minimum",
    "overdue_experiment_review",
    "current_outreach_lane",
  ];
  const positions = priorities.map((priority) => catalog.indexOf(`  - ${priority}`));
  assert.ok(positions.every((position) => position >= 0));
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);
});

test("sales copilot is the portable default and browser prefill stops before submit", () => {
  const catalog = read("core/workflow-catalog.yaml");
  const agents = read("AGENTS.md");
  const portability = read("docs/portability.md");
  assert.match(catalog, /^default_skill: sales-copilot$/m);
  assert.match(agents, /prefill a reviewed draft only after an explicit request/);
  assert.match(portability, /stop before any submission/);
});

test("copilot wrapper explicitly takes precedence over direct specialist presentation contracts", () => {
  const copilot = read(".agents/skills/sales-copilot/SKILL.md");
  assert.match(copilot, /takes precedence over the selected specialist's direct-invocation presentation contract/);
  assert.match(copilot, /do not leak a skill name, `Why:` block, or a second output shape/);
});

test("no private workspace content is tracked", () => {
  const tracked = execFileSync("git", ["ls-files", "workspace"], { cwd: root, encoding: "utf8" }).trim();
  assert.equal(tracked, "");
});

test("before and after examples are explicitly synthetic and draft-first", () => {
  const examples = read("examples/output-quality-before-after.md");
  assert.match(examples, /synthetic contexts/);
  assert.match(examples, /## HeySpeak/);
  assert.match(examples, /## NomadSpots/);
  assert.equal((examples.match(/^### After$/gm) ?? []).length, 2);
});
