import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import Section from './Section';
import { PORTFOLIO_ACTIONS, PROFILE, PORTFOLIO_LIVE_URL } from '../constants';

const cards = [
  {
    label: 'Open flagship',
    href: PORTFOLIO_LIVE_URL,
    helper: 'Interactive FabPilot Live X surface with the fastest path to the main product story.',
    Icon: ArrowUpRight,
  },
  {
    label: 'Read dossier',
    href: `${PORTFOLIO_LIVE_URL.replace(/\/$/, '')}/fabpilot-dossier.html`,
    helper: 'Architecture, trust surfaces, and delivery rationale behind the flagship.',
    Icon: FileText,
  },
  {
    label: 'GitHub proof',
    href: PROFILE.github,
    helper: 'Canonical repos, implementation detail, and public code review surface.',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: PROFILE.linkedin,
    helper: 'Best path for recruiting follow-up and fast professional context.',
    Icon: Linkedin,
  },
  {
    label: 'Email brief',
    href: `mailto:${PROFILE.email}`,
    helper: 'Send a role brief, hiring context, or technical challenge directly.',
    Icon: Mail,
  },
];

const CommunityHub: React.FC = () => {
  return (
    <Section id="community">
      <div className="mb-10 border-b border-white/10 pb-8">
        <h2 className="text-3xl md:text-4xl font-serif-heading font-medium text-white mb-2">Contact & Review Path</h2>
        <p className="text-primary-muted font-light">The shortest route from first impression to technical confidence.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(({ label, href, helper, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') || href.startsWith('#') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') || href.startsWith('#') ? undefined : 'noopener noreferrer'}
            className="group border border-white/10 bg-[#0a0a0c] p-6 transition-all hover:border-accent-gold/40 hover:bg-black/30"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="text-base font-medium text-white">{label}</span>
              <div className="flex items-center gap-2 text-accent-gold">
                <Icon className="h-4 w-4" />
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-muted">{helper}</p>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default CommunityHub;
