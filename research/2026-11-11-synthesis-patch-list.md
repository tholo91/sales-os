---
source_url: research/2026-11-11-delta-*.md (six lanes)
publisher: Sales OS synthesis (phase 4 of the 2026-11-11 outreach upgrade)
retrieved_at: 2026-11-11
last_verified_at: 2026-11-11
jurisdiction: Germany-first founder outreach; evidence mostly US/UK
license_or_terms: internal plan; no private workspace values
confidence: medium for the causes found in the repo, low for every effect on replies (no randomized test of benefit-first outreach copy exists)
review_after: 2027-02-11
---

# Synthesis: ranked patch list for benefit-first, concise, ICP-fit drafts

Scope: turns the six delta lanes and the current framework into patches that two scoped workers apply without further judgment. Private patches (project benefit lines, hook library, voice file) are in `research/eval/synthesis-private.md` (gitignored).

Lane keys used below: **L1** cold first touch, **L2** warm re-engagement, **L3** LinkedIn hooks, **L4** benefit/story/concise, **L5** audience psychology, **L6** Germany market (`research/2026-11-11-delta-*.md`). `L4-3` means lane 4, claim 3. Grades follow the lanes: primary study, platform data, practitioner report, opinion.

## What causes the drift (checked in the repo)

- The GOOD NGO and creator examples in `knowledge/strategies/first-touch.md` (`## Drafting card`) describe input and output steps in line 2, against the card's own rule. Drafters imitate examples before rules.
- Persona skeletons ask for the mechanism: `creators-influencers.md` has `[Projekt in einem Satz: was man eingibt, was rauskommt, wer selbst handelt]`; `ngos-civic-orgs.md`, `buyers-users.md`, `media-podcasts.md` and `funders-foundations.md` have a bare project-sentence slot.
- `core/steps/publish.md` step 4 and `draft-public-post` require "one plain sentence saying what the product does"; the private project sentence that fills it is a pure input-step sentence.
- `linkedin-multipliers` (Draft shape item 2) asks for a reason for writing but no benefit line, and names one project in a public skill.
- Private project persona drafts repeat the mechanism in almost every template (see the private file). Five of seven baseline drafts describe the workflow in line or paragraph two.

## Decision on story versus benefit per recipient type

The judgment. The founder wants emotion; the evidence says stories help mass audiences slightly (L4-4), can backfire with decision-makers (L4-3), and that professionals contacted about a non-threatening topic respond more to facts than to anecdotes (L4-5, existing DACH journalist data in `media-podcasts.md`). The only reply-level sentiment data favour mild warmth, not intensity (L4-11). So emotion stays, but it changes owner: in private first touches it comes from the recipient's own words or their people's moment, quoted, and from the founder's confirmed warm voice, not from his origin story. The founder's story goes where the audience is a mass audience: public posts, and as guest material for podcast hosts. Story-first in a DM is allowed only as a logged test variant for creators and podcast hosts.

| Recipient type | Approach (`hook_variant`) | What-it-is line | Emotion: how much, from what | Support |
|---|---|---|---|---|
| NGO, initiative, campaigner (cold) | `plain-benefit`: their dated moment → what their people get | yes, half-clause in line 2 (what it is, who acts, free, non-partisan) | mild; their posted words or their members' question, quoted; never asserted; no founder story | L4-2, L4-7 (indirect, primary), L4-11 (practitioner), L1-1, L1-11 (practitioner), L5-8 (primary, time scarcity); line-2 rule itself: working rule, founder decision 2026-11-10 |
| Creator | `give-first`: their content or comment section → an example for their audience | yes, half-clause | their audience's own question; founder story only as `story-first` test | L5-10, L5-11 (practitioner, primary); existing persona evidence; test variant: working rule, founder decision |
| Journalist, editor | `plain-benefit`: the news for their audience (`editorial-pitch.md`) | one plain sentence after the news | none in the copy; facts and a consented protagonist | L5-1, L5-2, L5-3 (practitioner, Muck Rack PDF), L4-5 (primary, meta-analysis abstract) |
| Podcast host | `give-first`: their episode point → an episode idea for their listeners | one sentence | their listeners' frustration as the hook; founder origin story as one sentence of guest material, not the opener; `story-first` as test | L5-1 to L5-4 (transfer assumed), L4-4 (mass audience); working rule, founder decision |
| Funder, foundation, official, politician | `what-it-is`: programme or remit fit → readiness | yes, one to two sentences (sketch `Was es gibt`) | none; show preparation, not passion | L4-10, L4-3 (primary), L5-12 (primary, applicants' view) |
| Buyer or user, cold (B2B founder, tool-curious) | `plain-benefit`: their signal in their words → situation question | half-clause naming what is being built, only if the project's `positioning.md` asks for one | their problem in their words; one clause of the founder's own true experience allowed | L1-1, L1-11, L4-7; working rule |
| Acquaintance, consumer end user (warm) | `plain-benefit`: their current situation → situation question | no; an honest half-clause (`ich bau gerade …`) at most | warmth from the real relationship; one clause of own true experience | L2-1, L2-2, L2-3 (primary, no-ask check-ins); working rule |
| Met in person (event, conference) | `plain-benefit`: the meeting plus their own sentence → what their people get | no; callback in a half-clause | their own words from the meeting, mild | L1-8 (read via summary), L2-1; conference-line rule: founder decision |
| Follow-up after silence | new fact from their new content plus an existing asset | no repeat | none | L2-10 (no benchmark), existing touch plan |
| LinkedIn public post | `story-first` when a confirmed true scene exists, else result or position | yes, one outcome sentence in the body | true scene, mild; no negative or emotive words for effect | L4-4, L3-4, L3-5, L3-6, L3-9 |

## Ranked patches

Ranked by expected effect on real drafts. "Pinned test" refers to `tests/quality.test.mjs` and `scripts/validate.mjs`. No patch below requires a test change; the one near miss is noted at rank 9. Persona files must keep their ten `## ` headings exactly (pinned); no patch adds a `## ` line there.

### Rank 1 · `knowledge/strategies/first-touch.md`, `## Drafting card`, `**Examples**` block · replace

Replace the three GOOD examples (NGO, creator, buyer/user) and their arrow lines with the text below. Keep the BAD example and its arrow. Add the second BAD example directly after it. The new examples avoid the topics of the eval fixtures so the blind test stays clean.

```text
GOOD, NGO: „Moin Jana, ihr ruft gerade dazu auf, vor der Anhörung am 12.11. den Abgeordneten zu schreiben. Eure Leute könnten dafür jeweils einen eigenen Brief an die zuständige Stelle haben, den sie selbst abschicken; das Werkzeug dafür hab ich gebaut, kostenlos und überparteilich. Soll ich dir einen Beispielbrief zu eurem Thema schicken? Falls das bei euch jemand anderes entscheidet, sag gern wer. Grüße aus Bremen, Thomas“
→ Dated action moment; line 2 has their people as subject and says what they end up with; the what-it-is line is a half-clause; no input steps.

GOOD, creator: „Hey [Name], unter deinem Reel zu [SIGNAL: Thema, Datum] fragen einige, was sie jetzt konkret tun können [PRÜFEN: steht das so in den Kommentaren?]. Darauf hätten sie eine Antwort, ohne dass du an deinem Ton etwas änderst: einen eigenen Brief an die zuständige Stelle, mit einem kostenlosen Werkzeug, das ich gebaut hab. Darf ich dir einen Beispielbrief zu deinem Thema schicken? Thomas aus Bremen“
→ The emotion is their audience's own question; the benefit is for their audience and leaves their creative control intact; the asset costs nothing to accept.

GOOD, buyer/user (commercial project): „Moin [Name], du hast [SIGNAL: am … geschrieben, dass X jede Woche Zeit frisst]. Ich baue gerade allein etwas, damit [PRÜFEN: Ergebnis aus `positioning.md`, in ihren Worten, keine Schrittfolge]. Wie löst ihr das im Moment? Grüße aus Bremen, Thomas“
→ Their words carry the problem; one half-sentence says honestly what is being built; a situation question instead of a demo ask.
```

Add after the existing BAD example:

```text
BAD, line 2: „Eure Leute geben PLZ und Anliegen ein und bekommen einen Briefentwurf, den sie überarbeiten und abschicken.“
→ Input steps describe the tool, not what they get; how it works comes after a yes.
```

- Evidence: internal inconsistency (L4, "Contradicts" bullet 3); founder complaint 2026-11-10 (`workspace/feedback.md`); benefit direction L4-2, L4-7 (primary, indirect). Working rule.
- Pinned test: none.
- Risk: the new examples become the next template; mitigated by the recognition test already in the card.
- Length: +2 lines.

### Rank 2 · `knowledge/personas/*.md`, `## Message skeleton` · replace slots

Exact replacements; nothing else in these sections changes.

`creators-influencers.md`, skeleton quote, replace

```text
Ich hab [Projekt in einem Satz: was man eingibt, was rauskommt, wer selbst handelt] gebaut, kostenlos und parteiunabhängig [PRÜFEN: Formulierung, Träger/Förderhinweis].
```

with

```text
Darauf hätten deine Leute eine Antwort, ohne dass du an deinem Ton etwas änderst: [Nutzen für ihr Publikum in einem Satz aus der Projekt-Persona, keine Schrittfolge], mit [Projekt als Halbsatz: was es ist, kostenlos, parteiunabhängig] [PRÜFEN: Formulierung, Träger/Förderhinweis].
```

`ngos-civic-orgs.md`, skeleton line 2, replace

```text
> Ich hab [Projekt] gebaut, kostenlos und überparteilich: [Mitmach-Aktion in einem Satz, z. B. Leute schreiben ihre eigene Sicht an die Zuständigen [PRÜFEN: Ebene Bund/Land/Kommune abgedeckt?] und schicken selbst ab]. [PRÜFEN: Funktion live?] [PRÜFEN: optional eine freigegebene Belegzeile, nur wenn die Länge reicht]
```

with

```text
> Mit [Projekt als Halbsatz], kostenlos und überparteilich, hätten eure Unterstützer:innen [Nutzen in einem Satz aus der Projekt-Persona: was sie danach haben oder tun, keine Schrittfolge] [PRÜFEN: Ebene Bund/Land/Kommune abgedeckt?]. [PRÜFEN: Funktion live?] [PRÜFEN: optional eine freigegebene Belegzeile, nur wenn die Länge reicht]
```

`buyers-users.md`, skeleton line 3, replace

```text
> Ich baue gerade allein [Projekt in einem Satz aus positioning.md], damit [PRÜFEN: Nutzen in ihren Worten, keine Wirkungsbehauptung].
```

with

```text
> Ich baue gerade allein [Projektname oder „etwas“], damit [PRÜFEN: Ergebnis für sie aus positioning.md, in ihren Worten; keine Schrittfolge, keine Wirkungsbehauptung].
```

and append to the paragraph under the skeleton: `When the project's positioning.md (## Message boundaries) rules out a product line in the first touch, drop line 3 and keep the question.`

`media-podcasts.md`, skeleton, replace `> [Projekt in einem Satz] [PRÜFEN: keine Wirkungsbehauptung].` with

```text
> [Was es ist, ein Satz: was Menschen damit tun, kostenlos; keine Schrittfolge] [PRÜFEN: keine Wirkungsbehauptung].
```

and in the `Variants:` line replace `open on [SIGNAL: Folge und Punkt], du if the show uses it.` with `open on [SIGNAL: Folge und Punkt], then the episode idea for their listeners; the founder's origin story at most one sentence, as what he could tell on air; du if the show uses it.`

`funders-foundations.md`, skeleton, replace `Was es gibt: [Projekt in zwei Sätzen, parteineutral; die Person entscheidet und sendet selbst, keine Massenaussendung].` with

```text
Was es gibt: [zwei Sätze, parteineutral: was Menschen damit tun oder erreichen und wer selbst handelt; keine Schrittfolge, keine Funktionsliste, keine Massenaussendung].
```

- Evidence: same as rank 1; funders L4-10 (primary, readiness over passion). Working rule.
- Pinned test: persona heading order (`persona playbooks share one ordered structure`) unaffected; no `## ` line added.
- Risk: the slot now depends on a project benefit line; projects without one get a `[PRÜFEN]`-style gap, which the private file fills for the four current projects.
- Length: neutral.

### Rank 3 · `knowledge/strategies/first-touch.md`, `## Drafting card` (Line 2, Length), `## Boundaries`, `## Evidence boundary`; `templates/interaction.md` · replace, add, delete

1) Replace the `**Line 2, their benefit:**` paragraph with:

```text
**Line 2, their benefit:** one sentence with their people (or them) as the subject, saying what they can do, have, or stop worrying about, tied to the line-1 moment; it is field 3 of the five-field check in `recipient-context.md`. Never input steps (`X eingeben, Y bekommen`), a feature list, or how it works; that comes after a yes or their question. Name a worry or feeling only when they wrote or said it. No product history, no `wir` from a solo founder.

**What-it-is line:** only where the table below says so; at most one sentence, and in a DM a half-clause inside line 2: what it is, who acts, and `kostenlos` when true (`ein kostenloses Werkzeug, mit dem eure Leute …`). No steps, no feature list.

**Approach by recipient** (working rules, chosen in field 5 of the five-field check; record it as `hook_variant`; a project's `positioning.md` `## Message boundaries` or persona instance may set another approach for its ICP and wins):

| Recipient | Opener → line 2 | What-it-is line | Emotion, from what |
|---|---|---|---|
| NGO, initiative, campaigner | their dated moment → what their people get (`plain-benefit`) | half-clause | mild: their own words or their members' question, quoted |
| Creator | their content or comments → an example for their audience (`give-first`) | half-clause | their audience's question |
| Journalist, editor | the news for their audience (`editorial-pitch.md`) | one sentence after the news | none: facts, a consented protagonist |
| Podcast host | their episode point → an episode idea for their listeners (`give-first`) | one sentence | their listeners' frustration; the founder's story as one sentence of guest material, not the opener |
| Funder, official, politician | programme or remit fit → readiness (`what-it-is`) | one or two sentences | none: show preparation, not passion |
| Buyer or user | their signal → situation question (`plain-benefit`) | half-clause only if `positioning.md` asks for it | their problem in their words; one clause of the founder's true experience |
| Met in person, acquaintance | the meeting or last exchange, with their sentence → what they get (`plain-benefit`) | none; they know it | warmth from the real relationship |

`story-first` (the founder's own story as opener) is a test variant for creators and podcast hosts only; compare it with the default in the founder's own batches.
```

2) In `**Length:**`, first bullet, replace `at most about 90 with the founder's confirmed project sentence.` with `at most about 90 with a what-it-is half-clause.`

3) In `## Boundaries`, delete the block from `Use this structure for a cold private first touch:` through item `3. End with exactly one easy question …` (it restates the card).

4) Replace the whole `## Evidence boundary` paragraph with:

```text
Observational vendor email data favour an interest question or relevant offer over an immediate meeting request ([Gong 304,174-email CTA analysis](https://www.gong.io/blog/this-surprising-cold-email-cta-will-help-you-book-a-lot-more-meetings), [85-million-email guide](https://www.gong.io/files/gong-guide-how-to-master-cold-email-get-the-data-backed-guide-based-on-85-million-emails.pdf), reverified 2026-10-02) and link pitching in the body with up to 57% fewer replies ([Gong 28M-email page](https://www.gong.io/blog/does-cold-email-even-work-any-more-heres-what-the-data-says), checked 2026-11-11). None isolates a no-ask first touch or transfers a sales cadence to German or civic outreach. No randomized test of benefit-first versus feature-first outreach copy was found; line 2 rests on field studies where a salient, concrete benefit and simple wording raised action (Bhargava and Manoli 2015) and on concrete wording signalling attention (Packard and Berger 2021), so it is a working rule. Stories persuade mass audiences slightly on average but raised counterarguing among US state legislators (Xu, Winett and Niederdeppe 2021); the only reply-level sentiment data favour mild warmth over neutral or strong emotion (Boomerang 2016, vendor). The one randomized length test with busy professionals found a 49-word email beat 127 words on clicks (Rogers and Lasky-Fink 2020); vendor reply data on length are weak and conflicting, so the word counts above are medium norms, not measured optima. Vendor LinkedIn data show similar acceptance with or without a note and isolate no warm-up comment, so the comment stays optional. Vendor "average reply rates" differ about tenfold; never set a percentage target, compare same-type messages in the founder's own batches via `hook_variant` and `reaction`. Scope and dates: `research/2026-11-11-delta-cold-first-touch.md`, `research/2026-11-11-delta-benefit-story-concise.md`, `research/2026-10-02-follow-up-evidence.md`, `research/2026-10-28-linkedin-outreach-check.md`.
```

5) `templates/interaction.md`, `hook_variant` comment: replace `story-first | give-first | what-it-is | signal-only` with `story-first | give-first | what-it-is | plain-benefit`.

- Evidence: L4-2, L4-3, L4-7, L4-11, L4-1 (primary / practitioner), L1-1, L1-5, L1-6, L1-7 (practitioner / primary), L5 rows as in the decision table. Table rows without a citation are working rules, founder decision.
- Pinned test: none (first-touch and the interaction template are not pinned; `validate.mjs` checks template frontmatter only).
- Risk: the table is the largest addition; it replaces judgment that drafters currently make inconsistently, and items 3 and 4 cut about the same amount of text.
- Length: about +130 words net.

### Rank 4 · `core/steps/publish.md` step 4 and `.agents/skills/draft-public-post/SKILL.md` · replace

`publish.md`, step 4, second paragraph: replace `Meaning before hook: decide privately whether the post is about the metric, the mechanism, or the meaning, and build line 1 from it;` with `Meaning before hook: decide privately who reads it (their felt problem in their words, what they take away) and whether the post is about the metric, the mechanism, or the meaning, and build line 1 from it;`

`publish.md`, step 4, third paragraph: replace `Every post says in one plain sentence what the product does for the reader (project sentence in `hook-library.md` when present).` with

```text
Every post says in one plain sentence what the reader can do with the product, in outcome words and with `kostenlos` when true; never the input steps or a feature list (project sentence in `hook-library.md` when present).
```

`draft-public-post`, `## Shape and split check`: replace `Every post contains one plain sentence saying what the product does for the reader, even when the product is not the topic.` with `Every post contains one plain sentence saying what the reader can do with the product, in outcome words, never input steps or a feature list, even when the product is not the topic.`

`draft-public-post`, `## Required references`: replace `- Active positioning, project evidence, and `workspace/voice.md`` with `- Active positioning, project evidence, and `workspace/voice.md` (confirmed-native samples first)`.

- Evidence: baseline post draft carried the input-step sentence verbatim from the project sentence; L3-6 (primary, simpler wording), L4-2 (primary, indirect). Working rule.
- Pinned test: `public post guidance …` requires `short, punchy asset` and `two independent stories` in the skill and `two focused posts` plus the short-punchy reference in `publish.md`; none is touched.
- Risk: low; the requirement stays, only its content changes.
- Length: +25 words.

### Rank 5 · `knowledge/strategies/recipient-context.md`, `## Five-field check` and `## Evidence boundary`; `core/steps/engage.md` step 9 · replace

This is the diagnosis step (design item a). It already runs before every first touch and follow-up, so it is extended instead of adding a new step.

Field 3, replace the whole item with:

```text
3. **Felt problem and benefit:** the moment or difficulty they or their people are in, in their own words where they wrote or said it (else the project's `icp.md` hypothesis, kept internal), and the one thing that changes for them, tied to one observed fact; plus one usable proof line from `## Gemeinsame Belegzeilen`, or none. This becomes line 2 of the draft. Distinguish benefit to them from the founder's desired distribution or revenue.
```

Field 5, append: ` It also picks the approach and whether a what-it-is line belongs (`first-touch.md`, `**Approach by recipient**`).`

`## Evidence boundary`: replace the NCVO sentence with `The [Deutscher Freiwilligensurvey 2024](https://www.bundesregierung.de/resource/blob/2348674/2451626/16111cfdf152d3ed813de8a7da700f13/hauptbericht-freiwilliges-engagement-in-deutschland-data.pdf) finds time the most named reason volunteers plan to cut back (62 % of that group, n = 27,542 individuals); it does not describe organisation staff.`

`engage.md`, step 9: replace `Remove generic compliments, unnecessary founder or product explanation,` with `Remove generic compliments, unnecessary founder or product explanation, any description of input steps (what one enters, what comes out),`.

- Evidence: L5-8 (primary); diagnosis order: working rule (L4 "Not found": no reply-level evidence for felt problem before benefit).
- Pinned test: `engage.md` must keep `conversation-state check` (step 6) and the editorial-pitch reference (step 3); untouched.
- Risk: field 3 could tempt the drafter to state the recipient's feelings; the Drafting card line "Name a worry or feeling only when they wrote or said it" blocks that.
- Length: +60 words.

### Rank 6 · `knowledge/strategies/linkedin-public-post.md`, `## Start from the material`, `## First lines`, `## Final editorial check`, `## Evidence and limits` · replace

`## Start from the material`, paragraph 2: replace `Privately identify the intended reader, the single point they should understand,` with `Privately identify the intended reader and their felt problem in their own words, the single point they should understand,`.

Replace all bullets of `## First lines` except the `Avoid:` bullet with:

```text
One pass, in this order; never shown to the founder as a score.

1. Specific, not the whole answer: line 1 names a concrete moment, object, or claim and leaves one concrete thing for the body. Vague suspense and a line that gives everything away both lost clicks in headline experiments (Le Quéré and Matias 2025, 8,977 tests, US news; transfer assumed).
2. Common, plain words and short phrases. Do not trust a "polished" feel: readers clicked simpler headlines, professional writers did not prefer them (Shulman, Markowitz and Rogers 2024, 30,000+ tests, English).
3. The topic in plain words in lines 1–3: one main topic and two or three related ones that match the profile. Inference, not a LinkedIn statement: the ranker uses embeddings and reading history; whether it reads post text is not published.
4. One detail only this founder can know: a dated observation, decision, screenshot, consented user message, or number with its definition. LinkedIn defines slop by a missing point of view or substance, not by style (2026-09-15).
5. One plain sentence says what the reader can do with the product, in outcome words, no input steps; a stranger cannot care how something spreads or counts if they cannot picture it.
6. A real problem may be named plainly; never add negative or emotive words for effect.
7. Working rule: the promise is complete in about the first two lines. No official cut exists (tools say 140–210 characters, some cut by lines); check the phone preview.
```

Prefix the `Avoid:` bullet with `The repo's own inference, not a LinkedIn classifier list. Avoid:` (rest unchanged).

`## Final editorial check`, item 1: replace with `1. **Ownership:** Is this this founder's perspective, and does it sound like his confirmed-native samples in `workspace/voice.md` rather than generic LinkedIn polish?` Item 2: replace `and does one sentence say what the product does?` with `and does one sentence say what the reader can do with the product, without input steps?`

`## Evidence and limits`, after the sentence beginning `LinkedIn also describes a ranker built on LLM embeddings`, add: `Its ranker paper (arXiv 2602.12354, 2026) and a 2020 engineering post model long dwell and skips; weights, thresholds and any effect of post text are unpublished.`

- Evidence: L3-1, L3-2 (platform data), L3-3 (practitioner), L3-4, L3-5, L3-6, L3-7 (primary, abstract level), L3-9 (platform data). Items 5–7: working rules.
- Pinned test: none.
- Risk: headline-click studies are a proxy for "see more" taps; every item states its scope.
- Length: about +60 words.

### Rank 7 · `knowledge/strategies/editorial-pitch.md`, `## Reading budget` · replace

Item 1: replace `one or two sentences tied to a real article, comment, beat, programme, or local context.` with `one or two sentences tied to a real article, comment, beat, programme, or local context, naming who in their audience or region is affected (78 % of journalists call that relevant, only 16 % see it in pitches; Muck Rack 2026, US-heavy).`

Item 3: replace `one short sentence naming the founder's real role, access, or first-hand perspective.` with `one short sentence naming the founder's real role, access, or first-hand perspective, with what the product is as a plain half-sentence (outcome words, no steps, no feature list). For a podcast, this may be the founder's origin story: one true sentence as what he could tell on air, never the opener.`

- Evidence: L5-1, L5-2, L5-4 (practitioner, original PDF); podcast clause: working rule, founder decision.
- Pinned test: `What could this outlet truthfully publish as the headline`, `Keep the body to four functions` and `10–15 individually researched contacts` stay untouched.
- Risk: low.
- Length: +55 words.

### Rank 8 · voice check in outreach: `first-touch.md` `**Pre-send check:**`, `.agents/skills/draft-outreach/SKILL.md` and `.agents/skills/handle-follow-up/SKILL.md` `## Required references` · replace

`first-touch.md`, `**Pre-send check:**`: replace `(4) no `wir`, product biography, impact claim, or undefined number; (5) open markers listed,` with

```text
(4) no `wir`, product biography, input-step description, impact claim, or undefined number; (5) voice: read against `workspace/voice.md`, confirmed-native samples for this channel first; generic LinkedIn polish loses, and thanks, praise, or warmth only in patterns he confirmed there; (6) open markers listed,
```

`draft-outreach`, `## Required references`: replace `- Active project evidence and `workspace/voice.md` when present` with

```text
- Active project evidence, `workspace/projects/<slug>/icp.md` (`## Triggering situation`, `## Consequences and urgency`) for the felt problem, and `workspace/voice.md` when present (confirmed-native samples for this channel first, then sent-approved; never `ai-assisted-or-unknown` as the baseline)
```

`handle-follow-up`, `## Required references`, last bullet: replace `; `workspace/voice.md` when present` with `; `workspace/voice.md` when present (confirmed-native samples first)`.

- Evidence: L1-10 (primary via news release: heavy AI assistance on relationship text lowers perceived sincerity), L3-9 (platform: substance over style); voice order: working rule, existing voice-file labels.
- Pinned test: `draft-outreach` pins (`Return exactly one draft first`, `Add `Risk:` only when a real risk exists`, `alternative only when explicitly requested`, `language-evidence packet`, `Treat the exchange as a state check`, `Do not manufacture visible effort`, `both `Subject:` and the body`) are outside the edited bullet.
- Risk: low; adds no output section.
- Length: +55 words.

### Rank 9 · `knowledge/foundations/short-punchy-content.md`, `## Emotion and evidence`, paragraph 3 · replace

Replace `Emotion opens attention. Evidence earns trust. The post needs both when the topic involves a product, civic action, money, health, or another high-trust decision.` with

```text
Emotion opens attention. Evidence earns trust. This is a working rule for public posts, not a research finding: the post needs both when the topic involves a product, civic action, money, health, or another high-trust decision. Keep emotion mild and true; strong sentiment showed no reply advantage over neutral in the only reply-level data (vendor, 2016). In a private message to a professional, the emotion is theirs (their words, their people's moment), not the founder's story: in one study a story raised counterarguing among decision-makers, and stories persuade mass audiences only slightly on average (`research/2026-11-11-delta-benefit-story-concise.md`, claims 3, 4, 11).
```

- Evidence: L4-3, L4-4, L4-11 (primary / practitioner).
- Pinned test: near miss. The test pins `Emotion opens attention\. Evidence earns trust` (case-sensitive); the text keeps that sentence verbatim, so no test change. A worker must not lowercase or reword it.
- Risk: low.
- Length: +70 words.

### Rank 10 · `.agents/skills/linkedin-multipliers/SKILL.md`, `## Draft shape` item 2 · replace

Replace `2. one short, honest reason for writing; mention the relevant Brief nach Berlin angle only when it explains the connection, without a product explanation;` with

```text
2. one short sentence on what their people or they get, per line 2 of the Drafting card in `knowledge/strategies/first-touch.md`, which also gives the honest reason for writing; the project only as a half-clause, never a product explanation;
```

- Evidence: consistency with rank 3; removes a project name from a public skill. Working rule.
- Pinned test: `must not imitate an email subject or press headline` (item 1), `Every sentence must serve one of those three functions`, `referral or forward request must then be the single primary ask` stay untouched.
- Risk: low.
- Length: neutral.

### Rank 11 · `knowledge/channels/personal-network.md` (top list) and `knowledge/strategies/follow-up.md` (`## Touch plan`, LinkedIn row) · add, replace

`personal-network.md`, after `- Never turn a weak acquaintance into fake warmth.` add:

```text
- Reconnecting after a gap: write it. People underestimate how welcome a short check-in from an acquaintance is, and most who mean to reconnect never send it (preregistered US experiments with no-ask check-ins; not tested with business asks or German contacts). Open with them or the last real exchange; one light question is fine, a request to test, introduce, or share waits for their reply.
```

`follow-up.md`, LinkedIn DM row, `Then` cell: replace `Stop; public engagement only. Re-entry only with a new trigger after 60+ days, at most once a quarter.` with `Stop; public engagement only. Cold or never replied: re-entry only with a new trigger after 60+ days. Known or met in person: one no-ask check-in is fine without a trigger. The quarterly cap is judgment, not research.`

- Evidence: L2-1, L2-2, L2-3 (primary, abstract level, one independent replication), L2-10 (no benchmark either way).
- Pinned test: `follow-ups run on one dated touch plan` needs `## Touch plan`; heading untouched.
- Risk: a check-in could be used to smuggle an ask; the bullet says the request waits for their reply.
- Length: +80 words.

### Rank 12 · `knowledge/markets/germany-eu.md` (`## Risk boundary`, `## Rechtliche Kurzreferenz für Outreach`) and `knowledge/channels/linkedin.md` (`## Sequence`) · replace, add

`germany-eu.md`, `## Risk boundary`, ePrivacy paragraph: append `This position rests on one disputed appellate hint (OLG Hamm 18 U 154/22, 2023; form, date and B2B scope unclear); CJEU C-102/20 concerns inbox advertising, not DMs; no BGH or OLG ruling on LinkedIn or XING DMs was found for 2024–2026 (`research/2026-11-11-delta-germany-market.md`).`

Kurzreferenz, `**Email, UWG §7:**` bullet: append `Two 2026 local-court rulings (AG Düsseldorf, read via publisher summaries) treat even one unsolicited promotional email to a business address as actionable; a public address, an opt-out link, or a "Sprechen Sie uns an" line is not consent. The editorial-pitch route is this repo's risk reading; no ruling on editorial tips was found either way.`

Kurzreferenz, `**LinkedIn invitations:**` bullet: replace `free accounts can add a personalized note to 3 connection requests a month, 200 characters maximum ([Help a563153](https://www.linkedin.com/help/linkedin/answer/a563153));` with `free accounts get 3 personalized notes a month per [Help a563153](https://www.linkedin.com/help/linkedin/answer/a563153) (checked 2026-11-11; other LinkedIn help text says 5), 200 characters maximum; trust the in-app counter;`.

Kurzreferenz, `**Platform DM limits:**` bullet: replace `(reported 2023-08, adult applicability `[PRÜFEN: …]`)` with `(TechCrunch quoting Meta, 2023-08-03: applies to all users)`.

`linkedin.md`, `## Sequence`, paragraph after step 5: replace `Messaging someone who is not a 1st-degree connection generally needs InMail; do not treat a public comment as a DM route.` with `A free account can message 1st-degree connections, and send message requests to members of a shared LinkedIn Group and current coworkers; InMail and Open Profile messages are Premium ([Help a554575](https://www.linkedin.com/help/linkedin/answer/a554575/send-messages-on-linkedin?lang=en), checked 2026-11-11). Do not treat a public comment as a DM route.`

- Evidence: L6-1, L6-2, L6-4, L6-5, L6-8, L6-9, L6-10 (practitioner summaries of rulings; platform data).
- Pinned test: `linkedin.md` pins `true identity`, `Do not pitch in the invitation note`, `match the founder's own channel and language evidence`; all in `## Native writing shape`, untouched.
- Risk: legal content from summaries only; every addition says so. Low effect on draft wording, kept because it fixes stale or wrong statements.
- Length: +120 words.

### Rank 13 · `knowledge/personas/buyers-users.md` and `media-podcasts.md`, `## What earns a reply` · replace

`buyers-users.md`, bullet 2: replace `Gong found that pitching cuts replies by up to 57%.` with `In Gong's 28M-email data, pitching went with up to 57% fewer replies (vendor, observational, checked 2026-11-11).` Bullet 3: replace `50–70 words, at most about 90. Gong's 28M emails: 3–4 sentences and 100 words or fewer had the best reply rates.` with `50–70 words, at most about 90: a medium norm; vendor length data are weak and conflict (`knowledge/strategies/first-touch.md`, `## Evidence boundary`).`

`media-podcasts.md`, bullet 2: replace `First sentence names their audience or region; the second gives the fact. 82% reject pitches that miss their audience or beat (Cision 2026).` with `First sentence names who in their audience or region is affected; the second gives the fact. 88 % delete off-beat pitches and 71 % overly promotional ones (Muck Rack 2026, 897 journalists, US-heavy).`

- Evidence: L1-1, L1-5 (practitioner); L5-1 (practitioner, original PDF); the Cision 82 % was not found in the release opened (L5 "Contradicts").
- Pinned test: heading order unaffected.
- Risk: none.
- Length: neutral.

## Drop or relabel

Each item is applied inside the rank named; listed here so reviewers can check it.

| Item | File | Action | Reason | Rank |
|---|---|---|---|---|
| GOOD NGO and creator examples with input steps in line 2 | `first-touch.md` | delete, replace | they cause the drift the founder logged | 1 |
| `[Projekt in einem Satz: was man eingibt, was rauskommt, wer selbst handelt]` and bare project slots | five persona files | replace | they ask for the mechanism | 2 |
| "Shorter first messages correlate with more replies in vendor email data" | `first-touch.md` | relabel | weak and conflicting vendor data (L1-5); one randomized test found no length effect (L1-6), another favoured short (L4-1) | 3 |
| `Use this structure for a cold private first touch` list | `first-touch.md` | delete | restates the card | 3 |
| `signal-only` value | `templates/interaction.md` | rename to `plain-benefit` | matches the approach table | 3 |
| "one plain sentence saying what the product does" | `publish.md`, `draft-public-post` | reword to outcome words | the private project sentence filled it with steps | 4 |
| NCVO UK volunteer source | `recipient-context.md` | replace | German representative source now exists (L5-8) | 5 |
| "LinkedIn ranks with LLM embeddings of posts …, so the topic must be unambiguous" | `linkedin-public-post.md` | relabel as inference | ranker paper does not say it reads post text (L3-1) | 6 |
| "line 1 about 70 characters, lines 1+2 about 140" | `linkedin-public-post.md` | relabel as tool estimate | no official cut; tools disagree (L3-3) | 6 |
| `Avoid:` phrase list | `linkedin-public-post.md` | label as the repo's inference | LinkedIn's slop criterion is substance, not phrases (L3-9) | 6 |
| "Emotion opens attention. Evidence earns trust." | `short-punchy-content.md` | relabel as working rule (sentence kept for the pinned test) | unsourced (L4 "Contradicts") | 9 |
| "Brief nach Berlin angle" | `linkedin-multipliers` | delete project name | public skill must stay project-agnostic | 10 |
| Quarterly re-entry cap | `follow-up.md` | relabel as judgment | no source (L2 "Contradicts") | 11 |
| Instagram adult-applicability `[PRÜFEN]` | `germany-eu.md` | resolve | L6-10 | 12 |
| "3 notes a month" as fixed | `germany-eu.md` | relabel | LinkedIn pages disagree (L6-8) | 12 |
| "generally needs InMail" | `linkedin.md` | replace | free routes exist (L6-9) | 12 |
| Gong "3–4 sentences, 100 words or fewer" | `buyers-users.md` | delete | not on the cited page (L1-1 lists only buzzwords and pitching) | 13 |
| Cision "82 % reject" | `media-podcasts.md` | replace | not found in the release opened (L5) | 13 |
| Register rows on journalist pitch length and before-noon timing | `claims-register.md` | status change | Muck Rack original now read (L5-4) | register |

## Rejected lane proposals

| Proposal | Lane | Why rejected |
|---|---|---|
| Edit older research notes (2026-10-04 Gong 17.9 % correction, press-benchmarks update, 2026-10-04 LinkedIn finding 1, re-engagement pointer) | L1, L3, L5, L2 | Research notes are dated snapshots; corrections live in the claims register. |
| Subject-line rule "5–6 words, no Kurze Frage" in `email.md` | L1 | 0.4-point reply gap, no sample size for the cut, conflicts with the Kurz-Modus 2–5 words. |
| "Do not mention AI in copy" in `linkedin.md` | L1 | Evidence covers known AI use at work, not copy; the funder persona requires an honest AI sentence. The sincerity part is adopted in rank 8. |
| "Cold written ask is a low-base-rate route" line in `linkedin.md` | L1 | Redundant with `first-touch.md` Boundaries ("a trusted introduction is worth more than more copy polish"). |
| Ready-made decline phrase in the intro request | L2 | Lab study on felt voluntariness, not yes rates; conflicts with the voice file, which rejects automatic "no pressure" lines. |
| "Ask for the referral live" | L2 | Redundant with Intro kit item 7. |
| Label conference follow-up day counts | L2 | No such day count exists in the framework; covered by a register row. |
| Separate "Message order" line (felt problem → benefit → proof → question) | L4 | Folded into the five-field check (rank 5) instead of a new step. |
| Identifiable-victim and gain/loss rules in the Evidence boundary | L4 | No framework text uses these claims; rules against absent behaviour are ceremony. Register rows only. |
| Link-penalty vendor sentence | L3 | Undisclosed sample; does not change the per-goal rule. |
| "Specific, plain words" line in `short-punchy-content.md` | L3 | Redundant with the rank 6 checklist. |
| Track "views inside vs outside network" in `experiments.md` | L3 | Feature availability on the account is unchecked; adds a field nobody fills yet. |
| Silence base-rate bullet in `media-podcasts.md` | L5 | The one-follow-up-then-stop rule already encodes it. |
| Funder "named contact person first" | L5 | Redundant with the persona's flood table ("exact eligibility question in official Sprechstunden"). |
| In-app survey hypothesis for SaaS founders | L5 | Assumption only; no drafting effect. |
| "Aggregated listener voices" give-first option for media | L5 | No source says journalists want it; adds privacy load. |
| du/Sie survey line in `germany-eu.md` | L6 | Workplace data only; the file already says it cannot decide du/Sie. |
| Digital Omnibus and GDPR-damages notes | L6 | Nothing changes for one-to-one outreach; the review date covers the Omnibus. |

## Claims-register rows

Apply to `knowledge/evidence/claims-register.md` in its existing format. Rows marked "(update)" replace the existing row with the same claim; all others are appended. Set the file's `last_verified_at` to 2026-11-11 and `review_after` to 2027-02-11.

| Claim | Origin | Status | Required verification |
|---|---|---|---|
| (update) Pitches under 150–200 words get markedly more journalist replies (e.g. ~4x vs. 500+ words) | Muck Rack State of Journalism 2026 (original PDF); Propel/EPR/5W 2026 via secondary summaries | split: Muck Rack preference verified-with-limits; Propel ~4x unverified | 69 % prefer pitches under 200 words in a graphic pooling eight survey years, no n per figure; a preference, not a reply rate. Propel original not opened (vendor data, 2024). https://media.muckrack.com/documents/State_of_Journalism_2026_1.pdf (verified 2026-11-11). research/2026-11-11-delta-audience-psychology.md |
| (update) Most journalists prefer pitches sent before noon | Muck Rack State of Journalism 2026 (original PDF) | verified-with-limits, weak | 78 % in the pooled eight-year graphic; 50 % have no weekday preference; US-heavy, weak for Germany (verified 2026-11-11) |
| (update) Questions increase reply rates by a fixed percentage | Cross-Border Playbook | unverified; no direction established | Banerjee and Urminsky (Marketing Science 2025; preliminary 2021 version read) find earlier headline literature gives no useful guidance on the direction of cues such as questions or numbers. Test one change per post or batch |
| (update) Fixed hook lengths, hashtag counts, or image formats guarantee LinkedIn performance | Circulating LinkedIn advice | unverified | Also: LinkedIn documents no "see more" cut; vendor tools say 140–210 characters or cut by lines (checked 2026-11-11). Check the phone preview |
| Naming the recipient's benefit in line 2, instead of features or how the product works, raises replies to cold outreach | Sales OS Drafting card; founder feedback 2026-11-10 | working rule, no randomized test found | Indirect support only (benefit salience, concrete wording; rows below). Compare `hook_variant` and `reaction` across the founder's own batches. research/2026-11-11-delta-benefit-story-concise.md |
| More emotional appeals or stories raise replies from journalists, funders, NGO staff, or officials | Founder wish; common copy advice | unverified; one contrary study | No study with these recipients found. A story raised counterarguing among US state legislators (Xu, Winett and Niederdeppe 2021, n = 417 in two arms). https://ijoc.org/index.php/ijoc/article/download/17446/3612 (verified 2026-11-11) |
| Narrative messages persuade every audience | Common narrative-persuasion claim | rejected as universal | Meta-analysis r ≈ .17–.23, mostly student and online samples (Braddock and Dillard 2016, abstract); backfire with legislators (row above). Optional true scene for public posts only |
| Making a concrete benefit salient and the wording simple raises take-up (31 % vs 17 %; simplified wording 23 %) | Bhargava and Manoli, AER 2015, figures via J-PAL | verified-with-limits | 35,050 IRS letters, money-owed benefit; percentages only on the J-PAL page. https://doi.org/10.1257/aer.20121493 (verified 2026-11-11, abstract) |
| Concrete wording makes recipients feel listened to and raises satisfaction and purchases | Packard and Berger, JCR 2021 | verified-with-limits | Five studies, 1,000+ customer-service interactions; not cold outreach; no replication found. https://doi.org/10.1093/jcr/ucaa038 (verified 2026-11-11, abstract) |
| Mildly positive or negative email sentiment draws 10–15 % more replies than neutral; very strong sentiment does no better | Boomerang analysis of 40M emails (2016-02-12) | verified-with-limits | Vendor-owned, correlational, automated sentiment scoring, ten years old. https://blog.boomerangapp.com/?p=3933 (verified 2026-11-11) |
| Investors fund preparedness, not passion | Chen, Yao and Kotha, AMJ 2009 | verified-with-limits | VC lab and field study, abstract only; not tested on foundations. https://doi.org/10.5465/amj.2009.36462018 (verified 2026-11-11) |
| A single named victim reliably beats statistics (identifiable victim effect) | Common persuasion claim | contested, not established | Meta-analysis r = .05 (41 studies); preregistered replication found no effect. https://doi.org/10.1080/15534510.2016.1216891 ; https://doi.org/10.1525/collabra.90203 (verified 2026-11-11, abstracts) |
| Cutting a survey-request email from 127 to 49 words raised click-through from 2.7 % to 4.8 % | Rogers and Lasky-Fink, HKS article 2020 | verified-with-limits | Randomized, 7,002 US school district leaders, outcome is a link click, authors' own summary. https://www.hks.harvard.edu/sites/default/files/HKSEE/HKSEE%20PDFs/Write%20shorter%20messages.pdf (verified 2026-11-11) |
| Personalization and invitation length do not change response in randomized email invitations | Trespalacios and Perkins, TechTrends 2016 | verified (abstract and metadata only) | 1,598 students, survey invitations; no cold-sales transfer. https://scholarworks.boisestate.edu/edtech_facpubs/153 |
| Shorter cold messages get more replies | Hunter 2025/2026 (r = −0.09, 11M emails; non-monotonic in 2026); Gong and Lavender claim the opposite | conflicting vendor data, not a rule | Original data unavailable; word counts in the repo are medium norms. https://hunter.io/the-state-of-cold-email |
| Buzzwords and numbers in subject lines cut opens by up to 17.9 %; pitching in the body cuts replies by up to 57 % | Gong 28M-email page (Outbound Squad) | vendor observational, directional only | Page confirmed 2026-11-11 (modified 2026-05-27); no method, period, or definition of "pitching"; opens unreliable. https://www.gong.io/blog/does-cold-email-even-work-any-more-heres-what-the-data-says |
| Cold-email reply-rate benchmarks (0.45 %, 3.43 %, 4.1 %) can be compared across vendors | Belkins, Instantly, Hunter | rejected as comparable | Definitions and senders differ about tenfold; compare only within the founder's batches. https://belkins.io/blog/cold-email-response-rates |
| Email requests succeed far less often than face-to-face requests, and requesters overestimate email success ("34 times") | Roghanizad and Bohns, JESP 2016/2017 | direction read via APS summary; numbers unverified | Open the paper (https://doi.org/10.1016/j.jesp.2016.10.002); small student samples; do not quote the ratio |
| Heavy AI assistance in relationship-oriented messages lowers perceived sincerity (40–52 % vs 83 %) | Coman and Cardon, IJBC 2025 | read via university news release only | Supervisor-to-employee vignettes, n = 1,100; journal article not opened. https://news.ufl.edu/2025/08/writing-ai-work/ |
| 69 % of US decision makers are bothered by AI-written cold email unless it feels human; 65 % name "too pushy or sales-focused" as the top failure | Hunter State of Email Outreach 2026 survey | unverified, vendor-owned survey | Respondent number and method not on the page; 2025 edition framed AI concern differently (n = 217). https://hunter.io/the-state-of-cold-email |
| 88 % of journalists delete off-beat pitches, 71 % overly promotional, 50 % mass-email-looking, 46 % repeated without reply; 54 % seldom or never respond to pitches | Muck Rack State of Journalism 2026 | verified-with-limits | 897 usable responses, mostly US, UK, Canada, India, fielded 2026-01-30 to 2026-03-02; direction usable, shares not German (verified 2026-11-11) |
| 78 % of journalists call a pitch relevant when it affects the community their audience belongs to; 16 % say pitches usually or always reflect it | Muck Rack State of Journalism 2026 | verified-with-limits | Same sample; "community" wording is US-shaped (verified 2026-11-11) |
| 82 % of journalists reject pitches that do not fit their audience or beat | Cision State of the Media 2026 (as cited in the media persona) | unverified | Not in the Cision release opened 2026-11-11 (it gives 72 %, 53 %, 66 %); read the full report |
| 62 % of volunteers who plan to cut back name a time reason; 36.7 % of Germans 14+ volunteer | Deutscher Freiwilligensurvey 2024 | verified-with-limits | n = 27,542 individuals, not organisations. https://www.bundesregierung.de/resource/blob/2348674/2451626/16111cfdf152d3ed813de8a7da700f13/hauptbericht-freiwilliges-engagement-in-deutschland-data.pdf (verified 2026-11-11) |
| People underestimate how much acquaintances appreciate a no-agenda check-in, and most who want to reconnect never send the message | Liu, Rim, Min and Min, JPSP 2023; Aknin and Sandstrom, Communications Psychology 2024 | verified-with-limits | Abstracts only; replication of Study 4a (n = 742, d = 0.25); US samples, no ask tested; not a reply-rate forecast. https://doi.org/10.1037/pspi0000402 ; https://doi.org/10.1038/s44271-024-00075-8 |
| Follow up within 24–48 hours of meeting someone at a conference | Blog and vendor templates | heuristic only | No study found; compare outcomes by days since meeting before treating as a rule |
| Each negative word in a headline raises click-through by about 2.3 %, each positive word lowers it by about 1 % | Robertson et al., Nature Human Behaviour 2023 | verified-with-limits | 22,743 Upworthy tests, US news clicks; not a licence for negativity in civic posts. https://doi.org/10.1038/s41562-023-01538-4 |
| Headline concreteness has a curved effect: too vague and too concrete both lose clicks | Le Quéré and Matias, Scientific Reports 2025 | verified-with-limits | Registered report, 8,977 experiments, abstract level; news headline clicks. https://doi.org/10.1038/s41598-024-81575-9 |
| Simpler headlines get more clicks and attention; professional writers do not show the preference | Shulman, Markowitz and Rogers, Science Advances 2024 | verified-with-limits | 30,000+ field experiments, English, abstract level. https://doi.org/10.1126/sciadv.adn2555 |
| LinkedIn ranks posts with LLM embeddings of the post text, so topic clarity is a ranking factor | `research/2026-10-04-linkedin-posts-2026-delta.md` | inference only | Ranker paper (arXiv 2602.12354) and the 2026-03-12 blog do not state that the ranker reads post text; keep topic clarity as an editorial rule |
| LinkedIn's "AI slop" demotion cut views of classified content by 40 % | LinkedIn news post 2026-09-15 | verified-with-limits | No baseline, window or scope; criterion is missing point of view or substance. https://news.linkedin.com/2026/how-linkedin-is-tackling-ai-slop |
| A single unsolicited promotional email to a business address is actionable even with a public address, opt-out link and no customer relationship | AG Düsseldorf 38 C 135/25 and 290c C 153/25 (2026), via Otto Schmidt summaries | verified-with-limits (summaries only) | Open the full texts; local courts, not binding. research/2026-11-11-delta-germany-market.md |
| Social-network DMs are "elektronische Post" needing prior express consent, including B2B | OLG Hamm 18 U 154/22 (2023), via law-firm blogs | unverified, disputed | Full text; confirm form, date and whether recipients were businesses; no BGH ruling found |
| CJEU C-102/20 and BGH I ZR 25/19 establish that social DMs are electronic mail | Practitioner pages | rejected as stated | Both concern webmail inbox advertising; extension to DMs is analogy |
| Free LinkedIn accounts get exactly 3 personalized connection notes a month | LinkedIn Help a563153 | verified-with-limits | Other LinkedIn help text says 5; check the in-app counter (checked 2026-11-11) |
| Instagram limits non-followers to one text-only message until accepted, for all users | TechCrunch 2023-08-03 quoting Meta | verified-with-limits | Instagram Help is script-rendered and unread; confirm in-app |

## Worker split

**Worker A, outreach files.** Ranks 1, 2, 3, 5, 7, 8, 10, 11, 12, 13. Files: `knowledge/strategies/first-touch.md`, `knowledge/strategies/recipient-context.md`, `knowledge/strategies/editorial-pitch.md`, `knowledge/strategies/follow-up.md`, `knowledge/personas/buyers-users.md`, `creators-influencers.md`, `funders-foundations.md`, `media-podcasts.md`, `ngos-civic-orgs.md`, `knowledge/channels/linkedin.md`, `knowledge/channels/personal-network.md`, `knowledge/markets/germany-eu.md`, `core/steps/engage.md`, `.agents/skills/draft-outreach/SKILL.md`, `.agents/skills/handle-follow-up/SKILL.md`, `.agents/skills/linkedin-multipliers/SKILL.md`, `templates/interaction.md`.

**Worker B, LinkedIn and post files plus register.** Ranks 4, 6, 9 and the claims-register rows. Files: `knowledge/strategies/linkedin-public-post.md`, `knowledge/foundations/short-punchy-content.md`, `core/steps/publish.md`, `.agents/skills/draft-public-post/SKILL.md`, `knowledge/evidence/claims-register.md`.

Both workers: set `last_verified_at: 2026-11-11` in each edited knowledge file, change nothing outside their list, keep every pinned phrase named above, and run `npm run check` (expected: all tests pass, no test file changed). Private patches go to a third pass by the lead, from `research/eval/synthesis-private.md`, after both workers finish.
