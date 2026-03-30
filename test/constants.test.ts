import { describe, it, expect } from 'vitest';
import { PROFILE, PROJECTS, SKILLS, CERTIFICATIONS, EXPERIENCE } from '../constants';

describe('PROFILE', () => {
  it('contains required fields', () => {
    expect(PROFILE.name).toBeTruthy();
    expect(PROFILE.email).toMatch(/@/);
    expect(PROFILE.github).toMatch(/github\.com/);
    expect(PROFILE.linkedin).toMatch(/linkedin\.com/);
    expect(PROFILE.title).toBeTruthy();
    expect(PROFILE.intro).toBeTruthy();
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
