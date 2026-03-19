import React from 'react';
import { DOSSIER_URL, FLAGSHIP_URL, PORTFOLIO_LIVE_URL, PRIMARY_PROOF_URL, PROFILE } from '../constants';

const siteUrl = PORTFOLIO_LIVE_URL.endsWith('/') ? PORTFOLIO_LIVE_URL : `${PORTFOLIO_LIVE_URL}/`;
const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': '#doeon-kim',
      name: PROFILE.name,
      jobTitle: PROFILE.title,
      email: PROFILE.email,
      url: siteUrl,
      description: PROFILE.intro,
      sameAs: [PROFILE.github, PROFILE.linkedin],
      knowsAbout: [
        'Agent reliability',
        'LLM evals',
        'Tool-calling reliability',
        'Incident AI',
        'Runtime safety',
        'Enterprise governance',
        'Operator workflows',
      ],
    },
    {
      '@type': 'CreativeWork',
      url: PRIMARY_PROOF_URL,
      name: 'StagePilot',
      description: 'Benchmark-led tool-calling reliability runtime with parser recovery, bounded retry, and evaluator-facing project pages.',
      about: { '@id': '#doeon-kim' },
    },
    {
      '@type': 'CreativeWork',
      url: absoluteUrl(FLAGSHIP_URL),
      name: 'Applied Ops Archive',
      description: 'Archived reliable operations case study covering evidence, decision trace, approval-gated action, and signed handoff.',
      about: { '@id': '#doeon-kim' },
    },
    {
      '@type': 'CreativeWork',
      url: absoluteUrl(DOSSIER_URL),
      name: 'Applied Ops Archive Dossier',
      description: 'Supporting dossier covering the trust model, delivery logic, and review path behind the archived ops case study.',
      about: { '@id': '#doeon-kim' },
    },
    {
      '@type': 'WebSite',
      url: siteUrl,
      name: 'Doeon Kim Portfolio',
      inLanguage: 'ko-KR',
      about: { '@id': '#doeon-kim' },
      description: 'Portfolio site for Doeon Kim focused on agent reliability, evals, runtime safety, and reliable product systems.',
    },
  ],
};

const SiteSchema: React.FC = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
);

export default SiteSchema;
