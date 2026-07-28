import React from 'react';
import {
  ShieldCheck,
  WalletCards,
} from 'lucide-react';
import { trackCommerceCtaClick } from '../analytics';
import {
  COMMERCIAL_LANES,
  isExternalCommerceUrl,
  resolveCheckoutUrl,
  type CommercialLane,
} from '../commercialLanes';
import InquiryForm from './InquiryForm';

interface ServiceOffersProps {
  offerRepo: string | null;
  highlightedLane?: CommercialLane;
}

const ServiceOffers: React.FC<ServiceOffersProps> = ({ offerRepo, highlightedLane }) => (
  <div id="service-offers" className="service-offer-ledger" aria-label="Searchable service offers by repository">
    <div className="coverage-intro">
      <span>Commercial lanes</span>
      <h2>Seven focused, evidence-backed offers</h2>
      <p>Every repository has one role: a primary delivery surface or supporting proof for a bounded paid outcome. Unconfigured checkout routes move into the private inquiry pipeline instead of a public issue.</p>
    </div>
    {offerRepo && (
      <p className="offer-route-note" role="status">
        Offer route: <strong>{offerRepo}</strong>
        {highlightedLane ? <> is mapped to <strong>{highlightedLane.name}</strong>.</> : <> has no active commercial lane mapping.</>}
      </p>
    )}

    <InquiryForm />

    <div className="commercial-lane-grid" aria-label="Money-focused commercial service bundles">
      {COMMERCIAL_LANES.map((lane, index) => {
        const checkoutUrl = resolveCheckoutUrl(lane);
        const opensHostedCheckout = isExternalCommerceUrl(checkoutUrl);

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
              <strong className="commercial-lane-number" aria-label={`Commercial lane ${index + 1}`}>
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
                <span>Billing mode</span>
                <strong>{lane.billingMode}</strong>
              </div>
              <div>
                <span>Price anchor</span>
                <strong>{lane.priceAnchor}</strong>
              </div>
              <div>
                <span>Concrete deliverable</span>
                <strong>{lane.concreteDeliverable}</strong>
              </div>
              <div>
                <span>Paid motion</span>
                <strong>{lane.paidMotion}</strong>
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
              href={checkoutUrl}
              target={opensHostedCheckout ? '_blank' : undefined}
              rel={opensHostedCheckout ? 'noopener noreferrer' : undefined}
              onClick={() => trackCommerceCtaClick(lane.id, lane.billingMode, 'lane_checkout')}
            >
              <WalletCards size={13} /> {lane.ctaLabel}
            </a>
          </article>
        );
      })}
    </div>

  </div>
);

export default ServiceOffers;
