# Service Launch Plan

Date: 2026-06-06 KST

This plan keeps the launch path focused on architecture, account setup, workflow validation, and operational control.

## Current Position

The portfolio should route technical readers into four scoped technical lanes:

| Service lane | First technical reader | First motion | Architecture anchor |
| --- | --- | --- | --- |
| Enterprise AI adoption | AI, data, security, and platform leaders | Readiness and data-boundary architecture | `aix-pilot`, `enterprise-llm-adoption-kit`, `llm-onprem-deployment-kit` |
| Agent runtime reliability | Teams shipping tool-calling systems | Failure-mode and trace architecture | `stage-pilot`, `agent-runtime-go`, `agent-orchestration-benchmark` |
| Security and network operations | SOC, NOC, MSP, IDC, and infrastructure teams | Tabletop scenario and workflow audit | `AegisOps`, `security-threat-response-workbench`, `nw-service-assurance-workbench` |
| Governed data and document automation | Analytics, manufacturing, Korean back-office, and regulated workflow teams | Workflow and data-boundary diagnostic | `Nexus-Hive`, `lakehouse-contract-lab`, `secure-xl2hwp-local` |

## Configure First

| Resource | Why | Configure timing |
| --- | --- | --- |
| Custom domain | Makes architecture and sharing cleaner than a GitHub subpath. | After the public brand/domain name is chosen. |
| Scheduling page | Removes friction from qualified architecture walkthroughs. | After calendar availability and intake questions are ready. |
| Privacy-safe analytics | Shows which lane gets qualified clicks without collecting private payloads. | After the domain is connected. |
| Professional email alias | Improves trust in outbound and inbound conversations. | With the domain. |
| Observability project | Tracks page errors, demo health, and runtime failures where applicable. | Before broader external testing. |

Do not add compute, database capacity, GPU capacity, CRM seats, or enterprise hosting until a specific workflow needs it.

## Public Surface Changes

- Keep the public site centered on demos, screenshots, repository evidence, and architecture notes.
- Each technical lane links to proof repos and architecture docs.
- Each repo keeps `docs/service-architecture.md` with resources, account information, and controls.
- The portfolio index is [repository service architectures](repository-service-architectures.md).

## 14-Day Readiness Push

| Day | Action | Pass condition |
| ---: | --- | --- |
| 1 | Pick one domain and connect it to the portfolio. | Domain resolves to the portfolio and SSL is active. |
| 1 | Create scheduling event types matching the four technical lanes. | Each event has narrow intake questions. |
| 2 | Draft private workflow scope and architecture boundary. | Scope is ready for a architecture walkthrough call. |
| 2 | Add calendar links to the portfolio constants only after the account is ready. | CTA path moves from email-only to schedule-ready. |
| 3-5 | Build a target-architecture list across the four service lanes. | Each account has one specific workflow pain. |
| 6-10 | Send targeted messages with one proof repo and one architecture-backed workflow. | Replies or calls show which lane has demand. |
| 11-14 | Run calls and pitch the smallest scoped workflow, not a vague custom build. | One technical reader gives enough scope to justify backend resources. |

## Guardrails

- Present diagnostics first when data access, security architecture, or technical reader authority is unclear.
- Do not promise autonomous medical, safety, industrial inspection, or security outcomes.
- Keep regulated, medical, and manufacturing workflows scoped as human-approved support unless expert architecture and approved data exist.
- Do not build more features until a technical reader confirms the workflow.
- Keep private assumptions out of public repository docs.

## Account Setup Checklist

| Account | Minimum setup |
| --- | --- |
| Cloudflare | Domain, DNS, SSL, analytics, optional Pages redirect from current GitHub Pages. |
| Calendly or Cal.com | Four event types: AI adoption, runtime reliability, security ops, governed automation. |
| Email | Domain alias that forwards to the existing email, plus a simple signature with portfolio and GitHub links. |
| Analytics | Track proof repo clicks, demo clicks, and contact clicks without collecting private visitor data. |
| Sentry or equivalent | Capture runtime errors where a deployed app has client or server execution. |
