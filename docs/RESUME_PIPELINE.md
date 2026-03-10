# Resume Pipeline

This repository keeps the public resume assets, the content source used to render them, and the generated JSON snapshots in one place.

## Source of truth

- `content/resume/llm-systems-engineer.json`
- `content/resume/solution-architect.json`

These files hold the structured content that feeds the portfolio surfaces and the exported resume artifacts.

## Generated assets

- `public/resume/Doeon_Kim_Resume_LLM_Systems_Engineer.pdf`
- `public/resume/Doeon_Kim_Resume_LLM_Systems_Engineer.docx`
- `public/resume/Doeon_Kim_Resume_Microsoft_Solution_Architect.pdf`
- `public/resume/Doeon_Kim_Resume_Microsoft_Solution_Architect.docx`
- `docs/resume-json/*.json`

## Review checklist

1. Update the structured resume content first.
2. Rebuild or refresh the public PDF and DOCX exports.
3. Confirm the matching `docs/resume-json/` snapshots are in sync.
4. Run `npm run verify:content` from the repository root.
5. Open the portfolio locally and confirm both resume links resolve correctly.

## Why it exists

Keeping the resume assets in the portfolio repo makes the public story easier to audit: one repository contains the live site, the resume exports, and the structured source material used to keep them aligned.
