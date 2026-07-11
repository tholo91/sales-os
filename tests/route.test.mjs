import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { routeStatus, parseStatus } from "../scripts/route.mjs";

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
