import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SectionErrorBoundary from './components/SectionErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Verification from './components/Verification';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SiteSchema from './components/SiteSchema';
import { Certifications, EducationAndLanguages, Footer } from './components/Extras';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="antialiased min-h-screen bg-[#050505]">
        <SiteSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <SectionErrorBoundary name="Hero"><Hero /></SectionErrorBoundary>
          <SectionErrorBoundary name="Verification"><Verification /></SectionErrorBoundary>
          <SectionErrorBoundary name="Projects"><Projects /></SectionErrorBoundary>
          <SectionErrorBoundary name="Skills"><Skills /></SectionErrorBoundary>
          <SectionErrorBoundary name="Experience"><Experience /></SectionErrorBoundary>
          <SectionErrorBoundary name="Certifications"><Certifications /></SectionErrorBoundary>
          <SectionErrorBoundary name="EducationAndLanguages"><EducationAndLanguages /></SectionErrorBoundary>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
