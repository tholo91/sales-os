---
name: linkedin-multipliers
description: Prioritize newly added LinkedIn connections for founder-led Brief nach Berlin outreach and prepare short, unsent drafts using verified reach, media access, employer relevance, and current public signals. Use when the founder wants to go through LinkedIn connections and select high-leverage people; do not use for automatic messaging, bulk lead lists, or stale-post personalization.
---

# LinkedIn Multipliers

Select a small set of real, newly added LinkedIn contacts who can plausibly create distribution, a media conversation, an introduction, or a relevant pilot for Brief nach Berlin. Prepare drafts for Thomas to review and send manually.

## Gate

Require an active project, a LinkedIn connection scope (default: newest 100), a target outcome, and a requested maximum number of drafts. If the founder has already contacted someone, do not create a new first-touch draft; route an existing exchange to follow-up or reply handling.

## Required references

- `knowledge/strategies/recipient-context.md` and `knowledge/strategies/first-touch.md` (`## Drafting card`)
- `knowledge/personas/<persona>.md` sections `## Ask ladder` and `## Give-first asset` for the selected person's persona
- `knowledge/channels/linkedin.md` and only the matching Germany/EU, US, or cross-border market reference
- Active project evidence and the founder's matching channel/language voice
- `knowledge/strategies/editorial-pitch.md` only for a verified, expected editorial route

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

This score is an internal prioritization heuristic, not a prediction of replies or permission to request distribution. Before drafting, use the five-field recipient-context check to choose the ask from the person's actual capability, relationship, possible benefit, and possible burden. A creator, researcher, editor, or NGO contact with similar reach may warrant a different purpose and next move. Keep motives as hypotheses and distinguish voluntary civic support from paid content deliverables.

## Freshness and evidence

- A post may be used as a personalization hook only when its visible date is no older than 14 days by default. If the founder sets another window, record it explicitly.
- If no fresh post is available, do not write “your post” or imply a current trigger. Use the visible role, employer, podcast, publication, or stated focus instead and label the draft internally as role-based.
- Record the profile URL, date checked, follower count when visible, employer/role, current-signal date, and why the person qualifies.
- Keep current traction, routing, feature, and audience claims tied to the active project's evidence register. Treat founder-reported claims as reported until independently refreshed.
- Never infer reach, influence, employer status, relationship warmth, or interest from a job title alone.

## Draft shape

Apply the first-message coaching in `knowledge/strategies/first-touch.md`. If the requested batch jumps prematurely to shares, introductions, or meetings, explain the correction once in the existing selection rationale and prepare the fitting drafts. Do not repeat the nudge for every contact or manufacture a question, compliment, or skill endorsement.

Write one short LinkedIn DM per selected person, normally 40–90 words:

1. one specific, verified opener from the profile or fresh public signal; this first sentence carries the reason to keep reading, but must not imitate an email subject or press headline;
2. one short, honest reason for writing; mention the relevant Brief nach Berlin angle only when it explains the connection, without a product explanation;
3. exactly one easy question from the ask ladder: permission to share one relevant example or a short question about the person's work or situation. For an organisation, the referral fallback line from `first-touch.md` belongs to that same ask.

Every sentence must serve one of those three functions. Cut project history, feature lists, multiple story angles, a default meeting pitch, an early calendar link, and a second fallback ask. A short thank-you is optional when it sounds natural. Do not ask for a story, podcast booking, introduction, referral, share, or pilot in a cold first DM by default. An editorial pitch may instead offer one verified story angle and ask about editorial interest when this person's beat and exact contact route demonstrably invite such pitches; a journalist title or connection acceptance alone is insufficient. Follow `editorial-pitch.md` while retaining LinkedIn's native DM shape. After a substantive reply, respond to its content before proposing a larger next step; a referral or forward request must then be the single primary ask, not an extra request after another CTA. A reply to a narrow factual question does not by itself justify asking for an endorsement or share.

Use the recipient's evidenced language and Thomas's confirmed matching voice from `workspace/voice.md`: personal, spoken, warm, and low-hype. For German recipients, retain his recorded German style; for English recipients, use recorded English voice when available or plain English without imitating a US sales script. Use emojis and a sign-off only when the channel and relationship support them. Check sender and recipient jurisdictions separately; Germany/EU and US writing defaults are hypotheses, not nationality rules. Do not copy the same opener across contacts, mention follower counts, or over-explain the product. If several well-matched contacts ignore the same angle, revisit the angle and evidence before cosmetically rewriting the opener or increasing volume; silence alone does not prove why they did not respond.

## Browser and safety boundary

Use the user's logged-in Chrome only when explicitly requested. Inspect visible LinkedIn UI; do not scrape, export, bulk-enrich, or use private data. Prepare each reviewed message in its own compose tab, verify the recipient chip and body, and mark the tab as a deliverable. Never click Send, connect, follow, react, post, or submit. If the current signal is missing or ambiguous, still draft with `[SIGNAL: …]`/`[PRÜFEN: …]` markers per `knowledge/foundations/human-writing.md` and list it as not send-ready; if the recipient identity is ambiguous, do not prefill a compose tab until Thomas confirms the person.

## Direct output

Return:

1. `Auswahl:` inspected scope, freshness window, exclusions, and the selection rule;
2. `Priorisierte Kontakte:` a compact evidence table with target, role/employer, visible reach, fresh-signal date, and selection reason;
3. `Entwürfe:` one draft per selected target, each with one relevant angle and at most one small reply invitation;
4. `Manueller Schritt:` review and send manually, or report which drafts to revise or discard.

When invoked through `sales-copilot`, wrap this result in the copilot's four-section output contract and preserve the manual-send boundary.
