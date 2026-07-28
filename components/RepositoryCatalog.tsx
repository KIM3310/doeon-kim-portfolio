import React from 'react';
import { ExternalLink, FileText, Search, WalletCards } from 'lucide-react';
import { trackCommerceCtaClick } from '../analytics';
import { commerceUrlForRepo, laneForRepo } from '../commercialLanes';
import { RESOURCE_WIRING } from '../resourceWiring';
import { SERVICE_OFFERS } from '../serviceOffers';

interface RepositoryCatalogProps {
  offerRepo: string | null;
}

const RepositoryCatalog: React.FC<RepositoryCatalogProps> = ({ offerRepo }) => (
  <section className="repository-catalog" aria-labelledby="repository-catalog-title">
    <div className="coverage-intro service-catalog-intro">
      <span>Service catalog</span>
      <h3 id="repository-catalog-title">Repository-level proof routes</h3>
      <p>Use this catalog for technical due diligence after choosing an outcome above. Every public repository has a demo, an architecture path, and machine-readable service metadata.</p>
    </div>
    <div className="resource-wiring-panel" aria-label="Free API resource and payment wiring overlay">
      {RESOURCE_WIRING.map(item => (
        <article key={item.label} className="resource-wiring-card">
          <div className="resource-wiring-card-head">
            <span>{item.source}</span>
            <h4>{item.label}</h4>
          </div>
          <p>{item.summary}</p>
          <div className="resource-chip-list">
            {item.resources.map(resource => (
              <span key={resource}>{resource}</span>
            ))}
          </div>
          <strong>{item.path}</strong>
        </article>
      ))}
    </div>
    <div className="service-offer-grid">
      {SERVICE_OFFERS.map(offer => (
        <article key={offer.repo} className={`service-offer-card ${offerRepo?.toLowerCase() === offer.repo.toLowerCase() ? 'is-highlighted' : ''}`}>
          <div className="service-offer-card-head">
            <div>
              <span>{offer.category.replace('Application', '')}</span>
              <h4>{offer.name}</h4>
            </div>
            <WalletCards size={18} aria-hidden="true" />
          </div>
          <p>{offer.offer}</p>
          <div className="service-offer-meta">
            <div>
              <span>Free entry</span>
              <strong>{offer.freeEntry}</strong>
            </div>
            <div>
              <span>Paid boundary</span>
              <strong>{offer.paidSku}</strong>
            </div>
            <div>
              <span><Search size={13} aria-hidden="true" /> Query</span>
              <strong>{offer.primaryQuery}</strong>
            </div>
            <div>
              <span>Commerce route</span>
              <strong>{commerceUrlForRepo(offer.repo)}</strong>
            </div>
          </div>
          <div className="service-offer-actions">
            <a
              href={commerceUrlForRepo(offer.repo)}
              onClick={() => {
                const lane = laneForRepo(offer.repo);
                if (lane) trackCommerceCtaClick(lane.id, lane.billingMode, 'repo_router');
              }}
            >
              <WalletCards size={13} /> Choose lane
            </a>
            <a href={offer.canonicalUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={13} /> Demo
            </a>
            <a href={offer.architectureUrl} target="_blank" rel="noopener noreferrer">
              <FileText size={13} /> Architecture
            </a>
            <a href={offer.revenueUrl} target="_blank" rel="noopener noreferrer">
              <WalletCards size={13} /> Revenue
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default RepositoryCatalog;
