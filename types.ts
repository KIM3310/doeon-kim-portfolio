export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
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
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  intro: string;
}
