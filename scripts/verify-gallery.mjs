import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const EXPECTED_LIVE_SCREEN_COUNT = 18;
const MAX_PREVIEW_BYTES = 550_000;
const MAX_SMALL_PREVIEW_BYTES = 250_000;
const MAX_SINGLE_PREVIEW_BYTES = 90_000;
const MAX_SINGLE_SMALL_PREVIEW_BYTES = 40_000;
const MIN_REEL_VIDEO_BYTES = 1_000_000;
const MAX_REEL_VIDEO_BYTES = 12_000_000;
const MAX_REEL_POSTER_BYTES = 800_000;

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
  'scripts/create-evidence-reel.mjs',
  'scripts/capture-portfolio-evidence.mjs',
  'docs/final-readiness-scorecard.md',
  'docs/repository-service-architectures.md',
  'docs/service-architecture.md',
  'docs/service-launch-plan.md',
];

const checks = [
  { file: 'constants.ts', mustInclude: ['PROFILE', 'PROJECTS', 'LIVE_SERVICE_SCREENS', 'PORTFOLIO_REEL', 'REPOSITORY_COVERAGE', 'REPOSITORY_DEMO_URLS', 'SKILLS', 'INTERX_ROLE', 'MILITARY_ROLE', 'CERTIFICATIONS', 'BDES', 'Korea National Open University', 'InterX', 'Apr 2026 - May 2026', 'https://kim3310.github.io/agent-runtime-go/', 'https://kim3310.github.io/weld-defect-vision/', 'evidence/live/aix-pilot.png', 'evidence/live/twincity-ui.png', 'evidence/portfolio-reel/kim3310-systems-gallery-reel.mp4', 'proofPath', 'reviewSignal', 'Product demos', '2026-06-07 KST'] },
  { file: 'scripts/capture-portfolio-evidence.mjs', mustInclude: ['systems-gallery.png', '#projects', 'Expected project cards before capture'] },
  { file: 'components/Projects.tsx', mustInclude: ['PORTFOLIO_REEL', 'REPOSITORY_DEMO_URLS', '<video', 'type="video/mp4"', 'isLivePngEvidence', 'evidence/live/preview/', 'evidence/live/preview-sm/', 'type="image/webp"', 'livePreviewFor', 'liveProofPreviewFor'] },
  { file: 'components/Hero.tsx', mustInclude: ['36 live demos', 'evidence/live/preview/aix-pilot.webp', 'type="image/webp"'] },
  { file: 'docs/final-readiness-scorecard.md', mustInclude: ['Total: 100 / 100', '37 public URLs', '35 editable coverage repositories'] },
  { file: 'docs/repository-service-architectures.md', mustInclude: ['Repository Service Architectures', 'Shared Resource Stack', 'aix-pilot', 'weld-defect-vision', 'Account Information Needed'] },
  { file: 'docs/service-launch-plan.md', mustInclude: ['Service Launch Plan', 'Configure First', '14-Day Readiness Push', 'Calendly', 'Cloudflare', 'Sentry'] },
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
const livePngFiles = existsSync(liveDir) ? readdirSync(liveDir).filter(name => name.endsWith('.png')) : [];

if (livePngFiles.length !== EXPECTED_LIVE_SCREEN_COUNT) {
  failures.push(`Expected ${EXPECTED_LIVE_SCREEN_COUNT} live PNG evidence files, found ${livePngFiles.length}`);
}

if (!existsSync(previewDir)) {
  failures.push('Missing: public/evidence/live/preview');
}
if (!existsSync(previewSmallDir)) {
  failures.push('Missing: public/evidence/live/preview-sm');
} else {
  let previewBytes = 0;
  let previewSmallBytes = 0;
  for (const file of livePngFiles) {
    const preview = resolve(previewDir, file.replace(/\.png$/, '.webp'));
    const previewSmall = resolve(previewSmallDir, file.replace(/\.png$/, '.webp'));
    if (!existsSync(preview)) {
      failures.push(`Missing live preview: ${preview}`);
    } else {
      const size = statSync(preview).size;
      previewBytes += size;
      if (size > MAX_SINGLE_PREVIEW_BYTES) failures.push(`Live preview too large: ${preview} (${size} bytes)`);
    }
    if (!existsSync(previewSmall)) {
      failures.push(`Missing small live preview: ${previewSmall}`);
    } else {
      const size = statSync(previewSmall).size;
      previewSmallBytes += size;
      if (size > MAX_SINGLE_SMALL_PREVIEW_BYTES) failures.push(`Small live preview too large: ${previewSmall} (${size} bytes)`);
    }
  }
  const previewFiles = existsSync(previewDir) ? readdirSync(previewDir).filter(name => name.endsWith('.webp')) : [];
  const previewSmallFiles = readdirSync(previewSmallDir).filter(name => name.endsWith('.webp'));
  if (previewFiles.length !== EXPECTED_LIVE_SCREEN_COUNT) failures.push(`Expected ${EXPECTED_LIVE_SCREEN_COUNT} preview WebP files, found ${previewFiles.length}`);
  if (previewSmallFiles.length !== EXPECTED_LIVE_SCREEN_COUNT) failures.push(`Expected ${EXPECTED_LIVE_SCREEN_COUNT} small preview WebP files, found ${previewSmallFiles.length}`);
  if (previewBytes > MAX_PREVIEW_BYTES) failures.push(`Live preview budget exceeded: ${previewBytes} bytes`);
  if (previewSmallBytes > MAX_SMALL_PREVIEW_BYTES) failures.push(`Small live preview budget exceeded: ${previewSmallBytes} bytes`);
}

const constantsText = readFileSync(resolve(root, 'constants.ts'), 'utf8');
const projectsText = constantsText.split('export const PROJECTS: Project[] = [')[1]?.split('export const REPOSITORY_COVERAGE')[0] ?? '';
const projectTitles = [...projectsText.matchAll(/title: '([^']+)'/g)].map(match => match[1]);
const projectEvidencePaths = [...projectsText.matchAll(/evidence: '([^']+)'/g)].map(match => match[1]);

if (projectEvidencePaths.length !== projectTitles.length) {
  failures.push(`Every project must have visual evidence: ${projectEvidencePaths.length}/${projectTitles.length}`);
}
for (const evidence of projectEvidencePaths) {
  const full = resolve(root, 'public', evidence);
  if (!existsSync(full)) failures.push(`Missing project evidence asset: ${evidence}`);
}

const reelDir = resolve(root, 'public/evidence/portfolio-reel');
const reelVideo = resolve(reelDir, 'kim3310-systems-gallery-reel.mp4');
const reelPoster = resolve(reelDir, 'kim3310-systems-gallery-reel-poster.png');
const reelTranscript = resolve(reelDir, 'transcript.txt');

if (!existsSync(reelVideo)) {
  failures.push('Missing evidence reel video');
} else {
  const size = statSync(reelVideo).size;
  if (size < MIN_REEL_VIDEO_BYTES) failures.push(`Evidence reel video is too small: ${size} bytes`);
  if (size > MAX_REEL_VIDEO_BYTES) failures.push(`Evidence reel video budget exceeded: ${size} bytes`);
}

if (!existsSync(reelPoster)) {
  failures.push('Missing evidence reel poster');
} else {
  const size = statSync(reelPoster).size;
  if (size > MAX_REEL_POSTER_BYTES) failures.push(`Evidence reel poster budget exceeded: ${size} bytes`);
}

if (!existsSync(reelTranscript)) {
  failures.push('Missing evidence reel transcript');
} else {
  const transcript = readFileSync(reelTranscript, 'utf8');
  if (!transcript.includes('Welcome to the KIM3310 Systems Gallery')) failures.push('Evidence reel transcript is missing the opening narration');
  if (!transcript.includes('thirty-five editable repositories')) failures.push('Evidence reel transcript is missing the repository posture line');
  if (!transcript.endsWith('\n')) failures.push('Evidence reel transcript must end with a newline');
  if (transcript.split('\n').filter(Boolean).length < 7) failures.push('Evidence reel transcript should keep each narration sentence on its own line');
}

if (failures.length) {
  console.error('GALLERY VERIFY FAILED');
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log('GALLERY VERIFY OK');
