export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Mobile Apps' | 'Security & Web' | 'Desktop & Systems';
  type: 'Academic Project' | 'Personal Project';
  year: string;
  duration?: string;
  startDate?: string;
  endDate?: string;
  complexityLevel?: number;
  description: string;
  impactMetrics: string[];
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoType?: 'quiz' | 'voting' | 'elearning' | 'library' | 'school';
  featured: boolean;
  image: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; experience: string; iconName?: string }[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  cgpa: string;
  period: string;
  coursework: string[];
  honors: string[];
  leadership: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  certNumber?: string;
  verifyUrl?: string;
  skills: string[];
  badgeColor: string;
}

export interface ExperienceOrActivity {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  twitter?: string;
  portfolioUrl: string;
  bio: {
    en: string;
    am: string;
    om: string;
  };
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
}
