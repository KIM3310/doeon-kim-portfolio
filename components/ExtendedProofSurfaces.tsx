import React from 'react';
import { ArrowUpRight, ExternalLink, Github, HeartPulse, Lock, Radar, ShieldCheck } from 'lucide-react';
import Section from './Section';
import { EXTENDED_PROOF_CLUSTERS } from '../constants';

const clusterIcons = [ShieldCheck, Radar, HeartPulse];

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href);

const formatActionUrl = (href: string) => {
  try {
    const url = new URL(href);
    const path = url.pathname.replace(/\/$/, '');
    return path ? `${url.host}${path}` : url.host;
  } catch {
    return href;
  }
};

const ExtendedProofSurfaces: React.FC = () => {
  const totalSurfaces = EXTENDED_PROOF_CLUSTERS.reduce((sum, cluster) => sum + cluster.surfaces.length, 0);
  const privateSurfaces = EXTENDED_PROOF_CLUSTERS.reduce(
    (sum, cluster) => sum + cluster.surfaces.filter((surface) => surface.visibility === 'private').length,
    0,
  );
  const publicSurfaces = totalSurfaces - privateSurfaces;

  return (
    <Section id="proof-surfaces" className="bg-[#070709]">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Extended Proof Surfaces</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">The rest of the account now has explicit review paths too</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          The flagship story is stronger when the supporting repos also expose clear boards, gates, guardrails, and handoff surfaces. These are the
          routes and tools that make the broader account read like one coherent systems portfolio instead of a few good demos plus hidden complexity.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        <article className="border border-white/8 bg-[#0a0a0c] p-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Support project pages</p>
          <p className="mt-3 font-serif-heading text-3xl text-white">{totalSurfaces}</p>
          <p className="mt-2 text-sm leading-6 text-primary-muted">Additional routes and tools now visible in the public reviewer path.</p>
        </article>
        <article className="border border-white/8 bg-[#0a0a0c] p-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Public vs private</p>
          <p className="mt-3 font-serif-heading text-3xl text-white">
            {publicSurfaces} / {privateSurfaces}
          </p>
          <p className="mt-2 text-sm leading-6 text-primary-muted">Most routes are public; the private ones are still framed with explicit operator value.</p>
        </article>
        <article className="border border-white/8 bg-[#0a0a0c] p-5">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">What they prove</p>
          <p className="mt-3 font-serif-heading text-3xl text-white">Boards, gates, guardrails</p>
          <p className="mt-2 text-sm leading-6 text-primary-muted">Operational judgment is visible before action, not buried behind narrative or screenshots.</p>
        </article>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {EXTENDED_PROOF_CLUSTERS.map((cluster, index) => {
          const Icon = clusterIcons[index] || ShieldCheck;
          return (
            <article key={cluster.title} className="border border-white/8 bg-[#0a0a0c] p-6 sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/8 pb-5">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">Support cluster</p>
                  <h3 className="font-serif-heading text-2xl text-white">{cluster.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-primary-muted">{cluster.summary}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-4">
                {cluster.surfaces.map((surface) => (
                  <div key={`${surface.repo}-${surface.surface}`} className="border border-white/8 bg-white/[0.02] p-4">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-medium text-white">{surface.repo}</h4>
                          {surface.note ? (
                            <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                              {surface.note}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/35">{surface.surfaceType}</p>
                      </div>
                      {surface.visibility === 'private' ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/45">
                          <Lock className="h-3.5 w-3.5" />
                          Private
                        </span>
                      ) : null}
                    </div>

                    <div className="mb-4 rounded-2xl border border-accent-gold/15 bg-accent-gold/[0.05] px-4 py-3">
                      <code className="font-mono text-[12px] text-accent-gold">{surface.surface}</code>
                    </div>

                    <p className="mb-4 text-sm leading-7 text-primary-muted">{surface.summary}</p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {surface.teams.map((team) => (
                        <span key={team} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/55">
                          {team}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {surface.github ? (
                        <a
                          href={surface.github}
                          target={isExternalHref(surface.github) ? '_blank' : undefined}
                          rel={isExternalHref(surface.github) ? 'noreferrer' : undefined}
                          className="inline-flex min-w-[12rem] flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left transition-all hover:border-accent-gold/40 hover:text-white"
                        >
                          <span className="inline-flex items-center gap-2 text-xs font-medium text-primary">
                            <Github className="h-4 w-4 text-accent-gold" />
                            <span>GitHub Repo</span>
                          </span>
                          <span className="font-mono text-[11px] text-white/45">{formatActionUrl(surface.github)}</span>
                        </a>
                      ) : null}
                      {surface.demo ? (
                        <a
                          href={surface.demo}
                          target={isExternalHref(surface.demo) ? '_blank' : undefined}
                          rel={isExternalHref(surface.demo) ? 'noreferrer' : undefined}
                          className="inline-flex min-w-[12rem] flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left transition-all hover:border-accent-gold/40 hover:text-white"
                        >
                          <span className="inline-flex items-center gap-2 text-xs font-medium text-primary">
                            <ExternalLink className="h-4 w-4 text-accent-gold" />
                            <span>Live Surface</span>
                          </span>
                          <span className="font-mono text-[11px] text-white/45">{formatActionUrl(surface.demo)}</span>
                        </a>
                      ) : null}
                      {!surface.github && !surface.demo ? (
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-white/45">
                          <ArrowUpRight className="h-4 w-4" />
                          Profile hub documents the private surface
                        </span>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default ExtendedProofSurfaces;
