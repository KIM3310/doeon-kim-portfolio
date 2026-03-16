import React from 'react';
import { ArrowUpRight, BrainCircuit, Building2, DatabaseZap, Github, ShieldCheck, Sparkles } from 'lucide-react';
import Section from './Section';
import { REPO_CLUSTERS, TARGET_TRACKS } from '../constants';

const targetIcons = [BrainCircuit, Building2, DatabaseZap, DatabaseZap, ShieldCheck];

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

const Targets: React.FC = () => {
  return (
    <Section id="targets" className="bg-[#070709]">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Target Matrix</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">Which teams should read which repos first</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          The point is not to make every repo look identical. The point is to make the account read as one coherent system portfolio,
          with a clear first-click path for frontier AI, big tech, data platform, and high-trust operational software teams.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {TARGET_TRACKS.map((track, index) => {
          const Icon = targetIcons[index] || Sparkles;
          return (
            <article key={track.title} className="border border-white/8 bg-[#0a0a0c] p-6 transition-colors duration-300 hover:border-accent-gold/30 sm:p-8">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">Target company fit</p>
                  <h3 className="font-serif-heading text-2xl text-white">{track.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">{track.companies}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <p className="mb-6 text-sm leading-7 text-primary-muted">{track.summary}</p>

              <div className="mb-6">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">Signals this track should see quickly</p>
                <div className="flex flex-wrap gap-2">
                  {track.signals.map((signal) => (
                    <span key={signal} className="rounded-full border border-accent-gold/15 bg-accent-gold/[0.06] px-3 py-1.5 text-xs text-white/80">
                      {signal}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/45">Recommended first review path</p>
                <ol className="space-y-2">
                  {track.reviewPath.map((entry, idx) => (
                    <li key={entry} className="flex items-start gap-3 text-sm text-white/78">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-[11px] text-white/55">
                        {idx + 1}
                      </span>
                      <span className="pt-0.5">{entry}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-3 border-t border-white/8 pt-5">
                {track.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternalHref(link.href) ? '_blank' : undefined}
                    rel={isExternalHref(link.href) ? 'noreferrer' : undefined}
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

      <div className="mt-24 border-t border-white/10 pt-10">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Account-wide repo map</p>
            <h3 className="font-serif-heading text-2xl text-white md:text-3xl">Every repo has a place in the story</h3>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-primary-muted">
            Instead of dumping a flat repo list, the account is grouped by hiring signal: review surface, reliability runtime, operational software,
            data platform, and product/mobile experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {REPO_CLUSTERS.map((cluster) => (
            <article key={cluster.title} className="border border-white/8 bg-[#0a0a0c] p-6 sm:p-8">
              <div className="mb-6 border-b border-white/8 pb-5">
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">Repo cluster</p>
                <h4 className="font-serif-heading text-2xl text-white">{cluster.title}</h4>
                <p className="mt-3 text-sm leading-7 text-primary-muted">{cluster.summary}</p>
              </div>

              <div className="space-y-4">
                {cluster.repos.map((repo) => (
                  <div key={repo.name} className="border border-white/8 bg-white/[0.02] p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h5 className="font-medium text-white">{repo.name}</h5>
                          {repo.note ? (
                            <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/45">
                              {repo.note}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-primary-muted">{repo.focus}</p>
                      </div>

                      <div className="flex flex-none flex-wrap gap-2">
                        {repo.github ? (
                          <a
                            href={repo.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-w-[12rem] flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left transition-all hover:border-accent-gold/40 hover:text-white"
                          >
                            <span className="inline-flex items-center gap-2 text-xs font-medium text-primary">
                              <Github className="h-4 w-4 text-accent-gold" />
                              <span>GitHub Repo</span>
                            </span>
                            <span className="font-mono text-[11px] text-white/45">{formatActionUrl(repo.github)}</span>
                          </a>
                        ) : null}
                        {repo.demo ? (
                          <a
                            href={repo.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-w-[12rem] flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left transition-all hover:border-accent-gold/40 hover:text-white"
                          >
                            <span className="inline-flex items-center gap-2 text-xs font-medium text-primary">
                              <ArrowUpRight className="h-4 w-4 text-accent-gold" />
                              <span>Live Surface</span>
                            </span>
                            <span className="font-mono text-[11px] text-white/45">{formatActionUrl(repo.demo)}</span>
                          </a>
                        ) : null}
                        {!repo.github && !repo.demo ? (
                          <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-white/45">
                            Internal artifact / no public link
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Targets;
