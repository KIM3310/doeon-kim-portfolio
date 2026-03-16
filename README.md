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

## Target-company review map

Use the portfolio like a guided proof surface, not a flat project gallery.

- **Frontier LLM teams:** start with `StagePilot`, then `AegisOps`, `Aegis-Air`, and `ogx`
- **Big tech product / SRE orgs:** start with `StagePilot`, `TwinCity UI`, `AegisOps`, and the `FabTwin Guardian` case study
- **Snowflake:** start with `Nexus-Hive`, `the-logistics-prophet`, and `enterprise-llm-adoption-kit`
- **Databricks:** start with `the-logistics-prophet`, `Nexus-Hive`, `Upstage-DocuAgent`, and `beaver-study-orchestrator`
- **Palantir:** start with `FabTwin Guardian`, `regulated-case-workbench`, `fab-ops-yield-control-tower`, and `twincity-ui`

The site now includes a target-company matrix plus an account-wide repo taxonomy so each reviewer path is explicit.

## Submission readiness snapshot

The portfolio now includes a dedicated submission-readiness section that estimates the current public package by track:

- **Frontier LLM:** runtime reliability, provider tradeoff posture, and eval discipline are now explicit.
- **Big tech systems:** defensive engineering, operator workflows, and fallback surfaces read quickly.
- **Snowflake / Databricks:** semantic governance, warehouse-target posture, and solution-architecture routing are visible.
- **Palantir:** approval boundaries, evidence trails, and action-heavy operational software remain the strongest public fit.

Those percentages are intentionally framed as **public-package readiness**, not a claim that interviewing or production history is already complete.

## Visual evidence gallery

The site now also includes a visual evidence section with recruiter-fast artifacts for the three target tracks:

- `StagePilot provider benchmark scorecard`
- `StagePilot perf evidence pack`
- `Nexus-Hive semantic governance board`
- `Nexus-Hive lakehouse readiness board`
- `Enterprise workshop readout board`
- `AegisOps system design board`

The goal is to let a reviewer confirm frontier, big-tech, data-platform, and solution-architecture proof with images before opening source files.

## Account-wide repo map

The GitHub account is organized around a small number of hiring signals:

- **Review surfaces:** `KIM3310`, `doeon-kim-portfolio`
- **Reliability and agent runtimes:** `stage-pilot`, `AegisOps`, `Aegis-Air`, `ogx`, `gemini-cli-tool-runtime`
- **Operational software and governed workflows:** `twincity-ui`, `fab-ops-yield-control-tower`, `regulated-case-workbench`, `secure-xl2hwp-local`, `honeypot`, `smallbiz-ops-copilot`
- **Data, platform, and analytics systems:** `enterprise-llm-adoption-kit`, `Nexus-Hive`, `the-logistics-prophet`, `beaver-study-orchestrator`, `Upstage-DocuAgent`
- **Product and mobile experiments:** `SteadyTap`, `ecotide`, `the-savior`, `kbbq-idle-unity`, `dream-interpretation-pages`

## Extended proof surfaces

Recent support repos now expose explicit reviewer handoff surfaces, which makes the portfolio read like a system family instead of a few strong flagships plus hidden demos.

- `beaver-study-orchestrator` now exposes `/api/outcomes/board` for study recovery delta and next-action review.
- `fab-ops-yield-control-tower` now exposes `/api/release-board` for queue-level release posture before lot-level claims.
- `SteadyTap` now exposes `/v1/review-queue` for clinician/reviewer handoff before cloud guidance is trusted.
- `honeypot` now exposes `/api/approval-matrix` for handover coverage and blocked-section review.
- `ogx` now exposes `/v1/automation-guardrails`, and `gemini-cli-tool-runtime` adds `omg_team_operator_brief`, so the runtime/agent cluster has explicit operator-handoff surfaces too.
- `smallbiz-ops-copilot`, `the-savior`, `kbbq-idle-unity`, and `ecotide` now expose owner handoff, escalation readiness, release readiness, and CLI reviewer fallback surfaces instead of relying on narrative alone.

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
