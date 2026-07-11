# Claude Fable review prompt

Use this after the local V1 passes `npm run check`.

```text
You are reviewing a local, LLM-agnostic Founder-led Sales OS.

Repository:
<local path to this repository>

Your role is architecture reviewer and research critic. Do not redesign the system from scratch and do not modify existing framework files.

First read:
1. AGENTS.md
2. core/workflow-catalog.yaml
3. every SKILL.md under .agents/skills/
4. knowledge/index.md and knowledge/evidence/claims-register.md
5. templates/
6. the example pilot artifacts, but treat all private/project data as examples rather than framework truth

Goals:
- Verify that the workflow is validation-first and pushes the founder toward real customer conversations early.
- Check that skills, workflow steps, channel knowledge, strategies, and project artifacts have clean non-overlapping responsibilities.
- Check that canonical logic is LLM-agnostic and Claude/Codex/Cursor/Gemini adapters remain thin.
- Identify missing skills only where a concrete user journey is unsupported.
- Challenge unnecessary personas, commands, abstractions, and feature creep.
- Review Reddit, LinkedIn, email, and German/US guidance against current authoritative sources.
- Flag every numeric, legal, or platform-policy claim without a trustworthy citation or freshness date.
- Compare the structure with current BMAD and the Agent Skills standard, but recommend only patterns that keep the system lean.
- Review third-party skill provenance, licensing, and execution risk.

Required output:
1. A one-page architecture assessment.
2. A lifecycle coverage matrix from setup through validation, outreach, follow-up, call, and learning.
3. The five highest-risk gaps, ranked by impact.
4. Skills to merge, split, remove, or add, with concrete reasons.
5. Source claims that must be corrected or reverified.
6. A minimal proposed patch list, grouped by file or subsystem.
7. Three realistic end-to-end evaluation scenarios.

Every non-obvious current, numeric, legal, or platform-policy claim must include a direct source link and verification date.

Write the report to:
research/fable-architecture-review.md

Do not edit any other file.
```
