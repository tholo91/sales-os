---
source_url: https://www.adcouncil.org/media-standards-guide/outdoor
publisher: Ad Council; Lamar; invidis; GS1 UK; QR vendors; German municipal and legal sources (see per-claim URLs)
retrieved_at: 2026-11-11
last_verified_at: 2026-11-11
jurisdiction: global, legal section Germany
license_or_terms: public web pages cited as references; no text copied
confidence: medium
review_after: 2027-05-01
---

# Print and offline copy: stickers, flyers, posters, QR

Guidance for `draft-print-copy`. Confidence is medium: word limits come from outdoor-advertising practice, most QR numbers come from vendors, and no controlled study of print copy wording or QR call-to-action wording was found. Source types follow `knowledge/evidence/source-policy.md`; weak sources are flagged.

## Word limits and exposure

- Main message on a poster: 7 words or fewer. Source: Ad Council citing the OAAA Creative Testing Tool, https://www.adcouncil.org/media-standards-guide/outdoor (credible).
- Outdoor exposure is about 4–5 seconds. Source: Lamar, https://lamar.com/HowToAdvertise/DesignTips (vendor, weak).
- Digital signage: about 8 seconds, 30 words or fewer, headline at least 12–15 % of the format height. Source: invidis whitepaper 2019, https://invidis.de/wp-content/uploads/2019/06/sb-whitepaper.pdf (loose analogy for print, not a print study).
- Working limits (Sales OS extrapolation, not sourced): sticker 3–6 words + QR; A1/A2 poster headline of 7 words or fewer + one proof line + QR; DIN-lang/A6 flyer about 25–40 words (read at hand distance); roll-up 7 words or fewer + QR.

## Benefit over feature

Practitioner doctrine; no print-specific A/B study found. Write the outcome the reader gets (plus time or effort) instead of what the product has. Feature lists belong on the landing page, not on print.

## Headline patterns

Source: practitioner, https://movia.media/?p=2714 (weak). Patterns: direct "du" question, pain or provocation, outcome + time, local reference (city, campus, Wahlkreis), identity or humor. No verified German examples exist; never present an example as proven.

## QR codes

- No controlled study on call-to-action wording exists. Vendor claims of 30–80 % lift are unsourced: https://linkbreakers.com/help/article/qr-code-ab-testing-benchmarks-variables-that-affect-scan-rates (vendor, weak).
- Give a reason to scan: GS1 UK, https://www.gs1uk.org/knowledge-hub/qr-codes-powered-by-gs1/five-ways-to-increase-consumer-adoption-of-qr-codes-powered (industry body).
- QRCG/Bitly report 2026-06-23, https://www.qr-code-generator.com/blog/how-to-create-high-performing-qr-codes/ (vendor, correlation only): logo codes +53 % scans, styled codes 2–3×.
- Average scan-through 12.8 %: https://www.uniqode.com/blog/?p=8124 (vendor, weak).
- Size rule of thumb: scan distance is about 10 × code width; floor about 2×2 cm; add 25–50 % outdoors; keep the quiet zone. Sources: bitly.com/blog/minimum-size-for-qr-code/, qrstuff.com (vendors, weak).
- The line next to the QR is verb + benefit + time, never just "Scan me".
- Message match: the landing page's first screen repeats the printed promise.
- A scan is not a conversion; count completed actions too.

## Stickers

Stickers are kept for identity, humor, and belonging, and ignored when they read as ads (unverified practitioner knowledge). A graphic-only variant (image + small brand + QR, no line) is a legitimate test variant for young audiences; treat it as a hypothesis.

## German register and wording

Pick Du or Sie once per project and stay consistent. Prefer short German words over Anglizismen unless it is the product or brand word (recommendation, unsourced).

## Legal risk (Germany, risk guidance, not legal advice)

- Wild plakatieren is usually an Ordnungswidrigkeit under municipal rules; fines of about 500–600 EUR seen (Siegen, Stuttgart). OLG Hamm 2015, Az. 1 RBs 1/15. Sources: https://www.weka.de/ordnungsamt-gewerbeamt/haftet-der-veranstalter-fuer-das-wildplakatieren-seiner-plakate/, https://kommunal.de/schilder-bekleben-street-art-straftat-strafen, https://www.bonn.de/vv/produkte/Wildes-Plakatieren.php
- Stickers that cannot be removed without residue likely count as Sachbeschädigung (§ 303 StGB). Traffic signs are the worst case. The owner can claim cleaning costs.
- Safer: hand stickers out; place only with permission (WG boards, own surfaces, venues, Schwarzes Brett with permission).

## Test loop for a solo founder

1. Show 3 mockups to about 5 people of the target group before printing.
2. Print 2–3 variants, each with its own dynamic QR or short URL with `?utm_source=print&utm_medium=<format>&utm_content=<variant-id>`.
3. Spread variants equally across the same places in the same week.
4. Count scans and completed actions.
5. Judge after about 50+ scans per variant (rule of thumb, unsourced).
6. Keep the winner; change one thing per round.

## Rules checklist for the drafting agent

1. Stay within the word limit of the format; show the word count.
2. One message, one action, one QR target.
3. Write the outcome (plus time or effort), not the feature list.
4. Use the audience's own words; no Anglizismen unless it is the brand word.
5. One Du/Sie register for the whole project.
6. The QR line is verb + benefit + time, never just "Scan me".
7. The landing page's first screen repeats the printed promise; flag mismatch read-only.
8. No invented numbers, quotes, traction, or "proven" examples; use `[PRÜFEN: …]`.
9. Give every variant its own id for `utm_content`; test one variable per round.
10. Never recommend traffic signs or surfaces without permission; nothing is printed, ordered, or posted automatically.
