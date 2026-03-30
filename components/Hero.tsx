import React from 'react';
import { Mail, Github, Linkedin, FileDown } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => (
  <section id="about" className="pt-32 pb-20 px-6">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {PROFILE.name}
      </h1>
      <p className="text-xl text-gray-400 mb-6">{PROFILE.title}</p>
      <p className="text-gray-300 leading-relaxed mb-8">{PROFILE.intro}</p>
      <div className="flex gap-4">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Github size={20} /> GitHub
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Linkedin size={20} /> LinkedIn
        </a>
        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Mail size={20} /> Email
        </a>
        <a href="resume/Doeon_Kim_Resume.pdf" download className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors">
          <FileDown size={20} /> Resume
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
