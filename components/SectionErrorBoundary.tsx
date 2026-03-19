import React from 'react';
import ErrorBoundary from './ErrorBoundary';

interface SectionErrorBoundaryProps {
  name: string;
  children: React.ReactNode;
}

const SectionFallback: React.FC<{ name: string }> = ({ name }) => (
  <div role="alert" className="border border-white/5 bg-white/[0.02] p-8 text-center">
    <p className="text-sm text-white/40">
      Failed to load the <strong className="text-white/60">{name}</strong> section.
    </p>
  </div>
);

const SectionErrorBoundary: React.FC<SectionErrorBoundaryProps> = ({ name, children }) => (
  <ErrorBoundary fallback={<SectionFallback name={name} />}>
    {children}
  </ErrorBoundary>
);

export default SectionErrorBoundary;
