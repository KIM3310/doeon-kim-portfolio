import React from 'react';
import { EXPERIENCE } from '../constants';
import Section from './Section';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-serif-heading text-white mb-4">Professional Journey</h2>
        <div className="w-px h-16 bg-gradient-to-b from-accent-gold/0 via-accent-gold/50 to-accent-gold/0 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-[1px] bg-white/10"></div>

        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className={`relative mb-16 md:flex ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full group`}>
            
            {/* Center Node */}
            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-[11px] h-[11px] rounded-full bg-[#050505] border border-white/30 group-hover:border-accent-gold group-hover:bg-accent-gold transition-colors z-10 mt-1.5 md:mt-0"></div>

            <div className={`ml-8 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
              <div className="transition-all">
                <span className="text-accent-gold text-xs font-bold tracking-widest uppercase mb-2 block">
                  {exp.company}
                </span>
                
                <h3 className="text-xl font-serif-heading text-white mb-2">{exp.role}</h3>
                
                <div className="flex flex-col sm:flex-row sm:gap-6 text-white/40 text-xs mb-6 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-2">
                  {exp.description.map((desc, dIdx) => (
                    <li key={dIdx} className="text-primary-muted text-sm font-light leading-relaxed">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
