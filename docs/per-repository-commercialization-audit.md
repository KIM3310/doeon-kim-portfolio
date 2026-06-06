# Per-Repository Commercialization Audit

Date: 2026-06-06 KST

This audit reviews the 35 editable coverage repositories as commercial assets. It is a planning document, not a promise of revenue. The revenue ranges assume active founder-led selling, buyer discovery, and scoped pilots. Passive revenue for every repository should be treated as $0 until a real buyer, contract, or distribution channel exists.

## Benchmark Context

The pricing and revenue ranges use conservative B2B assumptions:

- Entry diagnostic or workshop: $3k-$15k.
- Fixed-scope pilot: $15k-$75k.
- Recurring support, governance, or SaaS subscription: $1k-$15k per month depending on buyer size and operational risk.
- Consumer or hobby products are treated as low-confidence unless they have distribution, retention, and payment proof.

Current benchmark signals used for calibration:

- SaaS Capital's 2025 private B2B SaaS benchmark notes median surveyed company growth around 25%, a useful reminder not to model runaway growth by default: https://www.saas-capital.com/research/
- High Alpha and OpenView's 2024 SaaS benchmarks describe public SaaS growth stabilizing around 17%-18% and net dollar retention around 110%, which supports focusing on retention and expansion instead of only new logos: https://www.highalpha.com/saas-benchmarks/2024
- Gartner's SaaS deal-size benchmark reports median SaaS contract values in the tens of thousands of dollars, which fits fixed-scope B2B pilots better than tiny self-serve pricing for this portfolio: https://www.gartner.com/en/documents/5357963
- Bessemer's State of AI 2025 highlights very high AI revenue-per-employee outliers but also low-margin pressure, so AI upside is real but should not be the base case: https://www.bvp.com/atlas/the-state-of-ai-2025
- SaaS Price Lab's benchmark ranges place mid-market SaaS pricing broadly from hundreds to thousands per month and enterprise plans higher, which matches the recurring support ranges used here: https://www.saaspricelab.com/benchmarks/saas-pricing-benchmarks

## Portfolio-Level Verdict

The strongest commercial path is not 35 separate startups. The highest-probability route is four packaged offer lines:

1. **Enterprise AI adoption and runtime reliability**
   - Lead repos: `aix-pilot`, `enterprise-llm-adoption-kit`, `stage-pilot`, `agent-runtime-go`, `agent-orchestration-benchmark`, `ai-agent-production-lab`, `ai-security-redteam-lab`.
   - Commercial shape: paid readiness audit, fixed pilot, recurring governance and evaluation support.

2. **Security, incident, and network operations**
   - Lead repos: `AegisOps`, `security-threat-response-workbench`, `nw-service-assurance-workbench`, `ops-reliability-workbench`.
   - Commercial shape: operator cockpit, tabletop exercise kit, SOC/NOC handoff package.

3. **Data, manufacturing, and governed analytics**
   - Lead repos: `Nexus-Hive`, `lakehouse-contract-lab`, `fab-ops-yield-control-tower`, `memory-test-master-change-gate`, `weld-defect-vision`.
   - Commercial shape: paid diagnostic, validation study, operations dashboard pilot.

4. **Document, regulated workflow, and Korean back-office automation**
   - Lead repos: `secure-xl2hwp-local`, `Upstage-DocuAgent`, `regulated-case-workbench`, `honeypot`, `smallbiz-ops-copilot`.
   - Commercial shape: local-first automation, approval workflow, document conversion and audit pack.

Everything else should support credibility, not lead the sales motion, until it proves buyer demand.

## Critical Cross-Cutting Problems

| Problem | Why It Is Dangerous | Fix |
| --- | --- | --- |
| Static demos can look like products but are not full deployments. | Buyers may click but cannot evaluate real onboarding, auth, data handling, or workflow completion. | For top 10 repos, add a buyer walkthrough, acceptance criteria, and a pilot checklist. |
| No explicit paid entry path. | Reviewers see technical proof but do not know what to buy. | Add one clear offer per lead lane: diagnostic, pilot, support, or implementation sprint. |
| No customer proof or design partners. | Revenue estimates stay theoretical. | Recruit 2-3 design partners for the top two lanes before building more features. |
| Regulated and medical repos can overclaim quickly. | Legal, safety, and trust risk can destroy credibility. | Keep regulated/medical repos framed as research or workflow templates until approved data and expert review exist. |
| Too many equally visible products dilute the brand. | Buyers cannot tell what the core commercial offer is. | Keep `aix-pilot`, `enterprise-llm-adoption-kit`, `AegisOps`, `stage-pilot`, and one data/manufacturing lane as the first sales path. |
| No instrumentation for demo click-to-lead flow. | You cannot learn which lane produces qualified demand. | Add privacy-safe click analytics and a narrow contact form or calendar path. |

## Repository-by-Repository Audit

| Repo | Commercial direction | 12-month revenue hypothesis | 24-month upside | Fatal blocker | Highest-value fixes |
| --- | --- | ---: | ---: | --- | --- |
| `aix-pilot` | Make this the flagship Enterprise GenAI pilot console for RAG, agent approval, DLP, evals, and KPI governance. | $50k-$180k | $180k-$650k | Needs buyer-specific data integration, security review, and measurable ROI before enterprise trust. | Add 2 design-partner walkthroughs, ROI calculator, data-ingestion checklist, security FAQ, and a paid pilot page. |
| `enterprise-llm-adoption-kit` | Sell as an LLM governance workshop plus implementation kit for teams adopting AI under risk controls. | $40k-$160k | $150k-$500k | Can become consulting-heavy and hard to productize without repeatable templates. | Package a 2-week adoption audit, RBAC/audit-log starter, policy checklist, and fixed deliverables. |
| `stage-pilot` | Sell as developer tooling for tool-call reliability, parser hardening, benchmark fixtures, and recurring eval maintenance. | $30k-$120k | $120k-$400k | Devtool GTM is hard without adoption, docs, package trust, and visible benchmark wins. | Improve docs, publish package examples, add benchmark leaderboard, and offer $5k-$15k reliability audits. |
| `AegisOps` | Sell as an incident review and handoff cockpit for SOC, IT ops, and reliability teams. | $40k-$140k | $150k-$450k | Needs real integrations and incident-data trust boundaries, not just a polished UI. | Add Splunk/Datadog/Jira mock connectors, tabletop exercise template, and a SOC handoff checklist. |
| `security-threat-response-workbench` | Sell as a packaged response desk plus tabletop exercise kit for security teams and MSPs. | $35k-$120k | $120k-$350k | Security buyers will challenge depth, threat-model evidence, and operational integrations. | Add MITRE-style mappings, IOC import/export, analyst runbook export, and a paid tabletop package. |
| `nw-service-assurance-workbench` | Sell as a network operations dashboard starter for NOC, IDC, and enterprise network teams. | $30k-$110k | $100k-$330k | Without real telemetry/SNMP/log integrations, it stays a scenario demo. | Add telemetry adapter stubs, outage replay pack, SLA report export, and NOC shift-handoff workflow. |
| `Nexus-Hive` | Sell as a governed BI/NL-to-SQL copilot with policy checks and audit trails. | $35k-$130k | $120k-$420k | NL-to-SQL hallucination and data-permission risk are fatal for analytics buyers. | Add warehouse adapter demos, SQL safety tests, query approval gates, and an analyst acceptance rubric. |
| `lakehouse-contract-lab` | Sell as a data contract starter pack and migration advisory for batch quality and governed pipelines. | $30k-$120k | $120k-$380k | Needs buyer data context and performance proof to move beyond architecture demo. | Add a sample migration playbook, rejected-row dashboard, contract template pack, and Snowflake/Databricks handoff docs. |
| `fab-ops-yield-control-tower` | Sell as a manufacturing operations control tower prototype for yield, incidents, and shift handoff. | $40k-$160k | $150k-$550k | Domain data access and manufacturing credibility are the hardest gates. | Add operator personas, synthetic fab data dictionary, ROI model around downtime/yield, and pilot acceptance criteria. |
| `secure-xl2hwp-local` | Sell as a local-first Korean document conversion and audit automation product. | $25k-$100k | $90k-$300k | Needs trusted HWP/template compatibility, offline install reliability, and Korean enterprise security posture. | Add packaged installer, template validator, signed export demo, Korean buyer page, and per-seat pricing. |
| `agent-runtime-go` | Sell as an embeddable Go agent runtime plus integration consulting. | $15k-$70k | $60k-$220k | Runtime libraries need adoption and maintenance credibility; buyers may prefer established frameworks. | Add Go examples, provider adapters, API docs, trace screenshots, and a paid integration offer. |
| `agent-orchestration-benchmark` | Sell as a framework selection audit and custom benchmark pack. | $20k-$80k | $80k-$260k | Benchmarks become stale fast and can be disputed if not reproducible. | Add versioned benchmark suites, reproducibility report, framework matrix, and buyer intake form. |
| `ai-agent-production-lab` | Sell as an agent readiness assessment and CI test pack. | $20k-$85k | $75k-$250k | It is more of a service accelerator than standalone SaaS. | Convert reports into a downloadable review pack, add CI templates, and pair it with `aix-pilot` or `stage-pilot`. |
| `ai-security-redteam-lab` | Sell as an AI security red-team diagnostic and mitigation report. | $25k-$100k | $90k-$320k | Security claims require rigor; shallow red-team demos lose trust quickly. | Add attack taxonomy, severity scoring, remediation templates, and clear legal/scope boundaries. |
| `llm-onprem-deployment-kit` | Sell as a private or hybrid LLM deployment assessment and implementation sprint. | $30k-$140k | $120k-$450k | On-prem projects are support-heavy and can overwhelm a solo operator. | Narrow to readiness audit first, add infra checklist, reference architecture, and support limits. |
| `memory-test-master-change-gate` | Sell as a semiconductor master-data change-impact gate. | $25k-$120k | $100k-$400k | Extremely niche; without semiconductor contacts it will not sell. | Add a manufacturing buyer brief, impact screenshots, rollback checklist, and domain-specific outreach list. |
| `ops-reliability-workbench` | Sell as an operations reliability and governance review workbench. | $20k-$90k | $80k-$280k | The positioning is too broad and overlaps with stronger ops/security repos. | Narrow to one ICP, probably IT/SRE incident review, then merge proof with `AegisOps`. |
| `regulated-case-workbench` | Sell as a private case-workflow template for compliance-heavy teams. | $20k-$90k | $80k-$260k | Legal and finance workflows need data handling, audit, and approval proof. | Add redaction accuracy notes, approval export, audit log examples, and legal-use disclaimers. |
| `Upstage-DocuAgent` | Sell as a document-to-learning or document Q&A workflow for internal training teams. | $15k-$80k | $60k-$220k | Upload privacy, LMS export correctness, and buyer focus are unclear. | Choose one vertical, validate SCORM/IMS export, and add privacy/data-retention docs. |
| `honeypot` | Sell as Korean handover-document automation for onboarding and internal transfer. | $15k-$70k | $50k-$200k | The security/honeypot naming may confuse buyers; document privacy is sensitive. | Rename buyer-facing offer, add Korean workflow screenshots, template library, and local install path. |
| `smallbiz-ops-copilot` | Sell as a low-cost ops inbox for small support teams. | $10k-$60k | $40k-$180k | SMB ARPU is low and churn can be high; support burden may exceed revenue. | Add a narrow vertical, billing, onboarding, and one clear metric like response time saved. |
| `multi-cli-pilot` | Sell as controlled CLI automation for AI platform teams. | $10k-$60k | $40k-$160k | Automation tools create safety concerns and may be too abstract. | Add policy gates, audit log exports, examples for three real workflows, and a security boundary page. |
| `tool-call-finetune-lab` | Sell as a tool-call fine-tuning and evaluation assessment. | $15k-$75k | $60k-$220k | GPU cost, model licensing, and eval credibility are hard blockers. | Add a small reproducible dataset, BFCL-style scorecard, cost model, and model-license notes. |
| `weld-defect-vision` | Sell as an industrial inspection PoC and validation study, not a generic vision app. | $25k-$120k | $100k-$400k | False negatives and domain shift are safety-critical; real images and expert review are required. | Add explicit non-production boundary, data-collection plan, per-class recall target, and human-review workflow. |
| `retina-scan-ai` | Keep as health-AI research validation template unless medical partners and compliance review exist. | $0-$30k | $20k-$120k | Medical diagnostic claims can create regulatory and ethical risk. | Strip any clinical-sales framing, add research-only disclaimers, expert-review workflow, and validation protocol. |
| `KIM3310` | Use as profile front door and credibility router, not a direct product. | $0-$50k enabled revenue | $50k-$200k enabled revenue | Too broad unless it routes viewers into one clear paid offer. | Add pinned lane order, contact CTA, and one sentence pointing to the flagship commercial offer. |
| `doeon-kim-portfolio` | Use as the primary commercial router and proof surface for all demos. | $20k-$100k enabled revenue | $80k-$300k enabled revenue | Without analytics or a contact path, proof does not convert. | Add privacy-safe click tracking, contact form/calendar, lane-specific CTA, and short walkthrough video. |
| `SteadyTap` | Keep as mobile/accessibility craft proof; commercialize only if a specific coaching niche appears. | $0-$25k | $20k-$100k | Consumer app distribution and retention are hard; it dilutes enterprise positioning. | Move below flagship lanes, add App Store readiness checklist only if pursuing mobile. |
| `kbbq-idle-unity` | Treat as game/product-taste proof, not an enterprise revenue lane. | $0-$15k | $10k-$75k | Game monetization needs assets, retention loops, UA budget, and a separate brand. | Keep as supporting proof or spin out separately; do not mix with enterprise AI sales. |
| `dream-interpretation-pages` | Treat as SEO/content experiment, not a core commercial product. | $0-$20k | $10k-$80k | Entertainment/wellness positioning can weaken serious enterprise credibility. | Keep separate, add safety boundaries, and avoid featuring it in enterprise outreach. |
| `the-savior` | Treat as wellness assistant proof only; do not lead with it commercially. | $0-$20k | $10k-$80k | Wellness safety, escalation, and liability risks are high relative to likely revenue. | Keep strict disclaimers, escalation routes, and separate it from enterprise positioning. |
| `quantum-workbench` | Keep as research/experimentation proof. | $0-$15k | $10k-$60k | Weak buyer urgency and unclear commercial pain. | Use as technical curiosity only unless a research customer defines a concrete workflow. |
| `beaver-study-orchestrator` | Keep as education-planning support proof. | $0-$20k | $10k-$80k | Education market is crowded and not aligned with main buyer story. | Reframe as scheduling/orchestration proof, not a standalone business. |
| `districtpilot-ai` | Sell only if positioned as civic operations forecasting with Snowflake/public-sector partners. | $10k-$70k | $50k-$200k | Public-sector sales cycles and data access are slow. | Add Korean civic buyer brief, Snowflake architecture, and one measurable city-ops outcome. |
| `twincity-ui` | Keep as digital-twin UI proof; commercialize only as part of manufacturing/ops demos. | $0-$40k | $30k-$150k | It is archived/supporting and 3D/digital-twin work is maintenance-heavy. | Keep it linked as historical proof; reuse visual ideas in `fab-ops-yield-control-tower`. |

## Detailed Commercialization Notes

These notes define what each repo should become commercially, how to price the first offer, and what evidence must exist before claiming it is a sellable service.

### `aix-pilot`

Best buyer: enterprise AI, data, risk, and platform teams that already have internal GenAI pressure but lack measurable governance. First offer should be a $15k-$35k pilot-readiness sprint, then a $50k-$100k implementation pilot if the buyer has data access and an executive sponsor. The strongest promise is not "AI assistant"; it is controlled rollout with RAG quality, tool approval, DLP posture, evals, and board-readable ROI. Do not sell it until the demo can show before/after eval metrics, permission boundaries, audit logs, and a repeatable onboarding checklist.

### `enterprise-llm-adoption-kit`

Best buyer: CIO, CISO, data governance lead, or innovation team that wants AI adoption without uncontrolled employee tool sprawl. Sell as a workshop and implementation kit: $8k-$15k for readiness mapping, $25k-$60k for governance templates plus rollout support. The value is repeatability, not raw model features, so every artifact should feel like something a manager can approve and a security team can audit. The blocker is weak productization; fix it with standardized templates, buyer intake forms, and a final adoption board pack.

### `stage-pilot`

Best buyer: AI product teams suffering from flaky tool calls, brittle parsers, and unreproducible eval failures. Price the first engagement as a $5k-$15k reliability audit or $20k-$50k eval hardening sprint. Commercial credibility comes from reproducible benchmarks, package-quality docs, and real examples that developers can run in minutes. The fatal risk is becoming an impressive internal lab with no public trust signal, so add examples, versioned benchmarks, and clear comparison reports.

### `AegisOps`

Best buyer: SOC/NOC, SRE, and IT infrastructure teams that need cleaner incident handoff and post-incident review. The first service should be a $10k-$25k tabletop and workflow audit, followed by a $40k-$90k dashboard pilot with integrations. This repo can sell because it maps to urgent operational pain: alert fatigue, unclear ownership, and messy escalation. It needs connector realism, incident data boundaries, and exportable runbooks before buyers will treat it as operational software.

### `security-threat-response-workbench`

Best buyer: smaller security teams, MSPs, and internal IT/security groups that need a practical response desk without buying a full enterprise SIEM/SOAR stack. Price as $7k-$20k for tabletop exercise setup or $25k-$75k for a response-workbench pilot. The sale should focus on response discipline, IOC capture, analyst handoff, and executive reporting. The blocker is credibility; fix it with MITRE-style mappings, evidence chains, legal scope language, and realistic analyst workflows.

### `nw-service-assurance-workbench`

Best buyer: NOC, IDC, telecom, and enterprise network teams that care about SLA evidence, incident replay, and shift handoff. Start with a $8k-$20k NOC workflow audit, then sell a $30k-$80k telemetry prototype. The repo should not pretend to replace mature observability suites; it should package service assurance around workflows those suites often leave messy. Highest-value proof is synthetic telemetry, outage replay, SLA export, and a clean shift-handoff narrative.

### `Nexus-Hive`

Best buyer: analytics teams that want natural-language business intelligence but cannot tolerate unsafe SQL, data leakage, or unverifiable answers. Price the first project as $10k-$25k for warehouse-readiness and query-safety assessment, then $35k-$100k for a governed BI copilot pilot. The product must lead with permission-aware query generation, auditability, and analyst approval, not chat novelty. The main blocker is hallucinated or unauthorized SQL; fix with tests, approval gates, explainable query plans, and data-access simulation.

### `lakehouse-contract-lab`

Best buyer: data platform teams migrating from ad hoc pipelines into governed lakehouse or warehouse contracts. Commercialize as a $10k-$25k data-contract assessment or $30k-$90k migration guardrail implementation. The repo should package rejected-row handling, schema drift control, and business-readable contract status. It needs sample migrations, performance notes, and explicit handoff docs for Snowflake, Databricks, or similar environments.

### `fab-ops-yield-control-tower`

Best buyer: manufacturing, semiconductor, and industrial operations teams trying to connect yield, incidents, and shift action tracking. The revenue potential is high because downtime and yield loss are expensive, but the sales cycle needs domain proof. Start with a $15k-$30k operations diagnostic, then a $50k-$120k control-tower prototype if a plant or fab sponsor provides workflow input. The blocker is data access and domain credibility; fix with synthetic domain data, operator stories, ROI math, and human-in-the-loop escalation.

### `secure-xl2hwp-local`

Best buyer: Korean public-sector, education, legal, admin, and enterprise teams that need local document conversion without cloud upload. Package as $3k-$10k setup plus $200-$1k per seat/year, or $15k-$50k for team installation and template validation. The strongest commercial angle is offline security, Korean workflow fit, and audit-ready exports. The blocker is compatibility trust, so the product needs installer quality, HWP template test cases, signed output verification, and Korean buyer-facing documentation.

### `agent-runtime-go`

Best buyer: backend and platform engineering teams that need a smaller Go-native agent runtime rather than a heavy Python-first framework. Sell this as implementation support first: $5k-$20k integration sprint or $2k-$8k/month maintenance support for teams that adopt it. A library alone is hard to monetize, so revenue depends on documentation, examples, adapter coverage, and operational traces. The blocker is adoption trust; fix with API docs, provider adapters, a starter app, and clean observability examples.

### `agent-orchestration-benchmark`

Best buyer: engineering leaders deciding between agent frameworks and needing proof before committing teams. Sell a $7k-$20k framework selection report or $25k-$60k custom benchmark pack. The commercial asset is the methodology, not only the code. The blocker is benchmark credibility; fix with versioned suites, reproducible runs, explicit environment details, and a clear rule for when each framework wins.

### `ai-agent-production-lab`

Best buyer: teams moving from agent prototype to production and needing a readiness checklist, CI suite, and failure-mode map. Price as $8k-$18k for an agent production audit or $25k-$75k for CI/eval implementation. This repo should be bundled with `aix-pilot` or `stage-pilot` because it is stronger as a service accelerator than a standalone SaaS. The blocker is loose positioning; fix by turning the lab output into a buyer-facing assessment report.

### `ai-security-redteam-lab`

Best buyer: companies deploying AI assistants that need prompt-injection, data-exfiltration, jailbreak, and tool-abuse testing before rollout. Sell as a $10k-$30k red-team diagnostic, then $30k-$100k remediation and retest package. The value is risk evidence and remediation discipline, not fear-based marketing. The blocker is rigor; fix with a transparent attack taxonomy, severity model, test log format, and legally safe engagement scope.

### `llm-onprem-deployment-kit`

Best buyer: regulated, defense-adjacent, manufacturing, finance, or Korean enterprise teams that cannot send sensitive data to public AI endpoints. First offer should be a $12k-$30k readiness assessment, then $50k-$150k scoped deployment support only if support limits are explicit. The product should focus on architecture, security posture, cost model, and operational handoff. The blocker is delivery burden; fix with strict scope, checklist-led assessment, and reference architectures before promising implementation.

### `memory-test-master-change-gate`

Best buyer: semiconductor test, manufacturing engineering, or quality teams with expensive change-risk problems. Revenue could be meaningful but only with domain access; without contacts, keep it as niche proof. Sell as a $15k-$35k change-risk assessment and prototype, then $50k-$120k pilot with real process mapping. The blocker is narrow ICP; fix with domain-specific screenshots, a rollback playbook, and an outreach list built around semiconductor operations roles.

### `ops-reliability-workbench`

Best buyer: IT operations or SRE teams that need a structured reliability review, incident learning, and operational hygiene pack. Commercially, this should be merged into or sold alongside `AegisOps` instead of competing with it. Price as $5k-$15k for an ops review or $20k-$60k for a workbench pilot. The blocker is broadness; fix by choosing one workflow such as incident review, service ownership, or reliability scorecards.

### `regulated-case-workbench`

Best buyer: compliance-heavy teams handling case files, approvals, redactions, and audit trails. Sell as a $8k-$20k workflow mapping engagement or $25k-$75k private case-workbench pilot. The product must emphasize auditability, redaction workflow, approval chains, and exportable evidence. The blocker is liability; fix with disclaimers, data-retention design, role permissions, and careful separation between workflow support and legal advice.

### `Upstage-DocuAgent`

Best buyer: training, documentation, and internal knowledge teams that convert document sets into Q&A, quizzes, or learning materials. Start with $5k-$15k document automation setup or $20k-$60k for a learning-workflow pilot. The repo needs one narrow vertical because generic document AI is crowded. The blocker is unclear buyer focus; fix by choosing LMS/training, compliance docs, or support knowledge base and proving export correctness.

### `honeypot`

Best buyer: Korean teams with messy handover, onboarding, SOP, or institutional knowledge transfer. The buyer-facing name should avoid security confusion if the product is really about handover documents. Price as $3k-$10k setup plus template customization, or $15k-$50k for internal handover automation. The blocker is naming and privacy; fix with a clear Korean workflow story, local data handling, and a template library.

### `smallbiz-ops-copilot`

Best buyer: small service businesses with repetitive customer support, scheduling, internal tasks, or admin follow-up. This is lower-ticket than enterprise lanes, so sell only if onboarding is extremely simple. Price $49-$299/month for self-serve or $1k-$5k setup for one vertical. The blocker is support burden and churn; fix by narrowing to one niche, automating onboarding, and proving a metric such as response-time reduction.

### `multi-cli-pilot`

Best buyer: platform teams that want controlled AI-assisted CLI operations with approvals and logs. Sell as an internal automation governance prototype: $5k-$15k audit, $20k-$50k pilot. The pitch should be safe command execution, repeatable tasks, policy gates, and evidence logs. The blocker is operational risk; fix with permission boundaries, dry-run mode, approval workflow, and a strong audit trail.

### `tool-call-finetune-lab`

Best buyer: AI teams building function-calling systems and needing fine-tuning, evaluation, and failure analysis. Commercialize as a $8k-$20k tool-call evaluation sprint or $25k-$75k fine-tuning support package. The value depends on measurable accuracy and reproducibility, not model hype. The blocker is cost and eval trust; fix with a small benchmark dataset, cost model, license notes, and transparent scorecards.

### `weld-defect-vision`

Best buyer: industrial inspection teams that want a validation study for weld quality workflows. Do not sell this as autonomous defect detection; sell it as a human-reviewed PoC with data-collection and measurement plan. Price $10k-$30k for a validation study or $40k-$120k for a scoped PoC with expert review. The blocker is safety and false negatives; fix with per-class recall targets, domain-shift notes, and a required human-review loop.

### `retina-scan-ai`

Best buyer: not a commercial buyer yet unless a medical partner, research institution, or compliance reviewer is involved. Keep this as research validation proof, not a diagnostic service. Revenue should be modeled as $0 until expert review and compliant data handling exist. The blocker is medical liability; fix with research-only language, validation protocol, expert review, and removal of any diagnostic promise.

### `KIM3310`

Best buyer: no direct buyer; this is the GitHub identity and credibility router. Commercial value comes from sending recruiters, buyers, and collaborators into the strongest paid lanes. It should pin the enterprise AI, ops/security, and data/manufacturing assets first. The blocker is dilution; fix with tighter pinned repo order, one commercial CTA, and a concise profile line matching the portfolio.

### `doeon-kim-portfolio`

Best buyer: buyers, recruiters, investors, partners, and design partners evaluating the body of work. This repo is the conversion surface, so its revenue is enabled revenue rather than direct SaaS revenue. It should move viewers from proof to action with lane-specific CTAs, contact flow, and analytics. The blocker is conversion opacity; fix with privacy-safe event tracking, a calendar or contact route, and short walkthrough evidence for the top lanes.

### `SteadyTap`

Best buyer: unclear unless positioned for mobile habit, accessibility, coaching, or wellness workflow. Keep it as product-craft proof unless retention data or app-store distribution is available. If pursued, price as consumer subscription only after proving usage, or as a small B2B accessibility workflow pilot. The blocker is distribution; fix with a narrow audience, retention instrumentation, and mobile polish before featuring it commercially.

### `kbbq-idle-unity`

Best buyer: game players, not the same enterprise buyer as the main portfolio. Treat it as creativity and Unity proof unless it becomes a separate game brand with assets, retention loops, and distribution. Revenue is speculative without user acquisition and live-ops data. The blocker is strategic focus; keep it supporting or spin it out rather than mixing it with enterprise AI offers.

### `dream-interpretation-pages`

Best buyer: consumer SEO visitors, wellness-content readers, or entertainment users. Keep this separate from enterprise positioning because the trust story is completely different. Monetization could be ads, affiliate, or low-cost subscription, but only after traffic proof. The blocker is brand mismatch and safety; fix with boundaries, disclaimers, and separation from the professional buyer path.

### `the-savior`

Best buyer: not a primary commercial target unless repositioned very carefully as a non-clinical wellness or reflection assistant. Revenue is low-confidence because safety, escalation, and liability needs are high relative to likely consumer ARPU. Keep it as a supporting prototype with strong boundaries. The blocker is user safety; fix with crisis-resource routing, disclaimers, and no mental-health treatment claims.

### `quantum-workbench`

Best buyer: research, education, or technical curiosity audiences rather than immediate commercial buyers. It can support credibility by showing range, but it should not consume productization energy unless a specific research workflow appears. Revenue is likely consulting or workshop based, not SaaS. The blocker is weak buyer urgency; fix by tying it to a concrete workflow or leaving it as proof-of-learning.

### `beaver-study-orchestrator`

Best buyer: students, study coaches, or small education teams, but the market is crowded and not aligned with the strongest B2B story. Keep it as orchestration and planning proof unless there is retention evidence. Commercialization would need a clear niche, such as exam preparation planning or cohort study management. The blocker is differentiation; fix with measurable learning outcomes and a narrow target user.

### `districtpilot-ai`

Best buyer: civic operations, local government, or public-sector analytics teams if the repo can show Snowflake-style governed data and measurable city-ops outcomes. Price as $10k-$25k discovery and $40k-$100k civic forecasting pilot, but expect slow procurement. The blocker is public-sector sales cycle and data access. Fix with a Korean civic buyer brief, sample public dataset, procurement-friendly security notes, and one clear outcome such as complaint routing or resource forecasting.

### `twincity-ui`

Best buyer: manufacturing, facility operations, or smart-city teams only if the UI is attached to a real data workflow. As an archived/supporting repo, it should not be sold directly. Commercial value comes from visual credibility inside `fab-ops-yield-control-tower` or `districtpilot-ai`. The blocker is maintenance and unclear data integration; fix by reusing the best visual pattern in active repos and labeling this as historical proof.

## Revenue Priority Ranking

| Rank | Repo or Bundle | Why |
| ---: | --- | --- |
| 1 | `aix-pilot` + `enterprise-llm-adoption-kit` | Clearest enterprise AI buyer, strongest current demand, strongest demo-to-pilot story. |
| 2 | `AegisOps` + `security-threat-response-workbench` + `nw-service-assurance-workbench` | Strong fit with IT infrastructure, military communications, security monitoring, and ops credibility. |
| 3 | `stage-pilot` + `agent-runtime-go` + `agent-orchestration-benchmark` | Good developer-tooling lane, but needs adoption and documentation to sell. |
| 4 | `Nexus-Hive` + `lakehouse-contract-lab` | Strong data-governance value if buyer data access is available. |
| 5 | `fab-ops-yield-control-tower` + `memory-test-master-change-gate` + `weld-defect-vision` | High-ticket potential but depends on hard-to-get domain access. |
| 6 | `secure-xl2hwp-local` + `Upstage-DocuAgent` + `honeypot` | Good Korean back-office/document automation lane, but needs clearer buyer packaging. |
| 7 | Consumer/supporting demos | Useful proof, weak commercial priority. |

## 30-Day Fix Plan

1. Add one buyer-facing offer page for the top four bundles.
2. Add a contact or calendar CTA to the portfolio, with privacy-safe click analytics.
3. Create one short video walkthrough for `aix-pilot`, one for `AegisOps`, and one for `stage-pilot`.
4. Add pilot acceptance criteria and pricing ranges to lead repos.
5. Move consumer, wellness, game, and research-only repos into a clearly labeled supporting section.
6. Recruit two design partners before adding major new features.

## 90-Day Revenue Plan

| Month | Goal | Target |
| --- | --- | --- |
| Month 1 | Convert proof into sellable packages. | 4 offer pages, 3 videos, 1 contact flow. |
| Month 2 | Run discovery and paid diagnostics. | 20 targeted outreaches, 5 discovery calls, 1-2 paid diagnostics. |
| Month 3 | Close first pilots. | 1 fixed-scope pilot at $15k-$50k or 2 smaller audits at $5k-$15k. |

## Bottom Line

The realistic commercial path is to sell **bundled B2B pilots and implementation support**, not 35 unrelated SaaS products. The top revenue motion should start with enterprise AI adoption, security/operations, and runtime reliability. The rest of the repositories are valuable as proof depth, but several should stay supporting assets until they have buyer pull, real data, and a narrow paid entry point.
