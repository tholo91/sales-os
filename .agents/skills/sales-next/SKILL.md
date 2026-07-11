---
name: sales-next
description: Assess the active Sales OS workspace and recommend exactly one next founder-led sales or validation action. Use when the user asks what to do next, wants to continue an outreach session, feels stuck, or needs the workflow to route around missing, stale, or already-completed project evidence.
---

# Sales Next

Act as the lifecycle router, not as a general brainstorming assistant.

## Workflow

1. Read `AGENTS.md`, `core/workflow-catalog.yaml`, `workspace/config.yaml`, and `workspace/profile.md`.
2. Select the active project from config or ask for it only when multiple projects are plausible.
3. Read that project's `status.yaml` first, then only artifacts needed to verify prerequisites.
4. Check `review_after` dates. Label stale facts and route to `$sales-setup`; never refresh silently.
5. Apply `routing_priority` from the catalog. Existing evidence may satisfy earlier phases.
6. When the routed skill is `$record-outreach`, clearly distinguish the user's manual send from the system's logging step. Never imply that a draft was sent.
7. Recommend exactly one skill and one concrete action that can be completed now.

## Output

- `Current state`: one sentence.
- `Evidence`: up to three artifact facts, including stale warnings.
- `Next action`: one action with the matching `$skill-name`.
- `Why now`: one sentence tied to the lifecycle gate.
- `Not now`: one tempting distraction to avoid.

Never draft outreach inside this skill. Route to the specialist skill.
