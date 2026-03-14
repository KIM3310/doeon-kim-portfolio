import React from 'react';
import { PROFILE } from '../constants';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': '#doeon-kim',
      name: PROFILE.name,
      jobTitle: PROFILE.title,
      email: PROFILE.email,
      description: PROFILE.intro,
      sameAs: [PROFILE.github, PROFILE.linkedin],
      knowsAbout: [
        'LLM reliability',
        'Incident AI',
        'GitLab Duo workflows',
        'Semiconductor software operations',
        'Enterprise governance',
        'Operator workflows',
      ],
    },
    {
      '@type': 'CreativeWork',
      name: 'FabTwin Guardian',
      description: 'flagship semiconductor cognitive operations system for high-trust AI software teams.',
      about: { '@id': '#doeon-kim' },
    },
    {
      '@type': 'WebSite',
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
