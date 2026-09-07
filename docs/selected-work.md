# Selected work

The gallery presents thirteen complementary implementations. `selectedWork.ts` owns the order, problem, design decision, reproduction command and boundary for each card.

| Order | Project | Distinct evidence |
|---|---|---|
| 1 | AegisOps | [Source entry points](https://github.com/KIM3310/AegisOps) |
| 2 | IdleMesh | Private implementation; public summary and verification scope only |
| 3 | MemoryFlow Lab | [Source entry points](https://github.com/KIM3310/memoryflow-lab) |
| 4 | Nexus-Hive | [Source entry points](https://github.com/KIM3310/Nexus-Hive) |
| 5 | StagePilot | [Source entry points](https://github.com/KIM3310/stage-pilot) |
| 6 | TwinCity UI | [Source entry points](https://github.com/KIM3310/twincity-ui) |
| 7 | Lakehouse Contract Lab | [Source entry points](https://github.com/KIM3310/lakehouse-contract-lab) |
| 8 | SteadyTap | [Source entry points](https://github.com/KIM3310/SteadyTap) |
| 9 | Memory Change Gate | Private implementation; public summary and verification scope only |
| 10 | Secure XL2HWP | [Source entry points](https://github.com/KIM3310/secure-xl2hwp-local) |
| 11 | Tool-Call Fine-Tune Lab | [Source entry points](https://github.com/KIM3310/tool-call-finetune-lab) |
| 12 | LLM On-Prem Deployment Kit | [Source entry points](https://github.com/KIM3310/llm-onprem-deployment-kit) |
| 13 | KBBQ Idle Unity | [Source entry points](https://github.com/KIM3310/kbbq-idle-unity) |

TwinCity, Lakehouse, SteadyTap, On-Prem and KBBQ add spatial UI, actual Spark execution, native iOS, infrastructure deployment and shared game-economy logic. Each has a direct evidence link. No project is assigned to an employment role or a startup category.

Private source remains private; cards omit inaccessible Code/Tests links and local commands. Team roles and manual-versus-AI contribution percentages are not inferred. StagePilot retains upstream attribution.

## Measured versus demonstrated

- AegisOps: actual uncached loopback HTTP analysis with a synthetic provider, 5 warmup and 30 measured requests. No inference latency.
- IdleMesh: 24 real SHA-256 tasks at each of 1/2/4 local slots, plus separate injected-failure recovery. One Mac, not multiple devices.
- Lakehouse: actual Spark 3.5.9/Delta 3.3.3 writes and independent reloads of 12/8/5 rows. Synthetic data, not a scale benchmark.
- On-Prem: actual Kubernetes/TLS/Traefik with a synthetic protocol fixture. No GPU model execution or cloud provisioning.
- SteadyTap: Swift tests, native release build, simulator launch and actual tap/drag-to-practice flow passed. [Observed run](../public/evidence/steadytap-native-verification.json). No physical-device or clinical-outcome claim.
- KBBQ: shared C# regression tests and checksummed historical WebGL files. No current-source Unity rebuild claim.

[Raw local measurements](../public/evidence/local-measurements.json) include the method and limitations. The [TwinCity preview route](../public/demos/twincity/provenance.json) opens the console published by its own repository. It uses the production components; the portfolio does not duplicate generated Three.js/vendor bundles.

## Verification and hosting

`npm run verify` covers TypeScript, components, backend/content contracts and the static build. Selection tests check all thirteen ordered cards, both collection-toggle directions, and private-source link handling.

GitHub Pages is the public static gallery. Sites is the separate owner-private copy. Existing Cloudflare services retain their own backend configuration; these static deployments do not provision their databases or credentials.
