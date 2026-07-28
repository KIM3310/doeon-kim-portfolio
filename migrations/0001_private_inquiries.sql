CREATE TABLE IF NOT EXISTS private_inquiries (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  email TEXT NOT NULL,
  email_hash TEXT NOT NULL,
  organization TEXT NOT NULL,
  lane_id TEXT NOT NULL,
  source_repo TEXT NOT NULL,
  budget_range TEXT NOT NULL,
  summary TEXT NOT NULL,
  consent_version TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_private_inquiries_created_at
  ON private_inquiries(created_at);

CREATE INDEX IF NOT EXISTS idx_private_inquiries_email_hash_created_at
  ON private_inquiries(email_hash, created_at);

CREATE INDEX IF NOT EXISTS idx_private_inquiries_status_created_at
  ON private_inquiries(status, created_at);
