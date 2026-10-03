import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Award, ExternalLink, GraduationCap, Code, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { personalInfo, projectsData, educationData, certificationsData, skillCategories } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative bg-white text-slate-900 rounded-2xl max-w-4xl w-full my-8 shadow-2xl overflow-hidden print:m-0 print:shadow-none print:w-full">
        
        {/* Modal Action Header (Hidden in Print) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-cyan-400">Official Resume Document</span>
            <span className="text-xs text-slate-400 font-mono">Fikadu_Regasa_CV.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-8 sm:p-12 space-y-6 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible font-sans text-slate-800">
          
          {/* Resume Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-200 pb-6">
            <div className="text-center sm:text-left space-y-2 flex-1">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
                FIKADU REGASA
              </h1>
              <p className="text-xs text-slate-600 font-medium flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <span>{personalInfo.location}</span>
                <span>•</span>
                <span>{personalInfo.phone}</span>
                <span>•</span>
                <span>{personalInfo.email}</span>
              </p>
              <p className="text-xs text-slate-600 font-mono flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <span>{personalInfo.linkedin}</span>
                <span>•</span>
                <span>{personalInfo.github}</span>
              </p>
            </div>

            {/* Mobile Scan & Download QR Code Card */}
            <div className="shrink-0 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3 text-left shadow-sm print:hidden">
              <div className="p-1.5 bg-white border border-slate-200 rounded-lg shadow-inner">
                <QRCodeSVG
                  value={typeof window !== 'undefined' ? window.location.href : 'https://github.com/fikeregasa'}
                  size={68}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#0f172a"
                />
              </div>
              <div className="space-y-1 max-w-[130px]">
                <div className="flex items-center gap-1 text-[10px] font-bold text-slate-900 uppercase tracking-wider">
                  <QrCode className="w-3 h-3 text-cyan-600" />
                  <span>Scan Resume</span>
                </div>
                <p className="text-[9px] text-slate-500 leading-tight">
                  Scan to view & download CV directly on mobile
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-1">
              <div className="flex justify-between items-baseline text-xs font-bold text-slate-900">
                <span>WERABE UNIVERSITY</span>
                <span>Werabe, Ethiopia</span>
              </div>
              <div className="flex justify-between items-baseline text-xs font-semibold text-slate-700">
                <span>B.Sc. in Information Technology, CGPA: 3.56/4.0 (Honors)</span>
                <span>Graduated 2026</span>
              </div>
              <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-1 pt-1">
                <li><span className="font-semibold text-slate-800">Coursework:</span> Data Structures & Algorithms, Database Systems, Software Engineering, Web Development, Mobile App Development, Computer Networking, Cybersecurity, Object-Oriented Programming, Operating Systems</li>
                <li><span className="font-semibold text-slate-800">Honors:</span> Dean's List (2024–2026), Academic Excellence Award</li>
                <li><span className="font-semibold text-slate-800">Leadership:</span> Project Team Lead for 6+ academic projects; organized campus tech workshops</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1">
              TECHNICAL SKILLS
            </h2>
            <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-1">
              <li><span className="font-semibold text-slate-800">Languages:</span> HTML5, CSS3, JavaScript (ES6), PHP, Java, Python, C++, VB.NET</li>
              <li><span className="font-semibold text-slate-800">Frameworks & Libraries:</span> React.js, Node.js, Express.js, Flask, Bootstrap, Tailwind CSS</li>
              <li><span className="font-semibold text-slate-800">Tools & Platforms:</span> Git, GitHub, VS Code, Android Studio, Figma, Postman, XAMPP, Firebase</li>
              <li><span className="font-semibold text-slate-800">Concepts & Methods:</span> RESTful APIs, JSON, AJAX, Responsive Design, MVC Architecture, Agile Methodology, Database Design, Version Control</li>
            </ul>
          </div>

          {/* Projects Section */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1">
              PROJECTS
            </h2>

            {projectsData.map((project) => (
              <div key={project.id} className="space-y-1">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-bold text-slate-900">{project.title.toUpperCase()} - {project.subtitle}</span>
                  <span className="font-semibold text-slate-700">{project.type} | {project.year}</span>
                </div>
                <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5">
                  {project.impactMetrics.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                  <li><span className="font-semibold text-slate-700">Tech Stack:</span> {project.techStack.join(', ')}</li>
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1 flex items-center justify-between">
              <span>CERTIFICATIONS</span>
              <span className="text-[10px] text-slate-500 font-mono font-normal">({certificationsData.length} VERIFIED CREDENTIALS)</span>
            </h2>
            <ul className="list-none text-[11px] text-slate-600 space-y-1.5">
              {certificationsData.map((c, idx) => (
                <li key={c.title} className="flex items-start gap-2">
                  <span className="font-mono text-[10px] font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 shrink-0">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="font-semibold text-slate-900">{c.title}</span> — {c.issuer} ({c.year})
                    {c.certNumber && (
                      <span className="ml-1 text-[10px] font-mono text-slate-500">[{c.certNumber}]</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Interests & Languages Section */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1">
              INTERESTS & LANGUAGES
            </h2>
            <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-1">
              <li><span className="font-semibold text-slate-800">Professional Skills:</span> Problem Solving, Team Collaboration, Project Management, Fast Learner, Critical Thinking, Adaptability, Communication</li>
              <li><span className="font-semibold text-slate-800">Languages:</span> Amharic (Native), Afaan Oromoo (Native), English (Professional Fluency)</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
