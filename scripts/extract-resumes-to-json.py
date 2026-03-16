from __future__ import annotations

import json
import subprocess
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
RESUME_DIR = ROOT / "public" / "resume"
OUTPUT_DIR = ROOT / "docs" / "resume-json"
FILES = [
    "Doeon_Kim_Resume_LLM_Systems_Engineer",
    "Doeon_Kim_Resume_Microsoft_Solution_Architect",
]


def extract_docx_lines(path: Path) -> list[str]:
    with zipfile.ZipFile(path) as archive:
        xml_bytes = archive.read("word/document.xml")
    root = ET.fromstring(xml_bytes)
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    lines: list[str] = []
    for paragraph in root.findall(".//w:p", ns):
        parts = []
        for node in paragraph.findall(".//w:t", ns):
            if node.text:
                parts.append(node.text)
        text = "".join(parts).strip()
        if text:
            lines.append(text)
    return lines


def extract_pdf_preview(path: Path) -> list[str]:
    result = subprocess.run(
        ["strings", "-n", "8", str(path)],
        capture_output=True,
        text=True,
        check=True,
    )
    return [line for line in result.stdout.splitlines()[:120] if line.strip()]


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for stem in FILES:
        docx_path = RESUME_DIR / f"{stem}.docx"
        pdf_path = RESUME_DIR / f"{stem}.pdf"
        payload = {
            "stem": stem,
            "docx": {
                "path": str(docx_path.relative_to(ROOT)),
                "file_size_bytes": docx_path.stat().st_size,
                "lines": extract_docx_lines(docx_path),
            },
            "pdf": {
                "path": str(pdf_path.relative_to(ROOT)),
                "file_size_bytes": pdf_path.stat().st_size,
                "strings_preview": extract_pdf_preview(pdf_path),
            },
        }
        output_path = OUTPUT_DIR / f"{stem}.json"
        output_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
