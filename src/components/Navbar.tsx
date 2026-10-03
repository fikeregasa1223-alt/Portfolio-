import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Download, Globe, Menu, X, Sun, Moon, Check, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  activeLanguage: 'en' | 'am' | 'om';
  onChangeLanguage: (lang: 'en' | 'am' | 'om') => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onOpenResume,
  activeLanguage,
  onChangeLanguage,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: 'en' | 'am' | 'om'; name: string; nativeName: string; flag: string }[] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'am', name: 'Amharic', nativeName: 'አማርኛ', flag: '🇪🇹' },
    { code: 'om', name: 'Afaan Oromoo', nativeName: 'Afaan Oromoo', flag: '🇪🇹' },
  ];

  const currentLang = languages.find((l) => l.code === activeLanguage) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-4'
          : 'bg-[#050505]/60 backdrop-blur-sm py-6 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full border border-[#d4af37]/40 bg-black flex items-center justify-center text-[#d4af37] font-serif font-bold text-sm shadow-[0_0_12px_rgba(212,175,55,0.15)] group-hover:border-[#d4af37] transition-all">
            FR
          </div>
          <div>
            <div className="text-lg font-serif tracking-tighter italic text-white group-hover:text-[#d4af37] transition-colors flex items-center gap-2">
              FIKADU REGASA.
              <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37] animate-pulse" title="Available for hire"></span>
            </div>
            <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-mono">Software Engineer</p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8 bg-black/40 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/50 hover:text-[#d4af37] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 hover:bg-neutral-900 text-[10px] uppercase tracking-wider font-semibold text-white/80 hover:text-white rounded-full border border-white/10 hover:border-[#d4af37]/40 transition-all cursor-pointer shadow-sm"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-amber-500" />
                <span>Dark</span>
              </>
            )}
          </button>

          {/* Enhanced Language Dropdown Selector */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-black/60 hover:bg-neutral-900 text-[10px] uppercase tracking-wider font-semibold text-white/80 hover:text-white rounded-full border border-white/10 hover:border-[#d4af37]/40 transition-all cursor-pointer shadow-sm group"
              title="Select Interface Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#d4af37] group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm leading-none">{currentLang.flag}</span>
              <span className="font-mono font-bold text-[#d4af37]">{currentLang.code.toUpperCase()}</span>
              <ChevronDown
                className={`w-3 h-3 text-white/40 group-hover:text-white transition-transform duration-200 ${
                  langDropdownOpen ? 'rotate-180 text-[#d4af37]' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                <div className="px-3 py-1.5 text-[9px] uppercase tracking-widest font-mono text-white/40 border-b border-white/10 mb-1 flex items-center justify-between">
                  <span>Language / ቋንቋ</span>
                  <span className="text-[#d4af37]">3 Languages</span>
                </div>
                <div className="space-y-1">
                  {languages.map((lang) => {
                    const isSelected = activeLanguage === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onChangeLanguage(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? 'bg-[#d4af37]/20 text-[#d4af37] font-bold border border-[#d4af37]/40 shadow-sm'
                            : 'text-white/70 hover:bg-white/10 hover:text-white border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base leading-none">{lang.flag}</span>
                          <div className="flex flex-col">
                            <span className="text-xs font-semibold leading-tight">{lang.nativeName}</span>
                            <span className="text-[9px] text-white/40 font-mono">{lang.name}</span>
                          </div>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Terminal Button */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-black/60 hover:bg-neutral-900 text-[10px] uppercase tracking-widest font-mono text-[#d4af37] rounded-full border border-[#d4af37]/30 transition-all hover:border-[#d4af37]"
            title="Launch Interactive Developer CLI"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>CLI</span>
          </button>

          {/* Resume Download */}
          <button
            onClick={onOpenResume}
            className="px-5 py-1.5 border border-white/20 rounded-full text-[10px] uppercase tracking-widest font-semibold text-white hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger & Control Buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 bg-black text-white/80 hover:text-white rounded-full border border-white/10"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-400" />
            )}
          </button>
          <button
            onClick={onOpenTerminal}
            className="p-2 bg-black text-[#d4af37] rounded-full border border-[#d4af37]/40"
            title="CLI Mode"
          >
            <TerminalIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-black text-white/70 hover:text-white rounded-full border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/95 border-b border-white/10 backdrop-blur-2xl px-6 pt-4 pb-6 mt-3 space-y-4">
          <div className="flex flex-col gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-white/50">Preferences:</span>
              <button
                onClick={onToggleTheme}
                className="px-2.5 py-1 text-[10px] font-mono rounded-full border border-white/10 text-white flex items-center gap-1"
              >
                {theme === 'dark' ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3 text-amber-500" />}
                <span className="uppercase">{theme} Mode</span>
              </button>
            </div>

            {/* Mobile Language Selector Card */}
            <div className="bg-black/80 border border-white/10 rounded-2xl p-3 space-y-2">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="w-full flex items-center justify-between text-xs text-white"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="text-sm">{currentLang.flag}</span>
                  <span className="font-semibold">{currentLang.nativeName}</span>
                  <span className="text-[10px] font-mono text-white/40">({currentLang.name})</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform ${mobileLangOpen ? 'rotate-180 text-[#d4af37]' : ''}`} />
              </button>

              {mobileLangOpen && (
                <div className="pt-2 border-t border-white/10 space-y-1">
                  {languages.map((lang) => {
                    const isSelected = activeLanguage === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          onChangeLanguage(lang.code);
                          setMobileLangOpen(false);
                        }}
                        className={`w-full px-3 py-2 rounded-xl flex items-center justify-between text-xs transition-all ${
                          isSelected
                            ? 'bg-[#d4af37]/20 text-[#d4af37] font-bold border border-[#d4af37]/40'
                            : 'text-white/70 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.nativeName}</span>
                          <span className="text-[10px] text-white/40 font-mono">({lang.name})</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest text-white/70 hover:text-[#d4af37] py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-xs uppercase tracking-widest font-semibold rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

