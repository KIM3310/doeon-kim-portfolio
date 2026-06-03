import { Project, SkillCategory, Profile, WorkExperience, EducationItem, Certification, RepositoryCoverageLane } from './types';

export const PROFILE: Profile = {
  name: 'KIM3310 Systems Gallery',
  title: 'Enterprise GenAI, data center security operations, military communications, IT infrastructure, secure automation, and AI/data systems',
  email: 'ehdjs1351@gmail.com',
  github: 'https://github.com/KIM3310',
  linkedin: 'https://www.linkedin.com/in/doeon-kim-4742a2388',
  intro:
    'A neutral gallery of runnable systems anchored in 24/7 military MW communications, CCTV/VMS/NVR operation, access-control and intrusion-alert monitoring, current infrastructure operations, and reviewable software evidence. The focus is architecture, verification, security boundaries, digital workspace operations, and UI surfaces that can be inspected without private data.',
};

export const PORTFOLIO_STATS = [
  { label: 'Public repos', value: '44' },
  { label: 'Editable repos', value: '35' },
  { label: 'Product surfaces', value: '18 live' },
  { label: 'Open PRs', value: '0' },
] as const;

export const CURRENT_ROLE: WorkExperience = {
  company: 'InterX',
  title: 'IT Infrastructure Operations Manager',
  period: 'Apr 2026 - Present',
  location: 'Seoul, South Korea',
  summary:
    'Operates and supports data-center, IDC, security, network, collaboration, and service-desk workflows for an internal business environment.',
  focus: [
    'Data center and IDC infrastructure operations',
    'Security and network operations: UTM, IPsec VPN, DRM, DLP, NAC, firewall monitoring',
    'Jira, Confluence, Google Workspace, and company-wide system administration',
    'IT asset, license, backup, access-right, onboarding, and helpdesk controls',
  ],
  outcomes: [
    'Maintains digital workspace permissions, workflows, and new-hire IT onboarding setup',
    'Improves recurring operations through Jira automation rules, process reports, and vendor coordination',
    'Researches and test-beds new IT/SaaS solutions for security posture and operational efficiency',
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
    reviewSignal: 'Enterprise GenAI product architecture, RAG evaluation, and security gates',
    commercialPath: 'Pilot-to-subscription GenAI operations console',
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
    reviewSignal: 'Runtime reliability, parser recovery, benchmark discipline',
    commercialPath: 'Developer package, support plan, and reliability audit',
  },
  {
    title: 'agent-runtime-go',
    description:
      'Minimal Go orchestration runtime for deterministic tool execution, retries, adapter boundaries, and traceable control flow.',
    tech: ['Go', 'Agent runtime', 'Retries', 'Adapters'],
    github: 'https://github.com/KIM3310/agent-runtime-go',
    market: 'Backend teams needing controlled agent execution',
    reviewSignal: 'Go systems design, deterministic orchestration, provider boundaries',
    commercialPath: 'Embedded runtime plus integration consulting',
  },
  {
    title: 'ai-agent-production-lab',
    description:
      'Credential-free agent lab with deterministic planner fixtures, trace events, cost accounting, evaluation assertions, and HTML reports.',
    tech: ['Python', 'Agent evals', 'Tracing', 'Reports'],
    github: 'https://github.com/KIM3310/ai-agent-production-lab',
    market: 'Teams moving agents from demo to production',
    reviewSignal: 'Tracing, cost accounting, eval assertions, report automation',
    commercialPath: 'Agent readiness assessment and CI test pack',
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
    reviewSignal: 'Operator UX, replay evals, multimodal incident workflow',
    commercialPath: 'Incident review cockpit for SOC or IT operations',
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
    reviewSignal: 'Threat triage, runbook design, analyst handoff',
    commercialPath: 'Packaged response desk and tabletop exercise kit',
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
    reviewSignal: 'Service assurance, outage triage, SLA visibility',
    commercialPath: 'Network operations dashboard starter kit',
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
    reviewSignal: 'RBAC, audit logging, evals, redaction, rollout controls',
    commercialPath: 'Paid adoption workshop and implementation kit',
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
    reviewSignal: 'Local-first security, signed exports, auditability',
    commercialPath: 'Per-seat offline conversion automation license',
  },
  {
    title: 'regulated-case-workbench',
    description:
      'Case workflow desk with redaction preview, approval gates, policy checks, signed export proof, and cross-case audit feeds.',
    tech: ['FastAPI', 'Approval gates', 'Redaction', 'Private case study'],
    market: 'Compliance-heavy legal, finance, and review teams',
    reviewSignal: 'Approval gates, redaction, audit workflow design',
    commercialPath: 'Private case-management workflow template',
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
    market: 'Data teams modernizing batch quality and contracts',
    reviewSignal: 'Spark, data contracts, quality gates, warehouse export boundaries',
    commercialPath: 'Data contract starter pack and migration advisory',
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
    reviewSignal: 'NL-to-query boundaries, policy checks, audit trails',
    commercialPath: 'Governed BI copilot for internal analytics',
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
    reviewSignal: 'Yield monitoring, shift handoff, qualification analytics',
    commercialPath: 'Factory operations control tower prototype',
  },
  {
    title: 'weld-defect-vision',
    description:
      'Industrial vision workflow with defect detection, severity reporting, model-serving notes, and release-readiness checks.',
    tech: ['Vision', 'Model serving', 'Inspection', 'Reports'],
    github: 'https://github.com/KIM3310/weld-defect-vision',
    market: 'Industrial inspection and quality teams',
    reviewSignal: 'Vision governance, model serving, validation notes',
    commercialPath: 'Inspection AI proof-of-concept package',
  },
  {
    title: 'retina-scan-ai',
    description:
      'Medical-image research workflow with classification, explainability artifacts, risk notes, and validation templates.',
    tech: ['Medical imaging', 'Explainability', 'Validation', 'Risk notes'],
    github: 'https://github.com/KIM3310/retina-scan-ai',
    market: 'Health AI research and validation teams',
    reviewSignal: 'Risk notes, explainability, model cards, compliance caution',
    commercialPath: 'Research validation template, not clinical sales',
  },
  {
    title: 'smallbiz-ops-copilot',
    description:
      'Operations inbox for small teams with queue triage, draft approval, KPI cards, and bounded runtime controls.',
    tech: ['Workers', 'Operations inbox', 'Approval flow', 'Private case study'],
    market: 'Small support teams with repetitive inbox operations',
    reviewSignal: 'Cloudflare Workers, queue UX, approval boundaries',
    commercialPath: 'Low-cost SaaS ops inbox for small businesses',
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
    reviewSignal: 'SwiftUI, inclusive UX, optional backend sync',
    commercialPath: 'Freemium coaching app with team plans',
  },
];

export const REPOSITORY_COVERAGE: RepositoryCoverageLane[] = [
  {
    lane: 'Front door and flagship products',
    role: 'Turns the account into one coherent product and engineering story.',
    repositories: ['KIM3310', 'doeon-kim-portfolio', 'aix-pilot', 'enterprise-llm-adoption-kit'],
  },
  {
    lane: 'Agent and runtime reliability',
    role: 'Shows deterministic execution, eval discipline, safety checks, and package/runtime judgment.',
    repositories: ['stage-pilot', 'agent-runtime-go', 'agent-orchestration-benchmark', 'ai-agent-production-lab', 'ai-security-redteam-lab', 'tool-call-finetune-lab', 'multi-cli-pilot'],
  },
  {
    lane: 'Security, incident, and network operations',
    role: 'Shows operator-grade incident response, service visibility, handoff, and signed evidence.',
    repositories: ['AegisOps', 'security-threat-response-workbench', 'nw-service-assurance-workbench', 'ops-reliability-workbench'],
  },
  {
    lane: 'Enterprise deployment and document automation',
    role: 'Converts private knowledge, documents, and support queues into controlled paid workflows.',
    repositories: ['llm-onprem-deployment-kit', 'secure-xl2hwp-local', 'honeypot', 'Upstage-DocuAgent', 'smallbiz-ops-copilot'],
  },
  {
    lane: 'Governed analytics and data quality',
    role: 'Shows policy-checked analytics, forecast/action loops, data contracts, and auditable research.',
    repositories: ['Nexus-Hive', 'lakehouse-contract-lab', 'districtpilot-ai'],
  },
  {
    lane: 'Manufacturing, inspection, and regulated review',
    role: 'Shows high-trust operations, model validation, approval gates, and safety-aware boundaries.',
    repositories: ['fab-ops-yield-control-tower', 'memory-test-master-change-gate', 'weld-defect-vision', 'regulated-case-workbench', 'retina-scan-ai'],
  },
  {
    lane: 'Consumer, mobile, game, and research tools',
    role: 'Shows product taste, native/mobile craft, distribution experiments, and controlled research tools.',
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
    skills: ['medallion pipelines', 'data contracts', 'quality gates', 'rejected-row review', 'analytics adapters'],
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
