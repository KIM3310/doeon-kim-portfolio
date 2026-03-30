import React from 'react';
import { CERTIFICATIONS, PROFILE } from '../constants';
import { Mail, Github, Linkedin } from 'lucide-react';

const Certifications: React.FC = () => (
  <section id="certifications" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTIFICATIONS.map((cert, idx) => (
          <div key={idx} className="border border-white/10 bg-white/[0.02] rounded-lg p-5 hover:border-white/20 transition-colors">
            <p className="text-white font-medium text-sm">{cert.name}</p>
            <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EducationAndLanguages: React.FC = () => (
  <section id="education" className="py-20 px-6 bg-white/[0.01]">
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Education</h2>
        <h3 className="text-lg text-white">한국방송통신대학교</h3>
        <p className="text-gray-400 text-sm">컴퓨터과학과 (2026.03 입학 · 재학 중)</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Languages</h2>
        <ul className="space-y-3">
          <li className="flex justify-between text-sm"><span className="text-white">Korean</span><span className="text-gray-500">Native</span></li>
          <li className="flex justify-between text-sm"><span className="text-white">English</span><span className="text-gray-500">Business</span></li>
          <li className="flex justify-between text-sm"><span className="text-white">Japanese</span><span className="text-gray-500">Business</span></li>
        </ul>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer id="contact" className="py-16 border-t border-white/5">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-2xl font-bold text-white mb-2">{PROFILE.name}</h2>
      <p className="text-gray-400 mb-6">{PROFILE.title}</p>
      <div className="flex justify-center gap-6 mb-8">
        <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Mail size={18} /> {PROFILE.email}
        </a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Github size={18} /> GitHub
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
      <p className="text-gray-600 text-xs">&copy; {new Date().getFullYear()} {PROFILE.name}</p>
    </div>
  </footer>
);

export { Certifications, EducationAndLanguages, Footer };
