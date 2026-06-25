# Free Resource and Payment Wiring

This storefront applies the requested external catalogs to the public service catalog:

- [DaesikPage](https://daesikpage.v1be.workers.dev/) supplies the free-first AI, inference, coding, BaaS, serverless, game-asset, and compute options.
- [public-apis-4Kr](https://github.com/yybmion/public-apis-4Kr) supplies Korean public API categories for city, merchant, weather, transport, finance, safety, document, and analytics demos.
- The complete 50-repository mapping lives in the account profile matrix: [free API/resource service matrix](https://github.com/KIM3310/KIM3310/blob/main/docs/free-api-resource-service-matrix-2026-06-25.md).

## Public storefront wiring

| Layer | Prepared path | Boundary |
|---|---|---|
| AI/inference | OpenRouter, Groq, Cerebras, Cloudflare Workers AI, and Ollama/customer-key fallback | Provider keys stay server-side behind Workers or customer-private workspaces. |
| Korean public APIs | Readiness metadata first, then customer-supplied API keys and Workers ingest proxies | Public repos never commit provider keys or customer datasets. |
| Deployment | Cloudflare Pages for demos; Workers for lead capture, API proxying, payment webhooks, and metering; D1/KV/R2 for state/export only after demand | Real Cloudflare account tokens stay in dashboard/GitHub/Workers secret stores. |
| Payment/revenue account | Toss Payments, PortOne V2, and Stripe env slots plus webhook boundaries | Payout bank/account connection requires provider login, business verification, and dashboard setup. |

## Secret slots to prepare per paid pilot

- `TOSS_PAYMENTS_CLIENT_KEY`, `TOSS_PAYMENTS_SECRET_KEY`, `TOSS_PAYMENTS_WEBHOOK_SECRET`
- `PORTONE_STORE_ID`, `PORTONE_CHANNEL_KEY`, `PORTONE_V2_API_SECRET`, `PORTONE_WEBHOOK_SECRET`
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID`, `STRIPE_SUCCESS_URL`, `STRIPE_CANCEL_URL`
- `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`

Use test-mode keys first. Live payment keys, webhook secrets, tax/business identifiers, and payout-bank data must never be committed.
