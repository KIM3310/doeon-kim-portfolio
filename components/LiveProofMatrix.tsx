import React from 'react';
import { ArrowUpRight, RadioTower } from 'lucide-react';
import Section from './Section';
import { LIVE_PROOF_TRACKS } from '../constants';

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href);

const statusTone: Record<string, string> = {
  'public-capped-live': 'border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-200',
  'review-only-live': 'border-amber-400/30 bg-amber-400/[0.08] text-amber-100',
  'artifact-refresh-only': 'border-sky-400/30 bg-sky-400/[0.08] text-sky-100',
};

const LiveProofMatrix: React.FC = () => {
  return (
    <Section id="live-proof" className="bg-[#050608] pt-10">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Live Proof Matrix</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">Static proof, live lane, walkthrough, and resume in one place</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          This is the recruiter-safe matrix for the OpenAI rollout. Each track shows which repo carries the public bounded live route, which static proof to open first,
          which walkthrough to use in an interview, and which resume version should travel with it.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {LIVE_PROOF_TRACKS.map((track) => (
          <article key={track.title} className="border border-white/8 bg-[#0a0a0c] p-6 transition-colors duration-300 hover:border-accent-gold/30 sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/8 pb-5">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">{track.audience}</p>
                <h3 className="font-serif-heading text-2xl text-white">{track.title}</h3>
              </div>
              <div className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${statusTone[track.status]}`}>
                {track.status}
              </div>
            </div>

            <div className="mb-5 grid grid-cols-1 gap-3 text-sm text-white/80">
              <div className="border border-white/10 bg-white/[0.02] px-4 py-3">
                <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-white/40">Static proof</p>
                <a
                  href={track.staticProof.href}
                  target={isExternalHref(track.staticProof.href) ? '_blank' : undefined}
                  rel={isExternalHref(track.staticProof.href) ? 'noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 text-white transition-colors hover:text-accent-gold"
                >
                  <span>{track.staticProof.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <div className="border border-accent-gold/20 bg-accent-gold/[0.06] px-4 py-3">
                <p className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent-gold/80">
                  <RadioTower className="h-3.5 w-3.5" />
                  Live route
                </p>
                <a
                  href={track.liveRepo.href}
                  target={isExternalHref(track.liveRepo.href) ? '_blank' : undefined}
                  rel={isExternalHref(track.liveRepo.href) ? 'noreferrer' : undefined}
                  className="group inline-flex items-center gap-2 text-white transition-colors hover:text-accent-gold"
                >
                  <span>{track.liveRepo.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <p className="mt-2 font-mono text-xs text-white/70">{track.liveRoute}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {[track.walkthrough, track.packet, track.resume].map((link) => (
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

            <p className="mt-5 text-sm leading-7 text-primary-muted">{track.note}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default LiveProofMatrix;
