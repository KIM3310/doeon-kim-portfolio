<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Doeon Kim Portfolio

Canonical portfolio surface for Doeon Kim, centered on **FabPilot Live X** — a flagship product thesis around reviewable AI systems for semiconductor operations, operator trust, and high-stakes runtime workflows.

## Run Locally

**Prerequisites:** Node.js 20+


1. Install dependencies:
   `npm install`
2. Optionally set community variables if you want embedded feedback/discussion widgets enabled
3. Run the app:
   `npm run dev`

Build for production:
`npm run build`

## Community Integrations

The portfolio now always exposes working community fallbacks through GitHub Discussions, GitHub Issues, and email.
Optional environment variables below enable embedded widgets on top of that baseline:

- `VITE_FORMSPREE_ENDPOINT`: Formspree form endpoint (`https://formspree.io/f/...`)
- `VITE_DISQUS_SHORTNAME`: Disqus shortname
- `VITE_DISQUS_IDENTIFIER`: Disqus thread identifier (default: `doeon-kim-portfolio`)
- `VITE_GISCUS_REPO`: GitHub repository (e.g. `owner/repo`)
- `VITE_GISCUS_REPO_ID`: Giscus repo id
- `VITE_GISCUS_CATEGORY`: Giscus category name
- `VITE_GISCUS_CATEGORY_ID`: Giscus category id

## Production Notes
- GitHub Pages deploy is handled by `.github/workflows/deploy-github-pages.yml`
- Cloudflare Pages deploy is optional and only runs when Cloudflare secrets are configured
- The site now includes:
  - flagship-first landing page
  - FabPilot Live X static flagship surface
  - FabPilot dossier / product thesis page
  - proof-chain positioning around AegisOps, StagePilot, TwinCity UI, and governance/control-tower systems
  - selected + secondary active-repo index
  - runtime/service profile footer
  - JSON-LD structured data for search engines
  - social meta tags for richer shares

## Flagship Review Path
1. Open the portfolio landing page
2. Launch **FabPilot Live X**
3. Read the **FabPilot dossier**
4. Follow the proof chain into public repos for reliability, incident AI, governance, and operator workflows

## Local Verification
```bash
npm install
npm run typecheck
npm run build
```

## Repository Hygiene
- Keep runtime artifacts out of commits (`.codex_runs/`, cache folders, temporary venvs).
- Prefer running verification commands above before opening a PR.
