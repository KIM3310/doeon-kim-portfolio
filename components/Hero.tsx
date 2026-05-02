import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, ShieldCheck, Workflow } from 'lucide-react';
import { PORTFOLIO_STATS, PROFILE } from '../constants';

const Hero: React.FC = () => (
  <section id="about" className="hero-section">
    <div className="hero-copy">
      <p className="eyebrow">Technical Systems Gallery</p>
      <h1>{PROFILE.name}</h1>
      <p className="hero-subtitle">{PROFILE.title}</p>
      <p className="hero-summary">{PROFILE.intro}</p>
      <div className="hero-actions">
        <a href="#projects" className="primary-action">
          Browse systems <ArrowRight size={18} />
        </a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="secondary-action">
          <Github size={18} /> GitHub
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="secondary-action">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href={`mailto:${PROFILE.email}`} className="secondary-action">
          <Mail size={18} /> Email
        </a>
      </div>
    </div>
    <aside className="hero-panel" aria-label="Repository health summary">
      <div className="hero-panel-header">
        <ShieldCheck aria-hidden="true" />
        <div>
          <p className="eyebrow">Current Shape</p>
          <h2>Active work stays inspectable. Legacy lanes stay archived.</h2>
        </div>
      </div>
      <dl className="stat-grid">
        {PORTFOLIO_STATS.map(stat => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <div className="system-strip">
        <Workflow aria-hidden="true" />
        <span>runtime to governance to operations to data contracts to applied ML</span>
      </div>
    </aside>
  </section>
);

export default Hero;
