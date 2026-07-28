import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import InquiryForm, { inquiryApiUrl } from '../components/InquiryForm';

afterEach(() => {
  vi.restoreAllMocks();
  window.history.replaceState({}, '', '/');
});

describe('InquiryForm', () => {
  it('uses the same-origin API locally and the canonical API from static mirrors', () => {
    expect(inquiryApiUrl({ origin: 'http://127.0.0.1:8791', hostname: '127.0.0.1' })).toBe('/api/inquiries');
    expect(inquiryApiUrl({
      origin: 'https://kim3310-doeon-kim-portfolio.pages.dev',
      hostname: 'kim3310-doeon-kim-portfolio.pages.dev',
    })).toBe('/api/inquiries');
    expect(inquiryApiUrl({
      origin: 'https://kim3310.github.io',
      hostname: 'kim3310.github.io',
    })).toBe('https://kim3310-doeon-kim-portfolio.pages.dev/api/inquiries');
  });

  it('preselects a valid product and matching inquiry lane from the URL', () => {
    window.history.replaceState(
      {},
      '',
      '/?offer=agent-runtime-go&inquiry=agent-reliability-audit#private-inquiry',
    );

    render(<InquiryForm />);

    expect(screen.getByLabelText('Resource lane')).toHaveValue('agent-reliability-audit');
  });

  it('keeps legacy lane-only CTA links on the intended service', () => {
    window.history.replaceState(
      {},
      '',
      '/?inquiry=agent-reliability-audit#private-inquiry',
    );

    render(<InquiryForm />);

    expect(screen.getByLabelText('Resource lane')).toHaveValue('agent-reliability-audit');
  });

  it('ignores a lane that does not match the selected product', () => {
    window.history.replaceState(
      {},
      '',
      '/?offer=agent-runtime-go&inquiry=architecture-scope-sprint#private-inquiry',
    );

    render(<InquiryForm />);

    expect(screen.getByLabelText('Resource lane')).toHaveValue('agent-reliability-audit');
  });

  it('adapts the form for Jalhae founding learner research', () => {
    window.history.replaceState(
      {},
      '',
      '/?intent=product-research&offer=jalhae&inquiry=consumer-prototype-customization#private-inquiry',
    );

    render(<InquiryForm />);

    expect(screen.getByRole('heading', { name: 'Help shape Jalhae Plus' })).toBeInTheDocument();
    expect(screen.getByLabelText('Plus price comfort')).toHaveValue('5-10-month');
    expect(screen.getByLabelText('What would make Plus worth paying for?')).toBeInTheDocument();
    expect(screen.queryByLabelText('Organization optional')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Join product research' })).toBeInTheDocument();
  });

  it('submits the bounded private inquiry contract', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ accepted: true, reference: 'lead-123' }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    render(<InquiryForm />);

    fireEvent.change(screen.getByLabelText('Work email'), {
      target: { value: 'buyer@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Resource question or desired outcome'), {
      target: { value: 'We need a production reliability audit for our agent workflow.' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: 'Submit private inquiry' }));

    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('lead-123'));
    expect(fetchMock).toHaveBeenCalledWith('/api/inquiries', expect.objectContaining({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }));
    const requestBody = JSON.parse(String(fetchMock.mock.calls[0]?.[1]?.body)) as {
      intent: string;
    };
    expect(requestBody.intent).toBe('commercial');
  });

  it('shows server validation errors without claiming success', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ error: 'Inquiry limit reached. Try again later.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    render(<InquiryForm />);

    fireEvent.change(screen.getByLabelText('Work email'), {
      target: { value: 'buyer@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Resource question or desired outcome'), {
      target: { value: 'We need a production reliability audit for our agent workflow.' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: 'Submit private inquiry' }));

    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent('Inquiry limit reached');
    });
  });
});
