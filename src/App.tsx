import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';

export const AppContent: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-navy-950 dark:text-slate-100 transition-colors duration-300 font-sans antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-white">
      
      {/* Subtle background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-purple-600/10 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Page Sections */}
      <main>
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Education />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CvModal 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
