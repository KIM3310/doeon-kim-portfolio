# Resume Pipeline

Canonical resume content now lives in JSON:

- `content/resume/llm-systems-engineer.json`
- `content/resume/solution-architect.json`

Generated artifacts:

- `public/resume/*.pdf`
- `public/resume/*.docx`
- `dist/resume/*.pdf`
- `dist/resume/*.docx`

Local generation flow:

```bash
python3 -m venv .venv-resume
.venv-resume/bin/pip install reportlab python-docx
.venv-resume/bin/python scripts/build-resumes.py
.venv-resume/bin/python scripts/extract-resumes-to-json.py
```

Machine-readable extraction outputs:

- `docs/resume-json/Doeon_Kim_Resume_LLM_Systems_Engineer.json`
- `docs/resume-json/Doeon_Kim_Resume_Microsoft_Solution_Architect.json`

Why this exists:

- resume changes are now reviewable as code instead of opaque binary edits
- recruiter-facing PDFs stay reproducible
- docx/pdf artifacts can be re-extracted into JSON before analysis
