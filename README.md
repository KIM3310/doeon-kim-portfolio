# Doeon Kim Portfolio

Personal portfolio site showcasing AI systems, operational software, and data platform projects. Built with React + TypeScript, deployed on GitHub Pages.

Verified now: local typecheck, production build, and content verification all run from the repository root.

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
- **Operational workflow systems:** memory-test-master-change-gate, fab-ops-yield-control-tower, regulated-case-workbench, smallbiz-ops-copilot
- **Data and analytics systems:** enterprise-llm-adoption-kit, lakehouse-contract-lab, Nexus-Hive
- **Applied vision systems:** retina-scan-ai, weld-defect-vision
- **Supporting experiments and archived context:** Twincity UI, The Logistics Prophet, Signal Risk Lab, ogx, SteadyTap, ecotide, the-savior, kbbq-idle-unity

## Repo operating map

- `components/`, `constants.ts`, and `content/` define the main portfolio experience.
- `public/briefs/` contains optional walkthrough pages and supporting review guides.
- `public/fabpilot-live-x.html` and `public/fabpilot-dossier.html` preserve the archived ops case study.
- `docs/` holds supporting runtime and resume pipeline notes.
- `server/` exposes the optional archived runtime bridge used by the older ops surface.

## Current flagship order

1. `stage-pilot`
2. `AegisOps`
3. `memory-test-master-change-gate`
4. `ops-reliability-workbench`
5. `enterprise-llm-adoption-kit`
6. `lakehouse-contract-lab`
7. `retina-scan-ai`
8. `regulated-case-workbench`

Most of these flagship repos now include a built-in resource pack, review pack, or release-readiness surface, and several now also report locally staged public datasets so reviewers can inspect the strongest proof path without private data or API keys.

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
| **review-only live** | public/runtime surface is live, but claims intentionally stay bounded and reviewer-safe | `regulated-case-workbench`, `signal-risk-lab` |
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
