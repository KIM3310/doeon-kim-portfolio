import { Project, Experience, SkillCategory, Certification, Profile } from './types';

export const PROFILE: Profile = {
  name: 'Doeon Kim',
  title: 'AI Solutions Architect & Data Platform Engineer',
  email: 'ehdjs1351@gmail.com',
  github: 'https://github.com/KIM3310',
  linkedin: 'https://www.linkedin.com/in/doeon-kim-4742a2388',
  intro: 'AI/data platform engineering with Azure, Databricks, Snowflake, Palantir Foundry. 31+ public projects. Microsoft AI School graduate. Trilingual: KR / JP / EN.',
};

export const PROJECTS: Project[] = [
  // --- Flagship (Impact order) ---
  {
    title: 'MoveSignal AI',
    description: 'Tri-platform budget allocation decision engine (Snowflake Korea Hackathon 2026). Snowflake ML FORECAST + Cortex AI + Databricks Delta/MLflow + Palantir Foundry Ontology. ~$80/mo.',
    tech: ['Snowflake', 'Databricks', 'Palantir Foundry', 'Streamlit', 'MLflow'],
    github: 'https://github.com/KIM3310/movesignal-ai',
  },
  {
    title: 'StagePilot',
    description: 'Tool-calling reliability middleware — 25% to 90% benchmark lift. Published on npm (@ai-sdk-tool/parser). 1,720 tests.',
    tech: ['TypeScript', 'AI SDK', 'Vitest', 'OpenTelemetry'],
    github: 'https://github.com/KIM3310/stage-pilot',
    demo: 'https://stage-pilot.pages.dev',
  },
  {
    title: 'Tool-Call Fine-Tune Lab',
    description: 'QLoRA fine-tuning Qwen2.5-7B for tool-calling. Iterated through ~25 training failures to stable convergence. BFCL benchmark. 109 tests.',
    tech: ['Python', 'PyTorch', 'PEFT', 'vLLM', 'BFCL'],
    github: 'https://github.com/KIM3310/tool-call-finetune-lab',
  },
  {
    title: 'Enterprise LLM Adoption Kit',
    description: 'LLM governance: RBAC, evals, PII redaction, prompt injection detection, audit logging. Azure OpenAI + Databricks MLflow + Snowflake. K8s-ready.',
    tech: ['Python', 'FastAPI', 'Azure OpenAI', 'Databricks', 'Snowflake'],
    github: 'https://github.com/KIM3310/enterprise-llm-adoption-kit',
    demo: 'https://enterprise-llm-kit.pages.dev',
  },
  {
    title: 'Nexus-Hive',
    description: 'Multi-agent NL-to-SQL copilot with deny/review/allow policy engine. Snowflake + Databricks multi-warehouse. 166 tests.',
    tech: ['Python', 'FastAPI', 'LangGraph', 'Snowflake', 'Databricks'],
    github: 'https://github.com/KIM3310/Nexus-Hive',
    demo: 'https://nexus-hive.pages.dev',
  },
  {
    title: 'AegisOps',
    description: 'Multimodal incident analysis — logs + screenshots into structured RCA with replay evals. Live demo. 169 tests.',
    tech: ['TypeScript', 'React', 'Express', 'Gemini'],
    github: 'https://github.com/KIM3310/AegisOps',
    demo: 'https://aegisops-ai-incident-doctor.pages.dev',
  },
  {
    title: 'Lakehouse Contract Lab',
    description: 'Spark + Delta Lake medallion pipeline with data contracts, quality gates, and Databricks Unity Catalog + Snowflake export.',
    tech: ['Python', 'PySpark', 'Delta Lake', 'Databricks', 'Snowflake'],
    github: 'https://github.com/KIM3310/lakehouse-contract-lab',
  },
  // --- Applied AI / Vision ---
  {
    title: 'Retina Scan AI',
    description: 'Retinal screening backend with ResNet18 classification, severity grading, and clinical reports. 392 tests.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'OpenCV'],
    github: 'https://github.com/KIM3310/retina-scan-ai',
  },
  {
    title: 'Weld Defect Vision',
    description: 'Weld inspection backend with defect classification and release-readiness checks.',
    tech: ['Python', 'PyTorch', 'FastAPI'],
    github: 'https://github.com/KIM3310/weld-defect-vision',
  },
  {
    title: 'Upstage DocuAgent',
    description: 'Document-to-learning pipeline: upload, extract, Q&A with citations, export to SCORM.',
    tech: ['Python', 'FastAPI', 'Upstage Solar'],
    github: 'https://github.com/KIM3310/Upstage-DocuAgent',
    demo: 'https://upstage-docuagent.pages.dev',
  },
  // --- Operations / Manufacturing ---
  {
    title: 'Fab-Ops Yield Control Tower',
    description: 'Semiconductor fab monitoring with yield trend tracking, alarm acknowledge, and shift handoff.',
    tech: ['Python', 'FastAPI', 'AWS S3', 'DynamoDB'],
    github: 'https://github.com/KIM3310/fab-ops-yield-control-tower',
    demo: 'https://fab-ops-yield-control-tower.pages.dev',
  },
  {
    title: 'Ops Reliability Workbench',
    description: 'Operations reliability toolkit with scoring, narrative generation, and signed review bundles. 28 tests.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    github: 'https://github.com/KIM3310/ops-reliability-workbench',
  },
  {
    title: 'Memory Test Change Gate',
    description: 'Manufacturing IT change management with approval gates and rollback plans.',
    tech: ['Python', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/KIM3310/memory-test-master-change-gate',
  },
  {
    title: 'SmallBiz Ops Copilot',
    description: 'Cloudflare-native ops inbox for support teams — D1, queue management, AI drafts. 152 tests.',
    tech: ['JavaScript', 'Cloudflare Workers', 'D1'],
    github: 'https://github.com/KIM3310/smallbiz-ops-copilot',
    demo: 'https://smallbiz-ops-copilot.pages.dev',
  },
  {
    title: 'Regulated Case Workbench',
    description: 'Regulated workflow desk with approval gates and signed export proof.',
    tech: ['Python', 'FastAPI'],
    github: 'https://github.com/KIM3310/regulated-case-workbench',
    demo: 'https://regulated-case-workbench.pages.dev',
  },
  // --- Networking / Security ---
  {
    title: 'NW Service Assurance Workbench',
    description: 'Telecom network assurance with outage triage, E2E service visibility, and operator runbooks.',
    tech: ['TypeScript', 'Cloudflare Workers'],
    github: 'https://github.com/KIM3310/nw-service-assurance-workbench',
    demo: 'https://nw-service-assurance-workbench.ehdjs1351.workers.dev',
  },
  {
    title: 'Security Threat Response Workbench',
    description: 'Cloud security response workbench for WAF, IDS, DDoS triage and shift handoff.',
    tech: ['TypeScript', 'Cloudflare Workers'],
    github: 'https://github.com/KIM3310/security-threat-response-workbench',
    demo: 'https://security-threat-response-workbench.ehdjs1351.workers.dev',
  },
  // --- Full-stack / Web ---
  {
    title: 'Honeypot',
    description: 'AI-assisted handover document generator with Azure integration and retrieval-backed Q&A.',
    tech: ['TypeScript', 'React', 'Python', 'Azure'],
    github: 'https://github.com/KIM3310/honeypot',
    demo: 'https://honeypot-3st.pages.dev',
  },
  {
    title: 'Dream Interpretation Pages',
    description: 'Cloudflare Pages dream interpretation app with OpenAI and Turnstile bot protection.',
    tech: ['TypeScript', 'Vite', 'Cloudflare'],
    github: 'https://github.com/KIM3310/dream-interpretation-pages',
    demo: 'https://dream-interpretation-pages.pages.dev',
  },
  {
    title: 'The Savior',
    description: 'Buddhist-inspired mindfulness app on Cloudflare Pages with OpenAI/Ollama backend.',
    tech: ['JavaScript', 'Cloudflare Pages'],
    github: 'https://github.com/KIM3310/the-savior',
    demo: 'https://the-savior.pages.dev',
  },
  {
    title: 'TwinCity UI',
    description: 'Digital-twin operational dashboard with Next.js, WebSocket/SSE fallback, and SLA reporting.',
    tech: ['TypeScript', 'Next.js', 'React'],
    github: 'https://github.com/KIM3310/twincity-ui',
    demo: 'https://twincity-ui.pages.dev',
  },
  // --- Data / Research ---
  {
    title: 'Signal Risk Lab',
    description: 'Domain-driven finance platform: quant signal research and brokerage advisory workflows. 43 tests.',
    tech: ['Python', 'FastAPI', 'Pydantic'],
    github: 'https://github.com/KIM3310/signal-risk-lab',
    demo: 'https://signal-risk-lab.pages.dev',
  },
  {
    title: 'Quantum Workbench',
    description: 'Quantum circuit experiments with Qiskit, IBM Quantum, and Amazon Braket backends. 58 tests.',
    tech: ['Python', 'Qiskit', 'Braket'],
    github: 'https://github.com/KIM3310/quantum-workbench',
  },
  {
    title: 'Secure XL2HWP Local',
    description: 'Air-gapped Excel-to-Hancom converter with JWT auth, signed exports, and audit logging. 97 tests.',
    tech: ['Python', 'FastAPI'],
    github: 'https://github.com/KIM3310/secure-xl2hwp-local',
    demo: 'https://secure-xl2hwp-local.pages.dev',
  },
  // --- Mobile / Game ---
  {
    title: 'EcoTide',
    description: 'SwiftUI simulation app with motion telemetry and CLI reviewer handoff.',
    tech: ['Swift', 'SwiftUI'],
    github: 'https://github.com/KIM3310/ecotide',
    demo: 'https://ecotide.pages.dev',
  },
  {
    title: 'SteadyTap',
    description: 'iOS accessibility coaching app with optional FastAPI backend. 12 tests.',
    tech: ['Swift', 'SwiftUI', 'Python'],
    github: 'https://github.com/KIM3310/SteadyTap',
    demo: 'https://steadytap.pages.dev',
  },
  {
    title: 'KBBQ Idle',
    description: 'Unity WebGL idle tycoon game with build preflight and release-readiness checks.',
    tech: ['C#', 'Unity', 'WebGL'],
    github: 'https://github.com/KIM3310/kbbq-idle-unity',
    demo: 'https://kbbq-idle-unity.pages.dev',
  },
  // --- Orchestration / CLI ---
  {
    title: 'OGX',
    description: 'Multi-agent CLI orchestration with task graphs, MCP tools, and tmux HUD.',
    tech: ['TypeScript', 'Node.js'],
    github: 'https://github.com/KIM3310/ogx',
  },
  {
    title: 'Beaver Study Orchestrator',
    description: 'Study planner with syllabus extraction, adaptive scheduling, and risk scoring.',
    tech: ['Python', 'FastAPI'],
    github: 'https://github.com/KIM3310/beaver-study-orchestrator',
  },
  // --- Archived (historical) ---
  {
    title: 'Aegis-Air',
    description: 'Air-gapped incident review engine — predecessor to AegisOps.',
    tech: ['Python', 'FastAPI'],
    github: 'https://github.com/KIM3310/Aegis-Air',
    demo: 'https://aegis-air.pages.dev',
  },
  {
    title: 'The Logistics Prophet',
    description: 'ML logistics control tower with SHAP explainability and RDF ontology.',
    tech: ['Python', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/KIM3310/the-logistics-prophet',
    demo: 'https://the-logistics-prophet.pages.dev',
  },
  {
    title: 'DV Regression Lab',
    description: 'RTL/DV regression orchestration with failure taxonomy and flaky detection.',
    tech: ['Python', 'FastAPI'],
    github: 'https://github.com/KIM3310/dv-regression-lab',
  },
];

export const SKILLS: SkillCategory[] = [
  { category: 'AI / ML / LLM', skills: ['Machine Learning', 'Deep Learning', 'Computer Vision (OpenCV, ResNet)', 'LLM Fine-Tuning (QLoRA, PEFT)', 'RAG', 'Tool-Calling Middleware', 'Multi-Agent Orchestration', 'Prompt Engineering'] },
  { category: 'Data Engineering', skills: ['Spark', 'Delta Lake', 'Snowflake (ML FORECAST, Cortex AI)', 'Databricks (Unity Catalog, MLflow)', 'Palantir Foundry (Ontology, Contour)', 'NL-to-SQL', 'Data Contracts', 'ETL/ELT Pipelines'] },
  { category: 'Cloud & Infra', skills: ['AWS (S3, Bedrock, EKS)', 'GCP (Cloud Run, BigQuery)', 'Azure (OpenAI, AI Search)', 'Terraform', 'Cloudflare Workers/Pages', 'Docker', 'Kubernetes'] },
  { category: 'Backend', skills: ['Python (FastAPI)', 'TypeScript (Node.js/Express)', 'Java (Spring Boot 학습중)', 'REST API Design', 'RBAC', 'OpenTelemetry', 'PostgreSQL', 'Oracle'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'TypeScript', 'SwiftUI'] },
  { category: 'DevOps / SRE', skills: ['CI/CD (GitHub Actions)', 'Docker', 'Kubernetes', 'Datadog', 'Prometheus', 'Grafana', 'Git', 'Linux'] },
  { category: 'Network / Security', skills: ['네트워크 운영/관제', '보안 인프라 관리', 'VPN/방화벽', '장애 대응/복구', 'ISMS', '24/7 모니터링'] },
];

export const EXPERIENCE: Experience[] = [
  {
    company: '한국방송통신대학교',
    role: '컴퓨터과학과',
    period: '2026.03 - 재학 중',
    description: ['컴퓨터과학 전공 학사 과정'],
  },
  {
    company: 'Microsoft AI School 8기',
    role: 'Trainee',
    period: '2025.09 - 2026.02',
    description: ['Azure AI, Copilot, enterprise AI deployment 교육 이수', 'RAG, 인시던트 운영, 실시간 운영 중심 팀 프로젝트 수행'],
  },
  {
    company: 'ATOM TECH SOLUTIONS',
    role: 'Full Stack Intern',
    location: 'Berkeley, CA (Remote)',
    period: '2025.06 - 2025.09',
    description: [
      'Node.js / Express 기반 백엔드 기능 개발 및 OpenAI 챗봇 연동',
      '외부 API 연동 흐름 정비, 인증/예외 처리, 로그 기반 오류 분석',
      '미국 팀과 비동기 협업, 배포 전 품질 점검',
    ],
  },
  {
    company: '대한민국 국방부',
    role: '국가전략통신망 분대장',
    period: '2023.11 - 2025.05',
    description: ['국가전략통신망 24/7 운영, 네트워크/보안 인프라 관리', '분대장 팀 리더십 및 미션크리티컬 장애 대응'],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { issuer: 'Snowflake', name: 'SnowPro Associate' },
  { issuer: 'Databricks', name: 'Platform Architect (AWS + GCP)' },
  { issuer: 'Palantir', name: 'Foundry Data Engineer' },
  { issuer: 'Datadog', name: 'Observability Certification' },
  { issuer: 'Microsoft', name: 'AI-900' },
  { issuer: 'Palantir', name: 'Foundry Foundations' },
  { issuer: 'Databricks', name: 'Fundamentals' },
  { issuer: 'IBM', name: 'AI Fundamentals' },
  { issuer: 'IBM', name: 'Cloud Computing Fundamentals' },
  { issuer: 'IBM', name: 'Cyber Security Fundamentals' },
  { issuer: 'SAP', name: 'Cloud Platform Integration' },
];
