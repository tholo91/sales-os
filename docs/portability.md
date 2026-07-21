# Portability model

Sales OS is portable at the repository content and workflow layer, not as nine standalone skill folders and not at the runtime layer.

## Canonical layer

Each `.agents/skills/*/SKILL.md` follows the open Agent Skills structure and owns triggering, gates, required references, safety, and output shape. Canonical numbered procedures live in `core/steps/`; sourced guidance lives in `knowledge/`; schemas live in `templates/`. Individual skill folders intentionally depend on that shared repository layer and are not standalone packages.

## Host adapters

- Codex and generic agents: `AGENTS.md` plus `.agents/skills/`.
- Claude: `CLAUDE.md` points to the canonical layer; hosts that support Agent Skills may discover the skills directly.
- Cursor: `.cursor/rules/sales-os.mdc` points to the canonical layer.
- Gemini: `GEMINI.md` points to the canonical layer; a future installer may copy or link skills into the host-specific skill location.

Adapters never contain sales workflow logic. Discovery behavior, explicit invocation syntax, repository-relative references, permissions, symlink handling, and tool access can differ by host and must be tested separately. Portability means installing or opening the repository with its shared layer intact, not copying one skill directory in isolation.

## Future installer contract

The planned CLI surface is:

```bash
npx sales-os init --tools claude,codex,cursor,gemini
npx sales-os add-project /path/to/project
npx sales-os doctor
```

The installer may generate adapters and private workspace templates. It must not publish or embed a founder profile, contacts, interaction history, or local repository facts.
