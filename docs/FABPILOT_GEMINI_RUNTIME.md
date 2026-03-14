# FabPilot Runtime Bridge

FabPilot Live X supports an optional Gemini-backed runtime bridge for generating a **live operator brief**.

## What this adds

- `GET /health`
- `POST /api/mission-brief`
- zero-dependency Node runtime suitable for local use or Cloud Run
- safe fallback to the existing static mission brief when no runtime is configured

## Local run

```bash
npm run fabpilot:runtime:mock
```

Legacy aliases remain available:

```bash
npm run fabtwin:runtime:mock
```

This starts the runtime in deterministic mock mode on `http://localhost:8080`.

For a real Gemini-backed run:

```bash
export GEMINI_API_KEY=your_key_here
npm run fabpilot:runtime
```

## Frontend hookup

The flagship reads the runtime base URL from either:

1. `public/fabpilot-runtime-config.js`
2. or the `?api=` query parameter

Example:

```txt
fabpilot-live-x.html?api=https://your-runtime-url
```

The file names stay on the legacy `fabpilot-*` path for backwards-compatible public links; the product narrative is FabPilot Live X.

## Cloud Run intent

This runtime is intentionally lightweight so it can be containerized and deployed to Cloud Run with:

- `GEMINI_API_KEY`
- optional `FABPILOT_MODEL` (legacy `FABPILOT_MODEL_LEGACY` also works)

### Minimal deploy path

```bash
cd server
gcloud builds submit --tag gcr.io/$PROJECT_ID/fabpilot-runtime
gcloud run deploy fabpilot-runtime \
  --image gcr.io/$PROJECT_ID/fabpilot-runtime \
  --region $REGION \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY=$GEMINI_API_KEY
```

After deploy, wire the returned URL into either:

- `public/fabpilot-runtime-config.js`
- or `fabpilot-live-x.html?api=https://your-cloud-run-url`

## Current behavior

- If runtime is available and `preferLiveBriefs` is enabled, `Copy operator brief` requests a live Gemini-generated brief.
- If runtime is unavailable or fails, the UI falls back to the built-in deterministic brief.
