import { describe, it, expect } from 'vitest';
import { PROFILE, PROJECTS, SKILLS, PORTFOLIO_STATS } from '../constants';

describe('PROFILE', () => {
  it('contains required fields', () => {
    expect(PROFILE.name).toBeTruthy();
    expect(PROFILE.email).toMatch(/@/);
    expect(PROFILE.github).toMatch(/github\.com/);
    expect(PROFILE.linkedin).toMatch(/linkedin\.com/);
    expect(PROFILE.title).toBeTruthy();
    expect(PROFILE.intro).toBeTruthy();
  });

  it('states the current neutral gallery boundary', () => {
    expect(PROFILE.intro).toContain('neutral gallery');
    expect(PROFILE.intro).toContain('without private data');
  });
});

describe('PORTFOLIO_STATS', () => {
  it('surfaces the latest audit metrics', () => {
    expect(PORTFOLIO_STATS).toEqual([
      { label: 'Displayed systems', value: '16' },
      { label: 'Archived lanes', value: '13' },
      { label: 'Latest checks', value: 'Green' },
      { label: 'Runtime mix', value: 'TypeScript / Python / Swift / Go' },
    ]);
  });
});

describe('PROJECTS', () => {
  it('has projects', () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it('every project has required fields', () => {
    for (const p of PROJECTS) {
      expect(p.title).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.tech.length).toBeGreaterThan(0);
      expect(p.github).toMatch(/github\.com/);
    }
  });

  it('uses unique titles and includes flagship lanes', () => {
    expect(new Set(PROJECTS.map(p => p.title)).size).toBe(PROJECTS.length);
    expect(PROJECTS.find(p => p.title === 'stage-pilot')?.description).toContain('Tool-call reliability runtime');
    expect(PROJECTS.find(p => p.title === 'retina-scan-ai')?.description).toContain('Medical-image research workflow');
    expect(PROJECTS.find(p => p.title === 'SteadyTap')?.description).toContain('Accessibility coaching app');
  });
});

describe('SKILLS', () => {
  it('has categories', () => {
    expect(SKILLS.length).toBeGreaterThan(0);
    for (const g of SKILLS) {
      expect(g.category).toBeTruthy();
      expect(g.skills.length).toBeGreaterThan(0);
    }
  });
});
