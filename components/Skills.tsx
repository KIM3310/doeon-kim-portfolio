import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => (
  <section id="skills" className="section-shell capability-section">
    <div className="max-w-6xl mx-auto">
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
        <h2>Reusable engineering patterns</h2>
        <p>The recurring through-line is controlled execution: clear state, bounded integrations, visible evidence, and calm operator surfaces.</p>
      </div>
      <div className="capability-grid">
        {SKILLS.map((group, idx) => (
          <article key={idx} className="capability-card">
            <h3>{group.category}</h3>
            <div className="capability-tags">
              {group.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
