import { describe, it, expect } from 'vitest';
import {
  PROFILE,
  PROJECTS,
  SKILLS,
  CERTIFICATIONS,
  EXPERIENCE,
  SECONDARY_PROJECTS,
  PORTFOLIO_TRUTH_LEDGER,
  PORTFOLIO_LIVE_URL,
  PORTFOLIO_REPO_URL,
  PRIMARY_PROOF_URL,
  RESUME_PDF_URL,
} from '../constants';

describe('PROFILE constant', () => {
  it('contains required identity fields', () => {
    expect(PROFILE.name).toBeTruthy();
    expect(PROFILE.email).toMatch(/@/);
    expect(PROFILE.github).toMatch(/github\.com/);
    expect(PROFILE.linkedin).toMatch(/linkedin\.com/);
    expect(PROFILE.title).toBeTruthy();
    expect(PROFILE.intro).toBeTruthy();
  });

  it('has a non-empty catchphrase', () => {
    expect(PROFILE.catchphrase.length).toBeGreaterThan(0);
  });
});

describe('PROJECTS constant', () => {
  it('has at least one project', () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it('every project has required fields', () => {
    for (const project of PROJECTS) {
      expect(project.title).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.role).toBeTruthy();
      expect(project.achievements.length).toBeGreaterThan(0);
      expect(project.tech.length).toBeGreaterThan(0);
    }
  });
});

describe('SECONDARY_PROJECTS constant', () => {
  it('has entries', () => {
    expect(SECONDARY_PROJECTS.length).toBeGreaterThan(0);
  });

  it('every secondary project has a github link', () => {
    for (const p of SECONDARY_PROJECTS) {
      expect(p.github).toMatch(/github\.com/);
    }
  });
});

describe('PORTFOLIO_TRUTH_LEDGER constant', () => {
  it('captures trust-boundary states that reviewers need to know', () => {
    expect(PORTFOLIO_TRUTH_LEDGER.length).toBeGreaterThan(5);
    expect(PORTFOLIO_TRUTH_LEDGER.some((entry) => entry.statusBadges.includes('private'))).toBe(true);
    expect(PORTFOLIO_TRUTH_LEDGER.some((entry) => entry.statusBadges.includes('archived'))).toBe(true);
    expect(PORTFOLIO_TRUTH_LEDGER.some((entry) => entry.statusBadges.includes('fork'))).toBe(true);
  });
});

describe('SKILLS constant', () => {
  it('has at least one skill category', () => {
    expect(SKILLS.length).toBeGreaterThan(0);
  });

  it('every category has skills', () => {
    for (const group of SKILLS) {
      expect(group.category).toBeTruthy();
      expect(group.skills.length).toBeGreaterThan(0);
    }
  });
});

describe('CERTIFICATIONS constant', () => {
  it('has entries', () => {
    expect(CERTIFICATIONS.length).toBeGreaterThan(0);
  });

  it('every certification has issuer and name', () => {
    for (const cert of CERTIFICATIONS) {
      expect(cert.issuer).toBeTruthy();
      expect(cert.name).toBeTruthy();
    }
  });
});

describe('EXPERIENCE constant', () => {
  it('has at least one entry', () => {
    expect(EXPERIENCE.length).toBeGreaterThan(0);
  });

  it('every experience has required fields', () => {
    for (const exp of EXPERIENCE) {
      expect(exp.company).toBeTruthy();
      expect(exp.role).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.description.length).toBeGreaterThan(0);
    }
  });
});

describe('URL constants', () => {
  it('portfolio URLs are valid', () => {
    expect(PORTFOLIO_LIVE_URL).toMatch(/^https?:\/\//);
    expect(PORTFOLIO_REPO_URL).toMatch(/github\.com/);
  });

  it('proof and resume URLs are defined', () => {
    expect(PRIMARY_PROOF_URL).toBeTruthy();
    expect(RESUME_PDF_URL).toBeTruthy();
  });
});
