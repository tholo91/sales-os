import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { routeStatus, parseStatus, recordManualOutreach } from "../scripts/route.mjs";

const fixtures = path.join(process.cwd(), "tests", "fixtures");
const today = new Date("2026-07-11T12:00:00Z");
const freshProject = { projectReviewAfter: "2026-08-10" };
const staleProject = { projectReviewAfter: "2026-07-01" };
const action = (type, skill, id = type) => ({
  id,
  type,
  skill,
  target_ref: "contact-001",
  source_interaction_ref: "interaction-001",
  status: "open",
  due_at: "2026-07-11T00:00:00Z",
  reason: "A real interaction created this next action.",
  created_at: "2026-07-10",
  blocked_reason: null,
});

for (const [name, expected] of [
  ["fresh", "prepare-call"],
  ["stale", "sales-setup"],
  ["unvalidated", "validate-problem"],
  ["validated", "draft-outreach"],
  ["no-real-target", "find-conversations"],
]) {
  test(`${name} routes to ${expected}`, () => {
    const text = fs.readFileSync(path.join(fixtures, `${name}.yaml`), "utf8");
    const pendingActions = name === "fresh" ? [action("scheduled_call", "prepare-call")] : [];
    const project = name === "stale" ? staleProject : freshProject;
    assert.equal(routeStatus(parseStatus(text), today, pendingActions, project).skill, expected);
  });
}

test("a real interaction is debriefed before a scheduled call", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "real-interaction.yaml"), "utf8"));
  const pendingActions = [
    action("scheduled_call", "prepare-call"),
    action("interaction_debrief", "capture-learning"),
  ];
  assert.equal(routeStatus(status, today, pendingActions, freshProject).skill, "capture-learning");
});

test("project context becomes stale on its review_after date", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "validated.yaml"), "utf8"));
  assert.deepEqual(routeStatus(status, today, [], { projectReviewAfter: "2026-07-11" }), {
    skill: "sales-setup",
    reason: "Project context review is due since 2026-07-11; ask whether to refresh it before producing new external sales copy.",
  });
});

test("a ready draft must be manually sent and recorded before learning capture", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "draft-ready.yaml"), "utf8"));
  assert.equal(routeStatus(status, today, [], freshProject).skill, "record-outreach");
});

test("an invited Reddit private-message lane routes to reddit-dm", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "validated.yaml"), "utf8"));
  status.current_outreach.draft_mode = "reddit_dm";
  assert.equal(routeStatus(status, today, [], freshProject).skill, "reddit-dm");
});

test("an unsupported draft mode fails closed", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "validated.yaml"), "utf8"));
  status.current_outreach.draft_mode = "instagram_dm";
  assert.equal(routeStatus(status, today, [], freshProject).skill, "sales-setup");
});

test("a recorded outreach attempt opens the next-target lane", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "attempt-recorded.yaml"), "utf8"));
  assert.equal(routeStatus(status, today, [], freshProject).skill, "find-conversations");
});

test("a due follow-up pre-empts validation and sourcing", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "unvalidated.yaml"), "utf8"));
  assert.equal(routeStatus(status, today, [action("follow_up", "handle-follow-up")], freshProject).skill, "handle-follow-up");
});

test("an overdue experiment routes to an explicit review", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "attempt-recorded.yaml"), "utf8"));
  status.activity.experiment_review_at = "2026-07-01";
  assert.deepEqual(routeStatus(status, today, [], freshProject), {
    skill: "sales-next",
    mode: "experiment-review",
    reason: "The active experiment is due for an evidence review before more outreach.",
  });
});

test("manual-send confirmation clears the lane and routes to a new target", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "draft-ready.yaml"), "utf8"));
  const recorded = recordManualOutreach(status, { confirmed: true, date: "2026-07-11" });
  assert.deepEqual(recorded.current_outreach, { target_ref: null, stage: "needs_target", draft_mode: "outreach" });
  assert.equal(recorded.activity.last_outreach_at, "2026-07-11");
  assert.equal(routeStatus(recorded, today, [], freshProject).skill, "find-conversations");
});

test("an unsent draft cannot be recorded", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "draft-ready.yaml"), "utf8"));
  assert.throws(() => recordManualOutreach(status, { date: "2026-07-11" }), /Founder confirmation/);
});

test("legacy routing fields are absent from v3 fixtures", () => {
  for (const file of fs.readdirSync(fixtures)) {
    if (file === "v2-pending-events.yaml") continue;
    const text = fs.readFileSync(path.join(fixtures, file), "utf8");
    assert.match(text, /^schema_version: 3$/m);
    assert.doesNotMatch(text, /^next_(skill|action):/m);
    assert.doesNotMatch(text, /^  (real_target|review_ready_draft|outreach_attempt|real_interaction):/m);
    assert.doesNotMatch(text, /^pending:$/m);
    assert.doesNotMatch(text, /^review_after:/m);
  }
});

test("v2 status routes only to explicit migration", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "v2-pending-events.yaml"), "utf8"));
  assert.deepEqual(routeStatus(status, today), {
    skill: "sales-setup",
    reason: "Status schema v3 is required; migrate this project before routing.",
  });
});
