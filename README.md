![CI](https://github.com/KIM3310/doeon-kim-portfolio/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# KIM3310 Systems Gallery

Operations-first systems gallery for enterprise GenAI, data-center security operations, military MW communications, IT infrastructure operations, secure automation, AI runtimes, operations workbenches, data contracts, and applied ML workflows. Built with React + TypeScript and deployed on GitHub Pages.

The page is product-focused: military 24/7 communications and security monitoring, CCTV/VMS/NVR operation, access-control and intrusion-alert handling, completed InterX infrastructure role context, education, certifications, project cards, capability lanes, verification posture, and repository links. It is written to show the working habit behind each system: define the operator problem, bound the data and trust model, leave a runnable verification path, and document the gap between demo evidence and production claims. It avoids private data, credential requirements, and external tenant assumptions. Private case studies are labeled without exposing repository links that public visitors cannot open.

## Product and System Surface

A compact public gallery that makes each system read like a product, not a scattered project list.

| Lens | Definition |
|---|---|
| Audience | Technical operators, AI platform teams, operations leaders, and partners evaluating product judgment. |
| Architecture path | Validate the demo, README, architecture notes, and quality gate before deeper workflow architecture. |
| System signal | Each card exposes stack tags, runtime boundaries, architecture links, live evidence, demos, and repository routes. |
| Safety boundary | The site avoids client secrets and only displays public-safe project summaries and generated visual assets. |
| Fast path | `npm run verify` checks type safety, content guarantees, tests, and production build before deployment. |

## Three-Minute Proof

1. Open the live gallery and scan the first flagship lane.
2. Expand one project card and confirm it exposes stack tags, runtime boundary, architecture route, and live evidence.
3. Open [docs/live-service-screenshots.md](docs/live-service-screenshots.md) and [docs/repository-upgrade-audit.md](docs/repository-upgrade-audit.md).
4. Run `npm run verify` before treating the gallery as current.

## System Fast Path

- **First minute:** Open the live gallery, scan flagship lanes, then jump to the repository coverage ledger.
- **Local demo:** Run `npm install && npm run dev`, then open `http://localhost:5173`.
- **Verification:** Run `npm run verify`; it covers type safety, tests, content guarantees, and production build.
- **Chrome audit:** Run `npm run audit:chrome` to open every portfolio demo in Google Chrome and record desktop/mobile layout signals.
- **Live proof:** Current service screenshots are tracked in [docs/live-service-screenshots.md](docs/live-service-screenshots.md).
- **Repo audit:** The 35 editable-repo validation pass is recorded in [docs/repository-upgrade-audit.md](docs/repository-upgrade-audit.md).
- **Demo catalog:** Supporting repos without service URLs now have GitHub Pages demos listed in [docs/public-demo-catalog.md](docs/public-demo-catalog.md).
- **Service read:** Use the gallery as the portfolio router for GenAI operations, incident ops, runtime reliability, and governed analytics.

## Technology Stack And Architecture

- **Frontend/runtime:** React, Vite, Next.js, TypeScript, Vitest, Cloudflare Pages, and package/runtime surfaces.
- **Backend/automation:** Python, FastAPI, controlled scripts, report generation, audit paths, and local-first services.
- **Data systems:** SQL, Spark, Snowflake, data contracts, semantic views, quality gates, and export boundaries.
- **Infrastructure:** Terraform, Docker, local compose, GitHub Actions, private deployment notes, and secrets outside source.
- **Architecture route:** each active public repository now links to `docs/system-architecture.md` from the portfolio Architecture section.

## System Architecture

- [System architecture](docs/system-architecture.md) maps the runtime boundary, data/control flow, cloud or local deployment surface, and operating assumptions for this repository.

## Service Architecture

- [Service architecture](docs/service-architecture.md) defines cloud resources, account information, operational controls, and production guardrails for a scoped technical workflow.
- [Repository service architectures](docs/repository-service-architectures.md) maps all 35 editable repos to resource needs, launch sequencing, and account information.
- [Service launch plan](docs/service-launch-plan.md) defines the account setup and 14-day technical readiness path.
- [Service launch playbook](docs/service-launch-playbook.md) maps the repository to architecture audiences, operating gates, launch steps, and risk boundaries.

## Architecture Notes

- [Architecture guide](docs/architecture-evidence-map.md) summarizes the project angle, first files to inspect, runtime commands, and known boundaries.
- [Quality notes](docs/quality-gate.md) lists the local checks, CI surface, and release expectations for this repository.
- [Enterprise readiness notes](docs/enterprise-readiness.md) outlines security, data, operations, integration, and handoff expectations.
- [Readiness snapshot](docs/final-architecture-notes.md) records the latest local verification and the external checks that should be rerun before an important architecture.

## What Changed

- Rebuilt the UI as a light, minimalist product gallery with tighter spacing, quieter contrast, and responsive proof-first layouts.
- Rebuilt the first screen as a compact systems gallery.
- Added market, architecture-signal, and service-path fields to every displayed project so the gallery reads as a product portfolio, not a loose demo list.
- Foregrounded ROK Defense Communication Command MW communications squad leader experience.
- Added InterX IT Infrastructure Operations Manager experience for Apr-May 2026.
- Restored education, Microsoft AI School training, language, and certification details.
- Removed legacy packets, generated documents, and archived runtime bridge files.
- Consolidated the page around active repositories and reusable engineering patterns.
- Promoted AIX Pilot as the current flagship enterprise GenAI product surface.
- Added live service screenshots for the current public proof surfaces and refreshed repository coverage to the audited 35 editable repos.
- Added a narrated English TTS evidence reel generated from the current live service screenshots and repository posture.
- Cleaned public/private repository link handling and clarified consolidated-lane metrics.
- Kept static evidence assets for visual context without requiring live credentials.
- Added a liquid-glass progressive disclosure pass so dense project, experience, outcome, and credential details stay inspectable without overwhelming the first scan.
- Tightened filter chips, disclosure controls, and responsive glass surfaces for cleaner keyboard and mobile behavior.
- Added active-section navigation polish so the gallery keeps orientation while visitors move through project evidence and the repository ledger.
- Added GitHub Pages demo surfaces for 18 previously demo-less supporting repositories and turned the coverage ledger into clickable demo routes.
- Added a readiness snapshot based on local verification, recorded demo checks, homepage metadata, portfolio verification, and UX checks.
- Added a per-repository architecture audit covering service direction, architecture priority, critical blockers, and priority fixes for all 35 editable coverage repositories.
- Added an architecture plan so visitors can evaluate scoped proof surfaces before browsing the full repository gallery.
- Added public API readiness proof for `twincity-ui`, `smallbiz-ops-copilot`, and `districtpilot-ai` using provider metadata aligned with `public-apis-4Kr` without storing provider secrets.

## Project Lanes

- IT infrastructure operations
- Military MW communications, CCTV/VMS/NVR, access-control, intrusion-alert, and 24/7 incident operations
- Runtime reliability
- Enterprise GenAI pilot operations
- Governance and secure automation
- Operations workbenches
- Data contracts and governed analytics
- Manufacturing and field operations
- Applied ML and vision workflows

## Quick Start

```bash
git clone https://github.com/KIM3310/doeon-kim-portfolio.git
cd doeon-kim-portfolio
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Repo Map

- `App.tsx`, `components/`, `constants.ts`, and `index.css` define the page.
- `public/evidence/` keeps static visual evidence assets.
- `public/evidence/portfolio-reel/` keeps the narrated evidence reel, poster frame, and transcript.
- `scripts/verify-gallery.mjs` checks that the page contract remains intact.
- `scripts/chrome-service-audit.mjs` drives Google Chrome through DevTools for portfolio demo QA.
- `npm run evidence:reel` regenerates the narrated MP4 evidence reel on macOS with `say`, `afconvert`, and headless Chrome.

## Build

```bash
npm run verify
```

The command above runs typecheck, tests, content verification, and the production build.

## Deploy

The site is deployed at `https://kim3310.github.io/doeon-kim-portfolio/` via GitHub Pages.

## Cloud + AI Architecture

This repository includes a neutral cloud and AI engineering blueprint that maps the current proof surface to runtime boundaries, data contracts, model-risk controls, deployment posture, and validation hooks.

- [Cloud + AI architecture blueprint](docs/cloud-ai-architecture.md)
- [Machine-readable architecture manifest](docs/architecture/blueprint.json)
- Validation command: `python3 scripts/validate_architecture_blueprint.py`

## Enterprise Productization

- [Product operating model](docs/product-operating-model.md) defines the technical reader, trust boundary, operating checks, and service path for this repository.

## Service Architecture

- [Service architecture](docs/service-architecture.md) defines cloud resources, account information, operational controls, and production guardrails for a scoped technical workflow.
