import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'am' | 'om'>('en');

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 't' || e.key === 'T')) {
        e.preventDefault();
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#d4af37] selection:text-black transition-colors duration-300">
      {/* Fixed Top Navigation Bar */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        activeLanguage={activeLanguage}
        onChangeLanguage={(lang) => setActiveLanguage(lang)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          activeLanguage={activeLanguage}
        />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <SkillsSection />

        <EducationSection />

        <CertificationsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
