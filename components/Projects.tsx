import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">
          <p className="eyebrow">Systems</p>
          <h2>Built surfaces, not loose demos</h2>
          <p>Each card links to a runnable or inspectable system with an explicit boundary: runtime reliability, governance, operations, data contracts, or applied ML.</p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, idx) => (
            <article key={idx} className="project-card">
              <div className="project-card-top">
                <span>{String(idx + 1).padStart(2, '0')}</span>
                <div />
              </div>
              <h3>{project.title}</h3>
              <p className="project-copy">{project.description}</p>
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
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github size={14} /> Code
                </a>
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
          <p className="text-center text-gray-500 py-12">No projects match this filter.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
