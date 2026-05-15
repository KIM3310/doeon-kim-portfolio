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
});
