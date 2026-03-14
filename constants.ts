import { Project, Experience, SkillCategory, Certification, Profile, SecondaryProject, UpgradeTrack, FocusPath } from './types';

export const PROFILE: Profile = {
  name: '김도언 (Doeon Kim)',
  title: 'AI/SW Systems Engineer | Reliable Industrial AI',
  email: 'ehdjs1351@gmail.com',
  github: 'https://github.com/KIM3310',
  linkedin: 'https://www.linkedin.com/in/doeon-kim-4742a2388',
  catchphrase: 'Evidence-first AI systems for high-trust operations',
  intro:
    '툴콜링 신뢰성, multimodal incident AI, operator workflow, enterprise governance에 강한 AI/SW 엔지니어입니다. 지금은 FabTwin Guardian을 중심으로, 위험한 변경과 운영 컨텍스트를 reviewable system과 reusable artifact로 바꾸는 제품형 포트폴리오를 만들고 있습니다.',
};

export const PORTFOLIO_LIVE_URL = 'https://doeon-kim-portfolio.pages.dev';
export const PORTFOLIO_REPO_URL = PROFILE.github;
export const PORTFOLIO_DISCUSSIONS_URL = PROFILE.github;
export const PORTFOLIO_QA_URL = PROFILE.linkedin;
export const PORTFOLIO_IDEAS_URL = `mailto:${PROFILE.email}?subject=Portfolio%20Ideas`;
export const PORTFOLIO_FEEDBACK_ISSUE_URL = PROFILE.github;
export const PORTFOLIO_GISCUS_REPO = 'KIM3310/doeon-kim-portfolio';
export const PORTFOLIO_GISCUS_REPO_ID = 'R_kgDOROWHZg';
export const PORTFOLIO_GISCUS_CATEGORY = 'Q&A';
export const PORTFOLIO_GISCUS_CATEGORY_ID = 'DIC_kwDOROWHZs4C3zga';

export const PORTFOLIO_SIGNAL_DECK = [
  {
    label: 'Flagship',
    value: 'FabTwin Guardian',
    detail: 'GitLab-native incident-to-fix command system for semiconductor and industrial AI software teams.',
  },
  {
    label: 'Differentiator',
    value: 'Evidence -> decision -> approval',
    detail: 'Systems are shaped so reviewers can inspect what was observed, what was inferred, and where automation stops.',
  },
  {
    label: 'Proof Shape',
    value: 'Flagship + dossier + proof chain',
    detail: 'One dominant product thesis plus supporting public systems that make the flagship believable.',
  },
  {
    label: 'Hiring Signal',
    value: 'SK hynix-ready AI/SW',
    detail: 'Semiconductor software, runtime reliability, operator trust, and reviewer speed packaged into one coherent story.',
  },
];

export const PORTFOLIO_ACTIONS = [
  {
    label: 'Launch Flagship',
    href: PORTFOLIO_LIVE_URL,
    helper: 'Open the canonical portfolio surface and jump into the flagship review path.',
  },
  {
    label: 'GitHub Proof',
    href: PROFILE.github,
    helper: 'Review canonical repos, implementation history, and public proof surfaces.',
  },
  {
    label: 'Email Brief',
    href: `mailto:${PROFILE.email}`,
    helper: 'Send a role brief, hiring context, or technical review request directly.',
  },
  {
    label: 'LinkedIn Contact',
    href: PROFILE.linkedin,
    helper: 'Fastest professional follow-up path for recruiters and hiring managers.',
  },
];

export const WHY_TEAMS_HIRE_ME = [
  {
    keyword: 'LLM Reliability',
    title: '모델이 흔들려도 시스템이 무너지지 않게 만듭니다',
    description:
      'StagePilot과 관련 실험에서 parser recovery, bounded retry, eval surface를 묶어 tool-calling reliability를 benchmarkable하게 끌어올렸습니다. 이 감각을 FabTwin Guardian 같은 action-heavy system에도 이어갑니다.',
    match: 'Tool-calling reliability, agent runtime hardening, eval and regression systems',
  },
  {
    keyword: 'Incident Systems',
    title: '운영 데이터를 구조화된 대응 흐름으로 바꿉니다',
    description:
      'AegisOps, Aegis-Air, TwinCity UI, Fab Ops Yield Control Tower에서 incident triage, RCA, handoff, operator workflow를 구조화된 product surface로 만들었습니다.',
    match: 'Multimodal incident AI, operator UX, runtime observability, handoff continuity',
  },
  {
    keyword: 'Governed Delivery',
    title: '데모가 아니라 승인과 검토까지 닫습니다',
    description:
      'Enterprise LLM Adoption Kit, Honeypot, 그리고 FabTwin Guardian narrative를 통해 audit, approval boundary, rollout posture, reviewable delivery를 함께 설계했습니다.',
    match: 'Enterprise rollout, governance controls, high-trust software delivery',
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
    title: 'FabTwin Guardian — Incident-to-Fix Command System',
    category: 'Flagship / Semiconductor AI-SW',
    role: 'Product thesis, incident-to-fix architecture, proof surface design, and premium command-center narrative',
    achievements: [
      'Frames risky merge requests, CI regressions, screenshots, SOP fragments, and shift notes as one evidence-first software workflow.',
      'Separates evidence, patch planning, approval, and signed handoff so the system reads as trustworthy operational software, not a chatbot wrapper.',
      'Optimized to strengthen both SK hynix AI/SW positioning and GitLab AI Hackathon competitiveness.',
    ],
    tech: ['GitLab Duo Agent Platform', 'TypeScript', 'Evidence Graph', 'Approval Gates', 'Replayable Debugging'],
    links: { demo: PORTFOLIO_LIVE_URL, github: PROFILE.github },
  },
  {
    title: 'AegisOps — Multimodal Incident Copilot',
    category: 'Flagship / Incident AI',
    role: 'Multimodal incident analysis, JSON guardrails, replayable operator outputs',
    achievements: [
      'Combines logs and monitoring screenshots into structured RCA, action plans, and handoff artifacts.',
      'Added JSON/schema guardrails plus BYOK and no-key modes to keep the incident flow demoable across environments.',
      'Validated replay and workflow coverage with 34 passing tests.',
    ],
    tech: ['Gemini', 'GCP', 'Google Workspace', 'Multimodal AI'],
    links: {
      demo: 'https://aegisops-ai-incident-doctor.pages.dev',
      github: 'https://github.com/KIM3310/AegisOps',
      youtube: 'https://www.youtube.com/watch?v=FOcjPcMheIg',
    },
  },
  {
    title: 'Aegis-Air — Local-First Incident Review Engine',
    category: 'Flagship / Air-Gapped Ops',
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
    title: 'Fab Ops Yield Control Tower',
    category: 'Semiconductor / Operator Systems',
    role: 'Alarm triage, lot-risk workflow, release gates, signed handoff',
    achievements: [
      'Built a manufacturing control tower that keeps alarms, lot risk, tool ownership, and signed handoff in one reviewable flow.',
      'Made hold / watch / release-ready posture visible before the next shift acts.',
      'Provides the semiconductor workflow baseline that makes FabTwin Guardian credible.',
    ],
    tech: ['Python', 'FastAPI', 'Manufacturing Ops'],
    links: { github: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
  },
  {
    title: 'StagePilot — Tool-Calling Reliability Runtime',
    category: 'LLM Reliability',
    role: 'Parser middleware, orchestration, benchmark-driven tool-calling hardening',
    achievements: [
      'Improved benchmark success from 29.17% baseline to 87.50%, and 100% with bounded retry.',
      'Unifies middleware, orchestration, and evaluation into one inspectable proof surface.',
      'Provides the reliability backbone for action-heavy agent products.',
    ],
    tech: ['TypeScript', 'Tool Calling', 'Benchmarks', 'Middleware'],
    links: { demo: 'https://stage-pilot.pages.dev', github: 'https://github.com/KIM3310/stage-pilot', youtube: 'https://youtu.be/6trgTH1vX4M' },
  },
  {
    title: 'Enterprise LLM Adoption Kit',
    category: 'Governance / Enterprise Delivery',
    role: 'Backend API, frontend, eval harness, governance controls',
    achievements: [
      'Implemented RBAC, injection detection, PII redaction, audit hash logging, and citation-oriented response controls.',
      'Added JSONL eval pipelines, red-team reporting, and rollout drafts to support enterprise rollout decisions.',
      'Proves that safe AI delivery requires governance, not just model quality.',
    ],
    tech: ['FastAPI', 'React', 'Security', 'Evaluation'],
    links: { github: 'https://github.com/KIM3310/enterprise-llm-adoption-kit' },
  },
  {
    title: 'TwinCity UI — Digital Twin Ops Console',
    category: 'Real-Time Ops Console',
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
    title: 'ogx — Multi-Agent Orchestration CLI',
    category: 'Agent Systems / CLI',
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
    title: 'Flagship productization',
    systems: ['FabTwin Guardian', 'AegisOps', 'StagePilot'],
    currentBase: ['Evidence-first workflow', 'Operator UX', 'Reliability proof'],
    nextBuild: 'Turn FabTwin Guardian from a strong concept into a tighter execution asset with clearer scenarios, stronger artifacts, and a more inspectable delivery path.',
    outcome: 'A flagship that feels closer to an actual product system than a polished concept surface.',
  },
  {
    title: 'Semiconductor software narrative',
    systems: ['Fab Ops Yield Control Tower', 'TwinCity UI', 'FabTwin Guardian'],
    currentBase: ['Operator workflows', 'Spatial control surfaces', 'Release gates'],
    nextBuild: 'Make industrial software concepts louder than generic AI language so the portfolio reads immediately as AI/SW for high-trust operations.',
    outcome: 'A portfolio with stronger domain specificity and better hiring fit for semiconductor and industrial AI roles.',
  },
  {
    title: 'Review-speed surfaces',
    systems: ['Homepage', 'Dossier', 'Selected repos'],
    currentBase: ['Public demos', 'Architecture notes', 'Canonical links'],
    nextBuild: 'Shorten the path from first impression to technical confidence by improving screenshots, diagrams, walkthroughs, and summary artifacts.',
    outcome: 'Recruiters and judges understand the strongest systems faster.',
  },
];

export const FOCUS_PATHS: FocusPath[] = [
  {
    title: 'Flagship first',
    summary: 'FabTwin Guardian을 먼저 보고, 그 다음 supporting proof를 읽는 경로입니다.',
    strengths: ['Flagship thesis', 'Operator-grade UX', 'High-trust AI delivery', 'Semiconductor narrative'],
    systems: ['FabTwin Guardian', 'Fab Ops Yield Control Tower', 'AegisOps'],
    links: [
      { label: 'Launch flagship surface', href: PORTFOLIO_LIVE_URL },
      { label: 'GitHub proof index', href: PROFILE.github },
      { label: 'LinkedIn overview', href: PROFILE.linkedin },
    ],
  },
  {
    title: 'Reliability systems',
    summary: '평가, fallback, replay, guardrails가 강한 시스템부터 보는 경로입니다.',
    strengths: ['Evals + benchmarks', 'Runtime guardrails', 'Failure handling', 'Replayability'],
    systems: ['StagePilot', 'AegisOps', 'Aegis-Air'],
    links: [
      { label: 'StagePilot repo', href: 'https://github.com/KIM3310/stage-pilot' },
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
      { label: 'Aegis-Air repo', href: 'https://github.com/KIM3310/Aegis-Air' },
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
  { label: 'Focus', value: 'Reliability / Runtime Ops / High-Trust AI' },
  { label: 'Public Proof', value: 'Canonical repos + live surfaces' },
  { label: 'Portfolio URL', value: 'doeon-kim-portfolio.pages.dev' },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  { title: 'SteadyTap', focus: 'Accessibility-first iOS app with integrated FastAPI backend', github: 'https://github.com/KIM3310/SteadyTap', demo: 'https://steadytap.pages.dev' },
  { title: 'smallbiz-ops-copilot', focus: 'Cloudflare-based SMB ops copilot with governance-oriented support workflow', github: 'https://github.com/KIM3310/smallbiz-ops-copilot', demo: 'https://smallbiz-ops-copilot.pages.dev' },
  { title: 'The Logistics Prophet', focus: 'Predictive logistics control tower with auditability and explainability', github: 'https://github.com/KIM3310/the-logistics-prophet', demo: 'https://the-logistics-prophet.pages.dev', note: 'Ontology, audit chain, and action workflow proof' },
  { title: 'Upstage DocuAgent', focus: 'Document analysis and learning-package export pipeline', github: 'https://github.com/KIM3310/Upstage-DocuAgent', demo: 'https://upstage-docuagent.pages.dev' },
  { title: 'Nexus-Hive', focus: 'Multi-agent BI copilot for enterprise analytics workflows', github: 'https://github.com/KIM3310/Nexus-Hive', demo: 'https://nexus-hive.pages.dev', note: 'Data platform expansion in progress' },
  { title: 'regulated-case-workbench', focus: 'Case inbox, evidence review, redaction preview, approval, and export manifest workflow', github: 'https://github.com/KIM3310/regulated-case-workbench', demo: 'https://regulated-case-workbench.pages.dev', note: 'Regulated workflow baseline' },
  { title: 'secure-xl2hwp-local', focus: 'Air-gapped document automation pipeline for local environments', github: 'https://github.com/KIM3310/secure-xl2hwp-local', demo: 'https://secure-xl2hwp-local.pages.dev' },
  { title: 'beaver-study-orchestrator', focus: 'Syllabus parsing and study-plan orchestration service', github: 'https://github.com/KIM3310/beaver-study-orchestrator', demo: 'https://beaver-study-orchestrator.pages.dev' },
  { title: 'the-savior', focus: 'Wellness app with AI coaching and journaling surface', github: 'https://github.com/KIM3310/the-savior', demo: 'https://the-savior-9z8.pages.dev' },
  { title: 'EcoTide', focus: 'SwiftUI environmental simulation app with reviewer-friendly telemetry surface', github: 'https://github.com/KIM3310/ecotide', demo: 'https://ecotide.pages.dev' },
];
