import { Project, SkillCategory, Profile, WorkExperience, EducationItem, Certification, RepositoryCoverageLane, StackArchitectureLane, LiveServiceScreen, PortfolioReel } from './types';

export const PROFILE: Profile = {
  name: 'KIM3310 Systems Gallery',
  title: 'Operations-first AI systems engineer: incident workflows, agent reliability, data quality, and secure automation',
  email: 'ehdjs1351@gmail.com',
  github: 'https://github.com/KIM3310',
  linkedin: 'https://www.linkedin.com/in/doeon-kim-4742a2388',
  intro:
    'I build inspectable systems from incident-room habits: confirm the signal, bound the data, write the handoff, and keep a runnable verification path. The gallery connects 24/7 MW communications, CCTV/VMS/NVR, access-control, intrusion-alert, and IT infrastructure operations work to AI runtime reliability, enterprise governance, data-quality gates, and operator-facing UI surfaces without private data.',
};

export const PORTFOLIO_STATS = [
  { label: 'Frontend', value: 'React / Vite' },
  { label: 'Backend', value: 'FastAPI / Workers' },
  { label: 'Data', value: 'SQL / Spark' },
  { label: 'Infra', value: 'Terraform / Docker' },
] as const;

export const SYSTEM_ARCHITECTURE_URLS: Record<string, string> = {
  AegisOps: 'https://github.com/KIM3310/AegisOps/blob/main/docs/system-architecture.md',
  KIM3310: 'https://github.com/KIM3310/KIM3310/blob/main/docs/system-architecture.md',
  'Nexus-Hive': 'https://github.com/KIM3310/Nexus-Hive/blob/main/docs/system-architecture.md',
  SteadyTap: 'https://github.com/KIM3310/SteadyTap/blob/main/docs/system-architecture.md',
  'agent-orchestration-benchmark': 'https://github.com/KIM3310/agent-orchestration-benchmark/blob/main/docs/system-architecture.md',
  'agent-runtime-go': 'https://github.com/KIM3310/agent-runtime-go/blob/main/docs/system-architecture.md',
  'ai-agent-production-lab': 'https://github.com/KIM3310/ai-agent-production-lab/blob/main/docs/system-architecture.md',
  'ai-security-redteam-lab': 'https://github.com/KIM3310/ai-security-redteam-lab/blob/main/docs/system-architecture.md',
  'aix-pilot': 'https://github.com/KIM3310/aix-pilot/blob/main/docs/system-architecture.md',
  'beaver-study-orchestrator': 'https://github.com/KIM3310/beaver-study-orchestrator/blob/main/docs/system-architecture.md',
  'districtpilot-ai': 'https://github.com/KIM3310/districtpilot-ai/blob/main/docs/system-architecture.md',
  'doeon-kim-portfolio': 'https://github.com/KIM3310/doeon-kim-portfolio/blob/main/docs/system-architecture.md',
  'dream-interpretation-pages': 'https://github.com/KIM3310/dream-interpretation-pages/blob/main/docs/system-architecture.md',
  'enterprise-llm-adoption-kit': 'https://github.com/KIM3310/enterprise-llm-adoption-kit/blob/main/docs/system-architecture.md',
  'fab-ops-yield-control-tower': 'https://github.com/KIM3310/fab-ops-yield-control-tower/blob/main/docs/system-architecture.md',
  'kbbq-idle-unity': 'https://github.com/KIM3310/kbbq-idle-unity/blob/main/docs/system-architecture.md',
  'lakehouse-contract-lab': 'https://github.com/KIM3310/lakehouse-contract-lab/blob/main/docs/system-architecture.md',
  'llm-onprem-deployment-kit': 'https://github.com/KIM3310/llm-onprem-deployment-kit/blob/main/docs/system-architecture.md',
  'multi-cli-pilot': 'https://github.com/KIM3310/multi-cli-pilot/blob/main/docs/system-architecture.md',
  'nw-service-assurance-workbench': 'https://github.com/KIM3310/nw-service-assurance-workbench/blob/main/docs/system-architecture.md',
  'quantum-workbench': 'https://github.com/KIM3310/quantum-workbench/blob/main/docs/system-architecture.md',
  'retina-scan-ai': 'https://github.com/KIM3310/retina-scan-ai/blob/main/docs/system-architecture.md',
  'secure-xl2hwp-local': 'https://github.com/KIM3310/secure-xl2hwp-local/blob/main/docs/system-architecture.md',
  'security-threat-response-workbench': 'https://github.com/KIM3310/security-threat-response-workbench/blob/main/docs/system-architecture.md',
  'stage-pilot': 'https://github.com/KIM3310/stage-pilot/blob/main/docs/system-architecture.md',
  'the-savior': 'https://github.com/KIM3310/the-savior/blob/main/docs/system-architecture.md',
  'tool-call-finetune-lab': 'https://github.com/KIM3310/tool-call-finetune-lab/blob/main/docs/system-architecture.md',
  'twincity-ui': 'https://github.com/KIM3310/twincity-ui/blob/main/docs/system-architecture.md',
  'weld-defect-vision': 'https://github.com/KIM3310/weld-defect-vision/blob/main/docs/system-architecture.md',
};

export const REPOSITORY_DEMO_URLS: Record<string, string> = {
  KIM3310: 'https://kim3310.github.io/doeon-kim-portfolio/',
  'doeon-kim-portfolio': 'https://kim3310.github.io/doeon-kim-portfolio/',
  'aix-pilot': 'https://aix-pilot.pages.dev',
  'enterprise-llm-adoption-kit': 'https://enterprise-llm-kit.pages.dev',
  'stage-pilot': 'https://stage-pilot.pages.dev',
  'agent-runtime-go': 'https://kim3310.github.io/agent-runtime-go/',
  'agent-orchestration-benchmark': 'https://kim3310.github.io/agent-orchestration-benchmark/',
  'ai-agent-production-lab': 'https://kim3310.github.io/ai-agent-production-lab/',
  'ai-security-redteam-lab': 'https://kim3310.github.io/ai-security-redteam-lab/',
  'tool-call-finetune-lab': 'https://kim3310.github.io/tool-call-finetune-lab/',
  'multi-cli-pilot': 'https://kim3310.github.io/multi-cli-pilot/',
  AegisOps: 'https://aegisops-ai-incident-doctor.pages.dev',
  'security-threat-response-workbench': 'https://security-threat-response-workbench.ehdjs1351.workers.dev',
  'nw-service-assurance-workbench': 'https://nw-service-assurance-workbench.ehdjs1351.workers.dev',
  'ops-reliability-workbench': 'https://kim3310.github.io/ops-reliability-workbench/',
  'llm-onprem-deployment-kit': 'https://kim3310.github.io/llm-onprem-deployment-kit/',
  'secure-xl2hwp-local': 'https://secure-xl2hwp-local.pages.dev',
  honeypot: 'https://kim3310.github.io/honeypot/',
  'Upstage-DocuAgent': 'https://upstage-docuagent.pages.dev',
  'smallbiz-ops-copilot': 'https://smallbiz-ops-copilot.pages.dev',
  'Nexus-Hive': 'https://nexus-hive.pages.dev',
  'lakehouse-contract-lab': 'https://kim3310.github.io/lakehouse-contract-lab/',
  'districtpilot-ai': 'https://kim3310.github.io/districtpilot-ai/',
  'fab-ops-yield-control-tower': 'https://fab-ops-yield-control-tower.pages.dev',
  'memory-test-master-change-gate': 'https://kim3310.github.io/memory-test-master-change-gate/',
  'weld-defect-vision': 'https://kim3310.github.io/weld-defect-vision/',
  'regulated-case-workbench': 'https://regulated-case-workbench.pages.dev',
  'retina-scan-ai': 'https://kim3310.github.io/retina-scan-ai/',
  'the-savior': 'https://kim3310.github.io/the-savior/',
  'dream-interpretation-pages': 'https://kim3310.github.io/dream-interpretation-pages/',
  SteadyTap: 'https://steadytap.pages.dev',
  'kbbq-idle-unity': 'https://kbbq-idle-unity.pages.dev',
  'quantum-workbench': 'https://kim3310.github.io/quantum-workbench/',
  'twincity-ui': 'https://twincity-ui.pages.dev',
  'beaver-study-orchestrator': 'https://kim3310.github.io/beaver-study-orchestrator/',
};

export const INTERX_ROLE: WorkExperience = {
  company: 'InterX',
  title: 'IT Infrastructure Operations Manager',
  period: 'Apr 2026 - May 2026',
  location: 'Seoul, South Korea',
  summary:
    'Operated and supported data-center, IDC, security, network, collaboration, and service-desk workflows for an internal business environment.',
  focus: [
    'Data center and IDC infrastructure operations',
    'Security and network operations: UTM, IPsec VPN, DRM, DLP, NAC, firewall monitoring',
    'Jira, Confluence, Google Workspace, and company-wide system administration',
    'IT asset, license, backup, access-right, onboarding, and helpdesk controls',
  ],
  outcomes: [
    'Maintained digital workspace permissions, workflows, and new teammate IT onboarding setup',
    'Improved recurring operations through Jira automation rules, process reports, and vendor coordination',
    'Researched and test-bedded new IT/SaaS solutions for security posture and operational efficiency',
  ],
};

export const MILITARY_ROLE: WorkExperience = {
  company: 'ROK Defense Communication Command / 1st Information Communications Group',
  title: 'MW Communications Soldier / Squad Leader',
  period: 'Nov 2023 - May 2025',
  location: 'Seongnam, South Korea',
  summary:
    'MW communications soldier and 6-person squad leader in 24/7 strategic command communications operations, covering network, security, server, CCTV/VMS/NVR, access-control, intrusion-alert, and emergency-response workflows.',
  focus: [
    '24/7 national strategic command communications operations as an MW communications soldier',
    '6-person squad leadership with roughly 8-9 incidents or issue cases per month across response, mitigation, recovery, reporting, and follow-up',
    'Access-log review, visitor access approval-record management, access-permission registration/removal, and unauthorized-access alert monitoring',
    'Perimeter intrusion alerts, server-room and communications-room unauthorized-access alerts, and night abnormal-movement detection',
    'CCTV/VMS/NVR operation and management, camera view adjustment, recording/status checks, abnormal-situation reporting, initial action, and CCTV fault response',
    'Network, security, server, and communications-room monitoring with server-room fire response, 24-hour standby, and shift handoff',
  ],
  outcomes: [
    'Built operator habits around access control, issue confirmation, initial action, escalation, documentation, recovery, and emergency response',
    'Provides direct evidence for CCTV/VMS/NVR, access control, intrusion monitoring, network, security, server, and communications-room operations',
    'Anchors network/security projects such as NW Service Assurance and Security Threat Response Workbench',
  ],
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "Bachelor's Degree Examination for Self-Education (BDES)",
    program: 'Computer Science',
    period: 'Expected Nov 2027',
    note: 'Bachelor degree track',
  },
  {
    institution: 'Korea National Open University',
    program: 'Computer Science coursework',
    period: 'Mar 2026 - Present',
    note: 'Current coursework',
  },
  {
    institution: 'Microsoft AI School 8th Cohort',
    program: 'Azure AI, Copilot, RAG, and enterprise AI deployment training',
    period: 'Sep 2025 - Feb 2026',
    note: 'Completed practitioner-reviewed AI systems training',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { issuer: 'Microsoft', name: 'AI-900' },
  { issuer: 'Snowflake', name: 'SnowPro Associate' },
  { issuer: 'Databricks', name: 'Platform Architect (AWS + GCP)' },
  { issuer: 'Databricks', name: 'Fundamentals' },
  { issuer: 'Palantir', name: 'Foundry Data Engineer Associate' },
  { issuer: 'Palantir', name: 'Foundry Foundations' },
  { issuer: 'Datadog', name: 'Observability Certification' },
  { issuer: 'IBM', name: 'AI Fundamentals' },
  { issuer: 'IBM', name: 'Cloud Computing Fundamentals' },
  { issuer: 'IBM', name: 'Cyber Security Fundamentals' },
  { issuer: 'SAP', name: 'Cloud Platform Integration' },
];

export const LANGUAGES = ['Korean native', 'English business/working', 'Japanese business/working'] as const;

export const LIVE_SERVICE_SCREENS: LiveServiceScreen[] = [
  {
    title: 'aix-pilot',
    url: 'https://aix-pilot.pages.dev',
    asset: 'evidence/live/aix-pilot.png',
    scope: 'Active public',
  },
  {
    title: 'stage-pilot',
    url: 'https://stage-pilot.pages.dev',
    asset: 'evidence/live/stage-pilot.png',
    scope: 'Active public',
  },
  {
    title: 'AegisOps',
    url: 'https://aegisops-ai-incident-doctor.pages.dev',
    asset: 'evidence/live/aegisops.png',
    scope: 'Active public',
  },
  {
    title: 'security-threat-response-workbench',
    url: 'https://security-threat-response-workbench.ehdjs1351.workers.dev',
    asset: 'evidence/live/security-threat-response-workbench.png',
    scope: 'Active public',
  },
  {
    title: 'nw-service-assurance-workbench',
    url: 'https://nw-service-assurance-workbench.ehdjs1351.workers.dev',
    asset: 'evidence/live/nw-service-assurance-workbench.png',
    scope: 'Active public',
  },
  {
    title: 'enterprise-llm-adoption-kit',
    url: 'https://enterprise-llm-kit.pages.dev',
    asset: 'evidence/live/enterprise-llm-adoption-kit.png',
    scope: 'Active public',
  },
  {
    title: 'secure-xl2hwp-local',
    url: 'https://secure-xl2hwp-local.pages.dev',
    asset: 'evidence/live/secure-xl2hwp-local.png',
    scope: 'Active public',
  },
  {
    title: 'regulated-case-workbench',
    url: 'https://regulated-case-workbench.pages.dev',
    asset: 'evidence/live/regulated-case-workbench.png',
    scope: 'Private case',
  },
  {
    title: 'Nexus-Hive',
    url: 'https://nexus-hive.pages.dev',
    asset: 'evidence/live/nexus-hive.png',
    scope: 'Active public',
  },
  {
    title: 'fab-ops-yield-control-tower',
    url: 'https://fab-ops-yield-control-tower.pages.dev',
    asset: 'evidence/live/fab-ops-yield-control-tower.png',
    scope: 'Active public',
  },
  {
    title: 'smallbiz-ops-copilot',
    url: 'https://smallbiz-ops-copilot.pages.dev',
    asset: 'evidence/live/smallbiz-ops-copilot.png',
    scope: 'Private case',
  },
  {
    title: 'SteadyTap',
    url: 'https://steadytap.pages.dev',
    asset: 'evidence/live/steadytap.png',
    scope: 'Active public',
  },
  {
    title: 'Upstage-DocuAgent',
    url: 'https://upstage-docuagent.pages.dev',
    asset: 'evidence/live/upstage-docuagent.png',
    scope: 'Private case',
  },
  {
    title: 'kbbq-idle-unity',
    url: 'https://kbbq-idle-unity.pages.dev',
    asset: 'evidence/live/kbbq-idle-unity.png',
    scope: 'Active public',
  },
  {
    title: 'twincity-ui',
    url: 'https://twincity-ui.pages.dev',
    asset: 'evidence/live/twincity-ui.png',
    scope: 'Active public',
  },
  {
    title: 'the-logistics-prophet',
    url: 'https://the-logistics-prophet.pages.dev',
    asset: 'evidence/live/the-logistics-prophet.png',
    scope: 'Archived proof',
  },
  {
    title: 'signal-risk-lab',
    url: 'https://signal-risk-lab.pages.dev',
    asset: 'evidence/live/signal-risk-lab.png',
    scope: 'Archived proof',
  },
  {
    title: 'Aegis-Air',
    url: 'https://aegis-air.pages.dev',
    asset: 'evidence/live/aegis-air.png',
    scope: 'Archived proof',
  },
];

export const PORTFOLIO_REEL: PortfolioReel = {
  title: 'Narrated Systems Gallery Reel',
  summary:
    'English TTS systems reel generated from representative service screenshots and the public architecture routes.',
  video: 'evidence/portfolio-reel/kim3310-systems-gallery-reel.mp4',
  poster: 'evidence/portfolio-reel/kim3310-systems-gallery-reel-poster.png',
  transcript: 'evidence/portfolio-reel/transcript.txt',
  durationLabel: '50 sec',
  generatedAt: '2026-06-07 KST',
};

export const PROJECTS: Project[] = [
  {
    title: 'aix-pilot',
    description:
      'Enterprise GenAI pilot console that connects RAG, Agent drafts, DLP masking, evaluation gates, KPI reporting, and a free runtime path.',
    tech: ['Enterprise GenAI', 'RAG', 'Agent workflow', 'DLP', 'KPI'],
    github: 'https://github.com/KIM3310/aix-pilot',
    demo: 'https://aix-pilot.pages.dev',
    evidence: 'evidence/live/aix-pilot.png',
    market: 'Mid-market support teams and internal knowledge operations',
    architectureSignal: 'Enterprise GenAI product architecture, RAG evaluation, and security gates',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'stage-pilot',
    description:
      'Tool-call reliability runtime with parser hardening, bounded retry, benchmark fixtures, and a package-ready verification path.',
    tech: ['Runtime reliability', 'TypeScript', 'Benchmarks', 'Parser recovery'],
    github: 'https://github.com/KIM3310/stage-pilot',
    demo: 'https://stage-pilot.pages.dev',
    evidence: 'evidence/live/stage-pilot.png',
    market: 'AI platform teams shipping tool-calling agents',
    architectureSignal: 'Runtime reliability, parser recovery, benchmark discipline',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'agent-runtime-go',
    description:
      'Minimal Go orchestration runtime for deterministic tool execution, retries, adapter boundaries, and traceable control flow.',
    tech: ['Go', 'Agent runtime', 'Retries', 'Adapters'],
    github: 'https://github.com/KIM3310/agent-runtime-go',
    demo: 'https://kim3310.github.io/agent-runtime-go/',
    evidence: 'evidence/agent-runtime-trace.svg',
    market: 'Backend teams needing controlled agent execution',
    architectureSignal: 'Go systems design, deterministic orchestration, provider boundaries',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'ai-agent-production-lab',
    description:
      'Credential-free agent lab with deterministic planner fixtures, trace events, cost accounting, evaluation assertions, and HTML reports.',
    tech: ['Python', 'Agent evals', 'Tracing', 'Reports'],
    github: 'https://github.com/KIM3310/ai-agent-production-lab',
    demo: 'https://kim3310.github.io/ai-agent-production-lab/',
    evidence: 'evidence/ai-agent-production-report.svg',
    market: 'Teams moving agents from demo to production',
    architectureSignal: 'Tracing, cost accounting, eval assertions, report automation',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'AegisOps',
    description:
      'Incident operations surface that turns logs, screenshots, replay evals, and handoff notes into a structured response workflow.',
    tech: ['React', 'Incident ops', 'Replay evals', 'Handoff'],
    github: 'https://github.com/KIM3310/AegisOps',
    demo: 'https://aegisops-ai-incident-doctor.pages.dev',
    evidence: 'evidence/live/aegisops.png',
    market: 'Security and operations teams managing incident handoff',
    architectureSignal: 'Operator UX, replay evals, multimodal incident workflow',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'security-threat-response-workbench',
    description:
      'Cloud security response desk for event triage, containment timelines, IOC watchlists, and shift-ready analyst handoff.',
    tech: ['React', 'Security ops', 'Runbooks', 'Indicators'],
    github: 'https://github.com/KIM3310/security-threat-response-workbench',
    demo: 'https://security-threat-response-workbench.ehdjs1351.workers.dev',
    evidence: 'evidence/live/security-threat-response-workbench.png',
    market: 'Cloud security teams and managed service providers',
    architectureSignal: 'Threat triage, runbook design, analyst handoff',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'nw-service-assurance-workbench',
    description:
      'Network service assurance board with outage triage, service-path visibility, domain posture, and operations playbooks.',
    tech: ['React', 'Network ops', 'Service paths', 'SLA signals'],
    github: 'https://github.com/KIM3310/nw-service-assurance-workbench',
    demo: 'https://nw-service-assurance-workbench.ehdjs1351.workers.dev',
    evidence: 'evidence/live/nw-service-assurance-workbench.png',
    market: 'Telecom, IDC, and enterprise network operations teams',
    architectureSignal: 'Service assurance, outage triage, SLA visibility',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'enterprise-llm-adoption-kit',
    description:
      'LLM governance toolkit with RBAC, evals, redaction, prompt-safety checks, audit logging, and optional persistence adapters.',
    tech: ['Governance', 'FastAPI', 'RBAC', 'Audit logs'],
    github: 'https://github.com/KIM3310/enterprise-llm-adoption-kit',
    demo: 'https://enterprise-llm-kit.pages.dev',
    evidence: 'evidence/live/enterprise-llm-adoption-kit.png',
    market: 'Enterprises adopting LLMs under governance pressure',
    architectureSignal: 'RBAC, audit logging, evals, redaction, rollout controls',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'secure-xl2hwp-local',
    description:
      'Local-first document conversion service with JWT controls, signed exports, audit logs, and template drift checks.',
    tech: ['Python', 'Document automation', 'JWT', 'Signed evidence'],
    github: 'https://github.com/KIM3310/secure-xl2hwp-local',
    demo: 'https://secure-xl2hwp-local.pages.dev',
    evidence: 'evidence/live/secure-xl2hwp-local.png',
    market: 'Korean back-office teams with local document workflows',
    architectureSignal: 'Local-first security, signed exports, auditability',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'regulated-case-workbench',
    description:
      'Case workflow desk with redaction preview, approval gates, policy checks, signed export proof, and cross-case audit feeds.',
    tech: ['FastAPI', 'Approval gates', 'Redaction', 'Private case study'],
    market: 'Compliance-heavy legal, finance, and review teams',
    architectureSignal: 'Approval gates, redaction, audit workflow design',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
    access: 'private',
    demo: 'https://regulated-case-workbench.pages.dev',
    evidence: 'evidence/live/regulated-case-workbench.png',
  },
  {
    title: 'lakehouse-contract-lab',
    description:
      'Contract-first medallion pipeline with quality gates, rejected-row queues, KPI artifacts, and optional export boundaries.',
    tech: ['Python', 'Spark', 'Data contracts', 'Quality gates'],
    github: 'https://github.com/KIM3310/lakehouse-contract-lab',
    demo: 'https://kim3310.github.io/lakehouse-contract-lab/',
    evidence: 'evidence/lakehouse-contract-board.svg',
    market: 'Data teams modernizing batch quality and contracts',
    architectureSignal: 'Spark, data contracts, quality gates, warehouse export boundaries',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'Nexus-Hive',
    description:
      'Governed analytics workbench with NL-to-query flows, policy checks, audit trails, warehouse adapters, and chart output.',
    tech: ['FastAPI', 'Governed analytics', 'Policy checks', 'Charts'],
    github: 'https://github.com/KIM3310/Nexus-Hive',
    demo: 'https://nexus-hive.pages.dev',
    evidence: 'evidence/live/nexus-hive.png',
    market: 'Analytics teams needing governed self-service SQL',
    architectureSignal: 'NL-to-query boundaries, policy checks, audit trails',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'districtpilot-ai',
    description:
      'Snowflake-native district operations planner with forecast action cards, semantic views, and a public API readiness map for live data rollout.',
    tech: ['Snowflake', 'Forecasting', 'Public API readiness', 'Civic analytics'],
    github: 'https://github.com/KIM3310/districtpilot-ai',
    demo: 'https://kim3310.github.io/districtpilot-ai/',
    evidence: 'evidence/districtpilot-public-api-readiness.svg',
    market: 'Local governments, field-service planners, and civic analytics teams',
    architectureSignal: 'Forecast-to-action loop, Snowflake feature mart, public-data lineage',
    proofPath: 'Runtime walkthrough, 15_public_api_integration_readiness.sql, repository validators, and architecture notes',
  },
  {
    title: 'fab-ops-yield-control-tower',
    description:
      'Manufacturing operations surface with fab monitoring, scanner qualification, incident queues, and shift handoff evidence.',
    tech: ['Python', 'Manufacturing ops', 'Qualification', 'Handoff'],
    github: 'https://github.com/KIM3310/fab-ops-yield-control-tower',
    demo: 'https://fab-ops-yield-control-tower.pages.dev',
    evidence: 'evidence/live/fab-ops-yield-control-tower.png',
    market: 'Manufacturing operations and semiconductor support teams',
    architectureSignal: 'Yield monitoring, shift handoff, qualification analytics',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'twincity-ui',
    description:
      'Digital twin operations UI with event triage, dispatch reports, runtime scorecards, and Korean public API readiness for city-context overlays.',
    tech: ['Next.js', 'Digital twin', 'Public API readiness', 'Operations UI'],
    github: 'https://github.com/KIM3310/twincity-ui',
    demo: 'https://twincity-ui.pages.dev',
    evidence: 'evidence/live/twincity-ui.png',
    market: 'Facilities, city operations, industrial command centers, and spatial event teams',
    architectureSignal: 'Spatial operations UX, report contracts, public-data enrichment readiness',
    proofPath: 'Runtime walkthrough, /api/public-apis, /api/runtime-scorecard, repository tests, and architecture notes',
  },
  {
    title: 'weld-defect-vision',
    description:
      'Industrial vision workflow with defect detection, severity reporting, model-serving notes, and release-readiness checks.',
    tech: ['Vision', 'Model serving', 'Inspection', 'Reports'],
    github: 'https://github.com/KIM3310/weld-defect-vision',
    demo: 'https://kim3310.github.io/weld-defect-vision/',
    evidence: 'evidence/weld-defect-vision-board.svg',
    market: 'Industrial inspection and quality teams',
    architectureSignal: 'Vision governance, model serving, validation notes',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'retina-scan-ai',
    description:
      'Medical-image research workflow with classification, explainability artifacts, risk notes, and validation templates.',
    tech: ['Medical imaging', 'Explainability', 'Validation', 'Risk notes'],
    github: 'https://github.com/KIM3310/retina-scan-ai',
    demo: 'https://kim3310.github.io/retina-scan-ai/',
    evidence: 'evidence/retina-scan-ai-research.svg',
    market: 'Health AI research and validation teams',
    architectureSignal: 'Risk notes, explainability, model cards, compliance caution',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
  {
    title: 'smallbiz-ops-copilot',
    description:
      'Operations inbox for small teams with queue triage, draft approval, KPI cards, bounded runtime controls, and public-data enrichment readiness.',
    tech: ['Workers', 'Operations inbox', 'Approval flow', 'Public API readiness', 'Private case study'],
    market: 'Small support teams with repetitive inbox operations',
    architectureSignal: 'Cloudflare Workers, queue UX, approval boundaries, merchant and operating-risk enrichment',
    proofPath: 'Runtime walkthrough, /integrations/public-apis, architecture pack, repository tests, and architecture notes',
    access: 'private',
    demo: 'https://smallbiz-ops-copilot.pages.dev',
    evidence: 'evidence/live/smallbiz-ops-copilot.png',
  },
  {
    title: 'SteadyTap',
    description:
      'Accessibility coaching app with Swift package structure, optional sync backend, coach plans, and local verification paths.',
    tech: ['SwiftUI', 'Accessibility', 'FastAPI', 'Coach plans'],
    github: 'https://github.com/KIM3310/SteadyTap',
    demo: 'https://steadytap.pages.dev',
    evidence: 'evidence/live/steadytap.png',
    market: 'Accessibility and habit coaching users',
    architectureSignal: 'SwiftUI, inclusive UX, optional backend sync',
    proofPath: 'Runtime walkthrough, repository evidence, architecture notes, and local quality gate',
  },
];

export const STACK_ARCHITECTURE_LANES: StackArchitectureLane[] = [
  {
    lane: 'TypeScript / React / Vite / Next.js',
    stack: 'React, Vite, Next.js, TypeScript, Vitest, Cloudflare Pages',
    architecture: 'Public product surfaces, operations consoles, dashboard flows, and edge-ready UI boundaries.',
    repositories: ['aix-pilot', 'stage-pilot', 'AegisOps', 'twincity-ui', 'security-threat-response-workbench'],
  },
  {
    lane: 'Python / FastAPI / automation',
    stack: 'Python, FastAPI, pytest, report generation, controlled automation scripts',
    architecture: 'Governance APIs, local-first services, document automation, analytics adapters, and generated artifact boundaries.',
    repositories: ['enterprise-llm-adoption-kit', 'Nexus-Hive', 'secure-xl2hwp-local', 'ai-agent-production-lab'],
  },
  {
    lane: 'Data / SQL / Spark / Snowflake',
    stack: 'SQL, Spark, Snowflake, data contracts, semantic views, quality gates',
    architecture: 'Contracted data flows, feature marts, rejected-row review, export boundaries, and public-data rollout maps.',
    repositories: ['lakehouse-contract-lab', 'districtpilot-ai', 'fab-ops-yield-control-tower'],
  },
  {
    lane: 'Infrastructure / deployment',
    stack: 'Terraform, Docker, local compose, GitHub Actions, private deployment notes',
    architecture: 'Environment boundaries, infrastructure modules, secrets outside source, local/staging/runtime separation.',
    repositories: ['llm-onprem-deployment-kit', 'stage-pilot', 'enterprise-llm-adoption-kit'],
  },
  {
    lane: 'Go / SwiftUI / Unity / applied ML',
    stack: 'Go, SwiftUI, Unity WebGL, model-serving notes, explainability artifacts',
    architecture: 'Compact runtime boundaries, native/mobile surfaces, playable WebGL distribution, and human-reviewed model outputs.',
    repositories: ['agent-runtime-go', 'SteadyTap', 'kbbq-idle-unity', 'weld-defect-vision', 'retina-scan-ai'],
  },
];

export const REPOSITORY_COVERAGE: RepositoryCoverageLane[] = [
  {
    lane: 'Front door and flagship products',
    role: 'React/Vite portfolio router, enterprise GenAI console, and Python/FastAPI governance kit.',
    repositories: ['KIM3310', 'doeon-kim-portfolio', 'aix-pilot', 'enterprise-llm-adoption-kit'],
  },
  {
    lane: 'Agent and runtime reliability',
    role: 'TypeScript package runtime, Go runtime, Python eval harnesses, and controlled CLI automation.',
    repositories: ['stage-pilot', 'agent-runtime-go', 'agent-orchestration-benchmark', 'ai-agent-production-lab', 'ai-security-redteam-lab', 'tool-call-finetune-lab', 'multi-cli-pilot'],
  },
  {
    lane: 'Security, incident, and network operations',
    role: 'React operations boards, security workflows, service assurance surfaces, and signed evidence paths.',
    repositories: ['AegisOps', 'security-threat-response-workbench', 'nw-service-assurance-workbench', 'ops-reliability-workbench'],
  },
  {
    lane: 'Enterprise deployment and document automation',
    role: 'Terraform deployment notes, local-first document automation, queue workflows, and controlled adapters.',
    repositories: ['llm-onprem-deployment-kit', 'secure-xl2hwp-local', 'honeypot', 'Upstage-DocuAgent', 'smallbiz-ops-copilot'],
  },
  {
    lane: 'Governed analytics and data quality',
    role: 'Python, SQL, Spark, Snowflake, semantic views, data contracts, and export boundaries.',
    repositories: ['Nexus-Hive', 'lakehouse-contract-lab', 'districtpilot-ai'],
  },
  {
    lane: 'Manufacturing, inspection, and regulated review',
    role: 'Manufacturing analytics, model-serving notes, approval gates, and human-reviewed output boundaries.',
    repositories: ['fab-ops-yield-control-tower', 'memory-test-master-change-gate', 'weld-defect-vision', 'regulated-case-workbench', 'retina-scan-ai'],
  },
  {
    lane: 'Consumer, mobile, game, and research tools',
    role: 'SwiftUI, Unity WebGL, static content systems, digital twin UI, and research workbench surfaces.',
    repositories: ['the-savior', 'dream-interpretation-pages', 'SteadyTap', 'kbbq-idle-unity', 'quantum-workbench', 'twincity-ui', 'beaver-study-orchestrator'],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Military Communications Network Operations',
    skills: ['MW communications', '6-person squad leadership', '24/7 strategic communications operations', '8-9 incidents/month', 'access/intrusion alert monitoring', 'CCTV/VMS/NVR operation'],
  },
  {
    category: 'Infrastructure Operations',
    skills: ['data center operations', 'IDC infrastructure operations', 'UTM/IPsec VPN', 'DRM/DLP/NAC', 'Google Workspace', 'Jira automation'],
  },
  {
    category: 'Runtime and Evaluation',
    skills: ['tool-call parsing', 'bounded retries', 'trace contracts', 'fixture-based evals', 'report artifacts', 'RAG evaluation'],
  },
  {
    category: 'Governance and Automation',
    skills: ['policy gates', 'redaction', 'RBAC', 'signed exports', 'audit logs', 'DLP masking'],
  },
  {
    category: 'Operations Surfaces',
    skills: ['incident queues', 'handoff flows', 'operator dashboards', 'runbooks', 'status boards'],
  },
  {
    category: 'Data Systems',
    skills: ['medallion pipelines', 'data contracts', 'quality gates', 'rejected-row review', 'analytics adapters', 'public API readiness'],
  },
  {
    category: 'Applied ML',
    skills: ['vision inference', 'model cards', 'validation notes', 'explainability', 'serving boundaries'],
  },
  {
    category: 'Delivery',
    skills: ['React', 'Vite', 'FastAPI', 'Cloudflare Pages', 'GitHub Actions', 'Docker'],
  },
];
