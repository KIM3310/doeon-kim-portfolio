import React from 'react';
import { ArrowUpRight, GalleryHorizontal } from 'lucide-react';
import Section from './Section';

const evidenceItems = [
  {
    title: 'StagePilot Provider Scorecard',
    subtitle: 'Frontier runtime evidence',
    image: 'evidence/stagepilot-provider-scorecard.svg',
    href: 'https://github.com/KIM3310/stage-pilot',
    detail: 'Shows provider-family tradeoffs, contract confidence, latency/cost posture, and the benchmarked runtime story in one visual.',
  },
  {
    title: 'StagePilot Perf Evidence',
    subtitle: 'Frontier + big-tech runtime evidence',
    image: 'evidence/stagepilot-perf-evidence.svg',
    href: 'https://github.com/KIM3310/stage-pilot',
    detail: 'Makes the checked-in k6 rehearsal legible so runtime pressure, release guardrails, and benchmark-backed correctness can be read before the code.',
  },
  {
    title: 'Nexus-Hive Semantic Governance',
    subtitle: 'Data-platform evidence',
    image: 'evidence/nexus-semantic-governance.svg',
    href: 'https://github.com/KIM3310/Nexus-Hive',
    detail: 'Makes certified metrics, approval boundaries, and warehouse-target survival legible before anyone reads the SQL or API payloads.',
  },
  {
    title: 'Nexus-Hive Lakehouse Readiness',
    subtitle: 'Snowflake / Databricks evidence',
    image: 'evidence/nexus-lakehouse-readiness.svg',
    href: 'https://github.com/KIM3310/Nexus-Hive',
    detail: 'Compresses connector posture, query-tag transport, and platform-facing delivery boundaries into one lakehouse reviewer surface.',
  },
  {
    title: 'Enterprise Workshop Readout',
    subtitle: 'Solution architecture evidence',
    image: 'evidence/enterprise-workshop-readout.svg',
    href: 'https://github.com/KIM3310/enterprise-llm-adoption-kit',
    detail: 'Turns discovery output, pilot lane, rollout gates, and handoff assets into a field-ready closeout board rather than a vague workshop recap.',
  },
  {
    title: 'AegisOps System Design',
    subtitle: 'Big-tech operational evidence',
    image: 'evidence/aegisops-system-design.svg',
    href: 'https://github.com/KIM3310/AegisOps',
    detail: 'Shows topology, hot endpoints, failure drills, and commander handoff in one architecture surface instead of making reviewers infer the system from screenshots.',
  },
];

const EvidenceGallery: React.FC = () => {
  return (
    <Section id="evidence" className="bg-[#070709]">
      <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Visual Evidence</p>
          <h2 className="font-serif-heading text-3xl text-white md:text-4xl">Proof that can be scanned before the code is read</h2>
        </div>
        <p className="max-w-3xl text-sm leading-relaxed text-primary-muted">
          These are not decorative mockups. They compress the strongest frontier, data-platform, and solution-architecture proof surfaces into recruiter-fast visual evidence.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {evidenceItems.map((item) => (
          <article key={item.title} className="overflow-hidden border border-white/8 bg-[#0a0a0c] transition-colors duration-300 hover:border-accent-gold/30">
            <div className="border-b border-white/8 bg-[#0d0f13] p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent-gold/80">{item.subtitle}</p>
              <h3 className="font-serif-heading text-2xl text-white">{item.title}</h3>
            </div>

            <div className="border-b border-white/8 bg-[#050608] p-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-sm border border-white/8 bg-white"
                loading="lazy"
              />
            </div>

            <div className="p-5">
              <p className="mb-5 text-sm leading-7 text-primary-muted">{item.detail}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-white/78 transition-colors hover:text-accent-gold"
              >
                <GalleryHorizontal className="h-4 w-4 text-accent-gold" />
                <span>Open repo and proof surface</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default EvidenceGallery;
