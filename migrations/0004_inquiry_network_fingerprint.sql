ALTER TABLE private_inquiries
  ADD COLUMN request_fingerprint TEXT NOT NULL DEFAULT '';

CREATE INDEX IF NOT EXISTS idx_private_inquiries_fingerprint_created_at
  ON private_inquiries(request_fingerprint, created_at);
