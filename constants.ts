import { Project, Experience, SkillCategory, Certification, Profile, SecondaryProject, UpgradeTrack } from './types';

export const PROFILE: Profile = {
  name: "김도언 (Doeon Kim)",
  title: "LLM Systems Engineer | AI Solution Architect",
  email: "ehdjs1351@gmail.com",
  github: "https://github.com/KIM3310",
  linkedin: "https://www.linkedin.com/in/doeon-kim-4742a2388",
  catchphrase: "Reliable AI systems, from evals to runtime ops",
  intro: "툴콜링 신뢰성, incident copilot, enterprise governance, real-time ops에 강한 AI 엔지니어입니다. LLM 시스템을 설계부터 배포, 평가, 운영까지 end-to-end로 구현합니다."
};

export const PORTFOLIO_REPO_URL = "https://github.com/KIM3310/doeon-kim-portfolio";
export const PORTFOLIO_DISCUSSIONS_URL = `${PORTFOLIO_REPO_URL}/discussions`;
export const PORTFOLIO_QA_URL = `${PORTFOLIO_DISCUSSIONS_URL}/categories/q-a`;
export const PORTFOLIO_IDEAS_URL = `${PORTFOLIO_DISCUSSIONS_URL}/categories/ideas`;
export const PORTFOLIO_FEEDBACK_ISSUE_URL = `${PORTFOLIO_REPO_URL}/issues/new?template=portfolio-feedback.yml`;
export const PORTFOLIO_GISCUS_REPO = "KIM3310/doeon-kim-portfolio";
export const PORTFOLIO_GISCUS_REPO_ID = "R_kgDOROWHZg";
export const PORTFOLIO_GISCUS_CATEGORY = "Q&A";
export const PORTFOLIO_GISCUS_CATEGORY_ID = "DIC_kwDOROWHZs4C3zga";

export const PORTFOLIO_SIGNAL_DECK = [
  {
    label: "Delivery Surface",
    value: "LLM Systems -> Product Ops",
    detail: "Architecture, implementation, evals, rollout, and hardening for production-minded AI products."
  },
  {
    label: "Reliability Focus",
    value: "Tool Calling + Incident AI",
    detail: "Parser middleware, replay suites, guardrails, and operator workflows instead of one-off demos."
  },
  {
    label: "Portfolio Shape",
    value: "Curated canonical repos",
    detail: "Merged duplicate repos and kept a smaller flagship set with clearer ownership and stronger proof."
  },
  {
    label: "Next Flagship",
    value: "Governed Data Platform",
    detail: "Expanding Nexus-Hive and logistics control-tower proof toward warehouse governance, lineage, and semantic operations."
  }
];

export const PORTFOLIO_ACTIONS = [
  {
    label: "Email Brief",
    href: `mailto:${PROFILE.email}`,
    helper: "Send a product, infra, or agent-runtime problem statement."
  },
  {
    label: "GitHub Proof",
    href: PROFILE.github,
    helper: "Review canonical repos, tests, and deployment surfaces."
  },
  {
    label: "Community Thread",
    href: "#community",
    helper: "Leave feedback or ask about technical decisions directly on the page."
  }
];

export const WHY_TEAMS_HIRE_ME = [
  {
    keyword: "LLM Reliability",
    title: "모델 출력이 흔들려도 시스템은 무너지지 않게 만듭니다",
    description: "StagePilot에서 parser middleware, bounded Ralph-loop retry, BenchLab eval surface를 묶어 non-native model tool calling success를 87.5%에서 100.0%로 끌어올렸습니다.",
    match: "Tool-calling reliability, agent runtime hardening, eval/regression infrastructure"
  },
  {
    keyword: "Incident Systems",
    title: "운영 데이터를 구조화된 대응 흐름으로 바꿉니다",
    description: "AegisOps와 Aegis-Air에서 로그, 스크린샷, 로컬 추론을 결합해 incident triage, RCA, operator handoff를 위한 구조화된 출력 경로를 만들었습니다.",
    match: "Multimodal reasoning, safety-conscious ops UX, incident automation"
  },
  {
    keyword: "Enterprise Delivery",
    title: "데모가 아니라 거버넌스와 운영까지 닫습니다",
    description: "Enterprise LLM Adoption Kit, Honeypot, TwinCity UI에서 audit, fallback, async jobs, transport resilience, evidence-pack export까지 production surface를 설계했습니다.",
    match: "Enterprise rollout, governance controls, runtime observability and ops"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "AI/ML & LLM",
    skills: ["LLM Systems", "Tool Calling", "Evals & Benchmarks", "RAG", "Multimodal AI"]
  },
  {
    category: "Data & Platform",
    skills: ["Palantir Foundry", "Snowflake", "Databricks", "Data Pipelines"]
  },
  {
    category: "Cloud Infrastructure",
    skills: ["Azure (OpenAI, AI Search)", "GCP", "AWS", "Cloud Run", "Terraform"]
  },
  {
    category: "Backend Engineering",
    skills: ["Python (FastAPI)", "Node.js (Express)", "TypeScript", "API Design", "Schema Guardrails"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "CI/CD (GitHub Actions)", "Observability", "Git", "tmux"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Vite"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "StagePilot — Tool-Calling Reliability Runtime",
    category: "Flagship / LLM Reliability",
    role: "Parser middleware, BenchLab eval tooling, StagePilot orchestration",
    achievements: [
      "Canonical repo for parser middleware, StagePilot orchestration, and BenchLab prompt-mode eval tooling",
      "Improved benchmark success from 87.5% to 100.0% with parser recovery plus bounded Ralph-loop retry",
      "Shipped local API/demo surfaces and a Cloud Run deployment path for reproducible operator testing"
    ],
    tech: ["TypeScript", "AI SDK", "Tool Calling", "BenchLab", "Cloud Run"],
    links: {
      github: "https://github.com/KIM3310/stage-pilot",
      youtube: "https://youtu.be/6trgTH1vX4M"
    }
  },
  {
    title: "AegisOps — Multimodal Incident Copilot",
    category: "Flagship / Incident AI",
    role: "Multimodal incident analysis, JSON guardrails, Workspace automation",
    achievements: [
      "Combined logs and monitoring screenshots into structured RCA, action plans, and operator handoff artifacts",
      "Added JSON/schema guardrails plus BYOK and no-key modes to keep the incident flow demoable across environments",
      "Validated replay and workflow coverage with 34 passing tests"
    ],
    tech: ["Gemini 3 Pro", "GCP", "Google Workspace", "Multimodal AI"],
    links: {
      demo: "https://aegisops-ai-incident-doctor.pages.dev",
      github: "https://github.com/KIM3310/AegisOps",
      youtube: "https://www.youtube.com/watch?v=FOcjPcMheIg"
    }
  },
  {
    title: "Aegis-Air — Local-First Incident Review Engine",
    category: "Flagship / Air-Gapped Ops",
    role: "Local inference pipeline, replay suite, secure incident review UX",
    achievements: [
      "Built a local-first incident review engine for teams that cannot send production telemetry to public APIs",
      "Returned structured RCA with severity, failure bucket, evidence, and immediate actions through FastAPI endpoints",
      "Reached 32/32 replay rubric checks with 100% severity and failure-bucket accuracy on the bundled suite"
    ],
    tech: ["FastAPI", "Ollama", "Replay Evals", "SSE", "AWS Terraform"],
    links: {
      demo: "https://aegis-air.pages.dev",
      github: "https://github.com/KIM3310/Aegis-Air"
    }
  },
  {
    title: "Enterprise LLM Adoption Kit",
    category: "Flagship / Enterprise LLMOps",
    role: "Backend API, frontend, eval harness, governance controls",
    achievements: [
      "Designed the full stack from discovery to secure architecture, evals, deployment, and LLMOps handoff",
      "Implemented RBAC, injection detection, PII redaction, audit hash logging, and citation-oriented response controls",
      "Added JSONL eval pipelines, red-team reporting, and deployment drafts to support enterprise rollout decisions"
    ],
    tech: ["FastAPI", "React", "LLMOps", "Security", "Evaluation"],
    links: {
      demo: "https://enterprise-llm-kit.pages.dev",
      github: "https://github.com/KIM3310/enterprise-llm-adoption-kit"
    }
  },
  {
    title: "TwinCity UI — Digital Twin Ops Console",
    category: "Real-Time Ops Console",
    role: "Operator UX, event normalization, transport fallback reliability",
    achievements: [
      "Built a floorplan-based triage console with live/history views, timeline actions, and list-map-detail state sync",
      "Implemented WS -> SSE -> HTTP polling fallback with connection-state handling and demo-first mock feeds",
      "Normalized inconsistent provider payloads into a single event schema for deterministic operator workflows"
    ],
    tech: ["Next.js", "TypeScript", "WebSocket", "SSE", "Databricks"],
    links: {
      demo: "https://twincity-ui.pages.dev",
      github: "https://github.com/KIM3310/twincity-ui"
    }
  },
  {
    title: "Honeypot (Kkuldanji) — Azure Document Handover Copilot",
    category: "Azure RAG Delivery",
    role: "System architecture, backend pipeline, chunk schema, async ingest",
    achievements: [
      "Pipeline: upload -> text extraction -> LLM preprocessing -> vector indexing -> generation/chat over internal docs",
      "Designed schema-first chunking and async job handling to stabilize citations and ingest behavior",
      "Separated document paths, security controls, and Dockerized handoff flow for repeatable team delivery"
    ],
    tech: ["Azure OpenAI", "Azure AI Search", "FastAPI", "RAG", "Docker"],
    links: {
      demo: "https://honeypot-proto.vercel.app/",
      github: "https://github.com/KIM3310/honeypot"
    }
  },
  {
    title: "ogx — Gemini-Based Multi-Agent Orchestration CLI",
    category: "Agent Systems / CLI",
    role: "Gemini CLI orchestration, tmux workers, notification hooks",
    achievements: [
      "Built a fresh TypeScript CLI for multi-agent coordination with project-scoped runtime state and safe-by-default command handling",
      "Added setup, doctor, launch, team, status, and cancel flows plus Slack, Telegram, and Gmail notification hooks",
      "Wrapped the runtime with an HTTP API surface for Cloud Run deployment and operations checks"
    ],
    tech: ["TypeScript", "Gemini", "tmux", "CLI", "Cloud Run"],
    links: {
      github: "https://github.com/KIM3310/ogx"
    }
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Microsoft AI School 8기",
    role: "Trainee",
    period: "2025.09 - 2026.02",
    description: [
      "AI/클라우드/데이터 분석 교육 이수",
      "RAG, incident operations, real-time ops 중심의 팀 프로젝트 수행"
    ]
  },
  {
    company: "ATOM TECH SOLUTIONS LTD",
    role: "Full Stack Intern (Remote)",
    location: "미국 캘리포니아 버클리",
    period: "2025.06 - 2025.09",
    description: [
      "기존 리뷰 플랫폼에 OpenAI API 기반 문의 챗봇 통합",
      "풀스택 유지보수 및 기능 개선"
    ]
  },
  {
    company: "대한민국 국방부",
    role: "통신병 (병장 만기전역)",
    period: "2023.11 - 2025.05",
    description: [
      "지휘통신망 24/7 운영, 네트워크 인프라/보안 관리",
      "분대장 팀 운영 및 리더십 경험"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { issuer: "Microsoft", name: "AI-900: Microsoft Azure AI Fundamentals" },
  { issuer: "Snowflake", name: "SnowPro Associate: Platform Certification" },
  { issuer: "Palantir", name: "Foundry Data Engineer Associate" },
  { issuer: "Palantir", name: "Foundry Foundations" },
  { issuer: "Databricks", name: "AWS Databricks Platform Architect" },
  { issuer: "Databricks", name: "GCP Databricks Platform Architect" },
  { issuer: "Databricks", name: "Databricks Fundamentals" },
  { issuer: "IBM", name: "IBM Artificial Intelligence Fundamentals" },
  { issuer: "IBM", name: "IBM Cloud Computing Fundamentals" },
  { issuer: "IBM", name: "IBM Cyber Security Fundamentals" },
  { issuer: "Datadog", name: "Datadog Observability Certifications" },
  { issuer: "SAP", name: "SAP Cloud Platform Integration Service" }
];

export const UPGRADE_TRACKS: UpgradeTrack[] = [
  {
    title: "Governed Analytics Platform",
    systems: ["Nexus-Hive", "The Logistics Prophet", "TwinCity UI"],
    currentBase: ["Natural-language analytics", "Control-tower operations", "Audit and explainability"],
    nextBuild: "Expand Nexus-Hive with warehouse adapters, data contracts, lineage, quality gates, and governed NL2SQL evaluation instead of adding another BI demo.",
    outcome: "A real data-platform flagship with audited queries, security posture, and reviewer-grade evidence."
  },
  {
    title: "Ontology + Action Workflow",
    systems: ["The Logistics Prophet", "TwinCity UI", "Aegis-Air"],
    currentBase: ["Entity-aware operations", "Rule-driven actions", "Incident and queue workflows"],
    nextBuild: "Make objects, actions, approval rules, and audit trails louder than the copilot layer so each workflow reads like operational software, not just inference.",
    outcome: "Stronger object-centric systems with visible operator handoff, write-back logic, and governance."
  },
  {
    title: "Business Workflow Platform",
    systems: ["regulated-case-workbench", "enterprise-llm-adoption-kit", "honeypot", "smallbiz-ops-copilot"],
    currentBase: ["Governance", "Async document flows", "Approval-safe support ops", "Regulated case workflow baseline"],
    nextBuild: "Deepen regulated-case-workbench with richer policy packs, reviewer assignments, signed export manifests, and cross-case audit views while keeping grounded AI summaries strict and inspectable.",
    outcome: "A focused workflow product family that proves business-process AI can stay structured, reviewable, and safe."
  },
  {
    title: "Flagship Proof Packaging",
    systems: ["stage-pilot", "AegisOps", "Aegis-Air", "Enterprise LLM Adoption Kit"],
    currentBase: ["CI", "Runtime briefs", "Review packs", "Deployment surfaces"],
    nextBuild: "Add the missing screenshots, architecture diagrams, benchmark tables, and operator walkthrough assets that make strong systems easy to review in two minutes.",
    outcome: "The strongest repos become easier to trust immediately without extra explanation."
  }
];

export const PORTFOLIO_RUNTIME_META = [
  { label: "Scope", value: "7 flagship / 19 product repos" },
  { label: "Stack", value: "React 19 + Vite 6" },
  { label: "Focus", value: "LLM Reliability / Data Platforms / Runtime Ops" },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    title: "SteadyTap",
    focus: "Accessibility-first iOS app with integrated FastAPI backend",
    github: "https://github.com/KIM3310/SteadyTap"
  },
  {
    title: "smallbiz-ops-copilot",
    focus: "Cloudflare-based SMB ops copilot with governance-oriented support workflow",
    github: "https://github.com/KIM3310/smallbiz-ops-copilot"
  },
  {
    title: "The Logistics Prophet",
    focus: "Predictive logistics control tower with auditability and explainability",
    github: "https://github.com/KIM3310/the-logistics-prophet",
    note: "Ontology, audit chain, and action workflow proof"
  },
  {
    title: "Upstage DocuAgent",
    focus: "Document analysis and learning-package export pipeline",
    github: "https://github.com/KIM3310/Upstage-DocuAgent"
  },
  {
    title: "Nexus-Hive",
    focus: "Multi-agent BI copilot for enterprise analytics workflows",
    github: "https://github.com/KIM3310/Nexus-Hive",
    note: "Data platform flagship expansion in progress"
  },
  {
    title: "fab-ops-yield-control-tower",
    focus: "Semiconductor-style alarm triage, lot risk ranking, and shift handoff control tower",
    github: "https://github.com/KIM3310/fab-ops-yield-control-tower",
    note: "New manufacturing flagship baseline"
  },
  {
    title: "regulated-case-workbench",
    focus: "Case inbox, evidence review, redaction preview, approval, and export manifest workflow",
    github: "https://github.com/KIM3310/regulated-case-workbench",
    note: "New regulated workflow flagship baseline"
  },
  {
    title: "secure-xl2hwp-local",
    focus: "Air-gapped document automation pipeline for local environments",
    github: "https://github.com/KIM3310/secure-xl2hwp-local"
  },
  {
    title: "beaver-study-orchestrator",
    focus: "Syllabus parsing and study-plan orchestration service",
    github: "https://github.com/KIM3310/beaver-study-orchestrator"
  },
  {
    title: "the-savior",
    focus: "Wellness app with AI coaching and journaling surface",
    github: "https://github.com/KIM3310/the-savior"
  }
];
