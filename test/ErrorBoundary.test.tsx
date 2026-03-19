import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import SectionErrorBoundary from '../components/SectionErrorBoundary';

const ThrowingComponent: React.FC<{ message?: string }> = ({ message = 'Test error' }) => {
  throw new Error(message);
};

const GoodComponent: React.FC = () => <div>All good</div>;

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <GoodComponent />
      </ErrorBoundary>,
    );
    expect(screen.getByText('All good')).toBeInTheDocument();
  });

  it('renders fallback UI when child throws', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
    spy.mockRestore();
  });

  it('renders custom fallback when provided', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <ThrowingComponent />
      </ErrorBoundary>,
    );
    expect(screen.getByText('Custom fallback')).toBeInTheDocument();
    spy.mockRestore();
  });

  it('recovers when Try again is clicked', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    let shouldThrow = true;
    const MaybeThrow: React.FC = () => {
      if (shouldThrow) throw new Error('boom');
      return <div>Recovered</div>;
    };
    render(
      <ErrorBoundary>
        <MaybeThrow />
      </ErrorBoundary>,
    );
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    shouldThrow = false;
    fireEvent.click(screen.getByText('Try again'));
    expect(screen.getByText('Recovered')).toBeInTheDocument();
    spy.mockRestore();
  });
});

describe('SectionErrorBoundary', () => {
  it('renders children normally', () => {
    render(
      <SectionErrorBoundary name="Skills">
        <div>Skills content</div>
      </SectionErrorBoundary>,
    );
    expect(screen.getByText('Skills content')).toBeInTheDocument();
  });

  it('renders section-specific fallback on error', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(
      <SectionErrorBoundary name="Hero">
        <ThrowingComponent />
      </SectionErrorBoundary>,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/Hero/)).toBeInTheDocument();
    spy.mockRestore();
  });
});
