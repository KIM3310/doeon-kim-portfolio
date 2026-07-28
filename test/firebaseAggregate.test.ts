import { describe, expect, it } from 'vitest';
import {
  buildFirestoreAggregateCommit,
  isFirebaseAggregateConfigured,
} from '../firebaseAggregate';
import { TELEMETRY_CONSENT_VERSION } from '../telemetryContract';

describe('firebaseAggregate', () => {
  it('builds one aggregate-only atomic transform for the public data mart', () => {
    const commit = buildFirestoreAggregateCommit(
      'kim3310-free-tools',
      {
        repo: 'stage-pilot',
        event: 'resource_view',
        surface: 'central_resource',
        consentVersion: TELEMETRY_CONSENT_VERSION,
      },
      '2026-07-28',
    );

    expect(commit).toEqual({
      writes: [
        {
          transform: {
            document:
              'projects/kim3310-free-tools/databases/(default)/documents/publicAggregates/stage-pilot',
            fieldTransforms: [
              { fieldPath: 'total', increment: { integerValue: '1' } },
              { fieldPath: 'events.resource_view', increment: { integerValue: '1' } },
              { fieldPath: 'days.d_2026_07_28', increment: { integerValue: '1' } },
              { fieldPath: 'updatedAt', setToServerValue: 'REQUEST_TIME' },
            ],
          },
        },
      ],
    });
    expect(JSON.stringify(commit)).not.toMatch(/url|referrer|session|user|email|prompt/i);
  });

  it('fails closed unless every server-side credential is configured', () => {
    const privateKeyHeader = ['-----BEGIN', 'PRIVATE KEY-----'].join(' ');
    const privateKeyFooter = ['-----END', 'PRIVATE KEY-----'].join(' ');
    expect(isFirebaseAggregateConfigured({
      FIREBASE_PROJECT_ID: 'kim3310-free-tools',
      FIREBASE_CLIENT_EMAIL: 'sync@kim3310-free-tools.iam.gserviceaccount.com',
      FIREBASE_PRIVATE_KEY: `${privateKeyHeader}\\nprivate\\n${privateKeyFooter}\\n`,
    })).toBe(true);
    expect(isFirebaseAggregateConfigured({
      FIREBASE_PROJECT_ID: 'kim3310-free-tools',
    })).toBe(false);
  });
});
