---
source_url: https://www.gong.io/blog/7-tips-for-writing-the-perfect-follow-up-sales-email-according-to-science
publisher: Gong Labs
retrieved_at: 2026-10-02
last_verified_at: 2026-10-04
jurisdiction: global
license_or_terms: linked reference; paraphrased research guidance
confidence: medium
review_after: 2026-12-31
---

# Follow-up

Use `recipient-context.md` and the matching channel and DE/US/cross-border market references throughout the exchange. Reuse known facts; adjust the role, relationship, possible benefit and barrier, and ask burden only from actual new evidence.

Follow up when there is a new honest reason: a promised action, relevant result, useful resource, clarified question, or agreed date.

A due action triggers a decision, not a message; a due touch-plan action defaults to drafting the planned touch unless a stop condition applies. Distinguish promised delivery, explicitly invited later contact, and new context relevant to this person. A vague “busy” is not an invitation to try again. A clear refusal, objection to contact, or unsubscribe stops persuasion and promotional follow-ups. Silence alone, opens, clicks, and connection acceptance do not establish either interest or rejection.

The goal is useful replies, validated learning, and reciprocal progress, not message activity or raw reply rate. A follow-up must reduce a real decision burden, deliver promised value, or close an agreed loop. Do not send a message whose only content is that a previous message exists.

Choose one outcome:

- F1 value nudge: an existing asset or one new fact or date, and a smaller, different question than T1.
- F2 park message: one or two sentences, no new ask, door open.
- Deliver promised material, with no new ask by default.
- Remind about an open commitment when welcome.
- Thank and close the loop.
- Ask for a relevant introduction.
- Defer to the scope and date of an invited later contact.
- Stop.

Do not apply one cadence across all channels or relationships. The touch plan below is the default maximum: for private DMs, F1 (value) plus F2 (park); persona and channel overrides are stricter. It is a judgment call for civic outreach, not a researched optimum: vendor data comes from 4–7-step B2B sequences. Stricter channel rules apply first; never switch channels to bypass silence or refusal.

## Touch plan

Touches: `T1` first touch, `F1` value follow-up, `F2` park message, `commitment` (a promise either side made), `RC` recap within 24 h after a call. Working days are Mon–Fri. Each `knowledge/personas/<slug>.md` has a short `## Touch plan` override; the stricter rule wins. Sources: `research/2026-10-04-outbound-first-touch-follow-up.md` and the 2026-10-04 persona research.

| Situation | F1 | F2 | Then |
|---|---|---|---|
| LinkedIn DM (default, also `buyers-users`) | +5 working days after T1 (range 4–7) | +10 working days after F1 (about day 21) | Stop; public engagement only. Re-entry only with a new trigger after 60+ days, at most once a quarter. |
| Media email pitch | +4–6 working days, same thread, one new element | none | Next pitch only with a new angle after 4–6 weeks. |
| Podcast or newsletter | Podcast +7–10 days; newsletter about +7 days, none if T1 was only a share offer | none | Stop. |
| Creator on Instagram | +5–8 days, only in an accepted thread (LinkedIn: existing thread); unaccepted request: no DM, one genuine comment or the bio inquiry email if the bio names it | none | At most 3 touches across channels. |
| NGO or Verein | +7–10 working days: screenshot sketch, date, or objection answer | Park only on LinkedIn | Re-entry only at a new campaign moment. |
| Funder | Question email: about +10 working days. Submitted sketch: one status question after the stated review time | none | Change the route (switchboard, warm intro), not the pressure; stop after 2 unanswered touches. |
| Reddit | none by default, at most 1 | none | Stop. |
| After a call | `RC` within 24 h; deliver by the promised date; nudge at the commitment date +3–5 working days with something added | Clean exit after 2–3 weeks | Stop. |
| Connector after an intro | Report back within about 2 weeks of each outcome, plus thanks | none | — |

F1 window missed by more than the F2 window → park unless a new reason exists.

Recording a T1 creates one `follow_up` action with `touch: F1`, due per this table (`core/steps/record.md`). Optional before T1: one or two substantive public comments 1–14 days earlier; a planned warm-up comment creates one `decision_follow_up` with `touch: T1`, due in 3–5 days, reason `DM-Entscheidung nach Kommentar` (`core/steps/warm-comment.md` step 6).

### F1 and F2 copy

F1 carries value (an existing asset or a new fact or date), 30–70 words, mirrors T1's recorded du/Sie, and asks a smaller, different question than T1 (a yes/no or a date), never T1's question reworded. Never "wollte nur nachhaken", no guilt, no recap of the unanswered message.

> [Vorname], zu [SIGNAL: ihr aktuelles Thema oder Datum]: [vorhandenes Asset oder neuer Fakt] [PRÜFEN: …]. [Ja/Nein-Frage, z. B. Soll ich dir den Link schicken?]

F2 parks the thread without a new ask; the asset stays available.

> Ich lass das mal ruhen, [Vorname]. [Asset] bleibt für euch liegen. Wenn [SIGNAL: Anlass] wieder Thema ist, meld dich einfach.

A voice note of 45 s or less is an F2 alternative only for 1st-degree LinkedIn contacts.

## After a yes: share kit within 24 hours

Send within 24 h of a yes: a link prefilled with their topic, a two-sentence caption in their register (for creators an angle only, never copy text), one visual or a 30–45 s screen recording, and a date suggestion tied to their moment (for creators: ask when their next video is planned). The creator kit carries the written no-strings sentence; see `knowledge/markets/germany-eu.md` (`## Rechtliche Kurzreferenz für Outreach`).

> Danke dir! Hier ist alles zum Teilen:
> Link: [Link mit eurem Thema]
> Text-Vorschlag: „[SIGNAL: 2 Sätze in ihrem Ton, mit ihrem Anlass]“
> [Screenshot oder 45-Sekunden-Video]
> Passt [SIGNAL: Datum vor ihrem Anlass]? Wenn ich was anpassen soll, sag Bescheid.

After their share, close the loop with real numbers only, or `[PRÜFEN: …]` when the effect is not measurable.

## Commitments become actions

Every documented commitment becomes one contact-referenced action in `pending-actions.yaml`, using existing types with optional `touch` and `persona` fields:

- Thomas's promise → `follow_up`, `touch: commitment`, due within 2 working days or by the promised date.
- The other side's offer or promise → `decision_follow_up` on their date, or +10 working days when none was named.
- An agreed call → `scheduled_call`.
- A post-call recap → `follow_up`, `touch: RC`, due the call date +1.
- A reply drafted but not confirmed as sent → `inbound_reply`, due today.
- Permission to contact a named third person → a Tier-1 row on the pipeline board, not an action.

Every created action is also written to the contact's `next_action_ref`; update contact notes that contradict it. A dated commitment counts as a lead; a reply does not.

## Writing evidence

Gong's observational analysis of 304,174 prospecting follow-up emails associated concise, value-bearing messages in the 30–150 word range with more meetings than extremely short reminders. In the same dataset, empty process phrases could increase replies while decreasing booked meetings: “Thoughts?”, “Never heard back”, and “Following up” all showed that pattern.

Use the directional lesson, not a formula: add specific value and one clear decision. The word range and phrase effects are vendor-data correlations, not universal performance guarantees and never a reason to ignore channel rules or consent. Source: [Gong follow-up email analysis](https://www.gong.io/blog/7-tips-for-writing-the-perfect-follow-up-sales-email-according-to-science) (reverified 2026-10-02).

## Conflicting vendor advice

Gong's [85-million-email guide](https://www.gong.io/files/gong-guide-how-to-master-cold-email-get-the-data-backed-guide-based-on-85-million-emails.pdf) recommends repeated bumps and breakup language based on replies; the older analysis above measures meetings. These are different samples and outcomes, not a settled causal comparison. Do not adopt its cadence, guilt, or cross-channel escalation for founder outreach. See `research/2026-10-02-follow-up-evidence.md` for original sources and limits.

## Continuing by role

Honor the actual request before asking for another commitment. A creator reviewing an example has not endorsed it; a researcher answering a question has not backed a campaign; a journalist checking a fact has not promised coverage. A buyer's friendly response does not establish purchase intent. Deliver what was requested without adding a share, introduction, or meeting ask. For all roles, continue in the recipient's language and formality rather than imposing a German or American template.

## After a real sales conversation

- Restate the buyer's goal or constraint in their language.
- Deliver promised material or answer the open question.
- List reciprocal next steps with one owner and date each.
- Preserve the buyer's timeline; do not manufacture urgency.
- If no next step was agreed and there is no new value, close or defer instead of starting a cadence.

Gong's deal-signal analysis found a positive close-rate correlation when next steps were discussed and a negative signal when late-stage email traffic became mostly scheduling. Treat two-sided progress as engagement; repeated seller messages are not engagement. Source: [Gong deal signal analysis](https://www.gong.io/blog/spot-these-four-red-flags-to-boost-forecast-accuracy-and-revenue-predictability) (reverified 2026-10-02).
