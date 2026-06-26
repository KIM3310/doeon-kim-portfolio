import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

describe('mobile hero layout CSS contract', () => {
  const css = readFileSync('index.css', 'utf8');
  const mobileBlock = css.match(/@media \(max-width: 640px\) \{[\s\S]*?\n\}/)?.[0] ?? '';

  it('keeps primary conversion actions in a single mobile column', () => {
    expect(mobileBlock).toContain('.hero-actions');
    expect(mobileBlock).toContain('grid-template-columns: 1fr');
    expect(mobileBlock).toContain('white-space: normal');
  });

  it('prevents the hero proof strip from widening the mobile viewport', () => {
    expect(mobileBlock).toContain('.hero-proof-strip');
    expect(mobileBlock).toContain('max-width: 100%');
    expect(mobileBlock).toContain('overflow-wrap: anywhere');
  });
});
