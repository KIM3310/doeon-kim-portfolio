import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import InquiryForm from './components/InquiryForm';
import { PROFILE } from './constants';
import { ANALYTICS_CONSENT_STORAGE_KEY, updateAnalyticsConsent } from './analytics';
import type { AnalyticsConsent } from './analytics';
import { Github, Linkedin, MessageSquare, ShieldCheck } from 'lucide-react';

const storedAnalyticsConsent = (): AnalyticsConsent | null => {
  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return stored === 'granted' || stored === 'denied' ? stored : null;
  } catch {
    return null;
  }
};

const AnalyticsConsentPanel: React.FC = () => {
  const [consent, setConsent] = useState<AnalyticsConsent | null>(storedAnalyticsConsent);

  const chooseConsent = (nextConsent: AnalyticsConsent) => {
    let effectiveConsent = nextConsent;
    try {
      window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, nextConsent);
    } catch {
      effectiveConsent = 'denied';
    }
    setConsent(effectiveConsent);
    updateAnalyticsConsent(effectiveConsent);
  };

  return (
    <section className="analytics-consent-panel" aria-label="Analytics consent">
      <div>
        <span><ShieldCheck size={14} aria-hidden="true" /> Analytics</span>
        <p>GA4 starts with Consent Mode denied. Enable only privacy-safe aggregate click analytics.</p>
      </div>
      <div className="analytics-consent-actions">
        <button
          type="button"
          className={consent === 'granted' ? 'is-active' : ''}
          aria-pressed={consent === 'granted'}
          onClick={() => chooseConsent('granted')}
        >
          Enable analytics
        </button>
        <button
          type="button"
          className={consent === 'denied' ? 'is-active' : ''}
          aria-pressed={consent === 'denied'}
          onClick={() => chooseConsent('denied')}
        >
          Keep off
        </button>
      </div>
    </section>
  );
};

const App: React.FC = () => (
  <div className="app-shell">
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <div className="site-visual-grid" aria-hidden="true" />
    <Navbar />
    <main id="main-content">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
    </main>
    <footer id="contact" className="footer-shell">
      <div>
        <p className="footer-kicker">Contact</p>
        <h2>{PROFILE.name}</h2>
        <p>{PROFILE.title}</p>
        <div className="footer-policy-links">
          <a href={`${import.meta.env.BASE_URL}privacy`}>Privacy</a>
          <a href={`${import.meta.env.BASE_URL}terms`}>Terms</a>
        </div>
      </div>
      <div className="footer-stack">
        <AnalyticsConsentPanel />
        <div className="footer-links">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href={PROFILE.contactUrl}><MessageSquare size={18} /> Private inquiry</a>
        </div>
      </div>
      <InquiryForm />
    </footer>
  </div>
);

export default App;
