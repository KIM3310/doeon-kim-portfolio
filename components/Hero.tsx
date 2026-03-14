import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROFILE, FLAGSHIP_URL, DOSSIER_URL, RESUME_PDF_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg pt-24 md:pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent-soft/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-accent-gold/10 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="container z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="border border-white/10 bg-[#09090b] p-8 md:p-10"
          >
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <span className="text-accent-gold text-xs font-medium tracking-[0.3em] uppercase">FabPilot Live X</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/45">Gemini Live Agent Challenge × Samsung-ready</span>
            </div>

            <h1 className="mb-6 font-serif-heading text-[3rem] font-medium leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Reviewable <span className="soft-gradient-text">AI systems</span><br />
              for high-trust operations.
            </h1>

            <p className="max-w-3xl text-base font-light leading-8 text-primary-muted sm:text-lg">{PROFILE.intro}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={FLAGSHIP_URL} className="inline-flex items-center gap-2 rounded-full bg-accent-gold px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]">
                Launch FabPilot Live X
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={DOSSIER_URL} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent-gold/40">
                Read dossier
              </a>
              <a href={RESUME_PDF_URL} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent-gold/40">
                Download resume
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Role fit</p>
                <p className="mt-2 text-sm text-white">AI/SW · Reliability · Operations</p>
              </div>
              <div className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Flagship</p>
                <p className="mt-2 text-sm text-white">FabPilot Live X</p>
              </div>
              <div className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Domain</p>
                <p className="mt-2 text-sm text-white">Semiconductor ops + high-trust AI</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-white/50">
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2 hover:text-white transition-colors"><Mail className="h-4 w-4" /> {PROFILE.email}</a>
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Github className="h-4 w-4" /> GitHub</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white transition-colors"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: 'easeOut' }}
            className="border border-white/10 bg-[#09090b] p-8 md:p-10"
          >
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-accent-gold/80">Flagship thesis</p>
                <h2 className="mt-2 font-serif-heading text-3xl text-white">FabPilot Live X</h2>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/45">Evidence → decision → approval</span>
            </div>

            <p className="mb-6 text-sm leading-7 text-primary-muted">
              Semiconductor command surface for operator voice, dashboard context, lot state, SPC drift, SOP grounding, signed handoff, and replayable debugging.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Perception</p>
                <p className="mt-2 text-sm text-white">Voice, screen, lot state, SPC drift</p>
              </article>
              <article className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Core artifact</p>
                <p className="mt-2 text-sm text-white">Evidence graph + decision trace + signed handoff</p>
              </article>
              <article className="border border-white/10 bg-black/20 p-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">Why it matters</p>
                <p className="mt-2 text-sm text-white">Risky operational decisions become visible, explainable, and governable.</p>
              </article>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-accent-gold/70">Current mission posture</p>
              <h3 className="mt-3 text-2xl font-serif-heading text-white">Etch line thermal + yield drift</h3>
              <p className="mt-3 text-sm leading-7 text-primary-muted">
                One workflow demonstrates the whole product: detect a risky operational situation, assemble the right evidence, rank the strongest explanation, then stop cleanly at the approval boundary.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-white/50">
                <span className="rounded-full border border-white/10 px-3 py-2">Gemini Live</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Evidence graph</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Decision trace</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Approval gate</span>
                <span className="rounded-full border border-white/10 px-3 py-2">Replayable handoff</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
