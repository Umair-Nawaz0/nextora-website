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
  shortDesc: string;
  fullDesc: string;
  targetAudience: string;
  capabilities: string[];
  metricsOrHighlight: string;
  icon: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
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

export const SITE_CONFIG = {
  name: "Nextora",
  title: "Nextora | AI-Powered Business Automation & Software Solutions",
  tagline: "Intelligent Automation. Smarter Businesses.",
  positioning: "AI-Powered Business Automation and Intelligent Software Solutions",
  description:
    "Nextora builds intelligent AI-powered automation solutions that help businesses streamline operations, transform customer experiences, and focus on what matters most.",
  centralMessage:
    "NEXTORA HELPS BUSINESSES WORK SMARTER THROUGH AI, AUTOMATION, AND INTELLIGENT SOFTWARE SOLUTIONS.",
  
  // Contact placeholders (as requested in brief: clean, centralized, easy to update)
  contact: {
    email: "contact@nextoratech.com", // placeholder, can be updated anytime
    isPlaceholderEmail: true,
    phone: "+1 (555) 019-2834", // placeholder
    whatsappNumber: "+15550192834", // placeholder for wa.me/
    whatsappDisplay: "+1 (555) 019-2834",
    location: "Global Remote / Tech Operations",
    linkedin: "https://linkedin.com/company/nextora-tech",
    instagram: "https://instagram.com/nextora.tech",
  },

  navItems: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Why Nextora", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],

  services: [
    {
      id: "ai-automation",
      title: "AI-Powered Automation",
      tagline: "Intelligent Operational Systems",
      description:
        "Intelligent systems that handle repetitive business tasks, improve productivity, and reduce manual work with autonomous accuracy.",
      icon: "Cpu",
      features: [
        "Repetitive task offloading",
        "Natural language inquiry handling",
        "Document & data parsing",
        "Human-in-the-loop validation",
      ],
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      tagline: "Seamless Multi-App Connectivity",
      description:
        "Connect business applications, orchestrate end-to-end processes, and eliminate operational bottlenecks between fragmented software tools.",
      icon: "Workflow",
      features: [
        "Cross-platform app integration",
        "Event-triggered workflows",
        "Bi-directional data sync",
        "Automated alerts & status updates",
      ],
    },
    {
      id: "custom-software",
      title: "Custom Software Solutions",
      tagline: "Tailored Engineering",
      description:
        "Engineered digital solutions built specifically around your distinct business requirements, customer journeys, and operational hurdles.",
      icon: "Code2",
      features: [
        "Bespoke internal business tools",
        "Scalable cloud architecture",
        "Tailored customer booking portals",
        "Clean, maintainable codebases",
      ],
    },
  ] as ServiceItem[],

  solutions: [
    {
      id: "ai-assistant",
      title: "AI Appointment Assistant",
      badge: "Virtual Receptionist",
      shortDesc: "An AI-powered 24/7 virtual receptionist for appointment-based businesses.",
      fullDesc:
        "An intelligent AI receptionist that helps businesses manage customer conversations and appointments across multiple communication channels through one centralized system.",
      targetAudience: "Dental clinics, aesthetic clinics, salons & consultation practices",
      icon: "CalendarCheck",
      metricsOrHighlight: "24/7 Instant Responses across WhatsApp, Instagram & Web",
      capabilities: [
        "AI-powered multi-turn customer conversations",
        "WhatsApp & Instagram messaging integration",
        "Direct website chat widget support",
        "Real-time appointment booking & scheduling",
        "Automated rescheduling and cancellation handling",
        "Instant booking confirmations & SMS/WhatsApp reminders",
        "Centralized conversation dashboard",
        "Customized to specific business guidelines & policies",
      ],
    },
    {
      id: "business-workflow",
      title: "Business Workflow Automation",
      badge: "Process Orchestration",
      shortDesc: "Automate repetitive operational chores and connect isolated business applications.",
      fullDesc:
        "Streamline day-to-day operations by linking your CRMs, billing platforms, communication channels, and spreadsheets into self-running pipelines.",
      targetAudience: "Agencies, professional service firms & operational teams",
      icon: "GitBranch",
      metricsOrHighlight: "Zero manual data re-entry across business apps",
      capabilities: [
        "Automated multi-step workflows",
        "Deep application & SaaS integrations",
        "Real-time bi-directional data synchronization",
        "Instant multi-channel operational notifications",
        "Automated task dispatch & execution",
        "Continuous business process optimization",
      ],
    },
    {
      id: "custom-ai-agents",
      title: "Custom AI Agents",
      badge: "Autonomous Intelligence",
      shortDesc: "Specialized AI agents designed to analyze, use connected tools, and complete tasks.",
      fullDesc:
        "Build intelligent autonomous agents that comprehend context, interface with external tools, query internal knowledge bases, and make guided decisions.",
      targetAudience: "Modern enterprises needing specialized automated problem solvers",
      icon: "Bot",
      metricsOrHighlight: "Action-oriented agents that query tools & execute tasks",
      capabilities: [
        "Context-aware AI decision making",
        "Secure external API & tool integrations",
        "End-to-end task execution & workflow triggers",
        "Internal knowledge base & document retrieval (RAG)",
        "Custom agentic multi-agent workflows",
        "Full audit logging and security boundaries",
      ],
    },
  ] as SolutionItem[],

  benefits: [
    {
      title: "Business-Focused Solutions",
      description:
        "Automation crafted specifically around your actual operational bottlenecks and commercial objectives—not generic tech templates.",
      icon: "Target",
    },
    {
      title: "Intelligent Automation",
      description:
        "Modern AI architectures that simplify complex multi-step tasks, minimize human friction, and drastically accelerate turnaround times.",
      icon: "Sparkles",
    },
    {
      title: "Connected Systems",
      description:
        "Bridge the gap between your customer channels, internal databases, CRMs, and productivity tools into one cohesive ecosystem.",
      icon: "Network",
    },
    {
      title: "Scalable Solutions",
      description:
        "Robust, clean software architectures engineered to effortlessly expand as your transaction volumes and team requirements grow.",
      icon: "TrendingUp",
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
