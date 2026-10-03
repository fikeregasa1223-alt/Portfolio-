import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2, Send, CornerDownLeft } from 'lucide-react';
import { personalInfo, projectsData, skillCategories, educationData, certificationsData } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  cmd: string;
  output: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: 'welcome',
      output: (
        <div className="space-y-1 text-emerald-400">
          <p className="font-bold">Welcome to Fikadu Regasa's Developer CLI v2.4.0</p>
          <p className="text-slate-400 text-xs">
            Type <span className="text-cyan-300 font-bold">'help'</span> to view available commands.
          </p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    let output: React.ReactNode = '';

    switch (cleanCmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-300 font-bold">Available CLI Commands:</p>
            <p><span className="text-emerald-400 font-bold">about</span> - Brief executive summary & background</p>
            <p><span className="text-emerald-400 font-bold">projects</span> - List software projects & impact metrics</p>
            <p><span className="text-emerald-400 font-bold">skills</span> - Print technical stack & languages</p>
            <p><span className="text-emerald-400 font-bold">education</span> - Display Werabe University degree & CGPA</p>
            <p><span className="text-emerald-400 font-bold">certs</span> - List verified certifications & credentials</p>
            <p><span className="text-emerald-400 font-bold">contact</span> - Show email, phone, location & socials</p>
            <p><span className="text-emerald-400 font-bold">sudo hire</span> - Direct contract / job inquiry command</p>
            <p><span className="text-emerald-400 font-bold">clear</span> - Clear terminal buffer</p>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="text-xs space-y-1 font-mono text-slate-300">
            <p className="text-white font-bold">{personalInfo.name} - {personalInfo.title}</p>
            <p>{personalInfo.bio.en}</p>
            <p className="text-cyan-400">Location: {personalInfo.location}</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">Portfolio Projects Showcase:</p>
            {projectsData.map((p, idx) => (
              <div key={p.id} className="p-2 bg-slate-900 rounded border border-slate-800">
                <span className="text-emerald-400 font-bold">{idx + 1}. {p.title}</span> ({p.category})
                <p className="text-slate-400 text-[11px]">{p.description}</p>
                <p className="text-amber-300 text-[10px]">Impact: {p.impactMetrics[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-xs font-mono">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <p className="text-cyan-300 font-bold">{cat.title}:</p>
                <p className="text-slate-300">{cat.skills.map((s) => s.name).join(' • ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-amber-300 font-bold">{educationData.institution} ({educationData.location})</p>
            <p>{educationData.degree} — <span className="text-emerald-400 font-bold">CGPA {educationData.cgpa}</span></p>
            <p>Period: {educationData.period}</p>
            <p className="text-slate-400">Honors: {educationData.honors.join(', ')}</p>
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">Verified Certifications & Credentials:</p>
            {certificationsData.map((c, idx) => (
              <div key={c.title} className="p-2 bg-slate-900 rounded border border-slate-800">
                <span className="text-emerald-400 font-bold">{idx + 1}. {c.title}</span> — <span className="text-amber-300">{c.issuer}</span> ({c.year})
                <p className="text-slate-400 text-[10px]">Skills: {c.skills.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p><span className="text-cyan-400 font-bold">Email:</span> {personalInfo.email}</p>
            <p><span className="text-cyan-400 font-bold">Phone:</span> {personalInfo.phone}</p>
            <p><span className="text-cyan-400 font-bold">LinkedIn:</span> {personalInfo.linkedin}</p>
            <p><span className="text-cyan-400 font-bold">GitHub:</span> {personalInfo.github}</p>
          </div>
        );
        break;

      case 'sudo hire':
        output = (
          <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-lg text-xs font-mono space-y-1 text-emerald-300">
            <p className="font-bold text-sm">🚀 [SUDO GRANTED]: Fast-Track Candidate Access</p>
            <p>Fikadu Regasa is ready to contribute to your engineering team!</p>
            <p>Direct Email: <a href={`mailto:${personalInfo.email}`} className="underline font-bold text-white">{personalInfo.email}</a></p>
            <p>Direct Phone / WhatsApp: <span className="font-bold text-white">{personalInfo.phone}</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs font-mono">
            command not found: '{cleanCmd}'. Type <span className="text-cyan-300 font-bold">'help'</span> for list of commands.
          </p>
        );
        break;
    }

    setHistory([...history, { cmd: inputVal, output }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-950 border border-emerald-500/30 rounded-2xl max-w-2xl w-full h-[520px] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Terminal Titlebar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block cursor-pointer" onClick={onClose}></span>
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
            </div>
            <span className="text-xs font-mono text-slate-300 font-bold ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              fikadu@developer-portfolio:~
            </span>
          </div>

          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Body Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.cmd !== 'welcome' && (
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">fikadu@portfolio:~$</span>
                  <span className="text-white font-semibold">{item.cmd}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Prompt Input Bar */}
        <form onSubmit={handleCommandSubmit} className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-xs font-bold shrink-0">
            fikadu@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or 'sudo hire'..."
            className="flex-1 bg-transparent border-none text-xs text-white font-mono focus:outline-none placeholder-slate-600"
          />
          <button type="submit" className="text-emerald-400 hover:text-emerald-300">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
