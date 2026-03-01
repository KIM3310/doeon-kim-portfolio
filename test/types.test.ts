import { describe, it, expect } from 'vitest';
import type {
  Project,
  SecondaryProject,
  Profile,
  SkillCategory,
} from '../types';

describe('TypeScript type contracts', () => {
  it('Project type enforces required fields', () => {
    const project: Project = {
      title: 'Test',
      category: 'AI',
      role: 'Engineer',
      achievements: ['Built it'],
      tech: ['TypeScript'],
    };
    expect(project.title).toBe('Test');
    expect(project.links).toBeUndefined();
  });

  it('Project type allows optional links', () => {
    const project: Project = {
      title: 'Test',
      category: 'AI',
      role: 'Engineer',
      achievements: ['Built it'],
      tech: ['TypeScript'],
      links: { demo: 'https://example.com', github: 'https://github.com/test' },
    };
    expect(project.links?.demo).toBe('https://example.com');
  });

  it('Profile type enforces all fields', () => {
    const profile: Profile = {
      name: 'Test User',
      title: 'Engineer',
      email: 'test@test.com',
      github: 'https://github.com/test',
      linkedin: 'https://linkedin.com/in/test',
      intro: 'Hello',
      catchphrase: 'Build things',
    };
    expect(profile.name).toBe('Test User');
  });

  it('SkillCategory requires category and skills array', () => {
    const sc: SkillCategory = { category: 'Languages', skills: ['TypeScript', 'Python'] };
    expect(sc.skills).toHaveLength(2);
  });

  it('SecondaryProject requires github field', () => {
    const sp: SecondaryProject = {
      title: 'Side project',
      focus: 'Learning',
      github: 'https://github.com/test/repo',
    };
    expect(sp.demo).toBeUndefined();
    expect(sp.github).toContain('github.com');
  });
});
