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

export interface ExtendedProofSurface {
  repo: string;
  surface: string;
  surfaceType: string;
  summary: string;
  teams: string[];
  github?: string;
  demo?: string;
  note?: string;
  visibility?: 'public' | 'private';
}

export interface ExtendedProofCluster {
  title: string;
  summary: string;
  surfaces: ExtendedProofSurface[];
}

export interface VisitorStep {
  window: string;
  title: string;
  detail: string;
  label: string;
  href: string;
}

export interface VisitorQuickPath {
  title: string;
  audience: string;
  outcome: string;
  links: FocusPathLink[];
}

export interface SubmissionReadinessTrack {
  title: string;
  companies: string;
  readinessPct: number;
  status: string;
  summary: string;
  strongestSignals: string[];
  proofLinks: FocusPathLink[];
  remainingGap: string;
}

export interface ApplicationPacket {
  title: string;
  audience: string;
  claim: string;
  packetHref: string;
  resumeHref: string;
  links: FocusPathLink[];
}

export interface LiveProofTrack {
  title: string;
  audience: string;
  status: 'public-capped-live' | 'review-only-live' | 'artifact-refresh-only';
  staticProof: FocusPathLink;
  liveRepo: FocusPathLink;
  liveRoute: string;
  walkthrough: FocusPathLink;
  packet: FocusPathLink;
  resume: FocusPathLink;
  note: string;
}

export interface VerificationLiveCheck {
  title: string;
  repo: string;
  href: string;
  mode: 'public-capped-live' | 'review-only-live' | 'artifact-refresh-only';
  route: string;
  statusCode: number;
  checkedAt: string;
  scenarioId: string;
  model: string;
  nextReviewPath: string;
  summary: string;
}

export interface DeploymentCheck {
  repo: string;
  href: string;
  title: string;
  statusCode: number;
  checkedAt: string;
  category: 'portfolio' | 'flagship' | 'support';
}

export interface RepoOperatingEntry {
  name: string;
  tier: 'Lead with' | 'Selective use' | 'De-emphasize';
  href: string;
  primaryRole: 'AI Engineer' | 'Solutions Architect' | 'Shared hub';
  aiEngineerFit: number;
  solutionArchitectFit: number;
  targetTracks: string[];
  strength: string;
  note: string;
  visibility?: 'public' | 'private';
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
