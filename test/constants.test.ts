import { describe, it, expect } from 'vitest';
import { CERTIFICATIONS, CURRENT_ROLE, EDUCATION, MILITARY_ROLE, PROFILE, PROJECTS, SKILLS, PORTFOLIO_STATS } from '../constants';

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
    expect(PROFILE.intro).toContain('infrastructure operations');
    expect(PROFILE.intro).toContain('without private data');
  });
});

describe('PORTFOLIO_STATS', () => {
  it('surfaces the latest audit metrics', () => {
    expect(PORTFOLIO_STATS).toEqual([
      { label: 'Public repos', value: '44' },
      { label: 'Displayed systems', value: '17' },
      { label: 'Flagship lanes', value: '8' },
      { label: 'Latest verification', value: 'profile + gallery' },
    ]);
  });
});

describe('CURRENT_ROLE', () => {
  it('captures the InterX infrastructure operations role', () => {
    expect(CURRENT_ROLE.company).toBe('InterX');
    expect(CURRENT_ROLE.title).toContain('IT Infrastructure');
    expect(CURRENT_ROLE.period).toContain('Apr 2026');
    expect(CURRENT_ROLE.focus.join(' ')).not.toContain('AWS account');
    expect(CURRENT_ROLE.focus.join(' ')).toContain('IPsec VPN');
    expect(CURRENT_ROLE.focus.join(' ')).toContain('Google Workspace');
  });
});

describe('MILITARY_ROLE', () => {
  it('foregrounds strategic network security operations', () => {
    expect(MILITARY_ROLE.company).toContain('Defense Communication');
    expect(MILITARY_ROLE.title).toContain('MW Communications');
    expect(MILITARY_ROLE.period).toContain('Nov 2023');
    expect(MILITARY_ROLE.summary).toContain('6-person squad');
    expect(MILITARY_ROLE.focus.join(' ')).toContain('8-9 incidents');
    expect(MILITARY_ROLE.focus.join(' ')).toContain('CCTV');
  });
});

describe('EDUCATION and CERTIFICATIONS', () => {
  it('includes the degree program and certification surface', () => {
    expect(EDUCATION.find(item => item.institution.includes('BDES'))?.period).toContain('Nov 2027');
    expect(EDUCATION.find(item => item.institution === 'Korea National Open University')?.program).toContain('coursework');
    expect(CERTIFICATIONS.map(item => item.name)).toContain('AI-900');
    expect(CERTIFICATIONS.map(item => item.name)).toContain('SnowPro Associate');
    expect(CERTIFICATIONS.map(item => item.name).join(' ')).toContain('Platform Architect');
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
      if (p.github) expect(p.github).toMatch(/github\.com/);
    }
  });

  it('does not expose GitHub links for private case studies', () => {
    for (const p of PROJECTS.filter(project => project.access === 'private')) {
      expect(p.github).toBeUndefined();
      expect(p.demo).toBeTruthy();
    }
  });

  it('uses unique titles and includes flagship lanes', () => {
    expect(new Set(PROJECTS.map(p => p.title)).size).toBe(PROJECTS.length);
    expect(PROJECTS.at(0)?.title).toBe('aix-pilot');
    expect(PROJECTS.find(p => p.title === 'aix-pilot')?.description).toContain('Enterprise GenAI pilot console');
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
