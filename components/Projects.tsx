import React, { useEffect, useState, useMemo } from 'react';
import { PORTFOLIO_REEL, PROJECTS, REPOSITORY_COVERAGE, REPOSITORY_DEMO_URLS } from '../constants';
import { BriefcaseBusiness, ChevronDown, ChevronUp, ExternalLink, FileText, Film, Github, LockKeyhole, Route, Target, Volume2 } from 'lucide-react';

const TOP_TAGS = 8;
const LIVE_IMAGE_WIDTH = 1440;
const LIVE_IMAGE_HEIGHT = 1000;
const livePreviewFor = (asset: string) => asset.replace('evidence/live/', 'evidence/live/preview/').replace(/\.png$/, '.webp');
const liveProofPreviewFor = (asset: string) => asset.replace('evidence/live/', 'evidence/live/preview-sm/').replace(/\.png$/, '.webp');
const isLivePngEvidence = (asset: string) => asset.startsWith('evidence/live/') && asset.endsWith('.png');
const projectEvidenceClassName = (evidence?: string) => [
  'project-evidence',
  !evidence ? 'project-evidence-placeholder' : '',
  evidence && !isLivePngEvidence(evidence) ? 'is-diagram' : '',
].filter(Boolean).join(' ');

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

  const renderProjectEvidence = (project: (typeof PROJECTS)[number]) => {
    if (!project.evidence) {
      return (
        <div aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      );
    }

    if (isLivePngEvidence(project.evidence)) {
      return (
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
      );
    }

    return (
      <img
        src={`${import.meta.env.BASE_URL}${project.evidence}`}
        alt={`${project.title} visual evidence`}
        loading="lazy"
        decoding="async"
        width={1280}
        height={720}
      />
    );
  };

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <div className="section-heading">
          <p className="eyebrow">Systems</p>
          <h2>Built systems, with evidence</h2>
          <p>Each card links to a runnable or inspectable system, then states the intended audience, review signal, and proof path behind the build.</p>
        </div>

        <div className="evidence-reel" aria-label="Narrated systems gallery evidence reel">
          <div className="evidence-reel-copy">
            <span className="evidence-reel-eyebrow"><Film size={15} aria-hidden="true" /> Evidence reel</span>
            <h3>{PORTFOLIO_REEL.title}</h3>
            <p>{PORTFOLIO_REEL.summary}</p>
            <div className="evidence-reel-meta" aria-label="Evidence reel metadata">
              <span><Volume2 size={14} aria-hidden="true" /> English TTS</span>
              <span>{PORTFOLIO_REEL.durationLabel}</span>
              <span>{PORTFOLIO_REEL.generatedAt}</span>
            </div>
            <a
              className="evidence-reel-link"
              href={`${import.meta.env.BASE_URL}${PORTFOLIO_REEL.transcript}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={14} aria-hidden="true" /> Transcript
            </a>
          </div>
          <div className="evidence-reel-media">
            <video
              controls
              playsInline
              preload="metadata"
              poster={`${import.meta.env.BASE_URL}${PORTFOLIO_REEL.poster}`}
              aria-label={PORTFOLIO_REEL.title}
            >
              <source src={`${import.meta.env.BASE_URL}${PORTFOLIO_REEL.video}`} type="video/mp4" />
            </video>
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
              <div className={projectEvidenceClassName(project.evidence)}>
                {renderProjectEvidence(project)}
              </div>
              {project.access === 'private' && (
                <span className="private-badge"><LockKeyhole size={13} /> Private case study</span>
              )}
              <h3>{project.title}</h3>
              <p className="project-copy">{project.description}</p>
              <details className="project-business-disclosure">
                <summary aria-label={`Show ${project.title} audience and review fit`}>
                  <span>
                    <strong>Review fit</strong>
                    <em>audience, review signal, proof path</em>
                  </span>
                  <ChevronDown size={16} className="disclosure-icon" aria-hidden="true" />
                </summary>
                <div className="project-business" aria-label={`${project.title} audience and review fit`}>
                  <div className="project-business-item">
                    <Target size={15} aria-hidden="true" />
                    <span>Audience</span>
                    <strong>{project.market}</strong>
                  </div>
                  <div className="project-business-item">
                    <BriefcaseBusiness size={15} aria-hidden="true" />
                    <span>Review signal</span>
                    <strong>{project.reviewSignal}</strong>
                  </div>
                  <div className="project-business-item">
                    <Route size={15} aria-hidden="true" />
                    <span>Proof path</span>
                    <strong>{project.proofPath}</strong>
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
            <h3>35 editable repositories, one evidence map</h3>
            <p>The visual cards carry the proof surface; this ledger tracks the current editable repo set, review route, technical signal, and safety boundary.</p>
          </div>
          <div className="coverage-list">
            {REPOSITORY_COVERAGE.map(lane => (
              <div className="coverage-row" key={lane.lane}>
                <div className="coverage-lane">
                  <p>{lane.lane}</p>
                  <strong>{lane.role}</strong>
                </div>
                <div className="coverage-repos">
                  {lane.repositories.map(repo => {
                    const demoUrl = REPOSITORY_DEMO_URLS[repo];
                    return demoUrl ? (
                      <a key={repo} href={demoUrl} target="_blank" rel="noopener noreferrer">
                        {repo}
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <span key={repo}>{repo}</span>
                    );
                  })}
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
