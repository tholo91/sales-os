import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const skills = [
  "sales-next",
  "sales-setup",
  "validate-problem",
  "find-conversations",
  "draft-outreach",
  "record-outreach",
  "handle-follow-up",
  "prepare-call",
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
  assert.equal(cases.length, 54);
  assert.equal(new Set(cases.map(({ id }) => id)).size, 54);
  assert.equal(new Set(cases.map(({ prompt }) => prompt)).size, 54);

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

  const linkedin = read("knowledge/channels/linkedin.md");
  assert.match(linkedin, /true identity/);
  assert.match(linkedin, /Do not pitch in the invitation note/);
  assert.match(linkedin, /match Thomas's own channel and language evidence/);

  const slack = read("knowledge/channels/slack.md");
  assert.match(slack, /No unsolicited DMs/);
  assert.match(slack, /exact workspace's rules and recent live norms/);

  const email = read("knowledge/channels/email.md");
  assert.match(email, /Before writing, verify the relationship/);
  assert.match(email, /do not solve it with softer wording/);
});

test("all skill procedures are canonical in core steps", () => {
  const expectedSteps = ["route", "setup", "validate", "source", "engage", "record", "continue", "call", "learn"];
  for (const step of expectedSteps) assert.ok(fs.existsSync(path.join(root, "core", "steps", `${step}.md`)), step);
  for (const skill of skills) assert.doesNotMatch(read(`.agents/skills/${skill}/SKILL.md`), /^## Workflow$/m, skill);
});

test("workspace state template uses lanes and no derived routing fields", () => {
  const status = read("templates/status.yaml");
  assert.match(status, /^schema_version: 2$/m);
  assert.match(status, /^current_outreach:$/m);
  assert.match(status, /^  stage: needs_target$/m);
  assert.match(status, /^activity:$/m);
  assert.doesNotMatch(status, /^next_(skill|action):/m);
  assert.doesNotMatch(status, /^  (real_target|review_ready_draft|outreach_attempt|real_interaction):/m);
});

test("workflow catalog declares the router priority in executable order", () => {
  const catalog = read("core/workflow-catalog.yaml");
  const priorities = [
    "stale_or_missing_context",
    "unlogged_interaction",
    "scheduled_call",
    "due_follow_up",
    "missing_validation_minimum",
    "overdue_experiment_review",
    "current_outreach_lane",
  ];
  const positions = priorities.map((priority) => catalog.indexOf(`  - ${priority}`));
  assert.ok(positions.every((position) => position >= 0));
  assert.deepEqual([...positions].sort((a, b) => a - b), positions);
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
