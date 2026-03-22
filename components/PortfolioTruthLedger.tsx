import React from 'react';
import { ArrowUpRight, GitFork, LockKeyhole, PackageCheck, ScrollText } from 'lucide-react';
import Section from './Section';
import { PORTFOLIO_TRUTH_CHECKED_AT, PORTFOLIO_TRUTH_LEDGER } from '../constants';

const badgeTone = (badge: string) => {
  if (badge === 'private') return 'border-amber-400/30 bg-amber-400/[0.08] text-amber-100';
  if (badge === 'archived') return 'border-white/15 bg-white/[0.05] text-white/65';
  if (badge === 'fork') return 'border-fuchsia-400/30 bg-fuchsia-400/[0.08] text-fuchsia-100';
  return 'border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-100';
};

const summaryCounts = {
  public: PORTFOLIO_TRUTH_LEDGER.filter((entry) => entry.statusBadges.includes('public')).length,
  private: PORTFOLIO_TRUTH_LEDGER.filter((entry) => entry.statusBadges.includes('private')).length,
  archived: PORTFOLIO_TRUTH_LEDGER.filter((entry) => entry.statusBadges.includes('archived')).length,
  fork: PORTFOLIO_TRUTH_LEDGER.filter((entry) => entry.statusBadges.includes('fork')).length,
};

const PortfolioTruthLedger: React.FC = () => {
  return (
    <Section id="truth-ledger" className="bg-[#06070a]">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">GitHub truth ledger</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">Public, private, archived, and forked repo surfaces are labeled on purpose</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          Checked against GitHub metadata on {PORTFOLIO_TRUTH_CHECKED_AT}. This section exists so a reviewer can tell which repos should lead,
          which ones are historical, and where authorship or visibility boundaries matter before they over-read the account.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <article className="border border-white/10 bg-[#0a0a0c] p-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Public repos</p>
          <p className="mt-2 text-3xl font-serif-heading text-white">{summaryCounts.public}</p>
        </article>
        <article className="border border-white/10 bg-[#0a0a0c] p-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Private surfaces</p>
          <p className="mt-2 text-3xl font-serif-heading text-white">{summaryCounts.private}</p>
        </article>
        <article className="border border-white/10 bg-[#0a0a0c] p-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Archived repos</p>
          <p className="mt-2 text-3xl font-serif-heading text-white">{summaryCounts.archived}</p>
        </article>
        <article className="border border-white/10 bg-[#0a0a0c] p-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Forked repo surfaces</p>
          <p className="mt-2 text-3xl font-serif-heading text-white">{summaryCounts.fork}</p>
        </article>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {PORTFOLIO_TRUTH_LEDGER.map((entry) => (
          <article key={entry.name} className="border border-white/8 bg-[#0a0a0c] p-6 transition-colors duration-300 hover:border-accent-gold/30 sm:p-7">
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/8 pb-5">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">{entry.lane}</p>
                <h3 className="font-serif-heading text-2xl text-white">{entry.name}</h3>
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                {entry.statusBadges.map((badge) => (
                  <span key={`${entry.name}-${badge}`} className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${badgeTone(badge)}`}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ScrollText className="mt-0.5 h-4 w-4 flex-none text-accent-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">Truth</p>
                  <p className="mt-2 text-sm leading-7 text-primary-muted">{entry.truth}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                {entry.statusBadges.includes('fork') ? (
                  <GitFork className="mt-0.5 h-4 w-4 flex-none text-accent-gold" />
                ) : entry.statusBadges.includes('private') ? (
                  <LockKeyhole className="mt-0.5 h-4 w-4 flex-none text-accent-gold" />
                ) : (
                  <PackageCheck className="mt-0.5 h-4 w-4 flex-none text-accent-gold" />
                )}
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">How to use it in review</p>
                  <p className="mt-2 text-sm leading-7 text-primary-muted">{entry.reviewUse}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={entry.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/78 transition-colors hover:border-accent-gold/40 hover:text-accent-gold"
              >
                <span>Open repo</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              {entry.homepageUrl ? (
                <a
                  href={entry.homepageUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/78 transition-colors hover:border-accent-gold/40 hover:text-accent-gold"
                >
                  <span>Open live surface</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default PortfolioTruthLedger;
