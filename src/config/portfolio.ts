// ============================================================
// PORTFOLIO CONFIG — Edit this file to customize everything!
// ============================================================

export const portfolio = {
  // ----------------------------------------------------------
  // Personal Info
  // ----------------------------------------------------------
  name: "Alex Johnson",
  initials: "AJ",
  role: "Full Stack Developer",
  location: "San Francisco, CA",
  bio: "I build clean, fast, and accessible web applications. Passionate about great UI and developer experience. I love turning complex problems into simple, elegant solutions.",
  shortBio: "Full Stack Developer based in San Francisco, building clean and performant web experiences.",
  avatar: "/avatar.jpg", // Place your photo in /public/avatar.jpg
  available: true, // Set to false to hide "Available for work" badge

  // ----------------------------------------------------------
  // Contact & Social
  // ----------------------------------------------------------
  email: "alex@example.com",
  github: "https://github.com/alexjohnson",
  linkedin: "https://linkedin.com/in/alexjohnson",
  twitter: "https://twitter.com/alexjohnson",
  kofi: "https://ko-fi.com/alexjohnson",

  // ----------------------------------------------------------
  // Skills
  // ----------------------------------------------------------
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Git",
    "Figma",
    "REST APIs",
    "GraphQL",
    "AWS",
    "Vercel",
    "Linux",
  ],

  // Tech stack logos shown in the animated strip (name + icon key)
  techStack: [
    { name: "Next.js" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Docker" },
    { name: "Git" },
    { name: "Figma" },
    { name: "Vercel" },
    { name: "AWS" },
    { name: "GraphQL" },
  ],

  // ----------------------------------------------------------
  // Projects
  // ----------------------------------------------------------
  projects: [
    {
      id: 1,
      title: "SaaS Dashboard",
      description:
        "A full-featured analytics dashboard for SaaS products with real-time charts, user management, and billing integration. Built with Next.js and Stripe.",
      image: "/projects/saas-dashboard.jpg",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
      github: "https://github.com/alexjohnson/saas-dashboard",
      live: "https://saas-dashboard-demo.vercel.app",
      category: "Web",
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce storefront with product filtering, cart management, and Stripe checkout. Fully responsive with optimized performance.",
      image: "/projects/ecommerce.jpg",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      github: "https://github.com/alexjohnson/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
      category: "Web",
      featured: true,
    },
    {
      id: 3,
      title: "Task Manager App",
      description:
        "A cross-platform mobile task manager with drag-and-drop boards, real-time sync, and team collaboration features built with React Native.",
      image: "/projects/task-manager.jpg",
      tech: ["React Native", "Expo", "Firebase", "TypeScript"],
      github: "https://github.com/alexjohnson/task-manager",
      live: "https://task-manager-demo.vercel.app",
      category: "Mobile",
      featured: true,
    },
    {
      id: 4,
      title: "Design System",
      description:
        "An open-source UI component library with 40+ accessible components, dark mode support, and comprehensive Storybook documentation.",
      image: "/projects/design-system.jpg",
      tech: ["React", "TypeScript", "Storybook", "Radix UI", "CSS"],
      github: "https://github.com/alexjohnson/design-system",
      live: "https://design-system-docs.vercel.app",
      category: "Open Source",
      featured: false,
    },
    {
      id: 5,
      title: "AI Chat Interface",
      description:
        "A sleek chat interface for interacting with large language models, featuring streaming responses, conversation history, and markdown rendering.",
      image: "/projects/ai-chat.jpg",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/alexjohnson/ai-chat",
      live: "https://ai-chat-demo.vercel.app",
      category: "Web",
      featured: false,
    },
    {
      id: 6,
      title: "Portfolio UI Kit",
      description:
        "A free Figma UI kit for developer portfolios with 20+ templates, reusable components, and dark/light mode designs.",
      image: "/projects/ui-kit.jpg",
      tech: ["Figma", "UI Design", "Design Tokens"],
      github: "https://github.com/alexjohnson/portfolio-ui-kit",
      live: "https://figma.com/community/file/example",
      category: "UI",
      featured: false,
    },
  ],

  // ----------------------------------------------------------
  // Experience
  // ----------------------------------------------------------
  experience: [
    {
      company: "Stripe",
      role: "Senior Full Stack Engineer",
      period: "2022 — Present",
      location: "San Francisco, CA",
      description:
        "Led development of merchant-facing dashboard features used by 500K+ businesses. Improved page load times by 40% through code splitting and caching strategies. Mentored 3 junior engineers and drove adoption of TypeScript across the team.",
      tech: ["React", "TypeScript", "Ruby on Rails", "PostgreSQL"],
    },
    {
      company: "Vercel",
      role: "Frontend Engineer",
      period: "2020 — 2022",
      location: "Remote",
      description:
        "Built and maintained core UI features for the Vercel deployment platform. Contributed to the Next.js open-source project with 12 merged PRs. Collaborated with design team to ship a complete UI overhaul improving user satisfaction scores by 25%.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "2018 — 2020",
      location: "San Francisco, CA",
      description:
        "Built custom web applications for 15+ clients across e-commerce, healthcare, and fintech sectors. Delivered projects on time and under budget, resulting in 90% client retention.",
      tech: ["React", "Node.js", "MongoDB", "AWS"],
    },
  ],

  // ----------------------------------------------------------
  // Education
  // ----------------------------------------------------------
  education: [
    {
      institution: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      period: "2014 — 2018",
      description:
        "Graduated with honors. Specialized in software engineering and human-computer interaction. President of the Web Development Club.",
    },
  ],

  // ----------------------------------------------------------
  // Project filter categories
  // ----------------------------------------------------------
  categories: ["All", "Web", "Mobile", "UI", "Open Source"],
} as const;

export type Project = typeof portfolio.projects[number];
export type Experience = typeof portfolio.experience[number];
export type Education = typeof portfolio.education[number];
