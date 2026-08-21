---
name: record-outreach
description: Record one outreach attempt only after the founder confirms they personally sent, posted, or delivered it, then clear the current lane so another qualified conversation can be sourced. Use after a manual first touch or when correcting its log. Do not use to send, schedule, approve, or pretend an unsent draft was delivered.
---

# Record Outreach

Log the founder's action and reopen the lane.

## Gate

Require explicit founder confirmation of the completed external action. If absent, state the one manual action still required and make no status change.

## Required references

- `core/steps/record.md`
- `core/steps/route.md`
- Active project status, contact record, and approved draft context

## Safety boundary

Never perform an external action or invent delivery, replies, commitments, dates, or a follow-up cadence. Store no unnecessary private message content. Any new pending action must reference the contact and the interaction that created it, with a concrete reason and due date.

## Output contract

Return `Recorded: <target, channel, date>` first, then the single routed next action. When it routes to a new target, say that the existing contact is `contacted` and will not be touched again without a real reply or justified due follow-up. If there was an immediate response, name the contact-referenced pending action that was created.
