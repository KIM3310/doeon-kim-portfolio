import React from 'react';
import ErrorBoundary from './ErrorBoundary';

interface SectionErrorBoundaryProps {
  name: string;
  children: React.ReactNode;
}

const SectionFallback: React.FC<{ name: string }> = ({ name }) => (
  <div role="alert" aria-live="polite" className="border border-white/5 bg-white/[0.02] rounded-lg p-8 text-center my-4 mx-6 lg:mx-12" style={{ animation: 'sectionFadeIn 0.4s ease-out' }}>
    <p className="text-sm text-white/40 mb-3">
      Failed to load the <strong className="text-white/60">{name}</strong> section.
    </p>
    <p className="text-xs text-white/25">Try refreshing the page if this persists.</p>
  </div>
);

const SectionErrorBoundary: React.FC<SectionErrorBoundaryProps> = ({ name, children }) => (
  <ErrorBoundary fallback={<SectionFallback name={name} />}>
    {children}
  </ErrorBoundary>
);

export default SectionErrorBoundary;
