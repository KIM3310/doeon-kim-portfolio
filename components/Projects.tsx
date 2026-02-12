import React from 'react';
import { PROJECTS } from '../constants';
import Section from './Section';
import { ExternalLink, Github, Youtube, Folder, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const CardContent = () => (
    <div className="h-full flex flex-col p-8 bg-[#0a0a0c] border border-white/5 hover:border-accent-gold/30 transition-all duration-500 group-hover:translate-y-[-4px]">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
             <div className="w-8 h-[1px] bg-accent-gold/50"></div>
             <span className="text-xs font-medium tracking-widest text-accent-gold uppercase">
              {project.category}
            </span>
        </div>
        <div className="flex gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
           {project.links?.github && <Github className="w-4 h-4 text-white" />}
           {project.links?.demo && <ExternalLink className="w-4 h-4 text-white" />}
        </div>
      </div>

      <h3 className="text-2xl font-serif-heading text-white mb-4 group-hover:text-accent-gold transition-colors">
        {project.title}
      </h3>

      <div className="mb-6">
        <p className="text-sm text-white/60 font-medium mb-1">Role</p>
        <p className="text-sm text-primary-muted font-light">{project.role}</p>
      </div>

      <ul className="space-y-3 mb-8 grow">
        {project.achievements.slice(0, 3).map((achievement, aIdx) => (
          <li key={aIdx} className="text-primary-muted text-sm font-light leading-relaxed flex items-start">
            <span className="mr-3 text-white/20 mt-1.5">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto border-t border-white/5 pt-6">
        {project.tech.map((tech, tIdx) => (
          <span 
            key={tIdx} 
            className="text-xs text-white/40 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Hover visual cue */}
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
         <ArrowUpRight className="w-6 h-6 text-accent-gold" />
      </div>
    </div>
  );

  const wrapperClass = "group relative block h-full overflow-hidden";

  if (project.links?.github) {
    return (
      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={wrapperClass}>
        <CardContent />
      </a>
    );
  }

  return (
    <div className={wrapperClass}>
      <CardContent />
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects">
       <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
        <div>
           <h2 className="text-3xl md:text-4xl font-serif-heading font-medium text-white mb-2">Selected Works</h2>
           <p className="text-primary-muted font-light">Engineering solutions for complex problems.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
