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
