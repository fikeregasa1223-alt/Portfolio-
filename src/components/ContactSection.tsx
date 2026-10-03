import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Linkedin, Github, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters long.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address (e.g., name@domain.com).';
        return undefined;
      case 'subject':
        if (value.trim() && value.trim().length < 3) return 'Subject should be at least 3 characters if provided.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message content is required.';
        if (value.trim().length < 10) return `Message must be at least 10 characters long (${value.trim().length}/10).`;
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    const nameErr = validateField('name', formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const subjectErr = validateField('subject', formData.subject);
    if (subjectErr) newErrors.subject = subjectErr;

    const messageErr = validateField('message', formData.message);
    if (messageErr) newErrors.message = messageErr;

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(newErrors).length > 0) {
      newErrors.general = 'Please correct the highlighted errors in the form before sending.';
      return false;
    }

    return true;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({
      ...prev,
      [field]: error,
      general: undefined
    }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({
        ...prev,
        [field]: error,
        general: undefined
      }));
    }
    if (submissionError) setSubmissionError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    // Simulate sending network request with feedback delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const copyValue = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Header */}
        <ScrollReveal direction="up" distance={30}>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black border border-[#d4af37]/30 text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-semibold">
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>05 / Contact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
              Get In <span className="italic text-[#d4af37]">Touch</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed uppercase tracking-wider">
              Open for full-time engineering positions, contract development, and tech collaborations. Reach out directly or dispatch a message below.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <ScrollReveal direction="right" distance={35} delay={0.1} className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 bg-[#0a0a0a] rounded-2xl border border-white/10 hover:border-[#d4af37]/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono font-bold text-white/40 tracking-widest">Email Address</span>
                  <p className="font-mono font-semibold text-white text-xs">{personalInfo.email}</p>
                </div>
              </div>
              <button
                onClick={() => copyValue(personalInfo.email, 'email')}
                className="p-2 bg-neutral-900 hover:bg-neutral-800 text-white/70 hover:text-white rounded-full border border-white/10 text-xs font-mono transition-colors"
                title="Copy Email"
              >
                {copiedKey === 'email' ? <span className="text-[#d4af37] font-bold text-[9px] uppercase">Copied!</span> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 bg-[#0a0a0a] rounded-2xl border border-white/10 hover:border-[#d4af37]/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono font-bold text-white/40 tracking-widest">Phone / WhatsApp</span>
                  <p className="font-mono font-semibold text-white text-xs">{personalInfo.phone}</p>
                </div>
              </div>
              <button
                onClick={() => copyValue(personalInfo.phone, 'phone')}
                className="p-2 bg-neutral-900 hover:bg-neutral-800 text-white/70 hover:text-white rounded-full border border-white/10 text-xs font-mono transition-colors"
                title="Copy Phone"
              >
                {copiedKey === 'phone' ? <span className="text-[#d4af37] font-bold text-[9px] uppercase">Copied!</span> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 bg-[#0a0a0a] rounded-2xl border border-white/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] uppercase font-mono font-bold text-white/40 tracking-widest">Location</span>
                <p className="font-mono font-semibold text-white text-xs">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="p-5 bg-[#0a0a0a] rounded-2xl border border-white/10 space-y-3">
              <span className="text-[10px] font-mono font-semibold text-white/40 uppercase tracking-widest">Online Profiles:</span>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-semibold text-white flex items-center justify-center gap-2 transition-all hover:text-[#d4af37]"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-semibold text-white flex items-center justify-center gap-2 transition-all hover:text-[#d4af37]"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Message Form */}
          <ScrollReveal direction="left" distance={35} delay={0.2} className="lg:col-span-7 bg-[#0a0a0a] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif text-white">Send Direct Message</h3>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">* Required fields</span>
                </div>

                {/* Top Validation Error Banner */}
                {errors.general && (
                  <div className="p-3 bg-red-950/40 border border-red-500/40 rounded-xl flex items-center gap-2 text-red-300 text-xs font-mono animate-shake">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errors.general}</span>
                  </div>
                )}

                {/* Top Submission Error Banner */}
                {submissionError && (
                  <div className="p-3 bg-red-950/40 border border-red-500/40 rounded-xl flex items-center gap-2 text-red-300 text-xs font-mono">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{submissionError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Your Full Name *</label>
                      {touched.name && !errors.name && (
                        <span className="text-[9px] font-mono text-emerald-400">Valid</span>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={`w-full px-4 py-2.5 bg-neutral-900 border rounded-xl text-xs text-white placeholder-white/20 focus:outline-none transition-colors ${
                        touched.name && errors.name
                          ? 'border-red-500/80 bg-red-950/10 focus:border-red-500'
                          : touched.name && !errors.name
                          ? 'border-emerald-500/40 focus:border-[#d4af37]'
                          : 'border-white/10 focus:border-[#d4af37]'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Your Email Address *</label>
                      {touched.email && !errors.email && (
                        <span className="text-[9px] font-mono text-emerald-400">Valid</span>
                      )}
                    </div>
                    <input
                      type="email"
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`w-full px-4 py-2.5 bg-neutral-900 border rounded-xl text-xs text-white placeholder-white/20 focus:outline-none transition-colors ${
                        touched.email && errors.email
                          ? 'border-red-500/80 bg-red-950/10 focus:border-red-500'
                          : touched.email && !errors.email
                          ? 'border-emerald-500/40 focus:border-[#d4af37]'
                          : 'border-white/10 focus:border-[#d4af37]'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Subject / Role Context</label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Developer Position / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    onBlur={() => handleBlur('subject')}
                    className={`w-full px-4 py-2.5 bg-neutral-900 border rounded-xl text-xs text-white placeholder-white/20 focus:outline-none transition-colors ${
                      touched.subject && errors.subject
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-white/10 focus:border-[#d4af37]'
                    }`}
                  />
                  {touched.subject && errors.subject && (
                    <p className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/50">Your Message *</label>
                    <span className={`text-[9px] font-mono ${formData.message.trim().length >= 10 ? 'text-white/40' : 'text-amber-400'}`}>
                      {formData.message.trim().length}/10 min chars
                    </span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Describe your project requirements, tech stack needs, or job opportunity..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={`w-full px-4 py-2.5 bg-neutral-900 border rounded-xl text-xs text-white placeholder-white/20 focus:outline-none transition-colors resize-none ${
                      touched.message && errors.message
                        ? 'border-red-500/80 bg-red-950/10 focus:border-red-500'
                        : touched.message && !errors.message
                        ? 'border-emerald-500/40 focus:border-[#d4af37]'
                        : 'border-white/10 focus:border-[#d4af37]'
                    }`}
                  ></textarea>
                  {touched.message && errors.message && (
                    <p className="text-[10px] text-red-400 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#d4af37] hover:bg-white text-black font-semibold text-[10px] uppercase tracking-[0.2em] rounded-full transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-[#d4af37]/20 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-black" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message to Fikadu</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 text-[#d4af37] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  <CheckCircle2 className="w-7 h-7 text-[#d4af37]" />
                </div>
                <div className="space-y-2">
                  <span className="px-3 py-1 bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 rounded-full font-mono text-[10px] uppercase tracking-widest inline-block">
                    Message Dispatched Successfully
                  </span>
                  <h4 className="text-2xl font-serif text-white">Thank You, {formData.name}!</h4>
                  <p className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
                    Your message regarding <span className="text-white font-semibold">"{formData.subject || 'General Inquiry'}"</span> has been logged into Fikadu's portfolio system. A response will be dispatched to <span className="text-[#d4af37] font-semibold">{formData.email}</span> shortly.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                      setErrors({});
                      setTouched({});
                    }}
                    className="px-6 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-[10px] uppercase tracking-widest font-semibold text-white rounded-full border border-white/10 transition-all flex items-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            )}
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

