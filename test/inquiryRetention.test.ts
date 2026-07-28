import { describe, expect, it, vi } from 'vitest';
import {
  RETENTION_DELETE_SQL,
  pruneExpiredInquiries,
} from '../workers/inquiry-retention-core';

describe('inquiry retention worker', () => {
  it('deletes expired rows using the scheduled timestamp', async () => {
    const run = vi.fn().mockResolvedValue({ meta: { changes: 4 } });
    const bind = vi.fn(() => ({ run }));
    const prepare = vi.fn(() => ({ bind }));
    const database = { prepare } as unknown as D1Database;
    const now = new Date('2026-07-28T03:17:00.000Z');

    await expect(pruneExpiredInquiries(database, now)).resolves.toBe(4);
    expect(prepare).toHaveBeenCalledWith(RETENTION_DELETE_SQL);
    expect(bind).toHaveBeenCalledWith(now.toISOString());
    expect(run).toHaveBeenCalledTimes(1);
  });
});
