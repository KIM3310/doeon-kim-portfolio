import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruiterMode from './components/RecruiterMode';
import SubmissionReadiness from './components/SubmissionReadiness';
import ApplicationPackets from './components/ApplicationPackets';
import LiveProofMatrix from './components/LiveProofMatrix';
import VerificationBoard from './components/VerificationBoard';
import EvidenceGallery from './components/EvidenceGallery';
import BenchmarkProof from './components/BenchmarkProof';
import Briefing from './components/Briefing';
import RepoOperatingMatrix from './components/RepoOperatingMatrix';
import FocusPaths from './components/FocusPaths';
import Targets from './components/Targets';
import ExtendedProofSurfaces from './components/ExtendedProofSurfaces';
import WhyFit from './components/WhyFit';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CommunityHub from './components/CommunityHub';
import SiteSchema from './components/SiteSchema';
import { Certifications, EducationAndLanguages, Footer } from './components/Extras';

const App: React.FC = () => {
  return (
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
        <Hero />
        <RecruiterMode />
        <SubmissionReadiness />
        <ApplicationPackets />
        <LiveProofMatrix />
        <VerificationBoard />
        <EvidenceGallery />
        <BenchmarkProof />
        <Briefing />
        <Projects />
        <RepoOperatingMatrix />
        <ExtendedProofSurfaces />
        <FocusPaths />
        <Targets />
        <WhyFit />
        <Skills />
        <Experience />
        <Certifications />
        <EducationAndLanguages />
        <CommunityHub />
      </main>
      <Footer />
    </div>
  );
};

export default App;
