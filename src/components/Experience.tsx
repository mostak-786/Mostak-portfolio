import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle, ShieldCheck, Clock, Users, MessageSquare } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Employment & Transferable Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Workplace Foundations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Real-world workplace experience fostering strong communication, customer empathy, reliability, and collaborative teamwork.
          </p>
        </div>

        {/* Transferable Skills Banner Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center mx-auto">
              <Users className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Teamwork</div>
            <p className="text-[11px] text-slate-500">Cooperative execution</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center mx-auto">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Communication</div>
            <p className="text-[11px] text-slate-500">Clear & professional</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mx-auto">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Time Management</div>
            <p className="text-[11px] text-slate-500">Balancing study & work</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-white">Procedures</div>
            <p className="text-[11px] text-slate-500">Reliable & disciplined</p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-all shadow-sm space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {exp.type}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Overview */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.overview}
              </p>

              {/* Transferable Skills Chips */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Transferable Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {exp.transferableSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-lg bg-cyan-500/5 dark:bg-cyan-950/30 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Key Responsibilities & Outcomes:
                </span>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Editable note pill */}
              <div className="text-[11px] font-mono text-slate-400 italic pt-2 border-t border-slate-100 dark:border-slate-800/80">
                Tip: You can edit or add your exact employer name, dates, or retail/service duties inside `src/data/portfolioData.ts`.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
