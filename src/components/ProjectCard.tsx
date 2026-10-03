import React from 'react';
import { ExternalLink, Github, Play, ArrowRight, Star, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <motion.div
      onClick={() => onSelectProject(project)}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="group relative bg-[#0a0a0a] border border-white/10 hover:border-[#d4af37]/70 rounded-2xl overflow-hidden transition-colors duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] cursor-pointer flex flex-col h-full"
    >
      {/* Light sheen beam sweep animation on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-30" />

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-20 px-3 py-1 bg-black/90 border border-[#d4af37]/70 text-[#d4af37] font-semibold text-[9px] rounded-full uppercase tracking-widest flex items-center gap-1 shadow-2xl backdrop-blur-md group-hover:scale-105 transition-transform">
          <Star className="w-3 h-3 fill-[#d4af37] animate-pulse" />
          <span>Featured</span>
        </div>
      )}

      {/* Image Banner */}
      <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden border-b border-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-108 group-hover:contrast-105 transition-all duration-700 opacity-80 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent"></div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs z-10">
          <span className="px-2.5 py-0.5 rounded-full bg-black/90 border border-white/10 group-hover:border-[#d4af37]/40 text-[#d4af37] font-mono text-[10px] uppercase tracking-wider transition-colors">
            {project.category}
          </span>
          <span className="text-white/60 text-[10px] font-mono uppercase bg-black/80 px-2 py-0.5 rounded-full border border-white/10">
            {project.year}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h4 className="text-xl font-serif text-white group-hover:text-[#d4af37] transition-colors duration-300">
            {project.title}
          </h4>
          <p className="text-xs text-white/50 group-hover:text-white/70 line-clamp-2 leading-relaxed transition-colors">
            {project.description}
          </p>
        </div>

        {/* Primary Impact Pill */}
        <div className="p-2.5 bg-neutral-900/90 rounded-xl border border-white/10 group-hover:border-[#d4af37]/30 text-[11px] text-[#d4af37] font-mono flex items-center gap-2 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0 shadow-[0_0_8px_#d4af37]"></span>
          <span className="truncate">{project.impactMetrics[0]}</span>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-neutral-900 text-white/60 border border-white/5 group-hover:border-white/20 group-hover:bg-neutral-800 rounded text-[10px] font-mono uppercase tracking-wider transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-1.5 py-0.5 bg-neutral-900 text-white/40 text-[10px] font-mono rounded border border-white/5">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Action Trigger */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-widest font-semibold text-[#d4af37] group-hover:text-white transition-colors">
          <span className="flex items-center gap-1.5">
            <Play className="w-3 h-3 fill-[#d4af37] text-[#d4af37] group-hover:scale-110 transition-transform" />
            <span>Interactive Demo & Details</span>
          </span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300 text-[#d4af37] group-hover:text-white" />
        </div>
      </div>
    </motion.div>
  );
};

