"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudyMetrics } from "@/lib/services-page-data";

export function FeaturedCaseStudy() {
  return (
    <section className="featured-service-case section">
      <div className="services-page-container">
        <p className="eyebrow">Featured Result</p>
        <h2 className="services-editorial-heading">Services that create measurable results.</h2>
        <div className="case-study-layout">
          <div className="case-study-mockups">
            <div className="case-browser">
              <div className="case-browser-bar"><i /><i /><i /><span>webcodder.case-study</span></div>
              <div className="case-browser-image">
                <Image
                  src="/projects/kingsland-digital.png"
                  alt="Kingsland Digital website displayed in a desktop browser"
                  fill
                  sizes="(max-width: 820px) 94vw, 640px"
                />
              </div>
            </div>
            <div className="case-mobile">
              <Image
                src="/projects/kingsland-digital.png"
                alt="Kingsland Digital website mobile preview"
                fill
                sizes="180px"
              />
            </div>
            <Link href="/projects">
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
            <div className="case-metrics">
              {caseStudyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </motion.div>
              ))}
            </div>
            <p className="case-disclaimer">Example case study metrics. Replace with verified project results before publishing.</p>
            <Link className="button button-dark" href="/projects">
              View Full Case Study <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
