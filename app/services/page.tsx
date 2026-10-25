import type { Metadata } from "next";
import { BeforeAfterTransformation } from "@/components/services/before-after-transformation";
import { FeaturedCaseStudy } from "@/components/services/featured-case-study";
import { ServiceDirectory } from "@/components/services/service-directory";
import { ServicesCTA } from "@/components/services/services-cta";
import { ServicesHero } from "@/components/services/services-hero";
import { StickyServices } from "@/components/services/sticky-services";
import { TechnologyMarquee } from "@/components/services/technology-marquee";
import { WhatYouGet } from "@/components/services/what-you-get";
import { WorkProcess } from "@/components/services/work-process";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, UI/UX, web development, branding, digital marketing and SEO services designed to move modern businesses forward.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDirectory />
      <StickyServices />
      <WhatYouGet />
      <WorkProcess />
      <FeaturedCaseStudy />
      <TechnologyMarquee />
      <BeforeAfterTransformation />
      <ServicesCTA />
    </>
  );
}
