---
name: sales-setup
description: Create or refresh private founder, voice, project, positioning, offer, contact, pending-action, and status context for Sales OS. Use for onboarding, adding a project, changing goals or channels, refreshing stale facts, capturing repository changes and newly evidenced KPIs since the prior project update, migrating workspace state, or resolving missing product, proof, market, or founder context. Do not use when current context is complete and the founder only needs the next routed action.
---

# Sales Setup

Build the smallest truthful context that unlocks a real conversation.

## Gate

Ask only for facts that cannot be recovered from current workspace files or the configured source repository. Incomplete but explicit context is valid.

When setup is routed only because project `review_after` has been reached, ask whether to refresh before scanning the repository. If the founder declines, keep the expired date unchanged and continue the requested action using the dated context without implying that its claims are current.

## Required references

- `core/steps/setup.md`
- `core/steps/route.md`
- Relevant files in `templates/`
- `core/workflow-catalog.yaml`
- `scripts/migrate-status-v2-to-v3.mjs` when the active project still uses schema v2

## Safety boundary

Keep private values under `workspace/`. Inspect configured product repositories read-only. Never invent or backfill traction, customers, attempts, relationships, prices, or voice samples.

## Output contract

State what was created, migrated, or refreshed, list unresolved facts only when they block routing, then give the single routed next action. A migrated blocked action must name the missing contact reference instead of being silently dropped.
