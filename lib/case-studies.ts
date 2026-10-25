/**
 * Case study content.
 *
 * DRAFT NOTICE — the `brief`, `approach` and `delivered` fields below are drafts
 * written from each project's category and scope. They need client sign-off before
 * publishing. `results` is intentionally empty: the percentages elsewhere on the
 * site are labelled illustrative, so nothing is presented here as a verified
 * outcome until real numbers are supplied. Add entries and the section appears.
 *
 * `image` points at the screenshot in `public/projects/`. It stays optional so
 * ProjectArtwork can fall back to its placeholder frame if a file is ever absent.
 */

export interface CaseStudy {
  slug: string;
  client: string;
  category: string;
  industry: string;
  badge: string;
  image?: string;
  heading: string;
  headingAccent: string;
  summary: string;
  metaDescription: string;
  facts: { label: string; value: string }[];
  brief: string;
  approach: { title: string; copy: string }[];
  delivered: string[];
  /** Slugs from lib/service-pages, used to cross-link the services involved. */
  services: string[];
  testimonial?: { quote: string; name: string; company: string };
  /** Verified results only. Left empty until real figures are confirmed. */
  results: { value: string; label: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "amazing-aesthetics",
    client: "Amazing Aesthetics",
    category: "Healthcare / Website",
    industry: "Healthcare",
    badge: "UI/UX + Development",
    image: "/projects/amazing-aesthetics.png",
    heading: "A clinic website built",
    headingAccent: "around patient trust.",
    summary:
      "An aesthetics clinic website covering treatment information, practitioner credibility and enquiry capture — designed and built end to end.",
    metaDescription:
      "Case study: a healthcare website for Amazing Aesthetics, covering UI/UX design and development of treatment pages, credibility content and enquiry capture.",
    facts: [
      { label: "Client", value: "Amazing Aesthetics" },
      { label: "Industry", value: "Healthcare" },
      { label: "Scope", value: "UI/UX design and development" },
    ],
    brief: "Healthcare is a considered decision, and a clinic website carries more weight than a brochure. Someone comparing providers wants to understand the treatment, judge whether the practitioners are credible, and get in touch without filling in a form that reads like a medical history. The site had to carry a detailed treatment catalogue without becoming a wall of text.",
    approach: [
      { title: "Structure around the treatment", copy: "We organised the site by what a patient is actually looking for, so each treatment has a page that answers the practical questions in a predictable order." },
      { title: "Credibility in context", copy: "Practitioner credentials and clinic information sit alongside the treatments rather than hiding on a separate about page." },
      { title: "A short path to enquiry", copy: "Enquiry capture appears at the point of interest, asking for the minimum needed to start a conversation." },
      { title: "Built for phones first", copy: "The layout was resolved at phone width, where most clinic research happens, before being opened up for desktop." },
    ],
    delivered: [
      "Sitemap and treatment content structure",
      "Full interface design, mobile and desktop",
      "Responsive front-end build",
      "Treatment pages and enquiry capture",
      "Performance and accessibility pass",
    ],
    services: ["ui-ux-designing", "web-designing", "web-development"],
    testimonial: {
      quote: "They understood the business before touching the design. The final website feels exactly like us—only sharper.",
      name: "Seema D.",
      company: "Amazing Aesthetics",
    },
    results: [],
  },
  {
    slug: "kingsland-digital",
    client: "Kingsland Digital",
    category: "Digital Agency / Website",
    industry: "Digital agency",
    badge: "Strategy + Web Design",
    image: "/projects/kingsland-digital.png",
    heading: "A sharper site for",
    headingAccent: "an agency that sells design.",
    summary:
      "A full redesign of an agency website — clearer messaging, a simpler user journey and a faster, conversion-focused build.",
    metaDescription:
      "Case study: a strategy-led redesign for Kingsland Digital, simplifying the user journey and rebuilding the site for speed and conversion.",
    facts: [
      { label: "Client", value: "Kingsland Digital" },
      { label: "Industry", value: "Digital agency" },
      { label: "Scope", value: "Strategy, design and build" },
    ],
    brief: "An agency website is held to its own standard — a prospect reads it as a sample of the work. The existing site was dated, slow, and unclear about what the agency actually offered, which made the enquiry path harder than it needed to be.",
    approach: [
      { title: "Fix the message first", copy: "Before any design we agreed what the site needed to say, in what order, and what a visitor should be able to do on each page." },
      { title: "Simplify the journey", copy: "We cut the page count, removed competing calls to action and made one route through the site obvious." },
      { title: "Hierarchy over decoration", copy: "The visual design leans on typography and spacing, so the work on display stays the loudest thing on the page." },
      { title: "Rebuild for speed", copy: "The front end was rebuilt with a performance budget agreed up front and measured before launch." },
    ],
    delivered: [
      "Messaging and content strategy",
      "Sitemap and page structure",
      "Full visual design system",
      "Conversion-focused front-end build",
      "SEO fundamentals and analytics setup",
      "Performance optimisation",
    ],
    services: ["web-designing", "web-development", "seo"],
    testimonial: {
      quote: "Webcodder made a complicated brief feel simple. Clear communication, thoughtful design and a strong launch.",
      name: "Aman K.",
      company: "Kingsland Digital",
    },
    results: [],
  },
  {
    slug: "franchise-advisor",
    client: "Franchise Advisor",
    category: "Consulting / Digital Platform",
    industry: "Consulting",
    badge: "Brand + Development",
    image: "/projects/franchise-advisor.png",
    heading: "Brand and platform,",
    headingAccent: "built together.",
    summary:
      "A consulting brand and the digital platform behind it — identity, interface and build developed as one piece of work.",
    metaDescription:
      "Case study: brand identity and digital platform development for Franchise Advisor, a consulting business matching operators with franchise opportunities.",
    facts: [
      { label: "Client", value: "Franchise Advisor" },
      { label: "Industry", value: "Consulting" },
      { label: "Scope", value: "Branding and platform development" },
    ],
    brief: "A consulting business lives on credibility, and this one needed both a brand that looked established and a platform that could carry structured opportunity listings. Running the identity and the build as separate projects would have meant designing twice, so they ran as one.",
    approach: [
      { title: "Identity and interface together", copy: "The brand was developed with the platform's screens in view, so the identity was tested where it would actually be used." },
      { title: "Structure the listings", copy: "We modelled the opportunity data properly — categories, filters and detail pages — so the catalogue stays navigable as it grows." },
      { title: "Credibility throughout", copy: "Advisory content and proof sit alongside the listings rather than being quarantined on a separate page." },
      { title: "Room to grow", copy: "The build anticipates more listings and more content types without needing a rebuild." },
    ],
    delivered: [
      "Brand identity and visual language",
      "Platform information architecture",
      "Interface design across templates",
      "Listing and filtering functionality",
      "Full front-end and back-end build",
      "Launch support",
    ],
    services: ["brand-kit", "software-development", "web-development"],
    testimonial: {
      quote: "Fast, creative and refreshingly honest. We saw better engagement within the first few weeks.",
      name: "Rohan M.",
      company: "Franchise Advisor",
    },
    results: [],
  },
  {
    slug: "wings-chauffeurs",
    client: "Wings Chauffeurs",
    category: "Luxury Travel / Website",
    industry: "Luxury travel",
    badge: "UX + Frontend",
    image: "/projects/wings-chauffeurs.png",
    heading: "Restraint, which is what",
    headingAccent: "luxury actually looks like.",
    summary:
      "A chauffeur service website where the booking path and the visual restraint do the work — UX and front-end development.",
    metaDescription:
      "Case study: UX and front-end development for Wings Chauffeurs, a luxury chauffeur service — a restrained interface with a short booking path.",
    facts: [
      { label: "Client", value: "Wings Chauffeurs" },
      { label: "Industry", value: "Luxury travel" },
      { label: "Scope", value: "UX and front-end development" },
    ],
    brief: "Premium service businesses are often let down by websites that try too hard. The job here was a site that felt composed rather than decorated, and that let someone arrange a car in as few steps as possible — frequently from a phone, in transit.",
    approach: [
      { title: "Fewer steps, clearly labelled", copy: "We mapped the booking enquiry down to the fields that genuinely change the quote and removed the rest." },
      { title: "Let the fleet carry the visuals", copy: "Photography is given room to work, with the interface staying deliberately quiet around it." },
      { title: "Typography as the luxury signal", copy: "Spacing, scale and restraint do the work that gradients and effects usually get asked to do." },
      { title: "Fast on mobile data", copy: "Image delivery and front-end weight were tuned for phones on ordinary connections, not office wifi." },
    ],
    delivered: [
      "User flows for the booking enquiry",
      "Interface design across key templates",
      "Responsive front-end build",
      "Image optimisation and delivery",
      "Accessibility and performance pass",
    ],
    services: ["ui-ux-designing", "web-designing", "web-development"],
    results: [],
  },
];

const caseStudiesBySlug = new Map(caseStudies.map((study) => [study.slug, study]));

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudiesBySlug.get(slug);
}

export function getCaseStudyPath(slug: string): string {
  return `/projects/${slug}`;
}

/** The next case study in order, wrapping around, for the footer link. */
export function getNextCaseStudy(slug: string): CaseStudy {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  return caseStudies[(index + 1) % caseStudies.length];
}
