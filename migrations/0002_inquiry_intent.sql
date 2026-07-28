ALTER TABLE private_inquiries
  ADD COLUMN intent TEXT NOT NULL DEFAULT 'commercial';

CREATE INDEX IF NOT EXISTS idx_private_inquiries_intent_created_at
  ON private_inquiries(intent, created_at);
