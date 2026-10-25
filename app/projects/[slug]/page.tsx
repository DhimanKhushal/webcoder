import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { caseStudies, getCaseStudy, getCaseStudyPath } from "@/lib/case-studies";

type CaseStudyRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: CaseStudyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return {};

  return {
    title: `${study.client} — Case Study`,
    description: study.metaDescription,
    alternates: { canonical: getCaseStudyPath(study.slug) },
    openGraph: {
      type: "article",
      title: `${study.client} — Case Study | Webcodder`,
      description: study.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.client} — Case Study | Webcodder`,
      description: study.metaDescription,
    },
  };
}

export default async function CaseStudyRoute({ params }: CaseStudyRouteProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return <CaseStudyPage study={study} />;
}
