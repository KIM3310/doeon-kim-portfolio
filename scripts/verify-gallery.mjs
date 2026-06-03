import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();

const requiredFiles = [
  'index.html',
  'constants.ts',
  'types.ts',
  'App.tsx',
  'components/Experience.tsx',
  'components/Hero.tsx',
  'components/Projects.tsx',
  'components/Skills.tsx',
  'components/Navbar.tsx',
];

const checks = [
  { file: 'constants.ts', mustInclude: ['PROFILE', 'PROJECTS', 'LIVE_SERVICE_SCREENS', 'REPOSITORY_COVERAGE', 'SKILLS', 'CURRENT_ROLE', 'MILITARY_ROLE', 'CERTIFICATIONS', 'BDES', 'Korea National Open University', 'InterX', 'evidence/live/aix-pilot.png', 'evidence/live/twincity-ui.png', 'commercialPath', 'reviewSignal', 'Product surfaces'] },
  { file: 'components/Projects.tsx', mustInclude: ['evidence/live/preview/', 'evidence/live/preview-sm/', 'type="image/webp"', 'livePreviewFor', 'liveProofPreviewFor'] },
  { file: 'components/Hero.tsx', mustInclude: ['evidence/live/preview/aix-pilot.webp', 'type="image/webp"'] },
  { file: 'App.tsx', mustInclude: ['Hero', 'Experience', 'Projects', 'Skills'] },
];

const failures = [];
for (const rel of requiredFiles) {
  if (!existsSync(resolve(root, rel))) failures.push(`Missing: ${rel}`);
}
for (const check of checks) {
  const full = resolve(root, check.file);
  if (!existsSync(full)) { failures.push(`Missing: ${check.file}`); continue; }
  const text = readFileSync(full, 'utf8');
  for (const token of check.mustInclude) {
    if (!text.includes(token)) failures.push(`${check.file} must include: ${token}`);
  }
}

const liveDir = resolve(root, 'public/evidence/live');
const previewDir = resolve(liveDir, 'preview');
const previewSmallDir = resolve(liveDir, 'preview-sm');
if (!existsSync(previewDir)) {
  failures.push('Missing: public/evidence/live/preview');
}
if (!existsSync(previewSmallDir)) {
  failures.push('Missing: public/evidence/live/preview-sm');
} else {
  for (const file of readdirSync(liveDir).filter(name => name.endsWith('.png'))) {
    const preview = resolve(previewDir, file.replace(/\.png$/, '.webp'));
    const previewSmall = resolve(previewSmallDir, file.replace(/\.png$/, '.webp'));
    if (!existsSync(preview)) failures.push(`Missing live preview: ${preview}`);
    if (!existsSync(previewSmall)) failures.push(`Missing small live preview: ${previewSmall}`);
  }
}

if (failures.length) {
  console.error('GALLERY VERIFY FAILED');
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log('GALLERY VERIFY OK');
