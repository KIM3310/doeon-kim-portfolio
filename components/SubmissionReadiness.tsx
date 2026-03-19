import React from 'react';
import { ArrowUpRight, BrainCircuit, Building2, DatabaseZap, ShieldCheck } from 'lucide-react';
import Section from './Section';
import { SUBMISSION_READINESS_TRACKS } from '../constants';

const icons = [BrainCircuit, Building2, DatabaseZap, DatabaseZap, ShieldCheck];

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href);

const SubmissionReadiness: React.FC = () => {
  return (
    <Section id="readiness" className="bg-[#060608] pt-10">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Submission Readiness</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">How close the public package is for each track</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          These percentages describe the current public submission package: repos, project pages, portfolio routing, and role-specific resumes. They are
          not a claim that interviewing or production history is complete.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {SUBMISSION_READINESS_TRACKS.map((track, index) => {
          const Icon = icons[index] || BrainCircuit;
          return (
            <article key={track.title} className="border border-white/8 bg-[#0a0a0c] p-6 transition-colors duration-300 hover:border-accent-gold/30 sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">Track readiness</p>
                  <h3 className="font-serif-heading text-2xl text-white">{track.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">{track.companies}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="mb-5">
                <div className="mb-2 flex items-end justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.24em] text-white/45">{track.status}</span>
                  <span className="font-serif-heading text-3xl text-white">{track.readinessPct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-gold/80 via-accent-gold to-[#f7c983]"
                    style={{ width: `${track.readinessPct}%` }}
                  />
                </div>
              </div>

              <p className="mb-6 text-sm leading-7 text-primary-muted">{track.summary}</p>

              <div className="mb-6">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">Strongest visible signals</p>
                <div className="flex flex-wrap gap-2">
                  {track.strongestSignals.map((signal) => (
                    <span key={signal} className="rounded-full border border-accent-gold/15 bg-accent-gold/[0.06] px-3 py-1.5 text-xs text-white/80">
                      {signal}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6 border border-white/8 bg-white/[0.02] p-4">
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/45">Remaining gap to production-ready confidence</p>
                <p className="text-sm leading-7 text-white/72">{track.remainingGap}</p>
              </div>

              <div className="space-y-3 border-t border-white/8 pt-5">
                {track.proofLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternalHref(link.href) ? '_blank' : undefined}
                    rel={isExternalHref(link.href) ? 'noreferrer' : undefined}
                    className="group flex items-center justify-between gap-3 border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/80 transition-colors hover:border-accent-gold/30 hover:bg-white/[0.04]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-gold" />
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default SubmissionReadiness;
