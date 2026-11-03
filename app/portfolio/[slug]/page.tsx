import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioCollection, getPortfolioPath, portfolioCollections } from "@/lib/portfolio";
import { PortfolioDetail } from "@/components/portfolio/detail-renderer";

type PortfolioRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: PortfolioRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getPortfolioCollection(slug);

  if (!collection) return {};

  return {
    title: `${collection.title} Portfolio`,
    description: collection.summary,
    alternates: { canonical: getPortfolioPath(collection.slug) },
    // Keep detail pages out of search until campaign and ranking evidence is approved.
    robots: { index: false, follow: true },
  };
}

export default async function PortfolioDetailRoute({ params }: PortfolioRouteProps) {
  const { slug } = await params;
  const collection = getPortfolioCollection(slug);

  if (!collection) notFound();

  return <PortfolioDetail collection={collection} />;
}
