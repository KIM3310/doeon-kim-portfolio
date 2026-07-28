CREATE TABLE IF NOT EXISTS telemetry_daily_counters (
  day TEXT NOT NULL,
  repo TEXT NOT NULL,
  event TEXT NOT NULL,
  surface TEXT NOT NULL,
  consent_version TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL,
  PRIMARY KEY (day, repo, event, surface, consent_version)
);

CREATE INDEX IF NOT EXISTS idx_telemetry_daily_counters_repo_day
  ON telemetry_daily_counters(repo, day);

CREATE TABLE IF NOT EXISTS telemetry_rate_limits (
  day TEXT NOT NULL,
  fingerprint TEXT NOT NULL,
  count INTEGER NOT NULL DEFAULT 0,
  expires_at TEXT NOT NULL,
  PRIMARY KEY (day, fingerprint)
);

CREATE INDEX IF NOT EXISTS idx_telemetry_rate_limits_expires_at
  ON telemetry_rate_limits(expires_at);
