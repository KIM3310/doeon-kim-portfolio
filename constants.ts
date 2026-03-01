import {
  Project,
  Experience,
  SkillCategory,
  Certification,
  Profile,
  SecondaryProject,
  RepoTruthEntry,
} from './types';

export const PROFILE: Profile = {
  name: '김도언 (Doeon Kim)',
  title: 'AI Systems Engineer | Reliability, Reviewability, Delivery',
  email: 'ehdjs1351@gmail.com',
  github: 'https://github.com/KIM3310',
  linkedin: 'https://www.linkedin.com/in/doeon-kim-4742a2388',
  catchphrase: 'Reliable AI systems — from tool-calling middleware to governed data platforms',
  intro:
    'I build production-grade AI systems with a focus on reliability, governance, and multi-cloud data platform integration. Core expertise spans tool-calling middleware (25% → 90% benchmark lift, npm published), LLM fine-tuning (QLoRA + BFCL evaluation), governed NL-to-SQL with Snowflake and Databricks adapters, enterprise LLM adoption with RBAC and audit trails, and lakehouse pipelines with contract-driven quality gates. 2,000+ tests across the portfolio.',
};

export const PORTFOLIO_LIVE_URL = 'https://kim3310.github.io/doeon-kim-portfolio/';
export const PORTFOLIO_REPO_URL = 'https://github.com/KIM3310/doeon-kim-portfolio';

export const FEATURED_CASE_URL = 'fabpilot-live-x.html';
export const DOSSIER_URL = 'fabpilot-dossier.html';
export const PRIMARY_PROOF_URL = 'https://stage-pilot.pages.dev';
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
      '1,713 tests, codecov integration, multi-cloud deployment (GCP Cloud Run, K8s, Vercel, Cloudflare).',
    ],
    tech: ['TypeScript', 'AI SDK', 'Zod', 'OpenTelemetry', 'Prometheus', 'Kubernetes'],
    links: { demo: PRIMARY_PROOF_URL, github: 'https://github.com/KIM3310/stage-pilot', youtube: 'https://youtu.be/6trgTH1vX4M' },
  },
  {
    title: 'Tool-Call Fine-Tune Lab',
    category: 'AI Engineer / LLM Fine-Tuning',
    role: 'QLoRA fine-tuning of Qwen2.5-7B for tool-calling, evaluated against BFCL benchmark',
    achievements: [
      'Fine-tuned Qwen2.5-7B-Instruct with QLoRA (rank=16, 4-bit NF4) on 29K tool-calling examples.',
      'Evaluated against Berkeley Function-Calling Leaderboard — community benchmark, not self-built eval.',
      'Served via vLLM OpenAI-compatible endpoint, plugs directly into stage-pilot middleware.',
    ],
    tech: ['Python', 'PyTorch', 'PEFT/QLoRA', 'vLLM', 'HuggingFace', 'W&B'],
    links: { github: 'https://github.com/KIM3310/tool-call-finetune-lab' },
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
    ],
    tech: ['Python', 'LangGraph', 'FastAPI', 'Snowflake', 'Databricks', 'Chart.js'],
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
    ],
    tech: ['Python', 'FastAPI', 'React', 'Chroma', 'AWS Bedrock', 'Snowflake', 'Databricks'],
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
    ],
    tech: ['Python', 'PySpark', 'Delta Lake', 'Snowflake', 'Databricks', 'Terraform'],
    links: { github: 'https://github.com/KIM3310/lakehouse-contract-lab' },
  },
  // --- Supporting ---
  {
    title: 'AegisOps — Multimodal Incident Analysis',
    category: 'AI Engineer / SRE',
    role: 'Multimodal incident analysis with replay evals and structured postmortems',
    achievements: [
      'Combines logs and screenshots into structured RCA with severity classification.',
      'Replay evaluation framework: 4 scenarios, 32 rubric checks, automated regression.',
      'Live demo on Cloudflare Pages with demo mode (no API keys required).',
    ],
    tech: ['TypeScript', 'React', 'Gemini', 'Express', 'GCP (GCS, BigQuery)'],
    links: { demo: 'https://aegisops-ai-incident-doctor.pages.dev', github: 'https://github.com/KIM3310/AegisOps', youtube: 'https://www.youtube.com/watch?v=FOcjPcMheIg' },
  },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  { title: 'Fab-Ops Yield Control Tower', focus: 'Semiconductor ops platform with dual-domain architecture, signed handoff, and release gates', github: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
  { title: 'secure-xl2hwp-local', focus: 'Air-gapped data pipeline with SpecKit contracts, CoT processing, and signed exports', github: 'https://github.com/KIM3310/secure-xl2hwp-local' },
  { title: 'oh-my-gemini (ogx, archived)', focus: 'Multi-agent CLI orchestration with task graphs, MCP tools, and tmux HUD', github: 'https://github.com/KIM3310/ogx' },
  { title: 'Aegis-Air (archived)', focus: 'Air-gapped incident review engine — predecessor to AegisOps', github: 'https://github.com/KIM3310/Aegis-Air', demo: 'https://aegis-air.pages.dev' },
  { title: 'Quantum Workbench', focus: 'Multi-backend quantum computing: Qiskit, Braket, real IBM hardware verification', github: QUANTUM_WORKFLOW_URL },
  { title: 'The Logistics Prophet (archived)', focus: 'ML logistics control tower with SHAP explainability and RDF ontology', github: 'https://github.com/KIM3310/the-logistics-prophet', demo: 'https://the-logistics-prophet.pages.dev' },
  { title: 'Finance Review Platform (archived)', focus: 'Domain-driven finance platform: quant signals, risk posture, advisory review', github: 'https://github.com/KIM3310/signal-risk-lab', demo: 'https://kim3310.github.io/signal-risk-lab/' },
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
    repoUrl: 'https://github.com/KIM3310/regulated-case-workbench',
    homepageUrl: 'https://regulated-case-workbench.pages.dev',
    statusBadges: ['private', 'support'],
    truth: 'Shown selectively because the workflow is stronger than the public marketing signal.',
    reviewUse: 'Reference for regulated approvals, case review, and export manifests.',
  },
  {
    name: 'TwinCity UI',
    lane: 'Historical',
    repoUrl: 'https://github.com/KIM3310/twincity-ui',
    homepageUrl: 'https://twincity-ui.pages.dev',
    statusBadges: ['archived', 'historical'],
    truth: 'Kept as a historical digital-twin surface rather than an active flagship project.',
    reviewUse: 'Use only when asked about UI reliability or archived operational surfaces.',
  },
  {
    name: 'Honeypot',
    lane: 'Historical',
    repoUrl: 'https://github.com/KIM3310/honeypot',
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
  { company: 'ATOM TECH SOLUTIONS LTD', role: 'Full Stack Intern (Remote)', location: '미국 캘리포니아 버클리', period: '2025.06 - 2025.09', description: ['기존 리뷰 플랫폼에 OpenAI API 기반 문의 챗봇 통합', '풀스택 유지보수 및 기능 개선'] },
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
  { label: 'Scope', value: '6 flagship systems + 7 extended projects' },
  { label: 'Stack', value: 'React 19 + Vite 6' },
  { label: 'Focus', value: 'AI Reliability / Data Platform / Enterprise Governance' },
  { label: 'Tests', value: '2,000+ tests across portfolio' },
  { label: 'Public Proof', value: 'Public repos + npm package + live demos' },
  { label: 'Portfolio URL', value: 'kim3310.github.io/doeon-kim-portfolio' },
];
