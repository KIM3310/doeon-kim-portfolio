import { Project, Experience, SkillCategory, Certification, Profile, SecondaryProject, UpgradeTrack, FocusPath } from './types';

export const PROFILE: Profile = {
  name: '김도언 (Doeon Kim)',
  title: 'LLM Systems Engineer | Agent Reliability, Evals, Runtime Safety',
  email: 'ehdjs1351@gmail.com',
  github: 'https://github.com/KIM3310',
  linkedin: 'https://www.linkedin.com/in/doeon-kim-4742a2388',
  catchphrase: 'Benchmarked LLM systems for real-world failure modes',
  intro:
    'Agent reliability, evals, multimodal incident AI, and operator-safe runtime design are my strongest public proof areas. I lead with StagePilot as the reliability surface, then show how that reliability maps into applied systems like FabTwin Guardian, AegisOps, and governance-heavy delivery.',
};

export const PORTFOLIO_LIVE_URL = 'https://kim3310.github.io/doeon-kim-portfolio/';
export const PORTFOLIO_REPO_URL = PROFILE.github;
export const PORTFOLIO_DISCUSSIONS_URL = PROFILE.github;
export const PORTFOLIO_QA_URL = PROFILE.linkedin;
export const PORTFOLIO_IDEAS_URL = `mailto:${PROFILE.email}?subject=Portfolio%20Ideas`;
export const PORTFOLIO_FEEDBACK_ISSUE_URL = PROFILE.github;
export const PORTFOLIO_GISCUS_REPO = 'KIM3310/doeon-kim-portfolio';
export const PORTFOLIO_GISCUS_REPO_ID = 'R_kgDOROWHZg';
export const PORTFOLIO_GISCUS_CATEGORY = 'Q&A';
export const PORTFOLIO_GISCUS_CATEGORY_ID = 'DIC_kwDOROWHZs4C3zga';

export const FLAGSHIP_URL = 'fabpilot-live-x.html';
export const DOSSIER_URL = 'fabpilot-dossier.html';
export const PRIMARY_PROOF_URL = 'https://stage-pilot.pages.dev';
export const RESUME_PDF_URL = 'resume/Doeon_Kim_Resume_LLM_Systems_Engineer.pdf';
export const SAMSUNG_BRIEF_URL = 'briefs/samsung-ai-sw-one-pager.html';
export const HACKATHON_BRIEF_URL = 'briefs/gemini-live-hackathon-package.html';

export const PORTFOLIO_SIGNAL_DECK = [
  {
    label: 'Primary proof',
    value: 'StagePilot',
    detail: 'Checked-in tool-calling benchmark lift from 29.17% baseline to 87.50% with middleware and 100.00% with bounded retry.',
  },
  {
    label: 'Applied case',
    value: 'FabTwin Guardian',
    detail: 'Shows how reliability thinking extends into approval-gated, action-heavy software instead of stopping at benchmark charts.',
  },
  {
    label: 'Supporting proof',
    value: 'AegisOps + Aegis-Air + Enterprise Kit',
    detail: 'Multimodal incident review, local-first fallback, and governance-heavy delivery make the main reliability claim believable.',
  },
  {
    label: 'Hiring Signal',
    value: 'LLM systems + runtime safety',
    detail: 'Evaluator-facing proof comes first, then applied product systems that show what trustworthy automation looks like.',
  },
];

export const PORTFOLIO_ACTIONS = [
  { label: 'Open StagePilot Proof', href: PRIMARY_PROOF_URL, helper: 'Start from the benchmarked reliability surface and inspect the proof path first.' },
  { label: 'Open FabTwin Case Study', href: FLAGSHIP_URL, helper: 'Then inspect how the same reliability mindset maps into an action-heavy product surface.' },
  { label: 'Read FabTwin Dossier', href: DOSSIER_URL, helper: 'Review architecture, trust surfaces, and delivery logic behind the applied case study.' },
  { label: 'Download Resume', href: RESUME_PDF_URL, helper: 'Get the frontier-leaning resume version aligned to reliability, evals, and runtime safety.' },
];

export const STAGEPILOT_BENCHMARK_STEPS = [
  {
    label: 'Baseline',
    rate: 29.17,
    helper: 'Prompt-mode tool calls before parser hardening',
    accentClass: 'bg-white/20',
    textClass: 'text-white/70',
  },
  {
    label: 'Middleware',
    rate: 87.5,
    helper: 'Parser recovery plus schema coercion',
    accentClass: 'bg-accent-soft/70',
    textClass: 'text-accent-soft',
  },
  {
    label: 'Bounded retry',
    rate: 100,
    helper: 'One controlled retry closes the remaining failures',
    accentClass: 'bg-accent-gold',
    textClass: 'text-accent-gold',
  },
] as const;

export const STAGEPILOT_BENCHMARK_DELTAS = [
  { label: 'Middleware vs baseline', value: '+58.33pp' },
  { label: 'Retry vs middleware', value: '+12.50pp' },
  { label: 'Retry vs baseline', value: '+70.83pp' },
] as const;

export const STAGEPILOT_REVIEW_FLOW = [
  {
    step: '01',
    title: 'See the lift',
    detail: 'Benchmark numbers establish that the reliability claim is backed by checked-in evidence, not just demo copy.',
  },
  {
    step: '02',
    title: 'Inspect the proof surface',
    detail: 'Review pack, runtime brief, and benchmark artifacts shorten the path from curiosity to technical confidence.',
  },
  {
    step: '03',
    title: 'Open the applied case',
    detail: 'FabTwin Guardian shows how the same reliability mindset survives approval boundaries, handoff, and action-heavy product UX.',
  },
] as const;

export const WHY_TEAMS_HIRE_ME = [
  {
    keyword: 'Agent Reliability',
    title: '깨지는 지점을 먼저 증명하고 닫습니다',
    description:
      'StagePilot에서 parser recovery, bounded retry, BenchLab eval surface를 묶어 tool-calling reliability를 benchmarkable하게 끌어올렸습니다. 중요한 건 데모가 아니라 실패 지점을 재현 가능하게 잡고 닫는 방식입니다.',
    match: 'Tool-calling reliability, eval harnesses, schema recovery, bounded retries',
  },
  {
    keyword: 'Incident Systems',
    title: '운영 데이터를 구조화된 evidence flow로 바꿉니다',
    description:
      'AegisOps, Aegis-Air, TwinCity UI에서 incident triage, RCA, handoff, fallback을 구조화된 product surface로 만들었습니다. 그래서 multimodal input이 들어와도 결과를 operator가 읽을 수 있는 evidence flow로 정리합니다.',
    match: 'Multimodal incident AI, operator UX, runtime observability, handoff continuity',
  },
  {
    keyword: 'Runtime Safety',
    title: '승인 경계와 handoff를 제품 기능으로 만듭니다',
    description:
      'Enterprise LLM Adoption Kit, FabTwin Guardian, Honeypot에서 audit, fallback, async jobs, signed handoff, export flows를 설계했습니다. 그래서 시스템이 멈춰야 할 지점과 사람이 이어받아야 할 지점이 명확합니다.',
    match: 'Runtime safety, approval boundaries, governance controls, high-trust delivery',
  },
];

export const SKILLS: SkillCategory[] = [
  { category: 'AI/ML & LLM', skills: ['LLM Systems', 'Tool Calling', 'Evals & Benchmarks', 'RAG', 'Multimodal AI'] },
  { category: 'Data & Platform', skills: ['Palantir Foundry', 'Snowflake', 'Databricks', 'Data Pipelines'] },
  { category: 'Cloud Infrastructure', skills: ['Azure (OpenAI, AI Search)', 'GCP', 'AWS', 'Cloud Run', 'Terraform'] },
  { category: 'Backend Engineering', skills: ['Python (FastAPI)', 'Node.js (Express)', 'TypeScript', 'API Design', 'Schema Guardrails'] },
  { category: 'DevOps & Tools', skills: ['Docker', 'CI/CD (GitHub Actions)', 'Observability', 'Git', 'tmux'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] },
];

export const PROJECTS: Project[] = [
  {
    title: 'StagePilot — Tool-Calling Reliability Runtime',
    category: 'Primary proof / LLM Reliability',
    role: 'Parser middleware, orchestration, and benchmark-driven tool-calling hardening',
    achievements: [
      'Improved checked-in benchmark success from 29.17% baseline to 87.50%, and 100.00% with bounded retry.',
      'Unifies parser middleware, orchestration, and BenchLab evaluation into one inspectable proof surface.',
      'Provides the strongest public reliability signal before the portfolio moves into applied product systems.',
    ],
    tech: ['TypeScript', 'Tool Calling', 'Benchmarks', 'Middleware', 'Runtime APIs'],
    links: { demo: PRIMARY_PROOF_URL, github: 'https://github.com/KIM3310/stage-pilot', youtube: 'https://youtu.be/6trgTH1vX4M' },
  },
  {
    title: 'AegisOps — Multimodal Incident Copilot',
    category: 'Supporting proof / Incident AI',
    role: 'Multimodal incident analysis, JSON guardrails, replayable operator outputs',
    achievements: [
      'Combines logs and monitoring screenshots into structured RCA, action plans, and handoff artifacts.',
      'Added JSON/schema guardrails plus BYOK and no-key modes to keep the incident flow demoable across environments.',
      'Validated replay and workflow coverage with 34 passing tests.',
    ],
    tech: ['Gemini', 'GCP', 'Google Workspace', 'Multimodal AI'],
    links: { demo: 'https://aegisops-ai-incident-doctor.pages.dev', github: 'https://github.com/KIM3310/AegisOps', youtube: 'https://www.youtube.com/watch?v=FOcjPcMheIg' },
  },
  {
    title: 'Aegis-Air — Local-First Incident Review Engine',
    category: 'Supporting proof / Local-First Reliability',
    role: 'Local inference pipeline, replay suite, secure incident review UX',
    achievements: [
      'Built a local-first incident review engine for teams that cannot send production telemetry to public APIs.',
      'Returned structured RCA with severity, failure bucket, evidence, and immediate actions through FastAPI endpoints.',
      'Reached 32/32 replay rubric checks with 100% severity and failure-bucket accuracy on the bundled suite.',
    ],
    tech: ['FastAPI', 'Ollama', 'Replay Evals', 'SSE', 'Terraform'],
    links: { demo: 'https://aegis-air.pages.dev', github: 'https://github.com/KIM3310/Aegis-Air' },
  },
  {
    title: 'Enterprise LLM Adoption Kit',
    category: 'Supporting proof / Governance',
    role: 'Backend API, frontend, eval harness, and governance controls',
    achievements: [
      'Implemented RBAC, injection detection, PII redaction, audit hash logging, and citation-oriented response controls.',
      'Added JSONL eval pipelines, red-team reporting, and rollout drafts to support enterprise rollout decisions.',
      'Proves that safe AI delivery requires governance, not just model quality.',
    ],
    tech: ['FastAPI', 'React', 'Security', 'Evaluation'],
    links: { github: 'https://github.com/KIM3310/enterprise-llm-adoption-kit' },
  },
  {
    title: 'FabTwin Guardian — Applied High-Trust Operations System',
    category: 'Applied case study / High-Trust Ops',
    role: 'Multimodal ops UX, decision trace, signed handoff, and approval-boundary design',
    achievements: [
      'Frames action-heavy operational workflows as evidence-first software instead of assistant theatre.',
      'Separates evidence, decision trace, approval-gated action, and signed handoff so the system reads as trustworthy operational software.',
      'Acts as the applied product case study layered on top of the reliability foundation shown in StagePilot.',
    ],
    tech: ['GitLab Duo Agent Platform', 'TypeScript', 'Evidence Graph', 'Decision Trace', 'Replayable Debugging'],
    links: { demo: FLAGSHIP_URL, github: PROFILE.github },
  },
  {
    title: 'TwinCity UI — Digital Twin Ops Console',
    category: 'Applied operator systems',
    role: 'Operator UX, event normalization, transport fallback reliability',
    achievements: [
      'Built a floorplan-based triage console with live/history views, timeline actions, and list-map-detail state sync.',
      'Implemented WS -> SSE -> HTTP polling fallback with connection-state handling and demo-first mock feeds.',
      'Normalized inconsistent provider payloads into one event schema for deterministic operator workflows.',
    ],
    tech: ['Next.js', 'TypeScript', 'WebSocket', 'SSE'],
    links: { demo: 'https://twincity-ui.pages.dev', github: 'https://github.com/KIM3310/twincity-ui' },
  },
  {
    title: 'Fab Ops Yield Control Tower',
    category: 'Applied operator systems',
    role: 'Alarm triage, lot-risk workflow, release gates, and signed handoff',
    achievements: [
      'Built a manufacturing control tower that keeps alarms, lot risk, tool ownership, and signed handoff in one reviewable flow.',
      'Made hold / watch / release-ready posture visible before the next shift acts.',
      'Provides the operator-workflow baseline that makes FabTwin Guardian credible as a product system.',
    ],
    tech: ['Python', 'FastAPI', 'Manufacturing Ops'],
    links: { github: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
  },
  {
    title: 'ogx — Multi-Agent Orchestration CLI',
    category: 'Agent systems / CLI',
    role: 'Project-scoped runtime state, safe worker control, operational API surface',
    achievements: [
      'Built a multi-agent orchestration CLI with safe-by-default local execution and project-scoped runtime state.',
      'Added setup, doctor, launch, team, status, and cancel flows plus notification hooks.',
      'Extends the orchestration story behind high-trust AI systems.',
    ],
    tech: ['TypeScript', 'CLI', 'tmux', 'Cloud Run'],
    links: { github: 'https://github.com/KIM3310/ogx' },
  },
];

export const EXPERIENCE: Experience[] = [
  { company: 'Microsoft AI School 8기', role: 'Trainee', period: '2025.09 - 2026.02', description: ['AI/클라우드/데이터 분석 교육 이수', 'RAG, incident operations, real-time ops 중심의 팀 프로젝트 수행'] },
  { company: 'ATOM TECH SOLUTIONS LTD', role: 'Full Stack Intern (Remote)', location: '미국 캘리포니아 버클리', period: '2025.06 - 2025.09', description: ['기존 리뷰 플랫폼에 OpenAI API 기반 문의 챗봇 통합', '풀스택 유지보수 및 기능 개선'] },
  { company: '대한민국 국방부', role: 'Strategic Backbone Network & Security Team Lead', period: '2023.11 - 2025.05', description: ['지휘통신망 24/7 운영, 네트워크 인프라/보안 관리', '분대장 팀 운영 및 리더십 경험'] },
];

export const CERTIFICATIONS: Certification[] = [
  { issuer: 'Microsoft', name: 'AI-900: Microsoft Azure AI Fundamentals' },
  { issuer: 'Snowflake', name: 'SnowPro Associate: Platform Certification' },
  { issuer: 'Palantir', name: 'Foundry Data Engineer Associate' },
  { issuer: 'Palantir', name: 'Foundry Foundations' },
  { issuer: 'Databricks', name: 'AWS Databricks Platform Architect' },
  { issuer: 'Databricks', name: 'GCP Databricks Platform Architect' },
  { issuer: 'Databricks', name: 'Databricks Fundamentals' },
  { issuer: 'IBM', name: 'IBM Artificial Intelligence Fundamentals' },
  { issuer: 'IBM', name: 'IBM Cloud Computing Fundamentals' },
  { issuer: 'IBM', name: 'IBM Cyber Security Fundamentals' },
  { issuer: 'Datadog', name: 'Datadog Observability Certifications' },
  { issuer: 'SAP', name: 'SAP Cloud Platform Integration Service' },
];

export const UPGRADE_TRACKS: UpgradeTrack[] = [
  {
    title: 'Reliability flagship',
    systems: ['StagePilot', 'AegisOps', 'Aegis-Air'],
    currentBase: ['Benchmark lift', 'Replay coverage', 'Failure handling'],
    nextBuild: 'Turn the reliability story into an even sharper reviewer asset with stronger benchmark visuals, failure taxonomy views, and one 60-second proof path.',
    outcome: 'A public proof surface that reads immediately as frontier-adjacent systems work.',
  },
  {
    title: 'Applied system depth',
    systems: ['FabTwin Guardian', 'TwinCity UI', 'Fab Ops Yield Control Tower'],
    currentBase: ['Operator workflows', 'Approval boundaries', 'Stateful control surfaces'],
    nextBuild: 'Make the applied case study feel even more inspectable by tightening scenarios, artifacts, and visual evidence around action boundaries.',
    outcome: 'A stronger bridge from reliability proof to real product-system judgment.',
  },
  {
    title: 'Review-speed surfaces',
    systems: ['Homepage', 'Resume', 'Selected repos'],
    currentBase: ['Public demos', 'Architecture notes', 'Benchmark artifacts'],
    nextBuild: 'Shorten the path from first impression to technical confidence by tightening the resume, top-of-page copy, and first-click review route.',
    outcome: 'Recruiters and judges understand the strongest systems faster.',
  },
];

export const FOCUS_PATHS: FocusPath[] = [
  {
    title: 'Reliability first',
    summary: 'StagePilot와 supporting eval systems부터 보고, 그 다음 applied case study로 넘어가는 경로입니다.',
    strengths: ['Benchmarks', 'Failure recovery', 'Replayability', 'Runtime hardening'],
    systems: ['StagePilot', 'AegisOps', 'Aegis-Air'],
    links: [
      { label: 'Open StagePilot proof', href: PRIMARY_PROOF_URL },
      { label: 'StagePilot repo', href: 'https://github.com/KIM3310/stage-pilot' },
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
    ],
  },
  {
    title: 'Applied high-trust systems',
    summary: 'Reliability가 action-heavy product에 어떻게 들어가는지 보고 싶을 때의 경로입니다.',
    strengths: ['Approval boundaries', 'Operator workflows', 'Decision trace', 'Handoff continuity'],
    systems: ['FabTwin Guardian', 'TwinCity UI', 'Fab Ops Yield Control Tower'],
    links: [
      { label: 'Open FabTwin case study', href: FLAGSHIP_URL },
      { label: 'Read FabTwin dossier', href: DOSSIER_URL },
      { label: 'TwinCity UI repo', href: 'https://github.com/KIM3310/twincity-ui' },
    ],
  },
  {
    title: 'Governed delivery',
    summary: '승인 경계, auditability, rollout posture가 선명한 시스템 위주 경로입니다.',
    strengths: ['Trust boundary', 'Approval-safe workflows', 'Auditability', 'Review-first delivery'],
    systems: ['Enterprise LLM Adoption Kit', 'Honeypot', 'ogx'],
    links: [
      { label: 'Enterprise kit repo', href: 'https://github.com/KIM3310/enterprise-llm-adoption-kit' },
      { label: 'Honeypot repo', href: 'https://github.com/KIM3310/honeypot' },
      { label: 'ogx repo', href: 'https://github.com/KIM3310/ogx' },
    ],
  },
];

export const PORTFOLIO_RUNTIME_META = [
  { label: 'Scope', value: '8 selected systems / broader active repo set' },
  { label: 'Stack', value: 'React 19 + Vite 6' },
  { label: 'Focus', value: 'Agent Reliability / Runtime Safety / High-Trust AI' },
  { label: 'Public Proof', value: 'Canonical repos + live surfaces' },
  { label: 'Portfolio URL', value: 'kim3310.github.io/doeon-kim-portfolio' },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  { title: 'Nexus-Hive', focus: 'Multi-agent BI copilot for enterprise analytics workflows', github: 'https://github.com/KIM3310/Nexus-Hive', demo: 'https://nexus-hive.pages.dev', note: 'Data platform expansion in progress' },
  { title: 'Honeypot', focus: 'Azure document handover copilot with retrieval structure and async ingest', github: 'https://github.com/KIM3310/honeypot', demo: 'https://honeypot-3st.pages.dev' },
  { title: 'regulated-case-workbench', focus: 'Case inbox, evidence review, approval, and export manifest workflow', github: 'https://github.com/KIM3310/regulated-case-workbench', demo: 'https://regulated-case-workbench.pages.dev', note: 'Regulated workflow baseline' },
  { title: 'secure-xl2hwp-local', focus: 'Air-gapped document automation pipeline for local environments', github: 'https://github.com/KIM3310/secure-xl2hwp-local', demo: 'https://secure-xl2hwp-local.pages.dev' },
  { title: 'smallbiz-ops-copilot', focus: 'Governance-oriented SMB ops copilot workflow', github: 'https://github.com/KIM3310/smallbiz-ops-copilot', demo: 'https://smallbiz-ops-copilot.pages.dev' },
  { title: 'The Logistics Prophet', focus: 'Predictive logistics control tower with auditability and explainability', github: 'https://github.com/KIM3310/the-logistics-prophet', demo: 'https://the-logistics-prophet.pages.dev', note: 'Ontology, audit chain, and action workflow proof' },
  { title: 'Upstage DocuAgent', focus: 'Document analysis and learning-package export pipeline', github: 'https://github.com/KIM3310/Upstage-DocuAgent', demo: 'https://upstage-docuagent.pages.dev' },
  { title: 'SteadyTap', focus: 'Accessibility-first iOS app with integrated FastAPI backend', github: 'https://github.com/KIM3310/SteadyTap', demo: 'https://steadytap.pages.dev' },
];
