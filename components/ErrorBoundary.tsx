import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('[ErrorBoundary]', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div role="alert" aria-live="assertive" className="mx-auto max-w-xl p-8 text-center" style={{ animation: 'sectionFadeIn 0.5s ease-out' }}>
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
            <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </div>
          <h2 className="mb-3 text-2xl font-medium text-white">Something went wrong</h2>
          <p className="mb-2 text-sm text-white/60">
            An error occurred while rendering this section. You can try again or refresh the page.
          </p>
          <p className="mb-6 text-xs text-white/40 font-mono break-all">
            {this.state.error?.message ?? 'An unexpected error occurred.'}
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => this.setState({ hasError: false, error: null })}
              className="rounded-full border border-white/10 bg-white/[0.05] px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-accent-soft"
            >
              Try again
            </button>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-full border border-white/10 bg-white/[0.05] px-6 py-2.5 text-sm font-medium text-white/60 transition-all hover:border-white/30 hover:text-white"
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
