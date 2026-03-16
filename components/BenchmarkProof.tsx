import React from 'react';
import { ArrowUpRight, BarChart3, ShieldCheck, Waypoints } from 'lucide-react';
import {
  PRIMARY_PROOF_URL,
  STAGEPILOT_BENCHMARK_DELTAS,
  STAGEPILOT_BENCHMARK_STEPS,
  STAGEPILOT_REVIEW_FLOW,
} from '../constants';
import Section from './Section';

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href);

const BenchmarkProof: React.FC = () => {
  return (
    <Section id="benchmark-proof" className="bg-[#070709] pt-8">
      <div className="border border-white/10 bg-[#09090b] p-8 md:p-10">
        <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Benchmark Proof</p>
            <h2 className="font-serif-heading text-3xl text-white md:text-4xl">The fastest visual proof in the portfolio.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-primary-muted">
            One chart makes the main claim legible: StagePilot is not just a concept repo, it is a checked-in reliability lift with a clear recovery story.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 rounded-3xl border border-white/10 bg-black/20 p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">StagePilot benchmark</p>
                  <h3 className="mt-2 text-2xl font-serif-heading text-white">24 checked-in cases, one bounded retry pass.</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                  <BarChart3 className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-5">
                {STAGEPILOT_BENCHMARK_STEPS.map((entry) => (
                  <article key={entry.label}>
                    <div className="mb-2 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-white">{entry.label}</p>
                        <p className="text-sm text-primary-muted">{entry.helper}</p>
                      </div>
                      <p className={`text-lg font-semibold ${entry.textClass}`}>{entry.rate.toFixed(2)}%</p>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`h-full rounded-full ${entry.accentClass}`}
                        style={{ width: `${entry.rate}%` }}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {STAGEPILOT_BENCHMARK_DELTAS.map((delta) => (
                <article key={delta.label} className="border border-white/10 bg-white/[0.025] p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">{delta.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{delta.value}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-black/20 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-accent-gold/80">How to read it</p>
                <h3 className="mt-2 text-2xl font-serif-heading text-white">From proof to product judgment.</h3>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                <Waypoints className="h-5 w-5" />
              </div>
            </div>

            <div className="space-y-4">
              {STAGEPILOT_REVIEW_FLOW.map((item) => (
                <article key={item.step} className="border border-white/10 bg-white/[0.02] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55">
                      {item.step}
                    </span>
                    <h4 className="text-base font-medium text-white">{item.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-primary-muted">{item.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-auto grid gap-3 pt-2">
              {[
                { label: 'Open StagePilot proof', href: PRIMARY_PROOF_URL, icon: BarChart3 },
                { label: 'Open AegisOps system', href: 'https://aegisops-ai-incident-doctor.pages.dev', icon: ShieldCheck },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={isExternalHref(href) ? '_blank' : undefined}
                  rel={isExternalHref(href) ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 border border-white/10 bg-white/[0.02] px-5 py-4 transition-all hover:border-accent-gold/40 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-accent-gold" />
                    <span className="text-sm font-medium text-white">{label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-gold" />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
};

export default BenchmarkProof;
