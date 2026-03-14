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
  'public/briefs/sk-hynix-ai-sw-one-pager.html',
  'public/briefs/gitlab-hackathon-submission-package.html',
];

const checks = [
  {
    file: 'constants.ts',
    mustInclude: ['FabTwin Guardian', 'SK hynix-ready AI/SW', 'GitLab AI Hackathon'],
    mustNotInclude: ['FabPilot Live X', 'SignalForge', 'Amazon Nova', 'NVIDIA-ready', 'Gemini Live Agent Challenge', 'Samsung-ready'],
  },
  {
    file: 'components/Hero.tsx',
    mustInclude: ['FabTwin Guardian', 'SK hynix-ready · GitLab-ready'],
    mustNotInclude: ['FabPilot Live X', 'SignalForge', 'Amazon Nova', 'NVIDIA-ready', 'Gemini Live × Samsung-ready'],
  },
  {
    file: 'public/fabpilot-live-x.html',
    mustInclude: ['FabTwin Guardian', 'SK hynix-ready', 'GitLab AI Hackathon'],
    mustNotInclude: ['FabPilot Live X', 'SignalForge', 'Amazon Nova', 'NVIDIA-ready', 'Samsung-ready'],
  },
  {
    file: 'docs/SK_HYNIX_AI_SW_ONE_PAGER.md',
    mustInclude: ['FabTwin Guardian', 'SK hynix AI/SW'],
    mustNotInclude: ['FabPilot Live X', 'SignalForge', 'Samsung AI/SW'],
  },
];

const failures = [];
for (const rel of requiredFiles) {
  if (!existsSync(resolve(root, rel))) failures.push(`Missing required file: ${rel}`);
}
for (const check of checks) {
  const full = resolve(root, check.file);
  if (!existsSync(full)) {
    failures.push(`Missing file for content check: ${check.file}`);
    continue;
  }
  const text = readFileSync(full, 'utf8');
  for (const token of check.mustInclude) {
    if (!text.includes(token)) failures.push(`${check.file} must include: ${token}`);
  }
  for (const token of check.mustNotInclude) {
    if (text.includes(token)) failures.push(`${check.file} must not include: ${token}`);
  }
}

if (failures.length) {
  console.error('PORTFOLIO VERIFY FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('PORTFOLIO VERIFY OK');
