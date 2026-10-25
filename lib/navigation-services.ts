import {
  getServicePath,
  getServicesByCategory,
  serviceCategories,
  type ServiceCategorySlug,
} from "@/lib/service-pages";

export type NavigationServiceGroup = {
  stage: string;
  title: string;
  summary: string;
  href: string;
  cta: string;
  services: { label: string; href: string; badge?: string }[];
};

/** Badges highlighted in the navigation, keyed by service slug. */
const navigationBadges: Record<string, string> = {
  "ai-automation": "New",
  "marketing-automation": "AI",
};

/** The service each category's footer link points at. */
const categoryEntryPoints: Record<ServiceCategorySlug, { slug: string; cta: string }> = {
  "ai-automation": { slug: "ai-automation", cta: "Start with AI Automation" },
  "design-branding": { slug: "web-designing", cta: "Start with Web Designing" },
  development: { slug: "web-development", cta: "Start with Web Development" },
  marketing: { slug: "seo", cta: "Start with SEO" },
};

const categoryStages: Record<ServiceCategorySlug, string> = {
  "ai-automation": "AI",
  "design-branding": "Design",
  development: "Development",
  marketing: "Marketing",
};

function buildGroup(categorySlug: ServiceCategorySlug): NavigationServiceGroup {
  const category = serviceCategories[categorySlug];
  const entry = categoryEntryPoints[categorySlug];

  return {
    stage: categoryStages[categorySlug],
    title: category.label,
    summary: category.summary,
    href: getServicePath(entry.slug),
    cta: entry.cta,
    services: getServicesByCategory(categorySlug).map((service) => ({
      label: service.navLabel,
      href: getServicePath(service.slug),
      badge: navigationBadges[service.slug],
    })),
  };
}

export const navigationServices: NavigationServiceGroup[] = [
  buildGroup("ai-automation"),
  buildGroup("design-branding"),
  buildGroup("development"),
  buildGroup("marketing"),
];
