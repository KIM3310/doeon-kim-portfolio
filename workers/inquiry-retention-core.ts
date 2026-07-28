export const RETENTION_DELETE_SQL =
  'DELETE FROM private_inquiries WHERE expires_at <= ?';

export const pruneExpiredInquiries = async (
  database: D1Database,
  now: Date = new Date(),
): Promise<number> => {
  const result = await database
    .prepare(RETENTION_DELETE_SQL)
    .bind(now.toISOString())
    .run();
  return result.meta.changes;
};
