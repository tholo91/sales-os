# Sales OS

Sales OS is a file-based, validation-first operating system for founder-led customer discovery and outreach. Its repository layer is portable across supported LLM hosts: skills use the open Agent Skills structure, shared procedures and knowledge stay in this repository, and user data stays outside the framework.

## Start here

1. Ask your agent to use `$sales-setup` to create or refresh a founder profile and project.
2. Ask `$sales-next` for the single next useful action.
3. Use the recommended skill and capture the outcome with `$capture-learning`.

The canonical skills live in `.agents/skills/`. `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, and the Cursor rule are thin host adapters only.

## Operating rules

- Validate a problem before optimizing a pitch.
- Work with real people and real discussions, not placeholder leads.
- Prefer one useful conversation over another internal artifact.
- Never send, post, scrape, enrich, or message automatically.
- Treat project facts and market guidance as dated evidence.
- Keep private profiles, contacts, and interactions under the gitignored `workspace/` directory.

## Repository map

- `core/`: lifecycle catalog and canonical workflow steps.
- `.agents/skills/`: Agent Skills entrypoints that depend on this repository's shared `core/`, `knowledge/`, `templates/`, and private `workspace/` layers.
- `knowledge/`: sourced foundations, channels, strategies, markets, and claim tracking.
- `templates/`: schemas for mutable workspace artifacts.
- `examples/`: non-canonical examples.
- `scripts/`: deterministic validation and routing checks.
- `tests/fixtures/`: lifecycle test cases.

## Status

V1 supports research, evidence-based drafting, manual outreach-attempt logging, learning capture, call preparation, and lifecycle routing. Sending automation, scraping, CRM sync, ads, and bulk enrichment are intentionally out of scope.

## Community

Sales OS is meant for founders and builders who want more real customer conversations, not more internal busywork. If that resonates with you, please help shape it.

Useful contributions include:

- Trying the workflow on a real product and sharing what broke or felt unclear.
- Improving the skills, templates, and examples so they work across more agents.
- Adding sourced market, channel, or outreach guidance.
- Opening issues for rough edges, confusing instructions, or missing validation steps.

The goal is to build a small, practical community around founder-led sales and customer discovery. Start with an issue, a pull request, or a concrete field note from a real conversation.
