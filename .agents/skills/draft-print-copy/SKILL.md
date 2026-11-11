---
name: draft-print-copy
description: Draft words for offline print material (stickers, flyers, posters, Plakate, roll-ups) with a QR call-to-action line and three test variants (outcome, pain/question, identity/humor), plus a message-match check and a print test plan. Use for Sticker, Aufkleber, Flyer, Plakat, Poster, Spruch, Werbematerial, print copy, or a QR line. Writes words only; never designs, orders, prints, places, or posts anything.
---

# Draft Print Copy

Turn one real offer into short print copy the founder can test with 2–3 variants and one QR per variant.

## Gate

Draft first per `knowledge/foundations/human-writing.md` (section `Draft-first and gap markers`); missing context never blocks. Recover:

- **Project** (active project required).
- **Format(s):** sticker, flyer (A6/DIN-lang), poster (A1/A2), roll-up. If none is named, draft the sticker.
- **Place and situation:** where it is seen or handed out, and for how long (seconds in passing, minutes in a queue).
- **Audience:** one segment.
- **The one action:** the QR target URL.

Mark gaps inline as `[SIGNAL: …]` or `[PRÜFEN: …]`; a marker never licenses an invented fact.

## Required references

- Active positioning and `personas.md` of the project (`## Gemeinsame Belegzeilen` for usable numbers only)
- `workspace/projects/<slug>/hook-library.md` when present
- `workspace/voice.md`
- `knowledge/foundations/audience-language.md`
- `knowledge/foundations/short-punchy-content.md`
- `knowledge/foundations/human-writing.md` (section Draft-first and gap markers)
- `knowledge/channels/print-offline.md`

## Rules

- Stay within the word limits in `knowledge/channels/print-offline.md`; show the word count per main line.
- Benefit over feature: the outcome the reader gets plus time or effort, never a feature list.
- QR line next to the code is verb + benefit + time, never "Scan me".
- One Du/Sie register per project; prefer short German words over Anglizismen unless it is the brand word.
- No invented numbers, quotes, traction, or "proven" example headlines; numbers only from `## Gemeinsame Belegzeilen` or marked `[PRÜFEN: …]`.
- Never recommend traffic signs or any surface without permission; point to handing out or permitted places and name the legal risk in one line (risk guidance, not legal advice).
- Read the landing page of the QR target read-only; never edit product repos.

## Variants

Per format, exactly 3 variants:

- **A Outcome:** benefit plus time or effort.
- **B Pain/Frage:** the audience's own words.
- **C Identität/Humor:** may be graphic-only, described in words (image idea, no headline), as a hypothesis for young audiences.

Each variant carries: main line (word count), optional proof line, QR line, and a variant id for `utm_content` (for example `sticker-A`).

## Safety boundary

Words only: no graphic design files, no ordering, printing, placing, or posting. Nothing leaves the founder's hands automatically.

## Output contract

Return exactly these four sections in German:

1. `Nächste Aktion:` the test in one line (format, variants, the one variable).
2. `Fertiges Asset:`
   - Per format, variants A, B, C as above.
   - **Message-Match:** does the landing page's first screen repeat each printed promise? Flag a mismatch with `[PRÜFEN: …]`.
   - **Testplan:** show 3 mockups to about 5 people of the target group; then print with one QR (or `?utm_source=print&utm_medium=<format>&utm_content=<variant-id>`) per variant, spread equally across the same places in the same week; count scans and completed actions; judge after about 50+ scans per variant (rule of thumb).
3. `Dein manueller Schritt:` `Vor dem Senden prüfen:` first, at most 3 items (open markers first); then at most 5 numbered steps: 5-person show test, create QR per variant, design and print yourself, place only where permitted, count after one week.
4. `Sag mir danach:` the scan and completion counts per variant; logged in `workspace/projects/<slug>/experiments.md`.
