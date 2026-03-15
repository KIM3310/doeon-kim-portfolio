# Doeon Kim Portfolio

Benchmark-led AI systems portfolio centered on **StagePilot** as the primary public proof surface, with **FabTwin Guardian** as the applied case study for approval boundaries, operator workflows, and high-trust delivery.

## What this repo is trying to do

This portfolio is not meant to be a generic personal website. It is a **canonical review surface** for recruiters, hiring managers, and hackathon judges who need to understand:

1. **What is the strongest public proof?**
2. **How does that proof extend into applied systems?**
3. **What supporting evidence exists in public?**
4. **Why does this candidate fit frontier-adjacent and high-trust AI/SW roles?**

## Canonical narrative spine

- **Primary proof:** StagePilot
- **Applied case study:** FabTwin Guardian
- **Role positioning:** LLM Systems Engineer focused on agent reliability, evals, runtime safety, and high-trust delivery
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
- homepage -> reliability framing
- projects -> supporting proof chain
- briefs -> applied-case and hackathon support package
- contact/review path -> recruiter follow-up

## Notes

This repo intentionally prioritizes **clarity, trust, and review speed** over decorative portfolio complexity.
