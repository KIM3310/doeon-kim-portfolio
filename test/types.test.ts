import { describe, it, expect } from 'vitest';
import type { CommercialOffer, Project, Profile, RevenueChannel, ServicePackage, SkillCategory } from '../types';

describe('TypeScript type contracts', () => {
  it('Project type enforces required fields', () => {
    const project: Project = {
      title: 'Test',
      description: 'A test project',
      tech: ['TypeScript'],
      github: 'https://github.com/test',
      market: 'Technical teams',
      reviewSignal: 'System design and verification',
      commercialPath: 'Packaged starter kit',
    };
    expect(project.title).toBe('Test');
    expect(project.demo).toBeUndefined();
  });

  it('Project type allows optional demo', () => {
    const project: Project = {
      title: 'Test',
      description: 'A test project',
      tech: ['TypeScript'],
      github: 'https://github.com/test',
      demo: 'https://example.com',
      market: 'Technical teams',
      reviewSignal: 'System design and verification',
      commercialPath: 'Packaged starter kit',
    };
    expect(project.demo).toBe('https://example.com');
  });

  it('CommercialOffer type enforces scope and proof fields', () => {
    const offer: CommercialOffer = {
      id: 'test-offer',
      title: 'Test offer',
      buyer: 'Technical buyers',
      entryStep: 'Diagnostic',
      pilotStep: 'Pilot',
      supportModel: 'Support',
      timeline: '2 weeks',
      outcome: 'A scoped workflow improvement',
      deliverables: ['Review pack'],
      proofRepos: ['demo-repo'],
      ctaSubject: 'Test offer',
    };
    expect(offer.proofRepos).toContain('demo-repo');
  });

  it('RevenueChannel type enforces route, activation, and proof fields', () => {
    const channel: RevenueChannel = {
      id: 'test-channel',
      title: 'Test channel',
      mode: 'Scoped paid work',
      buyer: 'Technical buyers',
      route: 'Portfolio proof',
      activation: 'Run a diagnostic',
      marginModel: 'Reuse templates before adding infrastructure',
      proofRepos: ['demo-repo'],
      nextStep: 'Connect an intake form',
    };
    expect(channel.proofRepos).toContain('demo-repo');
  });

  it('ServicePackage type enforces offer, polish, and deliverable fields', () => {
    const servicePackage: ServicePackage = {
      repo: 'demo-repo',
      lane: 'Demo lane',
      buyer: 'Technical buyers',
      offer: 'Proof review',
      outcome: 'A bounded service outcome',
      polish: ['Improve onboarding', 'Clarify risk boundary', 'Add handoff checklist'],
      deliverables: ['Review pack', 'Checklist', 'Proof link'],
      margin: 'Reuse templates before adding infrastructure',
    };
    expect(servicePackage.polish).toHaveLength(3);
  });

  it('Profile type enforces all fields', () => {
    const profile: Profile = {
      name: 'Test User',
      title: 'Engineer',
      email: 'test@test.com',
      github: 'https://github.com/test',
      linkedin: 'https://linkedin.com/in/test',
      intro: 'Hello',
    };
    expect(profile.name).toBe('Test User');
  });

  it('SkillCategory requires category and skills array', () => {
    const sc: SkillCategory = { category: 'Languages', skills: ['TypeScript', 'Python'] };
    expect(sc.skills).toHaveLength(2);
  });
});
