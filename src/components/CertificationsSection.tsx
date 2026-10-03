import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#050505] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Section Title */}
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-[#d4af37]/30 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>04 / Credentials ({certificationsData.length} Total)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Industry & Platform <span className="italic text-[#d4af37]">Certifications</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed uppercase tracking-wider">
              Verified credentials from EthioCoders Initiative (Udacity), Simplilearn, freeCodeCamp, and Udemy.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <StaggerItem key={cert.title}>
              <div className="bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-2xl h-full relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shadow-lg">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#d4af37]">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold text-white/40 uppercase block">{cert.year}</span>
                      {cert.certNumber && (
                        <span className="text-[9px] font-mono text-white/30 block tracking-wider">{cert.certNumber}</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-semibold text-[#d4af37] uppercase tracking-widest">
                      {cert.issuer}
                    </span>
                    <h4 className="text-lg font-serif text-white group-hover:text-[#d4af37] transition-colors">
                      {cert.title}
                    </h4>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-neutral-900 text-white/60 rounded-full text-[9px] font-mono uppercase tracking-wider border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Badge */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/40">
                  <span className="flex items-center gap-1.5 text-[#d4af37] font-semibold text-[10px] uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Verified</span>
                  </span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-white/70 hover:text-[#d4af37] font-mono text-[10px] uppercase tracking-widest transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
