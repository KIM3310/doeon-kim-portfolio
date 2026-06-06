# Repository Service Architectures

Date: 2026-06-06 KST

This index replaces public financial assumptions with service architecture. It keeps commercial thinking focused on deployment shape, resource needs, account information, cost controls, and buyer-safe operating boundaries.

## Principles

- Do not publish public financial assumptions, contract assumptions, or public financial ranges in repository docs.
- Keep financial assumptions in private planning until a buyer scope exists.
- Start with static proof surfaces and serverless hosting.
- Buy stateful resources only after a real workflow needs auth, data, reports, jobs, or integrations.
- Use spend limits, usage alerts, and manual approval gates before buyer testing.
- Keep regulated, medical, industrial, and security workflows scoped as human-reviewed support unless expert review and approved data exist.

## Shared Resource Stack

| Layer | Default resource | When to buy or configure |
| --- | --- | --- |
| Public proof | GitHub Pages or Cloudflare Pages | Already enough for static demos and proof surfaces. |
| Domain/DNS | Cloudflare DNS and custom domain | Buy when the public brand/domain name is chosen. |
| App/API runtime | Cloudflare Workers, Render, Fly.io, or Railway | Add when the pilot needs authenticated workflows or server-side jobs. |
| Data | Supabase, Neon Postgres, or Cloudflare D1 | Add when roles, audit history, state, or reports must persist. |
| Object storage | Cloudflare R2 or S3-compatible storage | Add when uploads, reports, screenshots, model artifacts, or signed exports must persist. |
| Queue/cache | Upstash Redis/QStash or Cloudflare Queues/KV | Add when retries, schedules, rate limits, async jobs, or draft generation appear. |
| AI provider | OpenAI or buyer-approved model endpoint | Add per pilot with hard spend limits and no private data in public demos. |
| Observability | Sentry plus privacy-safe analytics | Enable before external users test the service. |
| Conversion path | Calendar link, email alias, and payment link when approved | Configure after the account owner creates the accounts and shares URLs. |

## Repository Matrix

| Repo | Lane | First service motion | Core resources | Architecture |
| --- | --- | --- | --- | --- |
| `AegisOps` | Incident operations cockpit | Tabletop scenario and incident workflow mapping | Cloudflare Pages, Workers or Render API, managed Postgres, R2 | [service architecture](../AegisOps/docs/service-architecture.md) |
| `KIM3310` | GitHub profile router | Use profile to route to the portfolio and top service architectures | GitHub profile README, pinned repo order, custom-domain portfolio link | [service architecture](../KIM3310/docs/service-architecture.md) |
| `Nexus-Hive` | Governed analytics and NL-to-query | Warehouse safety review and query approval workflow | Cloudflare Pages UI, Render/Fly API, managed Postgres, warehouse adapter credentials | [service architecture](../Nexus-Hive/docs/service-architecture.md) |
| `SteadyTap` | Mobile accessibility and habit coaching | TestFlight validation and accessibility review | Apple Developer account, TestFlight, Supabase or CloudKit, optional API backend | [service architecture](../SteadyTap/docs/service-architecture.md) |
| `Upstage-DocuAgent` | Document transformation and learning workflow | Document workflow diagnostic and export validation | Cloudflare Pages, Render/Fly API, R2/S3, queue | [service architecture](../Upstage-DocuAgent/docs/service-architecture.md) |
| `agent-orchestration-benchmark` | Framework selection and benchmark governance | Framework selection review with reproducible benchmark packet | GitHub Actions, GitHub Pages, R2/S3 artifact storage, optional OpenAI/API provider keys for private benchmark runs | [service architecture](../agent-orchestration-benchmark/docs/service-architecture.md) |
| `agent-runtime-go` | Go-native agent runtime support | Integration review and adapter implementation plan | GitHub Releases, pkg.go.dev visibility, small container runtime for demo API, Sentry for demo errors | [service architecture](../agent-runtime-go/docs/service-architecture.md) |
| `ai-agent-production-lab` | Agent production readiness | Readiness assessment using fixture-based traces and cost-review reports | GitHub Pages, GitHub Actions, artifact storage, optional OpenAI key for private runs | [service architecture](../ai-agent-production-lab/docs/service-architecture.md) |
| `ai-security-redteam-lab` | AI security red-team workflow | Scoped red-team diagnostic with clear legal and data boundaries | GitHub Pages, container runner, R2/S3 encrypted report storage, OpenAI/provider API key with caps | [service architecture](../ai-security-redteam-lab/docs/service-architecture.md) |
| `aix-pilot` | Enterprise AI adoption and governance | Readiness review, data-boundary mapping, then a scoped pilot with buyer-provided non-sensitive sample data | Cloudflare Pages/Workers, managed Postgres, R2 object storage, queue or scheduler | [service architecture](../aix-pilot/docs/service-architecture.md) |
| `beaver-study-orchestrator` | Education planning and orchestration | Single cohort workflow validation | GitHub Pages, Render/Fly API, managed Postgres, email/calendar integration later | [service architecture](../beaver-study-orchestrator/docs/service-architecture.md) |
| `districtpilot-ai` | Civic operations forecasting | Public dataset prototype and procurement-friendly security review | GitHub Pages/Cloudflare Pages, Render/Fly API, managed Postgres, R2/S3 datasets | [service architecture](../districtpilot-ai/docs/service-architecture.md) |
| `doeon-kim-portfolio` | Portfolio and offer router | Route visitors into architecture-backed pilot conversations without public financial assumptions | GitHub Pages, Cloudflare DNS/domain, Calendly or Cal.com, Stripe Payment Links later | [service architecture](../doeon-kim-portfolio/docs/service-architecture.md) |
| `dream-interpretation-pages` | Consumer content experiment | Content quality and safety-boundary review | Cloudflare Pages, custom domain if spun out, analytics, optional CMS | [service architecture](../dream-interpretation-pages/docs/service-architecture.md) |
| `enterprise-llm-adoption-kit` | LLM governance rollout kit | Governance workshop, policy inventory, and controlled starter implementation | Cloudflare Pages, FastAPI/Workers API, managed Postgres, R2 | [service architecture](../enterprise-llm-adoption-kit/docs/service-architecture.md) |
| `fab-ops-yield-control-tower` | Manufacturing operations control tower | Synthetic data control-tower review and operator workflow mapping | Cloudflare Pages UI, Render/Fly API, managed Postgres, R2/S3 reports | [service architecture](../fab-ops-yield-control-tower/docs/service-architecture.md) |
| `honeypot` | Secure handover and onboarding documents | Handover template library and workflow setup | Cloudflare Pages frontend, Render/Fly backend, managed Postgres, R2/S3 attachments | [service architecture](../honeypot/docs/service-architecture.md) |
| `kbbq-idle-unity` | Game proof and playable distribution | Playable prototype polish and retention instrumentation | Unity build pipeline, Cloudflare Pages or itch.io, optional PlayFab/Supabase, privacy-safe analytics | [service architecture](../kbbq-idle-unity/docs/service-architecture.md) |
| `lakehouse-contract-lab` | Data contracts and quality gates | Data-contract assessment using sample or redacted datasets | GitHub Pages, buyer Spark/Databricks/Snowflake environment later, R2/S3 artifact storage, CI runner | [service architecture](../lakehouse-contract-lab/docs/service-architecture.md) |
| `llm-onprem-deployment-kit` | Private LLM deployment readiness | Readiness review and reference-architecture mapping | private VPC or buyer cloud, container registry, managed Postgres, vector database | [service architecture](../llm-onprem-deployment-kit/docs/service-architecture.md) |
| `memory-test-master-change-gate` | Semiconductor change-gate workflow | Change-impact workflow review with synthetic master data | GitHub Pages/Cloudflare Pages, Render/Fly API, managed Postgres, R2/S3 evidence | [service architecture](../memory-test-master-change-gate/docs/service-architecture.md) |
| `multi-cli-pilot` | Controlled CLI automation | Workflow safety review and dry-run automation prototype | GitHub Pages, container sandbox, managed Postgres or log store, queue for approvals | [service architecture](../multi-cli-pilot/docs/service-architecture.md) |
| `nw-service-assurance-workbench` | Network service assurance | Service assurance workflow review with synthetic outage replay | Cloudflare Pages/Workers, managed Postgres, optional time-series database, R2/S3 reports | [service architecture](../nw-service-assurance-workbench/docs/service-architecture.md) |
| `ops-reliability-workbench` | Reliability and evidence workflow | Reliability review operating-rhythm setup | GitHub Pages or Cloudflare Pages, Render/Fly API, managed Postgres, R2/S3 for evidence | [service architecture](../ops-reliability-workbench/docs/service-architecture.md) |
| `quantum-workbench` | Research and education workbench | Workshop or research workflow review | GitHub Pages, notebook/runtime artifacts, optional container host, artifact storage | [service architecture](../quantum-workbench/docs/service-architecture.md) |
| `regulated-case-workbench` | Regulated case workflow | Case workflow mapping and redaction/export validation | Cloudflare Pages, Render/Fly API, managed Postgres, R2/S3 encrypted storage | [service architecture](../regulated-case-workbench/docs/service-architecture.md) |
| `retina-scan-ai` | Medical-image research validation | Research validation protocol review with medical partner input | GitHub Pages, private container inference if approved, controlled object storage, metadata database | [service architecture](../retina-scan-ai/docs/service-architecture.md) |
| `secure-xl2hwp-local` | Local-first Korean document automation | Template compatibility review and local install validation | local installer/package, optional private API host, Postgres/SQLite depending on deployment, signed export storage | [service architecture](../secure-xl2hwp-local/docs/service-architecture.md) |
| `security-threat-response-workbench` | Security response workflow | Tabletop exercise and response-board setup | Cloudflare Pages/Workers, D1 or managed Postgres, R2, Turnstile | [service architecture](../security-threat-response-workbench/docs/service-architecture.md) |
| `smallbiz-ops-copilot` | Small-team operations inbox | Single-vertical workflow template with approval-before-send | Cloudflare Pages/Workers, D1 or Supabase, KV/Redis, queue | [service architecture](../smallbiz-ops-copilot/docs/service-architecture.md) |
| `stage-pilot` | Agent runtime reliability | Reliability audit using buyer-provided failure traces or synthetic fixtures | npm package release, GitHub Pages, CI benchmark runner, artifact storage | [service architecture](../stage-pilot/docs/service-architecture.md) |
| `the-savior` | Wellness reflection assistant | Safety and escalation-flow review before distribution | Cloudflare Pages/Workers, privacy-safe analytics, optional content API, Sentry | [service architecture](../the-savior/docs/service-architecture.md) |
| `tool-call-finetune-lab` | Tool-call evaluation and adaptation | Model adaptation study using approved datasets and reproducible evals | GitHub Pages, container runner, artifact storage, OpenAI/fine-tuning provider account if needed | [service architecture](../tool-call-finetune-lab/docs/service-architecture.md) |
| `twincity-ui` | Digital twin UI proof | Visual workflow reuse inside manufacturing or civic operations pilot | Cloudflare Pages, optional API backend, object storage for assets, analytics | [service architecture](../twincity-ui/docs/service-architecture.md) |
| `weld-defect-vision` | Industrial inspection validation | Human-reviewed validation study with approved image data | GitHub Pages, container inference host, R2/S3 image storage, managed Postgres | [service architecture](../weld-defect-vision/docs/service-architecture.md) |

## Lane Grouping

### Operations and security systems

- `AegisOps`
- `nw-service-assurance-workbench`
- `ops-reliability-workbench`
- `security-threat-response-workbench`

### Portfolio routers

- `KIM3310`
- `doeon-kim-portfolio`

### Data, manufacturing, and regulated systems

- `Nexus-Hive`
- `fab-ops-yield-control-tower`
- `lakehouse-contract-lab`
- `memory-test-master-change-gate`
- `regulated-case-workbench`
- `weld-defect-vision`

### Supporting product experiments

- `SteadyTap`
- `Upstage-DocuAgent`
- `agent-orchestration-benchmark`
- `agent-runtime-go`
- `beaver-study-orchestrator`
- `districtpilot-ai`
- `dream-interpretation-pages`
- `honeypot`
- `kbbq-idle-unity`
- `multi-cli-pilot`
- `quantum-workbench`
- `retina-scan-ai`
- `secure-xl2hwp-local`
- `smallbiz-ops-copilot`
- `the-savior`
- `tool-call-finetune-lab`
- `twincity-ui`

### AI and runtime systems

- `ai-agent-production-lab`
- `ai-security-redteam-lab`
- `aix-pilot`
- `enterprise-llm-adoption-kit`
- `llm-onprem-deployment-kit`
- `stage-pilot`

## Account Information Needed

The account owner can provide these once purchased or configured:

- Domain and DNS access.
- Calendar scheduling URL.
- Payment link URL, if a payment provider is enabled.
- Cloudflare account access or project tokens.
- Supabase, Neon, or D1 project details when a repo needs persistence.
- R2/S3 bucket credentials for uploads, reports, exports, or artifacts.
- OpenAI or buyer-approved model-provider keys with hard spend limits.
- Sentry and analytics DSNs/tokens.
- Email provider token only when transactional mail is needed.

## Execution Order

1. Keep all demos static until a real workflow needs state.
2. Connect a custom domain and analytics to the portfolio first.
3. Pick one lead lane and wire only its minimum backend resources.
4. Add calendar and payment links after account setup, not before.
5. Move private buyer data only after auth, retention, deletion, logging, and rollback paths are documented.
