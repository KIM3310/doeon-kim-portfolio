import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(p => p.tech.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  const filtered = filter ? PROJECTS.filter(p => p.tech.includes(filter)) : PROJECTS;

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${!filter ? 'bg-white text-black border-white' : 'border-white/20 text-gray-400 hover:border-white/40'}`}
          >
            All ({PROJECTS.length})
          </button>
          {allTags.map(tag => {
            const count = PROJECTS.filter(p => p.tech.includes(tag)).length;
            return (
              <button
                key={tag}
                onClick={() => setFilter(filter === tag ? null : tag)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${filter === tag ? 'bg-white text-black border-white' : 'border-white/20 text-gray-400 hover:border-white/40'}`}
              >
                {tag} ({count})
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <article key={idx} className="border border-white/10 bg-white/[0.02] rounded-lg p-6 hover:border-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    onClick={() => setFilter(filter === t ? null : t)}
                    className={`text-xs px-2 py-1 rounded cursor-pointer transition-colors ${filter === t ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
                  <Github size={16} /> Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={16} /> Demo
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
