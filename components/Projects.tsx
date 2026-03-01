import React from 'react';
import { PROJECTS, SECONDARY_PROJECTS } from '../constants';
import Section from './Section';
import { ArrowUpRight, ExternalLink, Github, LucideIcon } from 'lucide-react';
import { Project, SecondaryProject } from '../types';

type ProjectAction = {
  href: string;
  label: string;
  Icon: LucideIcon;
};

const isExternalHref = (href: string) => /^(https?:)?\/\//.test(href);

const formatActionUrl = (href: string) => {
  try {
    const url = new URL(href);
    const path = url.pathname.replace(/\/$/, '');
    return path ? `${url.host}${path}` : url.host;
  } catch {
    return href;
  }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const actions: ProjectAction[] = [
    project.links?.github ? { href: project.links.github, label: 'GitHub Repo', Icon: Github } : null,
    project.links?.demo ? { href: project.links.demo, label: 'Live Demo', Icon: ExternalLink } : null,
    project.links?.youtube ? { href: project.links.youtube, label: 'Walkthrough', Icon: ExternalLink } : null,
  ].filter((action): action is ProjectAction => action !== null);

  return (
    <article className="group relative h-full min-w-0 overflow-hidden">
      <div className="flex h-full min-w-0 flex-col border border-white/5 bg-[#0a0a0c] p-6 transition-all duration-500 group-hover:translate-y-[-4px] hover:border-accent-gold/30 sm:p-8">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="w-8 h-[1px] bg-accent-gold/50"></div>
            <span className="min-w-0 text-[11px] font-medium uppercase tracking-[0.22em] text-accent-gold sm:text-xs" style={{ overflowWrap: 'anywhere' }}>
              {project.category}
            </span>
          </div>
          <div className="flex flex-none gap-2 opacity-60 transition-opacity group-hover:opacity-100">
            {actions.map(({ label, Icon }) => (
              <span key={label} className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-white/50">
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <h3 className="mb-4 font-serif-heading text-[1.95rem] leading-tight text-white transition-colors group-hover:text-accent-gold sm:text-2xl" style={{ overflowWrap: 'anywhere' }}>
          {project.title}
        </h3>

        <div className="mb-6">
          <p className="text-sm text-white/60 font-medium mb-1">Role</p>
          <p className="text-sm font-light text-primary-muted" style={{ overflowWrap: 'anywhere' }}>{project.role}</p>
        </div>

        <ul className="mb-8 grow min-w-0 space-y-3">
          {project.achievements.slice(0, 3).map((achievement, aIdx) => (
            <li key={aIdx} className="flex items-start text-sm font-light leading-relaxed text-primary-muted">
              <span className="mr-3 mt-1.5 flex-none text-white/20">•</span>
              <span className="min-w-0" style={{ overflowWrap: 'anywhere' }}>{achievement}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-white/5 pt-6">
          <div className="mb-5 flex flex-wrap gap-2">
            {actions.length > 0 ? actions.map(({ href, label, Icon }) => (
              <a key={label} href={href} target={isExternalHref(href) ? '_blank' : undefined} rel={isExternalHref(href) ? 'noopener noreferrer' : undefined} className="inline-flex min-w-[14rem] flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left transition-all hover:border-accent-gold/40 hover:text-white">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-primary"><Icon className="h-4 w-4 text-accent-gold" /><span>{label}</span></span>
                <span className="font-mono text-[11px] text-white/45">{formatActionUrl(href)}</span>
              </a>
            )) : (
              <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-white/45">Private artifact / offline demo</span>
            )}
          </div>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {project.tech.map((tech, tIdx) => (
              <span key={tIdx} className="max-w-full text-xs font-mono text-white/40" style={{ overflowWrap: 'anywhere' }}>{tech}</span>
            ))}
          </div>
        </div>

        {actions.length > 0 && (
          <div className="absolute bottom-6 right-6 translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:bottom-8 sm:right-8">
            <ArrowUpRight className="w-6 h-6 text-accent-gold" />
          </div>
        )}
      </div>
    </article>
  );
};

const SecondaryProjectCard: React.FC<{ project: SecondaryProject }> = ({ project }) => {
  return (
    <article className="group border border-white/8 bg-white/[0.02] p-5 transition-all hover:border-accent-gold/30 hover:bg-white/[0.04]">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="font-serif-heading text-xl text-white transition-colors group-hover:text-accent-gold">{project.title}</h3>
        <ArrowUpRight className="h-5 w-5 flex-none text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-gold" />
      </div>
      <p className="mb-4 text-sm font-light leading-relaxed text-primary-muted">{project.focus}</p>
      {project.note ? <p className="mb-3 text-xs uppercase tracking-[0.22em] text-white/35">{project.note}</p> : null}
      <div className="flex flex-wrap gap-2">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-w-[12rem] flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left transition-all hover:border-accent-gold/40 hover:text-white">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-primary"><Github className="h-4 w-4 text-accent-gold" /><span>GitHub Repo</span></span>
          <span className="font-mono text-[11px] text-white/45">{formatActionUrl(project.github)}</span>
        </a>
        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-w-[12rem] flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-left transition-all hover:border-accent-gold/40 hover:text-white">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-primary"><ExternalLink className="h-4 w-4 text-accent-gold" /><span>Live Surface</span></span>
            <span className="font-mono text-[11px] text-white/45">{formatActionUrl(project.demo)}</span>
          </a>
        ) : null}
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif-heading font-medium text-white mb-2">Featured Systems</h2>
          <p className="text-primary-muted font-light">A smaller, stronger set of systems organized around one clear reliability thesis.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>

      <div className="mt-24 border-t border-white/10 pt-10">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.32em] text-accent-gold/80">Secondary Project Index</p>
            <h3 className="font-serif-heading text-2xl text-white md:text-3xl">Additional active repos</h3>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-primary-muted">
            These are active repos that reinforce the main project story, but are intentionally positioned behind the selected set.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SECONDARY_PROJECTS.map((project) => (
            <SecondaryProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
