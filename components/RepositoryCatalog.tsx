import React from 'react';
import { DatabaseZap, ExternalLink, FileText, Search } from 'lucide-react';
import { trackCommerceCtaClick } from '../analytics';
import { laneForRepo, resourceUrlForRepo } from '../commercialLanes';
import { RESOURCE_WIRING } from '../resourceWiring';
import { SERVICE_OFFERS } from '../serviceOffers';

interface RepositoryCatalogProps {
  offerRepo: string | null;
}

const RepositoryCatalog: React.FC<RepositoryCatalogProps> = ({ offerRepo }) => (
  <section className="repository-catalog" aria-labelledby="repository-catalog-title">
    <div className="coverage-intro service-catalog-intro">
      <span>Resource catalog</span>
      <h3 id="repository-catalog-title">Free utility and data-value routes</h3>
      <p>Use this catalog for technical due diligence after choosing a free lab above. Every public repository routes to a resource page, demo, architecture path, and machine-readable metadata.</p>
    </div>
    <div className="resource-wiring-panel" aria-label="Free API resources, contextual ads, and aggregate insight boundaries">
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
      {SERVICE_OFFERS.map(offer => {
        const lane = laneForRepo(offer.repo);

        return (
          <article key={offer.repo} className={`service-offer-card ${offerRepo?.toLowerCase() === offer.repo.toLowerCase() ? 'is-highlighted' : ''}`}>
            <div className="service-offer-card-head">
              <div>
                <span>{offer.category.replace('Application', '')}</span>
                <h4>{offer.name}</h4>
              </div>
              <DatabaseZap size={18} aria-hidden="true" />
            </div>
            <p>{offer.offer}</p>
            <div className="service-offer-meta">
              <div>
                <span>Free entry</span>
                <strong>{offer.freeEntry}</strong>
              </div>
              <div>
                <span>Aggregate insight</span>
                <strong>{lane?.dataLabSignal ?? 'Public resource page with no aggregate insight mapping yet'}</strong>
              </div>
              <div>
                <span>Privacy line</span>
                <strong>{lane?.privacyBoundary ?? 'No personal data sale; sensitive workflows stay outside ad surfaces'}</strong>
              </div>
              <div>
                <span><Search size={13} aria-hidden="true" /> Query</span>
                <strong>{offer.primaryQuery}</strong>
              </div>
              <div>
                <span>Resource route</span>
                <strong>{resourceUrlForRepo(offer.repo)}</strong>
              </div>
            </div>
            <div className="service-offer-actions">
              <a
                href={resourceUrlForRepo(offer.repo)}
                onClick={() => {
                  if (lane) trackCommerceCtaClick(lane.id, lane.billingMode, 'repo_router');
                }}
              >
                <DatabaseZap size={13} /> Resource
              </a>
              <a href={offer.canonicalUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={13} /> Demo
              </a>
              <a href={offer.architectureUrl} target="_blank" rel="noopener noreferrer">
                <FileText size={13} /> Architecture
              </a>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default RepositoryCatalog;
