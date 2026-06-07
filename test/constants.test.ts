import { describe, it, expect } from 'vitest';
import { CERTIFICATIONS, EDUCATION, INTERX_ROLE, LIVE_SERVICE_SCREENS, MILITARY_ROLE, PROFILE, PROJECTS, REPOSITORY_DEMO_URLS, SKILLS, PORTFOLIO_REEL, PORTFOLIO_STATS, REPOSITORY_COVERAGE } from '../constants';

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
      { label: 'Editable repos', value: '35' },
      { label: 'Product demos', value: '36 live' },
      { label: 'Open PRs', value: '0' },
    ]);
  });
});

describe('REPOSITORY_DEMO_URLS', () => {
  it('routes every editable coverage repository to a public demo', () => {
    const coverageRepos = REPOSITORY_COVERAGE.flatMap(lane => lane.repositories);

    expect(new Set(coverageRepos).size).toBe(35);
    for (const repo of coverageRepos) {
      expect(REPOSITORY_DEMO_URLS[repo], repo).toMatch(/^https:\/\//);
    }
    expect(REPOSITORY_DEMO_URLS['agent-runtime-go']).toBe('https://kim3310.github.io/agent-runtime-go/');
    expect(REPOSITORY_DEMO_URLS['weld-defect-vision']).toBe('https://kim3310.github.io/weld-defect-vision/');
  });
});

describe('INTERX_ROLE', () => {
  it('captures the InterX infrastructure operations role', () => {
    expect(INTERX_ROLE.company).toBe('InterX');
    expect(INTERX_ROLE.title).toContain('IT Infrastructure');
    expect(INTERX_ROLE.period).toBe('Apr 2026 - May 2026');
    expect(INTERX_ROLE.period).not.toContain('Present');
    expect(INTERX_ROLE.summary).toContain('Operated and supported');
    expect(INTERX_ROLE.focus.join(' ')).not.toContain('AWS account');
    expect(INTERX_ROLE.focus.join(' ')).toContain('IPsec VPN');
    expect(INTERX_ROLE.focus.join(' ')).toContain('Google Workspace');
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
      expect(p.evidence).toBeTruthy();
      expect(p.market).toBeTruthy();
      expect(p.reviewSignal).toBeTruthy();
      expect(p.proofPath).toBeTruthy();
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
    expect(PROJECTS.find(p => p.title === 'aix-pilot')?.evidence).toContain('live/aix-pilot');
    expect(PROJECTS.find(p => p.title === 'aix-pilot')?.proofPath).toContain('quality gate');
    expect(PROJECTS.find(p => p.title === 'stage-pilot')?.description).toContain('Tool-call reliability runtime');
    expect(PROJECTS.find(p => p.title === 'agent-runtime-go')?.evidence).toContain('agent-runtime-trace');
    expect(PROJECTS.find(p => p.title === 'agent-runtime-go')?.demo).toContain('github.io/agent-runtime-go');
    expect(PROJECTS.find(p => p.title === 'ai-agent-production-lab')?.evidence).toContain('ai-agent-production-report');
    expect(PROJECTS.find(p => p.title === 'lakehouse-contract-lab')?.evidence).toContain('lakehouse-contract-board');
    expect(PROJECTS.find(p => p.title === 'districtpilot-ai')?.description).toContain('public API readiness map');
    expect(PROJECTS.find(p => p.title === 'districtpilot-ai')?.evidence).toContain('districtpilot-public-api-readiness');
    expect(PROJECTS.find(p => p.title === 'districtpilot-ai')?.proofPath).toContain('15_public_api_integration_readiness.sql');
    expect(PROJECTS.find(p => p.title === 'AegisOps')?.evidence).toContain('live/aegisops');
    expect(PROJECTS.find(p => p.title === 'twincity-ui')?.description).toContain('Korean public API readiness');
    expect(PROJECTS.find(p => p.title === 'twincity-ui')?.proofPath).toContain('/api/public-apis');
    expect(PROJECTS.find(p => p.title === 'weld-defect-vision')?.evidence).toContain('weld-defect-vision-board');
    expect(PROJECTS.find(p => p.title === 'retina-scan-ai')?.description).toContain('Medical-image research workflow');
    expect(PROJECTS.find(p => p.title === 'retina-scan-ai')?.evidence).toContain('retina-scan-ai-research');
    expect(PROJECTS.find(p => p.title === 'retina-scan-ai')?.demo).toContain('github.io/retina-scan-ai');
    expect(PROJECTS.find(p => p.title === 'SteadyTap')?.description).toContain('Accessibility coaching app');
    expect(PROJECTS.find(p => p.title === 'smallbiz-ops-copilot')?.proofPath).toContain('/integrations/public-apis');
  });
});

describe('LIVE_SERVICE_SCREENS', () => {
  it('tracks the refreshed live screenshot assets', () => {
    expect(LIVE_SERVICE_SCREENS).toHaveLength(18);
    expect(LIVE_SERVICE_SCREENS.at(0)?.title).toBe('aix-pilot');
    expect(LIVE_SERVICE_SCREENS.map(screen => screen.asset)).toContain('evidence/live/upstage-docuagent.png');
    expect(LIVE_SERVICE_SCREENS.map(screen => screen.asset)).toContain('evidence/live/twincity-ui.png');
    expect(LIVE_SERVICE_SCREENS.every(screen => screen.url.startsWith('https://'))).toBe(true);
    expect(new Set(LIVE_SERVICE_SCREENS.map(screen => screen.asset)).size).toBe(LIVE_SERVICE_SCREENS.length);
  });
});

describe('PORTFOLIO_REEL', () => {
  it('tracks the narrated evidence reel assets', () => {
    expect(PORTFOLIO_REEL.title).toBe('Narrated Systems Gallery Reel');
    expect(PORTFOLIO_REEL.summary).toContain('English TTS');
    expect(PORTFOLIO_REEL.video).toBe('evidence/portfolio-reel/kim3310-systems-gallery-reel.mp4');
    expect(PORTFOLIO_REEL.poster).toContain('kim3310-systems-gallery-reel-poster.png');
    expect(PORTFOLIO_REEL.transcript).toContain('transcript.txt');
    expect(PORTFOLIO_REEL.generatedAt).toBe('2026-06-07 KST');
  });
});

describe('REPOSITORY_COVERAGE', () => {
  it('maps every active repository into a visible review lane', () => {
    const covered = REPOSITORY_COVERAGE.flatMap(lane => lane.repositories);

    expect(covered).toHaveLength(35);
    expect(new Set(covered).size).toBe(35);
    expect(covered).toContain('aix-pilot');
    expect(covered).toContain('memory-test-master-change-gate');
    expect(covered).toContain('smallbiz-ops-copilot');
    expect(covered).toContain('kbbq-idle-unity');
    expect(covered).not.toContain('qwen-pilot');
    expect(covered).not.toContain('crypto-signal-ai');

    for (const lane of REPOSITORY_COVERAGE) {
      expect(lane.lane).toBeTruthy();
      expect(lane.role).toBeTruthy();
      expect(lane.repositories.length).toBeGreaterThan(0);
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
    expect(SKILLS.find(group => group.category === 'Data Systems')?.skills).toContain('public API readiness');
  });
});
