"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";

export function FeaturedCaseStudy() {
  return (
    <section className="featured-service-case section">
      <div className="services-page-container">
        <p className="eyebrow">Featured project</p>
        <h2 className="services-editorial-heading">From a dated site to a sharper, faster launch.</h2>
        <div className="case-study-layout">
          <div className="case-study-mockups">
            <div className="case-browser">
              <div className="case-browser-bar"><i /><i /><i /><span>webcodder.case-study</span></div>
              <div className="case-browser-image">
                <ProjectArtwork
                  src="/projects/kingsland-digital.png"
                  alt="Kingsland Digital website displayed in a desktop browser"
                  label="Kingsland Digital"
                  caption="Digital Agency / Website"
                  sizes="(max-width: 820px) 94vw, 640px"
                />
              </div>
            </div>
            <div className="case-mobile">
              <ProjectArtwork
                src="/projects/kingsland-digital.png"
                alt="Kingsland Digital website mobile preview"
                label="Kingsland Digital"
                compact
                sizes="180px"
              />
            </div>
            <Link href="/projects/kingsland-digital">
              Digital Agency · Website <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="case-study-content">
            <div className="case-copy-block">
              <small>Client Challenge</small>
              <p>The client had an outdated website, slow performance, unclear messaging and a low enquiry conversion rate.</p>
            </div>
            <div className="case-copy-block">
              <small>Services Provided</small>
              <p>Strategy · UI/UX Design · Web Development · SEO · Performance Optimisation</p>
            </div>
            <div className="case-copy-block">
              <small>Solution</small>
              <p>We redesigned the complete digital experience, simplified the user journey, improved the visual hierarchy and developed a faster, conversion-focused website.</p>
            </div>
            <Link className="button button-dark" href="/projects/kingsland-digital">
              View Full Case Study <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
