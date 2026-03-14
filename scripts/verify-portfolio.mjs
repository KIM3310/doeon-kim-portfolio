import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
const root = process.cwd();
const requiredFiles = [
  'index.html',
  'public/fabpilot-live-x.html',
  'public/fabpilot-dossier.html',
  'public/fabpilot-live-x.js',
  'public/fabpilot-static.css',
  'public/resume/Doeon_Kim_Resume_Microsoft_Solution_Architect.pdf',
  'public/briefs/samsung-ai-sw-one-pager.html',
  'public/briefs/gemini-live-hackathon-package.html',
];
const checks = [
  { file: 'constants.ts', mustInclude: ['FabPilot Live X', 'Samsung-ready AI/SW', 'Gemini Live Agent Challenge'], mustNotInclude: ['FabTwin Guardian', 'SignalForge', 'Amazon Nova', 'NVIDIA-ready', 'SK hynix', 'GitLab Duo'] },
  { file: 'components/Hero.tsx', mustInclude: ['FabPilot Live X', 'Gemini Live × Samsung-ready'], mustNotInclude: ['FabTwin Guardian', 'SignalForge', 'Amazon Nova', 'NVIDIA-ready', 'SK hynix', 'GitLab Duo'] },
  { file: 'public/fabpilot-live-x.html', mustInclude: ['FabPilot Live X', 'Samsung-ready', 'Gemini Live Agent Challenge'], mustNotInclude: ['FabTwin Guardian', 'SignalForge', 'Amazon Nova', 'NVIDIA-ready', 'SK hynix', 'GitLab Duo'] },
  { file: 'docs/SK_HYNIX_AI_SW_ONE_PAGER.md', mustInclude: ['FabPilot Live X', 'Samsung AI/SW'], mustNotInclude: ['FabTwin Guardian', 'SignalForge', 'SK hynix', 'GitLab Duo'] },
  { file: 'README.md', mustInclude: ['FabPilot Live X', 'https://kim3310.github.io/doeon-kim-portfolio/'], mustNotInclude: ['FabTwin Guardian', 'SignalForge'] },
  { file: 'server/index.mjs', mustInclude: ['FabPilot Live X', 'fabpilot-runtime'], mustNotInclude: ['FabTwin Guardian'] },
  { file: 'docs/FABPILOT_GEMINI_RUNTIME.md', mustInclude: ['FabPilot Live X', 'fabpilot-runtime'], mustNotInclude: ['FabTwin Guardian'] },
];
const failures = [];
for (const rel of requiredFiles) if (!existsSync(resolve(root, rel))) failures.push(`Missing required file: ${rel}`);
for (const check of checks) {
  const full = resolve(root, check.file);
  if (!existsSync(full)) { failures.push(`Missing file for content check: ${check.file}`); continue; }
  const text = readFileSync(full, 'utf8');
  for (const token of check.mustInclude) if (!text.includes(token)) failures.push(`${check.file} must include: ${token}`);
  for (const token of check.mustNotInclude) if (text.includes(token)) failures.push(`${check.file} must not include: ${token}`);
}
if (failures.length) { console.error('PORTFOLIO VERIFY FAILED'); for (const failure of failures) console.error(`- ${failure}`); process.exit(1); }
console.log('PORTFOLIO VERIFY OK');
