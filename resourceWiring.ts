export const RESOURCE_WIRING = [
  {
    label: 'AI + inference',
    source: 'DaesikPage',
    summary: 'Free-first model routing for demos, reports, and benchmark explainers before buying fixed GPU or model capacity.',
    resources: ['OpenRouter', 'Groq', 'Cerebras', 'Cloudflare Workers AI', 'Ollama fallback'],
    path: 'Use server-side keys behind Workers for non-public workflows; never expose provider keys in browser bundles.',
  },
  {
    label: 'Korean public APIs',
    source: 'public-apis-4Kr',
    summary: 'Public-data candidates for city, merchant, weather, transport, finance, safety, document, and aggregate analytics proof surfaces.',
    resources: ['공공데이터포털', 'KOSIS', '기상청 API허브', '서울 열린데이터광장', '소상공인 365'],
    path: 'Start with readiness metadata, synthetic examples, and public keys where allowed; keep sensitive workflows ad-free.',
  },
  {
    label: 'Deployment stack',
    source: 'Cloudflare-first',
    summary: 'Low-fixed-cost deployment lane for public demos, resource pages, consent controls, coarse interaction counters, and export storage.',
    resources: ['Cloudflare Pages', 'Workers', 'D1', 'KV', 'R2'],
    path: 'Pages for resources, Workers for thin APIs, and D1/KV/R2 only when state, consented coarse counters, or exports are required.',
  },
  {
    label: 'Revenue boundary',
    source: 'Privacy first',
    summary: 'Public analytics is limited to consented coarse interaction counts; those counts are not customer benchmarks or a data product.',
    resources: ['Consent state', 'Contextual ads', 'Coarse counters', 'Synthetic datasets', 'Ad-free sensitive flows'],
    path: 'Never sell personal data, private documents, traces, incident records, health imagery, or inquiry content.',
  },
] as const;
