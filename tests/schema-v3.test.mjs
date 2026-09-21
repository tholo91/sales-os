import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { migrateStatusV2ToV3 } from "../scripts/migrate-status-v2-to-v3.mjs";
import { parsePendingActions, parseStatus, resolvePendingAction, routeFile, routeStatus } from "../scripts/route.mjs";

const root = process.cwd();
const fixture = fs.readFileSync(path.join(root, "tests", "fixtures", "v2-pending-events.yaml"), "utf8");
const now = new Date("2026-08-21T12:00:00Z");
const freshProject = { projectReviewAfter: "2026-09-20" };

test("v2 migration adds commercial artifacts and a referenced action queue", () => {
  const result = migrateStatusV2ToV3({ statusText: fixture, now });
  const status = parseStatus(result.statusText);
  const actions = parsePendingActions(result.pendingActionsText);

  assert.equal(result.changed, true);
  assert.equal(status.schema_version, "3");
  assert.equal(status.commercial_mode, null);
  assert.equal(status.artifacts.positioning, "missing");
  assert.equal(status.artifacts.offer, "missing");
  assert.equal(status.current_outreach.draft_mode, "outreach");
  assert.equal(status.pending_actions_ref, "pending-actions.yaml");
  assert.equal(status.review_after, undefined);
  assert.deepEqual(status.pending, {});
  assert.deepEqual(actions.map(({ type }) => type), ["interaction_debrief", "scheduled_call", "follow_up"]);
  assert.ok(actions.every(({ status }) => status === "blocked"));
  assert.ok(actions.every(({ blocked_reason }) => blocked_reason === "missing_target_ref_and_source_interaction_ref"));
  assert.ok(actions.every(({ source_interaction_ref }) => source_interaction_ref === null));
});

test("v3 migration is idempotent", () => {
  const first = migrateStatusV2ToV3({ statusText: fixture, now });
  const second = migrateStatusV2ToV3({ statusText: first.statusText, pendingActionsText: first.pendingActionsText, now });
  assert.equal(second.changed, false);
  assert.equal(second.statusText, first.statusText);
  assert.equal(second.pendingActionsText, first.pendingActionsText);
});

test("blocked migrated action routes to repair without losing its id", () => {
  const migrated = migrateStatusV2ToV3({ statusText: fixture, now });
  const route = routeStatus(parseStatus(migrated.statusText), now, parsePendingActions(migrated.pendingActionsText), freshProject);
  assert.equal(route.skill, "sales-setup");
  assert.equal(route.action_id, "migrated-interaction-debrief");
  assert.match(route.reason, /missing_target_ref/);
});

test("due v3 actions route by type priority, then due time and id", () => {
  const status = parseStatus(fs.readFileSync(path.join(root, "templates", "status.yaml"), "utf8"));
  status.commercial_mode = "product";
  status.artifacts = {
    profile: "complete",
    project: "complete",
    positioning: "complete",
    offer: "complete",
    problem_hypothesis: "complete",
    target_person: "complete",
    learning_goal: "complete",
  };
  const actions = [
    { id: "follow-first", type: "follow_up", skill: "handle-follow-up", target_ref: "contact-a", source_interaction_ref: "interaction-a", status: "open", due_at: "2026-08-20", reason: "Promised follow-up", created_at: "2026-08-19" },
    { id: "reply-later", type: "inbound_reply", skill: "handle-reply", target_ref: "contact-b", source_interaction_ref: "interaction-b", status: "open", due_at: "2026-08-21", reason: "Reply needs an answer", created_at: "2026-08-21" },
  ];

  assert.deepEqual(routeStatus(status, now, actions, freshProject), {
    skill: "handle-reply",
    action_id: "reply-later",
    target_ref: "contact-b",
    reason: "Pending action reply-later is due.",
  });
});

test("future and completed actions do not pre-empt the outreach lane", () => {
  const status = parseStatus(fs.readFileSync(path.join(root, "templates", "status.yaml"), "utf8"));
  status.commercial_mode = "product";
  status.artifacts = {
    profile: "complete",
    project: "complete",
    positioning: "complete",
    offer: "complete",
    problem_hypothesis: "complete",
    target_person: "complete",
    learning_goal: "complete",
  };
  const actions = [
    { id: "done", type: "inbound_reply", skill: "handle-reply", target_ref: "contact-a", source_interaction_ref: "interaction-a", status: "completed", due_at: "2026-08-20", reason: "Answered", created_at: "2026-08-20" },
    { id: "later", type: "proposal", skill: "prepare-offer", target_ref: "contact-b", source_interaction_ref: "interaction-b", status: "open", due_at: "2026-08-22", reason: "Buyer requested an offer", created_at: "2026-08-21" },
  ];

  assert.equal(routeStatus(status, now, actions, freshProject).skill, "find-conversations");
});

test("missing commercial context routes to positioning, while none may skip an offer", () => {
  const status = parseStatus(fs.readFileSync(path.join(root, "templates", "status.yaml"), "utf8"));
  status.artifacts.profile = "complete";
  status.artifacts.project = "complete";
  assert.equal(routeStatus(status, now, [], freshProject).skill, "shape-positioning");

  status.commercial_mode = "none";
  status.artifacts.positioning = "complete";
  status.artifacts.problem_hypothesis = "complete";
  status.artifacts.target_person = "complete";
  status.artifacts.learning_goal = "complete";
  assert.equal(routeStatus(status, now, [], freshProject).skill, "find-conversations");
});

test("contact template exposes the public sales stages without executable due-state duplication", () => {
  const contact = fs.readFileSync(path.join(root, "templates", "contact.md"), "utf8");
  assert.match(contact, /^sales_stage: candidate$/m);
  assert.match(contact, /`candidate`, `contacted`, `replied`, `qualified`, `call`, `demo`, `offer`, `decision`, `won`, `lost`, or `closed`/);
  assert.doesNotMatch(contact, /^due_at:/m);
  assert.doesNotMatch(contact, /^reason:/m);
});

test("all public commercial modes route with a complete offer", () => {
  const status = parseStatus(fs.readFileSync(path.join(root, "templates", "status.yaml"), "utf8"));
  status.artifacts = {
    profile: "complete",
    project: "complete",
    positioning: "complete",
    offer: "complete",
    problem_hypothesis: "complete",
    target_person: "complete",
    learning_goal: "complete",
  };

  for (const mode of ["service", "saas", "pilot", "membership", "product", "none"]) {
    status.commercial_mode = mode;
    assert.equal(routeStatus(status, now, [], freshProject).skill, "find-conversations", mode);
  }
});

test("an incomplete open action is repaired instead of silently skipped", () => {
  const status = parseStatus(fs.readFileSync(path.join(root, "templates", "status.yaml"), "utf8"));
  status.commercial_mode = "none";
  status.artifacts = {
    profile: "complete",
    project: "complete",
    positioning: "complete",
    offer: "missing",
    problem_hypothesis: "complete",
    target_person: "complete",
    learning_goal: "complete",
  };
  const route = routeStatus(status, now, [{
    id: "missing-date",
    type: "follow_up",
    skill: "handle-follow-up",
    target_ref: "contact-a",
    source_interaction_ref: "interaction-a",
    status: "open",
    due_at: null,
    reason: "Promised follow-up",
    created_at: "2026-08-20",
  }], freshProject);

  assert.equal(route.skill, "sales-setup");
  assert.equal(route.action_id, "missing-date");
  assert.match(route.reason, /due_at/);
});

test("an arbitrary or mismatched pending-action skill fails closed", () => {
  const status = parseStatus(fs.readFileSync(path.join(root, "templates", "status.yaml"), "utf8"));
  status.commercial_mode = "none";
  status.artifacts = {
    profile: "complete",
    project: "complete",
    positioning: "complete",
    offer: "missing",
    problem_hypothesis: "complete",
    target_person: "complete",
    learning_goal: "complete",
  };
  const route = routeStatus(status, now, [{
    id: "unsafe-action",
    type: "follow_up",
    skill: "send-email",
    target_ref: "contact-a",
    source_interaction_ref: "interaction-a",
    status: "open",
    due_at: "2026-08-21",
    reason: "Follow up",
    created_at: "2026-08-20",
  }], freshProject);

  assert.equal(route.skill, "sales-setup");
  assert.match(route.reason, /skill_for_type/);
});

test("file routing requires the referenced contact and interaction records", () => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), "sales-os-v3-"));
  try {
    fs.mkdirSync(path.join(temporary, "contacts"));
    fs.mkdirSync(path.join(temporary, "interactions"));
    fs.writeFileSync(path.join(temporary, "interactions", "interaction-a.md"), "# Interaction\n", "utf8");

    const status = fs.readFileSync(path.join(root, "templates", "status.yaml"), "utf8")
      .replace("profile: missing", "profile: complete")
      .replace("project: missing", "project: complete")
      .replace("positioning: missing", "positioning: complete")
      .replace("offer: missing", "offer: complete")
      .replace("problem_hypothesis: missing", "problem_hypothesis: complete")
      .replace("target_person: missing", "target_person: complete")
      .replace("learning_goal: missing", "learning_goal: complete")
      .replace("commercial_mode: null", "commercial_mode: service");
    fs.writeFileSync(path.join(temporary, "status.yaml"), status, "utf8");
    fs.writeFileSync(path.join(temporary, "project.md"), "---\nreview_after: 2026-09-20\n---\n", "utf8");
    fs.writeFileSync(path.join(temporary, "pending-actions.yaml"), [
      "schema_version: 1",
      "project_slug: test",
      "created_at: 2026-08-21",
      "updated_at: 2026-08-21",
      "actions:",
      "  - id: reply-a",
      "    type: inbound_reply",
      "    skill: handle-reply",
      "    target_ref: missing-contact",
      "    source_interaction_ref: interaction-a",
      "    status: open",
      "    due_at: 2026-08-21",
      "    reason: A real reply needs an answer",
      "    created_at: 2026-08-21",
      "    blocked_reason: null",
      "",
    ].join("\n"), "utf8");

    const route = routeFile(path.join(temporary, "status.yaml"), now);
    assert.equal(route.skill, "sales-setup");
    assert.match(route.reason, /contact_record/);
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
});

test("resolving one contact action leaves other contacts untouched", () => {
  const actions = [
    { id: "reply-a", target_ref: "contact-a", status: "open" },
    { id: "follow-b", target_ref: "contact-b", status: "open" },
  ];
  const resolved = resolvePendingAction(actions, {
    actionId: "reply-a",
    status: "completed",
    resolvedAt: "2026-08-21T13:00:00Z",
  });

  assert.equal(resolved[0].status, "completed");
  assert.equal(resolved[0].resolved_at, "2026-08-21T13:00:00Z");
  assert.deepEqual(resolved[1], actions[1]);
  assert.equal(actions[0].status, "open");
});
