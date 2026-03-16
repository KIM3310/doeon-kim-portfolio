import React from 'react';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import Section from './Section';
import { REPO_OPERATING_MATRIX } from '../constants';

const tierOrder = ['Lead with', 'Selective use', 'De-emphasize'] as const;
const tierCopy: Record<(typeof tierOrder)[number], string> = {
  'Lead with': 'These repos should appear in the first recruiter pass for the target hiring lanes.',
  'Selective use': 'These repos are strong, but they should be introduced when the role or interviewer context makes them relevant.',
  'De-emphasize': 'These are valid breadth signals, but they should stay behind the recruiter-first chain unless the role explicitly benefits from them.',
};

const fitTone = (score: number) => {
  if (score >= 8) return 'border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-200';
  if (score >= 5) return 'border-sky-400/30 bg-sky-400/[0.08] text-sky-100';
  return 'border-white/10 bg-white/[0.04] text-white/70';
};

const RepoOperatingMatrix: React.FC = () => {
  return (
    <Section id="operating-map" className="bg-[#050608]">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Repo Operating Map</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">Every repo assigned to the hiring lane it actually strengthens</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          The problem is no longer “not enough projects.” It is ordering. This map makes every repo explicit about whether it should lead an AI Engineer story,
          support a Solutions Architect story, or stay out of the default recruiter pass.
        </p>
      </div>

      <div className="space-y-10">
        {tierOrder.map((tier) => {
          const rows = REPO_OPERATING_MATRIX.filter((entry) => entry.tier === tier);
          return (
            <div key={tier}>
              <div className="mb-5 flex items-center gap-3">
                <Layers3 className="h-5 w-5 text-accent-gold" />
                <div>
                  <h3 className="font-serif-heading text-2xl text-white">{tier}</h3>
                  <p className="text-sm leading-7 text-primary-muted">{tierCopy[tier]}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                {rows.map((entry) => (
                  <article key={entry.name} className="border border-white/8 bg-[#0a0a0c] p-6 transition-colors duration-300 hover:border-accent-gold/30 sm:p-7">
                    <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/8 pb-5">
                      <div>
                        <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">{entry.primaryRole}</p>
                        <h4 className="font-serif-heading text-2xl text-white">{entry.name}</h4>
                      </div>
                      {entry.visibility === 'private' ? (
                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/55">
                          private
                        </span>
                      ) : null}
                    </div>

                    <p className="mb-5 text-sm leading-7 text-primary-muted">{entry.strength}</p>

                    <div className="mb-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em]">
                      <span className={`rounded-full border px-3 py-1 ${fitTone(entry.aiEngineerFit)}`}>AI {entry.aiEngineerFit}/10</span>
                      <span className={`rounded-full border px-3 py-1 ${fitTone(entry.solutionArchitectFit)}`}>SA {entry.solutionArchitectFit}/10</span>
                    </div>

                    <p className="mb-4 text-sm text-white/72">{entry.note}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {entry.targetTracks.map((track) => (
                        <span key={`${entry.name}-${track}`} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                          {track}
                        </span>
                      ))}
                    </div>

                    <a
                      href={entry.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 text-sm text-white/78 transition-colors hover:text-accent-gold"
                    >
                      <span>Open repo</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default RepoOperatingMatrix;
