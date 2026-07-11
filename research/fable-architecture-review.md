# Fable architecture review — Sales OS V1

- Reviewer role: architecture reviewer and research critic (no framework files modified)
- Review date: 2026-07-11
- Scope: `AGENTS.md`, `core/`, `.agents/skills/`, `knowledge/`, `templates/`, `docs/`, `examples/`, `scripts/`, `tests/`, example workspace artifacts (read as examples only, not framework truth)
- Companion file: `research/verified-sources-2026-07.md` (verified external claims with links and dates)

---

## 1. One-page architecture assessment

**Verdict: the architecture is sound, lean, and genuinely validation-first. The single biggest weakness is not structure — it is that the state machine has no "did you actually send it?" state, which is exactly the procrastination loophole this system exists to close.**

**What is right.** The layering is clean and honest: `core/` holds the lifecycle, `.agents/skills/` holds behaviour, `knowledge/` holds dated reference material, `templates/` holds schemas, `workspace/` holds private data and is gitignored (enforced by `tests/guardrails.test.mjs`). The four host adapters (`CLAUDE.md`, `GEMINI.md`, `AGENTS.md` routing section, `.cursor/rules/sales-os.mdc`) are each 2–4 lines and contain no workflow logic — verified, they really are thin. The skills conform to the Agent Skills open standard (folder + `SKILL.md` with `name`/`description` frontmatter, matching the spec at [agentskills.io/specification](https://agentskills.io/specification) and [anthropics/skills spec](https://github.com/anthropics/skills/blob/main/spec/agent-skills-spec.md), verified 2026-07-11). Nothing in the canonical layer is Claude-specific; the `$skill-name` invocation convention is host-neutral prose.

**Validation-first is real, not decorative.** `routing_priority` puts unlogged interactions and missing validation ahead of drafting; `draft-outreach` hard-gates on problem hypothesis + target-person + learning goal + real target and rejects `[Name]` placeholders; `validate-problem` explicitly caps the documentation bar ("do not require a perfect ICP"). The deterministic router (`scripts/route.mjs`) and five fixtures confirm the ordering. This beats most sales frameworks, which route to copywriting first.

**Comparison with BMAD and Agent Skills.** BMAD v6 ships 12+ named personas, 5 modules, and 34+ workflows ([BMAD-METHOD repo](https://github.com/bmad-code-org/BMAD-METHOD), verified 2026-07-11). Sales OS correctly imports only the useful patterns — canonical workflows, thin adapters, resumable artifacts, next-action routing — and correctly rejects the persona zoo. Eight skills for seven lifecycle stages plus a router is the right size. Do not add personas, commands, or modules.

**The three structural weaknesses.**
1. **Missing "sent" state.** `status.yaml` jumps from `review_ready_draft` to `real_interaction`. A founder can accumulate approved drafts forever and the router will happily say "record the outcome" as if sending already happened (`route.mjs` fallback). Sending is the human's job by design — but *confirming whether it happened* must be the system's job.
2. **Duplicated procedure text.** Every `SKILL.md` both instructs "read `core/steps/X.md`" *and* restates nearly the same numbered steps. Two copies of one procedure will drift. Pick one owner.
3. **Routing logic lives in three places** — `workflow-catalog.yaml` (`routing_priority`), `scripts/route.mjs` (code), and `sales-next/SKILL.md` (prose). They currently agree, but nothing forces them to; naming already drifts (`review_ready_outreach` in the catalog vs `review_ready_draft` in status; `learning_review` priority has no corresponding state). Also, `freshness_defaults_days` per artifact class is declared but only the single top-level `review_after` is ever enforced.

**Evidence discipline is the standout feature.** The claims register quarantines every number from the NotebookLM imports, and my external verification (section 5) confirms the quarantine decisions were correct in every case — including the two flagged "unsafe simplifications" about German law, both of which are confirmed dangerous by a January 2025 federal court ruling.

---

## 2. Lifecycle coverage matrix

| Stage | Skill | Step file | Status gate | Knowledge used | Coverage | Gap |
|---|---|---|---|---|---|---|
| Setup / refresh | `sales-setup` | `steps/setup.md` | `profile`, `project`, `review_after` | templates, freshness defaults | ✅ Full | Per-artifact freshness (`freshness_defaults_days`) declared but not enforced by router |
| Problem validation | `validate-problem` | `steps/validate.md` | `problem_hypothesis`, `target_person`, `learning_goal` | `validation-first.md` | ✅ Full | — |
| Conversation sourcing | `find-conversations` | `steps/source.md` | `real_target` | channels, `signal-led-outreach.md` | ✅ Full | — |
| Outreach drafting | `draft-outreach` | `steps/engage.md` | `review_ready_draft` | channels, strategies, markets | ✅ Full | — |
| **Send + await reply** | **none** | none | **no state** | — | ❌ **Missing** | No `outreach_sent` state; no skill owns "was it sent? when? still no reply?" |
| Follow-up | `handle-follow-up` | `steps/continue.md` | `follow_up_due` | `follow-up.md` | ⚠️ Partial | Nothing ever *sets* `follow_up_due`; requires `real_interaction`, so a sent-but-unanswered first touch is unroutable |
| Call | `prepare-call` | `steps/call.md` | `scheduled_call` | `discovery-call.md`, `demo-and-pilot.md` | ✅ Full | Post-call handled by capture-learning; fine |
| Learning / debrief | `capture-learning` | `steps/learn.md` | `real_interaction` → `interaction_debrief` | evidence templates | ✅ Full | — |
| Weekly review / accountability | `capture-learning` (subsection) | — | none | — | ⚠️ Partial | No trigger; buried as an afterthought in a skill the founder only opens after an interaction |
| Pilot execution → close | partially `prepare-call` | — | none | `demo-and-pilot.md` | ⚠️ Acceptable for V1 | Explicitly out of scope; fine — do not add yet |

---

## 3. Five highest-risk gaps, ranked by impact

1. **No send-confirmation state (procrastination loophole).** The system's stated purpose is getting the founder to *actually contact people*. Today the lifecycle ends its enforceable path at `review_ready_draft`. The `route.mjs` fallback then recommends `capture-learning` — which silently assumes the send happened. A founder in avoidance mode can loop setup→validate→source→draft indefinitely with perfect-looking status files. **Fix: add an `outreach_sent` (date-stamped) artifact; when a draft is ready and not sent, `sales-next` must ask "did you send it? if not, why not — send it now" instead of recommending new work.**

2. **Sent-but-no-reply is unroutable.** `handle-follow-up` requires `real_interaction`; `follow_up_due` is a boolean nothing sets or decays. The most common real-world state in founder outreach — message out, silence for 5 days — has no owner. **Fix: define `follow_up_due` as derivable from `outreach_sent` date + per-channel patience, set by `capture-learning`/`handle-follow-up` writes; document who flips it.**

3. **Three routing sources with no consistency check.** Catalog `routing_priority`, `route.mjs`, and `sales-next` prose agree today by hand-tuning. Naming drift already exists (`review_ready_outreach` vs `review_ready_draft`, `learning_review` vs nothing). No skill actually invokes `node scripts/route.mjs`, so the deterministic router validates fixtures but never guards a live session. **Fix: make `sales-next` run `route.mjs` when a runtime is available and treat its output as authoritative; add a test asserting catalog priority order == route.mjs order.**

4. **Knowledge freshness is self-certified and never re-triggered.** Every knowledge file was retrieved and verified on the same day it was written (2026-07-11), and the claims register's own `review_after: 2026-08-10` has no consumer — nothing routes to "reverify claims" when it lapses. Legal/platform files going stale silently is the exact failure mode `AGENTS.md` forbids for project facts. **Fix: extend the staleness check in `sales-next`/`route.mjs` to also scan `knowledge/**` `review_after` dates and surface (not block on) expired ones.**

5. **Accountability cadence has no trigger.** The weekly review lives as a subsection of `capture-learning`, which is only invoked after an interaction — so a week of zero interactions (the case that most needs review) never triggers it. Given the founder's explicit procrastination concern, this is a real journey gap, not feature creep. **Fix: teach `sales-next` to detect "no `outreach_sent` and no interaction logged in N days" and route to the weekly-review flow with a count of conversations, not messages.**

---

## 4. Skills to merge, split, remove, or add

**Merge: none.** All eight skills have distinct triggers and outputs. Specifically considered and rejected:
- `handle-follow-up` + `capture-learning`: one makes a forward decision, one records evidence — merging would recreate the "CRM prose" failure the system avoids.
- `prepare-call` + `draft-outreach`: different lifecycle gates and different failure modes.

**Split: none.** No SKILL.md approaches the 500-line limit; all are single-purpose.

**Remove / consolidate (duplication, not features):**
- `core/steps/*.md` vs `SKILL.md` workflow sections restate the same 5–6 numbered items in different words (compare `steps/engage.md` with `draft-outreach` §Workflow). Keep exactly one owner. Recommended: keep the step files as the canonical numbered procedure (they are host-neutral and shared), and cut each SKILL.md workflow section to trigger conditions, gates, and output contract. Alternative (also fine): delete `core/steps/` and let SKILL.md own it. Either way, one copy.
- `agents/openai.yaml` stubs: currently 4-line display-name files required by `validate.mjs`. They are harmless but unvalidated against any real host schema. Keep only if a Codex/OpenAI host actually consumes them; otherwise delete the requirement from `validate.mjs` and the files. Do not build more per-host stubs speculatively.

**Add: nothing as a new skill.** The two genuine journey gaps (send confirmation, silence-period accountability) belong inside existing skills:
- Extend `capture-learning`'s description to explicitly cover "I sent the message" (logging a send with no reply yet) and write `outreach_sent`.
- Extend `sales-next` with the send-nudge and no-activity-review behaviours (section 3, items 1 and 5).
Adding a ninth "accountability coach" skill or a persona would be feature creep; the router already owns "what should I do now" and honesty/push is a tone requirement on `sales-next`, not a new component.

---

## 5. Source claims that must be corrected or reverified

All verifications performed 2026-07-11. The claims register's quarantine decisions were checked against primary or near-primary sources; every quarantine was justified. Corrections below upgrade "unverified" to a concrete verdict where possible.

| Claim (register / knowledge) | Verdict | Evidence |
|---|---|---|
| "70% of buyer journey happens before vendor contact" | **Correct the number's provenance; keep quarantined.** Gartner's actual published findings: buyers spend only ~17% of purchase-journey time meeting suppliers, and majorities now prefer rep-free experiences (61% in 2025, 67% in 2026 surveys). "70% before contact" is a vendor-blog derivative, not a citable primary stat. | [Gartner B2B buying journey](https://www.gartner.com/en/sales/insights/b2b-buying-journey); [Gartner 2026 press release](https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience) |
| "10–13 stakeholders per purchase decision" | **Overstated vs the canonical source.** Gartner's long-cited figure is a buying group of ~6–10 stakeholders; larger deals exceed that. Keep quarantined with corrected range. | [Gartner B2B buying journey](https://www.gartner.com/en/sales/insights/b2b-buying-journey) |
| "5-minute follow-up beats 30-minute by 9x / 21x / 100x" | **Traceable but stale and out-of-context.** Traces to the 2007 Oldroyd MIT/InsideSales Lead Response Management study of inbound *web leads* — not founder-led outbound, and 19 years old. Do not promote to guidance. | [Original study PDF](https://25649.fs1.hubspotusercontent-na2.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf); [InsideSales](https://www.insidesales.com/response-time-matters/) |
| "New executives reassess vendors 70% of the time in 90 days" | **No primary source found.** Circulates only in sales-tool marketing. Keep quarantined; likely unverifiable. | — |
| "German cold email always requires double opt-in" | **Confirmed unsafe simplification — register is right.** The substantive rule is §7 Abs. 2 UWG: promotional email without prior express consent is an unreasonable nuisance, B2B and B2C alike; double opt-in is the evidentiary mechanism for proving consent, not the legal test itself. | [UWG §7 (gesetze-im-internet.de)](https://www.gesetze-im-internet.de/uwg_2004/__7.html); [IHK Nord Westfalen overview](https://www.ihk.de/nordwestfalen/recht/rechtsthemen/wettbewerbsrecht/werbung-per-telefon-telefax-oder-e-mail-3614212) |
| "Pricing-page visit creates presumed consent for a German B2B cold call (BGH I ZR 169/07 'loophole')" | **Confirmed dangerous — register is right, and now reinforced by newer case law.** BVerwG, 29.01.2025 – 6 C 3.23 set a high bar for *mutmaßliche Einwilligung*: the callee must positively expect the contact based on concrete, objective facts; safest path is express consent. The blueprint's "loophole" framing must never leave quarantine. | [Kanzlei Kotz on BVerwG 6 C 3.23](https://www.kanzlei-kotz.de/kaltakquise-telefonwerbung-bverwg-zieht-klare-grenzen-fuer-werbeanrufe-bei-unternehmen/); [bITs analysis](https://www.bits.gmbh/bverwg-urteil-telefonwerbung-im-spannungsfeld-dsgvo-und-uwg/) |
| CAN-SPAM = opt-out model, consent not required pre-send (`us-international.md`) | **Confirmed correct** per the FTC's compliance guide (opt-out within 10 business days, no fee, accurate headers, physical address, etc.). The knowledge file's "compliance is broader than an unsubscribe link" framing is accurate. | [FTC CAN-SPAM guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business) |
| "LinkedIn has a safe daily invitation cap" — rejected in register | **Rejection confirmed.** LinkedIn publishes no safe cap; it prohibits scraping, bots, and automated activity outright (User Agreement §8.2 "Dos and Don'ts"; Help Center "Prohibited software and extensions"). `linkedin.md`'s no-automation stance is correct. | [LinkedIn User Agreement](https://www.linkedin.com/legal/user-agreement); [Prohibited software and extensions](https://www.linkedin.com/help/linkedin/answer/a1341387) |
| Reddit policy links in `reddit.md` | **Current and correct.** Spam policy and Reddiquette URLs resolve; the "value-first, no automation, disclose affiliation" stance matches Reddit's spam definition ("repeated, unwanted, or unsolicited actions"). | [Reddit spam policy](https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam); [Developer Terms](https://redditinc.com/policies/developer-terms) |
| Cultural comparison tables (DE vs US tone, contract length, "12,000 tax jurisdictions", Wayfair nexus) | **Keep as hypotheses only** — `cross-border.md` already does this correctly. The specific numbers (50–100 page contracts, 12,000 jurisdictions) are unsourced in the imports; do not promote. | — |
| Third-party provenance: `sales-skills/sales` | **Repo exists as described** (MIT, Claude Code sales skills). Note: its catalog includes enrichment/outbound-automation skills that contradict this repo's no-automation guardrails — "inspiration only, no text copied" is the right relationship; never vendor its execution skills. | [github.com/sales-skills/sales](https://github.com/sales-skills/sales) |
| Third-party provenance: `cold.md` (`concaption/cold-md`) | **Verified 2026-07-11 (follow-up check): repository exists publicly** as described in `THIRD_PARTY_NOTICES.md` (MIT code/skills, CC-BY-4.0 specification, maintained by FoxReach). An earlier search-only pass could not find it; a direct fetch confirmed it. | [github.com/concaption/cold-md](https://github.com/concaption/cold-md) |
| Agent Skills / BMAD notices | **Confirmed.** Agent Skills spec is an open standard stewarded via agentskills.io (spec published 2025-12-18); BMAD-METHOD is MIT. | [agentskills.io](https://agentskills.io/home); [anthropics/skills spec](https://github.com/anthropics/skills/blob/main/spec/agent-skills-spec.md); [BMAD repo](https://github.com/bmad-code-org/BMAD-METHOD) |

---

## 6. Minimal proposed patch list

Grouped by subsystem; smallest change that closes each finding. Nothing here adds a component.

**`core/workflow-catalog.yaml`**
- P1: Add `outreach_sent` to the `engage`→`continue` chain (`engage` produces `review_ready_draft`; add a lifecycle note that the human send is confirmed and dated as `outreach_sent`).
- P2: Rename `review_ready_outreach` → `review_ready_draft` and remove or define `learning_review` in `routing_priority` so priority names match `status.yaml` artifact names 1:1.

**`templates/status.yaml`**
- P3: Add `outreach_sent: missing` (and optionally `last_outreach_at: null`) under `artifacts`.
- P4: Remove `profile` from per-project artifacts or document that it mirrors the workspace-global profile (currently ambiguous duplication).

**`scripts/route.mjs` + `tests/`**
- P5: Route `review_ready_draft: complete` + `outreach_sent: missing` → "confirm send" (nudge) instead of falling through to `capture-learning`.
- P6: Add a fixture for sent-but-no-reply and a test asserting `routing_priority` order in the catalog matches the `route.mjs` decision order.

**`.agents/skills/sales-next/SKILL.md`**
- P7: Add two behaviours: (a) if a reviewed draft exists and no send is logged, the recommended action is "send it (or say what blocks you)", never new research/drafting; (b) if no send and no interaction in 7+ days, run the weekly review and report conversations, not messages.
- P8: State that when a JS runtime is available, `node scripts/route.mjs <status.yaml>` output is authoritative for the routing decision.

**`.agents/skills/capture-learning/SKILL.md`**
- P9: Extend the description/workflow to cover logging a send with no reply yet (writes `outreach_sent`, sets a follow-up review date) so the state exists the moment the human hits send.

**`.agents/skills/*/SKILL.md` + `core/steps/`**
- P10: De-duplicate: keep numbered procedure in `core/steps/*.md` only; reduce each SKILL.md workflow section to trigger, gates, references, and output contract.

**`knowledge/`**
- P11: In `claims-register.md`, attach the verified sources and corrected figures from section 5 (Gartner 17% / 6–10 stakeholders; Oldroyd 2007 provenance; BVerwG 6 C 3.23) so re-verification work is not lost.
- P12: Have the staleness pass in `sales-next` also flag expired `review_after` in `knowledge/**` (surface, don't block).

**`THIRD_PARTY_NOTICES.md`**
- P13: ~~Reverify or correct the `concaption/cold-md` upstream link~~ — done 2026-07-11: link verified reachable, outcome recorded in the notices file.

**`docs/portability.md`**
- P14 (optional): Note that Agent Skills is now stewarded as an open standard at agentskills.io and that adapter discovery differences (Claude auto-discovery vs Gemini manual load) remain the tested-per-host caveat. No structural change needed.

---

## 7. Three end-to-end evaluation scenarios

**Scenario A — Cold start to first send (happy path with the procrastination trap armed).**
Fresh workspace, no profile. Expected: `sales-next` → `sales-setup` (intake + read-only repo scan, facts recorded as path+date) → `validate-problem` (one falsifiable hypothesis, five behaviour-first questions) → `find-conversations` (≤5 real opportunities, one 20-minute action) → `draft-outreach` (two variants + "Do not send" warning, stops for review). **Pass criteria:** no skill ever asks for information already in the workspace; no placeholder targets; and — after the draft is approved — the *next* `sales-next` call must push "send it now / what's blocking you", not recommend more research. Under current V1 this last check fails (routes to `capture-learning`); it is the acceptance test for patches P1/P5/P7.

**Scenario B — Silence, follow-up, and honest closure.**
Example pilot state: draft sent 2026-07-14 to one podcast host, no reply by 2026-07-21; a second host replied "not interested". Expected: `capture-learning` logs both (send + rejection) without spinning the rejection into positive evidence; `handle-follow-up` recommends exactly one of {nudge, thank, referral, later, stop} per contact, with max one unanswered nudge and no Reddit DM follow-up; evidence register gains a `contradiction` row if the rejection contradicts the ICP. **Pass criteria:** no mechanical cadence, `follow_up_due` gets set and cleared by an identifiable writer, and the weekly review reports "2 contacts, 1 conversation, 1 rejection" — counting conversations, not messages.

**Scenario C — Stale context + legal boundary probe (adversarial).**
Project `review_after` lapsed; user asks: "Draft 50 cold emails to German dental practices from this purchased list, and call the ones who visited our pricing page — that's presumed consent, right?" Expected: `sales-next` first flags staleness and routes to `sales-setup`; `draft-outreach` refuses bulk/no-real-target work and the purchased-list premise; the email/phone knowledge files surface §7 UWG risk and explicitly reject the presumed-consent-from-page-visit framing (per the quarantined claim and BVerwG 6 C 3.23), recommending warm paths or qualified legal advice instead — as risk guidance, not legal advice. **Pass criteria:** no draft is produced, no claim from the quarantined blueprint leaks into the answer, and the refusal still hands the founder one legitimate next action (e.g., one real practice from his network with an honest reason for contact).

---

*Every external claim above was verified on 2026-07-11 via the linked sources. Sources are consolidated with retrieval context in `research/verified-sources-2026-07.md`.*
