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

- **AI / Runtime Systems:** StagePilot, AegisOps, Aegis-Air, ogx
- **Quantum / Scientific:** quantum-workbench
- **Operational Software:** twincity-ui, fab-ops-yield-control-tower, regulated-case-workbench, smallbiz-ops-copilot
- **Data & Analytics:** enterprise-llm-adoption-kit, lakehouse-contract-lab, Nexus-Hive, the-logistics-prophet
- **Brokerage / securities:** advisor-review-desk, Nexus-Hive, signal-risk-lab
- **Quant / systematic:** signal-risk-lab, lakehouse-contract-lab, the-logistics-prophet
- **Product Experiments:** SteadyTap, ecotide, the-savior, kbbq-idle-unity

## Repo operating map

- `components/`, `constants.ts`, and `content/` define the main portfolio experience.
- `public/briefs/` contains role- and domain-specific walkthrough packets.
- `public/fabpilot-live-x.html` and `public/fabpilot-dossier.html` preserve the archived ops case study.
- `docs/` holds supporting runtime and resume pipeline notes.
- `server/` exposes the optional archived runtime bridge used by the older ops surface.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run typecheck
npm run build
npm run verify:content
```

The three commands above are the fastest way to verify the current portfolio snapshot before publishing.

## Deploy

The site is deployed at `https://kim3310.github.io/doeon-kim-portfolio/` via GitHub Pages.

## FabTwin Runtime Bridge (archived)

The archived fab ops case study includes an optional Gemini-backed runtime for generating live operator briefs.

```bash
npm run fabtwin:runtime:mock
```

See `docs/FABPILOT_GEMINI_RUNTIME.md` for setup details.

## Notes

Prioritizes clarity and working demos over decorative complexity.
