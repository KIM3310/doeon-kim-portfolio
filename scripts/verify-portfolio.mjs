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
  'components/VerificationBoard.tsx',
  'components/RepoOperatingMatrix.tsx',
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
  { file: 'constants.ts', mustInclude: ['StagePilot', 'AegisOps', 'AI engineer + solutions architect'], mustNotInclude: ['FabPilot Live X', 'SignalForge', 'Amazon Nova', 'NVIDIA-ready', 'Gemini Live Agent Challenge', 'Samsung-ready'] },
  { file: 'components/Hero.tsx', mustInclude: ['StagePilot', 'Current checked-in 24-case benchmark snapshot', 'Open AegisOps system'], mustNotInclude: ['FabPilot Live X', 'SignalForge', 'Amazon Nova', 'NVIDIA-ready', 'Samsung-ready'] },
  { file: 'public/fabpilot-live-x.html', mustInclude: ['Applied Ops Archive', 'Archived high-trust ops proof'], mustNotInclude: ['FabPilot Live X', 'SignalForge', 'Amazon Nova', 'NVIDIA-ready', 'Samsung-ready', 'GitLab AI Hackathon', 'SK hynix-ready'] },
  { file: 'public/fabpilot-dossier.html', mustInclude: ['Applied Ops Archive', 'high-trust-ops-ready'], mustNotInclude: ['FabPilot Live X', 'SignalForge', 'Samsung-ready', 'SK hynix-ready'] },
  { file: 'public/briefs/frontier-llm-review-brief.html', mustInclude: ['Frontier LLM', 'StagePilot', 'AegisOps'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/frontier-llm-interview-pack.html', mustInclude: ['Frontier LLM interview pack', 'StagePilot', 'AegisOps'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/frontier-llm-application-packet.html', mustInclude: ['Frontier LLM application packet', 'StagePilot', 'AegisOps'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/big-tech-systems-review-brief.html', mustInclude: ['Big tech systems', 'StagePilot', 'TwinCity UI'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/big-tech-systems-walkthrough.html', mustInclude: ['Big-tech systems walkthrough', 'StagePilot', 'AegisOps'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/big-tech-systems-application-packet.html', mustInclude: ['Big Tech Systems application packet', 'AegisOps', 'StagePilot'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/snowflake-review-brief.html', mustInclude: ['Governed Analytics', 'Nexus-Hive', 'Lakehouse Contract Lab'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/databricks-review-brief.html', mustInclude: ['Lakehouse Delivery', 'Lakehouse Contract Lab', 'The Logistics Prophet'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/data-platform-architecture-pack.html', mustInclude: ['Data platform architecture pack', 'Nexus-Hive', 'Lakehouse Contract Lab'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/data-platform-application-packet.html', mustInclude: ['Data platform application packet', 'Lakehouse Contract Lab', 'Nexus-Hive'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/palantir-review-brief.html', mustInclude: ['High-Trust Workflow', 'regulated-case-workbench', 'fab-ops-yield-control-tower'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/palantir-application-packet.html', mustInclude: ['high-trust workflow application packet', 'regulated-case-workbench', 'TwinCity UI'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/brokerage-review-brief.html', mustInclude: ['Brokerage', 'Advisor Review Desk', 'Nexus-Hive'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/brokerage-application-packet.html', mustInclude: ['Brokerage application packet', 'Advisor Review Desk', 'Nexus-Hive'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/quant-review-brief.html', mustInclude: ['Quant', 'Signal Risk Lab', 'Lakehouse Contract Lab'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'public/briefs/quant-application-packet.html', mustInclude: ['Quant application packet', 'Signal Risk Lab', 'Lakehouse Contract Lab'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
  { file: 'README.md', mustInclude: ['StagePilot', 'archived ops case study', 'Brokerage / securities', 'Quant / systematic', 'Verified now', 'Repo operating map', 'https://kim3310.github.io/doeon-kim-portfolio/'], mustNotInclude: ['FabPilot Live X', 'SignalForge'] },
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
