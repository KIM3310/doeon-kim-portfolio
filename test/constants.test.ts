import { describe, it, expect } from 'vitest';
import { PROFILE, PROJECTS, SKILLS, CERTIFICATIONS, EXPERIENCE, PORTFOLIO_STATS } from '../constants';

describe('PROFILE', () => {
  it('contains required fields', () => {
    expect(PROFILE.name).toBeTruthy();
    expect(PROFILE.email).toMatch(/@/);
    expect(PROFILE.github).toMatch(/github\.com/);
    expect(PROFILE.linkedin).toMatch(/linkedin\.com/);
    expect(PROFILE.title).toBeTruthy();
    expect(PROFILE.intro).toBeTruthy();
  });

  it('states the current verified portfolio scale', () => {
    expect(PROFILE.intro).toContain('40 public repositories');
    expect(PROFILE.intro).toContain('43 local verification jobs green');
    expect(PROFILE.intro).not.toContain('31+');
  });
});

describe('PORTFOLIO_STATS', () => {
  it('surfaces the latest audit metrics', () => {
    expect(PORTFOLIO_STATS).toEqual([
      { label: 'Public repos', value: '40' },
      { label: 'Verification jobs', value: '43' },
      { label: 'Failed checks', value: '0' },
      { label: 'Runtime coverage', value: 'Node / Python / Swift / Go' },
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

  it('uses unique titles and current verified highlight counts', () => {
    expect(new Set(PROJECTS.map(p => p.title)).size).toBe(PROJECTS.length);
    expect(PROJECTS.find(p => p.title === 'StagePilot')?.description).toContain('1,724 tests');
    expect(PROJECTS.find(p => p.title === 'Retina Scan AI')?.description).toContain('24 verified backend tests');
    expect(PROJECTS.find(p => p.title === 'SteadyTap')?.description).toContain('both verified locally');
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

describe('CERTIFICATIONS', () => {
  it('has entries with issuer and name', () => {
    expect(CERTIFICATIONS.length).toBeGreaterThan(0);
    for (const c of CERTIFICATIONS) {
      expect(c.issuer).toBeTruthy();
      expect(c.name).toBeTruthy();
    }
  });
});

describe('EXPERIENCE', () => {
  it('has entries with required fields', () => {
    expect(EXPERIENCE.length).toBeGreaterThan(0);
    for (const e of EXPERIENCE) {
      expect(e.company).toBeTruthy();
      expect(e.role).toBeTruthy();
      expect(e.period).toBeTruthy();
      expect(e.description.length).toBeGreaterThan(0);
    }
  });
});
