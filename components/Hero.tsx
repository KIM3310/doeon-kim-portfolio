import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { PORTFOLIO_STATS, PROFILE } from '../constants';

const featuredScreenshot = `${import.meta.env.BASE_URL}evidence/live/aix-pilot.png`;
const featuredScreenshotPreview = `${import.meta.env.BASE_URL}evidence/live/preview/aix-pilot.webp`;
const featuredScreenshotPreviewSmall = `${import.meta.env.BASE_URL}evidence/live/preview-sm/aix-pilot.webp`;

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
      <div className="hero-showcase hero-mobile-showcase">
        <picture>
          <source
            srcSet={`${featuredScreenshotPreviewSmall} 420w, ${featuredScreenshotPreview} 720w`}
            sizes="(max-width: 640px) calc(100vw - 44px), 42vw"
            type="image/webp"
          />
          <img
            src={featuredScreenshot}
            alt="AIX Pilot deployed product console screenshot"
            fetchPriority="high"
            decoding="async"
            width={1440}
            height={1000}
          />
        </picture>
      </div>
    </div>
    <aside className="hero-panel" aria-label="Featured system and repository health summary">
      <div className="hero-showcase">
        <picture>
          <source
            srcSet={`${featuredScreenshotPreviewSmall} 420w, ${featuredScreenshotPreview} 720w`}
            sizes="(max-width: 640px) calc(100vw - 44px), 42vw"
            type="image/webp"
          />
          <img
            src={featuredScreenshot}
            alt="AIX Pilot deployed product console screenshot"
            fetchPriority="high"
            decoding="async"
            width={1440}
            height={1000}
          />
        </picture>
      </div>
      <div className="hero-panel-header">
        <Sparkles aria-hidden="true" />
        <div>
          <p className="eyebrow">Featured System</p>
          <h2>AIX Pilot leads the gallery as a deployed Enterprise GenAI console.</h2>
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
        <ShieldCheck aria-hidden="true" />
        <span>deployed systems, reviewable tests, quiet operating boundaries</span>
      </div>
    </aside>
  </section>
);

export default Hero;
