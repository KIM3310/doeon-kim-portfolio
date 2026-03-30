import { describe, it, expect } from 'vitest';
import type { Project, Profile, SkillCategory } from '../types';

describe('TypeScript type contracts', () => {
  it('Project type enforces required fields', () => {
    const project: Project = {
      title: 'Test',
      description: 'A test project',
      tech: ['TypeScript'],
      github: 'https://github.com/test',
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
    };
    expect(project.demo).toBe('https://example.com');
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
