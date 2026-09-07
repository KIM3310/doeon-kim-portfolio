import React from 'react';
import { ArrowRight, DatabaseZap, Github, Linkedin, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { PORTFOLIO_STATS, PROFILE } from '../constants';

const featuredScreenshot = `${import.meta.env.BASE_URL}evidence/live/aegisops.png`;
const featuredScreenshotPreview = `${import.meta.env.BASE_URL}evidence/live/preview/aegisops.webp`;
const featuredScreenshotPreviewSmall = `${import.meta.env.BASE_URL}evidence/live/preview-sm/aegisops.webp`;

const Hero: React.FC = () => (
  <section id="about" className="hero-section">
    <div className="hero-copy">
      <p className="eyebrow">Selected work / Doeon Kim</p>
      <h1>{PROFILE.name}</h1>
      <p className="hero-subtitle">{PROFILE.title}</p>
      <p className="hero-summary">{PROFILE.intro}</p>
      <div className="hero-proof-strip" aria-label="Portfolio stack summary">
        <span>TypeScript + React</span>
        <span>Python + FastAPI</span>
        <span>SQL + Spark</span>
        <span>Terraform + Docker</span>
      </div>
      <div className="hero-actions">
        <a href="#systems" className="primary-action">
          Explore selected work <ArrowRight size={18} />
        </a>
        <a href="#systems" className="secondary-action">
          Review systems
        </a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="secondary-action">
          <Github size={18} /> GitHub
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="secondary-action">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href={PROFILE.contactUrl} className="secondary-action">
          <MessageSquare size={18} /> Private inquiry
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
            alt="AegisOps incident review interface"
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
            alt="AegisOps incident review interface"
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
          <p className="eyebrow">Featured system</p>
          <h2>AegisOps — from incident evidence to a clear handoff.</h2>
        </div>
      </div>
      <p className="hero-panel-note">Logs and screenshots become a structured incident report. Inspect the deterministic replay suite, provider adapters, and persistent session handling behind the interface.</p>
      <dl className="stat-grid">
        {PORTFOLIO_STATS.map(stat => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <div className="system-strip">
        <DatabaseZap aria-hidden="true" />
        <span>Run the demo. Read the implementation. Reproduce the checks.</span>
      </div>
      <div className="system-strip">
        <ShieldCheck aria-hidden="true" />
        <span>Synthetic fixtures and measured results are labeled at their source.</span>
      </div>
    </aside>
  </section>
);

export default Hero;
