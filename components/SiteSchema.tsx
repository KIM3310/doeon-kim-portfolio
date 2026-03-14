import React from 'react';
import { DOSSIER_URL, FLAGSHIP_URL, PORTFOLIO_LIVE_URL, PROFILE } from '../constants';

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
        'LLM reliability',
        'Incident AI',
        'GitLab-native agent workflows',
        'Semiconductor software operations',
        'Enterprise governance',
        'Operator workflows',
      ],
    },
    {
      '@type': 'CreativeWork',
      url: absoluteUrl(FLAGSHIP_URL),
      name: 'FabTwin Guardian',
      description: 'Semiconductor command surface for multimodal operations, decision trace, approval-gated action, and replayable debugging.',
      about: { '@id': '#doeon-kim' },
    },
    {
      '@type': 'CreativeWork',
      url: absoluteUrl(DOSSIER_URL),
      name: 'FabTwin Guardian Dossier',
      description: 'Supporting dossier covering the trust model, delivery logic, and review path behind FabTwin Guardian.',
      about: { '@id': '#doeon-kim' },
    },
    {
      '@type': 'WebSite',
      url: siteUrl,
      name: 'Doeon Kim Portfolio',
      inLanguage: 'ko-KR',
      about: { '@id': '#doeon-kim' },
      description: 'Portfolio site for Doeon Kim focused on high-trust AI systems, reliability, and operator-grade software.',
    },
  ],
};

const SiteSchema: React.FC = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
);

export default SiteSchema;
