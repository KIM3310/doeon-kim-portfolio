import React from 'react';
import {
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  PlayCircle,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  PROFILE,
  PRIMARY_PROOF_URL,
  RESUME_PDF_URL,
  SOLUTION_ARCHITECT_RESUME_PDF_URL,
  STAGEPILOT_BENCHMARK_STEPS,
  DATA_PLATFORM_ARCHITECTURE_PACK_URL,
} from '../constants';

const proofLinks = [
  {
    label: 'StagePilot benchmark proof',
    helper: 'Public eval surface with checked-in reliability lift.',
    href: PRIMARY_PROOF_URL,
    Icon: BarChart3,
  },
  {
    label: 'StagePilot repo',
    helper: 'Code surface for parser middleware and runtime logic.',
    href: 'https://github.com/KIM3310/stage-pilot',
    Icon: Github,
  },
  {
    label: 'StagePilot walkthrough',
    helper: 'Quick proof review if a visitor starts with video.',
    href: 'https://youtu.be/6trgTH1vX4M',
    Icon: PlayCircle,
  },
  {
    label: 'Open AegisOps system',
    helper: 'Applied incident system showing the same reliability posture in an operator-facing workflow.',
    href: 'https://aegisops-ai-incident-doctor.pages.dev',
    Icon: ShieldCheck,
  },
  {
    label: 'Open data-platform pack',
    helper: 'Governed delivery and warehouse-facing routing for solution-architecture loops.',
    href: DATA_PLATFORM_ARCHITECTURE_PACK_URL,
    Icon: FileText,
  },
] as const;

const hiringTracks = [
  {
    title: 'AI Engineer track',
    summary: 'Benchmark lift, tool-calling reliability, incident AI, eval harness thinking.',
    cta: 'Open AI Engineer resume',
    href: RESUME_PDF_URL,
  },
  {
    title: 'Solution Architect track',
    summary: 'Approval boundaries, governed delivery, reliable product framing, handoff design.',
    cta: 'Open Solution Architect resume',
    href: SOLUTION_ARCHITECT_RESUME_PDF_URL,
  },
] as const;

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-bg pb-16 pt-28 md:pb-20 md:pt-32 lg:pt-36">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent-soft/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-accent-gold/10 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="container z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="border border-white/12 bg-[#111319]/95 p-8 shadow-[0_32px_120px_rgba(0,0,0,0.35)] backdrop-blur md:p-10"
          >
            <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-white/10 pb-5">
              <span className="text-accent-gold text-xs font-medium tracking-[0.3em] uppercase">AI Engineer + Solution Architect fit</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/45">Code + service proof</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/45">Primary public proof first</span>
            </div>

            <h1 className="mb-6 font-serif-heading text-[3rem] font-medium leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Benchmarked <span className="soft-gradient-text">LLM systems</span><br />
              for real-world failure modes.
            </h1>

            <p className="max-w-3xl text-base font-light leading-8 text-white/72 sm:text-lg">{PROFILE.intro}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={PRIMARY_PROOF_URL} className="inline-flex items-center gap-2 rounded-full bg-accent-gold px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]">
                Open StagePilot proof
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://aegisops-ai-incident-doctor.pages.dev" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent-gold/40">
                Open AegisOps system
              </a>
              <a href={RESUME_PDF_URL} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent-gold/40">
                Download resume
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Role fit</p>
                <p className="mt-2 text-sm text-white">AI Engineer · Solution Architect</p>
              </div>
              <div className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Primary proof</p>
                <p className="mt-2 text-sm text-white">StagePilot benchmark + repo + walkthrough</p>
              </div>
              <div className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Applied case</p>
                <p className="mt-2 text-sm text-white">AegisOps + Enterprise Kit</p>
              </div>
              <div className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Review order</p>
                <p className="mt-2 text-sm text-white">Proof → featured system → hiring track</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="border border-white/10 bg-black/20 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-accent-gold/70">Fastest proof to inspect</p>
                    <h2 className="mt-2 text-2xl font-serif-heading text-white">25% to 90%</h2>
                    <p className="mt-2 text-xs text-primary-muted">40-case expanded suite (13 edge cases: adversarial, unicode, oversized payloads)</p>
                  </div>
                  <BarChart3 className="h-5 w-5 text-accent-gold" />
                </div>
                <div className="mt-5 space-y-4">
                  {STAGEPILOT_BENCHMARK_STEPS.map((entry) => (
                    <article key={entry.label}>
                      <div className="mb-2 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-white">{entry.label}</p>
                          <p className="text-xs text-primary-muted">{entry.helper}</p>
                        </div>
                        <p className={`text-sm font-semibold ${entry.textClass}`}>{entry.rate.toFixed(2)}%</p>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <div className={`h-full rounded-full ${entry.accentClass}`} style={{ width: `${entry.rate}%` }} />
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="border border-white/10 bg-black/20 p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-accent-gold/70">Hiring tracks</p>
                <div className="mt-4 space-y-3">
                  {hiringTracks.map((track) => (
                    <a key={track.title} href={track.href} className="block border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent-gold/40">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base font-medium text-white">{track.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-white/68">{track.summary}</p>
                        </div>
                        <BriefcaseBusiness className="h-4 w-4 flex-none text-accent-gold" />
                      </div>
                      <p className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/65">
                        {track.cta}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-white/65">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 hover:text-white transition-colors"><Mail className="h-4 w-4" /> {PROFILE.email}</a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Github className="h-4 w-4" /> GitHub</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
            className="border border-white/12 bg-[#101217]/95 p-8 shadow-[0_32px_120px_rgba(0,0,0,0.35)] backdrop-blur md:p-10"
          >
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-accent-gold/80">Primary project page</p>
                <h2 className="mt-2 font-serif-heading text-3xl text-white">StagePilot</h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/45">40-case expanded suite</span>
            </div>

            <p className="mb-6 text-sm leading-7 text-white/72">
              Canonical public surface for parser middleware, prompt-mode BenchLab evals, and bounded retry hardening for tool-calling workflows.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Baseline</p>
                <p className="mt-2 text-sm text-white">25% success before hardening (40-case suite)</p>
              </article>
              <article className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Middleware</p>
                <p className="mt-2 text-sm text-white">87.50% with parser recovery</p>
              </article>
              <article className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Bounded retry</p>
                <p className="mt-2 text-sm text-white">90% on the 40-case expanded suite with middleware and bounded retry</p>
              </article>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-accent-gold/70">Why this matters</p>
              <h3 className="mt-3 text-2xl font-serif-heading text-white">Reliability before product theatre</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                The walkthrough starts with failure recovery and evaluator-facing evidence, then moves into applied systems like AegisOps and Enterprise LLM Adoption Kit where incident review, handoff, and governed delivery have to survive real workflow complexity.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-white/50">
                <span className="rounded-full border border-white/10 px-3 py-2">Parser recovery</span>
                <span className="rounded-full border border-white/10 px-3 py-2">BenchLab evals</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Bounded retry</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Review pack</span>
                <span className="rounded-full border border-white/10 px-3 py-2">AegisOps system</span>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-accent-gold/70">Proof links</p>
                  <h3 className="mt-2 text-2xl font-serif-heading text-white">Open evidence, not just descriptions</h3>
                </div>
                <ExternalLink className="h-5 w-5 text-accent-gold" />
              </div>
              <div className="space-y-3">
                {proofLinks.map(({ label, helper, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-start justify-between gap-4 border border-white/10 bg-white/[0.02] px-4 py-4 transition-all hover:border-accent-gold/40 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-4 w-4 flex-none text-accent-gold" />
                      <div>
                        <p className="text-sm font-medium text-white">{label}</p>
                        <p className="mt-1 text-sm leading-6 text-white/68">{helper}</p>
                      </div>
                    </div>
                    <ArrowRight className="mt-0.5 h-4 w-4 flex-none text-white/45 transition-transform group-hover:translate-x-0.5 group-hover:text-accent-gold" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
