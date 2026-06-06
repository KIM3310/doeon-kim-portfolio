import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });

  it('renders the skip-to-content link', () => {
    render(<App />);
    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
  });

  it('renders main content area', () => {
    render(<App />);
    const main = document.getElementById('main-content');
    expect(main).toBeInTheDocument();
    expect(main?.tagName).toBe('MAIN');
  });

  it('renders the navbar brand name', () => {
    render(<App />);
    expect(screen.getAllByText('KIM3310').length).toBeGreaterThan(0);
  });

  it('marks the overview navigation item as the initial active section', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Overview' })).toHaveAttribute('aria-current', 'page');
  });

  it('renders the current InterX role section', () => {
    render(<App />);
    expect(screen.getByText('InterX')).toBeInTheDocument();
    expect(screen.getByText('IT Infrastructure Operations Manager')).toBeInTheDocument();
    expect(screen.getAllByText(/Google Workspace/).length).toBeGreaterThan(0);
  });

  it('renders military experience, education, and certifications', () => {
    render(<App />);
    expect(screen.getByText(/ROK Defense Communication Command/)).toBeInTheDocument();
    expect(screen.getByText('MW Communications Soldier / Squad Leader')).toBeInTheDocument();
    expect(screen.getByText("Bachelor's Degree Examination for Self-Education (BDES)")).toBeInTheDocument();
    expect(screen.getByText('Korea National Open University')).toBeInTheDocument();
    expect(screen.getByText(/Snowflake - SnowPro Associate/)).toBeInTheDocument();
  });

  it('renders progressive disclosure controls for dense review details', () => {
    render(<App />);
    expect(screen.getByText('Operational scope')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure scope')).toBeInTheDocument();
    expect(screen.getByText('Military outcomes')).toBeInTheDocument();
    expect(screen.getAllByText('Business fit').length).toBeGreaterThan(0);
    expect(screen.getByText('Education and Training')).toBeInTheDocument();
  });

  it('renders the narrated evidence reel entry point', () => {
    render(<App />);
    expect(screen.getByText('Narrated Systems Gallery Reel')).toBeInTheDocument();
    expect(screen.getByText('English TTS')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Transcript/ })).toBeInTheDocument();
  });

  it('keeps project evidence cards as the primary visual proof surface', () => {
    render(<App />);
    expect(screen.queryByText('Latest live proof')).not.toBeInTheDocument();
    expect(screen.getByAltText('agent-runtime-go visual evidence')).toBeInTheDocument();
    expect(screen.getByAltText('retina-scan-ai visual evidence')).toBeInTheDocument();
  });
});
