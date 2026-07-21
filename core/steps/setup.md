# Setup step

1. Read `workspace/config.yaml`, `workspace/profile.md`, the active project status, and the relevant templates.
2. Create only missing private artifacts; never move founder, contact, or repository-path data outside `workspace/`.
3. Inspect the configured product repository read-only and answer questions from current files before asking the founder.
4. Record product facts with source path and verification date. Keep assumptions and unknowns explicit.
5. Build or refresh `workspace/voice.md` only from labeled samples. Treat sent-but-unconfirmed writing as `sent-approved` or `ai-assisted-or-unknown`, not as native voice.
6. Set `review_after`, initialize the lane-based status schema, and keep `current_outreach.stage: needs_target` unless a real target or draft already exists.
7. Route through `core/steps/route.md` and report the smallest truthful next action.
