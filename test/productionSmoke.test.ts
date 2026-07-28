import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const root = join(import.meta.dirname, '..');
const smoke = readFileSync(join(root, 'scripts', 'smoke_production.sh'), 'utf8');
const workflow = readFileSync(join(root, '.github', 'workflows', 'production-smoke.yml'), 'utf8');

describe('production smoke contract', () => {
  it('targets the canonical deployment and validates response identity', () => {
    expect(workflow).toContain('https://kim3310-doeon-kim-portfolio.pages.dev');
    expect(workflow).toContain('bash scripts/smoke_production.sh "$BASE_URL"');
    expect(smoke).toContain('%{content_type}');
    expect(smoke).toContain('%{url_effective}');
    expect(smoke).toContain('/service-offer.json');
    expect(smoke).toContain('/robots.txt');
    expect(smoke).toContain('/sitemap.xml');
  });

  it('does not require an unissued advertising publisher record', () => {
    expect(smoke).not.toContain('/ads.txt');
  });
});
