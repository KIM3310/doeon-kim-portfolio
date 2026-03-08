# Target Company Playbook

작성일: 2026-03-08

이 문서는 현재 포트폴리오를 기준으로 `어떤 회사를 어떤 대표작으로 공략할지`, 그리고 `무엇을 더 만들고 무엇은 만들지 말아야 하는지`를 정리한 실행 문서다.

## 핵심 판단

- 현재 `17개 active product repo`는 수량상 충분하다.
- 다음 채용 성패를 가르는 것은 `새로운 작은 프로젝트 여러 개`가 아니라 `부족한 신호를 메우는 flagship 1~2개`다.
- 가장 우선순위가 높은 부족한 신호는 `데이터 플랫폼 운영 증거`다.
- SAP를 진지하게 노리면 `SAP-native build proof`가 추가로 필요하다.

## Lane 1: Frontier LLM / Big Tech

### 현재 strongest proof

- `stage-pilot`
- `AegisOps`
- `Aegis-Air`
- `enterprise-llm-adoption-kit`

### 이미 충분히 강한 신호

- tool-calling reliability
- eval / replay / guardrail thinking
- incident operations
- enterprise runtime posture
- operator-facing UI and review surfaces

### 더 해야 할 것

- README 첫 화면에서 screenshot / GIF / architecture / review route를 더 공격적으로 보여주기
- benchmark / replay / review-pack을 시각적으로 더 앞세우기
- 대표작 4~5개만 기준으로 인터뷰 스토리를 압축하기

### 하지 말 것

- 비슷한 copilot repo를 또 새로 만들기
- certification만 추가해서 부족한 신호를 메우려 하기

## Lane 2: Snowflake / Databricks

### 현재 strongest proof

- `Nexus-Hive`
- `the-logistics-prophet`
- `twincity-ui`

### 아직 부족한 신호

- warehouse adapter abstraction
- bronze / silver / gold 또는 warehouse modeling narrative
- lineage / data contract / quality gate를 한 흐름으로 보여주는 evidence
- governed NL2SQL evaluation set
- cost / latency / query audit posture

### 최고 ROI 방향

`Nexus-Hive`를 새로운 랜덤 repo 대신 `governed analytics flagship`으로 키운다.

필수 구성:

- warehouse abstraction: SQLite demo + Snowflake/Databricks adapter shape
- data quality gate + semantic contract
- audited SQL trace + review / approval step
- lineage / freshness / security posture
- benchmarked NL2SQL evaluation pack
- reviewer가 3분 안에 볼 수 있는 screenshot / export / architecture

## Lane 3: Palantir

### 현재 strongest proof

- `the-logistics-prophet`
- `twincity-ui`
- `Aegis-Air`

### 아직 부족한 신호

- ontology-backed operational language
- approval/write-back workflow
- object-centric actions
- stronger “data -> logic -> action -> audit” narrative

### 최고 ROI 방향

새 repo를 추가하기보다 `the-logistics-prophet`와 `Nexus-Hive`의 `action / ontology / audit` 레이어를 더 크게 보이게 만든다.

## Lane 4: SAP

### 현재 상태

- 자격증/학습 신호는 일부 있다
- 하지만 `SAP-native build proof`는 사실상 없다

### 필요한 다음 증거

프로젝트 후보:

- `sap-btp-order-exception-workbench`
- 또는 `sap-btp-procurement-exception-copilot`

필수 구성:

- CAP service
- Fiori / UI5 front-end
- approval workflow
- Event Mesh or workflow integration
- clean core 설명
- sales order / PO / invoice 같은 business object grounded AI

## 우선순위

1. `Nexus-Hive`를 데이터 플랫폼 flagship으로 끌어올리기
2. 대표작 5개 README / screenshot / demo proof packaging 마감
3. SAP lane을 위한 dedicated spec 고정
4. 그 다음에만 SAP-native repo 구현 시작

## 하지 말아야 할 것

- 3~5개의 새 repo를 한 번에 만들기
- 기존 flagship과 겹치는 generic copilot을 더 만들기
- 회사별 키워드만 바꾸고 실제 proof는 없는 상태로 포장하기

## 현재 결론

- `프론티어 LLM / 빅테크`: 지금도 충분히 승부 가능, proof packaging이 더 중요
- `Snowflake / Databricks`: 데이터 플랫폼 flagship 1개가 사실상 필요
- `Palantir`: 새 repo보다 ontology/action/audit 서사를 더 강화하는 게 낫다
- `SAP`: SAP-native flagship 없이는 lane이 약하다
