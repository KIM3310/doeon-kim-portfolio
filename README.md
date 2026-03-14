# Doeon Kim Portfolio

High-trust AI systems portfolio centered on **FabTwin Guardian** — a flagship-first command system designed to show reliability, operator workflow design, governance, and reviewable software delivery.

## What this repo is trying to do

This portfolio is not meant to be a generic personal website. It is a **canonical review surface** for recruiters, hiring managers, and hackathon judges who need to understand:

1. **What is the flagship system?**
2. **Why is it credible?**
3. **What supporting proof exists in public?**
4. **Why does this candidate fit high-trust AI/SW roles?**

## Canonical narrative spine

- **Flagship:** FabTwin Guardian
- **Utility surface:** mission artifact export, signed handoff, and replayable debugging
- **Role positioning:** AI/SW Systems Engineer focused on reliable industrial AI
- **Key themes:** tool-calling reliability, incident AI, operator workflows, governed delivery, review-speed proof surfaces
- **Primary external proof:** public GitHub repos + demos + dossier-style narrative

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

## Canonical live surface

Primary deployed portfolio:

- `https://kim3310.github.io/doeon-kim-portfolio/`

GitHub Pages is the canonical public surface for review. Cloudflare Pages is optional and may lag until its project configuration is pointed at the same build output.

## Optional FabTwin runtime bridge

FabTwin Guardian can talk to an optional Gemini-backed runtime for generating a live operator brief.

```bash
npm run fabtwin:runtime:mock
```

Legacy `fabpilot:*` aliases remain available:

```bash
npm run fabpilot:runtime:mock
```

For setup details, see:

- `docs/FABPILOT_GEMINI_RUNTIME.md`

## Deploy intent

The live portfolio is designed to act as the fastest path from first impression to technical confidence:
- homepage -> flagship framing
- projects -> supporting proof chain
- briefs -> hiring / hackathon support package
- contact/review path -> recruiter follow-up

## Notes

This repo intentionally prioritizes **clarity, trust, and review speed** over decorative portfolio complexity.
