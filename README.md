![CI](https://github.com/KIM3310/doeon-kim-portfolio/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# KIM3310 Systems Gallery

Neutral technical systems gallery for AI runtimes, secure automation, operations workbenches, data contracts, and applied ML workflows. Built with React + TypeScript and deployed on GitHub Pages.

The page is product-focused: project cards, capability lanes, verification posture, and repository links. It avoids person-first packets, private data, credential requirements, and external tenant assumptions.

## What Changed

- Rebuilt the first screen as a compact systems gallery.
- Removed legacy packets, generated documents, and archived runtime bridge files.
- Consolidated the page around active repositories and reusable engineering patterns.
- Kept static evidence assets for visual context without requiring live credentials.

## Project Lanes

- Runtime reliability
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
