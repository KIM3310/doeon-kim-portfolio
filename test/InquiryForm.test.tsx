import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import InquiryForm, { inquiryApiUrl, probeInquiryApi } from '../components/InquiryForm';

const allowInquiryApi = () =>
  vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 204 }));

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

  it('enables the production form only after a 204 preflight response', async () => {
    const location = {
      origin: 'https://kim3310.github.io',
      hostname: 'kim3310.github.io',
    };
    const availableFetch = vi.fn().mockResolvedValue(new Response(null, { status: 204 }));
    const unavailableFetch = vi.fn().mockResolvedValue(new Response(null, { status: 405 }));

    await expect(probeInquiryApi(location, availableFetch)).resolves.toBe(true);
    await expect(probeInquiryApi(location, unavailableFetch)).resolves.toBe(false);
    expect(availableFetch).toHaveBeenCalledWith(
      'https://kim3310-doeon-kim-portfolio.pages.dev/api/inquiries',
      { method: 'OPTIONS' },
    );
  });

  it('keeps the form hidden unless the live endpoint returns 204', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 405 }));

    render(<InquiryForm />);

    expect(screen.queryByLabelText('Work email')).not.toBeInTheDocument();
    expect(await screen.findByText('Private form temporarily unavailable')).toBeInTheDocument();
    expect(screen.queryByLabelText('Work email')).not.toBeInTheDocument();
  });

  it('preselects a valid product and matching inquiry lane from the URL', async () => {
    window.history.replaceState(
      {},
      '',
      '/?offer=agent-runtime-go&inquiry=agent-reliability-audit#private-inquiry',
    );

    allowInquiryApi();
    render(<InquiryForm />);

    expect(await screen.findByLabelText('Resource lane')).toHaveValue('agent-reliability-audit');
  });

  it('keeps legacy lane-only CTA links on the intended service', async () => {
    window.history.replaceState(
      {},
      '',
      '/?inquiry=agent-reliability-audit#private-inquiry',
    );

    allowInquiryApi();
    render(<InquiryForm />);

    expect(await screen.findByLabelText('Resource lane')).toHaveValue('agent-reliability-audit');
  });

  it('ignores a lane that does not match the selected product', async () => {
    window.history.replaceState(
      {},
      '',
      '/?offer=agent-runtime-go&inquiry=architecture-scope-sprint#private-inquiry',
    );

    allowInquiryApi();
    render(<InquiryForm />);

    expect(await screen.findByLabelText('Resource lane')).toHaveValue('agent-reliability-audit');
  });

  it('adapts the form for Jalhae founding learner research', async () => {
    window.history.replaceState(
      {},
      '',
      '/?intent=product-research&offer=jalhae&inquiry=consumer-prototype-customization#private-inquiry',
    );

    allowInquiryApi();
    render(<InquiryForm />);

    expect(await screen.findByRole('heading', { name: 'Help shape Jalhae Plus' })).toBeInTheDocument();
    expect(screen.getByLabelText('Plus price comfort')).toHaveValue('5-10-month');
    expect(screen.getByLabelText('What would make Plus worth paying for?')).toBeInTheDocument();
    expect(screen.queryByLabelText('Organization optional')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Join product research' })).toBeInTheDocument();
  });

  it('submits the bounded private inquiry contract', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockImplementation(async (_input, init) => {
      if (init?.method === 'OPTIONS') return new Response(null, { status: 204 });
      return new Response(JSON.stringify({ accepted: true, reference: 'lead-123' }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    });
    render(<InquiryForm />);

    fireEvent.change(await screen.findByLabelText('Work email'), {
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
    const postCall = fetchMock.mock.calls.find(([, init]) => init?.method === 'POST');
    const requestBody = JSON.parse(String(postCall?.[1]?.body)) as { intent: string };
    expect(requestBody.intent).toBe('commercial');
  });

  it('shows server validation errors without claiming success', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(async (_input, init) => {
      if (init?.method === 'OPTIONS') return new Response(null, { status: 204 });
      return new Response(JSON.stringify({ error: 'Inquiry limit reached. Try again later.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    });
    render(<InquiryForm />);

    fireEvent.change(await screen.findByLabelText('Work email'), {
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
