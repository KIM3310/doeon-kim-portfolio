import React, { useEffect, useState, useMemo } from 'react';
import { PORTFOLIO_REEL, PROJECTS, REPOSITORY_COVERAGE, REPOSITORY_DEMO_URLS, STACK_ARCHITECTURE_LANES, SYSTEM_ARCHITECTURE_URLS } from '../constants';
import { ChevronDown, ChevronUp, Cpu, ExternalLink, FileText, Film, Github, Layers3, LockKeyhole, Network, Volume2 } from 'lucide-react';

const TOP_TAGS = 8;
const LIVE_IMAGE_WIDTH = 1440;
const LIVE_IMAGE_HEIGHT = 1000;
const livePreviewFor = (asset: string) => asset.replace('evidence/live/', 'evidence/live/preview/').replace(/\.png$/, '.webp');
const liveProofPreviewFor = (asset: string) => asset.replace('evidence/live/', 'evidence/live/preview-sm/').replace(/\.png$/, '.webp');
const isLivePngEvidence = (asset: string) => asset.startsWith('evidence/live/') && asset.endsWith('.png');
const repoNameFromGithub = (url?: string) => {
  const parts = url?.split('/').filter(Boolean);
  return parts?.[parts.length - 1];
};
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
          <p>Each card links to a runnable or inspectable system, then exposes the stack, runtime boundary, and system architecture route behind the build.</p>
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
          {filtered.map((project, idx) => {
            const repoName = repoNameFromGithub(project.github);
            const architectureUrl = repoName ? SYSTEM_ARCHITECTURE_URLS[repoName] : undefined;

            return (
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
                <summary aria-label={`Show ${project.title} stack and architecture`}>
                  <span>
                    <strong>Architecture</strong>
                    <em>stack, runtime boundary, system doc</em>
                  </span>
                  <ChevronDown size={16} className="disclosure-icon" aria-hidden="true" />
                </summary>
                <div className="project-business" aria-label={`${project.title} stack and architecture`}>
                  <div className="project-business-item">
                    <Cpu size={15} aria-hidden="true" />
                    <span>Stack</span>
                    <strong>{project.tech.join(', ')}</strong>
                  </div>
                  <div className="project-business-item">
                    <Network size={15} aria-hidden="true" />
                    <span>Runtime boundary</span>
                    <strong>{project.reviewSignal}</strong>
                  </div>
                  <div className="project-business-item">
                    <FileText size={15} aria-hidden="true" />
                    <span>System doc</span>
                    <strong>{architectureUrl ? 'docs/system-architecture.md' : 'Architecture route listed in the service matrix'}</strong>
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
                {architectureUrl && (
                  <a href={architectureUrl} target="_blank" rel="noopener noreferrer">
                    <FileText size={14} /> Architecture
                  </a>
                )}
              </div>
            </article>
          );})}
        </div>
        {filtered.length === 0 && (
          <p className="empty-state">No projects match this filter.</p>
        )}

        <div id="architecture" className="architecture-ledger" aria-label="System architecture by technology stack">
          <div className="coverage-intro">
            <span>Architecture</span>
            <h3>System architecture by stack lane</h3>
            <p>The portfolio is organized by implementation surface: frontend, backend, data, deployment, native runtime, and applied ML. Each linked repository carries a `docs/system-architecture.md` attachment.</p>
          </div>
          <div className="architecture-grid">
            {STACK_ARCHITECTURE_LANES.map(lane => (
              <article key={lane.lane} className="architecture-card">
                <div className="architecture-card-header">
                  <Layers3 aria-hidden="true" />
                  <div>
                    <h4>{lane.lane}</h4>
                    <p>{lane.stack}</p>
                  </div>
                </div>
                <p className="architecture-card-copy">{lane.architecture}</p>
                <div className="architecture-repo-list">
                  {lane.repositories.map(repo => {
                    const architectureUrl = SYSTEM_ARCHITECTURE_URLS[repo];
                    return architectureUrl ? (
                      <a key={repo} href={architectureUrl} target="_blank" rel="noopener noreferrer">
                        {repo}
                        <FileText size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <span key={repo}>{repo}</span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div id="coverage" className="coverage-ledger" aria-label="Active repository coverage ledger">
          <div className="coverage-intro">
            <span>Coverage ledger</span>
            <h3>Repository coverage by technical surface</h3>
            <p>The visual cards carry the product surface; this ledger tracks stack groups, repository routes, and architecture attachments.</p>
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
