import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyFit from './components/WhyFit';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { Certifications, EducationAndLanguages, Footer } from './components/Extras';

const App: React.FC = () => {
  return (
    <div className="antialiased min-h-screen bg-[#050505]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhyFit />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <EducationAndLanguages />
      </main>
      <Footer />
    </div>
  );
};

export default App;
