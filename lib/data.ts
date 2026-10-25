import { caseStudies } from "@/lib/case-studies";

/** Card data for the project grids, derived from the case studies themselves. */
export const projects = caseStudies.map((study) => ({
  slug: study.slug,
  title: study.client,
  category: study.category,
  image: study.image,
  badge: study.badge,
}));
