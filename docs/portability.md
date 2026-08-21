# Portability model

Sales OS is portable at the repository content and workflow layer. The user-facing contract is one entrypoint: **`$sales-copilot`**. Specialist skills remain repository-internal routing targets and are not standalone products.

## Canonical layer

`$sales-copilot` reads private project state, selects one phase, and delegates to the matching specialist behavior. Each `.agents/skills/*/SKILL.md` follows the open Agent Skills structure and owns its gate, required references, safety, and output shape. Canonical procedures live in `core/steps/`; sourced guidance lives in `knowledge/`; schemas live in `templates/`. Skill folders intentionally depend on that shared repository layer.

The portable phase contract is:

`context/position -> validate -> source or supported public post -> prepare -> manual action -> reply/follow-up/call -> offer -> learn`

Hosts may expose different tool names, but they must preserve that order, one-next-action routing, private workspace boundaries, and the distinction between a draft, a confirmed external action, and a real response.

## Host adapters

- Codex and generic agents: `AGENTS.md` plus `.agents/skills/`.
- Claude: `CLAUDE.md` points to the canonical layer; compatible hosts may discover Agent Skills directly.
- Cursor: `.cursor/rules/sales-os.mdc` points to the canonical layer.
- Gemini: `GEMINI.md` points to the canonical layer; an installer may copy or link skills into a host-specific location.

Adapters never contain sales workflow logic. Invocation syntax, permissions, symlink handling, browser control, and file access differ by host and must be tested separately. Portability means opening the repository with its shared layer intact, not copying a skill directory in isolation.

## Private workspace

All founder-specific data stays under gitignored `workspace/`: profile, voice evidence, product facts, contacts, interaction history, drafts, experiments, and project status. Framework knowledge and examples must never absorb private values. A host may read configured external product repositories for current facts, but must treat them as read-only unless the user separately authorizes product work.

## Browser and context fallback

Preferred path: use an available authenticated browser read-only to verify the current person, post, thread, community rules, and visible language before drafting. After an explicit user request, a host may place the reviewed draft into the intended input field, but it must stop before any submission or other persisted external action.

Fallback path: request a permalink, pasted text, screenshot, or export. Mark inaccessible or stale claims as unverified. Lack of browser access must reduce certainty, not trigger scraping, guessed context, fabricated candidates, or an unsupported “current” claim.

No host may use browser access to send, post, vote, connect, follow, purchase, confirm a booking, or otherwise submit an external action. External action remains a founder checkpoint.

## Channel adapters

LinkedIn, Reddit, email, phone, Slack, and personal-network guidance are available in the shared knowledge layer. Instagram and TikTok remain future adapters. Platform research may be stored now for policy awareness, but the copilot must not claim a native Instagram or TikTok workflow until the channel gate, output shape, live verification path, and evaluation cases are implemented.

## Future installer contract

The planned CLI surface is:

```bash
npx sales-os init --tools claude,codex,cursor,gemini
npx sales-os add-project /path/to/project
npx sales-os doctor
```

The installer may generate adapters and private workspace templates. It must not publish or embed a founder profile, contacts, interaction history, or local repository facts.

## Mandatory safety invariants

- The copilot may research, route, draft, critique, summarize, and remind.
- The founder must approve and perform every send, post, vote, connection, call, and other external action.
- No scraping, bulk enrichment, mass outreach, fake identity, invented familiarity, or artificial engagement.
- No contact or interaction is recorded as real without source evidence or explicit founder confirmation.
- Platform rules, legal risk, and deliverability guidance are dated and reverified instead of treated as permanent defaults.
