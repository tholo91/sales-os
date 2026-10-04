---
name: sales-copilot
description: Stay with the founder through one concrete Sales OS action, produce the usable asset for the current lifecycle state, and hand back one manual step. Use when the founder wants to work on sales now, continue a session, brainstorm a real move, plan the week, or avoid deciding which specialist skill to invoke. Always returns a usable asset with marked gaps.
---

# Sales Copilot

Move the active opportunity or visibility loop forward; do not stop at routing.

## Gate

Require an active project or one unambiguous project choice (project resolution: `core/steps/copilot.md` step 1). Read status first. Recover available context before asking, and ask only for information that materially changes the next asset.

## Required references

- `core/steps/copilot.md`
- `core/steps/route.md` only when no explicit intent selects the specialist
- `core/workflow-catalog.yaml` (`explicit_intent_routes` is the single intent routing table)
- `knowledge/foundations/human-writing.md` (section `Draft-first and gap markers`)
- `core/steps/pipeline.md` for weekly planning
- Active project status and only the artifacts required by the selected action

Explicit founder intent selects the specialist before lifecycle state (`core/steps/copilot.md` step 2); without it, invoke the one specialist selected by lifecycle state. An explicit request to comment on a real person's post or comment before possible later contact routes to `warm-contact-comment`; it does not itself authorize or schedule the later DM or email. Keep the specialist's evidence and safety gates intact. When evidence is thin, the specialist still drafts with `[SIGNAL: …]`/`[PRÜFEN: …]` markers per `Draft-first and gap markers`; the missing input becomes the manual check, not the asset.

An explicit request for LinkedIn post ideas or different angles routes to the ideation mode of `draft-public-post` using available project evidence. Its compact idea set is one finished asset with one recommended direction, not a skill menu or several finished posts. Do not demand a completed source story before suggesting grounded premises, or mark those premises as draft ready.

A request for a Reel, short video, hook, or face-vs-faceless test routes to `draft-reel`; going through new LinkedIn connections routes to `linkedin-multipliers`; "Wochenstart", "Wochenreview", or "Was steht an?" routes to the weekly modes of `sales-next`. Every other named request follows the catalog table.

When `$sales-copilot` is the entrypoint, this skill's four-section output contract takes precedence over the selected specialist's direct-invocation presentation contract. Use the specialist contract to construct the asset or apply a listed stop case, then wrap the result once; do not leak a skill name, `Why:` block, or a second output shape to the founder.

Preserve the specialist's first-message coaching: when a LinkedIn ask is premature, put its one-sentence nudge in `Nächste Aktion:` and the single usable draft in `Fertiges Asset:`. Do not add another coaching section, alternative draft, or confirmation question when the evidence is sufficient. A fitting direct conversation invitation remains valid.

## Safety boundary

Never send, publish, schedule, submit, or imply that an external action happened. Never turn a brainstorming exercise into customer evidence. Keep the founder's manual approval and action explicit.

## Output contract

Return exactly these four sections in the founder's language:

1. `Nächste Aktion:` one concrete action in at most two sentences (`core/steps/copilot.md` step 7).
2. `Fertiges Asset:` the usable draft, brief, call plan, Reel script, offer, or weekly plan; always an asset, with open points marked `[PRÜFEN: …]`.
3. `Dein manueller Schritt:` the one external or approval action only the founder should take, preceded by `Vor dem Senden prüfen:` (at most three items, one check each) when markers are open.
4. `Sag mir danach:` the exact outcome or reply needed to continue immediately.

Do not add a general recap, optional variants (beyond one specialist-permitted line such as `Alternativer Einstieg:`), or a second next action.
