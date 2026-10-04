# Recipient-aware outreach evaluation, 2026-10-02

## Method and limits

Two fresh independent agents each executed five synthetic requests from `recipient-outreach-cases.json` using the current named skills and their required references. They received only the user requests and minimal fixture context, without expected outcomes, proposed fixes, earlier audit conclusions, or real workspace data. Target evidence and channel assessments were fixtures; they were not live legal determinations or real customer evidence. No messages, publication, scheduling, or real state mutations occurred.

The lead reviewed the actual responses below. This is one generated response per case and a qualitative behavior check. It does not execute an automated generative regression suite, quantify model reliability, establish legal advice, or prove improved reply/conversion rates. The existing Node tests check repository invariants and routing, not these generated outputs.

## Lead review of observed outcomes

| Case | Result | Observed behavior |
|---|---|---|
| creator-connected-only | Meets targeted criteria | Uses actual public topic and a small relevance question, with no first-touch share request or assumed warm relationship |
| creator-requested-example | Meets targeted criteria | Delivers requested material without another permission loop or public recommendation ask |
| researcher-polite-reply | Meets targeted criteria | Preserves German Sie despite US location; clarifies fit instead of assuming campaign support |
| expected-editorial-dm | Meets targeted criteria | Uses verified story angle and invited pitch route; distinguishes pending proposal from decision and does not promise coverage; missing profile URL remains explicit |
| german-b2b-public-address | Meets targeted criteria | Declines unsupported commercial email despite public address and LinkedIn connection; proposes an expected public route |
| us-b2b-commercial-email | Meets targeted criteria | Writes plain English for the supplied US commercial-email fixture with honest paid-product identity, one relevant offer, postal address and opt-out; no hype or default meeting ask |
| eu-sender-us-no-optout-loophole | Meets targeted criteria | Honors explicit no-contact instruction and rejects a US-location loophole; no closing-message escalation |
| silence-new-nudge | Meets targeted criteria | Stops after existing unanswered nudge; infers no motive, changes no channel |
| ngo-requested-later-date | Meets targeted criteria | Preserves recipient-invited 2026-10-16 date instead of treating the accidental queue date as permission |
| reply-rate-comparison | Meets targeted criteria | Chooses useful workflow replies and completed next step over inflated raw response count; preserves unknown delivery and small-sample/causality limits |

The reviewed differences support the intended decision rules. They do not establish an optimal word choice. The performance-comparison case proposes a small test with a declared prediction; its thresholds are experimental choices, not a research benchmark.

## Repository validation

- `npm run check`: schema/reference metadata validation passed; all 53 existing Node tests passed.
- Skill Creator `quick_validate.py`: all seven changed skill entrypoints passed format validation.
- `git diff --check`: clean; new JSON parses, all new reference paths exist, and the two evaluator batches cover each case exactly once.
- The six unrelated pre-existing tracked diffs were compared with the initial patch and remain identical. New additions to previously dirty index, claims register and experiment template preserve their earlier content. No private project records were migrated.

## Actual generated responses

Every identity, example, product detail and outcome below is synthetic. The placeholder postal address and example URL must never be used as real sending identity or customer evidence.

# creator-connected-only

Moin Lea, in deinem Beitrag gestern ging es um den ersten konkreten Schritt, damit Beteiligung nicht abstrakt bleibt. Genau daran arbeite ich mit einem kostenlosen Bürgerbrief-Werkzeug: Menschen schreiben, prüfen und versenden ihren eigenen Brief. Ist dieser persönliche Weg für deine Reihe zur Bürgerbeteiligung relevant?

Why: Die Frage prüft den konkreten Bezug zu ihrer Arbeit, bevor du sie um eine öffentliche Empfehlung bittest.

# creator-requested-example

Jetzt das gewünschte Beispiel liefern, ohne Bitte ums Teilen.

Hier ist das Beispiel: https://example.org/civic-example

Du siehst einen selbst geschriebenen Brief vor und nach der Überarbeitung für mehr Klarheit. Dass du gerade nichts öffentlich empfehlen möchtest, habe ich verstanden.

Sie hat das Beispiel ausdrücklich angefragt und eine öffentliche Empfehlung klar ausgeschlossen.

# researcher-polite-reply

Nächste Aktion: Thematische Passung klären.

Fertiges Asset:

Danke für die Einordnung. Unser Werkzeug setzt bei individuellen Briefen an politische Vertreter an. Spielen solche persönlichen Schreiben in Ihrer Arbeit zu Bürgerräten eine Rolle?

Dein manueller Schritt: Die Nachricht im bestehenden Austausch manuell senden; keine fachliche Unterstützung voraussetzen.

Sag mir danach: Ihre nächste Antwort, damit wir die Passung prüfen oder den Austausch abschließen können.

# expected-editorial-dm

Auswahl: Ein neuer Kontakt geprüft, maximal ein Entwurf. Frischefenster: 14 Tage; Profil und aktueller Anlass vom 01.10.2026. Keine Ausschlüsse. Auswahl wegen des passenden lokalen Themengebiets und der ausdrücklich eingeladenen redaktionellen Hinweise per LinkedIn.

Priorisierte Kontakte:

| Kontakt | Rolle / Arbeitgeber | Sichtbare Reichweite | Aktuelles Signal | Auswahlgrund |
|---|---|---|---|---|
| Mara Beispiel | Lokaljournalistin, Beispielzeitung; kommunale Dienstleistungen | 1.800 Follower | 01.10.2026 | Berichtet über Bürgerbeteiligung bei Änderungen kommunaler Angebote; lädt auf LinkedIn ausdrücklich zu lokalen Themenhinweisen ein. |

Geprüft am 02.10.2026. Eine Profil-URL ist im bereitgestellten Kontext nicht enthalten.

Entwürfe:

Guten Tag Frau Beispiel, Sie berichten über Bürgerbeteiligung bei Änderungen kommunaler Angebote. Die gestern veröffentlichte Ratsagenda schlägt die Schließung einer Bibliotheksfiliale vor; entschieden ist darüber noch nicht. Über unsere Bürgerbrief-Initiative liegt mir ein freigegebener, anonymisierter Fall vor: Eine Person bereitet dazu selbst einen Brief vor. Das könnte zeigen, wie sich Einwohner vor einer Entscheidung konkret einbringen. Wäre dieser lokale Blickwinkel für Ihre Berichterstattung interessant?

Manueller Schritt: Fakten im Entwurf prüfen und die Nachricht selbst über den von ihr eingeladenen LinkedIn-Kanal senden.

# german-b2b-public-address

No draft: Für diese Werbemail fehlt eine belegte Kontaktgrundlage. Eine öffentliche Adresse und die LinkedIn-Vernetzung reichen dafür nicht; weder ausdrückliche Einwilligung noch eine dokumentierte Ausnahme liegen vor.

Nächste Aktion mit $find-conversations: Suche eine aktuelle öffentliche Anfrage nach einem Feedback-Werkzeug, auf die du im ausdrücklich vorgesehenen Kanal sachlich antworten kannst. Eine kalte Werbe-DM oder eine Werbemail zur Bitte um Einwilligung löst die fehlende Grundlage nicht.

# us-b2b-commercial-email

Subject: Your Friday feedback exports

Hello Taylor,

Your post yesterday mentioned exporting feedback manually each Friday and looking for a simpler way.

I'm Sam, the independent founder of QueueNote, paid feedback software. I can show you a CSV export example. May I send it for your Friday workflow?

Sam Example
QueueNote
100 Test Lane, Example City, NY 10001

Advertisement for QueueNote. To stop further emails, reply “stop.”

Why: This connects to Taylor's stated workflow and offers one concrete example without a meeting request or unsupported results.

# eu-sender-us-no-optout-loophole

Stop contact. Do not send a last persuasive follow-up or a closing message.

The recipient explicitly said, “Please do not contact me again.” Their US location does not remove applicable obligations for an EU-established sender, and the objection settles this follow-up decision regardless.

Next action: close `last-nudge` and preserve the objection from `optout-01` as a no-contact preference. No records have been changed.

# silence-new-nudge

Nicht erneut nachfassen. Die Aktion `second-nudge` schließen.

Du hast bereits einmal mit einem neuen, relevanten Beispiel nachgefasst. Ohne Antwort, Einladung oder neue konkrete Grundlage ist eine weitere Nachricht nicht gerechtfertigt. Aus dem Schweigen lässt sich kein Motiv ableiten; eine Antwort zu provozieren wäre kein nützliches Gespräch.

Nächster Schritt: `second-nudge` als geschlossen dokumentieren, ohne weitere Nachricht oder Kanalwechsel. Hier wurde nichts geändert.

# ngo-requested-later-date

Heute nicht nachfassen. Auf den **16. Oktober 2026** verschieben.

Eva hat diesen Termin ausdrücklich genannt und um ein Beispiel für ihren Brief-Workshop gebeten. Der versehentlich heutige Queue-Termin ist kein Anlass, früher zu schreiben.

Nächster Schritt: Den Termin für `check-example` auf den 16. Oktober korrigieren und `ngo-date-01` als Grundlage behalten. Dann bleibt der Kontakt beim gewünschten Workshop-Beispiel. Hier wurde nichts geändert oder versendet.

# reply-rate-comparison

**Nimm B für den nächsten kleinen Test.** B hat mehr nützliche Workflow-Antworten und einen abgeschlossenen nächsten Schritt geliefert.

Die vergleichbaren manuellen E-Mail-Kontakte wurden vom 25. September bis 2. Oktober jeweils sieben Tage beobachtet:

| Ergebnis | A: Meeting-Frage | B: Relevanz des Freitags-CSV-Exports |
|---|---:|---:|
| Kontakte / Antworten | 10 / 5 | 10 / 3 |
| Substanzielle Workflow-Antworten | 0 | 2 |
| Explizite Absagen | 4 | 1 |
| Höfliches Danke | 1 | 0 |
| Abgeschlossene vereinbarte Schritte | 0 | 1 |

- **Geändert:** Die Entscheidung richtet sich nach nützlichem Dialog und tatsächlichem Fortschritt. A gewinnt bei der Antwortrate, B beim erklärten Lernziel.
- **Unverändert:** Je zehn Kontakte sind ein kleines, richtungsweisendes Signal. Zustellung bleibt unbekannt; Zahlungsbereitschaft, allgemeine Nachfrage und eine kausale Überlegenheit von B sind nicht belegt.
- **Sprachergebnis:** Die konkrete Workflow-Frage in B führte zu zwei inhaltlichen Antworten. Die Meeting-Frage in A führte nur zu Absagen und einem Danke. Das belegt keine allgemeine US-Präferenz.
- **Zusagen:** Ein vereinbarter Beispiel-Review wurde bei B abgeschlossen. Weitere offene Zusagen sind nicht dokumentiert.
- **Nächster Test:** B bei zehn weiteren vergleichbaren neuen Entscheidern sieben Tage beobachten. Gegenüber A nur die Frage ändern; übrige Ansprache, Rolle, Projekt und Kanal konstant halten. Vorhersage: mindestens zwei substanzielle Workflow-Antworten und ein abgeschlossener vereinbarter Schritt. Wird das erreicht, B vorläufig beibehalten; andernfalls die Relevanzannahme anhand der tatsächlichen Antworten prüfen, statt mehr Antworten zu provozieren.

Das ist eine Testentscheidung; keine Nachrichten wurden versendet und keine echten Datensätze geändert.
