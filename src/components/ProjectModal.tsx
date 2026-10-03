import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Play, Sparkles, Layers, ShieldCheck, Clock, Calendar, TrendingUp, BarChart2 } from 'lucide-react';
import { Project } from '../types';
import { CapitalQuizDemo } from './demos/CapitalQuizDemo';
import { VotingSystemDemo } from './demos/VotingSystemDemo';
import { ElearningDemo } from './demos/ElearningDemo';
import { SchoolSystemDemo } from './demos/SchoolSystemDemo';
import { LibrarySystemDemo } from './demos/LibrarySystemDemo';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo'>('overview');

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const calculateReadingTime = (proj: Project): number => {
    const fullText = [
      proj.title,
      proj.subtitle,
      proj.description,
      ...proj.impactMetrics,
      ...proj.keyFeatures
    ].join(' ');
    const wordCount = fullText.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 180));
  };

  const readingTime = calculateReadingTime(project);

  const renderDemo = () => {
    switch (project.demoType) {
      case 'quiz':
        return <CapitalQuizDemo />;
      case 'voting':
        return <VotingSystemDemo />;
      case 'elearning':
        return <ElearningDemo />;
      case 'school':
        return <SchoolSystemDemo />;
      case 'library':
        return <LibrarySystemDemo />;
      default:
        return (
          <div className="p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 space-y-3">
            <Sparkles className="w-10 h-10 text-cyan-400 mx-auto" />
            <h5 className="text-lg font-bold text-white">System Architecture Live Sandbox</h5>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              This system includes binary file persistence and file stream error handling. Review the full source code repository on GitHub.
            </p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 rounded-xl border border-slate-700"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source Code</span>
            </a>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl max-w-3xl w-full text-white shadow-2xl overflow-hidden my-8">
        
        {/* Header Banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-neutral-900 border-b border-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>

          {/* Close Button & ESC Hint */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/80 hover:bg-neutral-800 text-white/70 hover:text-white rounded-full border border-white/10 backdrop-blur-md transition-colors flex items-center gap-1.5 px-3"
            title="Close Modal (Esc)"
          >
            <span className="text-[9px] font-mono uppercase tracking-widest text-white/40 hidden sm:inline">Esc</span>
            <X className="w-4 h-4" />
          </button>

          {/* Title & Badges */}
          <div className="absolute bottom-4 left-6 right-6 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-0.5 rounded-full bg-black/90 border border-[#d4af37]/50 text-[#d4af37] text-[10px] font-mono uppercase tracking-wider">
                {project.category}
              </span>
              <span className="px-3 py-0.5 rounded-full bg-black/80 border border-white/10 text-white/60 text-[10px] font-mono">
                {project.type} ({project.year})
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-black/80 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-mono flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#d4af37]" />
                <span>~{readingTime} min read</span>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#d4af37] font-mono">{project.subtitle}</p>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-white/10 px-6 bg-black">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-xs font-semibold uppercase tracking-widest border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-[#d4af37] text-[#d4af37]'
                : 'border-transparent text-white/40 hover:text-white'
            }`}
          >
            Project Overview & Metrics
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`py-3.5 px-4 text-xs font-semibold uppercase tracking-widest border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'demo'
                ? 'border-[#d4af37] text-[#d4af37]'
                : 'border-transparent text-white/40 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
            <span>Interactive Simulator</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' ? (
            <div className="space-y-6">
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-mono font-bold text-[#d4af37] tracking-widest">
                  System Abstract
                </h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{project.description}</p>
              </div>

              {/* Visual Project Timeline & Duration Bar */}
              <div className="p-4 bg-neutral-900/90 border border-white/10 rounded-2xl space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                      Development Timeline & Duration
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] font-semibold">
                      {project.duration || `${project.year} Duration`}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">
                      ({project.startDate || project.year} – {project.endDate || project.year})
                    </span>
                  </div>
                </div>

                {/* Timeline Progress Bar & Milestones */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-white/60">
                    <span className="text-[#d4af37] font-semibold">Start: {project.startDate || project.year}</span>
                    <span className="text-emerald-400 font-semibold">Status: Completed ({project.endDate || project.year})</span>
                  </div>

                  <div className="relative w-full h-3 bg-black rounded-full overflow-hidden border border-white/10 p-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-[#d4af37] via-amber-400 to-emerald-400 rounded-full transition-all duration-1000 shadow-[0_0_12px_#d4af37]"
                      style={{ width: `${project.complexityLevel || 85}%` }}
                    />
                  </div>

                  {/* Development Phase Milestones */}
                  <div className="grid grid-cols-3 gap-1 pt-1 text-[9px] font-mono text-center">
                    <div className="p-1.5 bg-black/50 rounded border border-white/5 text-white/70">
                      <span className="text-[#d4af37] block font-bold">Phase 1</span>
                      <span>Architecture & Specs</span>
                    </div>
                    <div className="p-1.5 bg-black/50 rounded border border-white/5 text-white/70">
                      <span className="text-amber-300 block font-bold">Phase 2</span>
                      <span>Core Engine & APIs</span>
                    </div>
                    <div className="p-1.5 bg-black/50 rounded border border-white/5 text-white/70">
                      <span className="text-emerald-400 block font-bold">Phase 3</span>
                      <span>QA & Production Release</span>
                    </div>
                  </div>
                </div>

                {/* Complexity Rating Indicator */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-white/70">
                    <BarChart2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span className="text-[11px]">Engineering Complexity Rating:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#d4af37]">
                      {project.complexityLevel || 85}%
                    </span>
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/60">
                      {(project.complexityLevel || 85) >= 90 ? 'High Architectural Depth' : 'Robust System Build'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Impact Metrics */}
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase font-mono font-bold text-[#d4af37] tracking-widest">
                  Engineering Outcomes & Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.impactMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-neutral-900/80 border border-white/10 rounded-xl flex items-center gap-2 text-xs text-white/80 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-mono font-bold text-[#d4af37] tracking-widest">
                  Architectural Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/70">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-neutral-900/50 p-2.5 rounded-lg border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0 shadow-[0_0_6px_#d4af37]"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase font-mono font-bold text-white/40 tracking-widest">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-900 border border-white/10 rounded-full text-[10px] font-mono text-[#d4af37]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-2">{renderDemo()}</div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 px-6 bg-black border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-[10px] uppercase tracking-widest font-semibold rounded-full border border-white/10 flex items-center gap-2 transition-all hover:text-[#d4af37]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#d4af37] hover:bg-white text-black font-semibold text-[10px] uppercase tracking-widest rounded-full transition-all"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
