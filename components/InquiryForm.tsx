import React, { useMemo, useState } from 'react';
import { CheckCircle2, LockKeyhole, Send } from 'lucide-react';
import { COMMERCIAL_LANES } from '../commercialLanes';
import {
  COMMERCIAL_BUDGET_RANGES,
  INQUIRY_CONSENT_VERSION,
  INQUIRY_INTENTS,
  INQUIRY_LANE_IDS,
  INQUIRY_SOURCE_LANES,
  PRODUCT_RESEARCH_BUDGET_RANGES,
  type InquiryBudgetRange,
  type InquiryIntent,
  type InquiryLaneId,
} from '../inquiryContract';

const CANONICAL_ORIGIN = 'https://kim3310-doeon-kim-portfolio.pages.dev';
const CANONICAL_INQUIRY_API = `${CANONICAL_ORIGIN}/api/inquiries`;
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '::1']);

export const inquiryApiUrl = (
  location: Pick<Location, 'origin' | 'hostname'> = window.location,
): string => {
  if (location.origin === CANONICAL_ORIGIN || LOCAL_HOSTS.has(location.hostname)) {
    return '/api/inquiries';
  }
  return CANONICAL_INQUIRY_API;
};

const initialQueryValue = (key: string): string =>
  new URLSearchParams(window.location.search).get(key)?.trim() ?? '';

const initialSourceRepo = (): string => {
  const requestedRepo = initialQueryValue('offer');
  if (INQUIRY_SOURCE_LANES[requestedRepo]) return requestedRepo;

  const requestedLane = initialQueryValue('inquiry');
  const lane = COMMERCIAL_LANES.find(candidate => candidate.id === requestedLane);
  return lane?.primaryRepos[0] ?? 'doeon-kim-portfolio';
};

const initialLaneId = (): InquiryLaneId => {
  const sourceLane =
    INQUIRY_SOURCE_LANES[initialSourceRepo()] ?? 'architecture-scope-sprint';
  const requestedLane = initialQueryValue('inquiry');
  return (
    INQUIRY_LANE_IDS.includes(requestedLane as InquiryLaneId) &&
    requestedLane === sourceLane
  )
    ? (requestedLane as InquiryLaneId)
    : sourceLane;
};

const initialIntent = (): InquiryIntent => {
  const requestedIntent = initialQueryValue('intent');
  return INQUIRY_INTENTS.includes(requestedIntent as InquiryIntent)
    ? (requestedIntent as InquiryIntent)
    : 'commercial';
};

const budgetLabels: Record<InquiryBudgetRange, string> = {
  'under-1000': 'Under USD 1,000',
  '1000-2500': 'USD 1,000-2,500',
  '2500-5000': 'USD 2,500-5,000',
  '5000-10000': 'USD 5,000-10,000',
  '10000-plus': 'USD 10,000+',
  'not-sure': 'Not sure yet',
  'under-5-month': 'Under USD 5 / month',
  '5-10-month': 'USD 5-10 / month',
  '10-20-month': 'USD 10-20 / month',
  'one-time-only': 'One-time purchase only',
  'free-only': 'Free plan only',
};

type SubmitState =
  | { phase: 'idle' | 'submitting' }
  | { phase: 'success'; reference: string }
  | { phase: 'error'; message: string };

const InquiryForm: React.FC = () => {
  const intent = useMemo(initialIntent, []);
  const isProductResearch = intent === 'product-research';
  const isSupport = intent === 'support';
  const [laneId, setLaneId] = useState<InquiryLaneId>(initialLaneId);
  const [sourceRepo, setSourceRepo] = useState(initialSourceRepo);
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [budgetRange, setBudgetRange] = useState<InquiryBudgetRange>(
    isProductResearch ? '5-10-month' : 'not-sure',
  );
  const [summary, setSummary] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>({ phase: 'idle' });
  const productName = sourceRepo.toLowerCase() === 'jalhae' ? 'Jalhae' : 'this product';
  const copy = isProductResearch
    ? {
        eyebrow: 'Founding learner research',
        title: `Help shape ${productName} Plus`,
        body: 'No charge today. Share what would make the next release worth paying for and which price range feels reasonable.',
        emailLabel: 'Email',
        summaryLabel: 'What would make Plus worth paying for?',
        buttonLabel: 'Join product research',
      }
    : isSupport
      ? {
          eyebrow: 'Private support',
          title: `Send a ${productName} support request`,
          body: 'Describe the issue without credentials, recordings, health information, or other sensitive material.',
          emailLabel: 'Reply email',
          summaryLabel: 'Issue and expected outcome',
          buttonLabel: 'Submit support request',
        }
      : {
          eyebrow: 'Private inquiry',
          title: 'Contact about a resource or collaboration',
          body: 'Share the resource, benchmark, or system boundary you want to discuss. Do not include credentials, private datasets, health records, or other sensitive material.',
          emailLabel: 'Work email',
          summaryLabel: 'Resource question or desired outcome',
          buttonLabel: 'Submit private inquiry',
        };
  const visibleBudgetRanges = isProductResearch
    ? PRODUCT_RESEARCH_BUDGET_RANGES
    : COMMERCIAL_BUDGET_RANGES;

  const submitInquiry = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState({ phase: 'submitting' });

    try {
      const response = await fetch(inquiryApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent,
          email,
          organization,
          laneId,
          sourceRepo,
          budgetRange,
          summary,
          consent,
          website,
        }),
      });
      const result = await response.json() as { error?: string; reference?: string };

      if (!response.ok || !result.reference) {
        throw new Error(result.error ?? 'The inquiry could not be submitted.');
      }

      setSubmitState({ phase: 'success', reference: result.reference });
      setOrganization('');
      setSummary('');
      setConsent(false);
      setWebsite('');
    } catch (error) {
      setSubmitState({
        phase: 'error',
        message: error instanceof Error ? error.message : 'The inquiry could not be submitted.',
      });
    }
  };

  return (
    <section id="private-inquiry" className="inquiry-band" aria-labelledby="inquiry-title">
      <div className="inquiry-copy">
        <span><LockKeyhole size={15} aria-hidden="true" /> {copy.eyebrow}</span>
        <h3 id="inquiry-title">{copy.title}</h3>
        <p>{copy.body}</p>
        <dl>
          <div>
            <dt>Storage</dt>
            <dd>Cloudflare D1, access restricted to the operator</dd>
          </div>
          <div>
            <dt>Retention</dt>
            <dd>Scheduled for deletion at 90 days and pruned by a daily retention job</dd>
          </div>
        </dl>
      </div>

      <form className="inquiry-form" onSubmit={submitInquiry} aria-busy={submitState.phase === 'submitting'}>
        {intent === 'commercial' ? (
          <div className="inquiry-field inquiry-field-wide">
            <label htmlFor="inquiry-lane">Resource lane</label>
            <select
              id="inquiry-lane"
              value={laneId}
              onChange={event => {
                const nextLaneId = event.target.value as InquiryLaneId;
                const nextLane = COMMERCIAL_LANES.find(lane => lane.id === nextLaneId);
                setLaneId(nextLaneId);
                setSourceRepo(nextLane?.primaryRepos[0] ?? 'doeon-kim-portfolio');
              }}
            >
              {COMMERCIAL_LANES.map(lane => (
                <option key={lane.id} value={lane.id}>{lane.name}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="inquiry-context inquiry-field-wide">
            <span>{isSupport ? 'Support route' : 'Research route'}</span>
            <strong>{productName}</strong>
          </div>
        )}

        <div className={`inquiry-field ${intent === 'commercial' ? '' : 'inquiry-field-wide'}`}>
          <label htmlFor="inquiry-email">{copy.emailLabel}</label>
          <input
            id="inquiry-email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        {intent === 'commercial' && (
          <div className="inquiry-field">
            <label htmlFor="inquiry-organization">Organization <span>optional</span></label>
            <input
              id="inquiry-organization"
              type="text"
              autoComplete="organization"
              maxLength={160}
              value={organization}
              onChange={event => setOrganization(event.target.value)}
            />
          </div>
        )}

        {!isSupport && (
          <div className="inquiry-field inquiry-field-wide">
            <label htmlFor="inquiry-budget">
              {isProductResearch ? 'Plus price comfort' : 'Optional collaboration budget'}
            </label>
            <select
              id="inquiry-budget"
              value={budgetRange}
              onChange={event => setBudgetRange(event.target.value as InquiryBudgetRange)}
            >
              {visibleBudgetRanges.map(range => (
                <option key={range} value={range}>{budgetLabels[range]}</option>
              ))}
            </select>
          </div>
        )}

        <div className="inquiry-field inquiry-field-wide">
          <label htmlFor="inquiry-summary">{copy.summaryLabel}</label>
          <textarea
            id="inquiry-summary"
            minLength={20}
            maxLength={4_000}
            required
            rows={6}
            value={summary}
            onChange={event => setSummary(event.target.value)}
          />
          <small>{summary.length.toLocaleString()} / 4,000</small>
        </div>

        <div className="inquiry-honeypot" aria-hidden="true">
          <label htmlFor="inquiry-website">Website</label>
          <input
            id="inquiry-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={event => setWebsite(event.target.value)}
          />
        </div>

        <label className="inquiry-consent">
          <input
            type="checkbox"
            required
            checked={consent}
            onChange={event => setConsent(event.target.checked)}
          />
          <span>
            I consent to processing this inquiry under the <a href={`${import.meta.env.BASE_URL}privacy`}>privacy notice</a>
            {' '}({INQUIRY_CONSENT_VERSION}).
          </span>
        </label>

        <div className="inquiry-submit-row">
          <button type="submit" disabled={submitState.phase === 'submitting'}>
            <Send size={15} aria-hidden="true" />
            {submitState.phase === 'submitting' ? 'Submitting...' : copy.buttonLabel}
          </button>
          <p className={`inquiry-status is-${submitState.phase}`} role="status" aria-live="polite">
            {submitState.phase === 'success' && (
              <><CheckCircle2 size={15} aria-hidden="true" /> Received. Reference: {submitState.reference}</>
            )}
            {submitState.phase === 'error' && submitState.message}
          </p>
        </div>
      </form>
    </section>
  );
};

export default InquiryForm;
