import {
  Project,
  Experience,
  SkillCategory,
  Certification,
  Profile,
  SecondaryProject,
  UpgradeTrack,
  FocusPath,
  TargetTrack,
  RepoCluster,
  ExtendedProofCluster,
  RecruiterStep,
  RecruiterQuickPath,
  SubmissionReadinessTrack,
  ApplicationPacket,
  LiveProofTrack,
  VerificationLiveCheck,
  DeploymentCheck,
  RepoOperatingEntry,
} from './types';

export const PROFILE: Profile = {
  name: '김도언 (Doeon Kim)',
  title: 'AI Systems Engineer | Reliability, Evaluation, Runtime Delivery',
  email: 'ehdjs1351@gmail.com',
  github: 'https://github.com/KIM3310',
  linkedin: 'https://www.linkedin.com/in/doeon-kim-4742a2388',
  catchphrase: 'Production-minded AI systems with clear proof surfaces',
  intro:
    'I build production-minded AI systems, governed delivery workflows, and operational software that are easy to review. StagePilot (25% to 90% on 40-case expanded suite) is the clearest reliability surface, while AegisOps, Enterprise LLM Adoption Kit, Nexus-Hive, regulated-case-workbench, and an archived ops case study show how the same engineering posture carries into incident response, rollout design, analytics, and high-trust workflows. 2,050 tests across the portfolio.',
};

export const PORTFOLIO_LIVE_URL = 'https://kim3310.github.io/doeon-kim-portfolio/';
export const PORTFOLIO_REPO_URL = 'https://github.com/KIM3310/doeon-kim-portfolio';
export const PORTFOLIO_DISCUSSIONS_URL = 'https://github.com/KIM3310/doeon-kim-portfolio/discussions';
export const PORTFOLIO_QA_URL = PROFILE.linkedin;
export const PORTFOLIO_IDEAS_URL = `mailto:${PROFILE.email}?subject=Portfolio%20Ideas`;
export const PORTFOLIO_FEEDBACK_ISSUE_URL = 'https://github.com/KIM3310/doeon-kim-portfolio/issues/new';
export const PORTFOLIO_GISCUS_REPO = 'KIM3310/doeon-kim-portfolio';
export const PORTFOLIO_GISCUS_REPO_ID = 'R_kgDOROWHZg';
export const PORTFOLIO_GISCUS_CATEGORY = 'Q&A';
export const PORTFOLIO_GISCUS_CATEGORY_ID = 'DIC_kwDOROWHZs4C3zga';

export const FLAGSHIP_URL = 'fabpilot-live-x.html';
export const DOSSIER_URL = 'fabpilot-dossier.html';
export const PRIMARY_PROOF_URL = 'https://stage-pilot.pages.dev';
export const QUANTUM_WORKFLOW_URL = 'https://github.com/KIM3310/quantum-workbench';
export const RESUME_PDF_URL = 'resume/Doeon_Kim_Resume_LLM_Systems_Engineer.pdf';
export const SOLUTION_ARCHITECT_RESUME_PDF_URL = 'resume/Doeon_Kim_Resume_Microsoft_Solution_Architect.pdf';
export const FRONTIER_LLM_BRIEF_URL = 'briefs/frontier-llm-review-brief.html';
export const BIG_TECH_SYSTEMS_BRIEF_URL = 'briefs/big-tech-systems-review-brief.html';
export const SNOWFLAKE_BRIEF_URL = 'briefs/snowflake-review-brief.html';
export const DATABRICKS_BRIEF_URL = 'briefs/databricks-review-brief.html';
export const PALANTIR_BRIEF_URL = 'briefs/palantir-review-brief.html';
export const BROKERAGE_BRIEF_URL = 'briefs/brokerage-review-brief.html';
export const QUANT_BRIEF_URL = 'briefs/quant-review-brief.html';
export const FRONTIER_INTERVIEW_PACK_URL = 'briefs/frontier-llm-interview-pack.html';
export const BIG_TECH_WALKTHROUGH_URL = 'briefs/big-tech-systems-walkthrough.html';
export const DATA_PLATFORM_ARCHITECTURE_PACK_URL = 'briefs/data-platform-architecture-pack.html';
export const FRONTIER_APPLICATION_PACKET_URL = 'briefs/frontier-llm-application-packet.html';
export const BIG_TECH_APPLICATION_PACKET_URL = 'briefs/big-tech-systems-application-packet.html';
export const DATA_PLATFORM_APPLICATION_PACKET_URL = 'briefs/data-platform-application-packet.html';
export const PALANTIR_APPLICATION_PACKET_URL = 'briefs/palantir-application-packet.html';
export const BROKERAGE_APPLICATION_PACKET_URL = 'briefs/brokerage-application-packet.html';
export const QUANT_APPLICATION_PACKET_URL = 'briefs/quant-application-packet.html';

export const PORTFOLIO_SIGNAL_DECK = [
  {
    label: 'Primary proof',
    value: 'StagePilot',
    detail: 'Expanded 40-case benchmark suite (13 edge cases including adversarial, unicode, oversized payloads) lifted from 25% baseline to 90% with middleware and bounded retry.',
  },
  {
    label: 'Applied system',
    value: 'AegisOps',
    detail: 'Shows how the same reliability thinking extends into incident review, handoff, and operational software instead of stopping at benchmark charts.',
  },
  {
    label: 'Supporting proof',
    value: 'Quantum Workbench + Enterprise Kit + Nexus-Hive',
    detail: 'Quantum workflow proof, governed rollout, and analytics trust make the main reliability claim believable outside a single runtime demo.',
  },
  {
    label: 'Hiring Signal',
    value: 'AI engineer + solutions architect',
    detail: 'Evidence comes first, then applied systems that show how reliable automation turns into delivery, operations, and platform software.',
  },
];

export const PORTFOLIO_ACTIONS = [
  { label: 'Open StagePilot Proof', href: PRIMARY_PROOF_URL, helper: 'Start from the benchmarked reliability surface and inspect the proof path first.' },
  { label: 'Open AegisOps System', href: 'https://aegisops-ai-incident-doctor.pages.dev', helper: 'Then inspect how the same reliability mindset maps into a structured incident system.' },
  { label: 'Open Data Platform Track', href: DATA_PLATFORM_ARCHITECTURE_PACK_URL, helper: 'Review how the same engineering posture carries into governed delivery and data-platform systems.' },
  { label: 'Download Resume', href: RESUME_PDF_URL, helper: 'Get the LLM systems resume aligned to reliability, reviewability, and runtime delivery.' },
];

export const RECRUITER_90_SECOND_STEPS: RecruiterStep[] = [
  {
    window: '00-20 sec',
    title: 'Read the main claim',
    detail: 'Confirm this is a reliability-first LLM systems portfolio, not a flat collection of demos.',
    label: 'Jump to hero proof',
    href: '#main-content',
  },
  {
    window: '20-45 sec',
    title: 'Inspect the benchmark proof',
    detail: 'StagePilot shows the strongest public evidence: checked-in lift, parser recovery, and bounded retry.',
    label: 'Open StagePilot proof',
    href: PRIMARY_PROOF_URL,
  },
  {
    window: '45-70 sec',
    title: 'Inspect the applied system',
    detail: 'AegisOps and the archived ops case study show how the same reliability mindset survives incident review, handoff, and approval-heavy product workflows.',
    label: 'Open AegisOps',
    href: 'https://aegisops-ai-incident-doctor.pages.dev',
  },
  {
    window: '70-90 sec',
    title: 'Choose the right supporting cluster',
    detail: 'Use the recruiter quick paths below to jump straight to the systems that match your org.',
    label: 'Open quick paths',
    href: '#recruiter-mode',
  },
];

export const RECRUITER_QUICK_PATHS: RecruiterQuickPath[] = [
  {
    title: 'Frontier LLM',
    audience: 'OpenAI / Anthropic / runtime-evals teams',
    outcome: 'Tool reliability, evaluator discipline, and agent runtime posture should be obvious in three clicks.',
    links: [
      { label: 'Frontier application packet', href: FRONTIER_APPLICATION_PACKET_URL },
      { label: 'Frontier interview pack', href: FRONTIER_INTERVIEW_PACK_URL },
      { label: 'Frontier brief', href: FRONTIER_LLM_BRIEF_URL },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
      { label: 'ogx repo', href: 'https://github.com/KIM3310/ogx' },
    ],
  },
  {
    title: 'Big Tech Systems',
    audience: 'Google / Meta / Amazon / Microsoft-style product and SRE orgs',
    outcome: 'Defensive engineering, stateful operator UX, and service-grade surfaces should read clearly.',
    links: [
      { label: 'Big-tech application packet', href: BIG_TECH_APPLICATION_PACKET_URL },
      { label: 'Big-tech walkthrough', href: BIG_TECH_WALKTHROUGH_URL },
      { label: 'Big-tech brief', href: BIG_TECH_SYSTEMS_BRIEF_URL },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
      { label: 'TwinCity UI repo', href: 'https://github.com/KIM3310/twincity-ui' },
    ],
  },
  {
    title: 'Quantum Systems',
    audience: 'Quantum software · scientific compute · runtime product teams',
    outcome: 'Real IBM hardware proof, local-backend comparison, and chemistry mini-workflow should read as one backend product story.',
    links: [
      { label: 'Quantum Workflow Lab repo', href: QUANTUM_WORKFLOW_URL },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
    ],
  },
  {
    title: 'Governed Analytics',
    audience: 'Governed analytics and warehouse-adjacent teams',
    outcome: 'Analytics trust, governed delivery, and auditable operator handoff should show up immediately.',
    links: [
      { label: 'Data-platform application packet', href: DATA_PLATFORM_APPLICATION_PACKET_URL },
      { label: 'Data-platform pack', href: DATA_PLATFORM_ARCHITECTURE_PACK_URL },
      { label: 'Governed analytics brief', href: SNOWFLAKE_BRIEF_URL },
      { label: 'Nexus-Hive repo', href: 'https://github.com/KIM3310/Nexus-Hive' },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
      { label: 'The Logistics Prophet', href: 'https://the-logistics-prophet.pages.dev' },
    ],
  },
  {
    title: 'Lakehouse Delivery',
    audience: 'Data + ML platform teams',
    outcome: 'Pipelines, experimentation, explainability, and operational decision layers should be visible fast.',
    links: [
      { label: 'Data-platform application packet', href: DATA_PLATFORM_APPLICATION_PACKET_URL },
      { label: 'Data-platform pack', href: DATA_PLATFORM_ARCHITECTURE_PACK_URL },
      { label: 'Lakehouse delivery brief', href: DATABRICKS_BRIEF_URL },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
      { label: 'The Logistics Prophet', href: 'https://the-logistics-prophet.pages.dev' },
      { label: 'Nexus-Hive repo', href: 'https://github.com/KIM3310/Nexus-Hive' },
    ],
  },
  {
    title: 'High-Trust Workflows',
    audience: 'Operational software and high-trust workflow teams',
    outcome: 'Approval boundaries, evidence trails, and action-heavy UX should come through in one short path.',
    links: [
      { label: 'High-trust workflow brief', href: PALANTIR_BRIEF_URL },
      { label: 'regulated-case-workbench', href: 'https://regulated-case-workbench.pages.dev' },
      { label: 'Fab Ops repo', href: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
      { label: 'TwinCity UI repo', href: 'https://github.com/KIM3310/twincity-ui' },
    ],
  },
  {
    title: 'IT Operations',
    audience: 'IT infrastructure · operations · platform support teams',
    outcome: 'Diagnostics, runtime scorecards, operational handoff, and controlled execution should read clearly across the selected systems.',
    links: [
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
      { label: 'ogx repo', href: 'https://github.com/KIM3310/ogx' },
      { label: 'The Logistics Prophet', href: 'https://the-logistics-prophet.pages.dev' },
      { label: 'secure-xl2hwp-local', href: 'https://github.com/KIM3310/secure-xl2hwp-local' },
    ],
  },
  {
    title: 'Security Operations',
    audience: 'security operations · restricted environments · governed review teams',
    outcome: 'Air-gapped posture, auditability, approval boundaries, and review-safe handoff should be obvious quickly.',
    links: [
      { label: 'Aegis-Air repo', href: 'https://github.com/KIM3310/Aegis-Air' },
      { label: 'secure-xl2hwp-local', href: 'https://github.com/KIM3310/secure-xl2hwp-local' },
      { label: 'honeypot repo', href: 'https://github.com/KIM3310/honeypot' },
      { label: 'regulated-case-workbench', href: 'https://github.com/KIM3310/regulated-case-workbench' },
    ],
  },
  {
    title: 'Brokerage / Securities',
    audience: 'Brokerage · wealth management · advisor workflow teams',
    outcome: 'Suitability logic, portfolio rationale, and client handoff should read as one reviewer-safe workflow.',
    links: [
      { label: 'Brokerage application packet', href: BROKERAGE_APPLICATION_PACKET_URL },
      { label: 'Brokerage brief', href: BROKERAGE_BRIEF_URL },
      { label: 'Finance Review Platform', href: 'https://github.com/KIM3310/signal-risk-lab' },
      { label: 'Nexus-Hive repo', href: 'https://github.com/KIM3310/Nexus-Hive' },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
    ],
  },
  {
    title: 'Quant / Systematic',
    audience: 'Quant research · systematic trading · risk systems teams',
    outcome: 'Signal, risk, and execution posture should stay inspectable before anyone treats the strategy as usable.',
    links: [
      { label: 'Quant application packet', href: QUANT_APPLICATION_PACKET_URL },
      { label: 'Quant brief', href: QUANT_BRIEF_URL },
      { label: 'Finance Review Platform', href: 'https://github.com/KIM3310/signal-risk-lab' },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
    ],
  },
];

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
    title: 'Open the applied systems',
    detail: 'AegisOps and the governed delivery cluster show how the same reliability mindset survives incident review, handoff, and operational workflow complexity.',
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
      'Enterprise LLM Adoption Kit, regulated-case-workbench, Honeypot, archived ops case에서 audit, fallback, async jobs, signed handoff, export flows를 설계했습니다. 그래서 시스템이 멈춰야 할 지점과 사람이 이어받아야 할 지점이 명확합니다.',
    match: 'Runtime safety, approval boundaries, governance controls, high-trust delivery',
  },
  {
    keyword: 'Quantum Systems',
    title: '양자 실행을 제품형 백엔드로 구조화합니다',
    description:
      'quantum-workbench에서 IBM Quantum real hardware, Braket local/hardware 경로, ISA transpilation, runtime options, usage 기록, chemistry mini-workflow를 하나의 reviewer-safe API/UI로 묶었습니다.',
    match: 'Quantum software, backend productization, runtime orchestration, scientific workflow',
  },
];

export const SKILLS: SkillCategory[] = [
  { category: 'AI/ML & LLM', skills: ['LLM Systems', 'Tool Calling', 'Evals & Benchmarks', 'RAG', 'Multimodal AI'] },
  { category: 'Data & Platform', skills: ['Governed workflow platforms', 'Governed analytics', 'Lakehouse delivery', 'Data Pipelines'] },
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
      'Improved 40-case expanded benchmark (13 edge cases: adversarial, unicode, oversized payloads) from 25% baseline to 90% with middleware and bounded retry.',
      'Unifies parser middleware, orchestration, OpenTelemetry traces, and BenchLab evaluation into one inspectable proof surface.',
      'Provides the strongest public reliability signal before the portfolio moves into applied product systems.',
    ],
    tech: ['TypeScript', 'Tool Calling', 'Benchmarks', 'Middleware', 'Runtime APIs', 'OpenTelemetry'],
    links: { demo: PRIMARY_PROOF_URL, github: 'https://github.com/KIM3310/stage-pilot', youtube: 'https://youtu.be/6trgTH1vX4M' },
  },
  {
    title: 'AegisOps — Multimodal Incident Copilot',
    category: 'Supporting proof / Incident AI',
    role: 'Multimodal incident analysis, JSON guardrails, replayable operator outputs',
    achievements: [
      'Combines logs and monitoring screenshots into structured RCA, action plans, and handoff artifacts.',
      'Added JSON/schema guardrails plus BYOK and no-key modes to keep the incident flow demoable across environments.',
      'Shares a common eval framework with Aegis-Air for consistent replay and regression discipline.',
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
      'Shares a common eval framework with AegisOps for consistent replay and regression discipline.',
      'Reached 32/32 replay rubric checks on the bundled suite, with severity and failure-bucket labels matching expected outputs across all 4 replay cases.',
    ],
    tech: ['FastAPI', 'Ollama', 'Replay Evals', 'SSE', 'Terraform'],
    links: { demo: 'https://aegis-air.pages.dev', github: 'https://github.com/KIM3310/Aegis-Air' },
  },
  {
    title: 'Quantum Workbench — Real-Backend Quantum Workflow Surface',
    category: 'Supporting proof / Quantum Systems',
    role: 'IBM Quantum Runtime, Braket execution, experiment APIs, and review-safe quantum workflow packaging',
    achievements: [
      'Captured real IBM Quantum hardware evidence across Bell, GHZ, QAOA-style, and runtime-option experiments on ibm_torino.',
      'Exposed ISA transpilation, usage, queue posture, local-backend comparison, and chemistry mini-workflow through API and UI surfaces.',
      'Turns quantum execution into a backend product surface rather than leaving it as notebook-only proof.',
    ],
    tech: ['Python', 'FastAPI', 'Qiskit Runtime', 'Amazon Braket', 'Quantum workflow APIs'],
    links: { github: QUANTUM_WORKFLOW_URL },
  },
  {
    title: 'Enterprise LLM Adoption Kit',
    category: 'Supporting proof / Governance',
    role: 'Backend API, frontend, eval harness, and governance controls',
    achievements: [
      'Implemented RBAC, injection detection, PII redaction, audit hash logging, and citation-oriented response controls.',
      'Added JSONL eval pipelines, red-team reporting, and rollout drafts to support enterprise rollout decisions.',
      'Integrated OpenTelemetry for end-to-end trace visibility across governance and rollout workflows.',
      'Proves that safe AI delivery requires governance, not just model quality.',
    ],
    tech: ['FastAPI', 'React', 'Security', 'Evaluation', 'OpenTelemetry'],
    links: { github: 'https://github.com/KIM3310/enterprise-llm-adoption-kit' },
  },
  {
    title: 'Applied Ops Archive — High-Trust Operations Case Study',
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
    title: 'Semiconductor Ops Platform (fab-ops + scanner-field-response)',
    category: 'Applied operator systems',
    role: 'Alarm triage, lot-risk workflow, release gates, scanner-field response, and signed handoff',
    achievements: [
      'Built a manufacturing control tower that keeps alarms, lot risk, tool ownership, and signed handoff in one reviewable flow.',
      'Consolidated scanner-field-response domain into a unified semiconductor ops surface.',
      'Made hold / watch / release-ready posture visible before the next shift acts.',
      'Provides the operator-workflow baseline that makes the archived ops case credible as a product system.',
    ],
    tech: ['Python', 'FastAPI', 'Manufacturing Ops'],
    links: { github: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
  },
  {
    title: 'oh-my-gemini v1.0.0 (ogx) — Unified Agent CLI',
    category: 'Agent systems / CLI',
    role: 'HUD, MCP integration, task graphs, deep replan, safe worker control',
    achievements: [
      'Unified CLI with HUD, MCP server integration, task graphs, and deep replan for multi-agent orchestration.',
      'Built safe-by-default local execution with project-scoped runtime state and automation guardrails.',
      'Added setup, doctor, launch, team, status, and cancel flows plus notification hooks.',
      'Extends the orchestration story behind high-trust AI systems.',
    ],
    tech: ['TypeScript', 'CLI', 'tmux', 'Cloud Run', 'MCP'],
    links: { github: 'https://github.com/KIM3310/ogx' },
  },
];

export const SUBMISSION_READINESS_TRACKS: SubmissionReadinessTrack[] = [
  {
    title: 'Frontier LLM',
    companies: 'OpenAI · Anthropic · reliability/evals teams',
    readinessPct: 95,
    status: 'Strong submission surface',
    summary:
      'The public package now shows runtime reliability on a 40-case expanded suite (25% to 90%), protocol coverage, provider tradeoffs, OpenTelemetry traces, failure taxonomy, and 2,050 tests across the portfolio.',
    strongestSignals: ['Benchmarked tool reliability (40-case expanded)', 'Protocol coverage', 'OpenTelemetry traces', 'Provider tradeoff surface'],
    proofLinks: [
      { label: 'Frontier application packet', href: FRONTIER_APPLICATION_PACKET_URL },
      { label: 'Frontier interview pack', href: FRONTIER_INTERVIEW_PACK_URL },
      { label: 'Frontier brief', href: FRONTIER_LLM_BRIEF_URL },
      { label: 'StagePilot repo', href: 'https://github.com/KIM3310/stage-pilot' },
      { label: 'LLM systems resume', href: RESUME_PDF_URL },
    ],
    remainingGap: 'The last gap is larger-scale live inference history, not public runtime credibility or perf discipline.',
  },
  {
    title: 'Big Tech Systems',
    companies: 'Google · Meta · Amazon · Microsoft-style product/SRE orgs',
    readinessPct: 96,
    status: 'Strong submission surface',
    summary:
      'Defensive engineering, fallback posture, reviewable APIs, system-design surfaces, and failure-drill thinking now read quickly across the portfolio and GitHub surface.',
    strongestSignals: ['Service boundaries', 'Operational UX', 'Fallback design', 'Incident/replay evidence'],
    proofLinks: [
      { label: 'Big-tech application packet', href: BIG_TECH_APPLICATION_PACKET_URL },
      { label: 'Big-tech walkthrough', href: BIG_TECH_WALKTHROUGH_URL },
      { label: 'Big-tech brief', href: BIG_TECH_SYSTEMS_BRIEF_URL },
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
      { label: 'LLM systems resume', href: RESUME_PDF_URL },
    ],
    remainingGap: 'The remaining gap is longer-lived production ownership and harder real-scale history, not system design or operational clarity.',
  },
  {
    title: 'Governed Analytics',
    companies: 'Governed analytics teams',
    readinessPct: 97,
    status: 'High-fit submission package',
    summary:
      'Nexus-Hive, Lakehouse Contract Lab, enterprise delivery assets, and the governed analytics story now expose metric certification, Spark/Delta proof, warehouse-target posture, and lakehouse delivery framing clearly.',
    strongestSignals: ['Semantic metric layer', 'Spark + Delta proof', 'Warehouse target scorecard', 'Solution architecture framing'],
    proofLinks: [
      { label: 'Data-platform application packet', href: DATA_PLATFORM_APPLICATION_PACKET_URL },
      { label: 'Data-platform pack', href: DATA_PLATFORM_ARCHITECTURE_PACK_URL },
      { label: 'Governed analytics brief', href: SNOWFLAKE_BRIEF_URL },
      { label: 'Nexus-Hive repo', href: 'https://github.com/KIM3310/Nexus-Hive' },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
      { label: 'Solution architect resume', href: SOLUTION_ARCHITECT_RESUME_PDF_URL },
    ],
    remainingGap: 'The last gap is longer customer-grade governed analytics delivery history, not explicit platform proof or architecture clarity.',
  },
  {
    title: 'Lakehouse Delivery',
    companies: 'Lakehouse delivery teams',
    readinessPct: 97,
    status: 'Strong submission surface',
    summary:
      'The data-platform story now reads through semantic governance, explicit Spark + Delta execution, lakehouse readiness, decision boards, and solution-architecture assets instead of isolated ML or dashboard demos.',
    strongestSignals: ['Spark + Delta execution', 'Lakehouse-fit narrative', 'Decision surfaces', 'Platform-oriented proofs'],
    proofLinks: [
      { label: 'Data-platform application packet', href: DATA_PLATFORM_APPLICATION_PACKET_URL },
      { label: 'Data-platform pack', href: DATA_PLATFORM_ARCHITECTURE_PACK_URL },
      { label: 'Lakehouse delivery brief', href: DATABRICKS_BRIEF_URL },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
      { label: 'The Logistics Prophet repo', href: 'https://github.com/KIM3310/the-logistics-prophet' },
      { label: 'Solution architect resume', href: SOLUTION_ARCHITECT_RESUME_PDF_URL },
    ],
    remainingGap: 'The remaining gap is live customer or production lakehouse ownership, not public Spark/Delta proof.',
  },
  {
    title: 'High-Trust Workflows',
    companies: 'High-trust workflow teams',
    readinessPct: 94,
    status: 'Strongest fit in public',
    summary:
      'Approval boundaries, evidence trails, spatial/operational consoles, and governed delivery now read as one coherent high-trust software portfolio.',
    strongestSignals: ['Approval-safe workflows', 'Evidence chain', 'Operator software', 'Action-heavy systems'],
    proofLinks: [
      { label: 'High-trust workflow brief', href: PALANTIR_BRIEF_URL },
      { label: 'regulated-case-workbench repo', href: 'https://github.com/KIM3310/regulated-case-workbench' },
      { label: 'Solution architect resume', href: SOLUTION_ARCHITECT_RESUME_PDF_URL },
    ],
    remainingGap: 'The main remaining gap is more real deployment narrative, not fit of the public system design surface.',
  },
];

export const APPLICATION_PACKETS: ApplicationPacket[] = [
  {
    title: 'Frontier LLM',
    audience: 'OpenAI · Anthropic · runtime / evals',
    claim: 'Submit the runtime-reliability story: StagePilot first, then AegisOps, then ogx. The main proof is bounded failure handling and reviewer-fast observability.',
    packetHref: FRONTIER_APPLICATION_PACKET_URL,
    resumeHref: RESUME_PDF_URL,
    links: [
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
      { label: 'ogx repo', href: 'https://github.com/KIM3310/ogx' },
    ],
  },
  {
    title: 'Big Tech Systems',
    audience: 'Google · Meta · Amazon · Microsoft-style product / infra',
    claim: 'Submit the service-boundary story: AegisOps system design, StagePilot runtime posture, and operator-heavy product surfaces like TwinCity UI or Enterprise Kit.',
    packetHref: BIG_TECH_APPLICATION_PACKET_URL,
    resumeHref: RESUME_PDF_URL,
    links: [
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
      { label: 'TwinCity UI repo', href: 'https://github.com/KIM3310/twincity-ui' },
    ],
  },
  {
    title: 'Data Platform',
    audience: 'Governed analytics · lakehouse delivery · solution architecture',
    claim: 'Submit the governed platform story: Nexus-Hive semantic governance, Lakehouse Contract Lab Spark + Delta proof, and Enterprise Kit rollout posture.',
    packetHref: DATA_PLATFORM_APPLICATION_PACKET_URL,
    resumeHref: SOLUTION_ARCHITECT_RESUME_PDF_URL,
    links: [
      { label: 'Nexus-Hive repo', href: 'https://github.com/KIM3310/Nexus-Hive' },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
      { label: 'Enterprise Kit', href: 'https://enterprise-llm-kit.pages.dev' },
    ],
  },
  {
    title: 'High-Trust Workflows',
    audience: 'governed ops · workflow software',
    claim: 'Submit the approval-boundary story: regulated-case-workbench first, then fab-ops control surfaces, then TwinCity UI. The archived ops case can stay as a supporting example when needed.',
    packetHref: PALANTIR_APPLICATION_PACKET_URL,
    resumeHref: SOLUTION_ARCHITECT_RESUME_PDF_URL,
    links: [
      { label: 'regulated-case-workbench repo', href: 'https://github.com/KIM3310/regulated-case-workbench' },
      { label: 'Fab Ops repo', href: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
      { label: 'TwinCity UI repo', href: 'https://github.com/KIM3310/twincity-ui' },
    ],
  },
  {
    title: 'Brokerage / Securities',
    audience: 'Brokerage · advisor workflow · client review',
    claim: 'Submit the client-review story: Finance Review Platform first, then Nexus-Hive for governed analytics posture, then StagePilot for reliability depth behind the workflow.',
    packetHref: BROKERAGE_APPLICATION_PACKET_URL,
    resumeHref: SOLUTION_ARCHITECT_RESUME_PDF_URL,
    links: [
      { label: 'Finance Review Platform', href: 'https://github.com/KIM3310/signal-risk-lab' },
      { label: 'Nexus-Hive repo', href: 'https://github.com/KIM3310/Nexus-Hive' },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
    ],
  },
  {
    title: 'Quant / Systematic',
    audience: 'Quant research · systematic trading · risk review',
    claim: 'Submit the research-surface story: Finance Review Platform first, then lakehouse-contract-lab for data posture, then StagePilot for reliability and evaluation depth.',
    packetHref: QUANT_APPLICATION_PACKET_URL,
    resumeHref: RESUME_PDF_URL,
    links: [
      { label: 'Finance Review Platform', href: 'https://github.com/KIM3310/signal-risk-lab' },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
    ],
  },
];

export const LIVE_PROOF_TRACKS: LiveProofTrack[] = [
  {
    title: 'Frontier LLM',
    audience: 'runtime reliability · evals · reviewer-safe live proof',
    status: 'public-capped-live',
    staticProof: { label: 'StagePilot benchmark + scorecard', href: PRIMARY_PROOF_URL },
    liveRepo: { label: 'stage-pilot repo', href: 'https://github.com/KIM3310/stage-pilot' },
    liveRoute: 'POST /v1/live-review-run',
    walkthrough: { label: 'Frontier interview pack', href: 'briefs/frontier-llm-interview-pack.html' },
    packet: { label: 'Frontier application packet', href: FRONTIER_APPLICATION_PACKET_URL },
    resume: { label: 'LLM systems resume', href: RESUME_PDF_URL },
    note: 'Bounded scenario catalog only. Public live lane stays separated from full operator mutation routes.',
  },
  {
    title: 'Big Tech Systems',
    audience: 'incident systems · service boundaries · multimodal ops',
    status: 'public-capped-live',
    staticProof: { label: 'AegisOps system design', href: 'https://github.com/KIM3310/AegisOps' },
    liveRepo: { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
    liveRoute: 'POST /api/live-escalation-preview',
    walkthrough: { label: 'Big-tech walkthrough', href: 'briefs/big-tech-systems-walkthrough.html' },
    packet: { label: 'Big-tech application packet', href: BIG_TECH_APPLICATION_PACKET_URL },
    resume: { label: 'LLM systems resume', href: RESUME_PDF_URL },
    note: 'Fixed incident bundle ids only. Live preview summarizes escalation stance without opening the full analyst surface.',
  },
  {
    title: 'Data Platform',
    audience: 'governed analytics · warehouse fit · field engineering',
    status: 'public-capped-live',
    staticProof: { label: 'Lakehouse contract board', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
    liveRepo: { label: 'Nexus-Hive repo', href: 'https://github.com/KIM3310/Nexus-Hive' },
    liveRoute: 'POST /api/runtime/reviewer-query-demo + GET /api/runtime/review-summary',
    walkthrough: { label: 'Data-platform architecture pack', href: 'briefs/data-platform-architecture-pack.html' },
    packet: { label: 'Data-platform application packet', href: DATA_PLATFORM_APPLICATION_PACKET_URL },
    resume: { label: 'Solution architect resume', href: SOLUTION_ARCHITECT_RESUME_PDF_URL },
    note: 'Nexus-Hive carries the bounded live query lane. Lakehouse Contract Lab stays artifact-refresh-only and exposes read-only review summaries.',
  },
  {
    title: 'Palantir / High-Trust',
    audience: 'approval boundaries · evidence chains · governed release',
    status: 'public-capped-live',
    staticProof: { label: 'regulated-case-workbench review pack', href: 'https://github.com/KIM3310/regulated-case-workbench' },
    liveRepo: { label: 'regulated-case-workbench repo', href: 'https://github.com/KIM3310/regulated-case-workbench' },
    liveRoute: 'POST /api/live-case-brief',
    walkthrough: { label: 'Palantir review brief', href: 'briefs/palantir-review-brief.html' },
    packet: { label: 'Palantir application packet', href: PALANTIR_APPLICATION_PACKET_URL },
    resume: { label: 'Solution architect resume', href: SOLUTION_ARCHITECT_RESUME_PDF_URL },
    note: 'Fixed case packets only. The live lane summarizes evidence, approval boundary, and redaction posture without exposing arbitrary uploads.',
  },
  {
    title: 'Brokerage / Securities',
    audience: 'client suitability · advisor workflow · review-safe portfolio change logic',
    status: 'review-only-live',
    staticProof: { label: 'Finance Review Platform', href: 'https://github.com/KIM3310/signal-risk-lab' },
    liveRepo: { label: 'Finance Review Platform repo', href: 'https://github.com/KIM3310/signal-risk-lab' },
    liveRoute: 'GET /api/review-pack + GET /api/advisor-handoff',
    walkthrough: { label: 'Brokerage brief', href: BROKERAGE_BRIEF_URL },
    packet: { label: 'Brokerage application packet', href: BROKERAGE_APPLICATION_PACKET_URL },
    resume: { label: 'Solution architect resume', href: SOLUTION_ARCHITECT_RESUME_PDF_URL },
    note: 'Reviewer-safe finance workflow surface focused on suitability, rationale, and handoff rather than live trading claims.',
  },
  {
    title: 'Quant / Systematic',
    audience: 'factor research · risk posture · execution viability',
    status: 'review-only-live',
    staticProof: { label: 'Finance Review Platform', href: 'https://github.com/KIM3310/signal-risk-lab' },
    liveRepo: { label: 'Finance Review Platform repo', href: 'https://github.com/KIM3310/signal-risk-lab' },
    liveRoute: 'GET /api/research-pack + GET /api/execution-posture',
    walkthrough: { label: 'Quant brief', href: QUANT_BRIEF_URL },
    packet: { label: 'Quant application packet', href: QUANT_APPLICATION_PACKET_URL },
    resume: { label: 'LLM systems resume', href: RESUME_PDF_URL },
    note: 'Compact research-review surface focused on signal, risk, and execution viability rather than unsupported performance claims.',
  },
];

export const VERIFIED_LIVE_CHECKS: VerificationLiveCheck[] = [
  {
    title: 'Frontier live review run',
    repo: 'StagePilot',
    href: 'https://github.com/KIM3310/stage-pilot',
    mode: 'public-capped-live',
    route: 'POST /v1/live-review-run',
    statusCode: 200,
    checkedAt: '2026-03-16T23:12:53+09:00',
    scenarioId: 'parser-drift-recovery',
    model: 'gpt-4.1-mini',
    nextReviewPath: '/v1/failure-taxonomy',
    summary:
      'Verified a real OpenAI-backed bounded scenario. The live run returned a parser-drift recovery stance with review-safe evidence and no open-ended prompt surface.',
  },
  {
    title: 'Incident escalation preview',
    repo: 'AegisOps',
    href: 'https://github.com/KIM3310/AegisOps',
    mode: 'public-capped-live',
    route: 'POST /api/live-escalation-preview',
    statusCode: 200,
    checkedAt: '2026-03-16T23:13:18+09:00',
    scenarioId: 'checkout-sev1',
    model: 'gpt-4.1-mini',
    nextReviewPath: '/api/postmortem-pack',
    summary:
      'Returned a live escalation stance, commander message, and handoff summary for the fixed checkout incident bundle without opening analyst-only mutation lanes.',
  },
  {
    title: 'Governed analytics reviewer demo',
    repo: 'Nexus-Hive',
    href: 'https://github.com/KIM3310/Nexus-Hive',
    mode: 'public-capped-live',
    route: 'POST /api/runtime/reviewer-query-demo',
    statusCode: 200,
    checkedAt: '2026-03-16T23:13:40+09:00',
    scenarioId: 'revenue-by-region',
    model: 'gpt-4.1-mini',
    nextReviewPath: '/api/runtime/semantic-governance-pack',
    summary:
      'Verified a live warehouse-facing reviewer lane that returned SQL, approval posture, lineage references, and a warehouse-fit explanation for a fixed executive question.',
  },
  {
    title: 'Workshop preview for solution architecture',
    repo: 'Enterprise LLM Adoption Kit',
    href: 'https://github.com/KIM3310/enterprise-llm-adoption-kit',
    mode: 'public-capped-live',
    route: 'POST /ops/live-workshop-preview',
    statusCode: 200,
    checkedAt: '2026-03-16T23:13:56+09:00',
    scenarioId: 'snowflake-discovery',
    model: 'gpt-4.1-mini',
    nextReviewPath: '/ops/customer-architecture-pack?platform=snowflake',
    summary:
      'Verified the bounded workshop lane with an actual rollout stance, executive summary, and next-step architecture guidance for a governed analytics discovery scenario.',
  },
  {
    title: 'Document workflow sample review',
    repo: 'DocFlow Agent',
    href: 'https://github.com/KIM3310/Upstage-DocuAgent',
    mode: 'public-capped-live',
    route: 'POST /api/live-sample-review',
    statusCode: 200,
    checkedAt: '2026-03-16T23:14:08+09:00',
    scenarioId: 'sample-syllabus-packet',
    model: 'gpt-4.1-mini',
    nextReviewPath: '/api/review-pack',
    summary:
      'Verified a live document-review lane that returned citation-confidence, approval posture, and the next human-review step on a checked-in sample packet.',
  },
  {
    title: 'High-trust case brief',
    repo: 'regulated-case-workbench',
    href: 'https://github.com/KIM3310/regulated-case-workbench',
    mode: 'public-capped-live',
    route: 'POST /api/live-case-brief',
    statusCode: 200,
    checkedAt: '2026-03-16T23:14:18+09:00',
    scenarioId: 'case-1007',
    model: 'gpt-4.1-mini',
    nextReviewPath: '/api/handoff-brief?case_id=case-1007',
    summary:
      'Verified the case-brief lane with evidence summary, approval boundary, redaction posture, and export action for a fixed committee-review case.',
  },
  {
    title: 'Spark + Delta artifact refresh',
    repo: 'Lakehouse Contract Lab',
    href: 'https://github.com/KIM3310/lakehouse-contract-lab',
    mode: 'artifact-refresh-only',
    route: 'GET /api/runtime/review-summary',
    statusCode: 200,
    checkedAt: '2026-03-16T23:14:29+09:00',
    scenarioId: 'medallion-refresh-latest',
    model: 'artifact refresh pipeline',
    nextReviewPath: 'artifacts/review-summary.json',
    summary:
      'Rebuilt the Spark + Delta artifacts and re-read the reviewer summary: Bronze 12, Silver accepted 8, Silver rejected 4, Gold served 5, with explicit quality-gate posture.',
  },
];

export const VERIFIED_DEPLOYMENTS: DeploymentCheck[] = [
  {
    repo: 'doeon-kim-portfolio',
    href: 'https://kim3310.github.io/doeon-kim-portfolio/',
    title: 'Doeon Kim | High-Trust AI Systems Portfolio',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'portfolio',
  },
  {
    repo: 'KIM3310',
    href: 'https://kim3310.github.io/doeon-kim-portfolio/',
    title: 'Doeon Kim | High-Trust AI Systems Portfolio',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'portfolio',
  },
  {
    repo: 'stage-pilot',
    href: 'https://stage-pilot.pages.dev',
    title: 'StagePilot',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'flagship',
  },
  {
    repo: 'AegisOps',
    href: 'https://aegisops-ai-incident-doctor.pages.dev',
    title: 'AegisOps - Incident Review Console',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'flagship',
  },
  {
    repo: 'enterprise-llm-adoption-kit',
    href: 'https://enterprise-llm-kit.pages.dev',
    title: 'LLM Adoption Atelier',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'flagship',
  },
  {
    repo: 'regulated-case-workbench',
    href: 'https://regulated-case-workbench.pages.dev',
    title: 'Regulated Case Workbench',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'flagship',
  },
  {
    repo: 'Nexus-Hive',
    href: 'https://nexus-hive.pages.dev',
    title: 'Nexus-Hive | Executive BI Copilot',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'flagship',
  },
  {
    repo: 'Aegis-Air',
    href: 'https://aegis-air.pages.dev',
    title: 'Aegis-Air Ops Console',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'support',
  },
  {
    repo: 'DocFlow Agent',
    href: 'https://upstage-docuagent.pages.dev',
    title: 'DocFlow Agent — Document Review Pipeline',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'support',
  },
  {
    repo: 'honeypot',
    href: 'https://honeypot-proto.vercel.app',
    title: '꿀단지 - AI 인수인계 도우미',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'support',
  },
  {
    repo: 'secure-xl2hwp-local',
    href: 'https://secure-xl2hwp-local.pages.dev',
    title: 'secure-xl2hwp-local',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'support',
  },
  {
    repo: 'twincity-ui',
    href: 'https://twincity-ui.pages.dev',
    title: 'Proof-first control tower',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'support',
  },
  {
    repo: 'the-logistics-prophet',
    href: 'https://the-logistics-prophet.pages.dev',
    title: 'The Logistics Prophet | Predictive Control Tower',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'support',
  },
  {
    repo: 'the-savior',
    href: 'https://the-savior-9z8.pages.dev',
    title: 'The Savior | 불교 기반 마음 안정화 플랫폼',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'support',
  },
  /* kbbq-idle-unity — archived */
  {
    repo: 'SteadyTap',
    href: 'https://steadytap.pages.dev',
    title: 'SteadyTap',
    statusCode: 200,
    checkedAt: '2026-03-16T23:08:00+09:00',
    category: 'support',
  },
];

export const REPO_OPERATING_MATRIX: RepoOperatingEntry[] = [
  {
    name: 'stage-pilot',
    tier: 'Lead with',
    href: 'https://github.com/KIM3310/stage-pilot',
    primaryRole: 'AI Engineer',
    aiEngineerFit: 10,
    solutionArchitectFit: 6,
    targetTracks: ['Frontier LLM', 'Big tech systems'],
    strength: 'Benchmarked tool-calling reliability (40-case expanded suite), live review lane, OpenTelemetry traces, and regression gates.',
    note: 'Best first-pass repo for runtime, evals, and failure-recovery interviews.',
  },
  {
    name: 'AegisOps',
    tier: 'Lead with',
    href: 'https://github.com/KIM3310/AegisOps',
    primaryRole: 'AI Engineer',
    aiEngineerFit: 9,
    solutionArchitectFit: 7,
    targetTracks: ['Big tech systems', 'Frontier-adjacent ops'],
    strength: 'Multimodal incident review, postmortem packs, live escalation preview, and operational handoff.',
    note: 'Strongest applied systems repo after StagePilot.',
  },
  {
    name: 'Aegis-Air',
    tier: 'Lead with',
    href: 'https://github.com/KIM3310/Aegis-Air',
    primaryRole: 'AI Engineer',
    aiEngineerFit: 8,
    solutionArchitectFit: 6,
    targetTracks: ['Frontier LLM', 'High-trust infra'],
    strength: 'Air-gapped incident review with offline deployment proof and replay discipline.',
    note: 'Use when a role values local-first or closed-network constraints.',
  },
  {
    name: 'enterprise-llm-adoption-kit',
    tier: 'Lead with',
    href: 'https://github.com/KIM3310/enterprise-llm-adoption-kit',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 7,
    solutionArchitectFit: 10,
    targetTracks: ['Governed analytics', 'Lakehouse delivery', 'Big tech SA'],
    strength: 'Rollout gates, workshop preview, customer-architecture pack, and governance-first delivery surfaces.',
    note: 'Best first-pass repo for solution architecture and field engineering loops.',
  },
  {
    name: 'lakehouse-contract-lab',
    tier: 'Lead with',
    href: 'https://github.com/KIM3310/lakehouse-contract-lab',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 5,
    solutionArchitectFit: 10,
    targetTracks: ['Governed analytics', 'Lakehouse delivery'],
    strength: 'Explicit Spark + Delta proof with medallion layers, quality gates, and reviewer-fast artifact refresh.',
    note: 'Use as the cleanest data-platform proof surface.',
  },
  {
    name: 'regulated-case-workbench',
    tier: 'Lead with',
    href: 'https://github.com/KIM3310/regulated-case-workbench',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 6,
    solutionArchitectFit: 10,
    targetTracks: ['High-trust workflows', 'Big tech trust and safety'],
    strength: 'Evidence chain, approval boundary, redaction posture, and bounded live case brief.',
    note: 'Best first-pass repo for high-trust workflow software.',
  },
  {
    name: 'doeon-kim-portfolio',
    tier: 'Lead with',
    href: 'https://github.com/KIM3310/doeon-kim-portfolio',
    primaryRole: 'Shared hub',
    aiEngineerFit: 8,
    solutionArchitectFit: 8,
    targetTracks: ['All target tracks'],
    strength: 'Canonical routing hub with briefs, packets, live matrix, and evidence surfaces.',
    note: 'Use as the recruiter-first entry point after one flagship repo.',
  },
  {
    name: 'KIM3310',
    tier: 'Lead with',
    href: 'https://github.com/KIM3310/KIM3310',
    primaryRole: 'Shared hub',
    aiEngineerFit: 7,
    solutionArchitectFit: 7,
    targetTracks: ['All target tracks'],
    strength: 'Profile hub with quick starts, flagship chain, and repo routing.',
    note: 'Good for profile-first reviewers who never open the portfolio site first.',
  },
  {
    name: 'Nexus-Hive',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/Nexus-Hive',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 6,
    solutionArchitectFit: 9,
    targetTracks: ['Governed analytics', 'Lakehouse delivery'],
    strength: 'Governed analytics runtime with reviewer-query-demo, semantic governance, and warehouse-target scorecards.',
    note: 'Bring it forward when a role is explicitly warehouse-adjacent.',
  },
  /* advisor-review-desk consolidated into Finance Review Platform (signal-risk-lab) */
  {
    name: 'Finance Review Platform (signal-risk-lab + advisor-review-desk)',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/signal-risk-lab',
    primaryRole: 'AI Engineer',
    aiEngineerFit: 6,
    solutionArchitectFit: 6,
    targetTracks: ['Quant', 'Brokerage', 'Research-oriented systems'],
    strength: 'Unified finance review platform covering signal/risk research and advisory review desk in one surface.',
    note: 'Consolidates signal-risk-lab and advisor-review-desk into a single finance review platform.',
  },
  {
    name: 'twincity-ui',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/twincity-ui',
    primaryRole: 'AI Engineer',
    aiEngineerFit: 7,
    solutionArchitectFit: 8,
    targetTracks: ['Big tech systems', 'High-trust workflows'],
    strength: 'Stateful operational UX, response playbook, replayable feeds, and spatial command surfaces.',
    note: 'Strong support proof for complex product systems and operator tooling.',
  },
  {
    name: 'secure-xl2hwp-local',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/secure-xl2hwp-local',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 5,
    solutionArchitectFit: 8,
    targetTracks: ['High-trust workflows', 'Enterprise regulated delivery'],
    strength: 'Offline deployment, signed export verification, and constrained-environment workflow proof.',
    note: 'Use when the conversation leans regulated ops or air-gapped delivery.',
  },
  {
    name: 'DocFlow Agent',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/Upstage-DocuAgent',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 6,
    solutionArchitectFit: 7,
    targetTracks: ['Document workflow AI', 'Workflow delivery'],
    strength: 'Document extraction, LMS export, review queue, and live sample-review lane.',
    note: 'Best as a document-workflow supplement, not the main flagship.',
  },
  {
    name: 'Semiconductor Ops Platform (fab-ops + scanner-field-response)',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/fab-ops-yield-control-tower',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 6,
    solutionArchitectFit: 8,
    targetTracks: ['High-trust workflows', 'Industrial software'],
    strength: 'Release board, lot-risk workflow, scanner-field response, and signed shift handoff.',
    note: 'Consolidated fab-ops and scanner-field-response into a unified semiconductor ops surface.',
  },
  {
    name: 'oh-my-gemini v1.0.0 (ogx)',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/ogx',
    primaryRole: 'AI Engineer',
    aiEngineerFit: 7,
    solutionArchitectFit: 5,
    targetTracks: ['Frontier LLM', 'Runtime ops'],
    strength: 'Unified CLI with HUD, MCP, task graphs, deep replan, automation guardrails, and operator surfaces.',
    note: 'Useful for runtime tooling conversations after StagePilot.',
  },
  {
    name: 'honeypot',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/honeypot',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 5,
    solutionArchitectFit: 7,
    targetTracks: ['Azure delivery', 'Enterprise workflow AI'],
    strength: 'Document ingestion, retrieval-backed Q&A, and approval matrix.',
    note: 'Use only when Azure delivery or handover workflows matter.',
  },
  {
    name: 'the-logistics-prophet',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/the-logistics-prophet',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 7,
    solutionArchitectFit: 8,
    targetTracks: ['Lakehouse delivery', 'Applied analytics systems'],
    strength: 'Predictive control tower with KPI action boards, explainability, and ops workflow.',
    note: 'Strong support for data-platform roles with decision-layer emphasis.',
  },
  {
    name: 'beaver-study-orchestrator',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/beaver-study-orchestrator',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 4,
    solutionArchitectFit: 6,
    targetTracks: ['Planning systems', 'Workflow AI'],
    strength: 'Outcome board, syllabus parsing, and what-if planning surfaces.',
    note: 'Good only if a role values orchestration and planning workflows.',
  },
  {
    name: 'SteadyTap',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/SteadyTap',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 3,
    solutionArchitectFit: 5,
    targetTracks: ['Health workflow AI'],
    strength: 'Review queue, progress tracking, and accessibility-minded product execution.',
    note: 'Keep as breadth proof, not a first-pass recruiter anchor.',
  },
  {
    name: 'smallbiz-ops-copilot',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/smallbiz-ops-copilot',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 4,
    solutionArchitectFit: 6,
    targetTracks: ['SMB workflow AI'],
    strength: 'Owner handoff board, KPI dashboards, and guarded integrations.',
    note: 'Private; mention only if the conversation needs SMB operations proof.',
    visibility: 'private',
  },
  {
    name: 'gemini-cli-tool-runtime',
    tier: 'Selective use',
    href: 'https://github.com/KIM3310/gemini-cli-tool-runtime',
    primaryRole: 'AI Engineer',
    aiEngineerFit: 5,
    solutionArchitectFit: 3,
    targetTracks: ['Runtime ops'],
    strength: 'CLI orchestration, MCP operator brief, and tmux-team runtime state.',
    note: 'Private and secondary to ogx for recruiter-first stories.',
    visibility: 'private',
  },
  /* ecotide — archived */
  {
    name: 'the-savior',
    tier: 'De-emphasize',
    href: 'https://github.com/KIM3310/the-savior',
    primaryRole: 'Solutions Architect',
    aiEngineerFit: 3,
    solutionArchitectFit: 4,
    targetTracks: ['Consumer AI wellness'],
    strength: 'Cloudflare delivery, provider fallback, and escalation readiness.',
    note: 'Do not lead with it unless a role explicitly values consumer/wellness signals.',
  },
  /* dream-interpretation-pages — archived */
  /* kbbq-idle-unity — archived */
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
    systems: ['regulated-case-workbench', 'TwinCity UI', 'Semiconductor Ops Platform'],
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
    systems: ['regulated-case-workbench', 'TwinCity UI', 'Semiconductor Ops Platform'],
    links: [
      { label: 'regulated-case-workbench repo', href: 'https://github.com/KIM3310/regulated-case-workbench' },
      { label: 'Fab Ops repo', href: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
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

export const TARGET_TRACKS: TargetTrack[] = [
  {
    title: 'Frontier LLM',
    companies: 'OpenAI · Anthropic · reliability/evals teams',
    summary:
      'Best fit when a reviewer wants benchmarked runtime behavior, tool reliability, and fast proof surfaces instead of generic agent demos.',
    signals: ['Tool-calling reliability', 'Evals and benchmarks', 'Runtime safety', 'Reviewable APIs'],
    reviewPath: ['StagePilot', 'AegisOps', 'Aegis-Air', 'ogx'],
    links: [
      { label: 'Frontier brief', href: FRONTIER_LLM_BRIEF_URL },
      { label: 'Open StagePilot proof', href: PRIMARY_PROOF_URL },
      { label: 'StagePilot repo', href: 'https://github.com/KIM3310/stage-pilot' },
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
    ],
  },
  {
    title: 'Big Tech Systems',
    companies: 'Google · Meta · Amazon · Microsoft-style product/SRE orgs',
    summary:
      'Strongest where the bar is defensive engineering: clear service boundaries, failure handling, observability, and user-facing systems that survive real operational complexity.',
    signals: ['Defensive engineering', 'Operator workflows', 'Fallback paths', 'Service-grade surfaces'],
    reviewPath: ['StagePilot', 'AegisOps', 'TwinCity UI', 'Enterprise LLM Adoption Kit'],
    links: [
      { label: 'Big-tech brief', href: BIG_TECH_SYSTEMS_BRIEF_URL },
      { label: 'AegisOps repo', href: 'https://github.com/KIM3310/AegisOps' },
      { label: 'TwinCity UI repo', href: 'https://github.com/KIM3310/twincity-ui' },
      { label: 'Enterprise kit repo', href: 'https://github.com/KIM3310/enterprise-llm-adoption-kit' },
    ],
  },
  {
    title: 'Quantum Systems',
    companies: 'Quantum software · scientific compute · backend product teams',
    summary:
      'Best fit where real hardware execution, transpilation, runtime options, and domain workflow packaging need to stay inspectable as one backend system.',
    signals: ['IBM Quantum Runtime', 'ISA-aware transpilation', 'Usage and queue visibility', 'Chemistry mini-workflow'],
    reviewPath: ['quantum-workflow-lab', 'StagePilot', 'Lakehouse Contract Lab'],
    links: [
      { label: 'Quantum Workbench repo', href: QUANTUM_WORKFLOW_URL },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
    ],
  },
  {
    title: 'Governed Analytics',
    companies: 'Governed analytics teams',
    summary:
      'Best fit around governed analytics, warehouse-adjacent product thinking, query reviewability, and data workflows that need trustworthy operator handoff.',
    signals: ['Analytics workflows', 'Governed delivery', 'Auditability', 'Warehouse-adjacent product design'],
    reviewPath: ['Nexus-Hive', 'The Logistics Prophet', 'Enterprise LLM Adoption Kit'],
    links: [
      { label: 'Governed analytics brief', href: SNOWFLAKE_BRIEF_URL },
      { label: 'Nexus-Hive repo', href: 'https://github.com/KIM3310/Nexus-Hive' },
      { label: 'The Logistics Prophet repo', href: 'https://github.com/KIM3310/the-logistics-prophet' },
      { label: 'Enterprise kit repo', href: 'https://github.com/KIM3310/enterprise-llm-adoption-kit' },
    ],
  },
  {
    title: 'Lakehouse Delivery',
    companies: 'Lakehouse delivery teams',
    summary:
      'Best fit where data/ML platform work needs pipelines, experimentation discipline, explainability, and APIs that translate model output into reliable operational action.',
    signals: ['Data pipelines', 'Platform thinking', 'Experiment loops', 'Operational analytics'],
    reviewPath: ['The Logistics Prophet', 'Nexus-Hive', 'DocFlow Agent', 'beaver-study-orchestrator'],
    links: [
      { label: 'Lakehouse delivery brief', href: DATABRICKS_BRIEF_URL },
      { label: 'The Logistics Prophet repo', href: 'https://github.com/KIM3310/the-logistics-prophet' },
      { label: 'DocFlow Agent repo', href: 'https://github.com/KIM3310/Upstage-DocuAgent' },
      { label: 'beaver-study-orchestrator repo', href: 'https://github.com/KIM3310/beaver-study-orchestrator' },
    ],
  },
  {
    title: 'High-Trust Workflows',
    companies: 'High-trust workflow teams',
    summary:
      'Strongest where software has to support high-stakes operator decisions with approval boundaries, evidence trails, and action-heavy workflows instead of chat-only UX.',
    signals: ['Decision support', 'Audit trails', 'Approval boundaries', 'Operational software'],
    reviewPath: ['regulated-case-workbench', 'Semiconductor Ops Platform', 'TwinCity UI', 'Applied Ops Archive'],
    links: [
      { label: 'High-trust workflow brief', href: PALANTIR_BRIEF_URL },
      { label: 'regulated-case-workbench repo', href: 'https://github.com/KIM3310/regulated-case-workbench' },
      { label: 'Semiconductor Ops Platform repo', href: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
      { label: 'TwinCity UI repo', href: 'https://github.com/KIM3310/twincity-ui' },
    ],
  },
  {
    title: 'Brokerage / Securities',
    companies: 'Brokerage · securities · advisor workflow teams',
    summary:
      'Best fit where client suitability, portfolio rationale, governed analytics, and advisor handoff need to stay visible in one reviewer-safe workflow.',
    signals: ['Suitability logic', 'Portfolio review', 'Client handoff', 'Review-safe workflow'],
    reviewPath: ['Finance Review Platform', 'Nexus-Hive', 'StagePilot'],
    links: [
      { label: 'Brokerage brief', href: BROKERAGE_BRIEF_URL },
      { label: 'Finance Review Platform', href: 'https://github.com/KIM3310/signal-risk-lab' },
      { label: 'Nexus-Hive repo', href: 'https://github.com/KIM3310/Nexus-Hive' },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
    ],
  },
  {
    title: 'Quant / Systematic',
    companies: 'Quant research · systematic trading · risk systems teams',
    summary:
      'Best fit where factor research, explicit risk posture, data contracts, and execution readiness matter more than flashy dashboards or unsupported alpha claims.',
    signals: ['Factor logic', 'Risk posture', 'Execution viability', 'Research artifacts'],
    reviewPath: ['Finance Review Platform', 'lakehouse-contract-lab', 'StagePilot'],
    links: [
      { label: 'Quant brief', href: QUANT_BRIEF_URL },
      { label: 'Finance Review Platform', href: 'https://github.com/KIM3310/signal-risk-lab' },
      { label: 'Lakehouse lab', href: 'https://github.com/KIM3310/lakehouse-contract-lab' },
      { label: 'StagePilot proof', href: PRIMARY_PROOF_URL },
    ],
  },
];

export const PORTFOLIO_RUNTIME_META = [
  { label: 'Scope', value: '8 selected systems + 11 extended proof surfaces' },
  { label: 'Stack', value: 'React 19 + Vite 6' },
  { label: 'Focus', value: 'Agent Reliability / Runtime Safety / High-Trust AI' },
  { label: 'Tests', value: '2,050 tests across portfolio' },
  { label: 'Public Proof', value: 'Canonical repos + live surfaces + reviewer handoff routes' },
  { label: 'Portfolio URL', value: 'kim3310.github.io/doeon-kim-portfolio' },
];

export const EXTENDED_PROOF_CLUSTERS: ExtendedProofCluster[] = [
  {
    title: 'Boards and approval gates',
    summary:
      'These repos now expose the moment where operational judgment becomes reviewable: recovery delta, release posture, approval coverage, and ownership continuity.',
    surfaces: [
      {
        repo: 'beaver-study-orchestrator',
        surface: '/api/outcomes/board',
        surfaceType: 'HTTP route',
        summary: 'Turns study risk, capacity delta, and unscheduled spillover into a reviewer board instead of leaving the result at a single score.',
        teams: ['Lakehouse delivery', 'Platform APIs', 'Decision systems'],
        github: 'https://github.com/KIM3310/beaver-study-orchestrator',
      },
      {
        repo: 'fab-ops-yield-control-tower',
        surface: '/api/release-board',
        surfaceType: 'HTTP route',
        summary: 'Makes queue-level release posture visible before anyone argues from a single lot or tool page.',
        teams: ['High-trust workflows', 'Ops software', 'Industrial systems'],
        github: 'https://github.com/KIM3310/fab-ops-yield-control-tower',
      },
      {
        repo: 'honeypot',
        surface: '/api/approval-matrix',
        surfaceType: 'HTTP route',
        summary: 'Shows role coverage, blocked sections, and handover-readiness gating before a generated draft is treated as deliverable.',
        teams: ['Enterprise AI', 'Governed delivery', 'High-trust workflows'],
        github: 'https://github.com/KIM3310/honeypot',
        demo: 'https://honeypot-proto.vercel.app',
      },
      {
        repo: 'smallbiz-ops-copilot',
        surface: '/dashboard/owner-handoff-board',
        surfaceType: 'HTTP route',
        summary: 'Keeps queue ownership, blockers, and next-operator posture visible before outbound work changes hands.',
        teams: ['Ops tooling', 'Workflow systems', 'Private artifact'],
        note: 'Private repo',
        visibility: 'private',
      },
    ],
  },
  {
    title: 'Runtime guardrails',
    summary:
      'The runtime cluster now exposes explicit automation boundaries and operator-handoff tools, so reviewer trust does not depend on reading raw logs or CLI state.',
    surfaces: [
      {
        repo: 'ogx',
        surface: '/v1/automation-guardrails',
        surfaceType: 'HTTP route',
        summary: 'Compresses unattended-run posture, approval mode, and risky automation boundaries into one route.',
        teams: ['Frontier LLM', 'Agent runtimes', 'Automation safety'],
        github: 'https://github.com/KIM3310/ogx',
      },
      {
        repo: 'gemini-cli-tool-runtime',
        surface: 'omg_team_operator_brief',
        surfaceType: 'MCP tool',
        summary: 'Provides blocked tasks, unhealthy workers, and next operator moves without requiring a tmux attach or raw state inspection.',
        teams: ['Runtime infra', 'Agent control planes', 'Private artifact'],
        note: 'Private repo',
        visibility: 'private',
      },
      /* dream-interpretation-pages — archived */
    ],
  },
  {
    title: 'Human-centered handoff',
    summary:
      'Product-oriented repos now expose the clinician, operator, escalation, or fallback surface that sits between the live experience and a trustworthy handoff.',
    surfaces: [
      {
        repo: 'SteadyTap',
        surface: '/v1/review-queue?user_id=demo-user',
        surfaceType: 'HTTP route',
        summary: 'Shows stale users and clinician/reviewer follow-up before remote coaching is treated as authoritative.',
        teams: ['Apple/Google product', 'Accessibility', 'Health-adjacent UX'],
        github: 'https://github.com/KIM3310/SteadyTap',
        demo: 'https://steadytap.pages.dev',
      },
      {
        repo: 'the-savior',
        surface: '/api/escalation-readiness',
        surfaceType: 'HTTP route',
        summary: 'Exposes crisis-escalation and fallback posture before public traffic is allowed to trust the coaching layer.',
        teams: ['Consumer AI', 'Safety UX', 'Fallback design'],
        github: 'https://github.com/KIM3310/the-savior',
      },
      /* kbbq-idle-unity, ecotide — archived */
    ],
  },
];

export const REPO_CLUSTERS: RepoCluster[] = [
  {
    title: 'Review surfaces',
    summary: 'The two places that should explain the whole account fastest: the profile hub and the canonical portfolio site.',
    repos: [
      { name: 'KIM3310', focus: 'GitHub profile README that defines the review order and flagship thesis.', github: 'https://github.com/KIM3310/KIM3310' },
      { name: 'doeon-kim-portfolio', focus: 'Canonical portfolio site and review surface for the flagship systems.', github: PORTFOLIO_REPO_URL, demo: PORTFOLIO_LIVE_URL },
    ],
  },
  {
    title: 'Quantum and scientific systems',
    summary: 'Projects that show real quantum execution, scientific workflow packaging, and backend productization instead of notebook-only proof.',
    repos: [
      { name: 'quantum-workbench', focus: 'IBM Quantum + Braket workflow surface with ISA-aware proof, runtime options, and chemistry mini-workflow.', github: QUANTUM_WORKFLOW_URL },
    ],
  },
  {
    title: 'Reliability and agent runtimes',
    summary: 'Where tool use, runtime safety, replayability, and bounded automation are clearest in public.',
    repos: [
      { name: 'stage-pilot', focus: 'Benchmark-led tool-calling reliability runtime with parser recovery and bounded retry.', github: 'https://github.com/KIM3310/stage-pilot', demo: PRIMARY_PROOF_URL },
      { name: 'AegisOps', focus: 'Multimodal incident copilot with replayable handoff and structured RCA output.', github: 'https://github.com/KIM3310/AegisOps', demo: 'https://aegisops-ai-incident-doctor.pages.dev' },
      { name: 'Aegis-Air', focus: 'Local-first incident review engine for restricted or air-gapped environments.', github: 'https://github.com/KIM3310/Aegis-Air', demo: 'https://aegis-air.pages.dev' },
      { name: 'oh-my-gemini v1.0.0 (ogx)', focus: 'Unified CLI with HUD, MCP, task graphs, deep replan, and safe worker control.', github: 'https://github.com/KIM3310/ogx' },
      { name: 'gemini-cli-tool-runtime', focus: 'Private runtime/orchestration layer behind earlier Gemini CLI experiments.', note: 'Private repo' },
    ],
  },
  {
    title: 'Operational software and governed workflows',
    summary: 'Repos that show operator UX, approval boundaries, audit trails, and action-heavy software instead of generic assistant patterns.',
    repos: [
      { name: 'twincity-ui', focus: 'Digital twin triage console with spatial context and realtime fallback posture.', github: 'https://github.com/KIM3310/twincity-ui', demo: 'https://twincity-ui.pages.dev' },
      { name: 'Semiconductor Ops Platform (fab-ops + scanner-field-response)', focus: 'Unified semiconductor ops surface covering alarms, lot risk, scanner-field response, release gates, and signed handoff.', github: 'https://github.com/KIM3310/fab-ops-yield-control-tower' },
      { name: 'regulated-case-workbench', focus: 'Case inbox, redaction review, approval, and signed export manifest workflow.', github: 'https://github.com/KIM3310/regulated-case-workbench', demo: 'https://regulated-case-workbench.pages.dev' },
      { name: 'secure-xl2hwp-local', focus: 'Air-gapped document automation pipeline for controlled local environments.', github: 'https://github.com/KIM3310/secure-xl2hwp-local', demo: 'https://secure-xl2hwp-local.pages.dev' },
      { name: 'honeypot', focus: 'Azure-based document handover copilot with retrieval-backed review flow.', github: 'https://github.com/KIM3310/honeypot', demo: 'https://honeypot-proto.vercel.app' },
      { name: 'smallbiz-ops-copilot', focus: 'Private SMB operations copilot with tickets, KPI dashboards, and guarded actions.', note: 'Private repo' },
    ],
  },
  {
    title: 'Data, platform, and analytics systems',
    summary: 'Projects that show governed analytics, platform APIs, explainability, and data-heavy product thinking.',
    repos: [
      { name: 'enterprise-llm-adoption-kit', focus: 'Governance-first enterprise AI control tower with RBAC, evals, and rollout assets.', github: 'https://github.com/KIM3310/enterprise-llm-adoption-kit' },
      { name: 'Nexus-Hive', focus: 'Governed BI copilot that turns executive questions into auditable SQL and charts.', github: 'https://github.com/KIM3310/Nexus-Hive', demo: 'https://nexus-hive.pages.dev' },
      { name: 'the-logistics-prophet', focus: 'Predictive logistics control tower with ontology, model comparison, and explainability.', github: 'https://github.com/KIM3310/the-logistics-prophet', demo: 'https://the-logistics-prophet.pages.dev' },
      { name: 'beaver-study-orchestrator', focus: 'Syllabus parsing and study-plan orchestration with deadline risk analytics.', github: 'https://github.com/KIM3310/beaver-study-orchestrator' },
      { name: 'DocFlow Agent', focus: 'Document analysis and learning-package export pipeline with structured extraction.', github: 'https://github.com/KIM3310/Upstage-DocuAgent', demo: 'https://upstage-docuagent.pages.dev' },
    ],
  },
  {
    title: 'Product and mobile experiments',
    summary: 'Smaller product surfaces that broaden the account beyond infra without diluting the main thesis.',
    repos: [
      { name: 'SteadyTap', focus: 'Accessibility-first iOS app with calibration, coaching, and progress tracking.', github: 'https://github.com/KIM3310/SteadyTap', demo: 'https://steadytap.pages.dev' },
      { name: 'the-savior', focus: 'Mind-body stabilization app with BYOK/fallback providers and mobile packaging.', github: 'https://github.com/KIM3310/the-savior' },
      /* ecotide, kbbq-idle-unity, dream-interpretation-pages — archived */
    ],
  },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  { title: 'Nexus-Hive', focus: 'Multi-agent BI copilot for enterprise analytics workflows', github: 'https://github.com/KIM3310/Nexus-Hive', demo: 'https://nexus-hive.pages.dev', note: 'Data platform expansion in progress' },
  { title: 'Honeypot', focus: 'Azure document handover copilot with retrieval structure and async ingest', github: 'https://github.com/KIM3310/honeypot', demo: 'https://honeypot-3st.pages.dev' },
  { title: 'regulated-case-workbench', focus: 'Case inbox, evidence review, approval, and export manifest workflow', github: 'https://github.com/KIM3310/regulated-case-workbench', demo: 'https://regulated-case-workbench.pages.dev', note: 'Regulated workflow baseline' },
  { title: 'secure-xl2hwp-local', focus: 'Air-gapped document automation pipeline for local environments', github: 'https://github.com/KIM3310/secure-xl2hwp-local', demo: 'https://secure-xl2hwp-local.pages.dev' },
  { title: 'beaver-study-orchestrator', focus: 'Syllabus parsing, risk analysis, and study-plan orchestration workflow', github: 'https://github.com/KIM3310/beaver-study-orchestrator' },
  { title: 'The Logistics Prophet', focus: 'Predictive logistics control tower with auditability and explainability', github: 'https://github.com/KIM3310/the-logistics-prophet', demo: 'https://the-logistics-prophet.pages.dev', note: 'Ontology, audit chain, and action workflow proof' },
  { title: 'Quantum Workbench', focus: 'IBM Quantum and Braket execution with ISA-aware proof and chemistry mini-workflow packaging', github: QUANTUM_WORKFLOW_URL },
  { title: 'DocFlow Agent', focus: 'Document analysis and learning-package export pipeline', github: 'https://github.com/KIM3310/Upstage-DocuAgent', demo: 'https://upstage-docuagent.pages.dev' },
  { title: 'SteadyTap', focus: 'Accessibility-first iOS app with integrated FastAPI backend', github: 'https://github.com/KIM3310/SteadyTap', demo: 'https://steadytap.pages.dev' },
  /* advisor-review-desk consolidated into Finance Review Platform */
  { title: 'Finance Review Platform (signal-risk-lab + advisor-review-desk)', focus: 'Unified finance review: factor signal, risk posture, advisory review desk, and execution viability in one surface', github: 'https://github.com/KIM3310/signal-risk-lab', demo: 'https://kim3310.github.io/signal-risk-lab/' },
];
