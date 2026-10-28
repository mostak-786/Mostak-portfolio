import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Computer Science Education
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Current undergraduate degree program with a structured industrial placement sandwich year.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            
            {/* Top Row: Degree & University */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                  <CheckCircle className="w-3 h-3" />
                  <span>{educationData.status}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {educationData.degree}
                </h3>
                <div className="text-base font-semibold text-cyan-600 dark:text-cyan-400">
                  {educationData.institution}
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-cyan-500" />
                  {educationData.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-purple-500" />
                  {educationData.location}
                </span>
              </div>
            </div>

            {/* Overview & Placement Focus Pill */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-900 dark:text-cyan-200 text-xs sm:text-sm font-medium">
                🎯 <strong className="font-semibold">Placement Status:</strong> {educationData.placementFocus}
              </div>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {educationData.overview}
              </p>
            </div>

            {/* Core Modules Grid */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-500" />
                <span>Representative Modules & Learning Disciplines</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {educationData.coreModules.map((mod, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      <span>{mod.name}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-4">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Honesty Note */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 font-mono text-center">
              * Official degree transcripts and module confirmations available upon request for placement applications.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
