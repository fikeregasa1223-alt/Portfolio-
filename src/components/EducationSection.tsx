import React from 'react';
import { GraduationCap, Award, BookOpen, UserCheck, CheckCircle2, MapPin } from 'lucide-react';
import { educationData, extracurriculars } from '../data/portfolioData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#050505] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Section Title */}
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-[#d4af37]/30 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <GraduationCap className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>03 / Background</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Academic <span className="italic text-[#d4af37]">Background & Leadership</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed uppercase tracking-wider">
              Graduated with Honors from Werabe University with top CGPA 3.56 / 4.0, Dean's List recognitions, and active student tech leadership.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main University Card */}
          <ScrollReveal direction="right" distance={35} delay={0.1} className="lg:col-span-7">
            <div className="bg-[#0a0a0a] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6 shadow-2xl">
              <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest font-mono font-semibold text-[#d4af37] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {educationData.institution} • {educationData.location}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white">{educationData.degree}</h3>
                </div>
                <div className="px-4 py-2 bg-[#d4af37]/10 border border-[#d4af37]/40 rounded-xl text-[#d4af37] text-center">
                  <div className="text-[9px] font-bold uppercase tracking-widest">CGPA</div>
                  <div className="text-xl font-serif font-bold">{educationData.cgpa}</div>
                </div>
              </div>

              {/* Honors & Awards */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono font-bold text-[#d4af37] uppercase tracking-widest flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  Honors & Academic Awards
                </h4>
                <div className="space-y-2">
                  {educationData.honors.map((honor, idx) => (
                    <div key={idx} className="p-3 bg-neutral-900/60 border border-white/5 rounded-xl flex items-center gap-2.5 text-xs text-white/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <span>{honor}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono font-bold text-[#d4af37] uppercase tracking-widest flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Core IT Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-neutral-900 border border-white/10 rounded-full text-[10px] uppercase tracking-wider font-mono text-white/70"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono font-bold text-[#d4af37] uppercase tracking-widest flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4" />
                  Leadership & Campus Impact
                </h4>
                <ul className="space-y-2 text-xs text-white/70">
                  {educationData.leadership.map((lead, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-neutral-900/50 p-3 rounded-xl border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0 shadow-[0_0_6px_#d4af37]"></span>
                      <span>{lead}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Extracurriculars & Hackathons */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="left" distance={25} delay={0.1}>
              <h3 className="text-xl font-serif text-white flex items-center gap-2">
                <span>Extracurriculars & Hackathons</span>
              </h3>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.12} className="space-y-4">
              {extracurriculars.map((act, idx) => (
                <StaggerItem key={idx} direction="left" distance={25}>
                  <div className="bg-[#0a0a0a] p-5 rounded-2xl border border-white/10 space-y-3 hover:border-[#d4af37]/40 transition-all shadow-xl group">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#d4af37] font-semibold uppercase tracking-wider text-[10px]">{act.organization}</span>
                      <span className="text-white/40 font-mono text-[10px]">{act.period}</span>
                    </div>
                    <h4 className="font-serif text-white text-base group-hover:text-[#d4af37] transition-colors">{act.role}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{act.description}</p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {act.highlights.map((h, hIdx) => (
                        <span key={hIdx} className="px-2.5 py-1 bg-neutral-900 text-white/60 text-[9px] font-mono uppercase tracking-wider rounded-full border border-white/5">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>

      </div>
    </section>
  );
};
