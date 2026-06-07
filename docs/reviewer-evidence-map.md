# Review Guide - KIM3310 Systems Gallery

Updated: 2026-05-30

Use this page as the short path through the repository. It keeps the review grounded in the code, docs, commands, and boundaries that are already present.

## Summary

| Field | Notes |
|---|---|
| Lane | Portfolio-to-lead router |
| Core idea | A productized gallery that routes viewers into flagship demos and technical proof lanes. |
| Primary reader | Founders, enterprise AI leaders, technical reviewers, and talent partners. |
| Stack | TypeScript/JavaScript |

## Open First

1. Start with the README fast path and architecture section.
2. Open `docs/service-launch-playbook.md` only when reviewing the product or service angle.
3. Check the commands below before making claims about quality.
4. Skim the CI workflows and fixture data before deeper implementation review.
5. Read the boundaries section before presenting the project externally.

## Checks

| Purpose | Command |
|---|---|
| Full local gate | `npm run verify` |
| Test suite | `npm test` |
| Typecheck | `npm run typecheck` |
| Production build | `npm run build` |

## CI

- .github/workflows/architecture-blueprint.yml
- .github/workflows/ci.yml
- .github/workflows/dependency-review.yml
- .github/workflows/deploy-github-pages.yml
- .github/workflows/deploy-pages.yml
- .github/workflows/production-smoke.yml
- .github/workflows/repository-health.yml
- .github/workflows/repository-surface.yml
- .github/workflows/secret-scan.yml

## Evidence

- package scripts and web/runtime checks
- npm run verify passes
- All repo links are current
- Coverage ledger maps active works

## Review Notes

| Review angle | Working scope assumption |
|---|---|
| Technical proof surface | Evaluate only what the demo, code, and docs verify. |
| Operator workflow | Confirm data and access boundaries before external use. |
| Architecture review | Check runtime, storage, secret, and rollback paths. |

## Boundaries

- Avoid exposing private repos
- Keep claims evidence-backed
- Do not overstate customer traction

## Useful Metrics

- Demo clicks
- Talent partner conversion
- Review inquiries
