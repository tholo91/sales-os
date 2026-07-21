import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { routeStatus, parseStatus, recordManualOutreach } from "../scripts/route.mjs";

const fixtures = path.join(process.cwd(), "tests", "fixtures");
const today = new Date("2026-07-11T12:00:00Z");

for (const [name, expected] of [
  ["fresh", "prepare-call"],
  ["stale", "sales-setup"],
  ["unvalidated", "validate-problem"],
  ["validated", "draft-outreach"],
  ["no-real-target", "find-conversations"],
]) {
  test(`${name} routes to ${expected}`, () => {
    const text = fs.readFileSync(path.join(fixtures, `${name}.yaml`), "utf8");
    assert.equal(routeStatus(parseStatus(text), today).skill, expected);
  });
}

test("a real interaction is debriefed before a scheduled call", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "real-interaction.yaml"), "utf8"));
  assert.equal(routeStatus(status, today).skill, "capture-learning");
});

test("a ready draft must be manually sent and recorded before learning capture", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "draft-ready.yaml"), "utf8"));
  assert.equal(routeStatus(status, today).skill, "record-outreach");
});

test("a recorded outreach attempt opens the next-target lane", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "attempt-recorded.yaml"), "utf8"));
  assert.equal(routeStatus(status, today).skill, "find-conversations");
});

test("a due follow-up pre-empts validation and sourcing", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "unvalidated.yaml"), "utf8"));
  status.pending.follow_up_due = true;
  assert.equal(routeStatus(status, today).skill, "handle-follow-up");
});

test("an overdue experiment routes to an explicit review", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "attempt-recorded.yaml"), "utf8"));
  status.activity.experiment_review_at = "2026-07-01";
  assert.deepEqual(routeStatus(status, today), {
    skill: "sales-next",
    mode: "experiment-review",
    reason: "The active experiment is due for an evidence review before more outreach.",
  });
});

test("manual-send confirmation clears the lane and routes to a new target", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "draft-ready.yaml"), "utf8"));
  const recorded = recordManualOutreach(status, { confirmed: true, date: "2026-07-11" });
  assert.deepEqual(recorded.current_outreach, { target_ref: null, stage: "needs_target" });
  assert.equal(recorded.activity.last_outreach_at, "2026-07-11");
  assert.equal(routeStatus(recorded, today).skill, "find-conversations");
});

test("an unsent draft cannot be recorded", () => {
  const status = parseStatus(fs.readFileSync(path.join(fixtures, "draft-ready.yaml"), "utf8"));
  assert.throws(() => recordManualOutreach(status, { date: "2026-07-11" }), /Founder confirmation/);
});

test("legacy routing fields are absent from every fixture", () => {
  for (const file of fs.readdirSync(fixtures)) {
    const text = fs.readFileSync(path.join(fixtures, file), "utf8");
    assert.doesNotMatch(text, /^next_(skill|action):/m);
    assert.doesNotMatch(text, /^  (real_target|review_ready_draft|outreach_attempt|real_interaction):/m);
  }
});
