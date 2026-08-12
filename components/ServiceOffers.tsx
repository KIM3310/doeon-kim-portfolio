import React from 'react';
import {
  ArrowRight,
  DatabaseZap,
  ShieldCheck,
} from 'lucide-react';
import { trackCommerceCtaClick } from '../analytics';
import {
  COMMERCIAL_LANES,
  resourceUrlForLane,
  type CommercialLane,
} from '../commercialLanes';

interface ServiceOffersProps {
  offerRepo: string | null;
  highlightedLane?: CommercialLane;
}

const ServiceOffers: React.FC<ServiceOffersProps> = ({ offerRepo, highlightedLane }) => (
  <div id="service-offers" className="service-offer-ledger" aria-label="Scoped service lanes and public proof by repository">
    <div className="coverage-intro">
      <span>Public proof + scoped services</span>
      <h2>Seven bounded service lanes backed by runnable systems</h2>
      <p>Every lane starts with free public proof. Starting prices are non-binding, no checkout is active, and final scope, timing, and fees are confirmed privately in writing. Sensitive customer material is excluded from public demos and personal data is never sold.</p>
    </div>
    {offerRepo && (
      <p className="offer-route-note" role="status">
        Repository route: <strong>{offerRepo}</strong>
        {highlightedLane ? <> is mapped to <strong>{highlightedLane.name}</strong>.</> : <> has no active service mapping.</>}
      </p>
    )}

    <div className="commercial-lane-grid" aria-label="Scoped services with separate public proof routes">
      {COMMERCIAL_LANES.map((lane, index) => {
        const resourceUrl = resourceUrlForLane(lane);
        const inquiryUrl = lane.fallbackCtaUrl;

        return (
          <article
            key={lane.id}
            id={`lane-${lane.id}`}
            className={`commercial-lane-card ${highlightedLane?.id === lane.id ? 'is-highlighted' : ''}`}
          >
            <div className="commercial-lane-head">
              <div>
                <span>{lane.buyer}</span>
                <h3>{lane.name}</h3>
              </div>
              <strong className="commercial-lane-number" aria-label={`Resource lane ${index + 1}`}>
                {String(index + 1).padStart(2, '0')}
              </strong>
            </div>
            <p>{lane.tagline}</p>
            <div className="commercial-lane-proof">
              <ShieldCheck size={15} aria-hidden="true" />
              <span>{lane.proofSignal}</span>
            </div>
            <div className="commercial-lane-meta">
              <div>
                <span>Access model</span>
                <strong>{lane.billingMode}</strong>
              </div>
              <div>
                <span>Starting point</span>
                <strong>{lane.priceAnchor}</strong>
              </div>
              <div>
                <span>Scoped deliverable</span>
                <strong>{lane.concreteDeliverable}</strong>
              </div>
              <div>
                <span>Commercial boundary</span>
                <strong>{lane.paidMotion}</strong>
              </div>
              <div>
                <span>Public proof boundary</span>
                <strong>{lane.dataLabSignal}</strong>
              </div>
              <div>
                <span>Data boundary</span>
                <strong>{lane.privacyBoundary}</strong>
              </div>
              <div>
                <span>Primary repos</span>
                <strong>{lane.primaryRepos.join(' · ')}</strong>
              </div>
              <div>
                <span>Supporting repos</span>
                <strong>{lane.supportRepos.length > 0 ? lane.supportRepos.join(' · ') : 'No separate support repos'}</strong>
              </div>
            </div>
            <div className="commercial-lane-actions">
              <a
                className="commercial-lane-cta is-secondary"
                href={resourceUrl}
                onClick={() => trackCommerceCtaClick(lane.id, lane.billingMode, 'public_proof')}
              >
                <DatabaseZap size={13} /> Open public proof
              </a>
              <a
                className="commercial-lane-cta"
                href={inquiryUrl}
                onClick={() => trackCommerceCtaClick(lane.id, lane.billingMode, 'lane_inquiry')}
              >
                {lane.ctaLabel} <ArrowRight size={13} />
              </a>
            </div>
          </article>
        );
      })}
    </div>

  </div>
);

export default ServiceOffers;
