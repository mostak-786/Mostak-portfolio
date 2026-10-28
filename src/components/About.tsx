import React from 'react';
import { personalInfo, placementObjectives } from '../data/portfolioData';
import { User, CheckCircle2, Target, HeartHandshake, BookOpen, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Honest Ambition & Solid Foundations
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            A genuine overview of my studies, technical journey, and why I am seeking a 12-month industrial placement in the UK technology sector.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-cyan-500" />
                <span>My Journey Into Software Engineering</span>
              </h3>

              {personalInfo.aboutStory.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Undergraduate Focus</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Computer Science fundamentals, Object-Oriented design & SQL databases.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Team Player</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Transferable customer service, active listening & dependable collaboration.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Honest representation notice */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-3">
              <Target className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Recruiter Transparency Commitment:</span> As a computer science student, I believe in complete honesty about my current capabilities. I do not exaggerate my experience or claim senior-level mastery. What I bring is strong discipline, curiosity, and an eagerness to absorb feedback and grow under mentorship.
              </div>
            </div>
          </div>

          {/* Right Column: Placement Value Proposition */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
              Why consider me for your placement scheme:
            </div>

            {placementObjectives.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all shadow-sm group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-500 shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Fast Stats Pill Card */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900/40 border border-cyan-500/20 text-white space-y-3">
              <div className="text-xs font-mono text-cyan-300">Quick Candidate Summary</div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">Degree:</span>
                  <span className="font-medium text-slate-100">BSc (Hons) CompSci</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Placement Duration:</span>
                  <span className="font-medium text-emerald-400">12 Months (Full-Time)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Location:</span>
                  <span className="font-medium text-slate-100">Birmingham, UK</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Relocation:</span>
                  <span className="font-medium text-cyan-300">Open across UK</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
