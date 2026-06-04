import React, { useEffect, useState, useMemo } from 'react';
import { LIVE_SERVICE_SCREENS, PROJECTS, REPOSITORY_COVERAGE } from '../constants';
import { BadgeDollarSign, BriefcaseBusiness, ChevronDown, ChevronUp, ExternalLink, Github, LockKeyhole, Target } from 'lucide-react';

const TOP_TAGS = 8;
const LIVE_IMAGE_WIDTH = 1440;
const LIVE_IMAGE_HEIGHT = 1000;
const livePreviewFor = (asset: string) => asset.replace('evidence/live/', 'evidence/live/preview/').replace(/\.png$/, '.webp');
const liveProofPreviewFor = (asset: string) => asset.replace('evidence/live/', 'evidence/live/preview-sm/').replace(/\.png$/, '.webp');

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);

  useEffect(() => {
    if (window.location.hash !== '#coverage') return;

    requestAnimationFrame(() => {
      document.getElementById('coverage')?.scrollIntoView();
    });
  }, []);

  const allTags = useMemo(() => {
    const counts = new Map<string, number>();
    PROJECTS.forEach(p => p.tech.forEach(t => counts.set(t, (counts.get(t) || 0) + 1)));
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag, count]) => ({ tag, count }));
  }, []);

  const visibleTags = showAllTags ? allTags : allTags.slice(0, TOP_TAGS);
  const filtered = filter ? PROJECTS.filter(p => p.tech.includes(filter)) : PROJECTS;

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Systems</p>
          <h2>Built surfaces, with a market thesis</h2>
          <p>Each card links to a runnable or inspectable system, then states the likely buyer, review signal, and revenue path behind the build.</p>
        </div>

        <div className="live-proof-wall" aria-label="Latest deployed service screenshots">
          <div className="live-proof-head">
            <span>Latest live proof</span>
            <strong>{LIVE_SERVICE_SCREENS.length} deployed screens validated Jun 4, 2026 KST</strong>
          </div>
          <div className="live-proof-grid">
            {LIVE_SERVICE_SCREENS.map((screen, idx) => (
              <a
                key={screen.title}
                className={`live-proof-item ${idx === 0 ? 'is-featured' : ''}`}
                href={screen.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="live-proof-media">
                  <picture>
                    <source
                      srcSet={`${import.meta.env.BASE_URL}${liveProofPreviewFor(screen.asset)} 420w, ${import.meta.env.BASE_URL}${livePreviewFor(screen.asset)} 720w`}
                      sizes="(max-width: 640px) 78vw, (max-width: 1080px) 25vw, 14vw"
                      type="image/webp"
                    />
                    <img
                      src={`${import.meta.env.BASE_URL}${screen.asset}`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={LIVE_IMAGE_WIDTH}
                      height={LIVE_IMAGE_HEIGHT}
                    />
                  </picture>
                </span>
                <span className="live-proof-meta">
                  <strong>{screen.title}</strong>
                  <em>{screen.scope}</em>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="filter-bar">
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`filter-button ${!filter ? 'is-active' : ''}`}
            aria-pressed={!filter}
          >
            All ({PROJECTS.length})
          </button>
          {visibleTags.map(({ tag, count }) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilter(filter === tag ? null : tag)}
              className={`filter-button ${filter === tag ? 'is-active' : ''}`}
              aria-pressed={filter === tag}
            >
              {tag} ({count})
            </button>
          ))}
          {allTags.length > TOP_TAGS && (
            <button
              type="button"
              onClick={() => setShowAllTags(!showAllTags)}
              className="filter-more"
              aria-expanded={showAllTags}
            >
              {showAllTags ? <><ChevronUp size={14} /> Less</> : <><ChevronDown size={14} /> +{allTags.length - TOP_TAGS} more</>}
            </button>
          )}
        </div>

        <div className="project-grid">
          {filtered.map((project, idx) => (
            <article key={idx} className="project-card">
              <div className="project-card-top">
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <div className="project-mark" />
              </div>
              <div className={`project-evidence ${project.evidence ? '' : 'project-evidence-placeholder'}`}>
                {project.evidence ? (
                  <picture>
                    <source
                      srcSet={`${import.meta.env.BASE_URL}${liveProofPreviewFor(project.evidence)} 420w, ${import.meta.env.BASE_URL}${livePreviewFor(project.evidence)} 720w`}
                      sizes="(max-width: 900px) calc(100vw - 50px), (max-width: 1080px) 45vw, 31vw"
                      type="image/webp"
                    />
                    <img
                      src={`${import.meta.env.BASE_URL}${project.evidence}`}
                      alt={`${project.title} visual evidence`}
                      loading="lazy"
                      decoding="async"
                      width={LIVE_IMAGE_WIDTH}
                      height={LIVE_IMAGE_HEIGHT}
                    />
                  </picture>
                ) : (
                  <div aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>
              {project.access === 'private' && (
                <span className="private-badge"><LockKeyhole size={13} /> Private case study</span>
              )}
              <h3>{project.title}</h3>
              <p className="project-copy">{project.description}</p>
              <details className="project-business-disclosure">
                <summary aria-label={`Show ${project.title} business and review fit`}>
                  <span>
                    <strong>Business fit</strong>
                    <em>market, review signal, revenue path</em>
                  </span>
                  <ChevronDown size={16} className="disclosure-icon" aria-hidden="true" />
                </summary>
                <div className="project-business" aria-label={`${project.title} business and review fit`}>
                  <div className="project-business-item">
                    <Target size={15} aria-hidden="true" />
                    <span>Market</span>
                    <strong>{project.market}</strong>
                  </div>
                  <div className="project-business-item">
                    <BriefcaseBusiness size={15} aria-hidden="true" />
                    <span>Review signal</span>
                    <strong>{project.reviewSignal}</strong>
                  </div>
                  <div className="project-business-item">
                    <BadgeDollarSign size={15} aria-hidden="true" />
                    <span>Revenue path</span>
                    <strong>{project.commercialPath}</strong>
                  </div>
                </div>
              </details>
              <div className="tag-list">
                {project.tech.map((t, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setFilter(filter === t ? null : t)}
                    className={`tag-chip ${filter === t ? 'is-active' : ''}`}
                    aria-pressed={filter === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="project-actions">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="empty-state">No projects match this filter.</p>
        )}

        <div id="coverage" className="coverage-ledger" aria-label="Active repository coverage ledger">
          <div className="coverage-intro">
            <span>Coverage ledger</span>
            <h3>35 editable repositories, one commercial story</h3>
            <p>The visual cards stay selective; this ledger tracks the current editable repo set, live proof surfaces, buyer route, review signal, and safety boundary.</p>
          </div>
          <div className="coverage-list">
            {REPOSITORY_COVERAGE.map(lane => (
              <div className="coverage-row" key={lane.lane}>
                <div className="coverage-lane">
                  <p>{lane.lane}</p>
                  <strong>{lane.role}</strong>
                </div>
                <div className="coverage-repos">
                  {lane.repositories.map(repo => (
                    <span key={repo}>{repo}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
