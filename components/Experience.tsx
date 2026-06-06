import React from 'react';
import { Award, BookOpen, Building2, ChevronDown, Cloud, KeyRound, Languages, LifeBuoy, Network, ShieldCheck, Workflow, type LucideIcon } from 'lucide-react';
import { CERTIFICATIONS, INTERX_ROLE, EDUCATION, LANGUAGES as LANGUAGE_ITEMS, MILITARY_ROLE } from '../constants';
import { WorkExperience } from '../types';

const militaryIcons = [Network, ShieldCheck, KeyRound, Workflow];
const infrastructureIcons = [Cloud, ShieldCheck, Workflow, LifeBuoy];

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

const DetailDisclosure: React.FC<{
  title: string;
  caption: string;
  items: string[];
  icons: LucideIcon[];
  fallback: LucideIcon;
}> = ({ title, caption, items, icons, fallback: FallbackIcon }) => (
  <details className="glass-disclosure experience-disclosure">
    <summary>
      <span className="summary-copy">
        <strong>{title}</strong>
        <em>{caption}</em>
      </span>
      <ChevronDown size={17} className="disclosure-icon" aria-hidden="true" />
    </summary>
    <div className="experience-detail-grid experience-reveal-grid">
      {items.map((item, index) => {
        const Icon = icons[index] ?? FallbackIcon;
        return (
          <article key={item} className="experience-detail">
            <Icon aria-hidden="true" />
            <p>{item}</p>
          </article>
        );
      })}
    </div>
  </details>
);

const OutcomeDisclosure: React.FC<{
  title: string;
  caption: string;
  items: string[];
  icon: LucideIcon;
}> = ({ title, caption, items, icon: Icon }) => (
  <details className="glass-disclosure outcome-disclosure">
    <summary>
      <span className="summary-copy">
        <strong>{title}</strong>
        <em>{caption}</em>
      </span>
      <ChevronDown size={17} className="disclosure-icon" aria-hidden="true" />
    </summary>
    <div className="outcome-row outcome-reveal-row">
      {items.map(item => (
        <article key={item} className="outcome-item">
          <Icon aria-hidden="true" />
          <p>{item}</p>
        </article>
      ))}
    </div>
  </details>
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
          emergency initial action, security readiness, and handoff discipline. The InterX role extended that base into
          data center, IDC, workspace, vendor, and service-desk operations.
        </p>
      </div>

      <div className="experience-layout">
        <RoleCard role={MILITARY_ROLE} label="Military communications operations" />
        <DetailDisclosure
          title="Operational scope"
          caption={`${MILITARY_ROLE.focus.length} repeatable controls`}
          items={MILITARY_ROLE.focus}
          icons={militaryIcons}
          fallback={ShieldCheck}
        />
      </div>

      <OutcomeDisclosure
        title="Military outcomes"
        caption={`${MILITARY_ROLE.outcomes.length} proof points`}
        items={MILITARY_ROLE.outcomes}
        icon={ShieldCheck}
      />

      <div className="infrastructure-role-panel">
        <RoleCard role={INTERX_ROLE} label="InterX infrastructure operations" />
        <DetailDisclosure
          title="Infrastructure scope"
          caption={`${INTERX_ROLE.focus.length} operating lanes`}
          items={INTERX_ROLE.focus}
          icons={infrastructureIcons}
          fallback={ShieldCheck}
        />
      </div>

      <OutcomeDisclosure
        title="Infrastructure outcomes"
        caption={`${INTERX_ROLE.outcomes.length} operating results`}
        items={INTERX_ROLE.outcomes}
        icon={Workflow}
      />

      <div className="credentials-grid" aria-label="education certifications and languages">
        <details className="credential-card credential-disclosure">
          <summary>
            <BookOpen aria-hidden="true" />
            <span className="summary-copy">
              <strong>Education and Training</strong>
              <em>{EDUCATION.length} records</em>
            </span>
            <ChevronDown size={17} className="disclosure-icon" aria-hidden="true" />
          </summary>
          <div className="credential-body">
            {EDUCATION.map(item => (
              <p key={`${item.institution}-${item.period}`}>
                <strong>{item.institution}</strong>
                <span>{item.program} | {item.period} | {item.note}</span>
              </p>
            ))}
          </div>
        </details>

        <details className="credential-card credential-disclosure">
          <summary>
            <Award aria-hidden="true" />
            <span className="summary-copy">
              <strong>Certifications</strong>
              <em>{CERTIFICATIONS.length} active credentials</em>
            </span>
            <ChevronDown size={17} className="disclosure-icon" aria-hidden="true" />
          </summary>
          <div className="credential-body">
            <div className="credential-tags">
              {CERTIFICATIONS.map(item => (
                <span key={`${item.issuer}-${item.name}`}>{item.issuer} - {item.name}</span>
              ))}
            </div>
          </div>
        </details>

        <details className="credential-card credential-disclosure language-card">
          <summary>
            <Languages aria-hidden="true" />
            <span className="summary-copy">
              <strong>Languages</strong>
              <em>{LANGUAGE_ITEMS.length} language records</em>
            </span>
            <ChevronDown size={17} className="disclosure-icon" aria-hidden="true" />
          </summary>
          <div className="credential-body">
            <div className="credential-tags">
              {LANGUAGE_ITEMS.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </details>
      </div>
    </div>
  </section>
);

export default Experience;
