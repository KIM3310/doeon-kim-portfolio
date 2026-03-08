import React from 'react';
import { ArrowRight, Boxes, Database, GitBranch, Workflow } from 'lucide-react';

import { UPGRADE_TRACKS } from '../constants';
import Section from './Section';

const icons = [Database, Workflow, Boxes, GitBranch];

const UpgradeTracks: React.FC = () => {
  return (
    <Section id="upgrade-tracks" className="bg-[#060608]">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">System Upgrade Tracks</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">What gets deeper next</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          포인트는 회사를 겨냥한 포장보다 시스템 자체를 더 깊게 만드는 것입니다.
          아래 트랙은 지금 있는 대표작을 어떤 기술 축으로 키울지 정리한 실행 방향입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {UPGRADE_TRACKS.map((track, index) => {
          const Icon = icons[index] || Database;
          return (
            <article
              key={track.title}
              className="group relative overflow-hidden border border-white/8 bg-[#0a0a0c] p-6 transition-all duration-500 hover:border-accent-gold/30 sm:p-8"
            >
              <div className="absolute right-0 top-0 p-6 opacity-5 transition-opacity group-hover:opacity-10">
                <Icon className="h-20 w-20 text-white" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">Engineering Track</p>
                    <h3 className="font-serif-heading text-2xl text-white">{track.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="mb-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">Systems</p>
                  <div className="flex flex-wrap gap-2">
                    {track.systems.map((system) => (
                      <span
                        key={system}
                        className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">Current base</p>
                  <div className="flex flex-wrap gap-2">
                    {track.currentBase.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-accent-gold/15 bg-accent-gold/[0.06] px-3 py-1.5 text-xs text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 border-t border-white/8 pt-5 md:grid-cols-[1.4fr_1fr]">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/45">Next build</p>
                    <p className="text-sm leading-7 text-primary-muted">{track.nextBuild}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/45">Expected lift</p>
                    <p className="inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/75">
                      <ArrowRight className="mt-1 h-4 w-4 flex-none text-accent-gold" />
                      <span>{track.outcome}</span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default UpgradeTracks;
