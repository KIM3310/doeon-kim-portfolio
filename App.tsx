import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SectionErrorBoundary from './components/SectionErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisitorMode from './components/VisitorMode';
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
          <SectionErrorBoundary name="VisitorMode"><VisitorMode /></SectionErrorBoundary>
          <SectionErrorBoundary name="SubmissionReadiness"><SubmissionReadiness /></SectionErrorBoundary>
          <SectionErrorBoundary name="ApplicationPackets"><ApplicationPackets /></SectionErrorBoundary>
          <SectionErrorBoundary name="LiveProofMatrix"><LiveProofMatrix /></SectionErrorBoundary>
          <SectionErrorBoundary name="VerificationBoard"><VerificationBoard /></SectionErrorBoundary>
          <SectionErrorBoundary name="EvidenceGallery"><EvidenceGallery /></SectionErrorBoundary>
          <SectionErrorBoundary name="BenchmarkProof"><BenchmarkProof /></SectionErrorBoundary>
          <SectionErrorBoundary name="Briefing"><Briefing /></SectionErrorBoundary>
          <SectionErrorBoundary name="Projects"><Projects /></SectionErrorBoundary>
          <SectionErrorBoundary name="RepoOperatingMatrix"><RepoOperatingMatrix /></SectionErrorBoundary>
          <SectionErrorBoundary name="ExtendedProofSurfaces"><ExtendedProofSurfaces /></SectionErrorBoundary>
          <SectionErrorBoundary name="FocusPaths"><FocusPaths /></SectionErrorBoundary>
          <SectionErrorBoundary name="Targets"><Targets /></SectionErrorBoundary>
          <SectionErrorBoundary name="WhyFit"><WhyFit /></SectionErrorBoundary>
          <SectionErrorBoundary name="Skills"><Skills /></SectionErrorBoundary>
          <SectionErrorBoundary name="Experience"><Experience /></SectionErrorBoundary>
          <SectionErrorBoundary name="Certifications"><Certifications /></SectionErrorBoundary>
          <SectionErrorBoundary name="EducationAndLanguages"><EducationAndLanguages /></SectionErrorBoundary>
          <SectionErrorBoundary name="CommunityHub"><CommunityHub /></SectionErrorBoundary>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
