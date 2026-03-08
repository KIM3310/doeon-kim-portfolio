import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';
import { Cpu, Database, Cloud, Server, Layout, Settings, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <Section id="skills">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
        <div>
           <h2 className="text-3xl md:text-4xl font-serif-heading font-medium text-white mb-2">Technical Landscape</h2>
           <p className="text-primary-muted font-light">The tools I use to build the future.</p>
        </div>
        <div className="hidden md:block text-right">
            <Layers className="w-8 h-8 text-white/20 ml-auto" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <div 
            key={idx}
            className="group p-6 rounded-none border-l border-white/10 hover:border-accent-gold transition-colors duration-500 bg-gradient-to-r from-white/[0.02] to-transparent"
          >
            <div className="flex flex-col items-start h-full">
              <h3 className="text-lg font-serif-heading text-white mb-6 group-hover:text-accent-gold transition-colors">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-sm text-primary-muted font-light"
                  >
                    {skill} <span className="text-white/10 mx-1">/</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
