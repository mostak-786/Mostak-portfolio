import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  AlertCircle, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<null | 'ready'>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry details';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Show client-side action confirmation
    setSubmittedStatus('ready');

    // Trigger pre-filled mailto
    const subject = encodeURIComponent(
      formData.subject.trim() || `Placement Inquiry from ${formData.name.trim()}`
    );
    const body = encodeURIComponent(
      `Hi Mostak,\n\n${formData.message}\n\n---\nSender: ${formData.name} (${formData.email})`
    );
    
    // Automatically prepare mailto URL
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Placement Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            I am actively interviewing for 12-month industrial placements starting in 2025/2026. Feel free to reach out directly or send an inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-500" />
                <span>Contact Channels</span>
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white dark:bg-navy-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500/40 transition-all shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-sky-500/40 hover:bg-sky-500/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-500 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-500 transition-colors">
                      Connect on LinkedIn
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-200 dark:bg-navy-800 text-slate-700 dark:text-slate-200 group-hover:scale-105 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">GitHub Profile</div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition-colors">
                      Explore Repositories
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-colors" />
              </a>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Location Base</div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {personalInfo.location} (Open to UK relocation & hybrid)
                  </div>
                </div>
              </div>

            </div>

            {/* Recruiter Placement Commitment Card */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <span className="font-semibold text-cyan-600 dark:text-cyan-400 block font-mono">
                Placement Availability Notice:
              </span>
              <p>
                Eligible for UK industrial placements for the 2025/2026 academic year. Open to in-person roles in the West Midlands / Birmingham, London, or flexible arrangements nationwide.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Placement Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Fill in this form to open your email client pre-formatted with your details.
                </p>
              </div>

              {/* Submission Status Alert */}
              {submittedStatus === 'ready' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Email App Prepared!</span>
                  </div>
                  <p>
                    Your default email client has been launched with your message prefilled to <strong>{personalInfo.email}</strong>. If your email client didn't open automatically, you can copy the email address or message manually.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Jane Smith (Recruitment Lead)"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border ${
                      errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:ring-cyan-400'
                    } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-500">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Your Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. jane.smith@company.co.uk"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:ring-cyan-400'
                    } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-500">{errors.email}</span>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Subject / Opportunity Title
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. 12-Month Software Placement Opportunity"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role details, team information, or interview inquiries..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border ${
                      errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-800 focus:ring-cyan-400'
                    } text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all`}
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-500">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Placement Message</span>
                  </button>
                </div>

                {/* Delivery mechanism disclaimer */}
                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
                  <AlertCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                  <span>
                    Privacy note: Submitting opens your email application with your prepared text to directly send to Mostak's verified email address without routing through third-party servers.
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
