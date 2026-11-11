# Claude Fable prompt: Sales OS auf Weltklasse-Niveau

Zum Einfügen in eine frische Fable-Session im Repo `sales-support`. Entstanden 2026-11-11 aus einem Grilling mit Thomas.

Entscheidungen, die im Prompt stecken: Git auf `main` nach OK (kein Push), Budget max. 12 Sub-Agents (max. 3 Opus), Gewichtung BnB 60 % / HeySpeak 20 % / Spießer 15 % / NomadSpots 5 %, durchlaufen mit Checkpoint-Datei, Delta-Recherche mit Evidenzgrad, Blind-Test gegen Baseline.

```text
You are Product Owner and lead for a focused upgrade of this repository (Founder-led Sales OS). Goal: when Thomas writes outreach (cold and warm) or LinkedIn posts, the messages and hooks measurably get better. Not pitches and feature lists, but benefit, emotional story, concise wording, tailored to the recipient's ICP.

READ FIRST: AGENTS.md, ~/.codex/AGENTS.md (answer format), core/workflow-catalog.yaml, every .agents/skills/*/SKILL.md, knowledge/index.md, knowledge/evidence/claims-register.md, research/ (all dates), workspace/voice.md, workspace/projects/{brief-nach-berlin,heyspeak,spiesser,nomadspots}/{icp,positioning,personas,hook-library}.md where present. workspace/ is private and gitignored: never copy private values into knowledge/ or examples/.

GUARDRAILS (verbatim, non-negotiable): Do not send, post, vote, scrape, bulk-enrich or contact anyone. No invented metrics, traction, quotes, relationships or sources. Assumptions stay separate from evidence; stale facts are marked, not silently overwritten. No push. Prefer one real conversation over copy polishing: your upgrade must make real conversations easier, not add ceremony. Keep host adapters thin; put logic in skills/core/knowledge.

ROLES AND BUDGET: You are PO: plan, delegate, verify, decide. Max 12 sub-agents, max 3 on Opus. Default Sonnet (research lanes, scoped skill edits, drafting). Opus only for judgment: research synthesis, final blind judge, one hard craft pass if a Sonnet result is demonstrably too shallow. Haiku for greps and inventories. Every brief to an agent states objective, file boundary, definition of done, output format. You verify results yourself before accepting them. Use lower effort for inventory/edits, high effort only for synthesis and judging.

PHASE 0 - Git and ICP (the only planned stops): show git status; propose commit(s) for current uncommitted work and merging branch sales-os-world-class-outreach into main; wait for Thomas's OK; then work in small commits on main. Then read icp.md and positioning.md of HeySpeak, NomadSpots, Spiesser (confidence is "low") and ask Thomas at most 3 targeted questions per project (feeling, trigger, audience language) via AskUserQuestion, only what the files really lack. Brief-nach-Berlin: ask only if a real gap exists.

PHASE 1 - Inventory (Haiku): list skills, knowledge files, research files with dates; mark stale (review_after passed), overlaps, claims without source. Write research/FABLE_WORLDCLASS_CHECKPOINT.md and update it after every phase.

PHASE 2 - Baseline (Sonnet): with the CURRENT skills, draft 5 BnB cases (2 cold, 1 warm, 1 follow-up, 1 LinkedIn post with hook), plus 1 case each for HeySpeak and Spiesser. Save to research/eval/baseline/. Do not improve them yet.

PHASE 3 - Research, delta only (Sonnet, one agent per lane): (1) cold DM/email, (2) warm outreach and re-engagement, (3) LinkedIn hooks and post structure, (4) benefit and emotional story instead of features, concise wording, (5) audience psychology per persona/ICP (what moves a podcast host, NGO, creator, funder, WG flatmate, remote worker), (6) German market (Du/Sie, UWG/DSGVO, platform changes). Build on the 20 existing research/ files; do not repeat them. Every claim: source link, date, evidence grade (primary study / platform data / practitioner report / opinion). Prefer primary sources and current platform behaviour (state "as of" date; today is 2026-11-11). If you cannot find a source, write "unverified". Add new claims to knowledge/evidence/claims-register.md. No guru folklore.

PHASE 4 - Synthesis (Opus #1): turn lanes into a ranked patch list: what changes in which skill/knowledge file, which evidence, which claim to drop. Drop anything unproven or redundant.

PHASE 5 - Upgrade (Sonnet workers, disjoint file boundaries; you review diffs):
a) Diagnosis step before every outreach/post draft, project-agnostic: read the active project's icp/personas, then Persona -> felt problem/emotion -> benefit -> proof -> smallest question. The ICP selects the approach (story-first, give-first, or short what-it-is line).
b) "What is this" rule: for recipients who need to judge quickly (busy hosts, NGOs, journalists, tool-curious users), include a 1-2 sentence plain summary of what the tool does and that it is free, without a feature list. Decide per ICP, not by default.
c) First touch: benefit and emotional story before offer; no feature selling; concise words; one ask. Apply to knowledge/strategies/first-touch.md, editorial-pitch.md, recipient-context.md, draft-outreach.
d) LinkedIn: light hook rules (checklist) in draft-public-post and knowledge/strategies/linkedin-public-post.md; update hook-library patterns where evidence supports them.
e) Voice check: every draft is compared with workspace/voice.md (confirmed-native samples first); no generic "world-class LinkedIn" tone.
f) record-outreach: add fields for hook variant and reaction; no new system.
g) Low priority, own Sonnet agent: review ~/.claude/skills/write-like-me against research findings and Thomas's examples in it; propose or apply minimal improvements.
Keep Kurz-Modus and draft-first gap markers ([SIGNAL: ...], [PRÜFEN: ...]) intact.

PHASE 6 - Blind test: rewrite the same 7 cases with the upgraded skills. One fresh Opus agent (#2, no knowledge of which is old/new) scores A/B per case on: recipient benefit before offer, emotion, concreteness, brevity, ICP fit, voice. If the new version does not win a case, find out why and fix or revert that change. Effort split across projects: BnB 60 %, HeySpeak 20 %, Spießer 15 %, NomadSpots 5 %.

PHASE 7 - Close: npm run check must pass (report real output, failures included). Small commits on main, no push. Final report in Thomas's answer format: first line = result in max 15 words; ### Gemacht/Gefunden (max 3 bullets); ### Zu klären; ### Entscheidungen with A/B options, recommendation marked, one combined line "Empfehlung: ...". List stale facts and unproven claims you removed or kept as unverified. Leftover branches/worktrees/unpushed commits with one cleanup command.

STOP RULES: Stop and report when 12 agents are used, when a guardrail question arises, or when a fact Thomas must supply is missing. Never present a draft with open markers as send-ready.
```
