---
name: sales-next
description: Route the active Sales OS project to exactly one next founder-led validation or outreach action. Use when the founder asks what to do next, wants to continue, feels stuck, needs an overdue experiment review, or needs the lifecycle checked; also to plan the week (sweep of open commitments, outreach batch, scoreboard) or run the weekly review. Do not use it to draft a message, find a target, or log a known interaction directly.
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
- `core/steps/pipeline.md` and `templates/pipeline.md` for the weekly modes

Load other artifacts only to verify the selected gate.

## Modes

- `lifecycle` (default): route through `core/steps/route.md`.
- `experiment-review`: see below.
- `weekly-start`: `core/steps/pipeline.md`, section `## Weekly start`: experiment review once if overdue, then reset its date; sweep open commitments into actions; fill the batch through `find-conversations` batch mode; plan content slots; write the board. Not when the founder only reports a reply or result; record that first.
- `weekly-review`: `core/steps/pipeline.md`, section `## Weekly review`: count first touches, substantive replies and leads (dated commitments only) per persona and angle; decide one change for next week.

In `experiment-review` mode, compare dated interaction records with the active experiment's hypothesis and stop condition, make one continue/change/stop decision with the zero-evidence rule and review date from `core/steps/pipeline.md` (`## Weekly start`, step 2), then route the updated status once more. State which dated records were checked; distinguish zero logged interactions from unavailable evidence.

## Safety boundary

Never draft in lifecycle mode; through `sales-copilot` the first action's specialist drafts the asset (`core/steps/pipeline.md` step 8). Never send, post, or imply delivery. Board and pending-action writes are internal bookkeeping from recorded evidence only. Waiting on one contact does not stop a `needs_target` lane.

## Output contract

In lifecycle mode, return `Next: $skill-name — <one concrete action>` first. Add one sentence of state evidence and one sentence explaining why this gate wins. In experiment-review mode, return the evidence and decision first, then the next specialist action from the updated route. Mention a distraction only when it is a real risk.

In weekly-start mode, return the Scoreboard line, one sweep line, then `Next:`. In weekly-review mode, return a compact persona × angle count, one change for next week, then `Next:`. When invoked through `sales-copilot`, the copilot wrapper applies.
