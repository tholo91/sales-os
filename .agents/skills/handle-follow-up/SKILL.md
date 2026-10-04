---
name: handle-follow-up
description: Decide and draft one respectful next touch on a real contact, such as a touch-plan F1 value nudge or F2 park message, promised delivery, post-call recap, thanks, referral, decision check, or stop. Use when a follow-up action is due or the founder asks about a named contact; do not use for a first touch.
---

# Handle Follow-up

Protect the relationship; sequences are not evidence.

## Gate

Require a real prior touch; a founder-reported prior touch counts and is recorded after he confirms the name. A due touch-plan action or a founder asking about a named contact is a due decision. Return the decision first; when no refusal exists and the touch plan allows another touch, always include one short draft. F1 must carry one new recipient-relevant element from the bounded public-context look (`knowledge/foundations/human-writing.md`, Draft-first rule 2) or recorded facts; if none exists, recommend `F2` park instead of a generic nudge. Only when no web or read-only browser tools are available, mark a missing reason as `[PRÜFEN: neuer Anlass]`.

## Required references

- `core/steps/continue.md`
- `knowledge/strategies/recipient-context.md` (`## Five-field check` only) and `knowledge/strategies/follow-up.md` (touch plan)
- knowledge/foundations/human-writing.md (section Draft-first and gap markers)
- `knowledge/personas/<persona>.md` (`## Touch plan`, `## Give-first asset`), plus `## Gemeinsame Belegzeilen` and `## <persona>` from `workspace/projects/<slug>/personas.md` when present; without a project section, the persona file alone
- `core/steps/pipeline.md` for the board update
- Contact record and relevant interactions
- The matching channel file; market files (`germany-eu.md`, `us-international.md`, `cross-border.md`) only for email or cross-border; `workspace/voice.md` when present

## Safety boundary

No automatic sending, generic cadence, invented urgency, or more touches than the touch plan in `knowledge/strategies/follow-up.md` allows (default F1 value nudge plus F2 park; persona and channel overrides are stricter). A due action is a reason to decide, not permission to send. A clear refusal, objection to contact, or unsubscribe stops persuasion and promotional follow-ups; deliver only what was explicitly requested if still appropriate. Silence, connection acceptance, opens, and clicks do not establish interest or permission. For Reddit, default to no DM unless invited.

## Output contract

Return the decision first as `Touch: F1 | F2 | Lieferung | Dank | Empfehlung | Kommentar | Später | Stopp` with one sentence. `touch: commitment` maps to `Lieferung`; a planned touch not yet due is `Später: <Datum>`, plus the draft when the founder asked for it; through `sales-copilot` this line is the whole `Nächste Aktion:` (at most one more sentence). If contacting now, return one short draft with at most one ask (none for delivery, thanks, comment, or park), then `Vor dem Senden prüfen:` (max three items) when markers are open; a risk note only when needed.
