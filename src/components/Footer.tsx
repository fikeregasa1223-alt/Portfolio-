import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Send, CheckCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'subscribed' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setStatus('error');
      setErrorMsg('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    // Simulate API newsletter registration delay
    setTimeout(() => {
      setStatus('subscribed');
      setEmail('');
    }, 700);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: personalInfo.github,
      icon: <Github className="w-4 h-4" />,
      hoverBg: 'hover:bg-neutral-800 hover:border-white/30 hover:text-white',
    },
    {
      name: 'LinkedIn',
      href: personalInfo.linkedin,
      icon: <Linkedin className="w-4 h-4" />,
      hoverBg: 'hover:bg-[#0077b5]/20 hover:border-[#0077b5] hover:text-[#0077b5]',
    },
    {
      name: 'Twitter / X',
      href: personalInfo.twitter || 'https://x.com/fikeregasa1223',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      hoverBg: 'hover:bg-white/10 hover:border-white/50 hover:text-white',
    },
    {
      name: 'Email Direct',
      href: `mailto:${personalInfo.email}`,
      icon: <Mail className="w-4 h-4" />,
      hoverBg: 'hover:bg-[#d4af37]/20 hover:border-[#d4af37] hover:text-[#d4af37]',
    },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/10 py-12 text-white/50 text-xs relative">
      <ScrollReveal direction="up" distance={20}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
          
          {/* Top Newsletter Row */}
          <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-md">
            <div className="space-y-1 text-center lg:text-left max-w-xl">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#d4af37] text-[10px] font-mono uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Stay Connected</span>
              </div>
              <h4 className="text-lg font-serif text-white">Subscribe to Project Updates</h4>
              <p className="text-xs text-white/50">
                Receive occasional emails about new open-source projects, engineering articles, and software innovations. No spam ever.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[300px]">
              {status === 'subscribed' ? (
                <div className="p-3 bg-[#d4af37]/10 border border-[#d4af37]/40 rounded-xl text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[#d4af37] font-semibold text-xs">
                    <CheckCircle className="w-4 h-4" />
                    <span>Subscribed Successfully!</span>
                  </div>
                  <p className="text-[10px] text-white/60">Thank you for joining. You will receive future project releases.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-[9px] font-mono text-[#d4af37] underline uppercase tracking-widest mt-1 cursor-pointer"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="Enter your email address..."
                        className="w-full pl-9 pr-3 py-2 bg-neutral-900 border border-white/10 focus:border-[#d4af37] rounded-xl text-xs text-white placeholder-white/30 focus:outline-none transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="px-4 py-2 bg-[#d4af37] hover:bg-white text-black font-semibold text-[10px] uppercase tracking-wider rounded-xl transition-all flex items-center gap-1.5 shrink-0 cursor-pointer disabled:opacity-50"
                    >
                      <span>{status === 'submitting' ? 'Submitting...' : 'Subscribe'}</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="text-[10px] text-rose-400 font-mono pl-1">{errorMsg}</p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* Bottom Copyright & Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 border-t border-white/5">
            
            {/* Brand Copyright */}
            <div className="space-y-1.5 text-center md:text-left">
              <p className="font-serif text-xl font-light text-white tracking-wide">
                FIKADU <span className="italic text-[#d4af37]">REGASA</span>
              </p>
              <p className="text-white/40 text-[10px] uppercase font-mono tracking-widest">
                Full-Stack Software Engineer • Werabe University B.Sc. IT Honors Graduate
              </p>
              <p className="text-[10px] text-white/30 font-mono tracking-widest pt-1">
                © {new Date().getFullYear()} Fikadu Regasa. Built with React & Tailwind CSS. All rights reserved.
              </p>
            </div>

            {/* Social Media Links & Back To Top */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
              <div className="flex items-center gap-2 p-1.5 bg-neutral-950 rounded-full border border-white/10">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-2.5 bg-neutral-900 text-white/70 rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.hoverBg} group`}
                    title={item.name}
                  >
                    {item.icon}
                    {/* Tooltip */}
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-[#d4af37] text-[9px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-[#d4af37]/30 shadow-xl">
                      {item.name}
                    </span>
                  </a>
                ))}
              </div>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-[#d4af37] hover:bg-white text-black font-semibold text-[10px] uppercase tracking-widest rounded-full shadow-lg shadow-[#d4af37]/10 hover:shadow-[#d4af37]/30 transition-all cursor-pointer group hover:-translate-y-0.5"
                title="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Top</span>
              </button>
            </div>

          </div>

        </div>
      </ScrollReveal>
    </footer>
  );
};

