---
name: sales-next
description: Route the active Sales OS project to exactly one next founder-led validation or outreach action. Use when the founder asks what to do next, wants to continue, feels stuck, needs an overdue experiment review, or needs the lifecycle checked. Do not use it to draft a message, find a target, or log a known interaction directly.
---

# Sales Next

Route; do not brainstorm or perform the specialist work.

## Gate

Require an active project or one unambiguous project choice. Read status before other project artifacts. Never infer that an external action or reply occurred.

## Required references

- `core/workflow-catalog.yaml`
- `core/steps/route.md`
- `workspace/config.yaml`
- The active project's `status.yaml`

Load other artifacts only to verify the selected gate. In `experiment-review` mode, compare dated interaction records with the active experiment's hypothesis and stop condition, make one continue/change/stop decision, set a new review date, then route the updated status once more. State which dated records were checked; distinguish zero logged interactions from unavailable evidence.

## Safety boundary

Never draft, send, post, or imply delivery. Waiting on one contact does not stop a `needs_target` lane.

## Output contract

Return `Next: $skill-name — <one concrete action>` first. Add one sentence of state evidence and one sentence explaining why this gate wins. In experiment-review mode, return the evidence and decision first, then the next specialist action from the updated route. Mention a distraction only when it is a real risk.
