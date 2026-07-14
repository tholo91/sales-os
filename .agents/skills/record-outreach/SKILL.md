---
name: record-outreach
description: Record one founder-approved manual outreach attempt and preserve its exact context, date, and expected next step. Use immediately after the founder has personally sent, posted, or delivered an approved first touch; it never sends anything.
---

# Record Outreach

Create an honest handoff between a review-ready draft and a future reply, without pretending the system acted externally.

## Hard gate

Require the founder to confirm that they personally sent, posted, or delivered the outreach. If they have not, do not mark an attempt complete; state the one manual action still required.

## Workflow

1. Read the active project's `status.yaml`, contact record, and approved draft or source context.
2. Record the date, target, channel, relationship temperature, one-sentence purpose, and the exact ask in the contact or experiment record. Do not store unnecessary private message content.
3. Mark `outreach_attempt: complete` in `status.yaml` only after human confirmation.
4. If there was an immediate reply, meeting, rejection, or other substantive response, mark `real_interaction: complete` and route to `$capture-learning`.
5. Otherwise record the waiting state and any genuinely agreed follow-up date. Do not manufacture a cadence or set `follow_up_due` merely because time passed.
6. End with the next truthful state: waiting, `$capture-learning`, `$prepare-call`, or `$handle-follow-up`. While waiting, `$sales-next` should preserve the waiting state rather than inventing a learning task.

## Output

Include `Manual action confirmed`, `Attempt recorded`, `What counts as a real interaction`, and `Next check`. Never imply delivery, a reply, or a commitment that the founder did not confirm.
