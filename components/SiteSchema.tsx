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
        'LLM application development',
        'RAG optimization',
        'AI solution architecture',
        'LLMOps',
        'FastAPI',
        'React'
      ]
    },
    {
      '@type': 'WebSite',
      name: 'Doeon Kim Portfolio',
      inLanguage: 'ko-KR',
      about: { '@id': '#doeon-kim' },
      description: 'Portfolio site for Doeon Kim, AI Engineer and Solution Architect.'
    }
  ]
};

const SiteSchema: React.FC = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
);

export default SiteSchema;
