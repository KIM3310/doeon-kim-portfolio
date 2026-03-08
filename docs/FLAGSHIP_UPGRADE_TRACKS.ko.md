# Flagship Upgrade Tracks

작성일: 2026-03-08

이 문서는 `어디 취업하려고 만든 포트폴리오`가 아니라, 현재 canonical repos를 어떤 기술 방향으로 더 깊게 키울지 정리한 실행 문서다.

## 핵심 원칙

- 새 repo를 무작정 늘리지 않는다
- 기존 flagship을 운영/데이터/가드레일 관점에서 더 깊게 만든다
- README와 포트폴리오 카피보다 실제 시스템 표면과 코드 증거를 우선한다

## Track 1: Governed Analytics Platform

중심 repo:

- `Nexus-Hive`
- `the-logistics-prophet`
- `twincity-ui`

현재 기반:

- 자연어 -> SQL -> 차트 흐름
- control-tower style operator surface
- audit, explainability, workflow thinking

다음 고도화:

- warehouse adapter abstraction
- lineage / freshness / owner metadata
- data quality gate
- query audit history
- governed NL2SQL eval set

## Track 2: Ontology + Action Workflow

중심 repo:

- `the-logistics-prophet`
- `twincity-ui`
- `Aegis-Air`

현재 기반:

- entity-aware operations
- incident / queue workflows
- rule-driven state transitions

다음 고도화:

- object-first screen design
- explicit action model
- approval gate and write-back logic
- stronger audit surfaces

## Track 3: Business Workflow Platform

중심 repo:

- `enterprise-llm-adoption-kit`
- `honeypot`
- `smallbiz-ops-copilot`

현재 기반:

- governance
- async document handling
- approval-safe support flow

다음 고도화:

- 하나의 business object 중심 workflow product 만들기
- object timeline / audit trail
- operator approval action bar
- grounded AI summary with strict structured outputs

## Track 4: Flagship Proof Packaging

중심 repo:

- `stage-pilot`
- `AegisOps`
- `Aegis-Air`
- `enterprise-llm-adoption-kit`

다음 고도화:

- architecture diagram
- benchmark / replay table
- screenshot / GIF
- reviewer quick path
- export artifact examples

## 결론

지금 필요한 것은 `회사별 포장`이 아니라 아래 두 가지다.

1. `Nexus-Hive`를 governed analytics flagship으로 실제 코드까지 키우기
2. strongest repos의 proof packaging을 실제로 마감하기
