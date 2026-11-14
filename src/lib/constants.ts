export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  capabilities: string[];
  metricsOrHighlight: string;
  icon: string;
  techStack: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
  accent: string;
}

export interface StepItem {
  step: string;
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  useCase: string;
  icon: string;
}

export interface CaseStudyItem {
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
}

export const SITE_CONFIG = {
  name: "Nextora",
  title: "Nextora | AI-Powered Business Automation & Software Solutions",
  tagline: "Intelligent Automation. Smarter Businesses.",
  positioning: "AI-Powered Business Automation and Intelligent Software Solutions",
  description:
    "Nextora builds intelligent AI-powered automation solutions that help businesses streamline operations, transform customer experiences, and focus on what matters most.",
  centralMessage:
    "NEXTORA HELPS BUSINESSES WORK SMARTER THROUGH AI, AUTOMATION, AND INTELLIGENT SOFTWARE SOLUTIONS.",

  founder: {
    name: "Sardar Umair Nawaz Khan",
    role: "Founder & Lead AI Engineer",
    institution: "FAST-NUCES Computer Science",
    bio: "AI/ML and backend systems engineer specializing in LLM-powered automation workflows, multi-tenant agent architectures, asynchronous REST APIs, and predictive machine learning pipelines.",
    github: "https://github.com/Umair-Nawaz0",
    linkedin: "https://www.linkedin.com/in/sardar-umair-nawaz-khan/",
    avatar: "/images/founder.webp",
  },

  // Contact Details requested by user
  contact: {
    email: "nextora.business.ai@gmail.com",
    isPlaceholderEmail: false,
    phone: "+92 307 8282606",
    phoneRaw: "+923078282606",
    whatsappNumber: "923078282606",
    whatsappDisplay: "+92 307 8282606",
    location: "Pakistan (Open to Global Remote & Deployments)",
    linkedin: "https://www.linkedin.com/in/sardar-umair-nawaz-khan/",
    github: "https://github.com/Umair-Nawaz0",
    instagram: "https://instagram.com/nextora.tech",
  },

  navItems: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Engineering", href: "#engineering" },
    { label: "Why Nextora", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],

  services: [
    {
      id: "ai-automation",
      title: "AI-Powered Automation",
      tagline: "Autonomous Operational Systems",
      description:
        "Intelligent multi-turn AI systems that handle repetitive business tasks, resolve customer inquiries across WhatsApp and Web, and eliminate operational friction.",
      icon: "Cpu",
      features: [
        "Repetitive task offloading & 24/7 inquiry handling",
        "Natural language intent parsing & validation",
        "Deterministic guardrails & zero hallucination rules",
        "Dynamic human-in-the-loop escalation gates",
      ],
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      tagline: "Cross-App Orchestration",
      description:
        "Connect fragmented business applications (CRM, Calendars, WhatsApp, Google Workspace, n8n) into unified event-driven pipelines that run autonomously.",
      icon: "Workflow",
      features: [
        "Automated multi-system event triggers & webhooks",
        "Bi-directional data synchronization across CRMs",
        "RFC-5545 calendar invitations & automated alerts",
        "Sub-5-second automated task completion cycles",
      ],
    },
    {
      id: "custom-software",
      title: "Custom Software Solutions",
      tagline: "Tailored Full-Stack Systems",
      description:
        "Engineered digital solutions built specifically around your distinct business workflows, combining fast Next.js frontends with robust FastAPI/Node microservices.",
      icon: "Code2",
      features: [
        "Modern responsive client-facing web portals",
        "Scalable asynchronous RESTful microservices",
        "Optimized relational database schemas (PostgreSQL)",
        "Containerized Docker setups with automated CI/CD",
      ],
    },
  ] as ServiceItem[],

  solutions: [
    {
      id: "ai-assistant",
      title: "AI Appointment Assistant",
      badge: "24/7 Virtual Receptionist",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/40",
      shortDesc: "An AI-powered 24/7 virtual receptionist for appointment-based businesses.",
      fullDesc:
        "An intelligent AI receptionist that engages customers across WhatsApp, Instagram, and web chat. It checks real-time calendar availability, books appointments without conflicts, handles rescheduling or cancellations, and dispatches automated reminder notifications.",
      targetAudience: "Dental clinics, aesthetic clinics, salons & consultation practices",
      icon: "CalendarCheck",
      metricsOrHighlight: "24/7 Instant Responses & Zero Scheduling Conflicts",
      techStack: ["Google Gemini AI", "FastAPI", "React 18", "n8n", "PostgreSQL", "Docker"],
      capabilities: [
        "AI-powered multi-turn customer conversations",
        "WhatsApp & Instagram messaging integrations",
        "Embeddable website chat widget",
        "Real-time slot checking and conflict-free booking commits",
        "Automated rescheduling and cancellation handling",
        "Dynamic RFC-5545 .ics calendar invite generation",
        "Centralized conversation dashboard & audit logging",
        "Configured specifically to your business policies",
      ],
    },
    {
      id: "business-workflow",
      title: "Autonomous Meeting & Process Engine",
      badge: "Event-Driven Automation",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      shortDesc: "Automate repetitive operational chores and connect isolated business applications.",
      fullDesc:
        "Eliminate manual operational overhead by linking your inbound leads, scheduling platforms, video conferencing, and client notifications into seamless automated pipelines.",
      targetAudience: "Agencies, legal practices, real estate & professional service firms",
      icon: "GitBranch",
      metricsOrHighlight: "Sub-5-Second Turnaround & Automated Provisioning",
      techStack: ["n8n Workflows", "Zoom API", "Google Calendar API", "Gmail API", "Python"],
      capabilities: [
        "Webhook ingestion from lead forms and ads",
        "Automatic Zoom conference room provisioning via OAuth",
        "Automated calendar event distribution and confirmation emails",
        "Real-time synchronization between CRM, sheets, and databases",
        "Instant team notifications via Slack or WhatsApp",
        "Continuous performance monitoring & error handling",
      ],
    },
    {
      id: "custom-ai-agents",
      title: "Custom Agentic AI Systems",
      badge: "Autonomous Tool Calling",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      shortDesc: "Specialized AI agents designed to analyze, use connected tools, and complete tasks.",
      fullDesc:
        "Build autonomous agents with deterministic state machines and tool-calling capabilities. Our agents query private knowledge bases (RAG), extract structured data from unstructured inputs, and execute business actions securely.",
      targetAudience: "Growing enterprises needing automated decision-making and data pipelines",
      icon: "Bot",
      metricsOrHighlight: "Action-Oriented AI with Private Knowledge Retrieval",
      techStack: ["LangChain", "LangGraph", "FastAPI", "Python", "Vector Databases", "Docker"],
      capabilities: [
        "Context-aware AI decision making with strict guardrails",
        "Secure external API tool calling & execution",
        "Document parsing and knowledge base retrieval (RAG)",
        "Multi-step problem decomposition & task dispatch",
        "Deterministic state machine architectures",
        "Comprehensive execution audit logs and telemetry",
      ],
    },
  ] as SolutionItem[],

  // Proven Case Studies directly from Sardar Umair's portfolio
  caseStudies: [
    {
      title: "AI Appointment Assistant & Automation Engine",
      category: "AI Agents & Systems",
      summary:
        "Modular multi-tenant appointment architecture combining a React 18 chat portal with an asynchronous FastAPI backend and an autonomous n8n booking workflow powered by Google Gemini.",
      technologies: ["FastAPI", "React 18", "TypeScript", "PostgreSQL", "n8n", "Docker", "Gemini AI"],
      highlights: [
        "Function-calling tools for real-time slot checking and conflict-free commits",
        "Dynamic RFC-5545 .ics calendar generation with dual-engine SQL fallback",
        "Containerized Docker deployment with health-checked microservices",
      ],
      githubUrl: "https://github.com/Umair-Nawaz0/appointment-assistant",
    },
    {
      title: "Autonomous AI Meeting Scheduling Agent",
      category: "Process Automation",
      summary:
        "Containerized meeting orchestration pipeline using n8n to ingest webhook payloads, negotiate time slots, and provision video conferences automatically.",
      technologies: ["Python", "n8n", "Zoom API", "Google Calendar API", "Gmail API", "Docker"],
      highlights: [
        "Zoom Server-to-Server OAuth, Google Calendar, and Gmail API orchestration",
        "Sub-5-second automated turnaround time from inbound trigger to confirmed meeting",
        "Automated health checks and production-grade resilience",
      ],
      githubUrl: "https://github.com/Umair-Nawaz0/meeting-scheduler",
    },
    {
      title: "High-Precision Predictive ML Systems",
      category: "Machine Learning & Analytics",
      summary:
        "Production-grade anomaly detection and customer segmentation engines applying advanced statistical modeling, SMOTE sampling, and hierarchical clustering.",
      technologies: ["Python", "Scikit-Learn", "PCA", "Hierarchical Clustering", "Pandas"],
      highlights: [
        "Standardized 30 high-dimensional feature vectors to avoid data leakage",
        "Over 90% anomaly recall on severe class imbalance datasets",
        "Agglomerative Ward-linkage clustering for customer behavioral cohorts",
      ],
      githubUrl: "https://github.com/Umair-Nawaz0/svm-credit-card-fraud-detection",
    },
  ] as CaseStudyItem[],

  benefits: [
    {
      title: "Business-Focused Solutions",
      description:
        "Automation crafted specifically around your actual operational bottlenecks and commercial objectives—not generic tech templates.",
      icon: "Target",
      accent: "from-blue-500 to-indigo-600",
    },
    {
      title: "Intelligent Automation",
      description:
        "Modern AI architectures that simplify complex multi-step tasks, minimize human friction, and drastically accelerate turnaround times.",
      icon: "Sparkles",
      accent: "from-purple-500 to-pink-600",
    },
    {
      title: "Connected Systems",
      description:
        "Bridge the gap between your customer channels, internal databases, CRMs, and productivity tools into one cohesive ecosystem.",
      icon: "Network",
      accent: "from-cyan-500 to-blue-600",
    },
    {
      title: "Scalable Solutions",
      description:
        "Robust, clean software architectures engineered to effortlessly expand as your transaction volumes and team requirements grow.",
      icon: "TrendingUp",
      accent: "from-emerald-500 to-teal-600",
    },
  ] as BenefitItem[],

  processSteps: [
    {
      step: "01",
      number: "Step 1",
      title: "Understand",
      description: "Learn about the business, its challenges, and requirements.",
      detail:
        "We analyze your existing operations, identify repetitive manual labor, and determine the exact automation opportunities with the highest ROI.",
    },
    {
      step: "02",
      number: "Step 2",
      title: "Design",
      description: "Plan an automation solution around those requirements.",
      detail:
        "We architect a tailored solution blueprint—mapping data flow, channel touchpoints (WhatsApp/Web), and integration checkpoints.",
    },
    {
      step: "03",
      number: "Step 3",
      title: "Build",
      description: "Develop and integrate the required AI and automation systems.",
      detail:
        "We develop, configure, and connect your automated systems with rigorous testing to ensure zero disruption to live daily operations.",
    },
    {
      step: "04",
      number: "Step 4",
      title: "Optimize",
      description: "Improve the solution as the business evolves.",
      detail:
        "We monitor operational performance, fine-tune AI accuracy, and expand capabilities as your business scales and demands grow.",
    },
  ] as StepItem[],

  industries: [
    {
      name: "Healthcare & Dental Clinics",
      description:
        "Streamlined patient booking workflows, automated appointment reminders, and 24/7 answers to routine inquiries without overloading clinic staff.",
      useCase: "Patient intake & reminder automation",
      icon: "Stethoscope",
    },
    {
      name: "Aesthetic & Beauty Clinics",
      description:
        "Instant Instagram and WhatsApp consultation handling, automated deposit links, and streamlined scheduling for high-value treatments.",
      useCase: "Multi-channel consultation booking",
      icon: "Sparkle",
    },
    {
      name: "Professional Services",
      description:
        "Automated client intake, document checklist validation, meeting dispatch, and seamless CRM synchronization for legal, accounting, and consulting firms.",
      useCase: "Client onboarding & file dispatch",
      icon: "Briefcase",
    },
    {
      name: "Appointment-Based Businesses",
      description:
        "Eliminate phone tag and empty calendar slots with multi-channel self-service booking, rescheduling bots, and automated no-show reduction.",
      useCase: "24/7 automated calendar management",
      icon: "Calendar",
    },
    {
      name: "Growing Small Businesses",
      description:
        "Empower small, lean teams to punch above their weight by delegating data entry, notification routing, and repetitive queries to intelligent software.",
      useCase: "Operational scaling without headcount bloat",
      icon: "Rocket",
    },
  ] as IndustryItem[],
};
