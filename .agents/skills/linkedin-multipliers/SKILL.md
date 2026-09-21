---
name: linkedin-multipliers
description: Prioritize newly added LinkedIn connections for founder-led Brief nach Berlin outreach and prepare short, unsent drafts using verified reach, media access, employer relevance, and current public signals. Use when the founder wants to go through LinkedIn connections and select high-leverage people; do not use for automatic messaging, bulk lead lists, or stale-post personalization.
---

# LinkedIn Multipliers

Select a small set of real, newly added LinkedIn contacts who can plausibly create distribution, a media conversation, an introduction, or a relevant pilot for Brief nach Berlin. Prepare drafts for Thomas to review and send manually.

## Gate

Require an active project, a LinkedIn connection scope (default: newest 100), a target outcome, and a requested maximum number of drafts. If the founder has already contacted someone, do not create a new first-touch draft; route an existing exchange to follow-up or reply handling.

## Selection priority

Inspect the visible connection list newest-first. A contact qualifies only when at least one selection signal is verified from the current profile or public activity:

1. **Media access or presence:** journalist, editor, publisher, podcast/radio/TV host, creator, media communications, or a role with a credible route into those people.
2. **Reach:** visible follower count or an unmistakably large public audience. Use the visible number, not an inferred audience.
3. **Relevant employer and role:** a recognizable newsroom, broadcaster, public institution, NGO umbrella, civic organization, or high-impact employer where the person's role plausibly gives access to distribution, partnerships, public communication, or political participation. Employer prestige alone is not enough.

Use this order when choosing between otherwise similar people: direct media access, then visible reach, then relevant employer/role. A large employer with no plausible connection to media, civic tech, NGOs, or public communication is a weak signal, not a priority.

## Lightweight score

Use the score only to make selection consistent; do not present it as a factual ranking of people.

- direct media or creator role: **+4**
- role with a credible media/NGO/political distribution path: **+3**
- visible followers: 10,000+ **+4**; 3,000–9,999 **+3**; 1,000–2,999 **+2**; 500–999 **+1**
- relevant high-signal employer plus relevant role: **+3**; employer alone: **+1**
- verified public signal from the last 14 days: **+2**
- existing conversation, prior outreach, or current inbound exchange: **exclude from first-touch batch**
- no topical fit or no defensible path to reach/referral: **exclude**, regardless of follower count

Select the highest-scoring contacts until the requested count is reached. If fewer qualify, say so instead of padding the list with famous but irrelevant names.

## Freshness and evidence

- A post may be used as a personalization hook only when its visible date is no older than 14 days by default. If the founder sets another window, record it explicitly.
- If no fresh post is available, do not write “your post” or imply a current trigger. Use the visible role, employer, podcast, publication, or stated focus instead and label the draft internally as role-based.
- Record the profile URL, date checked, follower count when visible, employer/role, current-signal date, and why the person qualifies.
- Keep current traction, routing, feature, and audience claims tied to the active project's evidence register. Treat founder-reported claims as reported until independently refreshed.
- Never infer reach, influence, employer status, relationship warmth, or interest from a job title alone.

## Draft shape

Write one short LinkedIn DM per selected person, normally 45–90 words:

1. one specific, verified opener from the profile or fresh public signal; this first sentence carries the reason to keep reading, but must not imitate an email subject or press headline;
2. one sentence carrying only the Brief nach Berlin angle that is relevant to this person, with one verified proof point when it helps;
3. one low-friction ask: story, podcast/media contact, NGO introduction, referral, or small test.

Every sentence must serve one of those three functions. Cut project history, feature lists, multiple story angles, a default meeting pitch, an early calendar link, and a second fallback ask. A short thank-you is optional when it sounds natural; a referral or forward request must be the single primary ask, not an extra request after another CTA.

Use Thomas's confirmed German voice from `workspace/voice.md`: personal, spoken, warm, low-hype, selective emojis, Bremen sign-off, and light human roughness. Do not copy the same opener across contacts, mention follower counts, or over-explain the product. If several well-matched contacts ignore the same angle, revisit the angle and evidence before cosmetically rewriting the opener or increasing volume; silence alone does not prove why they did not respond.

## Browser and safety boundary

Use the user's logged-in Chrome only when explicitly requested. Inspect visible LinkedIn UI; do not scrape, export, bulk-enrich, or use private data. Prepare each reviewed message in its own compose tab, verify the recipient chip and body, and mark the tab as a deliverable. Never click Send, connect, follow, react, post, or submit. If the current signal or recipient identity is ambiguous, stop that draft and report the missing evidence.

## Direct output

Return:

1. `Auswahl:` inspected scope, freshness window, exclusions, and the selection rule;
2. `Priorisierte Kontakte:` a compact evidence table with target, role/employer, visible reach, fresh-signal date, and selection reason;
3. `Entwürfe:` one draft per selected target, each with one relevant angle and one ask;
4. `Manueller Schritt:` review and send manually, or report which drafts to revise or discard.

When invoked through `sales-copilot`, wrap this result in the copilot's four-section output contract and preserve the manual-send boundary.
