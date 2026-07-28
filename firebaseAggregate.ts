import type {
  TelemetryEventSubmission,
} from './telemetryContract';

type FirebaseAggregateConfig = {
  FIREBASE_PROJECT_ID?: string;
  FIREBASE_CLIENT_EMAIL?: string;
  FIREBASE_PRIVATE_KEY?: string;
};

export type FirebaseAggregateEnv = PagesEnv & FirebaseAggregateConfig;

type OAuthTokenResponse = {
  access_token?: string;
};

const FIRESTORE_SCOPE = 'https://www.googleapis.com/auth/datastore';
const OAUTH_TOKEN_ENDPOINT = 'https://oauth2.googleapis.com/token';
const PRIVATE_KEY_HEADER = ['-----BEGIN', 'PRIVATE KEY-----'].join(' ');
const PRIVATE_KEY_FOOTER = ['-----END', 'PRIVATE KEY-----'].join(' ');

const encodeBase64Url = (value: string | ArrayBuffer): string => {
  const binary = typeof value === 'string'
    ? btoa(value)
    : btoa(String.fromCharCode(...new Uint8Array(value)));
  return binary.replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/u, '');
};

const privateKeyBytes = (privateKey: string): ArrayBuffer => {
  const normalized = privateKey
    .replaceAll('\\n', '\n')
    .replaceAll(PRIVATE_KEY_HEADER, '')
    .replaceAll(PRIVATE_KEY_FOOTER, '')
    .replace(/\s/gu, '');
  const bytes = Uint8Array.from(atob(normalized), character => character.charCodeAt(0));
  return bytes.buffer;
};

const createServiceAccountToken = async (
  clientEmail: string,
  privateKey: string,
): Promise<string> => {
  const now = Math.floor(Date.now() / 1_000);
  const header = encodeBase64Url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = encodeBase64Url(JSON.stringify({
    iss: clientEmail,
    scope: FIRESTORE_SCOPE,
    aud: OAUTH_TOKEN_ENDPOINT,
    iat: now,
    exp: now + 3_000,
  }));
  const unsignedToken = `${header}.${claims}`;
  const key = await crypto.subtle.importKey(
    'pkcs8',
    privateKeyBytes(privateKey),
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    key,
    new TextEncoder().encode(unsignedToken),
  );
  const assertion = `${unsignedToken}.${encodeBase64Url(signature)}`;

  const response = await fetch(OAUTH_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });
  if (!response.ok) {
    throw new Error(`Firebase OAuth exchange failed with status ${response.status}.`);
  }
  const token = await response.json<OAuthTokenResponse>();
  if (!token.access_token) {
    throw new Error('Firebase OAuth exchange returned no access token.');
  }
  return token.access_token;
};

export const isFirebaseAggregateConfigured = (
  env: FirebaseAggregateConfig,
): env is FirebaseAggregateConfig & {
  FIREBASE_CLIENT_EMAIL: string;
  FIREBASE_PRIVATE_KEY: string;
  FIREBASE_PROJECT_ID: string;
} =>
  typeof env.FIREBASE_PROJECT_ID === 'string' &&
  env.FIREBASE_PROJECT_ID.length > 0 &&
  typeof env.FIREBASE_CLIENT_EMAIL === 'string' &&
  env.FIREBASE_CLIENT_EMAIL.includes('@') &&
  typeof env.FIREBASE_PRIVATE_KEY === 'string' &&
  env.FIREBASE_PRIVATE_KEY.includes(PRIVATE_KEY_HEADER);

export const buildFirestoreAggregateCommit = (
  projectId: string,
  value: TelemetryEventSubmission,
  day: string,
): object => {
  const document = [
    'projects',
    projectId,
    'databases',
    '(default)',
    'documents',
    'publicAggregates',
    value.repo,
  ].join('/');
  const dayField = `days.d_${day.replaceAll('-', '_')}`;

  return {
    writes: [
      {
        transform: {
          document,
          fieldTransforms: [
            { fieldPath: 'total', increment: { integerValue: '1' } },
            { fieldPath: `events.${value.event}`, increment: { integerValue: '1' } },
            { fieldPath: dayField, increment: { integerValue: '1' } },
            { fieldPath: 'updatedAt', setToServerValue: 'REQUEST_TIME' },
          ],
        },
      },
    ],
  };
};

export const syncFirebaseAggregate = async (
  env: FirebaseAggregateEnv & {
    FIREBASE_CLIENT_EMAIL: string;
    FIREBASE_PRIVATE_KEY: string;
    FIREBASE_PROJECT_ID: string;
  },
  value: TelemetryEventSubmission,
  day: string,
): Promise<void> => {
  const accessToken = await createServiceAccountToken(
    env.FIREBASE_CLIENT_EMAIL,
    env.FIREBASE_PRIVATE_KEY,
  );
  const database = `projects/${env.FIREBASE_PROJECT_ID}/databases/(default)`;
  const response = await fetch(
    `https://firestore.googleapis.com/v1/${database}/documents:commit`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(buildFirestoreAggregateCommit(
        env.FIREBASE_PROJECT_ID,
        value,
        day,
      )),
    },
  );
  if (!response.ok) {
    throw new Error(`Firebase aggregate commit failed with status ${response.status}.`);
  }
};
