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

export interface CommercialOffer {
  id: string;
  title: string;
  buyer: string;
  entryStep: string;
  pilotStep: string;
  supportModel: string;
  timeline: string;
  outcome: string;
  deliverables: string[];
  proofRepos: string[];
  ctaSubject: string;
}

export interface RevenueChannel {
  id: string;
  title: string;
  mode: string;
  buyer: string;
  route: string;
  activation: string;
  marginModel: string;
  proofRepos: string[];
  nextStep: string;
}

export interface LiveServiceScreen {
  title: string;
  url: string;
  asset: string;
  scope: 'Active public' | 'Private case' | 'Archived proof';
}

export interface PortfolioReel {
  title: string;
  summary: string;
  video: string;
  poster: string;
  transcript: string;
  durationLabel: string;
  generatedAt: string;
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
