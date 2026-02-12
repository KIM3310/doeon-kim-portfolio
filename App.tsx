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
      <Navbar />
      <main>
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
