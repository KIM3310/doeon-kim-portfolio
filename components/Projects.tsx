import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => (
  <section id="projects" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <article key={idx} className="border border-white/10 bg-white/[0.02] rounded-lg p-6 hover:border-white/20 transition-colors">
            <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400">{t}</span>
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
    </div>
  </section>
);

export default Projects;
