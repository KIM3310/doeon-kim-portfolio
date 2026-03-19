import React from 'react';
import { ArrowUpRight, Radar, Rocket, ShieldCheck, TimerReset } from 'lucide-react';
import { PORTFOLIO_ACTIONS, PORTFOLIO_SIGNAL_DECK } from '../constants';
import Section from './Section';

const icons = [Rocket, ShieldCheck, Radar, TimerReset];

const Briefing: React.FC = () => {
  return (
    <Section id="briefing" className="pt-10">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.25fr_0.95fr]">
        <div className="border border-white/10 bg-[#09090b] p-8 md:p-10">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Operator Briefing</p>
              <h2 className="font-serif-heading text-3xl text-white md:text-4xl">One candidate, one primary system, one proof chain.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-primary-muted">
              The goal is fast reviewer confidence: understand the strongest system first, then verify the proof chain around it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {PORTFOLIO_SIGNAL_DECK.map((signal, index) => {
              const Icon = icons[index % icons.length] ?? Rocket;
              return (
                <article key={signal.label} className="border border-white/8 bg-white/[0.025] p-5 transition-colors hover:border-accent-gold/30">
                  <Icon className="mb-4 h-5 w-5 text-accent-gold" />
                  <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-white/35">{signal.label}</p>
                  <h3 className="mb-2 text-lg font-medium text-white">{signal.value}</h3>
                  <p className="text-sm leading-relaxed text-primary-muted">{signal.detail}</p>
                </article>
              );
            })}
          </div>
        </div>

        <aside className="border border-white/10 bg-[#050505] p-8 md:p-10">
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Shortest Path</p>
          <h2 className="mb-4 font-serif-heading text-3xl text-white">Pick the fastest review route.</h2>
          <p className="mb-8 text-sm leading-relaxed text-primary-muted">
            The best portfolio surface is the one that removes navigation cost. Start at the primary system, inspect the proof, and then open contact or GitHub if the fit is strong.
          </p>

          <div className="space-y-4">
            {PORTFOLIO_ACTIONS.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="group block border border-white/10 bg-white/[0.02] p-5 transition-all hover:border-accent-gold/40 hover:bg-white/[0.04]"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="text-base font-medium text-white">{action.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-gold" />
                </div>
                <p className="text-sm leading-relaxed text-primary-muted">{action.helper}</p>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
};

export default Briefing;
