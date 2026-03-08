import React from 'react';
import { Building2, Database, Boxes, BriefcaseBusiness, ArrowRight } from 'lucide-react';

import { HIRING_LANES } from '../constants';
import Section from './Section';

const icons = [BriefcaseBusiness, Database, Boxes, Building2];

const HiringLanes: React.FC = () => {
  return (
    <Section id="hiring-fit" className="bg-[#060608]">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Target Company Fit</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">Best-fit lanes, not random breadth</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          지금 포트폴리오의 핵심은 프로젝트 수가 아니라 어떤 회사가 어떤 증거를 읽을 수 있는지입니다.
          아래 매핑은 현재 strongest proof와 다음에 닫아야 할 부족한 신호를 같이 보여줍니다.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {HIRING_LANES.map((lane, index) => {
          const Icon = icons[index] || BriefcaseBusiness;
          return (
            <article
              key={lane.title}
              className="group relative overflow-hidden border border-white/8 bg-[#0a0a0c] p-6 transition-all duration-500 hover:border-accent-gold/30 sm:p-8"
            >
              <div className="absolute right-0 top-0 p-6 opacity-5 transition-opacity group-hover:opacity-10">
                <Icon className="h-20 w-20 text-white" />
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">Hiring Lane</p>
                    <h3 className="font-serif-heading text-2xl text-white">{lane.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {lane.companies.map((company) => (
                    <span
                      key={company}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55"
                    >
                      {company}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">Current proof</p>
                  <div className="flex flex-wrap gap-2">
                    {lane.currentProof.map((item) => (
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
                    <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/45">Next move</p>
                    <p className="text-sm leading-7 text-primary-muted">{lane.nextMove}</p>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.24em] text-white/45">Posture</p>
                    <p className="inline-flex items-start gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-white/75">
                      <ArrowRight className="mt-1 h-4 w-4 flex-none text-accent-gold" />
                      <span>{lane.posture}</span>
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

export default HiringLanes;
