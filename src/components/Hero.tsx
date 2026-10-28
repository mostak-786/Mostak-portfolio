import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, ArrowRight, Mail, Github, Linkedin, MapPin, GraduationCap, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-sky-600/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Seeking Placement Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Seeking 12-Month Industrial Placement (UK)</span>
            </div>

            {/* Headline & Subheading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {personalInfo.headline}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gradient">
                {personalInfo.subheading}
              </p>
            </div>

            {/* University & Location Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <GraduationCap className="w-4 h-4 text-cyan-500" />
                {personalInfo.university}
              </span>
              <span className="hidden sm:inline text-slate-400 dark:text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-purple-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Bio / Intro Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Explore Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download CV */}
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/60 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>Download My CV</span>
              </button>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons & Placement Commitment */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Profiles:</span>
                
                {/* GitHub */}
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
                  aria-label="GitHub Profile"
                  title="Visit Mostak's GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all"
                  aria-label="LinkedIn Profile"
                  title="Visit Mostak's LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
                  aria-label="Send direct email"
                  title="Send email to Mostak"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Available for 2025/2026 Placement Intake
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal Preview */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800/80 shadow-2xl overflow-hidden font-mono text-xs">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-navy-950 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>candidate_profile.py</span>
                  </div>
                  <span className="text-[10px] text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Active
                  </span>
                </div>

                {/* Code Window Content */}
                <div className="p-5 space-y-3 leading-relaxed text-slate-700 dark:text-slate-300 overflow-x-auto">
                  <div className="text-slate-400 italic"># Candidate Data: Placement Year 2025/2026</div>
                  
                  <div>
                    <span className="text-purple-600 dark:text-purple-400 font-semibold">candidate</span> = &#123;
                  </div>

                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-sky-600 dark:text-sky-300">"name"</span>: <span className="text-emerald-600 dark:text-emerald-400">"{personalInfo.fullName}"</span>,
                    </div>
                    <div>
                      <span className="text-sky-600 dark:text-sky-300">"degree"</span>: <span className="text-emerald-600 dark:text-emerald-400">"BSc (Hons) Computer Science"</span>,
                    </div>
                    <div>
                      <span className="text-sky-600 dark:text-sky-300">"institution"</span>: <span className="text-emerald-600 dark:text-emerald-400">"Univ. of Wolverhampton"</span>,
                    </div>
                    <div>
                      <span className="text-sky-600 dark:text-sky-300">"location"</span>: <span className="text-emerald-600 dark:text-emerald-400">"Birmingham, UK"</span>,
                    </div>
                    <div>
                      <span className="text-sky-600 dark:text-sky-300">"primary_goal"</span>: <span className="text-amber-600 dark:text-amber-300">"12-Month UK Placement"</span>,
                    </div>
                    <div>
                      <span className="text-sky-600 dark:text-sky-300">"active_skills"</span>: [
                      <div className="pl-4 text-emerald-600 dark:text-emerald-400">
                        "Python", "SQL", "Git", "HTML/CSS", "JavaScript"
                      </div>
                      <span className="text-slate-700 dark:text-slate-300">],</span>
                    </div>
                    <div>
                      <span className="text-sky-600 dark:text-sky-300">"mindset"</span>: <span className="text-emerald-600 dark:text-emerald-400">"Honest, Curious & Ready to Learn"</span>
                    </div>
                  </div>

                  <div>&#125;</div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
                    <span className="text-emerald-500 font-bold">&gt;&gt;&gt;</span> print(candidate["primary_goal"])<br />
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">&gt; "12-Month UK Placement"</span>
                  </div>
                </div>

                {/* Footer status in terminal */}
                <div className="px-4 py-2 bg-slate-50 dark:bg-navy-950/70 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Open to in-person, hybrid or remote</span>
                  </span>
                  <span className="text-cyan-600 dark:text-cyan-400">UK Placement</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
