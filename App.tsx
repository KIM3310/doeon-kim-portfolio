import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { PROFILE } from './constants';
import { Github, Linkedin, MessageSquare } from 'lucide-react';

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
      </div>
      <div className="footer-links">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
        <a href={PROFILE.contactUrl} target="_blank" rel="noopener noreferrer"><MessageSquare size={18} /> Service inquiry</a>
      </div>
    </footer>
  </div>
);

export default App;
