import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, BrainCircuit, Network } from 'lucide-react';

import { FOCUS_PATHS } from '../constants';
import Section from './Section';

const icons = [BrainCircuit, Network, BriefcaseBusiness];

const FocusPaths: React.FC = () => {
  return (
    <Section id="focus-paths" className="bg-[#070709]">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Focus Paths</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">Start from the strongest systems</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          같은 포트폴리오라도 어디서부터 읽느냐에 따라 보이는 강점이 달라집니다.
          아래 경로는 reliability, platform delivery, adoption materials 기준으로 먼저 볼 시스템과 자료를 정리한 것입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {FOCUS_PATHS.map((path, index) => {
          const Icon = icons[index] || BrainCircuit;
          return (
            <article
              key={path.title}
              className="border border-white/8 bg-[#0a0a0c] p-6 transition-colors duration-300 hover:border-accent-gold/30 sm:p-8"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">System lens</p>
                  <h3 className="font-serif-heading text-2xl text-white">{path.title}</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <p className="mb-6 text-sm leading-7 text-primary-muted">{path.summary}</p>

              <div className="mb-6">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">What stands out</p>
                <div className="flex flex-wrap gap-2">
                  {path.strengths.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent-gold/15 bg-accent-gold/[0.06] px-3 py-1.5 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">Start here</p>
                <div className="flex flex-wrap gap-2">
                  {path.systems.map((system) => (
                    <span
                      key={system}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55"
                    >
                      {system}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3 border-t border-white/8 pt-5">
                {path.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
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

export default FocusPaths;
