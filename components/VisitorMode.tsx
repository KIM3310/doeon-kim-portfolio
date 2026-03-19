import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, Clock3, Sparkles } from 'lucide-react';
import Section from './Section';
import { VISITOR_90_SECOND_STEPS, VISITOR_QUICK_PATHS } from '../constants';

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href);

const VisitorMode: React.FC = () => {
  return (
    <Section id="visitor-mode" className="bg-[#070709] pt-8">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Visitor 90-Second Mode</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">If you only have one minute, use this path</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          The portfolio already has depth. This section removes navigation cost by separating the universal 90-second review flow from the
          company-specific three-click paths.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <article className="border border-white/10 bg-[#09090b] p-6 sm:p-8">
          <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/8 pb-5">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">Universal first-minute path</p>
              <h3 className="font-serif-heading text-2xl text-white">What should become obvious first</h3>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
              <Clock3 className="h-5 w-5" />
            </div>
          </div>

          <div className="space-y-4">
            {VISITOR_90_SECOND_STEPS.map((step) => (
              <article key={step.window} className="border border-white/8 bg-white/[0.02] p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/55">
                    {step.window}
                  </span>
                  <a
                    href={step.href}
                    target={isExternalHref(step.href) ? '_blank' : undefined}
                    rel={isExternalHref(step.href) ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent-gold/80 hover:text-accent-gold"
                  >
                    {step.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <h4 className="text-lg font-medium text-white">{step.title}</h4>
                <p className="mt-3 text-sm leading-7 text-primary-muted">{step.detail}</p>
              </article>
            ))}
          </div>
        </article>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
          {VISITOR_QUICK_PATHS.map((path) => (
            <article key={path.title} className="border border-white/10 bg-[#09090b] p-6">
              <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">Company quick path</p>
                  <h3 className="font-serif-heading text-2xl text-white">{path.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/40">{path.audience}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
              </div>

              <p className="mb-5 text-sm leading-7 text-primary-muted">{path.outcome}</p>

              <div className="space-y-3">
                {path.links.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternalHref(link.href) ? '_blank' : undefined}
                    rel={isExternalHref(link.href) ? 'noreferrer' : undefined}
                    className="group flex items-center justify-between gap-3 border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/80 transition-colors hover:border-accent-gold/30 hover:bg-white/[0.04]"
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-[11px] text-white/55">
                        {index + 1}
                      </span>
                      <span>{link.label}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-white/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-gold" />
                  </a>
                ))}
              </div>
            </article>
          ))}

          <article className="border border-accent-gold/20 bg-accent-gold/[0.05] p-6 md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-accent-gold" />
              <p className="text-xs uppercase tracking-[0.24em] text-accent-gold/80">Why this exists</p>
            </div>
            <p className="max-w-4xl text-sm leading-7 text-white/75">
              The strongest portfolio is not the one with the most content. It is the one where a visitor, hiring manager, or engineer can land on the
              right project page with almost no translation cost. This section exists to make that first move obvious.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
};

export default VisitorMode;
