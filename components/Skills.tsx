import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => (
  <section id="skills" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((group, idx) => (
          <div key={idx} className="border-l-2 border-white/10 pl-6 hover:border-white/30 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span key={i} className="text-sm text-gray-400">{skill}{i < group.skills.length - 1 ? ' ·' : ''}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
