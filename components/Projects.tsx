import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { BadgeDollarSign, BriefcaseBusiness, ChevronDown, ChevronUp, ExternalLink, Github, LockKeyhole, Target } from 'lucide-react';

const TOP_TAGS = 8;

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);

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

        {/* Filter bar */}
        <div className="filter-bar">
          <button
            onClick={() => setFilter(null)}
            className={`filter-button ${!filter ? 'is-active' : ''}`}
          >
            All ({PROJECTS.length})
          </button>
          {visibleTags.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => setFilter(filter === tag ? null : tag)}
              className={`filter-button ${filter === tag ? 'is-active' : ''}`}
            >
              {tag} ({count})
            </button>
          ))}
          {allTags.length > TOP_TAGS && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="filter-more"
            >
              {showAllTags ? <><ChevronUp size={14} /> Less</> : <><ChevronDown size={14} /> +{allTags.length - TOP_TAGS} more</>}
            </button>
          )}
        </div>

        {/* Project grid */}
        <div className="project-grid">
          {filtered.map((project, idx) => (
            <article key={idx} className="project-card">
              <div className="project-card-top">
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <div className="project-mark" />
              </div>
              {project.evidence && (
                <div className="project-evidence">
                  <img src={`${import.meta.env.BASE_URL}${project.evidence}`} alt={`${project.title} visual evidence`} loading="lazy" />
                </div>
              )}
              {project.access === 'private' && (
                <span className="private-badge"><LockKeyhole size={13} /> Private case study</span>
              )}
              <h3>{project.title}</h3>
              <p className="project-copy">{project.description}</p>
              <div className="project-business" aria-label={`${project.title} business and hiring fit`}>
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
              <div className="tag-list">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    onClick={() => setFilter(filter === t ? null : t)}
                    className={`tag-chip ${filter === t ? 'is-active' : ''}`}
                  >
                    {t}
                  </span>
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
      </div>
    </section>
  );
};

export default Projects;
