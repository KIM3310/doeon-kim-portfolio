import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();

const requiredFiles = [
  'index.html',
  'constants.ts',
  'types.ts',
  'App.tsx',
  'components/Hero.tsx',
  'components/Projects.tsx',
  'components/Skills.tsx',
  'components/Navbar.tsx',
];

const checks = [
  { file: 'constants.ts', mustInclude: ['PROFILE', 'PROJECTS', 'SKILLS'] },
  { file: 'App.tsx', mustInclude: ['Hero', 'Projects', 'Skills'] },
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

if (failures.length) {
  console.error('GALLERY VERIFY FAILED');
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log('GALLERY VERIFY OK');
