# Doeon Kim — Selected Work

A portfolio organized around implementation, design decisions, and evidence. Thirteen projects cover AI workflows, scheduling and recovery, memory systems, controlled SQL, runtime experiments, change integrity, document automation, tool-call evaluation, spatial UI, Spark data pipelines, native iOS, infrastructure deployment, and game economy.

[Open the portfolio](https://kim3310.github.io/doeon-kim-portfolio/) · [Selection and evidence boundaries](docs/selected-work.md)

## Run locally

```bash
npm ci
npm run verify
npm run dev
```

Use the local URL printed by Vite. Verification covers TypeScript, generated binding types, component/backend tests, content contracts, and the production build.

## Read the implementation

- `selectedWork.ts` defines the thirteen projects and their evidence boundaries.
- `constants.ts` retains the larger collection and its public/private metadata.
- `components/Projects.tsx` renders the selected cards, source links, filters, and collection toggle.
- `test/App.test.tsx` checks the selection flow and suppresses inaccessible links for private source.
- `public/evidence/` holds existing screenshots and explanatory system diagrams. Diagrams describe architecture; they are not benchmark plots.

Public projects link to source and tests. The two added private projects show implementation summaries and verification scope. Their source remains private. Synthetic fixtures, analytical models, and unmeasured capabilities are identified in the cards.

## Deployment

GitHub Pages hosts the public static gallery. The Sites deployment is a separate owner-private copy. Existing Cloudflare inquiry services retain their own configuration and unavailable-state fallback; neither static deployment provisions their database or credentials.

[Operational reference](REFERENCE.md) · [System architecture](docs/system-architecture.md) · [Cloud architecture](docs/cloud-ai-architecture.md) · [Blueprint](docs/architecture/blueprint.json) · [Blueprint validator](scripts/validate_architecture_blueprint.py)
