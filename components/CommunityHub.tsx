import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import Section from './Section';
import { PROFILE, PRIMARY_PROOF_URL, DATA_PLATFORM_ARCHITECTURE_PACK_URL, BROKERAGE_APPLICATION_PACKET_URL, QUANTUM_WORKFLOW_URL, RESUME_PDF_URL } from '../constants';

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href);

const cards = [
  { label: 'Download resume (PDF)', href: RESUME_PDF_URL, helper: 'Primary AI systems resume aligned to reliability, evaluation, and runtime delivery.', Icon: FileText },
  { label: 'Open StagePilot proof', href: PRIMARY_PROOF_URL, helper: 'Fastest path to the benchmarked reliability story and review surfaces.', Icon: ArrowUpRight },
  { label: 'Open AegisOps system', href: 'https://aegisops-ai-incident-doctor.pages.dev', helper: 'Applied incident system showing reviewable topology, postmortem, and handoff.', Icon: ArrowUpRight },
  { label: 'Open quantum workflow lab', href: QUANTUM_WORKFLOW_URL, helper: 'IBM Quantum and Braket execution, transpilation proof, and chemistry mini-workflow in one backend product surface.', Icon: ArrowUpRight },
  { label: 'Open data-platform pack', href: DATA_PLATFORM_ARCHITECTURE_PACK_URL, helper: 'Fast path for governed analytics, lakehouse delivery, and reviewable platform conversations.', Icon: FileText },
  { label: 'Brokerage packet', href: BROKERAGE_APPLICATION_PACKET_URL, helper: 'Client-review, suitability, and advisor-handoff routing for finance conversations.', Icon: FileText },
  { label: 'GitHub proof', href: PROFILE.github, helper: 'Canonical repos, implementation detail, and public proof surface.', Icon: Github },
  { label: 'LinkedIn', href: PROFILE.linkedin, helper: 'Best path for recruiting follow-up and fast professional context.', Icon: Linkedin },
  { label: 'Email brief', href: `mailto:${PROFILE.email}`, helper: 'Send a role brief, hiring context, or technical challenge directly.', Icon: Mail },
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
            target={isExternalHref(href) ? '_blank' : undefined}
            rel={isExternalHref(href) ? 'noopener noreferrer' : undefined}
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
