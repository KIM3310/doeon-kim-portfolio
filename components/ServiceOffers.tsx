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
  <div id="service-offers" className="service-offer-ledger" aria-label="Free utility and benchmark data-lab lanes by repository">
    <div className="coverage-intro">
      <span>Free utilities</span>
      <h2>Seven public labs backed by runnable systems</h2>
      <p>Each lane routes to free resource pages for utilities, benchmarks, architecture notes, and synthetic demos. Revenue is limited to contextual ads on public resource pages plus consented anonymous aggregate insights; sensitive workflows remain ad-free and personal data is never sold.</p>
    </div>
    {offerRepo && (
      <p className="offer-route-note" role="status">
        Resource route: <strong>{offerRepo}</strong>
        {highlightedLane ? <> is mapped to <strong>{highlightedLane.name}</strong>.</> : <> has no active lab mapping.</>}
      </p>
    )}

    <div className="commercial-lane-grid" aria-label="Free utility and aggregate benchmark lanes">
      {COMMERCIAL_LANES.map((lane, index) => {
        const resourceUrl = resourceUrlForLane(lane);

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
                <span>Public utility</span>
                <strong>{lane.priceAnchor}</strong>
              </div>
              <div>
                <span>Resource package</span>
                <strong>{lane.concreteDeliverable}</strong>
              </div>
              <div>
                <span>Revenue boundary</span>
                <strong>{lane.paidMotion}</strong>
              </div>
              <div>
                <span>Aggregate insight</span>
                <strong>{lane.dataLabSignal}</strong>
              </div>
              <div>
                <span>Privacy line</span>
                <strong>{lane.privacyBoundary}</strong>
              </div>
              <div>
                <span>Primary repos</span>
                <strong>{lane.primaryRepos.join(' · ')}</strong>
              </div>
              <div>
                <span>Support proof</span>
                <strong>{lane.supportRepos.length > 0 ? lane.supportRepos.join(' · ') : 'No separate support repos'}</strong>
              </div>
            </div>
            <a
              className="commercial-lane-cta"
              href={resourceUrl}
              onClick={() => trackCommerceCtaClick(lane.id, lane.billingMode, 'lane_checkout')}
            >
              <DatabaseZap size={13} /> {lane.ctaLabel} <ArrowRight size={13} />
            </a>
          </article>
        );
      })}
    </div>

  </div>
);

export default ServiceOffers;
