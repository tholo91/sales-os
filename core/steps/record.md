# Outreach recording step

1. Require explicit confirmation that the founder personally sent, posted, or delivered the approved outreach. Logging never performs the external action.
2. Read the current lane, contact record, approved draft context, and any immediate response.
3. Record the date, `target_ref`, channel, purpose, exact ask, and only the message context needed to continue the relationship.
4. Set the contact sales stage to `contacted` and record `activity.last_outreach_at`. Waiting is the absence of a due action or reply, not a separate sales stage.
5. If a substantive response already exists, first preserve it as an interaction record, then create an immediate contact-referenced `interaction_debrief` action. If a call is agreed, create a `scheduled_call` action for that contact. Every new action must include the originating `source_interaction_ref`, a concrete reason, and a due date. Create a follow-up action only when the interaction creates a real reason or commitment.
6. Clear `current_outreach.target_ref` and set `current_outreach.stage: needs_target` after the attempt is recorded.
7. Route through `core/steps/route.md`. A contacted person with no due action does not block sourcing another qualified conversation; leave the contact unchanged until a real reply or justified follow-up exists.
