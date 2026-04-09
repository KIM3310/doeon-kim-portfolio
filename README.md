![CI](https://github.com/KIM3310/doeon-kim-portfolio/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# Doeon Kim Portfolio

Personal portfolio site showcasing AI systems, operational software, and data platform projects. Built with React + TypeScript, deployed on GitHub Pages.

Verified now (2026-04-07): local typecheck, content verification, tests, and production build were rerun from the repository root, and the current public deployments plus third-party assets were rechecked from the live URLs.

## Career / Languages / Certifications

- **Career:** 국군지휘통신사령부 / 제1정보통신단 (전략 지휘통신망 네트워크·보안 운영 / 팀 리드, `2023.11 ~ 2025.05`), ATOM TECH SOLUTIONS LTD (Backend / Full Stack Engineer Intern, `2025.06 ~ 2025.09`), Microsoft AI School 8기 (Trainee, `2025.09 ~ 2026.02`)
- **Languages:** 한국어 Native, 영어 Business / Working, 일본어 Business / Working
- **Certifications:** Microsoft AI-900, Snowflake SnowPro Associate, Databricks Platform Architect (AWS / GCP), Databricks Fundamentals, Palantir Foundry Data Engineer Associate, Palantir Foundry Foundations, Datadog Observability, IBM AI / Cloud / Cyber Fundamentals, SAP Cloud Platform Integration

## 90-Second Review Route

If you are screening for a specific lane, use this order first:

1. **Applied AI / LLM systems:** [`stage-pilot`](https://github.com/KIM3310/stage-pilot) -> [`AegisOps`](https://github.com/KIM3310/AegisOps) -> [`frontier-llm-review-brief`](https://kim3310.github.io/doeon-kim-portfolio/briefs/frontier-llm-review-brief.html)
2. **Solutions / field engineering:** [`AegisOps`](https://github.com/KIM3310/AegisOps) -> [`enterprise-llm-adoption-kit`](https://github.com/KIM3310/enterprise-llm-adoption-kit) -> [`aws-genai-application-packet`](https://kim3310.github.io/doeon-kim-portfolio/briefs/aws-genai-application-packet.html) or [`palantir-application-packet`](https://kim3310.github.io/doeon-kim-portfolio/briefs/palantir-application-packet.html)
3. **Data + AI platform:** [`Nexus-Hive`](https://github.com/KIM3310/Nexus-Hive) -> [`lakehouse-contract-lab`](https://github.com/KIM3310/lakehouse-contract-lab) -> [`snowflake-review-brief`](https://kim3310.github.io/doeon-kim-portfolio/briefs/snowflake-review-brief.html) or [`databricks-review-brief`](https://kim3310.github.io/doeon-kim-portfolio/briefs/databricks-review-brief.html)
4. **Network / security operations:** [`nw-service-assurance-workbench`](https://github.com/KIM3310/nw-service-assurance-workbench) -> [`security-threat-response-workbench`](https://github.com/KIM3310/security-threat-response-workbench) -> [`portfolio`](https://kim3310.github.io/doeon-kim-portfolio/)

If you only click one artifact first, `stage-pilot` is the cleanest proof for AI reliability, `AegisOps` is the clearest operator-facing applied system, and `Nexus-Hive` is the fastest data-platform proof.

## Start Here By Target

- **Big tech / applied AI systems:** [`big-tech-systems-review-brief`](https://kim3310.github.io/doeon-kim-portfolio/briefs/big-tech-systems-review-brief.html)
- **AWS / GenAI SA packet:** [`aws-genai-application-packet`](https://kim3310.github.io/doeon-kim-portfolio/briefs/aws-genai-application-packet.html)
- **Databricks Korea packet:** [`databricks-korea-application-packet`](https://kim3310.github.io/doeon-kim-portfolio/briefs/databricks-korea-application-packet.html)
- **Snowflake Korea packet:** [`snowflake-korea-application-packet`](https://kim3310.github.io/doeon-kim-portfolio/briefs/snowflake-korea-application-packet.html)
- **OpenAI Seoul packet:** [`openai-seoul-application-packet`](https://kim3310.github.io/doeon-kim-portfolio/briefs/openai-seoul-application-packet.html)
- **Anthropic Seoul packet:** [`anthropic-seoul-application-packet`](https://kim3310.github.io/doeon-kim-portfolio/briefs/anthropic-seoul-application-packet.html)
- **Frontier LLM / runtime reliability:** [`frontier-llm-review-brief`](https://kim3310.github.io/doeon-kim-portfolio/briefs/frontier-llm-review-brief.html)
- **Snowflake review brief:** [`snowflake-review-brief`](https://kim3310.github.io/doeon-kim-portfolio/briefs/snowflake-review-brief.html)
- **Databricks review brief:** [`databricks-review-brief`](https://kim3310.github.io/doeon-kim-portfolio/briefs/databricks-review-brief.html)
- **Palantir / operational AI packet:** [`palantir-application-packet`](https://kim3310.github.io/doeon-kim-portfolio/briefs/palantir-application-packet.html)
- **Palantir review brief:** [`palantir-review-brief`](https://kim3310.github.io/doeon-kim-portfolio/briefs/palantir-review-brief.html)

## Quick Start

```bash
git clone https://github.com/KIM3310/doeon-kim-portfolio.git
cd doeon-kim-portfolio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Projects

The portfolio is organized around a few focus areas:

- **Runtime and reliability systems:** StagePilot, AegisOps, ops-reliability-workbench
- **Operational infrastructure systems:** nw-service-assurance-workbench, security-threat-response-workbench
- **Operational workflow systems:** memory-test-master-change-gate, fab-ops-yield-control-tower, regulated-case-workbench, smallbiz-ops-copilot
- **Data and analytics systems:** enterprise-llm-adoption-kit, lakehouse-contract-lab, Nexus-Hive
- **Applied vision systems:** retina-scan-ai, weld-defect-vision
- **Supporting experiments and archived context:** Twincity UI, The Logistics Prophet, Signal Risk Lab, ogx, SteadyTap, ecotide, the-savior, kbbq-idle-unity

The public site intentionally leads with authored, reviewable public proof. Private workbenches remain part of the deeper interview story, but they are no longer treated as the first thing a recruiter should read.

## Repo operating map

- `components/`, `constants.ts`, and `content/` define the main portfolio experience.
- `public/briefs/` contains optional walkthrough pages and supporting review guides.
- `public/fabpilot-live-x.html` and `public/fabpilot-dossier.html` preserve the archived ops case study.
- `docs/` holds supporting runtime and resume pipeline notes.
- `server/` exposes the optional archived runtime bridge used by the older ops surface.

## Current flagship public order

1. `stage-pilot`
2. `AegisOps`
3. `tool-call-finetune-lab`
4. `Nexus-Hive`
5. `enterprise-llm-adoption-kit`
6. `lakehouse-contract-lab`

These six repos are the clearest public proof for the current hiring story: applied AI reliability, governed analytics, enterprise AI delivery, and data-platform integration. Most of them include a built-in resource pack, review pack, or release-readiness surface so reviewers can inspect the strongest proof path without private data or API keys.

For `tool-call-finetune-lab`, the strongest public proof is the post-training pipeline, BFCL-aligned harness, Kaggle-ready notebook, and checked-in release-status artifacts. External Kaggle and Hugging Face publication should be treated as separately tracked proof, not silently assumed.

For targeted telecom, NOC, or cloud security loops, the live role-fit surfaces are `nw-service-assurance-workbench` and `security-threat-response-workbench`. They are intentionally separate from the six-flagship AI/data story so recruiters can inspect them only when the role actually benefits from that operator-facing context.

For the cloud security monitoring portfolio atlas itself, the current dual deployment is:

- Desktop: `https://cloud-security-monitoring.pages.dev/`
- Mobile: `https://cloud-security-monitoring-mobile.pages.dev/`

## Selective private depth

- `memory-test-master-change-gate`
- `ops-reliability-workbench`
- `regulated-case-workbench`
- `retina-scan-ai`
- `Upstage-DocuAgent`

These systems are part of the deeper role-fit story and are shared selectively in targeted interview loops. The public site keeps them behind the public-first flagship set so the portfolio stays legible to external reviewers.

Credential note: the public site keeps certification names and issuers visible, while issuer validation links or IDs are shared in application packets or on request.

Cross-repo verification and residual-risk ledger: [`KIM3310/PORTFOLIO_VERIFICATION_AND_RISK_LEDGER.md`](https://github.com/KIM3310/KIM3310/blob/main/PORTFOLIO_VERIFICATION_AND_RISK_LEDGER.md)
Deployment and external resource audit: [`KIM3310/DEPLOYMENT_EXTERNAL_RESOURCE_AUDIT_2026-04-07.md`](https://github.com/KIM3310/KIM3310/blob/main/DEPLOYMENT_EXTERNAL_RESOURCE_AUDIT_2026-04-07.md)

## Current live integration highlights

- `stage-pilot` — GCS + BigQuery benchmark publish proof
- `AegisOps` — GCS + BigQuery incident artifact / analytics proof
- `Nexus-Hive` — live Snowflake + live Databricks governed SQL proof, now with headless OAuth-ready Databricks auth
- `lakehouse-contract-lab` — Snowflake + Databricks gold KPI export proof, now service-principal-ready on Databricks
- `enterprise-llm-adoption-kit` — AWS Bedrock runtime + Snowflake/Databricks eval/audit persistence, plus Databricks MLflow/Delta on headless OAuth auth
- `retina-scan-ai` — AWS S3 review-safe artifact export
- `fab-ops-yield-control-tower` — AWS S3 + DynamoDB + SQS handoff/audit export path
- `Upstage-DocuAgent` — GCS review-safe document artifact export

## Live-now labels

| Label | Meaning | Current examples |
|---|---|---|
| **live verified** | real cloud/platform smoke or bounded live route verified | `stage-pilot`, `AegisOps`, `enterprise-llm-adoption-kit`, `Nexus-Hive`, `lakehouse-contract-lab`, `memory-test-master-change-gate`, `fab-ops-yield-control-tower`, `retina-scan-ai`, `Upstage-DocuAgent` |
| **review-only live** | public/runtime surface is live, but claims intentionally stay bounded and reviewer-safe | `regulated-case-workbench`, `signal-risk-lab`, `nw-service-assurance-workbench`, `security-threat-response-workbench` |
| **local-first / supporting** | strongest proof is local, staged, or supporting rather than public live | `Aegis-Air`, `ops-reliability-workbench`, `ogx`, `dv-regression-lab`, `twincity-ui`, `the-logistics-prophet` |

## Local public data policy

Public datasets used for richer local review are staged under a **local-only cache directory** and linked into individual repos as **local-only files**. Raw source files are **not committed to GitHub**. GitHub surfaces only keep:

- dataset provenance
- staged-data presence / row counts / sample counts
- no-key review routes

Main staged sources currently include:
- Kaggle `andrewmvd/retinal-disease-classification`
- Kaggle `sukmaadhiwijaya/welding-defect-object-detection`
- Kaggle `paresh2047/uci-semcom`
- Kaggle `olistbr/brazilian-ecommerce`
- Kaggle `javierspdatabase/global-online-orders`
- Kaggle `suraj520/customer-support-ticket-dataset`
- Kaggle `sanketgadekar/legal-indian-contract-clauses-dataset`
- Kaggle `anshankul/ibm-amlsim-example-dataset`
- Kaggle `vipulshinde/incident-response-log`

Rebuild flow: use `KIM3310/scripts/sync_open_data.py` from the profile repo to refresh the local cache and relink staged files.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run verify
```

The command above is the fastest way to verify the current portfolio snapshot before publishing.

## Deploy

The site is deployed at `https://kim3310.github.io/doeon-kim-portfolio/` via GitHub Pages.

## FabTwin Runtime Bridge (archived)

The archived fab ops case study includes an optional model-backed runtime for generating live operator briefs.

```bash
npm run fabtwin:runtime:mock
```

See `docs/FABPILOT_GEMINI_RUNTIME.md` for setup details.

## Notes

Prioritizes clarity and working demos over decorative complexity.
