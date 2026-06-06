import React from 'react';
import { ArrowRight, BadgeCheck, Building2, ExternalLink, Gamepad2, Megaphone, PlayCircle, Youtube } from 'lucide-react';
import { REPOSITORY_DEMO_URLS, REVENUE_CHANNELS } from '../constants';

const iconFor = (id: string) => {
  if (id.includes('managed')) return BadgeCheck;
  if (id.includes('workflow')) return Building2;
  if (id.includes('content')) return Megaphone;
  if (id.includes('game')) return Gamepad2;
  if (id.includes('youtube')) return Youtube;
  return PlayCircle;
};

const RevenueArchitecture: React.FC = () => (
  <section id="revenue-architecture" className="section-shell revenue-architecture-section">
    <div className="section-inner">
      <div className="section-heading revenue-heading">
        <p className="eyebrow">Revenue Architecture</p>
        <h2>Proof surfaces grouped into realistic revenue channels</h2>
        <p>
          The public site shows how each system can move from demo evidence into a buyer path: B2B diagnostics,
          support retainers, workflow automation, consumer surfaces, app distribution, and proof-led media.
          Private financial assumptions stay out of public repositories.
        </p>
      </div>

      <div className="revenue-grid">
        {REVENUE_CHANNELS.map((channel, index) => {
          const Icon = iconFor(channel.id);

          return (
            <article key={channel.id} className="revenue-card">
              <div className="revenue-card-top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon size={20} aria-hidden="true" />
              </div>

              <h3>{channel.title}</h3>
              <p className="revenue-mode">{channel.mode}</p>

              <dl className="revenue-detail-list">
                <div>
                  <dt>Buyer</dt>
                  <dd>{channel.buyer}</dd>
                </div>
                <div>
                  <dt>Route</dt>
                  <dd>{channel.route}</dd>
                </div>
                <div>
                  <dt>Activation</dt>
                  <dd>{channel.activation}</dd>
                </div>
                <div>
                  <dt>Margin control</dt>
                  <dd>{channel.marginModel}</dd>
                </div>
              </dl>

              <div className="revenue-proof-row">
                <span>Proof repos</span>
                <div className="revenue-repo-list">
                  {channel.proofRepos.map(repo => {
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

              <p className="revenue-next-step">
                <ArrowRight size={15} aria-hidden="true" />
                {channel.nextStep}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default RevenueArchitecture;
