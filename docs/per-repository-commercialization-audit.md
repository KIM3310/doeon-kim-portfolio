# Per-Repository Commercialization Audit

Date: 2026-06-06 KST

This audit reviews the 35 editable coverage repositories as service candidates. It intentionally avoids public financial assumptions, public financial ranges, and expected contract assumptions. Use it to decide which systems deserve account setup, cloud resources, buyer discovery, and production hardening.

## Portfolio-Level Verdict

The strongest path is not 35 separate paid products. The practical route is four service lanes with architecture-backed proof:

1. **Enterprise AI adoption and runtime reliability**
   - Lead repos: `aix-pilot`, `enterprise-llm-adoption-kit`, `stage-pilot`, `agent-runtime-go`, `agent-orchestration-benchmark`, `ai-agent-production-lab`, `ai-security-redteam-lab`.
   - Service shape: readiness review, controlled pilot, governance, evaluation, and handoff support.

2. **Security, incident, and network operations**
   - Lead repos: `AegisOps`, `security-threat-response-workbench`, `nw-service-assurance-workbench`, `ops-reliability-workbench`.
   - Service shape: operator cockpit, tabletop exercise, SOC/NOC handoff, and reporting workflow.

3. **Data, manufacturing, and governed analytics**
   - Lead repos: `Nexus-Hive`, `lakehouse-contract-lab`, `fab-ops-yield-control-tower`, `memory-test-master-change-gate`, `weld-defect-vision`.
   - Service shape: diagnostic, validation study, data contract workflow, and operations dashboard pilot.

4. **Document, regulated workflow, and Korean back-office automation**
   - Lead repos: `secure-xl2hwp-local`, `Upstage-DocuAgent`, `regulated-case-workbench`, `honeypot`, `smallbiz-ops-copilot`.
   - Service shape: local-first automation, approval workflow, document conversion, and audit pack.

## Critical Cross-Cutting Problems

| Problem | Why It Is Dangerous | Fix |
| --- | --- | --- |
| Static demos can look like products but are not full deployments. | Buyers may click but cannot evaluate onboarding, auth, data handling, or workflow completion. | For lead repos, add buyer walkthroughs, acceptance criteria, and architecture docs. |
| Public price or value readiness assumptions reduce trust. | Buyers and technical reviewers may see unvalidated numbers as hype. | Keep financial assumptions private; public docs should show architecture, scope, resources, and controls. |
| No customer proof or design partners. | Service confidence stays theoretical. | Recruit design partners for the top lanes before buying heavy infrastructure. |
| Regulated and medical repos can overclaim quickly. | Legal, safety, and trust risk can destroy credibility. | Keep regulated/medical repos framed as research or workflow templates until approved data and expert review exist. |
| Too many equally visible products dilute the brand. | Buyers cannot tell what the core service offer is. | Route first to `aix-pilot`, `enterprise-llm-adoption-kit`, `AegisOps`, `stage-pilot`, and one data/manufacturing lane. |
| No instrumentation for demo click-to-contact flow. | You cannot learn which lane produces qualified demand. | Add privacy-safe click analytics and a narrow contact or calendar path. |

## Repository-by-Repository Audit

| Repo | Service direction | Architecture priority | Fatal blocker | Highest-value fixes |
| --- | --- | --- | --- | --- |
| `AegisOps` | Incident operations cockpit | Tabletop scenario and incident workflow mapping | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/AegisOps/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `KIM3310` | GitHub profile router | Use profile to route to the portfolio and top service architectures | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/KIM3310/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `Nexus-Hive` | Governed analytics and NL-to-query | Warehouse safety review and query approval workflow | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/Nexus-Hive/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `SteadyTap` | Mobile accessibility and habit coaching | TestFlight validation and accessibility review | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/SteadyTap/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `Upstage-DocuAgent` | Document transformation and learning workflow | Document workflow diagnostic and export validation | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/Upstage-DocuAgent/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `agent-orchestration-benchmark` | Framework selection and benchmark governance | Framework selection review with reproducible benchmark packet | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/agent-orchestration-benchmark/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `agent-runtime-go` | Go-native agent runtime support | Integration review and adapter implementation plan | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/agent-runtime-go/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `ai-agent-production-lab` | Agent production readiness | Readiness assessment using fixture-based traces and cost-review reports | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/ai-agent-production-lab/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `ai-security-redteam-lab` | AI security red-team workflow | Scoped red-team diagnostic with clear legal and data boundaries | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/ai-security-redteam-lab/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `aix-pilot` | Enterprise AI adoption and governance | Readiness review, data-boundary mapping, then a scoped pilot with buyer-provided non-sensitive sample data | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/aix-pilot/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `beaver-study-orchestrator` | Education planning and orchestration | Single cohort workflow validation | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/beaver-study-orchestrator/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `districtpilot-ai` | Civic operations forecasting | Public dataset prototype and procurement-friendly security review | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/districtpilot-ai/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `doeon-kim-portfolio` | Portfolio and offer router | Route visitors into architecture-backed pilot conversations without public financial assumptions | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/doeon-kim-portfolio/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `dream-interpretation-pages` | Consumer content experiment | Content quality and safety-boundary review | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/dream-interpretation-pages/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `enterprise-llm-adoption-kit` | LLM governance rollout kit | Governance workshop, policy inventory, and controlled starter implementation | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/enterprise-llm-adoption-kit/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `fab-ops-yield-control-tower` | Manufacturing operations control tower | Synthetic data control-tower review and operator workflow mapping | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/fab-ops-yield-control-tower/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `honeypot` | Secure handover and onboarding documents | Handover template library and workflow setup | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/honeypot/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `kbbq-idle-unity` | Game proof and playable distribution | Playable prototype polish and retention instrumentation | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/kbbq-idle-unity/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `lakehouse-contract-lab` | Data contracts and quality gates | Data-contract assessment using sample or redacted datasets | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/lakehouse-contract-lab/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `llm-onprem-deployment-kit` | Private LLM deployment readiness | Readiness review and reference-architecture mapping | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/llm-onprem-deployment-kit/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `memory-test-master-change-gate` | Semiconductor change-gate workflow | Change-impact workflow review with synthetic master data | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/memory-test-master-change-gate/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `multi-cli-pilot` | Controlled CLI automation | Workflow safety review and dry-run automation prototype | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/multi-cli-pilot/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `nw-service-assurance-workbench` | Network service assurance | Service assurance workflow review with synthetic outage replay | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/nw-service-assurance-workbench/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `ops-reliability-workbench` | Reliability and evidence workflow | Reliability review operating-rhythm setup | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/ops-reliability-workbench/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `quantum-workbench` | Research and education workbench | Workshop or research workflow review | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/quantum-workbench/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `regulated-case-workbench` | Regulated case workflow | Case workflow mapping and redaction/export validation | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/regulated-case-workbench/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `retina-scan-ai` | Medical-image research validation | Research validation protocol review with medical partner input | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/retina-scan-ai/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `secure-xl2hwp-local` | Local-first Korean document automation | Template compatibility review and local install validation | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/secure-xl2hwp-local/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `security-threat-response-workbench` | Security response workflow | Tabletop exercise and response-board setup | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/security-threat-response-workbench/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `smallbiz-ops-copilot` | Small-team operations inbox | Single-vertical workflow template with approval-before-send | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/smallbiz-ops-copilot/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `stage-pilot` | Agent runtime reliability | Reliability audit using buyer-provided failure traces or synthetic fixtures | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/stage-pilot/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `the-savior` | Wellness reflection assistant | Safety and escalation-flow review before distribution | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/the-savior/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `tool-call-finetune-lab` | Tool-call evaluation and adaptation | Model adaptation study using approved datasets and reproducible evals | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/tool-call-finetune-lab/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `twincity-ui` | Digital twin UI proof | Visual workflow reuse inside manufacturing or civic operations pilot | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/twincity-ui/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |
| `weld-defect-vision` | Industrial inspection validation | Human-reviewed validation study with approved image data | Needs buyer-specific validation before heavy resources. | Use [service architecture](https://github.com/KIM3310/weld-defect-vision/blob/main/docs/service-architecture.md), wire only required resources, and keep financial assumptions private. |

## Priority Ranking

| Rank | Repo or Bundle | Why |
| ---: | --- | --- |
| 1 | `aix-pilot` + `enterprise-llm-adoption-kit` | Clearest enterprise AI buyer and strongest demo-to-pilot story. |
| 2 | `AegisOps` + `security-threat-response-workbench` + `nw-service-assurance-workbench` | Strong fit with IT infrastructure, communications, security monitoring, and ops credibility. |
| 3 | `stage-pilot` + `agent-runtime-go` + `agent-orchestration-benchmark` | Good developer-tooling lane, but needs adoption and documentation to sell. |
| 4 | `Nexus-Hive` + `lakehouse-contract-lab` | Strong data-governance value if buyer data access is available. |
| 5 | `fab-ops-yield-control-tower` + `memory-test-master-change-gate` + `weld-defect-vision` | High operational value but depends on domain access and expert validation. |
| 6 | `secure-xl2hwp-local` + `Upstage-DocuAgent` + `honeypot` | Good Korean back-office/document automation lane, but needs clearer buyer packaging. |
| 7 | Consumer/supporting demos | Useful proof, weaker commercial priority. |

## 30-Day Fix Plan

1. Keep public docs free of public financial assumptions and scope assumptions.
2. Connect a domain, calendar link, and privacy-safe analytics to the portfolio.
3. Pick one lead lane and wire only its minimum service architecture.
4. Add pilot acceptance criteria and data-boundary notes to lead repos.
5. Keep consumer, wellness, game, and research-only repos in a supporting section.
6. Recruit design partners before buying paid compute, database capacity, or GPU resources.

## Bottom Line

Move toward service launch through architecture, proof, and buyer validation. Public repositories should show how each system would be deployed safely and efficiently; financial assumptions belong in private planning after scope exists.
