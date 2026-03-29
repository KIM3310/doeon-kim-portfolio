import {
  Project,
  Experience,
  SkillCategory,
  Certification,
  Profile,
  SecondaryProject,
  RepoTruthEntry,
  VerificationOverviewEntry,
  VerificationSnapshotEntry,
  ResidualRiskEntry,
} from './types';

export const PROFILE: Profile = {
  name: '김도언 (Doeon Kim)',
  title: 'Applied AI Engineer | Solution Architect | Reliability, Reviewability, Delivery',
  email: 'ehdjs1351@gmail.com',
  github: 'https://github.com/KIM3310',
  linkedin: 'https://www.linkedin.com/in/doeon-kim-4742a2388',
  catchphrase: 'Reliable AI systems — from tool-calling middleware to governed data platforms',
  intro:
    'I build production-grade AI systems with a focus on reliability, governance, and multi-cloud data platform integration. Public proof starts with StagePilot, AegisOps, Nexus-Hive, Enterprise LLM Adoption Kit, Lakehouse Contract Lab, and Tool-Call Fine-Tune Lab; deeper manufacturing and high-trust workflow systems are shared selectively in targeted interviews. Core expertise spans tool-calling middleware (25% → 90% benchmark lift, npm published), LLM post-training (QLoRA + BFCL-aligned evaluation harnesses), governed NL-to-SQL with Snowflake and Databricks adapters, enterprise LLM adoption with RBAC and audit trails, and lakehouse pipelines with contract-driven quality gates.',
};

export const PORTFOLIO_LIVE_URL = 'https://kim3310.github.io/doeon-kim-portfolio/';
export const PORTFOLIO_REPO_URL = 'https://github.com/KIM3310/doeon-kim-portfolio';
export const PORTFOLIO_LEDGER_URL = 'https://github.com/KIM3310/KIM3310/blob/main/PORTFOLIO_VERIFICATION_AND_RISK_LEDGER.md';

export const FEATURED_CASE_URL = 'fabpilot-live-x.html';
export const DOSSIER_URL = 'fabpilot-dossier.html';
export const PRIMARY_PROOF_URL = 'https://stage-pilot.pages.dev';
export const NW_SERVICE_ASSURANCE_URL = 'https://nw-service-assurance-workbench.ehdjs1351.workers.dev';
export const SECURITY_THREAT_RESPONSE_URL = 'https://security-threat-response-workbench.ehdjs1351.workers.dev';
export const QUANTUM_WORKFLOW_URL = 'https://github.com/KIM3310/quantum-workbench';
export const RESUME_PDF_URL = 'resume/Doeon_Kim_Resume_LLM_Systems_Engineer.pdf';
export const SOLUTION_ARCHITECT_RESUME_PDF_URL = 'resume/Doeon_Kim_Resume_Microsoft_Solution_Architect.pdf';
export const DATA_PLATFORM_ARCHITECTURE_PACK_URL = 'briefs/data-platform-architecture-pack.html';

export const STAGEPILOT_BENCHMARK_STEPS = [
  {
    label: 'Baseline',
    rate: 25,
    helper: 'Prompt-mode tool calls before parser hardening (40-case expanded suite)',
    accentClass: 'bg-white/20',
    textClass: 'text-white/70',
  },
  {
    label: 'Middleware + bounded retry',
    rate: 90,
    helper: '13 edge cases (adversarial, unicode, oversized payloads) included',
    accentClass: 'bg-accent-gold',
    textClass: 'text-accent-gold',
  },
] as const;

export const STAGEPILOT_BENCHMARK_DELTAS = [
  { label: 'Expanded suite vs baseline', value: '+65pp' },
  { label: 'Edge-case coverage', value: '13 adversarial / unicode / oversized' },
  { label: 'Total cases', value: '40 (up from 24)' },
] as const;

export const SKILLS: SkillCategory[] = [
  { category: 'AI / LLM Systems', skills: ['Tool-Calling Middleware', 'RAG Pipelines', 'Eval Frameworks', 'Multi-Agent Orchestration', 'Multimodal AI', 'Prompt Engineering'] },
  { category: 'Data Engineering', skills: ['Spark', 'Delta Lake', 'Medallion Architecture', 'Snowflake', 'Databricks', 'NL-to-SQL', 'Data Contracts'] },
  { category: 'Cloud & Infrastructure', skills: ['Azure (OpenAI, AI Search)', 'GCP', 'AWS', 'Terraform', 'Cloud Run', 'Multi-Cloud IaC'] },
  { category: 'Backend & APIs', skills: ['Python (FastAPI)', 'TypeScript (Node.js)', 'REST / gRPC API Design', 'RBAC', 'Schema Guardrails', 'OpenTelemetry'] },
  { category: 'Solution Architecture', skills: ['System Design', 'Governance & Compliance', 'Incident Analysis', 'Postmortem Workflows', 'Audit Trails', 'Policy Enforcement'] },
  { category: 'DevOps & Observability', skills: ['Docker', 'CI/CD (GitHub Actions)', 'Datadog', 'Observability Pipelines', 'Git', 'tmux'] },
  { category: 'Frontend & Visualization', skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Dashboard UX'] },
];

export const PROJECTS: Project[] = [
  // --- AI Engineer flagship ---
  {
    title: 'StagePilot — Tool-Calling Reliability Runtime',
    category: 'AI Engineer / LLM Reliability',
    role: 'Stage-gated parser middleware that lifts tool-calling success from 25% to 90%',
    achievements: [
      '90% success rate on 40-case benchmark with parser recovery, schema coercion, and bounded retries.',
      'Published as @ai-sdk-tool/parser on npm — composable AI SDK middleware for any provider.',
      '1,720 tests, codecov integration, multi-cloud deployment (GCP Cloud Run, K8s, Vercel, Cloudflare).',
    ],
    tech: ['TypeScript', 'AI SDK', 'Vitest', 'Biome', 'Zod', 'OpenTelemetry', 'Prometheus', 'Kubernetes'],
    links: { demo: PRIMARY_PROOF_URL, github: 'https://github.com/KIM3310/stage-pilot', youtube: 'https://youtu.be/6trgTH1vX4M' },
  },
  // --- Applied systems ---
  {
    title: 'AegisOps — Multimodal Incident Analysis',
    category: 'AI Engineer / Incident AI',
    role: 'Multimodal incident analysis with replay evals and structured postmortems',
    achievements: [
      'Combines logs and screenshots into structured RCA with severity classification.',
      'Replay evaluation framework: 4 scenarios, 32 rubric checks, automated regression.',
      'Live demo on Cloudflare Pages with demo mode (no API keys required).',
      '169 tests covering multimodal analysis, replay evaluation, and postmortem generation.',
    ],
    tech: ['TypeScript', 'React 19', 'Vite 6', 'Express', 'Gemini', 'GCP (GCS, BigQuery)'],
    links: { demo: 'https://aegisops-ai-incident-doctor.pages.dev', github: 'https://github.com/KIM3310/AegisOps', youtube: 'https://www.youtube.com/watch?v=FOcjPcMheIg' },
  },
  {
    title: 'Tool-Call Fine-Tune Lab',
    category: 'AI Engineer / LLM Fine-Tuning',
    role: 'QLoRA post-training of Qwen2.5-7B for tool-calling with a BFCL-aligned evaluation harness',
    achievements: [
      'Fine-tuned Qwen2.5-7B-Instruct with QLoRA (rank=16, 4-bit NF4) on 29K tool-calling examples.',
      'Rebuilt the public data pipeline to a documented 29,647-example split and kept the BFCL-aligned harness inspectable in-repo.',
      'Served via vLLM OpenAI-compatible endpoint, plugs directly into stage-pilot middleware.',
      '108 tests plus repo-local release-status artifacts keep external Kaggle and Hugging Face blockers explicit.',
    ],
    proofNote:
      'The strongest public proof is the training pipeline, BFCL-aligned harness, and checked-in release-status ledger. Kaggle and Hugging Face publication remain separately tracked because third-party credentials and recoverable model weights are still required.',
    tech: ['Python', 'PyTorch', 'PEFT/QLoRA', 'BFCL', 'Kaggle T4', 'vLLM', 'Hugging Face', 'W&B'],
    links: {
      github: 'https://github.com/KIM3310/tool-call-finetune-lab',
      proof: 'https://github.com/KIM3310/tool-call-finetune-lab/blob/main/results/public_release_status.md',
    },
  },
  // --- Data Platform + AI ---
  {
    title: 'Nexus-Hive — Multi-Agent NL-to-SQL Copilot',
    category: 'AI Engineer / Data Platform',
    role: 'Governed NL-to-SQL with multi-warehouse support (Snowflake, Databricks)',
    achievements: [
      'Three-agent pipeline (Translator → Executor → Visualizer) with retry and heuristic fallback.',
      'Policy engine enforces deny/review/allow decisions with full audit trail.',
      'Multi-warehouse adapters: SQLite for demos, Snowflake and Databricks for production.',
      '166 tests covering agent orchestration, policy enforcement, and multi-warehouse adapters.',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'Snowflake', 'Databricks', 'Chart.js'],
    links: { github: 'https://github.com/KIM3310/Nexus-Hive', demo: 'https://nexus-hive.pages.dev' },
  },
  // --- Solution Architect ---
  {
    title: 'Enterprise LLM Adoption Kit',
    category: 'Solution Architect / Enterprise Governance',
    role: 'End-to-end enterprise LLM governance with RBAC, evals, and multi-cloud integration',
    achievements: [
      'RBAC at retrieval time, prompt injection detection, PII redaction, and audit logging.',
      'Evals harness with baseline diffs, Prometheus LLMOps metrics (latency, tokens, cost).',
      'Snowflake + Databricks integration for eval persistence and MLflow experiment tracking.',
      '240 tests covering RBAC, PII redaction, RAG retrieval, and eval harness pipelines.',
    ],
    tech: ['Python', 'FastAPI', 'RBAC', 'PII', 'RAG', 'Snowflake', 'Databricks', 'Chroma', 'AWS Bedrock'],
    links: { github: 'https://github.com/KIM3310/enterprise-llm-adoption-kit' },
  },
  // --- Data Engineering ---
  {
    title: 'Lakehouse Contract Lab',
    category: 'Data Engineer / Data Platform',
    role: 'Spark + Delta Lake medallion pipeline with contract-driven quality gates',
    achievements: [
      'Full medallion pipeline (Bronze → Silver → Gold) with explicit data contracts at each boundary.',
      'Quality gates enforce schema validation, null checks, range constraints, and deduplication.',
      'Multi-cloud export: Snowflake (MERGE upserts), Databricks Unity Catalog, AWS S3.',
      '81 tests covering medallion pipeline stages, contract validation, and multi-cloud exports.',
    ],
    tech: ['Python', 'PySpark', 'Delta Lake', 'Snowflake', 'Databricks', 'Terraform'],
    links: { github: 'https://github.com/KIM3310/lakehouse-contract-lab' },
  },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    title: 'NW Service Assurance Workbench',
    focus: 'Telecom-style network assurance surface with outage triage, E2E service visibility, and AX-ready operator runbooks',
    github: 'https://github.com/KIM3310/nw-service-assurance-workbench',
    demo: NW_SERVICE_ASSURANCE_URL,
    note: 'Targeted live surface for telecom / NOC / infrastructure operations loops',
  },
  {
    title: 'Security Threat Response Workbench',
    focus: 'Cloud security response workbench for WAF, IDS, DDoS triage, shift handoff, and Python/Bash analyst automation',
    github: 'https://github.com/KIM3310/security-threat-response-workbench',
    demo: SECURITY_THREAT_RESPONSE_URL,
    note: 'Targeted live surface for SOC / cloud security / threat-response loops',
  },
  { title: 'Fab-Ops Yield Control Tower', focus: 'Semiconductor ops platform with dual-domain architecture, signed handoff, and release gates (112 tests)', github: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
  { title: 'secure-xl2hwp-local', focus: 'Air-gapped data pipeline with SpecKit contracts, CoT processing, and signed exports (97 tests)', github: 'https://github.com/KIM3310/secure-xl2hwp-local' },
  { title: 'ogx', focus: 'Multi-agent CLI orchestration with task graphs, MCP tools, and tmux HUD (152 tests)', github: 'https://github.com/KIM3310/ogx' },
  { title: 'TwinCity UI', focus: 'Digital-twin operational dashboard with Next.js 16, React 19, and TypeScript (140 tests)', github: 'https://github.com/KIM3310/twincity-ui', demo: 'https://twincity-ui-app-811356341663.asia-northeast3.run.app' },
  { title: 'the-savior', focus: 'Node.js automation toolkit with Biome linting and structured task runners (86 tests)', github: 'https://github.com/KIM3310/the-savior' },
  { title: 'Quantum Workbench', focus: 'Multi-backend quantum computing: Qiskit, Amazon Braket, real IBM hardware verification (65 tests)', github: QUANTUM_WORKFLOW_URL },
  { title: 'Aegis-Air (archived)', focus: 'Air-gapped incident review engine — predecessor to AegisOps (79 tests)', github: 'https://github.com/KIM3310/Aegis-Air', demo: 'https://aegis-air.pages.dev' },
  { title: 'The Logistics Prophet (archived)', focus: 'ML logistics control tower with SHAP explainability and RDF ontology (112 tests)', github: 'https://github.com/KIM3310/the-logistics-prophet', demo: 'https://the-logistics-prophet.pages.dev' },
  { title: 'Finance Review Platform (archived)', focus: 'Domain-driven finance platform: quant signals, risk posture, advisory review (43 tests)', github: 'https://github.com/KIM3310/signal-risk-lab', demo: 'https://kim3310.github.io/signal-risk-lab/' },
  { title: 'SteadyTap', focus: 'Swift/SwiftUI mobile app with Python FastAPI backend (12 tests)', github: 'https://github.com/KIM3310/SteadyTap' },
  { title: 'beaver-study-orchestrator', focus: 'Study workflow orchestration with Python FastAPI (40 tests)', github: 'https://github.com/KIM3310/beaver-study-orchestrator' },
  { title: 'dream-interpretation-pages', focus: 'TypeScript + Vite app deployed on Cloudflare Pages (build pass)', github: 'https://github.com/KIM3310/dream-interpretation-pages' },
  { title: 'dv-regression-lab', focus: 'Data validation and regression testing platform with Python FastAPI (31 tests)', github: 'https://github.com/KIM3310/dv-regression-lab' },
  { title: 'ecotide', focus: 'Swift/SwiftUI app with Capacitor cross-platform support (build pass)', github: 'https://github.com/KIM3310/ecotide' },
  { title: 'kbbq-idle-unity', focus: 'Unity/C# idle game with Python FastAPI backend (9 tests)', github: 'https://github.com/KIM3310/kbbq-idle-unity' },
];

export const PORTFOLIO_TRUTH_LEDGER: RepoTruthEntry[] = [
  {
    name: 'StagePilot',
    lane: 'Featured',
    repoUrl: 'https://github.com/KIM3310/stage-pilot',
    homepageUrl: PRIMARY_PROOF_URL,
    statusBadges: ['public', 'featured'],
    truth: 'Primary public proof for tool-calling reliability and runtime hardening.',
    reviewUse: 'Lead with benchmarked middleware and inspectable runtime APIs.',
  },
  {
    name: 'AegisOps',
    lane: 'Featured',
    repoUrl: 'https://github.com/KIM3310/AegisOps',
    homepageUrl: 'https://aegisops-ai-incident-doctor.pages.dev',
    statusBadges: ['public', 'featured'],
    truth: 'Shows multimodal incident workflows and operator-facing delivery artifacts.',
    reviewUse: 'Use for incident intelligence, replay-eval posture, and delivery controls.',
  },
  {
    name: 'tool-call-finetune-lab',
    lane: 'Featured',
    repoUrl: 'https://github.com/KIM3310/tool-call-finetune-lab',
    statusBadges: ['public', 'featured'],
    truth: 'Strongest public proof is the post-training pipeline, BFCL-aligned harness, and repo-local release-status ledger rather than a fully public benchmark artifact.',
    reviewUse: 'Use as support evidence for LLM post-training, eval harness design, and runtime-quality experiments.',
  },
  {
    name: 'enterprise-llm-adoption-kit',
    lane: 'Featured',
    repoUrl: 'https://github.com/KIM3310/enterprise-llm-adoption-kit',
    statusBadges: ['public', 'featured'],
    truth: 'Shows enterprise governance controls, eval persistence, and rollout framing more clearly than generic RAG demos.',
    reviewUse: 'Use for enterprise AI governance, rollout readiness, and platform-architecture discussions.',
  },
  {
    name: 'lakehouse-contract-lab',
    lane: 'Featured',
    repoUrl: 'https://github.com/KIM3310/lakehouse-contract-lab',
    statusBadges: ['public', 'featured'],
    truth: 'Makes medallion and contract-driven data quality visible in reviewer-readable form.',
    reviewUse: 'Use for Snowflake, Databricks, and lakehouse architecture conversations.',
  },
  {
    name: 'Nexus-Hive',
    lane: 'Featured',
    repoUrl: 'https://github.com/KIM3310/Nexus-Hive',
    homepageUrl: 'https://nexus-hive.pages.dev',
    statusBadges: ['public', 'featured'],
    truth: 'Governed analytics surface with live adapters and NL-to-SQL policy framing.',
    reviewUse: 'Use for BI copilot, policy guardrails, and warehouse readiness.',
  },
  {
    name: 'regulated-case-workbench',
    lane: 'Support',
    homepageUrl: 'https://regulated-case-workbench.pages.dev',
    statusBadges: ['private', 'support'],
    truth: 'Shown selectively because the workflow is stronger than the public marketing signal.',
    reviewUse: 'Reference for regulated approvals, case review, and export manifests.',
  },
  {
    name: 'nw-service-assurance-workbench',
    lane: 'Support',
    repoUrl: 'https://github.com/KIM3310/nw-service-assurance-workbench',
    homepageUrl: NW_SERVICE_ASSURANCE_URL,
    statusBadges: ['public', 'support', 'review-only-live'],
    truth: 'Bounded telecom operations surface for outage response, service visibility, and reviewer-safe assurance storytelling.',
    reviewUse: 'Reference for telecom, NOC, infrastructure assurance, and operator-facing runbook discussions.',
  },
  {
    name: 'security-threat-response-workbench',
    lane: 'Support',
    repoUrl: 'https://github.com/KIM3310/security-threat-response-workbench',
    homepageUrl: SECURITY_THREAT_RESPONSE_URL,
    statusBadges: ['public', 'support', 'review-only-live'],
    truth: 'Bounded cloud security response surface for WAF, IDS, DDoS triage, analyst handoff, and deterministic evidence packs.',
    reviewUse: 'Reference for SOC, cloud threat response, and shift-ready security workflow conversations.',
  },
  {
    name: 'TwinCity UI',
    lane: 'Historical',
    repoUrl: 'https://github.com/KIM3310/twincity-ui',
    homepageUrl: 'https://twincity-ui-app-811356341663.asia-northeast3.run.app',
    statusBadges: ['archived', 'historical'],
    truth: 'Kept as a historical digital-twin surface rather than an active flagship project.',
    reviewUse: 'Use only when asked about UI reliability or archived operational surfaces.',
  },
  {
    name: 'Honeypot',
    lane: 'Historical',
    homepageUrl: 'https://honeypot-3st.pages.dev',
    statusBadges: ['fork', 'historical'],
    truth: 'Forked repo retained for implementation evidence, not as a primary portfolio claim.',
    reviewUse: 'Mention only when discussing inherited systems or extension work.',
  },
  {
    name: 'signal-risk-lab',
    lane: 'Historical',
    repoUrl: 'https://github.com/KIM3310/signal-risk-lab',
    homepageUrl: 'https://signal-risk-lab.pages.dev',
    statusBadges: ['archived', 'historical'],
    truth: 'Archived finance review lineage remains public as a historical reference point.',
    reviewUse: 'Treat as lineage evidence, not a current flagship system.',
  },
];

export const EXPERIENCE: Experience[] = [
  { company: 'Microsoft AI School 8기', role: 'Trainee', period: '2025.09 - 2026.02', description: ['AI/클라우드/데이터 분석 교육 이수', 'RAG, incident operations, real-time ops 중심의 팀 프로젝트 수행'] },
  {
    company: 'ATOM TECH SOLUTIONS LTD',
    role: 'Full Stack Intern (Remote)',
    location: '미국 캘리포니아 버클리',
    period: '2025.06 - 2025.09',
    description: [
      '기존 리뷰 플랫폼에서 Node.js / Express 기반 기능 개발과 OpenAI 기반 문의 챗봇 연동 수행',
      '서버 측 환경설정, 인증 정보, 요청·응답 예외 처리, 외부 API 연동 흐름을 정리해 운영 안정성 보강',
      '로그 기반 오류 분석과 프론트엔드-백엔드 연동 이슈 수정, 배포 전 품질 점검 대응',
      '미국 팀과 비동기 협업하며 요구사항 반영, 수정 대응, 기능 전달 흐름 지원',
    ],
  },
  { company: '대한민국 국방부', role: 'Strategic Backbone Network & Security Team Lead', period: '2023.11 - 2025.05', description: ['지휘통신망 24/7 운영, 네트워크 인프라/보안 관리', '분대장 팀 운영 및 리더십 경험'] },
];

export const CERTIFICATIONS: Certification[] = [
  /* --- Highlight tier --- */
  { issuer: 'Snowflake', name: 'SnowPro Associate: Platform Certification' },
  { issuer: 'Databricks', name: 'AWS Databricks Platform Architect' },
  { issuer: 'Palantir', name: 'Foundry Data Engineer Associate' },
  { issuer: 'Datadog', name: 'Datadog Observability Certifications' },
  /* --- Supporting --- */
  { issuer: 'Databricks', name: 'GCP Databricks Platform Architect' },
  { issuer: 'Palantir', name: 'Foundry Foundations' },
  { issuer: 'Microsoft', name: 'AI-900: Microsoft Azure AI Fundamentals' },
  { issuer: 'Databricks', name: 'Databricks Fundamentals' },
  { issuer: 'IBM', name: 'IBM Artificial Intelligence Fundamentals' },
  { issuer: 'IBM', name: 'IBM Cloud Computing Fundamentals' },
  { issuer: 'IBM', name: 'IBM Cyber Security Fundamentals' },
  { issuer: 'SAP', name: 'SAP Cloud Platform Integration Service' },
];

export const PORTFOLIO_RUNTIME_META = [
  { label: 'Scope', value: '6 flagship systems + 17 extended projects across 24 repos' },
  { label: 'Stack', value: 'React 19 + Vite 6' },
  { label: 'Focus', value: 'AI Reliability / Data Platform / Enterprise Governance / Operational Infrastructure' },
  { label: 'Tests', value: '3,500+ tests across 24 repos' },
  { label: 'Public Proof', value: 'Public repos + npm package + live demos; private depth shared selectively' },
  { label: 'Credential Proof', value: 'Badge summary public; issuer verification shared on request' },
  { label: 'Portfolio URL', value: 'kim3310.github.io/doeon-kim-portfolio' },
];

export const PORTFOLIO_VERIFICATION_OVERVIEW: VerificationOverviewEntry[] = [
  {
    label: 'Verified baseline',
    value: '2026-03-30',
    detail: 'Flagship public proof, selective private depth, and targeted operator-facing live surfaces were rerun from local clean bootstraps and redeployed where needed.',
  },
  {
    label: 'Repos green',
    value: '13',
    detail: 'Six flagship public systems, five selective private-depth workbenches, and two targeted live role-fit surfaces are locally verified.',
  },
  {
    label: 'Setup risk removed',
    value: 'Self-healing bootstraps',
    detail: 'Python-heavy repos rebuild stale virtual environments instead of silently reusing broken ones.',
  },
  {
    label: 'Source of truth',
    value: 'Cross-repo ledger',
    detail: 'Public proof, env-gated boundaries, residual risks, and repo-specific release blockers are tracked explicitly instead of being implied away.',
  },
];

export const VERIFIED_REPO_SNAPSHOTS: VerificationSnapshotEntry[] = [
  {
    repo: 'stage-pilot',
    lane: 'Flagship',
    href: 'https://github.com/KIM3310/stage-pilot',
    command: 'npm run verify',
    proof: '186 test files / 1,720 tests plus package and DTS build',
    boundary: 'Provider-backed integrations remain optional and env-gated',
  },
  {
    repo: 'AegisOps',
    lane: 'Flagship',
    href: 'https://github.com/KIM3310/AegisOps',
    command: 'npm run verify',
    proof: 'tests, replay evals, review-surface smoke, production build',
    boundary: 'Live cloud connectors depend on credentials and vendor uptime',
  },
  {
    repo: 'Nexus-Hive',
    lane: 'Flagship',
    href: 'https://github.com/KIM3310/Nexus-Hive',
    command: 'make verify',
    proof: 'clean Python 3.11 bootstrap and warehouse adapter test coverage',
    boundary: 'Live Snowflake and Databricks access still requires tenant auth',
  },
  {
    repo: 'enterprise-llm-adoption-kit',
    lane: 'Flagship',
    href: 'https://github.com/KIM3310/enterprise-llm-adoption-kit',
    command: 'make verify',
    proof: 'backend tests, frontend build, smoke path, coverage',
    boundary: 'Bedrock and warehouse persistence remain credential-gated',
  },
  {
    repo: 'lakehouse-contract-lab',
    lane: 'Flagship',
    href: 'https://github.com/KIM3310/lakehouse-contract-lab',
    command: 'make verify',
    proof: 'clean Python 3.11 bootstrap, tests, lint, build, smoke',
    boundary: 'Hosted warehouse export proof depends on external tenants',
  },
  {
    repo: 'tool-call-finetune-lab',
    lane: 'Flagship',
    href: 'https://github.com/KIM3310/tool-call-finetune-lab',
    command: 'make verify + make data',
    proof: 'pytest plus Ruff, rebuilt 29,647-example split, and repo-local release-status artifacts',
    boundary: 'Kaggle and Hugging Face publication still depend on valid third-party credentials and recoverable model weights',
  },
  {
    repo: 'memory-test-master-change-gate',
    lane: 'Selective',
    command: 'make verify',
    proof: 'Ruff, mypy, 26 pytest cases',
    boundary: 'Foundry sync is still env-gated',
  },
  {
    repo: 'ops-reliability-workbench',
    lane: 'Selective',
    command: 'make verify',
    proof: 'Ruff, mypy, 28 pytest cases',
    boundary: 'Optional OpenAI assist remains off by default and env-gated',
  },
  {
    repo: 'regulated-case-workbench',
    lane: 'Selective',
    href: 'https://regulated-case-workbench.pages.dev',
    command: 'make verify',
    proof: 'backend tests, frontend syntax checks, runtime scorecard validation',
    boundary: 'Cases stay synthetic and the public live lane is intentionally capped',
  },
  {
    repo: 'retina-scan-ai',
    lane: 'Selective',
    command: 'make verify',
    proof: '392 pytest cases, validation artifact generation, smoke path',
    boundary: 'Synthetic engineering validation is not clinical or regulatory evidence',
  },
  {
    repo: 'Upstage-DocuAgent',
    lane: 'Selective',
    command: 'make verify',
    proof: 'pytest, Ruff, format checks, smoke validation',
    boundary: 'Provider-backed Upstage, Ollama, and GCP paths require local setup',
  },
  {
    repo: 'nw-service-assurance-workbench',
    lane: 'Selective',
    href: 'https://github.com/KIM3310/nw-service-assurance-workbench',
    command: 'npm run verify + npm run cf:deploy:dry',
    proof: 'tests, typecheck, production build, and Cloudflare asset packaging',
    boundary: 'Traffic, alarms, and operator notes are synthetic and intentionally reviewer-safe',
  },
  {
    repo: 'security-threat-response-workbench',
    lane: 'Selective',
    href: 'https://github.com/KIM3310/security-threat-response-workbench',
    command: 'npm run verify + npm run cf:deploy:dry',
    proof: 'tests, typecheck, Python/Bash snapshot verification, production build, and Cloudflare asset packaging',
    boundary: 'WAF, IDS, and DDoS evidence is synthetic and intentionally bounded to reviewer-safe scenarios',
  },
];

export const RESIDUAL_RISKS: ResidualRiskEntry[] = [
  {
    title: 'Cloud tenancy and credentials',
    detail: 'Live platform proofs remain real, but they still depend on credentials, tenant state, and vendor uptime.',
  },
  {
    title: 'Selective disclosure boundaries',
    detail: 'High-trust private workbenches intentionally hide tenant labels and operational identifiers, so they should be shared selectively or via public-lite variants.',
  },
  {
    title: 'Synthetic evidence boundaries',
    detail: 'Medical, regulated, and incident-review demos use reviewer-safe data and must not be presented as customer production evidence.',
  },
  {
    title: 'Credential deep links',
    detail: 'Badges stay public, while issuer verification URLs and IDs remain in targeted application packets because those deep links can change.',
  },
  {
    title: 'Third-party publish gates',
    detail: 'Some repos are public-ready locally but still need valid vendor credentials or recoverable artifacts before external publication can be re-established.',
  },
];
