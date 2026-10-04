# Weekly pipeline step

A weekly rhythm for one founder with limited energy: sweep what is owed, fill one small batch, count dated commitments, change one thing per week.

## Board

- File: `workspace/projects/<slug>/pipeline.md`, created from `templates/pipeline.md`. One board per ISO week, overwritten in place; move the old Scoreboard line and its `Änderung nächste Woche:` into the review history (keep 4 weeks).
- The weekly budget is shared across all projects, not per project. Pick one primary project per week; other projects get only due replies and follow-ups, counted against the same budget.
- The board holds `target_ref`s, dates and outcomes, never message bodies. `pending-actions.yaml` stays the only executable queue; a board row never makes an action due.

## Weekly start

Run on the first session of a new ISO week (board missing or from a past week, and no pending action due) or when the founder asks (`Wochenstart`, `Was steht an?`). Do not run it when the founder only reports a reply or result; record that first. On a Sunday, the weekly start plans the coming ISO week; roll the board to that week.

1. Read `status.yaml`, `pending-actions.yaml`, the board, and contacts and interactions changed since the last board week (a new board: the last 14 days).
2. If `activity.experiment_review_at` is overdue, make the `sales-next` experiment-review decision once (`weiterführen`, `ändern` or `stoppen`), then set `experiment_review_at` to the new review date so the next session does not review again. Zero matching dated records since the experiment start → `ändern` (narrow target group or angle) or `stoppen`, never an unchanged `weiterführen`. New review date = decision date + 14 days unless the experiment names one.
3. Sweep open commitments into actions, from recorded evidence only:
   - Contacts with `sales_stage` `contacted`, `replied`, `call` or `qualified`, no open action and no board row: add a row. For a first touch without reply and without F1, create `follow_up` with `touch: F1` due per the touch plan in `knowledge/strategies/follow-up.md` (today if already past).
   - Interactions whose commitments hold an open promise by the founder: `follow_up` with `touch: commitment`, due within 2 working days. The other side's offer or promise: `decision_follow_up` on their date, or +10 working days from the sweep date when that date is past or unknown. Build each action per `knowledge/strategies/follow-up.md` (`## Commitments become actions`, including `next_action_ref`).
   - Permission to contact or name a third person: a Tier 1 board row, not an action.
   - A reply drafted but not confirmed as sent: `inbound_reply` due today.
   - Every action needs an existing contact and interaction file. Create a missing contact from `templates/contact.md` only with facts from the interaction. Never create an action after a refusal or opt-out.
   - Report one line, for example `Sweep: 3 offene Zusagen als Aufgaben angelegt`.
4. Carry open rows over; at most 10 rows. Fill the batch up to the weekly budget in tier order through `find-conversations` batch mode (tiers in `core/steps/source.md`). Use one persona and one angle for the cold part.
5. Plan content slots: 2 LinkedIn posts (one reach, one lead archetype; never two asks in a row). Reels: 2 from one 60–90 minute batch only when `Instagram aktiv: ja` and the Instagram base exists; otherwise the first slot is the `Instagram-Basis` pack from `draft-reel`.
6. If `current_outreach.stage` is `needs_target` and the board has an `offen` row without a first touch, set `target_ref` to that row and `stage: needs_draft` (`draft_mode: reddit_dm` only for a verified Reddit context, else `outreach`).
7. If the `## Gold-Samples` section in `workspace/voice.md` still holds only its `[PRÜFEN: …]` placeholder, add one clause at the end of `Sag mir danach:` asking for 3–4 original messages; do not block on it.
8. Inside the copilot wrapper `Nächste Aktion:` holds, in order: the Scoreboard line verbatim with its markers, the sweep line, one line `Experiment: <Entscheidung>, <n> passende Records, nächster Review <Datum>` when step 2 ran, and the single first action; never chain "Danach …"; the board holds the rest. The first action's draft is the `Fertiges Asset:`.

## Weekly budget

Defaults, editable in the board header: 8 first touches (stretch 10, warm paths and 1st-degree contacts first), all due follow-ups, 1 warm-intro ask, 10 substantive comments (3–5 per session on people from the board), 2 LinkedIn posts, 2 Reels once the Instagram base exists. Build custom assets only after interest or for at most 3 top targets a week.

Minimum day when energy is low: `1 Minute: neue Antworten/Kommentare einfügen → 1 fälliges Follow-up → 1 Kommentar`.

Daily order: paste new replies and comments, then due replies, then the founder's own commitments, then F1/F2, then the next board draft, then comments.

## Scoreboard

One line, counted from dated interactions and confirmed posts of this ISO week, never estimated:

`KW<nn>: <n> T1 · <n> F1/F2 · <n> Antworten · <n> Leads (datierte Zusagen) · <n> Posts · <n> Reels`

A T1 with an open send date counts with its `[PRÜFEN: …]`. A lead is a dated commitment (call booked, share or campaign date, intro sent, material requested, invited application). A reply is not a lead.

## Weekly review

Run on Friday or before the next weekly start (`Wochenreview`).

1. Count first touches, substantive replies and leads per persona and angle from board rows and interactions. Distinguish zero records from missing records.
2. Decide one change for next week: angle, persona, give-first asset or ask step. If a comparable batch of 10–15 touches got 0 substantive replies, change the angle, not the volume.
3. Write it as `Änderung nächste Woche:` on the board, and into `experiments.md` when an experiment is active. The Reel test decides after 4 on-camera/faceless pairs as defined in `knowledge/channels/instagram-reels.md`, logged in `experiments.md` under `## Reel-Test`.

## Boundaries

Board and action writes are internal bookkeeping from recorded evidence. No scraping, bulk enrichment, auto-send, auto-connect or engagement automation; no invented replies, leads or commitments.
