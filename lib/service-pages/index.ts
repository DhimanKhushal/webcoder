import { aiServices } from "./ai";
import { designServices } from "./design";
import { developmentServices } from "./development";
import { marketingServices } from "./marketing";
import { serviceCategories, type ServiceCategorySlug, type ServicePage } from "./types";

export type { ServiceCategory, ServiceCategorySlug, ServicePage } from "./types";
export { serviceCategories } from "./types";

export const servicePages: ServicePage[] = [
  ...aiServices,
  ...designServices,
  ...developmentServices,
  ...marketingServices,
];

const servicePagesBySlug = new Map(servicePages.map((service) => [service.slug, service]));

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePagesBySlug.get(slug);
}

export function getServicePath(slug: string): string {
  return `/services/${slug}`;
}

export function getRelatedServices(service: ServicePage): ServicePage[] {
  return service.related
    .map((slug) => servicePagesBySlug.get(slug))
    .filter((related): related is ServicePage => related !== undefined);
}

export function getServicesByCategory(category: ServiceCategorySlug): ServicePage[] {
  return servicePages.filter((service) => service.category === category);
}

export function getCategory(service: ServicePage) {
  return serviceCategories[service.category];
}
