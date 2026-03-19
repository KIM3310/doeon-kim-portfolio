import React from 'react';
import { ArrowUpRight, FolderKanban } from 'lucide-react';
import Section from './Section';
import { APPLICATION_PACKETS } from '../constants';

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href);

const ApplicationPackets: React.FC = () => {
  return (
    <Section id="packets" className="bg-[#060608] pt-10">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Application Packets</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">What to submit for each track</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          These packets are the visitor-safe layer between a strong public portfolio and an actual application. Each one fixes the first-click order,
          the right resume, and the shortest believable proof chain.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {APPLICATION_PACKETS.map((packet) => (
          <article key={packet.title} className="border border-white/8 bg-[#0a0a0c] p-6 transition-colors duration-300 hover:border-accent-gold/30 sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-white/8 pb-5">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">Submit-ready packet</p>
                <h3 className="font-serif-heading text-2xl text-white">{packet.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">{packet.audience}</p>
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-accent-gold">
                <FolderKanban className="h-5 w-5" />
              </div>
            </div>

            <p className="mb-6 text-sm leading-7 text-primary-muted">{packet.claim}</p>

            <div className="mb-6 space-y-3">
              <a
                href={packet.packetHref}
                target={isExternalHref(packet.packetHref) ? '_blank' : undefined}
                rel={isExternalHref(packet.packetHref) ? 'noreferrer' : undefined}
                className="group flex items-center justify-between gap-3 border border-accent-gold/20 bg-accent-gold/[0.06] px-4 py-3 text-sm text-white transition-colors hover:border-accent-gold/40"
              >
                <span>Open packet</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={packet.resumeHref}
                target={isExternalHref(packet.resumeHref) ? '_blank' : undefined}
                rel={isExternalHref(packet.resumeHref) ? 'noreferrer' : undefined}
                className="group flex items-center justify-between gap-3 border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/80 transition-colors hover:border-accent-gold/30 hover:bg-white/[0.04]"
              >
                <span>Open matching resume</span>
                <ArrowUpRight className="h-4 w-4 text-white/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-gold" />
              </a>
            </div>

            <div className="space-y-3 border-t border-white/8 pt-5">
              {packet.links.map((link) => (
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
        ))}
      </div>
    </Section>
  );
};

export default ApplicationPackets;
