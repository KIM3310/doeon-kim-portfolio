# FabPilot Live X — Next Steps

Last updated: 2026-03-14

## Current stable status

- Canonical portfolio surface: GitHub Pages
- Flagship narrative: **FabPilot Live X**
- Hiring target: **Samsung DS / MX**
- Hackathon target: **Gemini Live Agent Challenge**
- Verification baseline:
  - `npm run verify:content`
  - `npm run typecheck`
  - `npm run build`

## Highest-priority next steps

### 1. Choose the demo lane

- **Local demo lane**: keep the current built-in mission data and optional local runtime
- **Cloud lane**: deploy the runtime to Cloud Run after IAM/billing is fixed

### 2. Finish demo assets

1. record a 90s–3m walkthrough
2. capture 5 polished screenshots
3. add one architecture diagram
4. finalize Devpost copy
5. finalize Samsung-facing one-pager export

### 3. Keep the flagship narrow

The strongest path is still:

1. etch thermal + yield drift mission
2. evidence graph
3. decision trace
4. approval boundary
5. signed handoff / replayable debug

## Infrastructure blockers found

### GCP / Cloud Run

For the attempted GCP deployment, the blockers discovered were:

- billing not linked or not visible to the active account
- missing project-level permission to use the project as a billing/API consumer

If the team wants Cloud Run deployment, resolve:

- billing account attachment
- IAM access sufficient for service usage and deployment

## Recommended implementation order

### A. No-cloud path

1. keep GitHub Pages as canonical public surface
2. run `npm run fabpilot:runtime:mock` locally when needed
3. optionally point `public/fabpilot-runtime-config.js` to a local runtime URL
4. record the demo and submit

### B. Cloud path

1. fix IAM + billing on the chosen GCP project
2. enable Cloud Run / Artifact Registry / Cloud Build
3. deploy `server/` as `fabpilot-runtime`
4. set runtime URL in `public/fabpilot-runtime-config.js`
5. verify live operator brief generation

## Quality tasks still worth doing

- add one architecture image to the dossier
- add one benchmark/eval visual to the review path
- tighten flagship copy density for small screens
- add a short README section for local demo recording

## Guardrails

- keep `scripts/verify-portfolio.mjs` aligned with the canonical story
- do not let legacy naming drift back into public surfaces
- prefer stable, verified demo behavior over speculative new features
