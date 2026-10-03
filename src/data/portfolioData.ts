import { PersonalInfo, Project, SkillCategory, Education, Certification, ExperienceOrActivity } from '../types';
import profileImg from '../assets/images/fikadu_profile_photo_1786096544350.jpg';

export const personalInfo: PersonalInfo = {
  name: 'Fikadu Regasa',
  title: 'Full-Stack Software Engineer & Mobile App Developer',
  location: 'Adaba, Oromia, Ethiopia',
  email: 'fikeregas1223@gmail.com',
  phone: '+251-927-218-651',
  linkedin: 'https://linkedin.com/in/fikeregasa1223',
  github: 'https://github.com/fikeregasa1223-alt',
  twitter: 'https://x.com/fikeregasa1223',
  portfolioUrl: 'https://professional-por.lovable.app',
  bio: {
    en: 'High-achieving Information Technology Honors Graduate (CGPA 3.56/4.0) from Werabe University. Passionate about building high-impact full-stack web solutions, scalable Android mobile applications, and secure database systems that solve real-world community and business challenges.',
    am: 'ከወራቤ ዩኒቨርሲቲ በኢንፎርሜሽን ቴክኖሎጂ በከፍተኛ ማዕረግ (CGPA 3.56/4.0) የተመረቀ የሶፍትዌር መሐንዲስ። ቀልጣፋ የድር መተግበሪያዎችን፣ የአንድሮይድ ሞባይል መተግበሪያዎችን እና ደህንነታቸው የተጠበቀ የዳታቤዝ ሲስተሞችን በመገንባት ላይ ያተኮረ።',
    om: 'Eebbifamaa Saayinsii Odeeffannoo Yuunivarsiitii Waraabetti qabxii olaanaadhaan (CGPA 3.56/4.0) eebbifame. Appilikeeshinoota Weebii, Androoyidii fi Sirna Dootaabesiis amansiisaa uumuuf kutannoodhaan kan hojjetu.'
  },
  stats: [
    { label: 'Academic CGPA', value: '3.56 / 4.0', subtext: 'Honors Degree' },
    { label: 'Projects Built', value: '7+', subtext: 'Full-Stack, Mobile & Systems' },
    { label: 'Play Store Downloads', value: '100+', subtext: 'CapitalQuiz App' },
    { label: 'Certifications', value: '5', subtext: 'Google, Cisco, freeCodeCamp' }
  ]
};

export const profilePictureUrl = profileImg;

export const projectsData: Project[] = [
  {
    id: 'capitalquiz-app',
    title: 'CapitalQuiz App',
    subtitle: 'Interactive Android Mobile Quiz Application',
    category: 'Mobile Apps',
    type: 'Personal Project',
    year: '2025',
    startDate: 'Jan 2025',
    endDate: 'Mar 2025',
    duration: '3 Months (Jan – Mar 2025)',
    complexityLevel: 88,
    description: 'An interactive mobile quiz app featuring 500+ curated questions across 8 categories, equipped with real-time Firebase authentication, live leaderboards, and progress tracking.',
    impactMetrics: [
      '100+ Active Downloads on Google Play Store',
      '4.5 / 5.0 Star User Rating',
      '500+ Curated Questions across 8 Categories',
      'Real-Time Leaderboard Synchronization'
    ],
    keyFeatures: [
      'Firebase Authentication & Secure User Profiles',
      'Real-Time Leaderboard with Global Rankings',
      'Gamified UI with Instant Score Feedback & Lifelines',
      'Category Selection (Tech, History, Geography, Science)',
      'Offline Question Caching & Progress Saving'
    ],
    techStack: ['Java', 'Android Studio', 'Firebase Realtime DB', 'Firebase Auth', 'JSON'],
    githubUrl: 'https://github.com/fikeregasa1223-alt/CapitalQuiz-Android',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.fikadu.capitalquiz',
    demoType: 'quiz',
    featured: true,
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'online-learning-system',
    title: 'Online Learning System',
    subtitle: 'Full-Stack E-Learning Platform',
    category: 'Full-Stack',
    type: 'Academic Project',
    year: '2025',
    startDate: 'Oct 2024',
    endDate: 'Feb 2025',
    duration: '5 Months (Oct 2024 – Feb 2025)',
    complexityLevel: 94,
    description: 'A comprehensive full-stack online learning management web platform enabling course enrollments, video streaming lectures, interactive quizzes, and real-time student progress tracking.',
    impactMetrics: [
      '500+ Active Users Simulated',
      '60% Administrative Workload Reduction',
      '100% Mobile & Desktop Responsive'
    ],
    keyFeatures: [
      'Role-Based Access Control (Admin, Instructor, Student)',
      'Course Enrollment & Video Lecture Player',
      'Automated Quiz Scoring & Certificate Generation',
      'Real-Time Student Analytics Dashboard',
      'Secure PHP/MySQL Data Architecture'
    ],
    techStack: ['PHP', 'MySQL', 'JavaScript (ES6)', 'Bootstrap', 'HTML5/CSS3', 'AJAX'],
    githubUrl: 'https://github.com/fikeregasa1223-alt/Online-Learning-System',
    liveUrl: 'https://learning-demo.fikadu-portfolio.dev',
    demoType: 'elearning',
    featured: true,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'voting-system',
    title: 'Secure Voting System',
    subtitle: 'Encrypted Online Voting Platform',
    category: 'Security & Web',
    type: 'Academic Project',
    year: '2025',
    startDate: 'Feb 2025',
    endDate: 'Apr 2025',
    duration: '3 Months (Feb – Apr 2025)',
    complexityLevel: 90,
    description: 'An encrypted online voting system engineered with Python and Flask, utilizing OAuth authentication, cryptographic token verification, and real-time result visualization to guarantee election integrity.',
    impactMetrics: [
      '200+ Concurrent Simulated Voters',
      '0 Security Breaches in Penetration Tests',
      '100% One-Person-One-Vote Integrity'
    ],
    keyFeatures: [
      'OAuth-Based Voter Identity Verification',
      'End-to-End Encrypted Vote Ballots',
      'Real-Time Live Election Results Charts',
      'Audit Trail Logs & Anti-Double-Voting Guard',
      'Flask RESTful API Backend'
    ],
    techStack: ['Python', 'Flask', 'OAuth 2.0', 'Cryptography', 'JavaScript', 'Chart.js'],
    githubUrl: 'https://github.com/fikeregasa1223-alt/Encrypted-Voting-System-Flask',
    liveUrl: 'https://voting-demo.fikadu-portfolio.dev',
    demoType: 'voting',
    featured: true,
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'school-management-system',
    title: 'School Management System',
    subtitle: 'Web-Based Educational Administration',
    category: 'Full-Stack',
    type: 'Academic Project',
    year: '2025',
    startDate: 'Nov 2024',
    endDate: 'Jan 2025',
    duration: '3 Months (Nov 2024 – Jan 2025)',
    complexityLevel: 86,
    description: 'An all-in-one web portal managing student records, attendance tracking, gradebook calculations, fee collection, and automated SMS alerts for parent-teacher communication.',
    impactMetrics: [
      'Saved 10+ Hours Weekly for Teachers',
      'Automated Gradebook Calculation for 1,000+ Records',
      'Instant Parent SMS Fee Reminders'
    ],
    keyFeatures: [
      'Multi-Role Dashboards (Teachers, Parents, Admins)',
      'Attendance Tracking & Automated Report Card Generation',
      'Integrated SMS Gateway for Reminders & Alerts',
      'Fee Collection Tracking with Instant Digital Receipts',
      'Database Search & Filtering Engine'
    ],
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Twilio SMS API', 'AJAX'],
    githubUrl: 'https://github.com/fikeregasa1223-alt/School-Management-System-PHP',
    liveUrl: 'https://school-demo.fikadu-portfolio.dev',
    demoType: 'school',
    featured: false,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    subtitle: 'Desktop Application with Barcode Scanner',
    category: 'Desktop & Systems',
    type: 'Academic Project',
    year: '2024',
    startDate: 'Mar 2024',
    endDate: 'Jun 2024',
    duration: '4 Months (Mar – Jun 2024)',
    complexityLevel: 82,
    description: 'A desktop application built in Java Swing with MySQL for cataloging over 10,000 books, managing member check-in/out via barcode scanning, and sending automated overdue email alerts.',
    impactMetrics: [
      '10,000+ Books Cataloged',
      'Sub-Second Barcode Check-In / Check-Out',
      'Automated Overdue Notice Email Queue'
    ],
    keyFeatures: [
      'Barcode Reader Integration for Swift Check-In/Out',
      'MySQL Database with Indexing for Rapid Search',
      'Fine Calculation Logic & Outstanding Balances',
      'Automated Email Alerts for Overdue Books',
      'Java Swing Modern Desktop Interface'
    ],
    techStack: ['Java', 'Swing', 'MySQL', 'JDBC', 'JavaMail API', 'Barcode SDK'],
    githubUrl: 'https://github.com/fikeregasa1223-alt/Library-Management-System-Java',
    liveUrl: '#',
    demoType: 'library',
    featured: false,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bank-management-system',
    title: 'Bank Management System',
    subtitle: 'High-Integrity C++ Console Application',
    category: 'Desktop & Systems',
    type: 'Academic Project',
    year: '2024',
    startDate: 'Aug 2024',
    endDate: 'Oct 2024',
    duration: '2 Months (Aug – Oct 2024)',
    complexityLevel: 80,
    description: 'A performance-focused C++ application engineered with binary file storage, secure PIN authentication, transaction logging, and account balance computations with strict error boundary checks.',
    impactMetrics: [
      '99.9% Data Integrity in Stress Benchmarks',
      'Zero Memory Leak Architecture',
      'Instant Binary Record Retrieval'
    ],
    keyFeatures: [
      'Binary File Storage & Record Persistence',
      'Account Creation, Deposit, Withdrawal & Transfer',
      'Detailed Transaction History Generation',
      'Robust Input Validation & Memory Management',
      'CLI Menu System with Color Syntax Formatting'
    ],
    techStack: ['C++', 'File I/O Streams', 'Data Structures', 'OOP', 'Algorithms'],
    githubUrl: 'https://github.com/fikeregasa1223-alt/Bank-Management-System-CPP',
    liveUrl: '#',
    featured: false,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'JavaScript (ES6+)', level: 92, experience: '3+ yrs' },
      { name: 'PHP', level: 90, experience: '2+ yrs' },
      { name: 'Java', level: 88, experience: '2+ yrs' },
      { name: 'Python', level: 85, experience: '2+ yrs' },
      { name: 'C++', level: 82, experience: '2+ yrs' },
      { name: 'HTML5 & CSS3', level: 95, experience: '3+ yrs' },
      { name: 'VB.NET', level: 75, experience: '1+ yr' }
    ]
  },
  {
    title: 'Frameworks & Frontend',
    icon: 'Layers',
    skills: [
      { name: 'React.js', level: 90, experience: '2+ yrs' },
      { name: 'Tailwind CSS', level: 92, experience: '2+ yrs' },
      { name: 'Node.js & Express.js', level: 86, experience: '2+ yrs' },
      { name: 'Flask (Python)', level: 84, experience: '1+ yr' },
      { name: 'Bootstrap', level: 90, experience: '2+ yrs' }
    ]
  },
  {
    title: 'Tools, Databases & Cloud',
    icon: 'Database',
    skills: [
      { name: 'MySQL & Database Design', level: 92, experience: '3+ yrs' },
      { name: 'Firebase (Auth & Realtime DB)', level: 88, experience: '2+ yrs' },
      { name: 'Git & GitHub Version Control', level: 92, experience: '3+ yrs' },
      { name: 'Android Studio', level: 85, experience: '2+ yrs' },
      { name: 'Figma UI/UX Design', level: 80, experience: '1+ yr' },
      { name: 'Postman & REST APIs', level: 88, experience: '2+ yrs' },
      { name: 'XAMPP & Apache Server', level: 90, experience: '2+ yrs' }
    ]
  },
  {
    title: 'Core Methodologies & Security',
    icon: 'ShieldCheck',
    skills: [
      { name: 'RESTful API Architecture', level: 90, experience: '2+ yrs' },
      { name: 'MVC Pattern & Clean Architecture', level: 92, experience: '3+ yrs' },
      { name: 'OAuth 2.0 & Authentication', level: 85, experience: '1+ yr' },
      { name: 'Agile & Scrum Methodologies', level: 88, experience: '2+ yrs' },
      { name: 'Data Structures & Algorithms', level: 88, experience: '3+ yrs' }
    ]
  }
];

export const educationData: Education = {
  institution: 'Werabe University',
  location: 'Werabe, Ethiopia',
  degree: 'B.Sc. in Information Technology',
  cgpa: '3.56 / 4.0 (Honors)',
  period: '2022 – 2026 (Graduated 2026)',
  coursework: [
    'Data Structures & Algorithms',
    'Database Systems & SQL Optimization',
    'Software Engineering & System Analysis',
    'Web Development (Client & Server Side)',
    'Mobile Application Development (Android)',
    'Computer Networking & Protocol Analysis',
    'Cybersecurity & Cryptography Fundamentals',
    'Object-Oriented Programming (Java, C++)',
    'Operating Systems & System Architecture'
  ],
  honors: [
    "Dean's List Academic Recognition (2024, 2025, 2026)",
    'Academic Excellence Award in Information Technology'
  ],
  leadership: [
    'Project Team Lead for 6+ Major Academic Engineering Projects',
    'Organized Campus Tech Workshops on Web Development & Git/GitHub'
  ]
};

export const certificationsData: Certification[] = [
  {
    title: 'Android Developer Fundamentals',
    issuer: 'EthioCoders Initiative & Udacity',
    year: '2025',
    certNumber: 'CERT-EC-2025-01',
    verifyUrl: 'https://ethiocoders.et/verify/android-developer-fundamentals',
    skills: ['Android SDK', 'Java & Kotlin', 'XML Layouts', 'Activity Lifecycle', 'Mobile Apps'],
    badgeColor: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'EthioCoders Initiative & Udacity',
    year: '2025',
    certNumber: 'CERT-EC-2025-02',
    verifyUrl: 'https://ethiocoders.et/verify/ai-fundamentals',
    skills: ['Artificial Intelligence', 'Neural Networks', 'Intelligent Agents', 'Search Algorithms', 'AI Concepts'],
    badgeColor: 'from-indigo-500 to-purple-600'
  },
  {
    title: 'Data Analysis Fundamentals',
    issuer: 'EthioCoders Initiative & Udacity',
    year: '2025',
    certNumber: 'CERT-EC-2025-03',
    verifyUrl: 'https://ethiocoders.et/verify/data-analysis-fundamentals',
    skills: ['Data Wrangling', 'Python Pandas', 'Exploratory Analysis', 'Data Visualization', 'Statistics'],
    badgeColor: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Programming Fundamentals',
    issuer: 'EthioCoders Initiative & Udacity',
    year: '2025',
    certNumber: 'CERT-EC-2025-04',
    verifyUrl: 'https://ethiocoders.et/verify/programming-fundamentals',
    skills: ['Algorithmic Thinking', 'Control Structures', 'Functions', 'Problem Solving', 'Clean Code'],
    badgeColor: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'Simplilearn',
    year: '2025',
    certNumber: 'CERT-SL-2025-05',
    verifyUrl: 'https://simplilearn.com/verify/machine-learning-python',
    skills: ['Scikit-Learn', 'Supervised Learning', 'Classification & Regression', 'Model Evaluation', 'Python'],
    badgeColor: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Simplilearn',
    year: '2025',
    certNumber: 'CERT-SL-2025-06',
    verifyUrl: 'https://simplilearn.com/verify/cybersecurity-fundamentals',
    skills: ['Network Security', 'Threat Analysis', 'Cryptography', 'Vulnerability Assessment', 'Access Control'],
    badgeColor: 'from-rose-500 to-red-600'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2025',
    certNumber: 'CERT-FCC-2025-07',
    verifyUrl: 'https://freecodecamp.org/certification/fikeregasa/responsive-web-design',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Accessibility'],
    badgeColor: 'from-teal-500 to-emerald-600'
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    year: '2025',
    certNumber: 'CERT-FCC-2025-08',
    verifyUrl: 'https://freecodecamp.org/certification/fikeregasa/javascript-algorithms',
    skills: ['ES6+', 'Recursion', 'OOP', 'Functional Programming', 'Algorithms'],
    badgeColor: 'from-yellow-500 to-amber-600'
  },
  {
    title: 'Git & GitHub Bootcamp',
    issuer: 'Udemy',
    year: '2025',
    certNumber: 'CERT-UDM-2025-09',
    verifyUrl: 'https://udemy.com/certificate/git-github-bootcamp-fikadu',
    skills: ['Git Flow', 'Branching & Merging', 'Rebase', 'Collaborative PRs'],
    badgeColor: 'from-purple-500 to-indigo-600'
  }
];

export const extracurriculars: ExperienceOrActivity[] = [
  {
    role: 'Hackathon Participant & Finalist',
    organization: 'National University Tech Hackathons',
    period: '2024, 2025',
    description: 'Collaborated in fast-paced 48-hour development sprints building innovative digital solutions for local community challenges.',
    highlights: ['Built prototype voting platform in 36 hours', 'Awarded top UI/UX presentation honor']
  },
  {
    role: 'University Tech Club Lead Member',
    organization: 'Werabe University Innovation Club',
    period: '2023 – 2026',
    description: 'Mentored junior IT students, organized coding competitions, and hosted hands-on Git & Full-stack workshops.',
    highlights: ['Mentored 40+ students in web development', 'Hosted 5 peer coding bootcamps']
  },
  {
    role: 'Open Source Contributor & Tech Volunteer',
    organization: 'Global & Regional Dev Communities',
    period: '2024 – Present',
    description: 'Contributed bug fixes and documentation improvements to open-source developer repositories and volunteered in tech literacy initiatives.',
    highlights: ['Volunteered teaching high school coding basics', 'Active GitHub maintainer for personal open projects']
  }
];
