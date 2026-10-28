import React from 'react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { 
  Sparkles, 
  Clock, 
  ExternalLink, 
  Github, 
  Check, 
  Info, 
  ArrowRight
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical Development & Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Targeted Learning Projects
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A transparent showcase of projects currently being scoped and designed to practice software engineering principles.
          </p>
        </div>

        {/* Recruiter Transparency Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex items-start gap-4">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
              Placement Recruiter Transparency Notice
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              These entries represent planned and in-progress software builds designed to apply university theory to practical problem-solving. In accordance with honest disclosure, repository links and live demonstrations will be enabled as each implementation reaches functional milestones.
            </p>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header & Status */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 tracking-wide">
                    {project.category}
                  </span>
                  
                  {/* Status Pill */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400">
                    <Clock className="w-3 h-3" />
                    <span>{project.status}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Planned Features Preview */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                    Planned Functionality:
                  </span>
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Footer Actions */}
              <div className="p-6 pt-0 space-y-4">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Links */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
                  >
                    <span>View Learning Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {/* GitHub Repo Button */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                        title="Repository link will be activated when project coding begins"
                      >
                        <Github className="w-4 h-4 opacity-50" />
                      </span>
                    )}

                    {/* Live Demo Button */}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-cyan-500/20 text-slate-700 dark:text-slate-300 hover:text-cyan-400 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 cursor-not-allowed"
                        title="Live demo will be deployed upon feature completion"
                      >
                        <ExternalLink className="w-4 h-4 opacity-50" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
