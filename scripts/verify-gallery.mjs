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
  'functions/api/events.ts',
  'functions/api/benchmarks.ts',
  'inquiryContract.ts',
  'telemetryContract.ts',
  'firebaseAggregate.ts',
  'migrations/0001_private_inquiries.sql',
  'migrations/0002_inquiry_intent.sql',
  'migrations/0003_inquiry_retention_index.sql',
  'migrations/0004_inquiry_network_fingerprint.sql',
  'migrations/0005_aggregate_telemetry.sql',
  'workers/inquiry-retention.ts',
  'workers/inquiry-retention-core.ts',
  'types/pages-env.d.ts',
  'types/retention-env.d.ts',
  'wrangler.retention.jsonc',
  'public/privacy.html',
  'public/privacy-support/ad-data.html',
  'public/resources/ad-data-sitemap.xml',
  'public/ads.txt',
  'public/robots.txt',
  'wrangler.jsonc',
];

const checks = [
  { file: 'DESIGN.md', mustInclude: ['# Design', 'Status: Active', 'quiet premium', 'Commercial clarity over repository volume', 'WCAG 2.2 AA', 'npm audit --audit-level=high', 'Chrome desktop/mobile audit'] },
  { file: 'commercialLanes.ts', mustInclude: ['COMMERCIAL_LANES', 'Architecture Utility Lab', 'Agent Benchmark Lab', 'Private AI Readiness Lab', 'Incident Operations Lab', 'Secure Workflow Utility Lab', 'Industrial Validation Data Lab', 'Consumer Utility Lab', 'billingMode', 'priceAnchor', 'concreteDeliverable', 'resourceUrlForRepo', 'resourceUrlForLane', 'inquiryUrlForLane', 'dataLabSignal', 'privacyBoundary'] },
  { file: 'resourceWiring.ts', mustInclude: ['RESOURCE_WIRING', 'DaesikPage', 'public-apis-4Kr', 'Cloudflare Pages', 'Contextual ads', 'Anonymous aggregates', 'Ad-free sensitive flows'] },
  { file: 'constants.ts', mustInclude: ['PROFILE', 'PROJECTS', 'LIVE_SERVICE_SCREENS', 'PORTFOLIO_REEL', 'REPOSITORY_COVERAGE', 'REPOSITORY_DEMO_URLS', 'SYSTEM_ARCHITECTURE_URLS', 'STACK_ARCHITECTURE_LANES', 'SKILLS', 'INTERX_ROLE', 'MILITARY_ROLE', 'CERTIFICATIONS', 'BDES', 'Korea National Open University', 'InterX', 'Apr 2026 - May 2026', 'https://kim3310.github.io/agent-runtime-go/', 'https://kim3310.github.io/weld-defect-vision/', 'evidence/live/aix-pilot.png', 'evidence/live/twincity-ui.png', 'evidence/districtpilot-public-api-readiness.svg', 'evidence/portfolio-reel/kim3310-systems-gallery-reel.mp4', 'public architecture routes', 'public API readiness map', 'Korean public API readiness', '/api/public-apis', '/integrations/public-apis', '15_public_api_integration_readiness.sql', 'proofPath', 'architectureSignal', 'React / Vite', 'FastAPI / Workers', 'Terraform / Docker', '2026-06-07 KST'] },
  { file: 'scripts/capture-portfolio-evidence.mjs', mustInclude: ['systems-gallery.png', '#projects', 'Expected project cards before capture'] },
  { file: 'index.css', mustInclude: ['--premium-shadow', '--radius-xl', 'commercial-lane-number', 'commercial-lane-proof', 'backdrop-filter: blur(26px)', 'prefers-reduced-motion'] },
  { file: 'components/Projects.tsx', mustInclude: ['<ServiceOffers', '<RepositoryCatalog', 'Built systems, with evidence', 'PORTFOLIO_REEL', 'REPOSITORY_DEMO_URLS', '<video', 'type="video/mp4"', 'isLivePngEvidence', 'evidence/live/preview/', 'evidence/live/preview-sm/', 'type="image/webp"', 'livePreviewFor', 'liveProofPreviewFor'] },
  { file: 'components/ServiceOffers.tsx', mustInclude: ['COMMERCIAL_LANES', 'commercial-lane-grid', 'free resource pages', 'resourceUrlForLane', 'trackCommerceCtaClick', 'personal data is never sold'] },
  { file: 'components/RepositoryCatalog.tsx', mustInclude: ['RESOURCE_WIRING', 'resource-wiring-panel', 'SERVICE_OFFERS', 'Free utility and data-value routes', 'resourceUrlForRepo'] },
  { file: 'components/InquiryForm.tsx', mustInclude: ['CANONICAL_INQUIRY_API', 'Private inquiry', 'Do not include credentials', 'INQUIRY_CONSENT_VERSION', 'INQUIRY_SOURCE_LANES', 'Submit private inquiry', 'Resource lane'] },
  { file: 'inquiryContract.ts', mustInclude: ['INQUIRY_SOURCE_LANES', 'SERVICE_OFFERS', 'Choose a recognized product or repository.', 'The selected product does not match the service.'] },
  { file: 'functions/api/inquiries.ts', mustInclude: ['INQUIRY_MAX_BYTES', 'LEADS_DB.batch', 'DELETE FROM private_inquiries', 'SELECT COUNT(*)', 'INQUIRY_EMAIL_DAILY_LIMIT', 'INQUIRY_NETWORK_DAILY_LIMIT', 'INQUIRY_GLOBAL_HOURLY_LIMIT', 'INQUIRY_RATE_LIMIT_SALT', 'CF-Connecting-IP', 'request_fingerprint', 'meta.changes', 'crypto.randomUUID()', 'INQUIRY_CONSENT_VERSION'] },
  { file: 'telemetryContract.ts', mustInclude: ['TELEMETRY_ALLOWED_REPOS', 'TELEMETRY_ALLOWED_EVENTS', 'resource_view', 'central_resource', 'consentVersion'] },
  { file: 'functions/api/events.ts', mustInclude: ['TELEMETRY_RATE_LIMIT_SALT', 'CF-Connecting-IP', 'telemetry_daily_counters', 'context.waitUntil', 'syncFirebaseAggregate', 'firebase_aggregate_sync_error'] },
  { file: 'functions/api/benchmarks.ts', mustInclude: ['telemetry_daily_counters', 'allTime', 'byEvent', 'bySurface'] },
  { file: 'firebaseAggregate.ts', mustInclude: ['RSASSA-PKCS1-v1_5', 'https://www.googleapis.com/auth/datastore', 'publicAggregates', 'documents:commit', 'REQUEST_TIME'] },
  { file: 'migrations/0001_private_inquiries.sql', mustInclude: ['CREATE TABLE IF NOT EXISTS private_inquiries', 'expires_at', 'email_hash', 'consent_version', 'status'] },
  { file: 'migrations/0002_inquiry_intent.sql', mustInclude: ['ALTER TABLE private_inquiries', 'ADD COLUMN intent', 'idx_private_inquiries_intent_created_at'] },
  { file: 'migrations/0003_inquiry_retention_index.sql', mustInclude: ['idx_private_inquiries_expires_at', 'private_inquiries(expires_at)'] },
  { file: 'migrations/0004_inquiry_network_fingerprint.sql', mustInclude: ['ADD COLUMN request_fingerprint', 'idx_private_inquiries_fingerprint_created_at', 'private_inquiries(request_fingerprint, created_at)'] },
  { file: 'migrations/0005_aggregate_telemetry.sql', mustInclude: ['telemetry_daily_counters', 'telemetry_rate_limits', 'expires_at'] },
  { file: 'workers/inquiry-retention.ts', mustInclude: ['pruneExpiredInquiries', 'controller.scheduledTime', 'inquiry_retention_prune'] },
  { file: 'workers/inquiry-retention-core.ts', mustInclude: ['RETENTION_DELETE_SQL', 'DELETE FROM private_inquiries', 'expires_at <= ?'] },
  { file: 'types/pages-env.d.ts', mustInclude: ['interface PagesEnv', 'LEADS_DB: D1Database', 'FIREBASE_PROJECT_ID: "kim3310-free-tools"'] },
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
  { file: 'public/privacy-support/ad-data.html', mustInclude: ['Advertising and aggregate data policy', 'DNT or Global Privacy Control', 'Firebase Firestore', 'Personal, sensitive, raw, event-level, and re-identifiable data is not sold'] },
  { file: 'public/ads.txt', mustInclude: ['google.com, pub-4973160293737562, DIRECT, f08c47fec0942fa0'] },
  { file: 'public/robots.txt', mustInclude: ['/sitemap.xml', '/resources/ad-data-sitemap.xml'] },
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

const resourceRoot = resolve(root, 'public/resources');
const expectedResourceEvents = [
  'resource_view',
  'resource_cta_click',
  'architecture_doc_open',
  'privacy_support_open',
];
const resourceDirs = existsSync(resourceRoot)
  ? readdirSync(resourceRoot).filter(name => statSync(resolve(resourceRoot, name)).isDirectory()).sort()
  : [];
const resourceDescriptions = new Set();

if (resourceDirs.length !== 35) {
  failures.push(`Expected 35 repository resource directories, found ${resourceDirs.length}`);
}
if (resourceDirs.includes('jalhae')) {
  failures.push('jalhae must not have a generated advertising or aggregate-data resource');
}

for (const repo of resourceDirs) {
  const resourceFiles = {
    html: resolve(resourceRoot, repo, 'index.html'),
    runtime: resolve(resourceRoot, repo, 'ad-data-runtime.js'),
    config: resolve(resourceRoot, repo, 'ad-data-config.json'),
    offer: resolve(resourceRoot, repo, 'service-offer.json'),
  };
  for (const [kind, file] of Object.entries(resourceFiles)) {
    if (!existsSync(file)) failures.push(`Missing ${repo} resource ${kind}: ${file}`);
  }
  if (Object.values(resourceFiles).some(file => !existsSync(file))) continue;

  const html = readFileSync(resourceFiles.html, 'utf8');
  const runtime = readFileSync(resourceFiles.runtime, 'utf8');
  const config = JSON.parse(readFileSync(resourceFiles.config, 'utf8'));
  const offer = JSON.parse(readFileSync(resourceFiles.offer, 'utf8'));
  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1];
  if (!description) failures.push(`${repo} resource is missing a meta description`);
  if (description) resourceDescriptions.add(description);

  for (const token of [
    `${repo} Architecture Readiness Check`,
    'pagead2.googlesyndication.com',
    'data-readiness-check',
    'What the architecture proves',
    'data-benchmark',
    'data-consent-panel',
    '/privacy-support/ad-data.html',
  ]) {
    if (!html.includes(token)) failures.push(`${repo} resource must include: ${token}`);
  }
  const forbiddenPositioning = [
    ['employment', 'credibility'].join(' '),
    [['hir', 'ing'].join(''), 'lens'].join(' '),
    ['technical', 'questions'].join(' '),
  ];
  for (const forbidden of forbiddenPositioning) {
    if (html.toLowerCase().includes(forbidden)) failures.push(`${repo} resource includes forbidden positioning: ${forbidden}`);
  }
  if (config.repo !== repo) failures.push(`${repo} runtime config has mismatched repo`);
  if (config.endpoint !== 'https://kim3310-doeon-kim-portfolio.pages.dev/api/events') {
    failures.push(`${repo} runtime config has a non-canonical event endpoint`);
  }
  if (JSON.stringify(config.allowedEvents) !== JSON.stringify(expectedResourceEvents)) {
    failures.push(`${repo} runtime config has an unexpected event allowlist`);
  }
  if (offer.commerce?.advertising?.eligible !== true) {
    failures.push(`${repo} service offer is not routed to the central advertising surface`);
  }
  for (const token of [
    'navigator.globalPrivacyControl',
    'navigator.doNotTrack',
    'consentVersion: config.consentVersion',
    'surface: "central_resource"',
  ]) {
    if (!runtime.includes(token)) failures.push(`${repo} runtime must include: ${token}`);
  }
  for (const forbidden of ['document.referrer', 'location.href', 'document.title', 'ad_slot_view']) {
    if (runtime.includes(forbidden)) failures.push(`${repo} runtime includes forbidden field or event: ${forbidden}`);
  }
}

if (resourceDescriptions.size !== 35) {
  failures.push(`Expected 35 unique resource descriptions, found ${resourceDescriptions.size}`);
}
const resourceSitemap = existsSync(resolve(resourceRoot, 'ad-data-sitemap.xml'))
  ? readFileSync(resolve(resourceRoot, 'ad-data-sitemap.xml'), 'utf8')
  : '';
const resourceSitemapUrls = [...resourceSitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (resourceSitemapUrls.length !== 35 || new Set(resourceSitemapUrls).size !== 35) {
  failures.push(`Resource sitemap must contain 35 unique URLs, found ${resourceSitemapUrls.length}`);
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
