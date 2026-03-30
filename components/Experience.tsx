import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => (
  <section id="experience" className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
      <div className="space-y-10">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="border-l-2 border-white/10 pl-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="text-gray-400 text-sm mb-1">{exp.role}{exp.location ? ` · ${exp.location}` : ''}</p>
            <ul className="mt-3 space-y-1">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-sm text-gray-400">• {desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
