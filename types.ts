export interface Project {
  title: string;
  category: string;
  role: string;
  achievements: string[];
  tech: string[];
  links?: {
    demo?: string;
    github?: string;
    youtube?: string;
  };
}

export interface SecondaryProject {
  title: string;
  focus: string;
  github: string;
  demo?: string;
  note?: string;
}

export interface UpgradeTrack {
  title: string;
  systems: string[];
  currentBase: string[];
  nextBuild: string;
  outcome: string;
}

export interface FocusPathLink {
  label: string;
  href: string;
}

export interface FocusPath {
  title: string;
  summary: string;
  strengths: string[];
  systems: string[];
  links: FocusPathLink[];
}

export interface TargetTrack {
  title: string;
  companies: string;
  summary: string;
  signals: string[];
  reviewPath: string[];
  links: FocusPathLink[];
}

export interface RepoClusterEntry {
  name: string;
  focus: string;
  github?: string;
  demo?: string;
  note?: string;
}

export interface RepoCluster {
  title: string;
  summary: string;
  repos: RepoClusterEntry[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  location?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  issuer: string;
  name: string;
  date?: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  intro: string;
  catchphrase: string;
}
