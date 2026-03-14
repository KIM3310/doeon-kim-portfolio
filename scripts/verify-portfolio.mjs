import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'index.html',
  'public/fabpilot-live-x.html',
  'public/fabpilot-dossier.html',
  'public/fabpilot-live-x.js',
  'public/fabpilot-static.css',
  'public/resume/Doeon_Kim_Resume_Microsoft_Solution_Architect.pdf'
];

const canonicalChecks = [
  {
    file: 'constants.ts',
    mustInclude: ['FabPilot Live X', 'Gemini Live', 'Samsung-ready'],
    mustNotInclude: ['Amazon Nova', 'NVIDIA-ready', 'SignalForge']
  },
  {
    file: 'components/Hero.tsx',
    mustInclude: ['FabPilot Live X', 'Gemini Live × Samsung-ready'],
    mustNotInclude: ['FabTwin Guardian', 'GitLab Duo', 'SK hynix']
  },
  {
    file: 'public/fabpilot-live-x.html',
    mustInclude: ['FabPilot Live X', 'Samsung-ready'],
    mustNotInclude: ['FabTwin Guardian', 'Amazon Nova', 'SignalForge']
  },
  {
    file: 'public/fabpilot-dossier.html',
    mustInclude: ['FabPilot Live X', 'Samsung-ready'],
    mustNotInclude: ['FabTwin Guardian', 'Amazon Nova', 'SignalForge']
  }
];

const failures = [];

for (const rel of requiredFiles) {
  const full = resolve(root, rel);
  if (!existsSync(full)) {
    failures.push(`Missing required file: ${rel}`);
  }
}

for (const check of canonicalChecks) {
  const full = resolve(root, check.file);
  if (!existsSync(full)) {
    failures.push(`Missing file for content check: ${check.file}`);
    continue;
  }
  const text = readFileSync(full, 'utf8');
  for (const token of check.mustInclude) {
    if (!text.includes(token)) {
      failures.push(`${check.file} must include: ${token}`);
    }
  }
  for (const token of check.mustNotInclude) {
    if (text.includes(token)) {
      failures.push(`${check.file} must not include: ${token}`);
    }
  }
}

if (failures.length) {
  console.error('PORTFOLIO VERIFY FAILED');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('PORTFOLIO VERIFY OK');
