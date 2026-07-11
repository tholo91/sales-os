# Portability model

Sales OS is LLM-agnostic at the content and workflow layer, not at the runtime layer.

## Canonical layer

`.agents/skills/` is the only source of skill behaviour. Each skill follows the open Agent Skills structure with a `SKILL.md` entrypoint. `core/`, `knowledge/`, and `templates/` remain host-neutral.

## Host adapters

- Codex and generic agents: `AGENTS.md` plus `.agents/skills/`.
- Claude: `CLAUDE.md` points to the canonical layer; hosts that support Agent Skills may discover the skills directly.
- Cursor: `.cursor/rules/sales-os.mdc` points to the canonical layer.
- Gemini: `GEMINI.md` points to the canonical layer; a future installer may copy or link skills into the host-specific skill location.

Adapters never contain sales workflow logic. Discovery behaviour, explicit invocation syntax, permissions, symlink handling, and tool access can differ by host and must be tested separately.

## Future installer contract

The planned CLI surface is:

```bash
npx sales-os init --tools claude,codex,cursor,gemini
npx sales-os add-project /path/to/project
npx sales-os doctor
```

The installer may generate adapters and private workspace templates. It must not publish or embed a founder profile, contacts, interaction history, or local repository facts.

