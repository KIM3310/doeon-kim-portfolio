import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'index.html',
  'public/fabpilot-live-x.html',
  'public/fabpilot-dossier.html',
  'public/fabpilot-live-x.js',
  'public/fabpilot-static.css',
  'public/resume/Doeon_Kim_Resume_LLM_Systems_Engineer.pdf',
  'public/resume/Doeon_Kim_Resume_Microsoft_Solution_Architect.pdf',
  'content/resume/llm-systems-engineer.json',
  'content/resume/solution-architect.json',
  'docs/resume-json/Doeon_Kim_Resume_LLM_Systems_Engineer.json',
  'docs/resume-json/Doeon_Kim_Resume_Microsoft_Solution_Architect.json',
  'public/briefs/samsung-ai-sw-one-pager.html',
  'public/briefs/frontier-llm-review-brief.html',
  'public/briefs/frontier-llm-interview-pack.html',
  'public/briefs/frontier-llm-application-packet.html',
  'public/briefs/big-tech-systems-review-brief.html',
  'public/briefs/big-tech-systems-walkthrough.html',
  'public/briefs/big-tech-systems-application-packet.html',
  'public/briefs/snowflake-review-brief.html',
  'public/briefs/databricks-review-brief.html',
  'public/briefs/data-platform-architecture-pack.html',
  'public/briefs/data-platform-application-packet.html',
  'public/briefs/palantir-review-brief.html',
  'public/briefs/palantir-application-packet.html',
  'public/briefs/brokerage-review-brief.html',
  'public/briefs/brokerage-application-packet.html',
  'public/briefs/quant-review-brief.html',
  'public/briefs/quant-application-packet.html',
  'public/evidence/stagepilot-provider-scorecard.svg',
  'public/evidence/stagepilot-perf-evidence.svg',
  'public/evidence/nexus-semantic-governance.svg',
  'public/evidence/nexus-lakehouse-readiness.svg',
  'public/evidence/enterprise-workshop-readout.svg',
  'public/evidence/aegisops-system-design.svg',
  'public/evidence/lakehouse-contract-board.svg',
  'docs/FABPILOT_GEMINI_RUNTIME.md',
  'docs/RESUME_PIPELINE.md',
];

const checks = [
  { file: 'constants.ts', mustInclude: ['StagePilot', 'AegisOps'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'components/Hero.tsx', mustInclude: ['StagePilot', 'Current checked-in 40-case benchmark snapshot', 'Open AegisOps system'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/fabpilot-live-x.html', mustInclude: ['Applied Ops Archive', 'Archived high-trust ops proof'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/fabpilot-dossier.html', mustInclude: ['Applied Ops Archive', 'high-trust-ops-ready'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/frontier-llm-review-brief.html', mustInclude: ['Runtime Systems', 'StagePilot', 'AegisOps'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/frontier-llm-interview-pack.html', mustInclude: ['Runtime Systems', 'StagePilot', 'AegisOps'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/frontier-llm-application-packet.html', mustInclude: ['Runtime Systems', 'StagePilot', 'AegisOps'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/big-tech-systems-review-brief.html', mustInclude: ['Platform Systems', 'StagePilot', 'TwinCity UI'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/big-tech-systems-walkthrough.html', mustInclude: ['Platform Systems', 'StagePilot', 'AegisOps'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/big-tech-systems-application-packet.html', mustInclude: ['Platform Systems', 'AegisOps', 'StagePilot'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/snowflake-review-brief.html', mustInclude: ['Analytics Systems', 'Nexus-Hive', 'Lakehouse Contract Lab'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/databricks-review-brief.html', mustInclude: ['Data Systems', 'Lakehouse Contract Lab', 'Nexus-Hive'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/data-platform-architecture-pack.html', mustInclude: ['Data Systems', 'Nexus-Hive', 'Lakehouse Contract Lab'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/data-platform-application-packet.html', mustInclude: ['Data Systems', 'Lakehouse Contract Lab', 'Nexus-Hive'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/palantir-review-brief.html', mustInclude: ['Operational Workflows', 'regulated-case-workbench', 'fab-ops-yield-control-tower'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/palantir-application-packet.html', mustInclude: ['Operational Workflows', 'regulated-case-workbench', 'TwinCity UI'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/brokerage-review-brief.html', mustInclude: ['Decision Workflows', 'Nexus-Hive', 'Finance Review Platform'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/brokerage-application-packet.html', mustInclude: ['Decision Workflows', 'Nexus-Hive', 'Finance Review Platform'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/quant-review-brief.html', mustInclude: ['Research Systems', 'Signal Risk Lab', 'Lakehouse Contract Lab'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/quant-application-packet.html', mustInclude: ['Research Systems', 'Signal Risk Lab', 'Lakehouse Contract Lab'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'README.md', mustInclude: ['StagePilot', 'archived ops case study', 'Verified now', 'Repo operating map', 'https://kim3310.github.io/doeon-kim-portfolio/'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'server/index.mjs', mustInclude: ['Applied Ops Archive', 'fabtwin-runtime'], mustNotInclude: ['FabPilot Live X'] },
  { file: 'docs/FABPILOT_GEMINI_RUNTIME.md', mustInclude: ['Applied Ops Archive', 'fabtwin-runtime'], mustNotInclude: ['FabPilot Live X'] },
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
