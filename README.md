![CI](https://github.com/KIM3310/doeon-kim-portfolio/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# KIM3310 Systems Gallery

Neutral technical systems gallery for enterprise GenAI, data-center security operations, military MW communications, IT infrastructure operations, secure automation, AI runtimes, operations workbenches, data contracts, and applied ML workflows. Built with React + TypeScript and deployed on GitHub Pages.

The page is product-focused: military 24/7 communications and security monitoring, CCTV/VMS/NVR operation, access-control and intrusion-alert handling, current role context, education, certifications, project cards, capability lanes, verification posture, and repository links. It avoids private data, credential requirements, and external tenant assumptions. Private case studies are labeled without exposing repository links that public visitors cannot open.

## Product and Review Surface

A compact public gallery that makes each system read like a product, not a scattered project list.

| Lens | Definition |
|---|---|
| Buyer or user | Technical reviewers, AI platform teams, operations leaders, and partners evaluating product judgment. |
| Commercial route | Route visitors into paid pilot conversations for GenAI operations, reliability audits, security operations, and governed analytics. |
| Review signal | Each card exposes market, review signal, revenue path, live evidence, and verification-friendly repository links. |
| Safety boundary | The site avoids client secrets and only displays public-safe project summaries and generated visual assets. |
| Fast proof | `npm run verify` checks type safety, content guarantees, tests, and production build before deployment. |

## Reviewer Fast Path

- **First minute:** Open the live gallery, scan flagship lanes, then jump to the repository coverage ledger.
- **Local demo:** Run `npm install && npm run dev`, then open `http://localhost:5173`.
- **Verification:** Run `npm run verify`; it covers type safety, tests, content guarantees, and production build.
- **Commercial read:** Use the gallery as the portfolio router for GenAI operations, incident ops, runtime reliability, and governed analytics.

## Commercialization Playbook

- [Monetization and GTM playbook](docs/monetization-playbook.md) maps the repository to buyer segments, offer ladder, pricing hypotheses, proof gates, and risk boundaries.

## Review Notes

- [Review guide](docs/reviewer-evidence-map.md) summarizes the project angle, first files to inspect, verification commands, and known boundaries.
- [Quality notes](docs/quality-gate.md) lists the local checks, CI surface, and release expectations for this repository.
- [Revenue growth model](docs/revenue-growth-model.md) maps the project to an ethical revenue path, activation loop, pricing logic, and growth experiments.
- [Enterprise readiness notes](docs/enterprise-readiness.md) outlines security, data, operations, integration, and handoff expectations.
- [Conversion UX model](docs/conversion-ux-model.md) maps the buyer path, behavioral design, UI/UX direction, pricing frame, and ethical conversion guardrails.

## What Changed

- Rebuilt the UI as a light, minimalist product gallery with tighter spacing, quieter contrast, and responsive proof-first layouts.
- Rebuilt the first screen as a compact systems gallery.
- Added market, review-signal, and revenue-path fields to every displayed project so the gallery reads as a product portfolio, not a loose demo list.
- Foregrounded ROK Defense Communication Command MW communications squad leader experience.
- Added current InterX IT Infrastructure Operations Manager experience beginning April 2026.
- Restored education, Microsoft AI School training, language, and certification details.
- Removed legacy packets, generated documents, and archived runtime bridge files.
- Consolidated the page around active repositories and reusable engineering patterns.
- Promoted AIX Pilot as the current flagship enterprise GenAI product surface.
- Added real AIX Pilot console imagery and static evidence thumbnails to make the gallery immediately reviewable.
- Cleaned public/private repository link handling and clarified consolidated-lane metrics.
- Kept static evidence assets for visual context without requiring live credentials.

## Project Lanes

- Current IT infrastructure operations
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
- `scripts/verify-gallery.mjs` checks that the page contract remains intact.

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
