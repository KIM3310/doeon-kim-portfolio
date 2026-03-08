# SAP BTP AI Flagship Spec

작성일: 2026-03-08

이 문서는 SAP 계열 역할을 진지하게 공략하기 위한 `한 개의 dedicated flagship` 설계안이다.

## Working Title

`sap-btp-order-exception-workbench`

## 목표

주문 / 발주 / 인보이스 예외를 `SAP business object context` 위에서 탐지하고, 운영자가 승인/반려/에스컬레이션까지 처리하는 `BTP-native workbench`를 만든다.

## 왜 필요한가

현재 포트폴리오는 LLM reliability, incident ops, enterprise governance는 강하지만 `SAP-native implementation proof`는 없다.

SAP 역할에서 보길 기대하는 신호:

- BTP application structure
- CAP service
- Fiori / UI5 screen thinking
- workflow / approval
- event-driven business process
- clean core mindset
- AI가 SAP object 문맥 안에서 동작한다는 증거

## MVP 범위

### Backend

- CAP service exposing `Orders`, `Exceptions`, `Approvals`, `AuditEvents`
- business rules for delay / mismatch / approval threshold
- review-pack style API describing trust boundary and workflow contract

### Frontend

- Fiori/UI5 worklist
- object page for one order / exception
- approval action bar
- timeline / audit history

### AI Layer

- exception summary generation
- recommended next action
- grounded explanation tied to order fields and workflow rules
- no free-form hallucination path without business object references

## Proof reviewers should see

- architecture diagram
- workflow screenshot set
- approval sequence GIF
- sample business object payload
- audit trail export
- trust boundary note: what AI can summarize vs what requires operator approval

## Non-goals

- full SAP integration claim without actual integration
- generic chatbot surface disconnected from business objects
- overbuilding many modules before one clean workflow is demoable

## Recommended build order

1. CAP data model + seed data
2. exception rules + audit event store
3. Fiori/UI5 worklist + object page
4. AI summarization inside object context
5. approval / escalation flow
6. review-pack, screenshots, README, demo script
