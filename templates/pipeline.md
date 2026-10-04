---
schema_version: 1
project_slug: null
week: null
created_at: null
updated_at: null
last_verified_at: null
review_after: null
source_repo: null
source_files: []
confidence: unknown
---

# Wochenboard

Procedure: `core/steps/pipeline.md`. One board per ISO week (`week`, for example `2026-W41`), overwritten in place at the weekly start.

- Primärprojekt der Woche: null
- Wochenbudget (alle Projekte zusammen): 8 T1 (Stretch 10, warme Wege zuerst) · alle fälligen F1/F2 · 1 Intro-Ask · 10 substanzielle Kommentare · 2 LinkedIn-Posts · 0 Reels (2, sobald die Instagram-Basis steht)
- Instagram aktiv: nein
- Persona und Angle für den kalten Teil: null
- Minimaltag: 1 Minute: neue Antworten/Kommentare einfügen → 1 fälliges Follow-up → 1 Kommentar

## Scoreboard

KW<nn>: <n> T1 · <n> F1/F2 · <n> Antworten · <n> Leads (datierte Zusagen) · <n> Posts · <n> Reels

## Outreach-Batch

`Ziel` holds the `target_ref`, the tier and the signal date, for example `beispiel-ngo · Tier 2 · Signal 2026-10-01`; a row from a post comment or repost adds `source_post: <post reference>`. `Ergebnis` is one of: offen, keine Antwort, Absage, Rückfrage, Gespräch, Lead, Intro, geparkt.

| Ziel | Persona | Nächster Touch (Datum) | Ergebnis |
|---|---|---|---|

## Content-Slots

- LinkedIn-Post 1 (Reichweite): offen
- LinkedIn-Post 2 (Lead): offen
- Reels: 0, erst Instagram-Basis (Bio, 2 Carousel-Texte, 1 Demo-Reel)

## Wochenreview

Änderung nächste Woche:

Verlauf (letzte 4 Wochen, Scoreboard-Zeile plus Änderung):

Private board: no message bodies, only `target_ref` and dates. A lead is a dated commitment; a reply is not a lead. `pending-actions.yaml` stays the only executable queue.
