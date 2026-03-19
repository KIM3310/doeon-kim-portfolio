import React from 'react';
import { ArrowUpRight, CheckCircle2, RadioTower, ServerCog } from 'lucide-react';
import Section from './Section';
import { VERIFIED_DEPLOYMENTS, VERIFIED_LIVE_CHECKS } from '../constants';

const statusTone = (statusCode: number) =>
  statusCode >= 200 && statusCode < 300
    ? 'border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-200'
    : 'border-rose-400/30 bg-rose-400/[0.08] text-rose-200';

const categoryTone: Record<string, string> = {
  portfolio: 'text-accent-gold',
  featured: 'text-sky-200',
  support: 'text-white/60',
};

const VerificationBoard: React.FC = () => {
  return (
    <Section id="verification" className="bg-[#06070a]">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Verified Now</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">Real deployments opened, real bounded OpenAI lanes exercised</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          This board is the hard evidence layer behind the narrative. Static sites were opened over HTTP and the bounded reviewer APIs were exercised locally
          with a real OpenAI key against fixed scenario ids only.
        </p>
      </div>

      <div className="mb-14">
        <div className="mb-6 flex items-center gap-3">
          <RadioTower className="h-5 w-5 text-accent-gold" />
          <h3 className="font-serif-heading text-2xl text-white">Live API checks</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {VERIFIED_LIVE_CHECKS.map((item) => (
            <article key={`${item.repo}-${item.route}`} className="border border-white/8 bg-[#0a0a0c] p-6 transition-colors duration-300 hover:border-accent-gold/30 sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/8 pb-5">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">{item.repo}</p>
                  <h3 className="font-serif-heading text-2xl text-white">{item.title}</h3>
                </div>
                <div className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${statusTone(item.statusCode)}`}>
                  {item.statusCode}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm text-white/80 md:grid-cols-2">
                <div className="border border-white/10 bg-white/[0.02] px-4 py-3">
                  <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/40">Route</p>
                  <p className="font-mono text-xs text-white/72">{item.route}</p>
                </div>
                <div className="border border-white/10 bg-white/[0.02] px-4 py-3">
                  <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/40">Scenario + model</p>
                  <p className="text-white">{item.scenarioId}</p>
                  <p className="mt-1 font-mono text-xs text-white/55">{item.model}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-primary-muted">{item.summary}</p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45">
                <span>{item.mode}</span>
                <span>next: {item.nextReviewPath}</span>
                <span>{item.checkedAt}</span>
              </div>

              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center gap-2 text-sm text-white/78 transition-colors hover:text-accent-gold"
              >
                <span>Open repo and project page</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-6 flex items-center gap-3">
          <ServerCog className="h-5 w-5 text-accent-gold" />
          <h3 className="font-serif-heading text-2xl text-white">Deployment checks</h3>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {VERIFIED_DEPLOYMENTS.map((item) => (
            <a
              key={`${item.repo}-${item.href}`}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group border border-white/8 bg-[#0a0a0c] p-5 transition-colors duration-300 hover:border-accent-gold/30"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className={`mb-2 text-xs uppercase tracking-[0.24em] ${categoryTone[item.category]}`}>{item.category}</p>
                  <h4 className="font-serif-heading text-2xl text-white">{item.repo}</h4>
                </div>
                <div className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${statusTone(item.statusCode)}`}>
                  <CheckCircle2 className="mr-1 inline-flex h-3.5 w-3.5" />
                  {item.statusCode}
                </div>
              </div>

              <p className="mb-3 text-sm text-white/78">{item.title}</p>
              <p className="font-mono text-[11px] leading-6 text-white/42">{item.checkedAt}</p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/72 transition-colors group-hover:text-accent-gold">
                <span>Open verified page</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default VerificationBoard;
