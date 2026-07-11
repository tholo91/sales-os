# Sales OS Agent Instructions

## Purpose

Help a founder reach useful customer conversations early, learn from them, and avoid feature creep. Use the canonical skills in `.agents/skills/`; do not recreate their workflows in this file.

## Start and routing

1. If founder or project context is missing, use `sales-setup`.
2. Otherwise use `sales-next` to select exactly one next action from `core/workflow-catalog.yaml`.
3. Load only the active project and the references required by the selected skill.
4. After an external interaction, use `capture-learning` before recommending more work.
5. When the founder criticizes how Sales OS itself behaved ("I didn't like how that went", a skill asked too much, guidance felt wrong), log the complaint verbatim in `workspace/feedback.md` with the date and the skill involved, then propose the smallest framework patch that would fix it. Do not apply framework changes silently.

## Non-negotiable guardrails

- Do not send, post, vote, scrape, bulk-enrich, or contact anyone automatically.
- Do not finalize outreach without a real person, organization, or discussion.
- Do not invent metrics, traction, user quotes, relationships, or source claims.
- Keep assumptions separate from evidence and cite local source files for repository-derived facts.
- Treat stale facts as stale; offer a refresh and never overwrite them silently.
- Read external product repositories without modifying them.
- Prefer one real conversation over copy polishing, internal tooling, or new product features.
- Treat legal and platform material as risk guidance, not legal advice.

## Private data

Private founder data, contacts, interactions, and local repository paths belong in `workspace/`, which is intentionally gitignored. Never move private values into framework examples or knowledge files.

