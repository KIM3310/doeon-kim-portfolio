import { describe, expect, it } from 'vitest';
import {
  TELEMETRY_ALLOWED_REPOS,
  TELEMETRY_CONSENT_VERSION,
  isTelemetryOriginAllowedForRepo,
  validateTelemetryPayload,
} from '../telemetryContract';

describe('telemetryContract', () => {
  it('allows the existing 35 active repositories and excludes jalhae', () => {
    expect(TELEMETRY_ALLOWED_REPOS).toHaveLength(35);
    expect(new Set(TELEMETRY_ALLOWED_REPOS).size).toBe(35);
    expect(TELEMETRY_ALLOWED_REPOS).not.toContain('jalhae');
  });

  it('accepts only the exact privacy-safe event fields', () => {
    const valid = {
      repo: 'stage-pilot',
      event: 'resource_view',
      surface: 'central_resource',
      consentVersion: TELEMETRY_CONSENT_VERSION,
    };

    expect(validateTelemetryPayload(valid)).toEqual({
      ok: true,
      value: valid,
    });
    expect(validateTelemetryPayload({ ...valid, url: 'https://example.com' })).toEqual({
      ok: false,
      error: 'Request body contains unsupported fields.',
    });
    expect(validateTelemetryPayload({ ...valid, event: 'ad_slot_view' })).toEqual({
      ok: false,
      error: 'Event is invalid.',
    });
    expect(validateTelemetryPayload({ ...valid, surface: 'result_screen' })).toEqual({
      ok: false,
      error: 'Surface is invalid.',
    });
    expect(validateTelemetryPayload({ ...valid, repo: 'jalhae' })).toEqual({
      ok: false,
      error: 'Repository is not allowed.',
    });
  });

  it('binds repository submissions to known origins while central portfolio origins can submit any repo', () => {
    expect(
      isTelemetryOriginAllowedForRepo('https://stage-pilot.pages.dev', 'stage-pilot'),
    ).toBe(true);
    expect(
      isTelemetryOriginAllowedForRepo('https://stage-pilot.pages.dev', 'aix-pilot'),
    ).toBe(false);
    expect(
      isTelemetryOriginAllowedForRepo(
        'https://kim3310-doeon-kim-portfolio.pages.dev',
        'aix-pilot',
      ),
    ).toBe(true);
    expect(
      isTelemetryOriginAllowedForRepo('https://attacker.invalid', 'stage-pilot'),
    ).toBe(false);
  });
});
