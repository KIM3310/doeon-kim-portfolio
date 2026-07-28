# Revenue Architecture - doeon-kim-portfolio

This document turns the repository architecture into a zero-to-low-cost service path. It is not a revenue guarantee; it defines the product boundary, free-tier launch stack, metering hooks, and upgrade path needed to test willingness to pay before taking on fixed infrastructure cost.

## Productized Offer

| Layer | Decision |
| --- | --- |
| Target buyer / user | product, AI platform, operations, security, data, and industrial teams purchasing a bounded technical outcome |
| Productized offer | seven fixed-scope audits, readiness sprints, exercises, discoveries, and workflow pilots |
| First paid SKU | Architecture Scope Sprint from USD 900 or Agent Reliability Audit from USD 1,500 |
| Free lead magnet | runnable demos, architecture documents, and explicit system boundaries |
| Paid expansion | implementation milestone, private deployment, regression harness, recurring assurance, or workflow adaptation |
| Data / workflow moat | cross-repo evidence, live screenshot catalog, system architecture index, and reusable deployment recipes |
| Private inquiry | https://kim3310-doeon-kim-portfolio.pages.dev/?offer=doeon-kim-portfolio&inquiry=architecture-scope-sprint#private-inquiry |

## Free-Tier-First Launch Stack

| Concern | Default choice |
| --- | --- |
| Build and coding loop | OpenCode, Kimi Code CLI, Freebuff, Lovable, Ollama-assisted local agents |
| Public front door | Cloudflare Pages first, with Vercel/Netlify as alternate static front doors |
| Backend / state | Cloudflare Pages Functions with D1 for commercial inquiry, product research, and support intake; repository-to-service validation plus email, date-scoped network, and global rate checks run in the same atomic insert, while delivery systems use customer-owned or separately scoped state |
| AI inference | OpenRouter, Groq, Cerebras, Cloudflare Workers AI, NVIDIA NIM, Ollama local fallback |
| Storage / exports | Supabase Storage, Firebase Storage, Cloudflare R2/KV/D1 depending on data shape |
| Repo-specific launch path | Cloudflare Pages storefront, Pages Functions + D1 lead capture, optional hosted Stripe/Polar/Lemon Squeezy checkout later |

Keep exact provider quotas out of the product contract. Free-tier limits change; the architecture should degrade gracefully through caching, daily quotas, customer-supplied API keys, and an explicit paid workspace switch.

## System Shape

```mermaid
flowchart LR
  Buyer["Technical buyer"] --> Offer["Seven bounded service offers"]
  Offer --> Proof["Runnable demo, architecture, and tests"]
  Proof --> Intake["Private Pages Function"]
  Intake --> Gate["Intent, repository, and atomic abuse gate"]
  Gate --> D1["D1 inquiry record, scheduled for deletion at 90 days"]
  Cron["Daily Cloudflare Cron Worker"] --> D1
  D1 --> Scope["Scope and commercial review"]
  Scope --> Delivery["Paid audit, sprint, exercise, discovery, or pilot"]
  Delivery --> FollowOn["Optional implementation or recurring assurance"]
```

## Metering And Paywall Hooks

- Start with anonymous read-only demos and synthetic data so traffic costs stay near zero.
- Enforce email, date-scoped network-fingerprint, and global submission ceilings inside the same D1 statement that creates the inquiry; do not separate the capacity check from the write.
- Transform the edge-provided network address in memory with a secret salt and UTC date, store only the one-way fingerprint, and rotate its identity daily.
- Run the independent Cloudflare Cron Worker daily so retention does not depend on future form submissions.
- Add `workspace_id`, `plan`, `quota_day`, and `export_count` fields before adding payment; this lets the app enforce limits without redesign.
- Cache AI outputs by normalized prompt, scenario, model, and version. Paid users can bypass cache with their own provider key.
- Keep exports, private connectors, longer retention, branded reports, team seats, and SLA support behind the paid boundary.
- Store only the minimum data needed for the free tier. Push private/customer data into local runtime or customer-owned accounts whenever possible.

## 30-Day Revenue Test

1. Publish the public demo or architecture page with one clear CTA: request private workspace, download a pack, or run a sample report.
2. Measure completed private inquiries through the deployed Pages Function and D1 table; keep GitHub issues public and non-commercial.
3. Create one downloadable artifact: report PDF, template pack, runbook, dataset sample, or export bundle.
4. Offer a fixed-scope paid package before building subscription complexity.
5. Track activation manually first: visits, CTA clicks, export requests, email replies, and paid pilot conversations.

## Cost Guardrails

- Prefer static pages, edge functions, and scheduled jobs over always-on servers.
- Use OpenRouter/Groq/Cerebras/Workers AI free models only for bounded tasks; require customer keys for heavy/private workloads.
- Use R2 or repo artifacts for large downloads instead of database blobs.
- Keep synthetic sample data in the public demo and reserve customer data for private/local deployment.
- Move to paid infrastructure only when one paid SKU repeatedly exceeds free-tier limits.

## Paid Conversion Architecture

The paid version should not be a different product. It should unlock more trust, privacy, retention, and operational surface area:

- private workspace or local deployment
- saved history and longer retention
- branded exports or signed evidence bundles
- connector setup for the customer's systems
- team roles, audit logs, and admin controls
- support or implementation package tied to a concrete outcome
