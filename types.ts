export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  evidence?: string;
  market: string;
  reviewSignal: string;
  commercialPath: string;
  access?: 'public' | 'private';
}

export interface RepositoryCoverageLane {
  lane: string;
  role: string;
  repositories: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface WorkExperience {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  focus: string[];
  outcomes: string[];
}

export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  note: string;
}

export interface Certification {
  issuer: string;
  name: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  intro: string;
}
