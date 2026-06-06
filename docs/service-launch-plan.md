# Service Launch Plan

Date: 2026-06-06 KST

This plan removes public financial assumptions and keeps the launch path focused on architecture, account setup, buyer workflow validation, and cost control.

## Current Position

The portfolio should route buyers into four scoped service lanes without publishing financial ranges or public financial assumptions:

| Service lane | First buyer | First motion | Architecture anchor |
| --- | --- | --- | --- |
| Enterprise AI adoption | AI, data, security, and platform leaders | Readiness and data-boundary review | `aix-pilot`, `enterprise-llm-adoption-kit`, `llm-onprem-deployment-kit` |
| Agent runtime reliability | Teams shipping tool-calling systems | Failure-mode and trace review | `stage-pilot`, `agent-runtime-go`, `agent-orchestration-benchmark` |
| Security and network operations | SOC, NOC, MSP, IDC, and infrastructure teams | Tabletop scenario and workflow audit | `AegisOps`, `security-threat-response-workbench`, `nw-service-assurance-workbench` |
| Governed data and document automation | Analytics, manufacturing, Korean back-office, and regulated workflow teams | Workflow and data-boundary diagnostic | `Nexus-Hive`, `lakehouse-contract-lab`, `secure-xl2hwp-local` |

## Buy or Configure First

| Resource | Why | Buy timing |
| --- | --- | --- |
| Custom domain | Makes outreach and buyer review cleaner than a GitHub subpath. | After the public brand/domain name is chosen. |
| Scheduling page | Removes friction from qualified calls. | After calendar availability and intake questions are ready. |
| Payment link | Lets an approved buyer pay through a hosted provider without custom checkout code. | After the diagnostic scope and refund boundary are written privately. |
| Privacy-safe analytics | Shows which lane gets qualified clicks without collecting private payloads. | After the domain is connected. |
| Professional email alias | Improves trust in outbound and inbound conversations. | With the domain. |

Do not buy paid compute, database capacity, GPU capacity, CRM seats, or enterprise hosting until a specific workflow needs it.

## Public Surface Changes

- Service launch menu stays public, but financial assumptions stay private.
- Each service lane links to proof repos and architecture docs.
- Each repo now has `docs/service-architecture.md` with resources, account information, and controls.
- The portfolio index is [repository service architectures](repository-service-architectures.md).

## 14-Day Launch Push

| Day | Action | Pass condition |
| ---: | --- | --- |
| 1 | Pick one domain and connect it to the portfolio. | Domain resolves to the portfolio and SSL is active. |
| 1 | Create four scheduling event types matching the four service lanes. | Each event has narrow intake questions. |
| 2 | Draft private diagnostic scope and refund boundary. | Scope can be pasted into the payment provider when ready. |
| 2 | Add calendar links to the portfolio constants. | CTA path moves from email-only to schedule-ready. |
| 3-5 | Build a target-account list across the four service lanes. | Each account has one specific workflow pain. |
| 6-10 | Send targeted messages with one proof repo and one architecture-backed offer. | Replies or calls show which lane has demand. |
| 11-14 | Run calls and pitch the smallest diagnostic, not a vague custom build. | One buyer gives enough scope to justify backend resources. |

## Guardrails

- Sell diagnostics first when data access, security review, or buyer authority is unclear.
- Do not promise autonomous medical, safety, industrial inspection, or security outcomes.
- Keep regulated, medical, and manufacturing workflows scoped as human-reviewed support unless expert review and approved data exist.
- Do not build more features until a buyer confirms the workflow.
- Keep price and value readiness assumptions private.

## Account Setup Checklist

| Account | Minimum setup |
| --- | --- |
| Cloudflare | Domain, DNS, SSL, analytics, optional Pages redirect from current GitHub Pages. |
| Calendly or Cal.com | Four event types: AI adoption, runtime reliability, security ops, governed automation. |
| Stripe or payment provider | Hosted payment link for an approved diagnostic scope. |
| Email | Domain alias that forwards to the existing email, plus a simple signature with portfolio and GitHub links. |
| Analytics | Track offer CTA clicks, proof repo clicks, and contact clicks without collecting private visitor data. |

## Source Notes

- Stripe Payment Links/Checkout: https://stripe.com/pricing and https://docs.stripe.com/payment-links/create
- Calendly plans: https://calendly.com/pricing and https://calendly.com/help/choose-the-right-calendly-plan-for-your-team
- Cal.com pricing: https://cal.com/pricing
- Cloudflare plans and Pages: https://www.cloudflare.com/plans/ and https://pages.cloudflare.com/
- Supabase pricing: https://supabase.com/pricing
- Neon pricing: https://neon.com/pricing
- Upstash QStash pricing: https://upstash.com/docs/qstash/overall/pricing
- OpenAI API pricing: https://platform.openai.com/docs/pricing
