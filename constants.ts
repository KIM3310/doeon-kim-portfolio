import { Project, Experience, SkillCategory, Certification, Profile } from './types';

export const PROFILE: Profile = {
  name: "김도언 (Doeon Kim)",
  title: "AI Engineer | Solution Architect",
  email: "ehdjs1351@gmail.com",
  github: "https://github.com/KIM3310",
  linkedin: "https://www.linkedin.com/in/doeon-kim-4742a2388",
  catchphrase: "개발과 운영의 경계를 허무는 엔지니어",
  intro: "LLM/RAG 애플리케이션을 설계부터 배포까지 End-to-End로 구현하는 AI 엔지니어입니다. 시스템 아키텍처 설계, RAG 파이프라인 최적화, 보안/운영(LLMOps) 고도화까지, 비즈니스 가치를 창출하는 기술을 구현합니다."
};

export const WHY_MAZELONE = [
  {
    keyword: "Tenacity & Optimization",
    title: "성능 한계를 돌파하는 집요함",
    description: "단순한 모델 구현에 그치지 않습니다. HAPTIX 프로젝트에서 단계적 학습 전략을 통해 AP를 76%에서 96%까지 끌어올린 끈기가 있습니다. 데이터 전처리부터 하이퍼파라미터 튜닝까지, 최고의 성능을 위해 끝까지 파고듭니다.",
    match: "ML/AI 모델 설계·구현 및 성능 최적화, 데이터 전처리"
  },
  {
    keyword: "Full-Cycle Engineering",
    title: "데이터부터 배포까지, MLOps의 실현",
    description: "모델은 운영될 때 비로소 가치를 가집니다. 데이터 수집 파이프라인 구축부터 Docker/Kubernetes 기반의 배포, 그리고 운영 모니터링까지 AI 시스템의 전체 라이프사이클(Lifecycle)을 직접 설계하고 관리할 수 있습니다.",
    match: "데이터 파이프라인, 모델 학습/평가, 배포·운영(MLOps)"
  },
  {
    keyword: "Scalable Architecture",
    title: "견고한 LLM 백엔드 아키텍처",
    description: "Enterprise Adoption Kit 등을 통해 보안(Auth/Injection 방지)과 확장성을 고려한 RAG 아키텍처를 설계했습니다. FastAPI와 Vector DB를 활용하여 실서비스 가능한 수준의 고성능 백엔드 시스템을 개발합니다.",
    match: "LLM 기반 서비스 개발 및 백엔드 아키텍처 설계"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "AI/ML & LLM",
    skills: ["LLM (GPT, Claude, Gemini, Solar)", "RAG Optimization", "Prompt Engineering", "Computer Vision", "MLOps"]
  },
  {
    category: "Data & Platform",
    skills: ["Palantir Foundry", "Snowflake", "Databricks", "Data Pipelines"]
  },
  {
    category: "Cloud Infrastructure",
    skills: ["Azure (OpenAI, AI Search)", "GCP", "AWS", "SAP Cloud"]
  },
  {
    category: "Backend Engineering",
    skills: ["Python (FastAPI)", "Node.js (Express)", "TypeScript", "PostgreSQL", "MongoDB"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "CI/CD (Github Actions)", "Git"]
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Vite"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "HAPTIX — 감각/감정 맞춤 인테리어 추천 서비스",
    category: "MS AI School 8기 1차 프로젝트",
    role: "데이터 수집/전처리, 프론트엔드 구현, TTS/배경음 생성",
    achievements: [
      "20,256장 이미지 + 17개 Dual Tag 체계 기반으로 데이터셋 구축/정제",
      "단계적 학습(Single → Double → Triple)으로 AP 76.0% → 96.8% → 85.0% 개선",
      "최종 모델 성능: Precision 0.8333 / Recall 0.7206 / AP 0.8503",
      "Azure VM(Ubuntu)+Stable Diffusion 데이터 증강, Azure Blob Storage, WordPress 배포",
      "현업 인터뷰(한샘) 기반으로 태그 체계/서비스 방향(B2B 사전 탐색) 검증"
    ],
    tech: ["Computer Vision", "Azure", "Stable Diffusion", "WordPress"]
  },
  {
    title: "Honeypot(Kkuldanji) — Azure 기반 인수인계 자동화 서비스",
    category: "MS AI School 8기 2차 프로젝트",
    role: "시스템 아키텍처 설계, 백엔드 구현, RAG 성능 고도화",
    achievements: [
      "파이프라인: 업로드 → 텍스트 추출 → LLM 전처리(JSON 청크) → 벡터 인덱싱 → 생성/채팅",
      "모델 역할 분리: Gemini(전처리) + GPT-4o(최종 생성/대화)로 품질-속도-비용 최적화",
      "전처리 표준 스키마(parentSummary/chunkSummary/tags/involvedPeople/relatedSection) 설계",
      "보안: JWT, CSRF, 보안 헤더, Key Vault 옵션 적용",
      "트러블슈팅: safe filename(Task ID), 비동기 처리(BackgroundTasks), DOCX/PDF 처리 경로 분리"
    ],
    tech: ["RAG", "Azure OpenAI", "Gemini", "FastAPI", "Next.js"],
    links: {
      demo: "https://honeypot-proto.vercel.app/",
      github: "https://github.com/KIM3310/honeypot"
    }
  },
  {
    title: "Digital Twin 매장 온톨로지 시스템",
    category: "MS AI School 8기 3차 프로젝트 (진행중)",
    role: "프론트엔드 구현, Twin City, Ontology",
    achievements: [
      "Next.js(React/TypeScript) 기반 운영 관제 UI 구현(Live/History, 필터, 상세, 타임라인)",
      "Zone(다각형)-Event(포인트) 실시간 시각화 및 좌표 정규화",
      "WS/SSE/HTTP Polling fallback 기반 실시간 소스 연결/운영 환경 분리",
      "이벤트 페이로드 공통 스키마 정규화(타입/심각도/상태/존/시간축) 및 분석 확장성 확보",
      "Snowflake/Databricks/Palantir 학습 기반 메타데이터 중심 모델링 관점 반영"
    ],
    tech: ["Next.js", "TypeScript", "WebSocket", "Snowflake", "Databricks", "Palantir"]
  },
  {
    title: "DocuAgent — Upstage API 기반 문서/학습 콘텐츠 자동화",
    category: "개인 프로젝트",
    role: "백엔드 파이프라인, API 연동, Q&A, LMS export 구현",
    achievements: [
      "파이프라인: Document Parse → Solar 스키마 자동생성 → Information Extract → 요약/교육팩",
      "출력: Markdown/HTML/PDF + SCORM 1.2/2004 + IMS CC 1.1/1.3 패키지 생성",
      "LOM 키워드(사용자 태그+핵심 개념) 반영으로 LMS 메타데이터 활용성 강화",
      "트러블슈팅: PDF 변환 경로(poppler/pypdfium2), JSON fallback, LMS 임포트 체크리스트 정리"
    ],
    tech: ["Upstage Solar", "FastAPI", "SCORM", "PDF Processing"],
    links: {
      github: "https://github.com/KIM3310/Upstage-DocuAgent"
    }
  },
  {
    title: "AegisOps — GCP 기반 로그 분석/장애 대응 코파일럿",
    category: "Google DeepMind Hackathon",
    role: "멀티모달 분석 파이프라인, 운영 자동화, UX 고도화",
    achievements: [
      "입력(로그+이미지) → Gemini 분석 → JSON 리포트 → 후속 Q&A/TTS → Google Workspace 자동화",
      "Gemini 3 Pro(RCA/구조화 리포트) + Gemini 2.5 Flash TTS(저지연 음성 브리핑) 이중 모델 전략",
      "Observation-Hypothesis-Decision Path 구조로 explainable reasoning 강화",
      "Gmail/Drive/Docs/Slides/Sheets/Calendar/Chat 연동 자동화"
    ],
    tech: ["Gemini 3 Pro", "GCP", "Google Workspace", "Multimodal AI"],
    links: {
      github: "https://github.com/KIM3310/AegisOps-AI-Incident-Doctor",
      youtube: "https://www.youtube.com/watch?v=FOcjPcMheIg"
    }
  },
  {
    title: "Enterprise LLM Adoption Kit",
    category: "개인 프로젝트",
    role: "백엔드 API + 프론트엔드 + Eval Harness + 프리세일즈 산출물 단독 구현",
    achievements: [
      "Discovery → Secure Architecture → Evals → Deployment/LLMOps end-to-end 설계",
      "보안: RBAC(retrieval 강제), Injection 탐지/Refusal, PII Redaction, Audit Hash Logging",
      "신뢰성: LLM retry/backoff, allowlist tools, UC1/UC2 정책 분리, citation 기반 응답",
      "평가: JSONL eval 파이프라인, baseline diff, red-team 리포트, eval gate",
      "운영: latency/token/cost/policy 이벤트 메트릭 및 원커맨드 데모 구성"
    ],
    tech: ["FastAPI", "React", "LLMOps", "Security", "Evaluation"],
    links: {
      github: "https://github.com/KIM3310/enterprise-llm-adoption-kit"
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Microsoft AI School 8기",
    role: "Trainee",
    period: "2025.09 - 현재",
    description: [
      "AI/클라우드/데이터 분석 교육 이수",
      "엔터프라이즈급 AI 솔루션 팀 프로젝트 수행"
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
