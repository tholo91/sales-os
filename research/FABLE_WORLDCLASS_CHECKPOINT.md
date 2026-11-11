# Checkpoint: world-class outreach upgrade

Run date: 2026-11-11. Prompt: `research/FABLE_WORLDCLASS_PROMPT.md`. This file holds no private workspace values.

## Status

| Phase | State | Note |
|---|---|---|
| 0 Git and ICP | done | 3 commits, `main` fast-forwarded, local branch deleted, nothing pushed. ICP answers saved in `workspace/` only. |
| 1 Inventory | done | See below. Done by the lead with a script (no agent used). |
| 2 Baseline | running | 7 fixed cases in `research/eval/cases.md` (gitignored: drafts use private founder facts, repo is public). |
| 3 Research | running | 6 lanes, one file each: `research/2026-11-11-delta-*.md`. |
| 4 Synthesis | open | |
| 5 Upgrade | open | |
| 6 Blind test | open | |
| 7 Close | open | |

Agents used: 7 of 12 (Opus 0 of 3).

## Phase 0 decisions

- `last30days` (third-party skill that pulls social posts with browser cookies) moved out of the repo to the founder's global skills folder. It is not used in this run.
- `field-conversation-pitch` registered (validator, catalog, intent route, trigger evals). `npm run check`: 58 of 58 tests pass after registration.
- Founder confirmed on 2026-11-11: the origin story for Brief-nach-Berlin may be told in one or two sentences; one credibility fact for NomadSpots; feeling and own story for HeySpeak; benefit, trigger and own story for Spießer. Details are in the private project files.

## Phase 1 inventory

Skills: 19 under `.agents/skills/`, all registered. Longest: `prepare-call` (87 lines), `linkedin-multipliers` (83), `field-conversation-pitch` (82).

Knowledge files past `review_after` on 2026-11-11 (stale, not yet refreshed):

| File | review_after | Relevant to this upgrade |
|---|---|---|
| `knowledge/foundations/signal-led-outreach.md` | 2026-09-09 | yes |
| `knowledge/foundations/audience-language.md` | 2026-10-20 | yes |
| `knowledge/foundations/channel-choice.md` | 2026-10-09 | partly |
| `knowledge/foundations/validation-first.md` | 2026-10-09 | no |
| `knowledge/strategies/community-visibility.md` | 2026-10-16 | no |
| `knowledge/strategies/visibility-vs-paid.md` | 2026-10-09 | no |
| `knowledge/channels/phone.md` | 2026-10-09 | no |
| `knowledge/channels/reddit.md` | 2026-10-20 | no |
| `knowledge/channels/slack.md` | 2026-10-20 | no |
| `knowledge/sources/notebooklm/manifest.md` | 2026-08-10 | no (quarantined imports) |

Due within eight days: `feedback-request.md` (2026-11-11), `email.md`, `tiktok.md`, `claims-register.md`, `demo-and-pilot.md`, `discovery-call.md`, `objection-handling.md`, `pricing.md` (all 2026-11-19).

Research files: 19 dated notes plus prompts and reviews. Only 4 carry a `review_after` date; the other 15 have no freshness date at all.

Overlaps found:

- First-message length is stated in three places (`first-touch.md`, `personas/buyers-users.md`, `linkedin-multipliers`). All three were aligned to 50–70 words on 2026-11-11, but the rule still lives in three files.
- "Line two is the benefit, not how the tool works" already stands in the first-touch Drafting card, yet its synthetic examples describe the workflow in line two (founder complaint logged 2026-11-10).
- Hook guidance is split between `linkedin-public-post.md`, `short-punchy-content.md` and the private hook library.

Claims without a usable source: 19 rows in `knowledge/evidence/claims-register.md` are marked `unverified` (17 older imports, 2 press benchmarks added 2026-10-10). They stay quarantined.

Private project files past `review_after`: 24 (evidence, experiments, validation and project files of all four projects). Not refreshed in this run; listed in the final report.
