export const SELECTED_WORK = [
  {
    repo: 'AegisOps', title: 'AegisOps', discipline: '01 / End-to-end AI software',
    problem: 'Turn incident logs and screenshots into a report another operator can act on.',
    decision: 'Typed reports, server-side providers, deterministic replays, and session recovery.',
    command: 'npm ci && npm run verify',
    source: 'server/lib/sessionStore.ts', proof: '__tests__/session-store.test.ts',
    boundary: 'The public demo uses synthetic incidents. Provider-backed analysis runs through the local API.',
  },
  {
    repo: 'memoryflow-lab', title: 'MemoryFlow Lab', discipline: '02 / Quantitative systems reasoning',
    problem: 'Compare KV-cache placement when a workload exceeds the modeled memory budget.',
    decision: 'Page-aware capacity constraints, latency/energy trade-offs, and reproducible sensitivity analysis.',
    command: 'make install && make verify',
    source: 'src/memoryflow/simulator.py', proof: 'tests/test_simulator.py',
    boundary: 'HBM/CXL results are analytical estimates. Committed MPS measurements cover narrower copy and attention experiments.',
  },
  {
    repo: 'Nexus-Hive', title: 'Nexus-Hive', discipline: '03 / Controlled data execution',
    problem: 'Convert a natural-language question into SQL without skipping the execution policy.',
    decision: 'Parse SQL structure; inspect columns and statements; stop denied and review-required queries before execution.',
    command: 'make install && make verify',
    source: 'policy/engine.py', proof: 'tests/test_sql_policy_boundaries.py',
    boundary: 'SQLite is the local demo. SQL policy is an application gate; database permissions remain necessary.',
  },
  {
    repo: 'stage-pilot', title: 'StagePilot', discipline: '04 / Runtime & experiment design',
    problem: 'Recover malformed tool calls and show exactly which cases still fail.',
    decision: 'Bounded retries and a case-by-case benchmark make recovery behavior inspectable.',
    command: 'pnpm install --frozen-lockfile && pnpm verify',
    source: 'src/stagepilot/benchmark.ts', proof: 'tests/stagepilot-benchmark.test.ts',
    boundary: 'An attributed extension of upstream Apache-2.0 code. The benchmark uses synthetic inputs and prewritten retry responses.',
  },
  {
    repo: 'secure-xl2hwp-local', title: 'Secure XL2HWP', discipline: '05 / Practical document automation',
    problem: 'Clean spreadsheets and produce traceable Hancom template payloads on a local machine.',
    decision: 'Schema-driven cleanup, template checks, signed audit bundles, and distinct artifacts for every export.',
    command: 'make install && make verify',
    source: 'app/services/export_service.py', proof: 'tests/test_pipeline_service.py',
    boundary: 'Cross-platform checks cover normalized files and template payloads. Native HWP output needs Windows and Hancom.',
  },
] as const;

export const selectedWorkFor = (repo: string) => SELECTED_WORK.find(work => work.repo === repo);
