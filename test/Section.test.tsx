import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Section from '../components/Section';

describe('Section component', () => {
  it('renders children inside a section with the given id', () => {
    render(
      <Section id="test-section">
        <h2>Test heading</h2>
      </Section>,
    );
    const section = document.getElementById('test-section');
    expect(section).toBeInTheDocument();
    expect(section?.tagName).toBe('SECTION');
    expect(screen.getByText('Test heading')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Section id="styled" className="bg-black">
        <p>Content</p>
      </Section>,
    );
    const section = document.getElementById('styled');
    expect(section?.className).toContain('bg-black');
  });

  it('has default padding classes', () => {
    render(
      <Section id="padded">
        <p>Padded</p>
      </Section>,
    );
    const section = document.getElementById('padded');
    expect(section?.className).toContain('py-24');
  });
});
