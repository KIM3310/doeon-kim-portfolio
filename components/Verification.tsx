import React from 'react';
import { ArrowUpRight, ExternalLink, ShieldCheck, TriangleAlert } from 'lucide-react';
import Section from './Section';
import {
  PORTFOLIO_LEDGER_URL,
  PORTFOLIO_VERIFICATION_OVERVIEW,
  RESIDUAL_RISKS,
  VERIFIED_REPO_SNAPSHOTS,
} from '../constants';

const TARGET_PACKETS = [
  {
    title: 'Palantir Korea packet',
    href: 'briefs/palantir-application-packet.html',
    summary: 'Field-engineering packet for ambiguous workflows, operator surfaces, and deployment judgment.',
  },
  {
    title: 'Databricks Korea packet',
    href: 'briefs/databricks-korea-application-packet.html',
    summary: 'Lakehouse and GenAI SA packet focused on Delta, Unity Catalog, MLflow, and customer architecture.',
  },
  {
    title: 'Snowflake Korea packet',
    href: 'briefs/snowflake-korea-application-packet.html',
    summary: 'Solutions Engineer packet centered on governed analytics, SQL fluency, and warehouse-aware AI delivery.',
  },
  {
    title: 'OpenAI Seoul packet',
    href: 'briefs/openai-seoul-application-packet.html',
    summary: 'Technical Success packet for Solutions Architect and AI Deployment Engineer conversations.',
  },
  {
    title: 'Anthropic Seoul packet',
    href: 'briefs/anthropic-seoul-application-packet.html',
    summary: 'Applied AI solutions packet focused on governance, trust, and deployment quality.',
  },
  {
    title: 'AWS GenAI packet',
    href: 'briefs/aws-genai-application-packet.html',
    summary: 'AI/ML Specialist SA packet centered on runtime reliability and enterprise rollout.',
  },
] as const;

const Verification: React.FC = () => {
  return (
    <Section id="verification" className="bg-bg-soft">
      <div className="mb-16 flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-accent-gold/75">Proof status</p>
          <h2 className="mb-2 text-3xl font-serif-heading font-medium text-white md:text-4xl">Verified proof surface</h2>
          <p className="max-w-3xl font-light text-primary-muted">
            Local setup risks were reduced to repeatable bootstrap paths. What remains is documented as an explicit boundary, not hidden inside the marketing layer.
          </p>
        </div>
        <a
          href={PORTFOLIO_LEDGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-accent-gold/40 hover:text-white"
        >
          Open cross-repo ledger
          <ExternalLink className="h-4 w-4 text-accent-gold" />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {PORTFOLIO_VERIFICATION_OVERVIEW.map((entry) => (
          <article key={entry.label} className="border border-white/8 bg-[#0b0c10] p-5">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">{entry.label}</p>
            <h3 className="mt-3 text-2xl font-serif-heading text-white">{entry.value}</h3>
            <p className="mt-3 text-sm leading-6 text-primary-muted">{entry.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center gap-3">
          <ExternalLink className="h-5 w-5 text-accent-gold" />
          <h3 className="text-2xl font-serif-heading text-white">Direct application packets</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {TARGET_PACKETS.map((packet) => (
            <a
              key={packet.title}
              href={packet.href}
              className="group border border-white/8 bg-[#090a0d] p-5 transition-colors hover:border-accent-gold/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-serif-heading text-white">{packet.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-primary-muted">{packet.summary}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 flex-none text-white/35 transition-colors group-hover:text-accent-gold" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-accent-gold" />
            <h3 className="text-2xl font-serif-heading text-white">Current verification snapshots</h3>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {VERIFIED_REPO_SNAPSHOTS.map((entry) => (
              <article key={entry.repo} className="group border border-white/8 bg-[#090a0d] p-5 transition-colors hover:border-accent-gold/30">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-white/45">
                      {entry.lane}
                    </span>
                    <h4 className="mt-3 text-xl font-serif-heading text-white">{entry.repo}</h4>
                  </div>
                  {entry.href ? (
                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/35 transition-colors hover:text-accent-gold"
                      aria-label={`Open ${entry.repo} proof surface`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  ) : null}
                </div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-accent-gold/75">Verified command</p>
                <p className="mt-2 font-mono text-xs text-white/70">{entry.command}</p>
                <p className="mt-4 text-sm leading-6 text-white/78">{entry.proof}</p>
                <p className="mt-4 text-sm leading-6 text-primary-muted">{entry.boundary}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-center gap-3">
            <TriangleAlert className="h-5 w-5 text-accent-gold" />
            <h3 className="text-2xl font-serif-heading text-white">Residual boundaries</h3>
          </div>
          <div className="space-y-4">
            {RESIDUAL_RISKS.map((entry) => (
              <article key={entry.title} className="border border-white/8 bg-[#090a0d] p-5">
                <h4 className="text-lg font-serif-heading text-white">{entry.title}</h4>
                <p className="mt-3 text-sm leading-6 text-primary-muted">{entry.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Verification;
