import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/service-detail/service-detail-page";
import { getServicePage, getServicePath, servicePages } from "@/lib/service-pages";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: getServicePath(service.slug) },
    openGraph: {
      type: "article",
      title: `${service.title} | Webcodder`,
      description: service.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Webcodder`,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
