import React, { useState } from 'react';
import { Code2, Layers, Database, ShieldCheck, CheckCircle2, Search, Cpu, Sparkles, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { skillCategories } from '../data/portfolioData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchSkill, setSearchSkill] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#d4af37]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#d4af37]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#d4af37]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#d4af37]" />;
    }
  };

  const getProficiencyLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 85) return 'Advanced';
    return 'Proficient';
  };

  const filteredSkills = skillCategories[activeTab].skills.filter((s) =>
    s.name.toLowerCase().includes(searchSkill.toLowerCase())
  );

  const categoryAverage = Math.round(
    skillCategories[activeTab].skills.reduce((acc, curr) => acc + curr.level, 0) /
      skillCategories[activeTab].skills.length
  );

  return (
    <section id="skills" className="py-24 bg-[#050505] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-[#d4af37]/30 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <Code2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>02 / Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Technical <span className="italic text-[#d4af37]">Skills & Expertise</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed uppercase tracking-wider">
              Quantified proficiency bars across backend architecture, mobile development, database optimization, and core software engineering concepts.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Buttons & Search */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {skillCategories.map((cat, idx) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-semibold transition-all ${
                    activeTab === idx
                      ? 'bg-[#d4af37] text-black border border-[#d4af37] shadow-lg font-bold'
                      : 'bg-neutral-900 text-white/50 hover:text-white border border-white/10'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.title}</span>
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-60">
              <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                placeholder="Search skill..."
                value={searchSkill}
                onChange={(e) => setSearchSkill(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-neutral-900 border border-white/10 rounded-full text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Category Overall Average Bar */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="p-4 bg-neutral-900/60 border border-white/10 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {skillCategories[activeTab].title} domain mastery
                </h4>
                <p className="text-[10px] text-white/50">
                  Calculated mean proficiency across {skillCategories[activeTab].skills.length} core technologies
                </p>
              </div>
            </div>

            <div className="w-full sm:w-64 space-y-1.5">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-white/60">Average Level</span>
                <span className="text-[#d4af37] font-bold">{categoryAverage}% Mastery</span>
              </div>
              <div className="w-full h-2 bg-black rounded-full overflow-hidden border border-white/10 p-0.5">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 to-[#d4af37] rounded-full shadow-[0_0_10px_#d4af37]"
                  initial={{ width: 0 }}
                  animate={{ width: `${categoryAverage}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skill Grid with Visual Proficiency Bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${searchSkill}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSkills.map((skill) => {
                const tier = getProficiencyLabel(skill.level);
                return (
                  <StaggerItem key={skill.name}>
                    <div className="bg-[#0a0a0a] p-5 rounded-2xl border border-white/10 hover:border-[#d4af37]/50 transition-all space-y-3.5 group shadow-xl hover:shadow-[#d4af37]/5">
                      
                      {/* Skill Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                            <h4 className="font-semibold text-xs text-white group-hover:text-[#d4af37] transition-colors">
                              {skill.name}
                            </h4>
                          </div>
                          <span className="text-[10px] font-mono text-white/40 block pl-6">
                            Exp: {skill.experience}
                          </span>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-xs font-mono font-bold text-[#d4af37] block">
                            {skill.level}%
                          </span>
                          <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border ${
                            tier === 'Expert'
                              ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                              : tier === 'Advanced'
                              ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
                              : 'bg-slate-500/10 border-slate-500/30 text-slate-300'
                          }`}>
                            {tier}
                          </span>
                        </div>
                      </div>

                      {/* Visual Proficiency Bar */}
                      <div className="space-y-1">
                        <div className="relative w-full h-2.5 bg-neutral-900 rounded-full overflow-hidden border border-white/10 p-0.5">
                          <motion.div
                            className="h-full bg-gradient-to-r from-amber-600 via-[#d4af37] to-amber-300 rounded-full shadow-[0_0_10px_#d4af37]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                          />
                        </div>

                        {/* Step Marker Indicators */}
                        <div className="flex justify-between text-[8px] font-mono text-white/20 pt-0.5">
                          <span>25%</span>
                          <span>50%</span>
                          <span>75%</span>
                          <span>100%</span>
                        </div>
                      </div>

                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
