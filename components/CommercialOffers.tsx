import React from 'react';
import { ArrowRight, BadgeDollarSign, CheckCircle2, ExternalLink, Mail, Timer } from 'lucide-react';
import { COMMERCIAL_OFFERS, PROFILE, REPOSITORY_DEMO_URLS } from '../constants';

const contactHrefFor = (subject: string) => {
  const body = [
    `I want to discuss the ${subject}.`,
    '',
    'Context:',
    '- Company or team:',
    '- Current workflow:',
    '- Data or security boundary:',
    '- Desired pilot outcome:',
  ].join('\n');

  return `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const CommercialOffers: React.FC = () => (
  <section id="offers" className="section-shell commercial-section">
    <div className="section-inner">
      <div className="section-heading commercial-heading">
        <p className="eyebrow">Paid Offer Menu</p>
        <h2>Four packages buyers can evaluate now</h2>
        <p>
          The portfolio is strongest as scoped B2B diagnostics, pilots, and recurring support around enterprise AI, runtime reliability,
          operations handoff, and governed data or document workflows.
        </p>
      </div>

      <div className="offer-grid">
        {COMMERCIAL_OFFERS.map(offer => (
          <article key={offer.id} className="offer-card">
            <div className="offer-card-header">
              <span className="offer-index">{String(COMMERCIAL_OFFERS.indexOf(offer) + 1).padStart(2, '0')}</span>
              <BadgeDollarSign size={20} aria-hidden="true" />
            </div>
            <h3>{offer.title}</h3>
            <p className="offer-buyer">{offer.buyer}</p>

            <div className="offer-price-grid" aria-label={`${offer.title} pricing hypothesis`}>
              <div>
                <span>Entry</span>
                <strong>{offer.entryPrice}</strong>
              </div>
              <div>
                <span>Pilot</span>
                <strong>{offer.pilotPrice}</strong>
              </div>
              <div>
                <span>Support</span>
                <strong>{offer.recurring}</strong>
              </div>
            </div>

            <div className="offer-timeline">
              <Timer size={15} aria-hidden="true" />
              <span>{offer.timeline}</span>
            </div>

            <p className="offer-outcome">{offer.outcome}</p>

            <div className="offer-detail-row">
              <div>
                <span className="offer-detail-label">Deliverables</span>
                <ul className="offer-list">
                  {offer.deliverables.map(item => (
                    <li key={item}><CheckCircle2 size={14} aria-hidden="true" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="offer-detail-label">Proof repos</span>
                <div className="offer-repo-list">
                  {offer.proofRepos.map(repo => {
                    const demo = REPOSITORY_DEMO_URLS[repo];
                    return demo ? (
                      <a key={repo} href={demo} target="_blank" rel="noopener noreferrer">
                        {repo}
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <span key={repo}>{repo}</span>
                    );
                  })}
                </div>
              </div>
            </div>

            <a className="offer-cta" href={contactHrefFor(offer.ctaSubject)}>
              <Mail size={15} aria-hidden="true" />
              Discuss pilot
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>

      <div className="offer-close">
        <span>Next purchase path</span>
        <p>Connect a calendar link and Stripe Payment Link when the account owner is ready; the current static surface already routes qualified buyers to email.</p>
      </div>
    </div>
  </section>
);

export default CommercialOffers;
