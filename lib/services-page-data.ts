export interface Service {
  number: string;
  title: string;
  category: string;
  overview: string;
  deliverables: string[];
  toolsLabel: string;
  tools: string[];
  timeline: string;
  cta: string;
  project: {
    title: string;
    category: string;
    metric: string;
    image: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  category: "Frontend" | "Backend" | "Design" | "Marketing" | "CMS" | "Analytics";
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export const serviceDetails: Service[] = [
  {
    number: "01",
    title: "Web Development",
    category: "Build",
    overview:
      "We develop responsive, secure and high-performing websites that combine modern design with clean, scalable code.",
    deliverables: [
      "Custom business websites",
      "Corporate websites",
      "Landing pages",
      "E-commerce development",
      "CMS development",
      "API integration",
      "Website redesign",
      "Speed and performance optimisation",
    ],
    toolsLabel: "Technologies",
    tools: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB"],
    timeline: "4–12 weeks, depending on project scope.",
    cta: "Explore Web Development",
    project: {
      title: "Kingsland Digital",
      category: "Agency platform",
      metric: "+42% enquiries",
      image: "/projects/kingsland-digital.png",
    },
  },
  {
    number: "02",
    title: "UI/UX Design",
    category: "Design",
    overview:
      "We design intuitive digital experiences that balance business goals, user needs and strong visual communication.",
    deliverables: [
      "User research",
      "Information architecture",
      "Wireframes",
      "User flows",
      "Website interface design",
      "Mobile application design",
      "Interactive prototypes",
      "Design systems",
    ],
    toolsLabel: "Tools",
    tools: ["Figma", "FigJam", "Adobe Creative Suite", "Prototyping Tools"],
    timeline: "3–8 weeks.",
    cta: "Explore UI/UX Design",
    project: {
      title: "Amazing Aesthetics",
      category: "Healthcare experience",
      metric: "98 UX score",
      image: "/projects/amazing-aesthetics.png",
    },
  },
  {
    number: "03",
    title: "Digital Marketing",
    category: "Grow",
    overview:
      "We build result-focused digital marketing strategies that improve visibility, engagement, enquiries and long-term growth.",
    deliverables: [
      "Digital marketing strategy",
      "Social media marketing",
      "Paid advertising campaigns",
      "Content marketing",
      "Lead generation",
      "Email marketing",
      "Campaign optimisation",
      "Analytics and reporting",
    ],
    toolsLabel: "Platforms",
    tools: ["Google Ads", "Meta Ads", "Google Analytics", "Search Console", "Marketing Automation"],
    timeline: "Ongoing monthly engagement or project-based campaigns.",
    cta: "Explore Digital Marketing",
    project: {
      title: "Franchise Advisor",
      category: "Growth platform",
      metric: "2.5× engagement",
      image: "/projects/franchise-advisor.png",
    },
  },
  {
    number: "04",
    title: "Branding",
    category: "Identity",
    overview:
      "We create memorable brand identities that help businesses communicate clearly, build trust and stand apart from competitors.",
    deliverables: [
      "Brand strategy",
      "Logo design",
      "Visual identity",
      "Colour and typography system",
      "Brand guidelines",
      "Marketing collateral",
      "Social media identity",
      "Brand refresh",
    ],
    toolsLabel: "Tools",
    tools: ["Figma", "Illustrator", "Photoshop", "InDesign"],
    timeline: "3–7 weeks.",
    cta: "Explore Branding",
    project: {
      title: "Wings Chauffeurs",
      category: "Luxury identity",
      metric: "+65% recall",
      image: "/projects/wings-chauffeurs.png",
    },
  },
  {
    number: "05",
    title: "SEO",
    category: "Discover",
    overview:
      "We improve search visibility through technical optimisation, valuable content and data-driven search strategies.",
    deliverables: [
      "SEO audit",
      "Keyword research",
      "On-page SEO",
      "Technical SEO",
      "Local SEO",
      "Content optimisation",
      "Competitor analysis",
      "Performance reporting",
    ],
    toolsLabel: "Platforms",
    tools: ["Search Console", "Google Analytics", "SEMrush", "Ahrefs", "PageSpeed Insights"],
    timeline: "Ongoing monthly engagement with measurable milestones.",
    cta: "Explore SEO",
    project: {
      title: "Amazing Aesthetics",
      category: "Local search growth",
      metric: "+38% visibility",
      image: "/projects/amazing-aesthetics.png",
    },
  },
];

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discover", description: "We understand your business, audience, challenges and project goals." },
  { number: "02", title: "Define", description: "We create the strategy, sitemap, project scope and visual direction." },
  { number: "03", title: "Design", description: "We develop wireframes, prototypes and premium user interface concepts." },
  { number: "04", title: "Build", description: "We convert the approved design into a fast, responsive and scalable digital product." },
  { number: "05", title: "Test", description: "We test usability, responsiveness, accessibility, speed and functionality." },
  { number: "06", title: "Launch & Grow", description: "We launch the project and continue improving its performance." },
];

export const technologies: Technology[] = [
  ...["Next.js", "React", "TypeScript", "Tailwind CSS"].map((name) => ({ name, category: "Frontend" as const })),
  ...["Node.js", "Express", "MongoDB", "REST APIs"].map((name) => ({ name, category: "Backend" as const })),
  ...["Figma", "Adobe Creative Suite"].map((name) => ({ name, category: "Design" as const })),
  ...["Meta Ads", "Google Ads"].map((name) => ({ name, category: "Marketing" as const })),
  ...["WordPress", "Shopify", "Webflow"].map((name) => ({ name, category: "CMS" as const })),
  ...["Google Analytics", "Search Console"].map((name) => ({ name, category: "Analytics" as const })),
];

export const caseStudyMetrics: CaseStudyMetric[] = [
  { value: "+42%", label: "Conversion Rate" },
  { value: "98", label: "Performance Score" },
  { value: "2.5×", label: "User Engagement" },
  { value: "-38%", label: "Bounce Rate" },
];
