import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { SkillCategory, SkillItem } from '../types';
import { 
  Code2, 
  Database, 
  GitBranch, 
  Layout, 
  FileCode, 
  Cpu, 
  Terminal, 
  Users, 
  CheckCircle
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Database,
  GitBranch,
  Layout,
  FileCode,
  Cpu,
  Terminal,
  Users
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: (string | SkillCategory)[] = [
    'All',
    'Languages',
    'Tools & Workflows',
    'Core Computer Science',
    'Professional & Transferable'
  ];

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical & Transferable Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Developing Capabilities & Tooling
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Carefully and honestly documented skill levels representing active undergraduate study and hands-on programming practice.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill: SkillItem) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            const isBeginner = skill.level.toLowerCase().includes('beginner');

            return (
              <div
                key={skill.name}
                className="group p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Icon & Level Tag */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/40 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${
                        isBeginner
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400'
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 block mb-3">
                    {skill.category}
                  </span>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Visual Learning Progress Meter */}
                  <div className="space-y-1.5 mb-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      <span>Undergraduate Learning Status</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full transition-all duration-500 group-hover:brightness-110"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Topic / Focus Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.focusAreas.map((topic, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 font-mono"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning philosophy reminder card */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 text-center max-w-2xl mx-auto shadow-sm">
          <div className="flex items-center justify-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm mb-1">
            <CheckCircle className="w-4 h-4" />
            <span>Growth Mindset in Action</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            I am actively coding weekly exercises, learning algorithms, building console utilities, and exploring SQL databases to grow each of these competencies every day.
          </p>
        </div>

      </div>
    </section>
  );
};
