export const RESOURCE_WIRING = [
  {
    label: 'AI + inference',
    source: 'DaesikPage',
    summary: 'Free-first model routing for demos, reports, and private workspaces before buying fixed GPU or model capacity.',
    resources: ['OpenRouter', 'Groq', 'Cerebras', 'Cloudflare Workers AI', 'Ollama fallback'],
    path: 'Use customer/server-side keys behind Workers; never expose provider keys in browser bundles.',
  },
  {
    label: 'Korean public APIs',
    source: 'public-apis-4Kr',
    summary: 'Public-data candidates for city, merchant, weather, transport, finance, safety, document, and analytics proof surfaces.',
    resources: ['공공데이터포털', 'KOSIS', '기상청 API허브', '서울 열린데이터광장', '소상공인 365'],
    path: 'Start with readiness metadata and customer-supplied API keys; add ingest Workers only after a paid/private workflow is scoped.',
  },
  {
    label: 'Deployment stack',
    source: 'Cloudflare-first',
    summary: 'Low-fixed-cost deployment lane for all public demos plus future lead capture, metering, payment webhooks, and export storage.',
    resources: ['Cloudflare Pages', 'Workers', 'D1', 'KV', 'R2'],
    path: 'Pages for storefronts, Workers for thin APIs/webhooks, D1/KV/R2 only when state, quotas, or exports are real.',
  },
  {
    label: 'Payment wiring',
    source: 'Secrets only',
    summary: 'Checkout/account connectors are prepared as env slots and webhook boundaries, not hardcoded bank or payout details.',
    resources: ['Toss Payments', 'PortOne V2', 'Stripe Checkout', 'Webhook secrets', 'Provider dashboards'],
    path: 'Real payout account connection requires provider login, business verification, and bank setup inside the payment dashboard.',
  },
] as const;
