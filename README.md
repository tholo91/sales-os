# Sales OS

Sales OS is a private, file-based sales copilot for founder-led customer discovery and service sales. It removes blank-page work, prepares one context-aware next move, and keeps the founder in control of every external action.

## Quickstart

1. Open this repository with a supported agent and say: **`Use $sales-copilot for <project>.`**
2. Answer only the missing setup questions. Sales OS stores founder, project, contact, interaction, and draft context under the gitignored `workspace/` directory.
3. Review the one recommended action or draft, then send, post, call, or reply yourself.
4. Return with the real outcome. `$sales-copilot` records the learning and routes the next phase.

Use `$sales-copilot` as the single user-facing entrypoint. The specialist skills in `.agents/skills/` are internal routing targets, not a menu the founder must learn.

## Operating rules

- Validate a problem before optimizing a pitch.
- Work with real people and real discussions, not placeholder leads.
- Prefer one useful conversation over another internal artifact.
- Drafting can be automated; sending, posting, voting, connecting, calling, and approving cannot.
- Never scrape, bulk-enrich, mass-message, or simulate engagement.
- Treat project facts and market guidance as dated evidence.
- Keep private profiles, contacts, and interactions under the gitignored `workspace/` directory.

## Sales phases

`$sales-copilot` moves one active project through these phases:

1. **Context and position:** establish the founder, active project, proof boundary, audience, problem, and one testable commercial position.
2. **Validate:** define one falsifiable problem hypothesis and one learning goal.
3. **Create an opportunity:** find a real person, discussion, community, or warm path, or prepare one evidence-based public post for a supported channel.
4. **Prepare the move:** produce one channel-native first touch, reply, follow-up, or call plan from current context.
5. **Act manually:** the founder reviews and performs the external action.
6. **Advance the conversation:** handle the real reply, discovery call, demo, objection, price discussion, or decision follow-up.
7. **Offer:** turn qualified evidence into one bounded, decision-ready service offer or paid pilot.
8. **Learn:** record what actually happened and route one next experiment.

Silence is not customer evidence, an unsent draft is not outreach, and a draft never becomes “sent” without the founder's explicit confirmation.

## Browser fallback

When a supported browser tool and an authenticated session are available, Sales OS may inspect current public context read-only. After an explicit request, it may place a reviewed draft into the intended input field, but it must stop before submit. It still must not send, post, vote, connect, follow, scrape, book, purchase, or otherwise persist an external action.

When live access is unavailable, provide the permalink, pasted text, screenshot, or exported conversation. Sales OS must label anything it could not verify and must not invent missing context. Platform, legal, pricing, and market facts are rechecked when stale.

## Repository map

- `core/`: lifecycle catalog and canonical workflow steps.
- `.agents/skills/`: Agent Skills entrypoints that depend on this repository's shared `core/`, `knowledge/`, `templates/`, and private `workspace/` layers.
- `knowledge/`: sourced foundations, channels, strategies, markets, and claim tracking.
- `templates/`: schemas for mutable workspace artifacts.
- `examples/`: non-canonical examples.
- `scripts/`: deterministic validation and routing checks.
- `tests/fixtures/`: lifecycle test cases.

## Status

The current system supports setup, validation, live public-context research, evidence-based drafting, manual outreach logging, follow-up decisions, call preparation, objection and pricing preparation, learning capture, and lifecycle routing. Sending automation, scraping, CRM sync, ads, and bulk enrichment are intentionally out of scope.

LinkedIn, Reddit, email, phone, Slack, and warm-network guidance are curated today. Instagram and TikTok are later channel adapters: their current rules may inform risk checks, but no dedicated workflow should be implied until its adapter, live-context checks, and evaluation cases exist.

## Community

Sales OS is meant for founders and builders who want more real customer conversations, not more internal busywork. If that resonates with you, please help shape it.

Useful contributions include:

- Trying the workflow on a real product and sharing what broke or felt unclear.
- Improving the skills, templates, and examples so they work across more agents.
- Adding sourced market, channel, or outreach guidance.
- Opening issues for rough edges, confusing instructions, or missing validation steps.

The goal is to build a small, practical community around founder-led sales and customer discovery. Start with an issue, a pull request, or a concrete field note from a real conversation.
