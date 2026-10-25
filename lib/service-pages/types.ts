export type ServiceCategorySlug = "ai-automation" | "design-branding" | "development" | "marketing";

export interface ServiceCategory {
  slug: ServiceCategorySlug;
  label: string;
  summary: string;
  process: { step: string; title: string; copy: string }[];
}

export interface ServicePage {
  slug: string;
  category: ServiceCategorySlug;
  title: string;
  navLabel: string;
  tagline: string;
  heading: string;
  headingAccent: string;
  intro: string;
  metaDescription: string;
  highlights: { label: string; value: string }[];
  whatYouGet: { title: string; copy: string }[];
  deliverables: string[];
  stack: string[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const serviceCategories: Record<ServiceCategorySlug, ServiceCategory> = {
  "ai-automation": {
    slug: "ai-automation",
    label: "AI & Automation",
    summary: "Put AI to work inside your business.",
    process: [
      { step: "01", title: "Map the work", copy: "We sit with your team and document the task as it actually happens today, including the exceptions." },
      { step: "02", title: "Pick the wedge", copy: "We choose the one workflow where automation saves the most hours with the least risk, and scope it tightly." },
      { step: "03", title: "Build and pilot", copy: "We build it, run it alongside your current process, and compare the output before anything is switched over." },
      { step: "04", title: "Hand over", copy: "You get documentation, logging and a dashboard, so your team can see what ran, what failed and why." },
    ],
  },
  "design-branding": {
    slug: "design-branding",
    label: "Design & Branding",
    summary: "Look the part everywhere you show up.",
    process: [
      { step: "01", title: "Understand", copy: "We learn your business, your audience and the competitors you are measured against." },
      { step: "02", title: "Direction", copy: "We present distinct creative routes rather than a single take, so you choose with context." },
      { step: "03", title: "Craft", copy: "We develop the chosen direction into finished work, refined over structured review rounds." },
      { step: "04", title: "Hand over", copy: "You receive organised source files, exports and usage guidance your team can run with." },
    ],
  },
  development: {
    slug: "development",
    label: "Development",
    summary: "Build it fast, and build it to last.",
    process: [
      { step: "01", title: "Scope", copy: "We turn the brief into a written scope: features, pages, integrations and what is explicitly out." },
      { step: "02", title: "Architect", copy: "We choose the stack, data model and hosting around your real constraints, not fashion." },
      { step: "03", title: "Build", copy: "We develop in short milestones with a staging link you can open and comment on at any point." },
      { step: "04", title: "Launch", copy: "We test, optimise, deploy and stay on hand through the first weeks in production." },
    ],
  },
  marketing: {
    slug: "marketing",
    label: "Marketing & Growth",
    summary: "Get found, get clicks, get customers.",
    process: [
      { step: "01", title: "Audit", copy: "We review your current performance, tracking and competition before proposing any spend." },
      { step: "02", title: "Plan", copy: "We agree the target audience, the offer, the channels and the numbers we are trying to move." },
      { step: "03", title: "Execute", copy: "We launch, then optimise on a weekly cycle based on what the data actually shows." },
      { step: "04", title: "Report", copy: "You get plain-language reporting tied to enquiries and revenue, not vanity metrics." },
    ],
  },
};
