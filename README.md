<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1SntsoiyBI_-zWqH0UfWmhan9BvsU88OZ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Community Integrations

Optional environment variables for the new engagement hub:

- `VITE_FORMSPREE_ENDPOINT`: Formspree form endpoint (`https://formspree.io/f/...`)
- `VITE_DISQUS_SHORTNAME`: Disqus shortname
- `VITE_DISQUS_IDENTIFIER`: Disqus thread identifier (default: `doeon-kim-portfolio`)
- `VITE_GISCUS_REPO`: GitHub repository (e.g. `owner/repo`)
- `VITE_GISCUS_REPO_ID`: Giscus repo id
- `VITE_GISCUS_CATEGORY`: Giscus category name
- `VITE_GISCUS_CATEGORY_ID`: Giscus category id
