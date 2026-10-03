import React, { useState } from 'react';
import { Search, Filter, Layers, Code, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = ['All', 'Web', 'Android', 'Full-Stack', 'Security & Web', 'Desktop & Systems'];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const isProjectInCategory = (project: Project, category: string) => {
    if (category === 'All') return true;
    if (category === 'Web') {
      return (
        project.category === 'Full-Stack' ||
        project.category === 'Security & Web' ||
        project.techStack.some((t) =>
          ['PHP', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Flask', 'React', 'REST', 'AJAX'].some((webTech) =>
            t.toLowerCase().includes(webTech.toLowerCase())
          )
        )
      );
    }
    if (category === 'Android') {
      return (
        project.category === 'Mobile Apps' ||
        project.techStack.some((t) =>
          ['Android', 'Java', 'Firebase', 'Mobile'].some((mTech) =>
            t.toLowerCase().includes(mTech.toLowerCase())
          )
        ) ||
        project.title.toLowerCase().includes('android')
      );
    }
    return project.category === category;
  };

  const getCategoryCount = (category: string) => {
    return projectsData.filter((p) => isProjectInCategory(p, category)).length;
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = isProjectInCategory(project, selectedCategory);
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.subtitle.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.category.toLowerCase().includes(q) ||
      project.impactMetrics.some((m) => m.toLowerCase().includes(q)) ||
      project.keyFeatures.some((f) => f.toLowerCase().includes(q)) ||
      project.techStack.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-[#050505] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-[#d4af37]/30 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>01 / Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Featured <span className="italic text-[#d4af37]">Projects & Systems</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed uppercase tracking-wider max-w-2xl mx-auto">
              Full-stack platforms, scalable Android applications, encrypted voting systems, and desktop management solutions complete with live interactive sandboxes.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter & Search Bar Controls */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0a0a0a] p-3 sm:p-4 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl">
              
              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {CATEGORIES.map((cat) => {
                  const count = getCategoryCount(cat);
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20 font-bold border border-[#d4af37]'
                          : 'text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[9px] font-mono ${
                          isActive ? 'bg-black/20 text-black font-bold' : 'bg-neutral-800 text-white/50'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Real-time Keyword Search Input */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search title, tech, or metrics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-9 py-2 bg-neutral-900 border border-white/10 focus:border-[#d4af37] rounded-full text-xs text-white placeholder-white/30 focus:outline-none transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>

            {/* Results Counter / Filter Feedback Badge */}
            <div className="flex items-center justify-between px-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
              <div className="flex items-center gap-2">
                <span>
                  Showing <strong className="text-[#d4af37]">{filteredProjects.length}</strong> of {projectsData.length} projects
                </span>
                {selectedCategory !== 'All' && (
                  <span className="px-2 py-0.5 bg-neutral-900 border border-white/10 rounded-full text-white/60">
                    Category: {selectedCategory}
                  </span>
                )}
                {searchQuery.trim() && (
                  <span className="px-2 py-0.5 bg-neutral-900 border border-[#d4af37]/30 rounded-full text-[#d4af37]">
                    Keyword: "{searchQuery.trim()}"
                  </span>
                )}
              </div>

              {(selectedCategory !== 'All' || searchQuery.trim() !== '') && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-white/40 hover:text-[#d4af37] transition-colors underline cursor-pointer"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${searchQuery}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard
                      project={project}
                      onSelectProject={onSelectProject}
                    />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <div className="p-12 text-center bg-[#0a0a0a] rounded-2xl border border-white/10 text-white/50 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-white/70">
                  No projects found matching <span className="text-[#d4af37]">"{searchQuery}"</span> {selectedCategory !== 'All' ? `in category "${selectedCategory}"` : ''}.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-[#d4af37] border border-white/10 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Reset Search & Filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
