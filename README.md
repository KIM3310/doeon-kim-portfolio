# Doeon Kim — KIM3310 Systems Gallery

**Live portfolio:** [kim3310-doeon-kim-portfolio.pages.dev](https://kim3310-doeon-kim-portfolio.pages.dev/)

![CI](https://github.com/KIM3310/doeon-kim-portfolio/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Operations-first systems gallery for enterprise GenAI, data-center security operations, military microwave (MW) communications, IT infrastructure operations, secure automation, AI runtimes, operations workbenches, data contracts, and applied ML workflows. Static builds deploy to GitHub Pages and Cloudflare Pages; dynamic inquiry and telemetry routes require the Cloudflare deployment and are exposed only after a live endpoint check.

The page is product-focused: military 24/7 communications and security monitoring, CCTV/VMS/NVR operation, access-control and intrusion-alert handling, completed InterX infrastructure role context, education, certifications, project cards, capability lanes, verification posture, and repository links. It is written to show the working habit behind each system: define the operator problem, bound the data and trust model, leave a runnable verification path, and document the gap between demo evidence and production claims. It avoids private data, credential requirements, and external tenant assumptions. Private case studies are labeled without exposing repository links that public visitors cannot open.

## System Overview

A compact public gallery that makes each system read like a product, not a scattered project list.

| Area | Details |
|---|---|
| Users | Technical evaluators, AI platform teams, operations leaders, and partners evaluating product judgment. |
| System scope | Each card exposes stack tags, runtime boundaries, architecture links, live evidence, demos, and repository routes. |
| Operating boundary | The site avoids client secrets and only displays public-safe project summaries and generated visual assets. |
| Evaluation path | `npm run verify` checks type safety, content guarantees, tests, and production build before deployment. |

## Three-Minute Proof

1. Open the live gallery and scan the first flagship lane.
2. Expand one project card and confirm it exposes stack tags, runtime boundary, architecture route, and live evidence.
3. Open [docs/live-service-screenshots.md](docs/live-service-screenshots.md) and [docs/repository-upgrade-audit.md](docs/repository-upgrade-audit.md).
4. Review [memoryflow-lab](https://kim3310.github.io/memoryflow-lab/) separately for measured-versus-analytical systems-performance evidence.
5. Run `npm run verify` before treating the gallery as current.

## Evaluation Path

- **Start here:** Open the live gallery, scan flagship lanes, then jump to the repository coverage ledger.
- **Local demo:** Run `npm install && npm run dev`, then open `http://localhost:5173`.
- **Checks:** Run `npm run verify`; it covers type safety, tests, content guarantees, and production build.
- **Chrome audit:** Run `npm run audit:chrome` to open every portfolio demo in Google Chrome and record desktop/mobile layout signals.
- **Live proof:** Current service screenshots are tracked in [docs/live-service-screenshots.md](docs/live-service-screenshots.md).
- **Repo audit:** The current public inventory contains **30 active public original repositories and 15 archived public original repositories**. The dated 35-repository publication catalog remains available at [docs/repository-upgrade-audit.md](docs/repository-upgrade-audit.md) as a historical snapshot.
- **Demo catalog:** Supporting repositories have public static demos listed in [docs/public-demo-catalog.md](docs/public-demo-catalog.md).
- **Service read:** Use the gallery as the portfolio router for GenAI operations, incident ops, runtime reliability, and governed analytics.

## Technology Stack And Architecture

- **Frontend/runtime:** React, Vite, Next.js, TypeScript, Vitest, Cloudflare Pages, and package/runtime surfaces.
- **Backend/automation:** Python, FastAPI, controlled scripts, report generation, audit paths, and local-first services.
- **Data systems:** SQL, Spark, Snowflake, data contracts, semantic views, quality gates, and export boundaries.
- **Infrastructure:** Terraform, Docker, local compose, GitHub Actions, private deployment notes, and secrets outside source.
- **Architecture route:** each active public repository now links to `docs/system-architecture.md` from the project index Architecture section.

## System Architecture

- [System architecture](docs/system-architecture.md) maps the runtime boundary, data/control flow, cloud or local deployment surface, and operating assumptions for this repository.

## Service Architecture

- [Service architecture](docs/service-architecture.md) defines cloud resources, account information, operational controls, and production guardrails for a scoped technical workflow.
- [Repository service architectures](docs/repository-service-architectures.md) maps all 35 editable repos to resource needs, launch sequencing, and account information.
- [Revenue architecture index](docs/revenue-architecture-index.md) maps every active repository to a productized offer, first paid SKU, free lead magnet, free-tier-first launch stack, and upgrade boundary.
- [Service launch plan](docs/service-launch-plan.md) defines the account setup and 14-day technical readiness path.
- [Free resource and payment wiring](docs/free-resource-payment-wiring.md) explains the DaesikPage/public-apis-4Kr overlay, Cloudflare deployment path, and payment-account secret boundaries.
- [Service consolidation](docs/service-consolidation.md) explains the seven outcome-focused offers and which experimental surfaces stay guarded.
- [Design source of truth](DESIGN.md) defines the premium storefront design contract, visual language, accessibility, responsive rules, and verification expectations.
- [Service launch playbook](docs/service-launch-playbook.md) maps the repository to its product scope, operating gates, launch steps, and risk boundaries.

## Architecture Notes

- [Architecture guide](docs/architecture-evidence-map.md) summarizes the system scope, first files to inspect, runtime commands, and known boundaries.
- [Quality notes](docs/quality-gate.md) lists the local checks, CI surface, and release expectations for this repository.
- [Enterprise readiness notes](docs/enterprise-readiness.md) outlines security, data, operations, integration, and handoff expectations.
- [Readiness snapshot](docs/final-architecture-notes.md) records the latest local verification and the external checks that should be rerun before an important external review.

## Current Portfolio Surface

- Person-first systems gallery with live demos, architecture routes, and explicit public/private boundaries.
- Seven bounded service lanes separated from their free public proof; starting prices are non-binding and no checkout is active.
- Cloudflare inquiry form fails closed to a LinkedIn fallback unless the dynamic endpoint passes a live preflight check.
- Project cards cover operational AI, runtime reliability, data systems, secure workflows, infrastructure, and applied ML.
- The 35-repository publication catalog remains a dated commercial snapshot; `memoryflow-lab` is routed separately as systems-performance research evidence.

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

The canonical static site is `https://kim3310-doeon-kim-portfolio.pages.dev/`. Dynamic routes are usable only when the Cloudflare Functions deployment passes the semantic smoke gate; otherwise the UI displays a private LinkedIn fallback.

## Cloud + AI Architecture

- [Cloud + AI architecture blueprint](docs/cloud-ai-architecture.md)
- [Machine-readable architecture manifest](docs/architecture/blueprint.json)
- Validation command: `python3 scripts/validate_architecture_blueprint.py`

## Enterprise Productization

- [Product operating model](docs/product-operating-model.md) defines the product scope, trust boundary, operating checks, and service path for this repository.

<!-- search-growth-readme:start -->

## Search And Service Surface

- Public entry: free systems gallery with live demos and architecture links
- Paid boundary: paid architecture pack bundle, implementation sprint, or private adaptation of a repo
- Canonical URL: https://kim3310-doeon-kim-portfolio.pages.dev/
- Lead capture: https://kim3310-doeon-kim-portfolio.pages.dev/?offer=doeon-kim-portfolio&inquiry=architecture-scope-sprint#private-inquiry
- Resource route: https://kim3310-doeon-kim-portfolio.pages.dev/resources/doeon-kim-portfolio/
- Commercial route: https://kim3310-doeon-kim-portfolio.pages.dev/?offer=doeon-kim-portfolio#service-offers
- Machine-readable offer: [docs/service-offer.json](docs/service-offer.json)
- Search growth implementation: [docs/search-growth-implementation.md](docs/search-growth-implementation.md)
- Revenue architecture: [docs/revenue-architecture.md](docs/revenue-architecture.md)

<!-- search-growth-readme:end -->

<!-- KIM3310:AD-DATA-PIVOT:START -->
## Free Resource, Advertising, and Aggregate Data

- [Public utility and architecture checklist](https://kim3310-doeon-kim-portfolio.pages.dev/resources/doeon-kim-portfolio/)
- Revenue model: contextual advertising on the policy-eligible central resource page.
- Aggregate value: anonymous aggregate resource hub navigation and service-offer interest counts
- Boundary: ads allowed only on public resource pages; inquiry, private routing, admin, and analytics support flows are ad-free
- Consent defaults off, DNT/GPC fail closed, and personal or sensitive data is never sold.
<!-- KIM3310:AD-DATA-PIVOT:END -->
