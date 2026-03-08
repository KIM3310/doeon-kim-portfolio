# Business Workflow Flagship Spec

작성일: 2026-03-08

이 문서는 다음 flagship을 `generic AI copilot`이 아니라 `business workflow product`로 만들기 위한 기술 spec이다.

## Working Title

`order-exception-workbench`

## 목표

주문 / 발주 / 인보이스 예외를 탐지하고, 운영자가 검토, 승인, 에스컬레이션, 메모를 남길 수 있는 workflow workbench를 만든다.

핵심은 AI가 주도권을 가져가는 게 아니라 `object timeline + approval rule + audit trail` 안에서만 보조하도록 만드는 것이다.

## MVP 범위

### Backend

- orders / exceptions / approvals / audit_events 모델
- review-pack style runtime surface
- deterministic rule engine for exception detection
- structured AI summary endpoint

### Frontend

- worklist
- object detail page
- approval action bar
- timeline / history

### AI Layer

- object-grounded summary
- recommended next action
- evidence-linked explanation
- no free-form response without object references

## 리뷰어가 바로 봐야 하는 것

- architecture diagram
- workflow screenshot set
- approval sequence demo
- sample object payload
- audit history export
- trust boundary note

## Non-goals

- 여러 도메인을 한 번에 다루기
- generic chatbot부터 만들기
- 실제 object workflow보다 AI 답변을 먼저 화려하게 만드는 것

## Recommended build order

1. data model + seed data
2. exception rules + audit event store
3. worklist + detail page
4. approval / escalation flow
5. grounded AI summary
6. review-pack, screenshots, README, demo script
