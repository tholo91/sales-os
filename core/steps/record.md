# Outreach recording step

1. Require explicit confirmation that the founder personally sent, posted, or delivered the approved outreach. Logging never performs the external action.
2. Read the current lane, contact record, approved draft context, and any immediate response.
3. Record the date, `target_ref`, channel, purpose, exact ask, and only the message context needed to continue the relationship.
4. Set the contact status to `waiting` and record `activity.last_outreach_at`.
5. If a substantive response already exists, set `pending.interaction_debrief: true`. If a call is agreed, also set `pending.scheduled_call: true`. Add a follow-up due date only when the interaction creates a real reason or commitment.
6. Clear `current_outreach.target_ref` and set `current_outreach.stage: needs_target` after the attempt is recorded.
7. Route through `core/steps/route.md`. A waiting contact does not block sourcing another qualified conversation; keep its waiting record unchanged until a real reply or due follow-up exists.
