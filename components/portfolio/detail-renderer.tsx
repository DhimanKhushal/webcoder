import type { PortfolioCollection } from "@/lib/portfolio";
import { SmoPortfolio } from "./smo-portfolio";
import { SeoPortfolio } from "./seo-portfolio";
import { WebsitePortfolio } from "./website-portfolio";
import { PaidPortfolio } from "./paid-portfolio";

export function PortfolioDetail({ collection }: { collection: PortfolioCollection }) {
  if (collection.slug === "smo") return <SmoPortfolio />;
  if (collection.slug === "seo") return <SeoPortfolio />;
  if (collection.slug === "websites") return <WebsitePortfolio />;
  return <PaidPortfolio platform={collection.slug} />;
}
