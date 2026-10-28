import React, { useState } from 'react';
import { personalInfo, educationData, skillsData } from '../data/portfolioData';
import { X, Download, FileText, Check, AlertCircle, Copy, GraduationCap, Code } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [downloadError, setDownloadError] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      // Test if cv.pdf is reachable
      const response = await fetch(`/${personalInfo.cvFileName}`, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error('CV file not found');
      }

      // Download file
      const link = document.createElement('a');
      link.href = `/${personalInfo.cvFileName}`;
      link.download = `${personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadError(false);
    } catch {
      setDownloadError(true);
    }
  };

  const handleCopyTextSummary = () => {
    const summaryText = `
${personalInfo.fullName}
${personalInfo.role}
University: ${personalInfo.university}
Degree: ${personalInfo.degree}
Location: ${personalInfo.location}
Placement Goal: ${personalInfo.careerGoal}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinUrl}
GitHub: ${personalInfo.githubUrl}

--- SKILLS (BEGINNER / FOUNDATIONAL) ---
${skillsData.map(s => `• ${s.name} (${s.level}): ${s.focusAreas.join(', ')}`).join('\n')}

--- EDUCATION ---
${educationData.degree} - ${educationData.institution} (${educationData.period})
Placement Target: ${educationData.placementFocus}
Key Modules:
${educationData.coreModules.map(m => `• ${m.name}: ${m.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

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
          aria-label="Close CV modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {personalInfo.fullName}
          </h3>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {personalInfo.subheading} • {personalInfo.location}
          </p>
        </div>

        {/* Download Buttons Section */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Official Placement CV (PDF)
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              Target file: /public/{personalInfo.cvFileName}
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-white text-xs sm:text-sm font-semibold shadow-md shadow-cyan-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handleCopyTextSummary}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:border-cyan-500/40 transition-colors"
              title="Copy plain-text summary"
            >
              {copiedSummary ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">Copy Text</span>
            </button>
          </div>
        </div>

        {/* Fallback Notice if file was not reachable */}
        {downloadError && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs sm:text-sm space-y-1 animate-fadeIn">
            <div className="flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span>CV Document Notice</span>
            </div>
            <p>
              Your browser could not find <code>public/{personalInfo.cvFileName}</code>. To enable automatic downloads, please place your compiled PDF CV named <code>cv.pdf</code> inside the <code>public/</code> folder. In the meantime, you can review the structured CV summary below or copy the text.
            </p>
          </div>
        )}

        {/* Quick Read On-Screen CV Preview */}
        <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
            On-Screen CV Summary Preview:
          </div>

          {/* Education Preview */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/40 border border-slate-100 dark:border-slate-800/80 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
              <GraduationCap className="w-4 h-4 text-cyan-500" />
              <span>{educationData.degree} — {educationData.institution}</span>
            </div>
            <div className="text-xs text-slate-500 font-mono">
              {educationData.period} • {educationData.location}
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 pt-1">
              {educationData.placementFocus}
            </p>
          </div>

          {/* Core Skills Preview */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/40 border border-slate-100 dark:border-slate-800/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
              <Code className="w-4 h-4 text-purple-500" />
              <span>Technical Skills (Beginner / Learning Status)</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skillsData.map((s) => (
                <span
                  key={s.name}
                  className="text-[11px] px-2 py-0.5 rounded bg-white dark:bg-navy-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono"
                >
                  {s.name} ({s.level.split('/')[0].trim()})
                </span>
              ))}
            </div>
          </div>

          {/* How to replace info for Mostak */}
          <div className="p-3.5 rounded-lg bg-cyan-500/5 border border-cyan-500/20 text-[11px] text-slate-500 dark:text-slate-400 space-y-1 font-mono">
            <div>💡 <strong>How to update with your own CV:</strong></div>
            <div>Save your CV as <code>public/cv.pdf</code>. Any recruiter clicking 'Download CV' will receive that file instantly.</div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 flex items-center justify-end">
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
