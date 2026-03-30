import { Project, Experience, SkillCategory, Certification, Profile } from './types';

export const PROFILE: Profile = {
  name: 'Doeon Kim',
  title: 'Software Engineer',
  email: 'ehdjs1351@gmail.com',
  github: 'https://github.com/KIM3310',
  linkedin: 'https://www.linkedin.com/in/doeon-kim-4742a2388',
  intro: 'I build web applications and data systems with React, TypeScript, Python, and FastAPI. Focused on reliability, testing, and clean deployment.',
};

export const PROJECTS: Project[] = [
  {
    title: 'StagePilot',
    description: 'Tool-calling reliability middleware for AI SDK. Published on npm as @ai-sdk-tool/parser. 1,720 tests.',
    tech: ['TypeScript', 'AI SDK', 'Vitest', 'OpenTelemetry'],
    github: 'https://github.com/KIM3310/stage-pilot',
    demo: 'https://stage-pilot.pages.dev',
  },
  {
    title: 'AegisOps',
    description: 'Multimodal incident analysis — logs + screenshots into structured RCA with replay evals. 169 tests.',
    tech: ['TypeScript', 'React', 'Express', 'Gemini'],
    github: 'https://github.com/KIM3310/AegisOps',
    demo: 'https://aegisops-ai-incident-doctor.pages.dev',
  },
  {
    title: 'Tool-Call Fine-Tune Lab',
    description: 'QLoRA fine-tuning of Qwen2.5-7B for tool-calling, evaluated on BFCL benchmark. 109 tests.',
    tech: ['Python', 'PyTorch', 'PEFT', 'vLLM'],
    github: 'https://github.com/KIM3310/tool-call-finetune-lab',
  },
  {
    title: 'Nexus-Hive',
    description: 'Multi-agent NL-to-SQL copilot with policy engine and Snowflake/Databricks adapters. 166 tests.',
    tech: ['Python', 'FastAPI', 'LangGraph', 'Snowflake'],
    github: 'https://github.com/KIM3310/Nexus-Hive',
  },
  {
    title: 'Enterprise LLM Adoption Kit',
    description: 'LLM governance toolkit with RBAC, prompt injection detection, PII redaction, and eval harness.',
    tech: ['Python', 'FastAPI', 'ChromaDB', 'AWS Bedrock'],
    github: 'https://github.com/KIM3310/enterprise-llm-adoption-kit',
  },
  {
    title: 'Lakehouse Contract Lab',
    description: 'Spark + Delta Lake medallion pipeline with data contracts and quality gates.',
    tech: ['Python', 'PySpark', 'Delta Lake', 'Snowflake'],
    github: 'https://github.com/KIM3310/lakehouse-contract-lab',
  },
  {
    title: 'Retina Scan AI',
    description: 'Retinal screening backend with ResNet18 classification, severity grading, and clinical reports. 392 tests.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'OpenCV'],
    github: 'https://github.com/KIM3310/retina-scan-ai',
  },
  {
    title: 'Ops Reliability Workbench',
    description: 'Operations reliability toolkit with scoring, narrative generation, and signed review bundles.',
    tech: ['Python', 'Streamlit', 'Pandas', 'Plotly'],
    github: 'https://github.com/KIM3310/ops-reliability-workbench',
  },
  {
    title: 'Fab-Ops Yield Control Tower',
    description: 'Semiconductor fab monitoring with scanner qualification and dual-domain analytics.',
    tech: ['Python', 'FastAPI', 'AWS S3', 'DynamoDB'],
    github: 'https://github.com/KIM3310/fab-ops-yield-control-tower',
  },
  {
    title: 'SmallBiz Ops Copilot',
    description: 'Cloudflare-native ops inbox for support teams — D1, queue management, AI drafts. 152 tests.',
    tech: ['JavaScript', 'Cloudflare Workers', 'D1'],
    github: 'https://github.com/KIM3310/smallbiz-ops-copilot',
    demo: 'https://smallbiz-ops-copilot.pages.dev',
  },
  {
    title: 'Memory Test Change Gate',
    description: 'Manufacturing IT change management with approval gates, rollback plans, and review packs.',
    tech: ['Python', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/KIM3310/memory-test-master-change-gate',
  },
  {
    title: 'Weld Defect Vision',
    description: 'Weld inspection backend with defect classification, review packs, and release-readiness checks.',
    tech: ['Python', 'PyTorch', 'FastAPI'],
    github: 'https://github.com/KIM3310/weld-defect-vision',
  },
  {
    title: 'Honeypot',
    description: 'AI-assisted handover document generator with Azure integration and retrieval-backed Q&A.',
    tech: ['TypeScript', 'React', 'Python', 'Azure'],
    github: 'https://github.com/KIM3310/honeypot',
  },
  {
    title: 'Upstage DocuAgent',
    description: 'Document-to-learning pipeline: upload, extract, Q&A with citations, export to SCORM.',
    tech: ['Python', 'FastAPI', 'Upstage Solar'],
    github: 'https://github.com/KIM3310/Upstage-DocuAgent',
  },
  {
    title: 'Regulated Case Workbench',
    description: 'Regulated workflow desk with approval gates and signed export proof.',
    tech: ['Python', 'FastAPI'],
    github: 'https://github.com/KIM3310/regulated-case-workbench',
  },
  {
    title: 'Quantum Workbench',
    description: 'Quantum circuit experiments with Qiskit, IBM Quantum, and Amazon Braket backends.',
    tech: ['Python', 'Qiskit', 'Braket'],
    github: 'https://github.com/KIM3310/quantum-workbench',
  },
  {
    title: 'Secure XL2HWP Local',
    description: 'Air-gapped Excel-to-Hancom converter with JWT auth, signed exports, and audit logging.',
    tech: ['Python', 'FastAPI'],
    github: 'https://github.com/KIM3310/secure-xl2hwp-local',
  },
  {
    title: 'Beaver Study Orchestrator',
    description: 'Study planner with syllabus extraction, adaptive scheduling, and risk scoring.',
    tech: ['Python', 'FastAPI'],
    github: 'https://github.com/KIM3310/beaver-study-orchestrator',
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
    description: 'Mindfulness app on Cloudflare Pages with OpenAI/Ollama backend.',
    tech: ['JavaScript', 'Cloudflare Pages'],
    github: 'https://github.com/KIM3310/the-savior',
    demo: 'https://the-savior.pages.dev',
  },
  {
    title: 'KBBQ Idle',
    description: 'Unity WebGL idle tycoon game with build preflight and release-readiness checks.',
    tech: ['C#', 'Unity', 'WebGL'],
    github: 'https://github.com/KIM3310/kbbq-idle-unity',
    demo: 'https://kbbq-idle-unity.pages.dev',
  },
  {
    title: 'EcoTide',
    description: 'SwiftUI simulation app with motion telemetry and CLI reviewer handoff.',
    tech: ['Swift', 'SwiftUI'],
    github: 'https://github.com/KIM3310/ecotide',
  },
  {
    title: 'SteadyTap',
    description: 'iOS accessibility coaching app with optional FastAPI backend.',
    tech: ['Swift', 'SwiftUI', 'Python'],
    github: 'https://github.com/KIM3310/SteadyTap',
  },
];

export const SKILLS: SkillCategory[] = [
  { category: 'AI / LLM', skills: ['Tool-Calling Middleware', 'RAG', 'Eval Frameworks', 'Multi-Agent', 'Fine-Tuning (QLoRA)', 'Prompt Engineering'] },
  { category: 'Data Engineering', skills: ['Spark', 'Delta Lake', 'Snowflake', 'Databricks', 'NL-to-SQL', 'Data Contracts'] },
  { category: 'Cloud', skills: ['AWS', 'GCP', 'Azure', 'Terraform', 'Cloudflare Workers', 'Docker'] },
  { category: 'Backend', skills: ['Python (FastAPI)', 'TypeScript (Node.js/Express)', 'REST API Design', 'RBAC', 'OpenTelemetry'] },
  { category: 'Frontend', skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'SwiftUI'] },
  { category: 'DevOps', skills: ['CI/CD (GitHub Actions)', 'Docker', 'Kubernetes', 'Datadog', 'Prometheus'] },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Microsoft AI School 8기',
    role: 'Trainee',
    period: '2025.09 - 2026.02',
    description: ['AI/클라우드/데이터 분석 교육 이수', 'RAG, 인시던트 운영, 실시간 운영 중심 팀 프로젝트 수행'],
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
    role: '전략통신망 보안 팀장',
    period: '2023.11 - 2025.05',
    description: ['지휘통신망 24/7 운영, 네트워크/보안 인프라 관리', '분대장 팀 운영 및 장애 대응'],
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
