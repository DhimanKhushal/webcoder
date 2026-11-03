export interface PortfolioCollection {
  slug: "smo" | "seo" | "meta-ads" | "google-ads" | "linkedin-ads" | "websites";
  title: string;
  summary: string;
  description: string;
  includes: string[];
}

interface PortfolioArea {
  id: string;
  title: string;
  description: string;
  collections: PortfolioCollection[];
}

// The hub and its six detail routes share these collection definitions.
export const portfolioAreas: PortfolioArea[] = [
  {
    id: "organic-marketing",
    title: "Organic marketing",
    description: "Explore the content that shapes a brand and the search work that helps people discover it.",
    collections: [
      {
        slug: "smo", title: "SMO",
        summary: "Social media, graphic design & video editing",
        description: "A closer look at how a brand shows up across social media, from a single creative to a connected content direction.",
        includes: ["Social media content & campaigns", "Graphic design & brand creatives", "Reels & video editing"],
      },
      {
        slug: "seo", title: "SEO",
        summary: "Search visibility, keywords & relevant projects",
        description: "Explore the thinking behind search visibility: the website, its content and the keywords that connect a business to its audience.",
        includes: ["Keyword focus & search strategy", "On-page content & website improvements", "Ranking progress & project context"],
      },
    ],
  },
  {
    id: "performance-marketing",
    title: "Performance marketing",
    description: "Explore paid campaigns by platform. The audience, creative and campaign approach, with the context behind the work.",
    collections: [
      {
        slug: "meta-ads", title: "Meta Ads",
        summary: "Facebook & Instagram campaigns",
        description: "Explore campaign creative and advertising approaches for reaching people across Facebook and Instagram.",
        includes: ["Campaign goals & audience approach", "Ad creatives, copy & formats", "Reporting period & performance context"],
      },
      {
        slug: "google-ads", title: "Google Ads",
        summary: "Search intent meets the right offer",
        description: "Explore how search campaigns connect a relevant query to a clear message and a focused landing page.",
        includes: ["Search themes & campaign structure", "Ad copy & landing page direction", "Conversion tracking & reporting context"],
      },
      {
        slug: "linkedin-ads", title: "LinkedIn Ads",
        summary: "Campaigns for a professional audience",
        description: "Explore advertising approaches built around professional audiences, business offers and a considered path to enquiry.",
        includes: ["Audience & business objectives", "Campaign messaging & creative", "Lead generation & reporting context"],
      },
    ],
  },
  {
    id: "website-development",
    title: "Website development",
    description: "From healthcare and consulting to digital agencies and luxury travel. Explore the websites, their design and the work behind them.",
    collections: [],
  },
];

export const portfolioCollections: PortfolioCollection[] = [
  ...portfolioAreas.flatMap((area) => area.collections),
  {
    slug: "websites",
    title: "Website Development",
    summary: "WordPress, custom-coded websites & projects by industry",
    description: "Explore website projects by technology and industry, with a clear view of the design and development work behind each one.",
    includes: ["WordPress & custom-coded projects", "Industry filters & niche search", "Relevant projects or a contextual contact card"],
  },
];

export function getPortfolioCollection(slug: string): PortfolioCollection | undefined {
  return portfolioCollections.find((collection) => collection.slug === slug);
}

export function getPortfolioPath(slug: PortfolioCollection["slug"]): string {
  return `/portfolio/${slug}`;
}

export function portfolioEnquiry(collection: string): string {
  const subject = `Webcodder ${collection} portfolio enquiry`;
  const body = `Hi Webcodder,\n\nI'd like to see relevant ${collection} work and discuss a project.\n\nMy business / industry:\nWhat I have in mind:\n`;
  return `mailto:opt.webcodder@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
