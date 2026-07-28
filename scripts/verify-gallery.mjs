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
  'DESIGN.md',
  'index.html',
  'constants.ts',
  'types.ts',
  'App.tsx',
  'components/Experience.tsx',
  'components/Hero.tsx',
  'components/Projects.tsx',
  'components/InquiryForm.tsx',
  'components/RepositoryCatalog.tsx',
  'components/ServiceOffers.tsx',
  'components/Skills.tsx',
  'components/Navbar.tsx',
  'scripts/create-evidence-reel.mjs',
  'scripts/capture-portfolio-evidence.mjs',
  'docs/final-architecture-notes.md',
  'docs/repository-service-architectures.md',
  'docs/service-architecture.md',
  'docs/service-launch-plan.md',
  'functions/api/inquiries.ts',
  'inquiryContract.ts',
  'migrations/0001_private_inquiries.sql',
  'migrations/0002_inquiry_intent.sql',
  'migrations/0003_inquiry_retention_index.sql',
  'migrations/0004_inquiry_network_fingerprint.sql',
  'workers/inquiry-retention.ts',
  'workers/inquiry-retention-core.ts',
  'types/pages-env.d.ts',
  'types/retention-env.d.ts',
  'wrangler.retention.jsonc',
  'public/privacy.html',
  'wrangler.jsonc',
];

const checks = [
  { file: 'DESIGN.md', mustInclude: ['# Design', 'Status: Active', 'quiet premium', 'Commercial clarity over repository volume', 'WCAG 2.2 AA', 'npm audit --audit-level=high', 'Chrome desktop/mobile audit'] },
  { file: 'commercialLanes.ts', mustInclude: ['COMMERCIAL_LANES', 'Architecture Scope Sprint', 'Agent Reliability Audit', 'Private AI Readiness Sprint', 'Incident Operations Exercise', 'Secure Workflow Pilot', 'Industrial Validation Discovery', 'Consumer Prototype Customization', 'billingMode', 'priceAnchor', 'concreteDeliverable', 'resolveCheckoutUrl', 'commerceUrlForRepo', 'inquiryUrlForLane', 'proofSignal'] },
  { file: 'docs/service-consolidation.md', mustInclude: ['Service Consolidation', 'seven purchasable outcomes', 'primary delivery surface', 'Cloudflare D1-backed private form', 'service-consolidation-2026-06-25.md'] },
  { file: 'resourceWiring.ts', mustInclude: ['RESOURCE_WIRING', 'DaesikPage', 'public-apis-4Kr', 'Cloudflare Pages', 'Toss Payments', 'PortOne V2', 'Stripe Checkout'] },
  { file: 'constants.ts', mustInclude: ['PROFILE', 'PROJECTS', 'LIVE_SERVICE_SCREENS', 'PORTFOLIO_REEL', 'REPOSITORY_COVERAGE', 'REPOSITORY_DEMO_URLS', 'SYSTEM_ARCHITECTURE_URLS', 'STACK_ARCHITECTURE_LANES', 'SKILLS', 'INTERX_ROLE', 'MILITARY_ROLE', 'CERTIFICATIONS', 'BDES', 'Korea National Open University', 'InterX', 'Apr 2026 - May 2026', 'https://kim3310.github.io/agent-runtime-go/', 'https://kim3310.github.io/weld-defect-vision/', 'evidence/live/aix-pilot.png', 'evidence/live/twincity-ui.png', 'evidence/districtpilot-public-api-readiness.svg', 'evidence/portfolio-reel/kim3310-systems-gallery-reel.mp4', 'public architecture routes', 'public API readiness map', 'Korean public API readiness', '/api/public-apis', '/integrations/public-apis', '15_public_api_integration_readiness.sql', 'proofPath', 'architectureSignal', 'React / Vite', 'FastAPI / Workers', 'Terraform / Docker', '2026-06-07 KST'] },
  { file: 'scripts/capture-portfolio-evidence.mjs', mustInclude: ['systems-gallery.png', '#projects', 'Expected project cards before capture'] },
  { file: 'index.css', mustInclude: ['--premium-shadow', '--radius-xl', 'commercial-lane-number', 'commercial-lane-proof', 'backdrop-filter: blur(26px)', 'prefers-reduced-motion'] },
  { file: 'components/Projects.tsx', mustInclude: ['<ServiceOffers', '<RepositoryCatalog', 'Buy a bounded technical outcome', 'Built systems, with evidence', 'PORTFOLIO_REEL', 'REPOSITORY_DEMO_URLS', '<video', 'type="video/mp4"', 'isLivePngEvidence', 'evidence/live/preview/', 'evidence/live/preview-sm/', 'type="image/webp"', 'livePreviewFor', 'liveProofPreviewFor'] },
  { file: 'components/ServiceOffers.tsx', mustInclude: ['COMMERCIAL_LANES', 'commercial-lane-grid', '<InquiryForm />', 'private inquiry pipeline', 'resolveCheckoutUrl', 'trackCommerceCtaClick'] },
  { file: 'components/RepositoryCatalog.tsx', mustInclude: ['RESOURCE_WIRING', 'resource-wiring-panel', 'SERVICE_OFFERS', 'Repository-level proof routes', 'commerceUrlForRepo'] },
  { file: 'components/InquiryForm.tsx', mustInclude: ['CANONICAL_INQUIRY_API', 'Private inquiry', 'Do not include credentials', 'INQUIRY_CONSENT_VERSION', 'INQUIRY_SOURCE_LANES', 'Submit private inquiry'] },
  { file: 'inquiryContract.ts', mustInclude: ['INQUIRY_SOURCE_LANES', 'SERVICE_OFFERS', 'Choose a recognized product or repository.', 'The selected product does not match the service.'] },
  { file: 'functions/api/inquiries.ts', mustInclude: ['INQUIRY_MAX_BYTES', 'LEADS_DB.batch', 'DELETE FROM private_inquiries', 'SELECT COUNT(*)', 'INQUIRY_EMAIL_DAILY_LIMIT', 'INQUIRY_NETWORK_DAILY_LIMIT', 'INQUIRY_GLOBAL_HOURLY_LIMIT', 'INQUIRY_RATE_LIMIT_SALT', 'CF-Connecting-IP', 'request_fingerprint', 'meta.changes', 'crypto.randomUUID()', 'INQUIRY_CONSENT_VERSION'] },
  { file: 'migrations/0001_private_inquiries.sql', mustInclude: ['CREATE TABLE IF NOT EXISTS private_inquiries', 'expires_at', 'email_hash', 'consent_version', 'status'] },
  { file: 'migrations/0002_inquiry_intent.sql', mustInclude: ['ALTER TABLE private_inquiries', 'ADD COLUMN intent', 'idx_private_inquiries_intent_created_at'] },
  { file: 'migrations/0003_inquiry_retention_index.sql', mustInclude: ['idx_private_inquiries_expires_at', 'private_inquiries(expires_at)'] },
  { file: 'migrations/0004_inquiry_network_fingerprint.sql', mustInclude: ['ADD COLUMN request_fingerprint', 'idx_private_inquiries_fingerprint_created_at', 'private_inquiries(request_fingerprint, created_at)'] },
  { file: 'workers/inquiry-retention.ts', mustInclude: ['pruneExpiredInquiries', 'controller.scheduledTime', 'inquiry_retention_prune'] },
  { file: 'workers/inquiry-retention-core.ts', mustInclude: ['RETENTION_DELETE_SQL', 'DELETE FROM private_inquiries', 'expires_at <= ?'] },
  { file: 'types/pages-env.d.ts', mustInclude: ['interface PagesEnv', 'LEADS_DB: D1Database'] },
  { file: 'types/retention-env.d.ts', mustInclude: ['interface RetentionEnv', 'LEADS_DB: D1Database'] },
  { file: 'wrangler.retention.jsonc', mustInclude: ['kim3310-portfolio-inquiry-retention', '"crons": ["17 3 * * *"]', '"workers_dev": false', '"LEADS_DB"'] },
  {
    file: 'public/privacy.html',
    mustInclude: [
      'href="https://kim3310-doeon-kim-portfolio.pages.dev/privacy"',
      'Cloudflare D1',
      '90 days',
      'one-way email hash',
      'date-scoped, secret-salted one-way network fingerprint',
      'network address is transformed in memory and is not inserted',
    ],
  },
  {
    file: 'public/terms.html',
    mustInclude: ['href="https://kim3310-doeon-kim-portfolio.pages.dev/terms"', 'Prices are starting anchors'],
  },
  { file: 'components/Hero.tsx', mustInclude: ['TypeScript + React', 'Python + FastAPI', 'SQL + Spark', 'Terraform + Docker', 'evidence/live/preview/aix-pilot.webp', 'type="image/webp"'] },
  { file: 'index.css', mustInclude: ['--premium-shadow', '--radius-xl', 'commercial-lane-number', 'commercial-lane-proof', 'backdrop-filter: blur(26px)', 'prefers-reduced-motion'] },
  { file: 'components/Projects.tsx', mustInclude: ['STACK_ARCHITECTURE_LANES', 'SYSTEM_ARCHITECTURE_URLS', 'System architecture by stack lane', 'docs/system-architecture.md', 'Architecture'] },
  { file: 'docs/final-architecture-notes.md', mustInclude: ['seven commercial operating names', 'private Cloudflare Pages Function', 'DaesikPage', 'Toss/PortOne/Stripe', 'Local build notes are captured in the repository scripts and build workflow.', '34 unique public demo URLs', '35 editable coverage repositories', 'public API proof cards', 'KIM3310', 'doeon-kim-portfolio'] },
  { file: 'docs/repository-service-architectures.md', mustInclude: ['Repository Service Architectures', 'Shared Resource Stack', 'aix-pilot', 'weld-defect-vision', 'Korean public API rollout mapping', 'merchant/public-data enrichment readiness', 'Account Information Needed'] },
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
  if (transcript.includes('current CI evidence')) failures.push('Evidence reel transcript must not imply live CI status');
  if (transcript.includes('zero open pull requests')) failures.push('Evidence reel transcript must frame PR counts as repository history marker');
  if (!transcript.endsWith('\n')) failures.push('Evidence reel transcript must end with a newline');
  if (transcript.split('\n').filter(Boolean).length < 7) failures.push('Evidence reel transcript should keep each narration sentence on its own line');
}

if (failures.length) {
  console.error('GALLERY VERIFY FAILED');
  for (const f of failures) console.error(`- ${f}`);
  process.exit(1);
}

console.log('GALLERY VERIFY OK');
