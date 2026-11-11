# Checkpoint: world-class outreach upgrade

Run date: 2026-11-11. Prompt: `research/FABLE_WORLDCLASS_PROMPT.md`. This file holds no private workspace values.

## Status

| Phase | State | Note |
|---|---|---|
| 0 Git and ICP | done | 3 commits, `main` fast-forwarded, local branch deleted, nothing pushed. ICP answers saved in `workspace/` only. |
| 1 Inventory | done | See below. Done by the lead with a script (no agent used). |
| 2 Baseline | done | 7 drafts in `research/eval/baseline/` (gitignored: drafts use private founder facts, repo is public). 5 of 7 describe the workflow in line or paragraph two. |
| 3 Research | done | 6 lane files `research/2026-11-11-delta-*.md`. Lead spot-checked two claims against the original pages (Gong 28M page; Le Quéré and Matias 2025): both hold. |
| 4 Synthesis | done | `research/2026-11-11-synthesis-patch-list.md`: 13 ranked patches, drop list, 18 rejected lane proposals, 36 register rows. Reviewed and accepted by the lead with one change (a private hook pattern is kept, not deleted). |
| 5 Upgrade | done except g | Ranks 1–13 applied (one Sonnet worker for outreach files, lead for post files and register). Private project files patched; originals copied to `workspace/archive/2026-11-11-pre-upgrade/`. `npm run check`: 58 of 58. Item g: lead read the skill; no rule change needed, two scoped voice preferences proposed to the founder (his confirmation is required by that skill). |
| 6 Blind test | done | Round 1: upgraded won 4 of 7. Fixed the causes, round 2: upgraded won 7 of 7 (three by one point). See below. |
| 7 Close | done | `npm run check` passes; small commits on `main`; nothing pushed. |

Agents used: 12 of 12 (Opus 3 of 3). The round-2 drafts came from the round-1 drafting agent, continued with instructions to re-read all files, not from a fresh agent.

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

## Phase 3 headline findings (details and limits in the lane files)

- No randomized test of cold first-touch wording (opener, ask type, benefit-first versus feature-first) was found. Most outreach rules stay working rules.
- Length: one randomized test with busy professionals favours a much shorter email; one found no effect; vendor data is weak and mixed. Word counts are medium norms, not optima.
- Story: narrative effects are inconsistent across samples and one preregistered test found a story backfiring with decision-makers. The identifiable-victim effect is weak.
- Hooks: headline experiments show a curve. Too vague loses, and giving everything away also loses. LinkedIn publishes no "see more" cut-off.
- Warm contact: a short no-ask message to an acquaintance is appreciated more than senders expect (replicated). Written asks to strangers succeed far less often than senders expect.
- Germany: 2026 local-court rulings treat a single unsolicited promotional B2B email as actionable; the editorial-tip exception has no case law behind it. LinkedIn's own pages disagree on the free connection-note quota.
- Personas: German primary sources now exist for journalists' workload and for volunteers' time limits. No sourced data for podcast-host guest choice, creator collaboration motives, WG money friction or café work failures.

## Phase 4 and 5 decisions

- Emotion changes owner. In a private first touch it comes from the recipient's own words or their people's moment, not from the founder's origin story. The origin story leads public posts and is one sentence of guest material for podcast hosts. `story-first` in a DM is a logged test variant for creators and podcast hosts. Reason: stories help mass audiences slightly, and one preregistered test found a story backfiring with decision-makers. This partly departs from the founder's wish for story-first outreach and goes to him as a decision in the final report.
- The diagnosis step is the existing five-field check, extended (felt problem, benefit, proof, smallest ask, approach). No new step and no new output section.
- A what-it-is line is included only where the approach table says so, as a half-clause in a DM.
- Every rule without a randomized test is logged in the claims register as a working rule, to be compared through `hook_variant` and `reaction`.

## Phase 6 blind test

Method: same 7 fixed cases, baseline drafts versus drafts from the upgraded files; order randomized per case; check markers stripped from both; judge (Opus, fresh per round) read only the pairs and the pre-upgrade voice file; six criteria, 1 to 5 each (benefit before offer, emotion, concreteness, brevity, ICP fit, voice). One draft per case and one judge per round, so a one-point margin is within noise.

| Case | Round 1 (upgraded − baseline) | Round 2 (upgraded − baseline) |
|---|---|---|
| 1 Cold NGO, LinkedIn DM | +3 | +4 |
| 2 Cold podcast host, email | +4 | +1 |
| 3 Warm conference contact, LinkedIn DM | +2 | +4 |
| 4 Creator follow-up, LinkedIn DM | −2 | +1 |
| 5 LinkedIn post | −3 | +3 |
| 6 Cold B2B founder, LinkedIn DM | −1 | +2 |
| 7 Warm acquaintance, WhatsApp | +1 | +1 |

Why round 1 lost three cases, and what changed:

- Benefit lines were written as a polished conditional without "ich" and scored low on voice. Line two now keeps the founder's spoken first-person bridge and concrete nouns; examples and skeletons were rewritten that way.
- The creator line answered a worry the creator never raised. Removed.
- The B2B line was too coy to judge. Buyers and tool-curious users now get one plain what-it-is sentence by default.
- The post lost its "why" and spent four sentences on caveats, and the new product sentence was vaguer than the old one. The private product sentence is concrete again, caveats stay one sentence, and a candidate "why" line was added to the private hook library with an open check marker.

Limits: the round-2 post uses that unconfirmed "why" line (the baseline used the same line), so the post is not ready to publish until the founder confirms it. Both judges noted that the losing draft often had the warmer human detail.

## Founder decisions after the run (2026-11-11)

- Emotion in private messages comes from the recipient's own words; the founder's story stays in posts and as one sentence in podcast pitches. `story-first` remains a test variant only.
- Two scoped voice preferences were saved in the founder's private `write-like-me` voice file (first-person benefit bridge; no input steps in line two).
- `main` was pushed and the old remote branch deleted.
- Refreshing stale knowledge files is postponed (backlog below).

## Backlog

- Refresh the 10 knowledge files past `review_after` (table in Phase 1), most relevant first: `signal-led-outreach.md`, `audience-language.md`, `channel-choice.md`. Eight more fall due on 2026-11-19.
- Refresh the 24 private project files past `review_after`.
- Founder to confirm the candidate "why" line for posts, and to paste the confirmed-native original messages into the private voice file (still empty there).
- Warm-touch detail: both judges preferred a specific human line from the meeting or the gap over a standard thank-you. Not yet a rule; compare via `hook_variant` and `reaction`.
