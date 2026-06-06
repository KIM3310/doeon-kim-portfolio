import React from 'react';
import { ArrowUpRight, Boxes, CheckCircle2, ExternalLink, PackageCheck } from 'lucide-react';
import { REPOSITORY_DEMO_URLS, SERVICE_PACKAGES } from '../constants';

const packageDocHref = (repo: string) => `https://github.com/KIM3310/${repo}/blob/main/docs/service-package.md`;

const packagesByLane = SERVICE_PACKAGES.reduce<Record<string, typeof SERVICE_PACKAGES>>((groups, servicePackage) => {
  const lanePackages = groups[servicePackage.lane] ?? [];
  lanePackages.push(servicePackage);
  groups[servicePackage.lane] = lanePackages;
  return groups;
}, {});

const ServicePackages: React.FC = () => (
  <section id="service-packages" className="section-shell service-packages-section">
    <div className="section-inner">
      <div className="section-heading service-package-heading">
        <p className="eyebrow">Service Package Matrix</p>
        <h2>Every repository now has a buyer-ready package and polish path</h2>
        <p>
          The portfolio connects each repo to a concrete service lane, front-door offer, polish priorities, proof links,
          and support boundary. Public pages stay evidence-led and keep financial assumptions private.
        </p>
      </div>

      <div className="service-package-summary" aria-label="Service package coverage">
        <span><Boxes size={16} aria-hidden="true" /> {SERVICE_PACKAGES.length} repository packages</span>
        <span><PackageCheck size={16} aria-hidden="true" /> {Object.keys(packagesByLane).length} service lanes</span>
        <span><CheckCircle2 size={16} aria-hidden="true" /> Public-safe packaging</span>
      </div>

      <div className="service-lane-list">
        {Object.entries(packagesByLane).map(([lane, packages]) => (
          <details key={lane} className="service-lane" open={lane === 'Enterprise GenAI adoption'}>
            <summary>
              <span>
                <strong>{lane}</strong>
                <em>{packages.length} packages</em>
              </span>
              <ArrowUpRight className="service-lane-icon" size={18} aria-hidden="true" />
            </summary>

            <div className="service-package-list">
              {packages.map(servicePackage => {
                const demo = REPOSITORY_DEMO_URLS[servicePackage.repo];

                return (
                  <article key={servicePackage.repo} className="service-package-row">
                    <div className="service-package-main">
                      <span>{servicePackage.repo}</span>
                      <h3>{servicePackage.offer}</h3>
                      <p>{servicePackage.outcome}</p>
                    </div>

                    <div className="service-package-detail">
                      <div>
                        <span>Buyer</span>
                        <p>{servicePackage.buyer}</p>
                      </div>
                      <div>
                        <span>Polish</span>
                        <ul>
                          {servicePackage.polish.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span>Deliverables</span>
                        <ul>
                          {servicePackage.deliverables.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span>Margin control</span>
                        <p>{servicePackage.margin}</p>
                      </div>
                    </div>

                    <div className="service-package-actions">
                      {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
                          Demo
                          <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      )}
                      <a href={packageDocHref(servicePackage.repo)} target="_blank" rel="noopener noreferrer">
                        Package doc
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default ServicePackages;
