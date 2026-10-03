import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Sparkles,
  Award,
  ChevronRight,
  Code2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, profilePictureUrl } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  activeLanguage: 'en' | 'am' | 'om';
}

const ROLES = [
  'Full-Stack Software Engineer',
  'Android Mobile Developer',
  'PHP & MySQL Specialist',
  'Python & Flask Developer',
  'IT Honors Graduate (3.56/4.0)'
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume, activeLanguage }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedContact(label);
    setTimeout(() => setCopiedContact(null), 2000);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#050505]">
      {/* Background ambient dark lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d4af37]/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            
            {/* Honors Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#d4af37]/30 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Werabe University IT Honors Graduate (CGPA 3.56 / 4.0)</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight leading-[0.95] text-white">
                Hi, I'm <br/>
                <span className="italic text-[#d4af37]">Fikadu Regasa.</span>
              </h1>
              
              {/* Dynamic Role Ticker */}
              <div className="h-8 flex items-center">
                <span className="text-sm sm:text-base font-mono text-white/70 flex items-center gap-2 uppercase tracking-widest">
                  <Code2 className="w-4 h-4 text-[#d4af37]" />
                  <span className="border-r-2 border-[#d4af37] pr-2 animate-pulse text-[#d4af37] font-semibold">
                    {ROLES[roleIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Language Adaptive Bio */}
            <p className="text-sm sm:text-base text-white/50 leading-relaxed font-sans max-w-xl">
              {personalInfo.bio[activeLanguage]}
            </p>

            {/* Location & Contact Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-white/60">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900/80 rounded-full border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="uppercase tracking-wider font-mono text-[10px]">Adaba, Oromia, Ethiopia</span>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900/80 hover:bg-neutral-800 rounded-full border border-white/10 transition-colors text-white/70 hover:text-white"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="font-mono text-[10px]">{personalInfo.email}</span>
                {copiedContact === 'email' && <span className="text-[#d4af37] text-[9px] font-mono ml-1 uppercase">Copied!</span>}
              </button>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900/80 hover:bg-neutral-800 rounded-full border border-white/10 transition-colors text-white/70 hover:text-white"
                title="Click to copy phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="font-mono text-[10px]">{personalInfo.phone}</span>
                {copiedContact === 'phone' && <span className="text-[#d4af37] text-[9px] font-mono ml-1 uppercase">Copied!</span>}
              </button>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-white hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <span>Selected Works</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 border border-[#d4af37]/40 text-[#d4af37] rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold hover:bg-[#d4af37] hover:text-black transition-all flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </button>

              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white/70 hover:text-[#d4af37] rounded-full transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-white/70 hover:text-[#d4af37] rounded-full transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#0a0a0a] p-4 rounded-xl border border-white/5">
                  <div className="text-2xl sm:text-3xl font-serif text-[#d4af37]">{stat.value}</div>
                  <div className="text-[10px] font-semibold text-white/80 uppercase tracking-wider mt-1">{stat.label}</div>
                  <div className="text-[9px] text-white/40 font-mono mt-0.5">{stat.subtext}</div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column - Circular Profile Frame & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Outer Decorative Ambient Gold Ring */}
            <div className="relative group flex flex-col items-center">
              
              {/* Glowing aura behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#d4af37]/20 via-amber-500/10 to-transparent blur-2xl group-hover:blur-3xl transition-all duration-700 pointer-events-none"></div>

              {/* High-Quality Circular Frame */}
              <div className="relative p-2 rounded-full bg-gradient-to-tr from-[#d4af37]/60 via-amber-400/20 to-white/10 shadow-[0_0_50px_rgba(212,175,55,0.25)] group-hover:shadow-[0_0_65px_rgba(212,175,55,0.4)] transition-all duration-700">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[#d4af37]/60 bg-neutral-950 ring-4 ring-black/80 ring-offset-2 ring-offset-[#d4af37]/20">
                  <motion.img
                    src={profilePictureUrl}
                    alt="Fikadu Regasa"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient Vignette inside Circle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Availability Pill Attached to Circle */}
                <div className="absolute top-4 -right-2 sm:right-2 bg-black/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#d4af37]/50 text-[10px] uppercase tracking-widest font-semibold text-[#d4af37] flex items-center gap-2 shadow-2xl">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37] animate-pulse"></span>
                  <span>Open To Roles</span>
                </div>

                {/* Floating Honors Badge Attached to Bottom of Circle */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-black/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#d4af37]/40 shadow-2xl flex items-center gap-2.5 whitespace-nowrap z-10">
                  <div className="w-7 h-7 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-serif font-semibold text-white flex items-center gap-1.5">
                      <span>Fikadu Regasa</span>
                      <span className="px-1.5 py-0.2 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] text-[9px] font-mono font-bold">CGPA 3.56</span>
                    </div>
                    <p className="text-[9px] text-white/50 font-mono uppercase tracking-wider">
                      Werabe Univ. IT Honors
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech Stack Badges Row beneath Circular Frame */}
              <div className="mt-8 grid grid-cols-4 gap-2 w-full max-w-sm text-center text-[9px] uppercase tracking-wider font-mono text-white/60">
                <div className="p-2 rounded-xl bg-[#0a0a0a] border border-white/10 group-hover:border-[#d4af37]/40 transition-colors">PHP/MySQL</div>
                <div className="p-2 rounded-xl bg-[#0a0a0a] border border-white/10 group-hover:border-[#d4af37]/40 transition-colors">Java/Android</div>
                <div className="p-2 rounded-xl bg-[#0a0a0a] border border-white/10 group-hover:border-[#d4af37]/40 transition-colors">React.js</div>
                <div className="p-2 rounded-xl bg-[#0a0a0a] border border-white/10 group-hover:border-[#d4af37]/40 transition-colors">Python/Flask</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
