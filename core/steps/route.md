# Lifecycle routing step

1. Read the active project's `status.yaml` before loading other artifacts.
2. Route stale or invalid context to `sales-setup`.
3. Route an unlogged interaction debrief to `capture-learning`.
4. Route a scheduled call to `prepare-call`.
5. Route a due follow-up to `handle-follow-up`.
6. Route an incomplete problem hypothesis, target-person hypothesis, or learning goal to `validate-problem`.
7. Route an overdue experiment review to `sales-next` in experiment-review mode. Name the dated interaction records checked, distinguish zero records from unavailable evidence, compare the hypothesis and stop condition, make one decision, reset the review date, and route the updated status once more.
8. Otherwise route the current outreach lane: `needs_target` to `find-conversations`, `needs_draft` to `draft-outreach`, and `awaiting_manual_send` to `record-outreach`.
9. Recommend exactly one skill and one action. Waiting contacts do not block a new current lane.
