import React from 'react';
import { ProjectItem } from '../types';
import { X, Clock, Check, Target, Layers, AlertCircle } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400">
              <Clock className="w-3 h-3" />
              <span>{project.status}</span>
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {project.subtitle}
          </p>
        </div>

        {/* Honest Disclosure Callout */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold">Project Stage:</strong> This is a conceptual learning project being planned as part of Mostak's practical skills development. No fake code or repository links are published until active development commits begin.
          </div>
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Project Scope & Goal</span>
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Planned Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span>Planned Functional Deliverables</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feat, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-50 dark:bg-navy-950/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-purple-400" />
            <span>Key Competencies To Be Practiced</span>
          </h4>
          <ul className="space-y-2">
            {project.learningGoals.map((goal, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <span className="text-cyan-500 font-bold">•</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Planned Tech Stack */}
        <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono text-slate-400 dark:text-slate-500">
            Target Technologies:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
