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
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto">
          <button
            onClick={() => setFilter(null)}
            className={`text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors ${!filter ? 'bg-white text-black border-white' : 'border-white/20 text-gray-400 hover:border-white/40'}`}
          >
            All ({PROJECTS.length})
          </button>
          {visibleTags.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => setFilter(filter === tag ? null : tag)}
              className={`text-xs px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors ${filter === tag ? 'bg-white text-black border-white' : 'border-white/20 text-gray-400 hover:border-white/40'}`}
            >
              {tag} ({count})
            </button>
          ))}
          {allTags.length > TOP_TAGS && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="text-xs px-3 py-1.5 text-gray-500 hover:text-white transition-colors flex items-center gap-1"
            >
              {showAllTags ? <><ChevronUp size={14} /> Less</> : <><ChevronDown size={14} /> +{allTags.length - TOP_TAGS} more</>}
            </button>
          )}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, idx) => (
            <article key={idx} className="border border-white/10 bg-white/[0.02] rounded-lg p-5 hover:border-white/20 transition-colors flex flex-col min-h-[220px]">
              <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-3 leading-relaxed line-clamp-2 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    onClick={() => setFilter(filter === t ? null : t)}
                    className={`text-xs px-2 py-0.5 rounded cursor-pointer transition-colors ${filter === t ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto pt-2 border-t border-white/5">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
                  <Github size={14} /> Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
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
