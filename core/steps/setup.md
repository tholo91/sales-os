# Setup step

1. Read `workspace/config.yaml`, `workspace/profile.md`, the active project status, and the relevant templates.
2. If the project still uses status schema v2, run the explicit v2-to-v3 migration before routing. Preserve the backup and repair any migrated blocked action by asking for its missing contact reference; never interpret legacy pending booleans as live state.
3. Create only missing private artifacts, including positioning, an offer when `commercial_mode` is not `none`, and the referenced pending-actions queue; never move founder, contact, or repository-path data outside `workspace/`.
4. Inspect the configured product repository read-only and answer questions from current files before asking the founder.
5. Record product facts with source path and verification date. Keep assumptions and unknowns explicit.
6. Build or refresh `workspace/voice.md` only from labeled samples. Treat sent-but-unconfirmed writing as `sent-approved` or `ai-assisted-or-unknown`, not as native voice.
7. Set `review_after`, initialize schema v3 and the acquisition lane, and keep `current_outreach.stage: needs_target` unless a real target or draft already exists.
8. Route through `core/steps/route.md` and report the smallest truthful next action.
