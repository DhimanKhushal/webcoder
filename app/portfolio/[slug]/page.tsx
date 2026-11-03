import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPortfolioCollection, getPortfolioPath, portfolioCollections } from "@/lib/portfolio";

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
    // Remove the noindex directive when these empty pages have real content.
    robots: { index: false, follow: true },
  };
}

export default async function PortfolioDetailRoute({ params }: PortfolioRouteProps) {
  const { slug } = await params;

  if (!getPortfolioCollection(slug)) notFound();

  // Intentionally empty for Simran's next implementation pass.
  // See docs/portfolio-handoff.md for the approved seven-page scope.
  return null;
}
