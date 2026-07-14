---
name: sales-setup
description: Create or refresh a private founder profile and project context for Sales OS, optionally by inspecting a local product repository read-only. Use when onboarding, adding a project, changing goals or channels, updating stale project facts, or when another skill lacks reliable product, proof, market, or founder context.
---

# Sales Setup

Build evidence-backed context with the smallest useful intake.

## Workflow

1. Read `core/steps/setup.md` and the relevant files in `templates/`.
2. Keep private values under `workspace/`; never put them in examples or knowledge.
3. Ask only questions that cannot be answered from existing workspace artifacts or the configured source repository.
4. For a repository scan, read instructions, README, product docs, validation docs, landing copy, and current status sources. Do not modify the source repository.
5. Record repo-derived facts as `path + verified date`; mark interpretations as assumptions.
6. Set artifact freshness using the defaults in `core/workflow-catalog.yaml`.
7. Offer (optional, skippable) to build `workspace/voice.md` from `templates/voice.md` by asking for 10–20 real sent messages; derive the style observations from the samples, not from self-description.
8. Update `status.yaml` and finish by invoking the routing logic from `$sales-next`.

## Quality bar

- Capture product, audience hypotheses, visible value, stage, proof, constraints, goals, available channels, and source paths. Record only verified historic attempts, conversations, pilots, and commitments in the learning scorecard; never backfill estimates.
- Never invent traction, customers, pricing, relationships, or launch state.
- Keep unknowns explicit; incomplete truthful context is valid.
