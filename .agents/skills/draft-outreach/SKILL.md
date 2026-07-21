---
name: draft-outreach
description: Draft or critique one project-aware first-touch message, public comment, community post, warm introduction, cold message, referral request, or visibility pitch for a real target. Use only after a real person, organization, or discussion has been selected and the user wants review-ready outreach without automatic sending.
---

# Draft Outreach

Draft a relevant continuation of the target's context, not a generic campaign asset.

## Hard gate

Require a problem hypothesis, target-person hypothesis, learning goal, and real target. If any are missing, route to `$validate-problem` or `$find-conversations`. Never accept placeholders such as `[Name]` as completed outreach work.

Before drafting, the target must pass the inbox filter:

1. The target is relevant for a specific, stated reason.
2. The timing or context explains why this touch makes sense now.
3. At least one proof point can be used honestly from recorded evidence.
4. The ask is clear, small, and easy to decline.

If any part is weak, route back to `$find-conversations` or `$validate-problem`; do not compensate with a more polished message.

## Workflow

1. Read `core/steps/engage.md`, `knowledge/foundations/human-writing.md`, active project evidence, and only the matching channel, strategy, and market references.
2. Classify target type, channel, relationship temperature, market mode, and smallest honest ask.
3. State why this target, why now, what proof is usable, and the one easy ask.
4. Use only proof recorded in project evidence.
5. If `workspace/voice.md` exists, match its observed length, directness, register, and phrasing; a draft fails review when someone who knows the founder would suspect it was machine-written.
6. Adapt the draft to the recipient's market before polishing the words: Germany/EU should usually be calmer, more specific, lower-claim, and easy to decline; US/international can state the desired outcome earlier but still needs relevance, proof, and a low-friction ask; cross-border drafts must follow the actual person before broad cultural hypotheses.
7. Draft one main version and one lower-pressure version.
8. Apply the human-writing filter: cut generic AI vocabulary, abstract significance language, formulaic endings, rule-of-three adjective piles, invented misconceptions, and emojis unless the founder voice file or channel context supports them.
9. Check specificity, disclosure, pressure, factual claims, platform risk, and whether the target is structurally able to say yes.
10. Stop for human review. Never send, post, submit, or prefill without an explicit separate request and supported safe tooling.
11. Once the founder has sent the approved message manually, route to `$record-outreach`; do not treat an approved draft as an interaction.

## Output

Include target, relationship temperature, market mode, why this target, proof used, smallest ask, fail condition, draft, lower-pressure version, and one `Do not send` warning.
