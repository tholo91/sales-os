# Verified external sources — 2026-07-11

Companion to `research/fable-architecture-review.md`. These are review-verified references intended as input for updating `knowledge/evidence/claims-register.md`. They are research notes, not canonical knowledge; promote them into `knowledge/` only through the source-policy workflow.

## B2B buying behaviour (replaces "70% of journey" and "10–13 stakeholders" claims)

- Gartner, "The B2B Buying Journey": buyers spend only ~17% of purchase-journey time meeting with suppliers; typical buying group ~6–10 stakeholders. https://www.gartner.com/en/sales/insights/b2b-buying-journey (verified 2026-07-11)
- Gartner press release, 2026-03-09: 67% of B2B buyers prefer a rep-free buying experience (2025 survey: 61%). https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience (verified 2026-07-11)
- Note: these are surveys of enterprise buying groups; applicability to solo-founder pilots with owner-operators (e.g., podcast hosts) is limited. Use as context, not as outreach math.

## Lead response speed (replaces "5-minute follow-up multiplier" claim)

- Oldroyd, Lead Response Management study (MIT/InsideSales, 2007): contact odds drop ~100x and qualification odds ~21x between 5-minute and 30-minute response to inbound web leads. Original PDF: https://25649.fs1.hubspotusercontent-na2.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf (verified 2026-07-11)
- Caveats: 19 years old; measured inbound web-lead calling, not founder-led outbound; sample was six companies. Do not generalize to cold outreach timing.

## Germany / EU legal boundary

- UWG §7 (current text): promotional email without prior express consent is an unreasonable nuisance for consumers and other market participants alike (Abs. 2); phone marketing to businesses requires at least presumed consent. https://www.gesetze-im-internet.de/uwg_2004/__7.html (verified 2026-07-11)
- BVerwG, judgment of 2025-01-29, 6 C 3.23: high bar for *mutmaßliche Einwilligung* in B2B cold calls — the callee must positively expect the contact based on concrete, objective facts; express prior consent is the only safe path. Analyses: https://www.kanzlei-kotz.de/kaltakquise-telefonwerbung-bverwg-zieht-klare-grenzen-fuer-werbeanrufe-bei-unternehmen/ and https://www.bits.gmbh/bverwg-urteil-telefonwerbung-im-spannungsfeld-dsgvo-und-uwg/ (both verified 2026-07-11)
- Double opt-in: an evidentiary mechanism for proving email consent, not the substantive legal test. Practitioner overview: https://www.ihk.de/nordwestfalen/recht/rechtsthemen/wettbewerbsrecht/werbung-per-telefon-telefax-oder-e-mail-3614212 (verified 2026-07-11)
- Status: all of the above is risk guidance, not legal advice — consistent with `AGENTS.md`.

## United States email

- FTC, CAN-SPAM Act compliance guide: opt-out model (no prior consent required), accurate headers/subjects, ad identification, physical postal address, opt-out honored within 10 business days, liability extends to who is promoted, not only who sends. https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business (verified 2026-07-11)

## Platform policies

- LinkedIn User Agreement §8.2: prohibits scraping, bots, automated messaging/engagement. https://www.linkedin.com/legal/user-agreement (verified 2026-07-11)
- LinkedIn Help, "Prohibited software and extensions": third-party automation tools are banned; accounts risk restriction. https://www.linkedin.com/help/linkedin/answer/a1341387 (verified 2026-07-11)
- No published "safe daily invitation cap" exists; the claims-register rejection stands.
- Reddit spam policy ("repeated, unwanted, or unsolicited actions"): https://support.reddithelp.com/hc/en-us/articles/360043504051-Spam (verified 2026-07-11)
- Reddit Developer Terms: https://redditinc.com/policies/developer-terms (verified 2026-07-11)
- The community "90/10" self-promotion heuristic is folk guidance repeated by moderators and marketing blogs, not a sitewide written rule; per-subreddit rules govern. Keep it as a heuristic, cite subreddit rules live.

## Framework standards

- Agent Skills specification (open standard, published 2025-12-18, stewarded via the Agentic AI Foundation): https://agentskills.io/specification and https://github.com/anthropics/skills/blob/main/spec/agent-skills-spec.md (verified 2026-07-11)
- BMAD-METHOD (MIT; v6.x line current as of May 2026; 5 modules, 12+ persona agents, 34+ workflows): https://github.com/bmad-code-org/BMAD-METHOD (verified 2026-07-11)
- sales-skills/sales (MIT, exists as described in THIRD_PARTY_NOTICES.md): https://github.com/sales-skills/sales (verified 2026-07-11)
- concaption/cold-md: verified reachable on 2026-07-11 — https://github.com/concaption/cold-md exists publicly (Claude Code cold-outreach plugin suite by FoxReach; MIT code/skills, CC-BY-4.0 spec), matching `THIRD_PARTY_NOTICES.md`. Earlier "not verifiable" note is superseded.
