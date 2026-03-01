import { describe, expect, it } from 'vitest';

import { buildCorsHeaders } from '../server/index.mjs';

describe('fabtwin runtime CORS', () => {
  it('echoes allowed deployment origins', () => {
    const headers = buildCorsHeaders({
      headers: { origin: 'https://doeon-kim-portfolio.pages.dev' },
    }) as Record<string, string | undefined>;

    expect(headers['Access-Control-Allow-Origin']).toBe(
      'https://doeon-kim-portfolio.pages.dev'
    );
    expect(headers.Vary).toBe('Origin');
  });

  it('omits unknown origins', () => {
    const headers = buildCorsHeaders({
      headers: { origin: 'https://unexpected.example' },
    }) as Record<string, string | undefined>;

    expect(headers['Access-Control-Allow-Origin']).toBeUndefined();
  });
});
