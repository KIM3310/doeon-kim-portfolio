import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_STATS, PROFILE } from '../constants';

const Hero: React.FC = () => (
  <section id="about" className="pt-24 pb-8 px-6 md:pb-12">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
        {PROFILE.name}
      </h1>
      <p className="text-xl text-gray-400 mb-4">{PROFILE.title}</p>
      <p className="text-gray-300 leading-relaxed mb-6">{PROFILE.intro}</p>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-white/10 py-5 mb-6 sm:grid-cols-4">
        {PORTFOLIO_STATS.map(stat => (
          <div key={stat.label}>
            <dt className="text-xs uppercase tracking-wide text-gray-500">{stat.label}</dt>
            <dd className="mt-1 text-sm font-semibold text-white">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Github size={20} /> GitHub
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Linkedin size={20} /> LinkedIn
        </a>
        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Mail size={20} /> Email
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
