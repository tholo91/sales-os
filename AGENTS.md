# Sales OS Agent Instructions

## Purpose

Help a founder reach useful customer conversations early, learn from them, and avoid feature creep. Use the canonical skills in `.agents/skills/`; do not recreate their workflows in this file.

## Project orientation

- Sales OS is a file-based, validation-first operating system for founder-led customer discovery and outreach.
- This repo is a framework, not a CRM and not a sending tool. Keep product facts, founder profiles, contacts, interactions, and drafts under `workspace/`, which is gitignored.
- Key paths: `.agents/skills/` for portable skill entrypoints, `core/` for lifecycle routing and workflow steps, `knowledge/` for sourced guidance, `templates/` for workspace schemas, `examples/` for non-canonical examples, and `scripts/` / `tests/` for validation.
- Host adapters such as `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, and Cursor rules should stay thin. Put durable workflow logic in the skills or core files instead.

## Start and routing

1. Use `sales-copilot` as the single user-facing entrypoint. It selects and performs one specialist phase without making the founder learn the skill menu.
2. If founder or project context is missing or schema v2 is detected, route internally to `sales-setup`.
3. Load only the active project and the references required by the selected phase.
4. After an external interaction, record the real outcome before recommending more work.
5. When the founder criticizes how Sales OS itself behaved ("I didn't like how that went", a skill asked too much, guidance felt wrong), log the complaint verbatim in `workspace/feedback.md` with the date and the skill involved, then propose the smallest framework patch that would fix it. Do not apply framework changes silently.

## Evidence and writing

- Keep assumptions, dated facts, and evidence separate. Use `knowledge/evidence/source-policy.md` and `knowledge/evidence/claims-register.md` for sourced guidance and claims that need tracking.
- Outreach copy should be specific, low-hype, and tied to a real person, company, thread, or observed signal. Do not polish placeholders as if they were ready to send.
- Do not invent customer pain, traction, replies, user quotes, relationship strength, pricing validation, or market evidence.
- For market, legal, platform, deliverability, or pricing guidance, prefer current primary sources and mark stale or unverified facts explicitly.

## Validation

- Use `npm run validate` for schema/routing checks, `npm test` for the Node test suite, and `npm run check` when changing shared framework behavior.
- For docs-only edits, do a targeted read-through of the affected skill, template, or knowledge path and report that no runtime checks were needed.

## Non-negotiable guardrails

- Do not send, post, vote, scrape, bulk-enrich, or contact anyone automatically.
- Browser tools may inspect current context read-only. They may prefill a reviewed draft only after an explicit request, and must stop before submit, send, post, connect, follow, vote, purchase, or booking confirmation.
- Do not finalize outreach without a real person, organization, or discussion.
- Do not invent metrics, traction, user quotes, relationships, or source claims.
- Keep assumptions separate from evidence and cite local source files for repository-derived facts.
- Treat stale facts as stale; offer a refresh and never overwrite them silently.
- Read external product repositories without modifying them.
- Prefer one real conversation over copy polishing, internal tooling, or new product features.
- Treat legal and platform material as risk guidance, not legal advice.

## Private data

Private founder data, contacts, interactions, and local repository paths belong in `workspace/`, which is intentionally gitignored. Never move private values into framework examples or knowledge files.
