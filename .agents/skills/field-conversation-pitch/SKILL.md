---
name: field-conversation-pitch
description: Help the founder navigate spontaneous personal conversations at events, networking, with acquaintances, or in everyday situations. Use when they want a natural introduction, a brief founder story, or help deciding whether to explain a project. Do not use for scheduled calls, written outreach, contact research, or interaction debriefs.
---

# Field Conversation Pitch

Help the founder stay in a real conversation while making a project easy to understand. Keep every line speakable, specific to the setting, and proportional to the other person's interest.

The goal is a useful exchange, not delivering a pitch. Lead with curiosity: understand what matters to the other person, then offer the project only where a real connection appears. Treat a possible synergy as a hypothesis to explore together, never as a reason to push for support.

## Trigger and boundaries

Use this skill for spontaneous or informal in-person exchanges: a fair, networking event, a chance meeting, an acquaintance asking what the founder does, or an everyday conversation. It can prepare a likely moment or help respond to one happening now.

Route scheduled or explicitly planned calls to `prepare-call`; written messages to `draft-outreach`; finding people to `find-conversations`; public online comments to `warm-contact-comment`; and post-interaction follow-up or recording to the matching follow-up or learning skill. Do not turn a casual exchange into outreach, a scheduled call, or a CRM record.

## Required context

First identify the setting, the other person's role or likely audience, and the current conversation stage. Use only context supplied by the founder or available in the active project. Ask one concise question only when a missing detail would materially change what is appropriate to say; otherwise draft with `[SIGNAL: …]` or `[PRÜFEN: …]` markers.

When the founder names someone, check any available relationship record and current public event or professional context before suggesting an angle. Separate verified facts from a possible synergy; a shared topic is a conversation hypothesis, not evidence of interest or permission. Do not infer a person's beliefs, needs, or willingness from their job title or a LinkedIn connection.

For the active project, load only the needed sections from:

- `workspace/projects/<project>/personas.md` when it exists (call kit, shared proof lines, and the matching audience section); otherwise `positioning.md` and `icp.md`
- `workspace/projects/<project>/evidence.md`
- `workspace/voice.md`
- `knowledge/foundations/human-writing.md` for gap markers

Check each source's date and status before using a claim. Persona notes and founder-reported figures are not independent verification. Use evidence only when it helps this conversation, preserve its wording, label and date, and state its limits. Never claim an effect or outcome the project's evidence does not record.

## Conversation path

Classify the moment before offering a pitch:

1. **Casual exchange:** The other person has not asked about the project. Stay with the shared topic; do not insert a pitch. If useful, offer one short bridge back to the other person's interest.
2. **Natural introduction:** They ask who the founder is or what they do. Give a plain 10-second introduction, then return the conversation with one relevant open question.
3. **Genuine interest:** They ask a follow-up or invite more. Give the 20–30-second story. Offer a longer version only after an explicit invitation; keep it between 30 and 90 seconds.

At every stage, ask before expanding: after a natural introduction, use one open question about the other person's work, choices, or experience. If a possible connection appears, briefly name it as a tentative link and ask whether it fits their view. Do not combine the explanation with an ask for a share, partnership, introduction, or commitment unless they raise that possibility.

Build the story from verified material in this order: a concrete moment, the obstacle, the founder's own decision, the solution built, and why that may matter to this person. Do not invent a polished origin story to fill a missing step. Mark every unverified detail inline with `[PRÜFEN: …]`; keep marked lines out of ready-to-say copy until confirmed.

Make each transition conversational: answer briefly, connect only to a relevant point, then invite the other person back in. Prefer one non-leading open question tied to their work or experience. Make it easy to disagree, decline, or change the subject. Provide a short, warm exit that does not create a follow-up obligation.

## Audience adaptation

Use the matching persona's angle and approved facts from the active project. Do not reuse one generic pitch across audiences. The project's own files decide what may be said about it; the lines below only set the order.

- **Organisations, NGOs and associations:** Start with their concrete issue or community. If interest continues, say in one sentence what their people can do with the project. Do not imply the organization has agreed to participate.
- **Creators:** Connect their specific topic to a useful next step for their audience. Do not ask generically for a share, provide a copy-ready caption, or assume audience interest.
- **Podcasters and media:** Lead with a relevant editorial or human-story angle, not a generic “there is a tool” introduction. Do not ask about the journalist's personal views.
- **Buyers and users:** Start with the situation they described. Say what the project is in one plain sentence, then ask how they handle that situation today.
- **Connectors:** Explain briefly which kind of person or organization may be relevant and why. Ask for insight first; request an introduction only if the other person shows interest, with permission and an easy no.

Across all audiences, speak in first person. Use descriptors such as free, independent or nonpartisan only when relevant and currently supported by project context. Keep every message boundary the project's `positioning.md` records. Never promise a result the project cannot show.

Tell an origin story only as the project's `hook-library.md` (its founder-only material section) records it, in one or two sentences and without added details. Where a detail still carries a `[PRÜFEN: …]` marker there, keep the marker; do not turn an old message or draft into confirmation.

## Output format

Return a compact, speakable field card in the founder's language. Fit it to the setting and conversation stage; omit any section that would force a pitch into casual exchange.

1. **Lage:** one short line naming the setting, audience and inferred conversation stage; label uncertainty.
2. **10 Sekunden:** one natural introduction for an opening or “what do you do?” moment.
3. **20–30 Sekunden:** one story for genuine follow-up interest, using the verified story sequence and a relevant bridge to the other person.
4. **Nur auf Einladung (30–90 Sekunden):** include only when useful and invited by the scenario; otherwise state the cue that would justify continuing.
5. **Übergang und Frage:** one short, tentative bridge to a possible shared interest, followed by one open, non-leading question. Put the question before any deeper explanation when the other person's interest is unclear.
6. **Ausstieg:** one polite line to close or return to the wider event without pressure.

Use `[SIGNAL: …]` for a missing recipient-specific reason or context. Use `[PRÜFEN: …]` for facts, story details, or claims that need verification. Never call marked wording ready to say.

## Evaluation examples

- **Pass — casual fair conversation:** The other person has not asked about the project; stay on their topic and offer no unsolicited pitch.
- **Pass — natural introduction:** A new acquaintance asks what the founder does; answer in one short first-person line and ask one relevant open question.
- **Pass — invited interest:** An NGO lead asks how the project could relate to their campaign; give the 20–30-second, issue-led explanation and ask about their audience's needs.
- **Pass — uncertain synergy:** A potential partner's work suggests a connection; name it as a possibility and ask what they think before proposing an activity.
- **Fail — premature long version:** Delivering a 90-second story before the other person shows interest.
- **Fail — selling disguised as curiosity:** Asking a leading question that assumes the person should share, partner, or introduce someone.
- **Fail — unverified origin:** Adding details to an origin story beyond what the project records, or dropping a `[PRÜFEN]` marker without confirmation.
- **Fail — impact claim:** Stating an effect of the project that its evidence file does not record.
