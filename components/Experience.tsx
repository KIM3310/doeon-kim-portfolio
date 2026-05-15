import React from 'react';
import { Award, BookOpen, Building2, Cloud, KeyRound, Languages, LifeBuoy, Network, ShieldCheck, Workflow } from 'lucide-react';
import { CERTIFICATIONS, CURRENT_ROLE, EDUCATION, LANGUAGES as LANGUAGE_ITEMS, MILITARY_ROLE } from '../constants';
import { WorkExperience } from '../types';

const militaryIcons = [Network, ShieldCheck, KeyRound, Workflow];
const currentIcons = [Cloud, ShieldCheck, Workflow, LifeBuoy];

const RoleCard: React.FC<{ role: WorkExperience; label: string }> = ({ role, label }) => (
  <article className="experience-primary">
    <div className="experience-title-row">
      <Building2 aria-hidden="true" />
      <div>
        <p className="role-kicker">{label}</p>
        <h3>{role.title}</h3>
      </div>
    </div>
    <div className="role-meta">
      <span>{role.company}</span>
      <span>{role.period}</span>
      <span>{role.location}</span>
    </div>
    <p className="experience-summary">{role.summary}</p>
  </article>
);

const Experience: React.FC = () => (
  <section id="experience" className="section-shell experience-section">
    <div className="section-inner">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Military communications and security monitoring translated into infrastructure operations</h2>
        <p>
          The front-line proof is MW communications and 24/7 strategic communications operations: issue confirmation,
          network/security/server/CCTV/VMS/NVR operation, access-log and visitor-record handling, intrusion-alert monitoring,
          emergency initial action, security readiness, and handoff discipline. The current InterX role extends that base into
          data center, IDC, workspace, vendor, and service-desk operations.
        </p>
      </div>

      <div className="experience-layout">
        <RoleCard role={MILITARY_ROLE} label="Military communications operations" />

        <div className="experience-detail-grid">
          {MILITARY_ROLE.focus.map((item, index) => {
            const Icon = militaryIcons[index] ?? ShieldCheck;
            return (
              <article key={item} className="experience-detail">
                <Icon aria-hidden="true" />
                <p>{item}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="outcome-row">
        {MILITARY_ROLE.outcomes.map(item => (
          <article key={item} className="outcome-item">
            <ShieldCheck aria-hidden="true" />
            <p>{item}</p>
          </article>
        ))}
      </div>

      <div className="current-role-panel">
        <RoleCard role={CURRENT_ROLE} label="Current infrastructure operations" />
        <div className="experience-detail-grid">
          {CURRENT_ROLE.focus.map((item, index) => {
            const Icon = currentIcons[index] ?? ShieldCheck;
            return (
              <article key={item} className="experience-detail">
                <Icon aria-hidden="true" />
                <p>{item}</p>
              </article>
            );
          })}
        </div>
      </div>

      <div className="outcome-row">
        {CURRENT_ROLE.outcomes.map(item => (
          <article key={item} className="outcome-item">
            <Workflow aria-hidden="true" />
            <p>{item}</p>
          </article>
        ))}
      </div>

      <div className="credentials-grid" aria-label="education certifications and languages">
        <article className="credential-card">
          <BookOpen aria-hidden="true" />
          <div>
            <h3>Education and Training</h3>
            {EDUCATION.map(item => (
              <p key={`${item.institution}-${item.period}`}>
                <strong>{item.institution}</strong>
                <span>{item.program} | {item.period} | {item.note}</span>
              </p>
            ))}
          </div>
        </article>

        <article className="credential-card">
          <Award aria-hidden="true" />
          <div>
            <h3>Certifications</h3>
            <div className="credential-tags">
              {CERTIFICATIONS.map(item => (
                <span key={`${item.issuer}-${item.name}`}>{item.issuer} - {item.name}</span>
              ))}
            </div>
          </div>
        </article>

        <article className="credential-card language-card">
          <Languages aria-hidden="true" />
          <div>
            <h3>Languages</h3>
            <div className="credential-tags">
              {LANGUAGE_ITEMS.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Experience;
