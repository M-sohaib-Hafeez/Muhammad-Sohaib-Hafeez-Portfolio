// ────────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update your
// projects, skills, experience, or personal info — the rest of the
// site pulls from these objects automatically.
//
// Synced with Muhammad_Sohaib_Hafeez_Resume.pdf (latest version).
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Muhammad Sohaib Hafeez',
  roles: [
    'Aspiring AI Engineer',
    'Full-Stack Software Engineer',
    'Systems Builder',
  ],
  location: 'Karachi, Pakistan',
  email: 'sohaibhafeez46@gmail.com',
  phone: '+92-335-1215713',
  linkedin: 'https://www.linkedin.com/in/sohaib-hafeez-6a1814308/',
  github: 'https://github.com/M-sohaib-Hafeez',
  summary:
    'Computer Science undergraduate (4th semester, DUET Karachi) with hands-on experience building and deploying full-stack, AI-powered applications — including a multilingual voice agent, an ML monitoring platform, and workflow automation pipelines. Comfortable across the stack with Python, JavaScript, FastAPI, React, and SQL/NoSQL databases, and Google-certified in applied AI tools and prompt engineering. Looking to bring this experience into an internship or entry-level engineering role.',
  availability: 'Open to internships & entry-level roles',
};

export const education = {
  school: 'Dawood University of Engineering & Technology (DUET), Karachi',
  degree: 'BS Computer Science',
  period: '2024 — Present',
  status: '4th Semester Completed',
};

// Each item can optionally carry a `doc` URL — clicking the pill on the
// Skills section opens that documentation in a new tab.
export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    code: 'SIG_01',
    items: [
      { name: 'Python', doc: 'https://docs.python.org/3/' },
      { name: 'JavaScript', doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Java', doc: 'https://docs.oracle.com/en/java/' },
      { name: 'C++', doc: 'https://en.cppreference.com/w/cpp' },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    code: 'SIG_02',
    items: [
      { name: 'Prompt Engineering', doc: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview' },
      { name: 'Groq LLaMA 3.3-70B', doc: 'https://console.groq.com/docs/models' },
      { name: 'Google Gemini', doc: 'https://ai.google.dev/gemini-api/docs' },
      { name: 'Whisper (STT)', doc: 'https://console.groq.com/docs/speech-to-text' },
      { name: 'Drift Detection (PSI / KS / χ²)', doc: 'https://en.wikipedia.org/wiki/Concept_drift' },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    code: 'SIG_03',
    items: [
      { name: 'FastAPI', doc: 'https://fastapi.tiangolo.com/' },
      { name: 'Django', doc: 'https://docs.djangoproject.com/' },
      { name: 'React', doc: 'https://react.dev/' },
      { name: 'Vite', doc: 'https://vite.dev/' },
      { name: 'Spring Boot', doc: 'https://docs.spring.io/spring-boot/index.html' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    code: 'SIG_04',
    items: [
      { name: 'MySQL', doc: 'https://dev.mysql.com/doc/' },
      { name: 'MongoDB + GridFS', doc: 'https://www.mongodb.com/docs/manual/core/gridfs/' },
      { name: 'PostgreSQL (Supabase)', doc: 'https://supabase.com/docs/guides/database/overview' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    code: 'SIG_05',
    items: [
      { name: 'Git / GitHub', doc: 'https://docs.github.com/' },
      { name: 'Vercel', doc: 'https://vercel.com/docs' },
      { name: 'HuggingFace Spaces', doc: 'https://huggingface.co/docs/hub/spaces' },
      { name: 'n8n', doc: 'https://docs.n8n.io/' },
      { name: 'JWT Auth', doc: 'https://jwt.io/introduction' },
      { name: 'Postman', doc: 'https://learning.postman.com/docs/introduction/overview/' },
    ],
  },
  {
    id: 'core-cs',
    label: 'Core CS',
    code: 'SIG_06',
    items: [
      { name: 'Data Structures & Algorithms', doc: 'https://www.geeksforgeeks.org/data-structures/' },
      { name: 'Database Management', doc: 'https://en.wikipedia.org/wiki/Database' },
      { name: 'Theory of Automata', doc: 'https://en.wikipedia.org/wiki/Automata_theory' },
      { name: 'Computer Networks', doc: 'https://en.wikipedia.org/wiki/Computer_network' },
    ],
  },
];

export const projectFilters = ['All', 'AI', 'Web Platform', 'Systems', 'Automation'];

export const projects = [
  {
    id: 'nova',
    name: 'NOVA — AI Voice Agent',
    tagline: 'A multilingual voice assistant that listens, thinks, and talks back.',
    description:
      "Built for DUET's AI course. NOVA captures speech from the browser mic, transcribes it with Groq-hosted Whisper Large v3, and answers with LLaMA 3.3-70B. It fingerprints background music with ACRCloud, pulls live web results for current-events questions, and reads its replies aloud with the browser's speech synthesis. A custom Unicode-based filter catches Whisper's hallucinated transcriptions when the mic picks up noise instead of speech.",
    highlights: [
      'Understands English, Urdu, Arabic & Hindi speech — always replies in English',
      '3-stage hallucination filter blocks false transcriptions',
      'Zero-shot song recognition: hold the mic near music, say nothing',
    ],
    tech: ['Django', 'Groq Whisper v3', 'LLaMA 3.3-70B', 'ACRCloud', 'Tavily API'],
    github: 'https://github.com/M-sohaib-Hafeez/Ai-Voice-Agent-NOVA',
    live: null,
    signal: 92,
    category: 'AI',
  },
  {
    id: 'ml-monitor',
    name: 'ML Monitor Dashboard',
    tagline: 'A monitoring console that catches ML models failing silently.',
    description:
      'Tracks data and concept drift on deployed models with PSI, KL-divergence, KS-test and Chi-square statistics, then surfaces AI-generated retraining recommendations. Ships with JWT auth across three role tiers (Admin, ML Engineer, Viewer), live WebSocket drift alerts, and real-time dashboards.',
    highlights: [
      'Role-based approval workflow before any retraining ships',
      'Live WebSocket stream for real-time drift alerts',
      'Deployed and running live on Vercel',
    ],
    tech: ['React', 'Vite', 'FastAPI', 'Supabase', 'WebSockets'],
    github: 'https://github.com/M-sohaib-Hafeez/ml-monitor',
    live: null,
    signal: 88,
    category: 'AI',
  },
  {
    id: 'study-system',
    name: 'AI-Based Centralized Study System',
    tagline: 'Upload a lecture note, get an AI tutor built around it.',
    description:
      "A 4-person team platform pairing a React frontend and Spring Boot backend with the FastAPI AI microservice Sohaib owns. His service reads uploaded PDFs, slides, and images, then uses Groq LLaMA and Gemini Vision to summarize, tag, rate difficulty, generate practice questions, and flag likely plagiarism — plus a chat endpoint so students can question any document directly.",
    highlights: [
      'OCR + language detection on scanned documents',
      'Auto-generated MCQs and open-ended practice questions',
      'JWT auth with a limited guest search mode',
    ],
    tech: ['FastAPI', 'Groq LLaMA', 'Gemini Vision', 'Spring Boot', 'React'],
    github: 'https://github.com/M-sohaib-Hafeez/AI-Based_Centralized-Study-System',
    live: null,
    signal: 81,
    category: 'AI',
  },
  {
    id: 'whatsapp-jira',
    name: 'WhatsApp – Jira Automation',
    tagline: 'Two n8n workflows that turn chat messages into tracked issues.',
    description:
      'A pair of deployed n8n workflows bridging WhatsApp, an AI agent, and Jira. Inbound WhatsApp messages are routed through an AI agent wired up with Jira tools so it can create and update issues directly from chat, while outbound Jira webhooks push status changes and notifications back to WhatsApp automatically.',
    highlights: [
      'Inbound flow: WhatsApp → AI agent with Jira tools → reply',
      'Outbound flow: Jira webhooks → push notifications back to WhatsApp',
      'Deployed and live on n8n Cloud',
    ],
    tech: ['n8n', 'Meta WhatsApp API', 'Jira API', 'OpenAI API'],
    github: 'https://github.com/M-sohaib-Hafeez/Whatsapp-Jira-Automation',
    live: null,
    signal: 84,
    category: 'Automation',
  },
  {
    id: 'car-service',
    name: 'Car Service Center Management System',
    tagline: 'A three-role JavaFX desktop app for running an auto shop.',
    description:
      'A Data Structures course project with dedicated Admin, Mechanic, and Customer dashboards. Sohaib built the Customer module — vehicle registration, priority-based appointment booking, and a loyalty-points system — and led code review across the team.',
    highlights: [
      'Appointment queue backed by a real PriorityQueue (Emergency → Low)',
      'Live charts on the Admin and Mechanic dashboards',
      'Animated login flow with role-based access',
    ],
    tech: ['Java', 'JavaFX', 'MySQL', 'Maven'],
    github: 'https://github.com/M-sohaib-Hafeez/Car_Service_System',
    live: null,
    signal: 74,
    category: 'Systems',
  },
  {
    id: 'beneficiary-system',
    name: 'Verified Beneficiary System',
    tagline: 'Charity-application intake with built-in fraud scoring.',
    description:
      'A Flask platform for registering and verifying donation beneficiaries, built for an Advanced Database Management Systems course. It scores applications for fraud risk (duplicate CNIC, phone, address, or salary anomalies), stores documents in MongoDB GridFS while keeping structured records in MySQL, and issues a QR-coded tracking ID with email updates at every status change.',
    highlights: [
      'Fraud-risk scoring engine on every new application',
      'Bilingual English / Urdu interface',
      'Admin bulk actions with CSV export',
    ],
    tech: ['Flask', 'MySQL', 'MongoDB GridFS', 'JWT'],
    github: 'https://github.com/M-sohaib-Hafeez/Verified_Beneficiary_System',
    live: null,
    signal: 78,
    category: 'Web Platform',
  },
  {
    id: 'complaint-system',
    name: 'Complaint Management System',
    tagline: 'A student complaint portal on a hand-rolled Java HTTP backend.',
    description:
      'A complaint-tracking system with a custom Java backend — a raw HTTP server, DAO layer, and priority queue for urgent complaints — no framework underneath. The v2 pass focused on hardening: sessions moved to a thread-safe ConcurrentHashMap, request bodies are size-limited, and status transitions are whitelisted server-side.',
    highlights: [
      'Priority queue routes HIGH-priority complaints first',
      'Redesigned dark, interactive admin + student portal',
      'Security hardening pass: safe sessions, input limits, no leaked traces',
    ],
    tech: ['Java', 'HTML/CSS/JS', 'MySQL'],
    github: 'https://github.com/M-sohaib-Hafeez/Complaint_Management_System',
    live: null,
    signal: 69,
    category: 'Systems',
  },
  {
    id: 'student-loan-system',
    name: 'Student Loan Management System',
    tagline: 'A JavaFX desktop platform modeling peer-to-pool student lending.',
    description:
        'A two-application JavaFX + MySQL system built around a shared lending pool: investors contribute funds, borrowers apply for loans against that pool, and a separate admin dashboard handles approvals, fund allocation, and repayment tracking. Every wallet-affecting action — deposits, withdrawals, disbursements, repayments, payouts — flows through a shared transaction ledger, and interest is distributed back to investors based on their share of the funding pool.',
    highlights: [
      'Two standalone JavaFX apps (User + Admin) sharing one MySQL database',
      'Interest distribution engine pays investors by their share of the pool',
      'Full audit trail on every wallet transaction and admin action',
    ],
    tech: ['Java', 'JavaFX', 'MySQL', 'Maven'],
    github: 'https://github.com/M-sohaib-Hafeez/Student_Loan_Management_System',
    live: null,
    signal: 79,
    category: 'Systems',
  },
  {
    id: 'ai-notes-analyzer',
    name: 'KeepTask Analyzer',
    tagline: 'An AI app that reads your notes and tells you what to actually do.',
    description:
        "An Android app that imports Google Keep–style notes (including real Takeout exports) and sends them to Gemini to surface the actionable tasks buried inside — deadlines, chores, health goals, finance to-dos — instead of just repeating note text. Extracted tasks are matched to a High/Medium/Low priority using the user's own custom keyword tags plus urgency cues, then queued for review before landing on a categorized daily checklist.",
    highlights: [
      'AI task extraction via Gemini, reviewed before committing to the checklist',
      'Custom priority keyword system (e.g. #asap, #exam) drives AI urgency tagging',
      'Fully offline — Room-backed local storage, no account or cloud sync needed',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Gemini API', 'Room', 'MVVM'],
    github: 'https://github.com/M-sohaib-Hafeez/Ai_Notes_Analyzer',
    live: null,
    signal: 83,
    category: 'AI',
  },
];

export const experience = [
  {
    id: 'syntecxhub',
    role: 'Software Development Intern',
    company: 'SyntecxHub',
    period: '',
    points: [
      'Contributed to a Beneficiary Donation Management System.',
      'Built features for a React-based Expense Tracker application.',
    ],
  },
];

export const certifications = [
  {
    name: 'Google AI Essentials Specialization',
    issuer: 'Google / Coursera',
    detail:
      '5 courses: Intro to AI, Maximize Productivity with AI Tools, Discover the Art of Prompting, Use AI Responsibly, Stay Ahead of the AI Curve',
    status: 'done',
  },
  {
    name: 'Google AI',
    issuer: 'Google / Coursera',
    detail:
        '7 courses: AI Fundamentals, AI for Brainstorming and Planning, AI for Research and Insights, AI for Writing and Communicating, AI for Content Creation, AI for Data Analysis, AI for App Building',
    status: 'done',
  },
  {
    name: 'Start Writing Prompt Like a Pro',
    issuer: 'Google / Coursera',
    detail:
      'Individual Course',
    status: 'done',
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    detail:
      '9 Courses Series',
    status: 'in-progress',
  },
  {
    name: 'Google Advanced Data Analytics Professional Certificate',
    issuer: 'Google / Coursera',
    status: 'planned',
  },
];

export const sections = [
  { id: 'home', label: 'Home', code: '00' },
  { id: 'about', label: 'About', code: '01' },
  { id: 'skills', label: 'Skills', code: '02' },
  { id: 'projects', label: 'Projects', code: '03' },
  { id: 'experience', label: 'Experience', code: '04' },
  { id: 'contact', label: 'Contact', code: '05' },
];
