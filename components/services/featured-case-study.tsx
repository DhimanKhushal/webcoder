"use client";

import { tw } from "@/lib/tailwind";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudyMetrics } from "@/lib/services-page-data";

export function FeaturedCaseStudy() {
  return (
    <section className={tw("featured-service-case section")}>
      <div className={tw("services-page-container")}>
        <p className={tw("eyebrow")}>Featured Result</p>
        <h2 className={tw("services-editorial-heading")}>Services that create measurable results.</h2>
        <div className={tw("case-study-layout")}>
          <div className={tw("case-study-mockups")}>
            <div className={tw("case-browser")}>
              <div className={tw("case-browser-bar")}><i /><i /><i /><span>webcodder.case-study</span></div>
              <div className={tw("case-browser-image")}>
                <Image
                  src="/projects/kingsland-digital.png"
                  alt="Kingsland Digital website displayed in a desktop browser"
                  fill
                  sizes="(max-width: 820px) 94vw, 640px"
                />
              </div>
            </div>
            <div className={tw("case-mobile")}>
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
          <div className={tw("case-study-content")}>
            <div className={tw("case-copy-block")}>
              <small>Client Challenge</small>
              <p>The client had an outdated website, slow performance, unclear messaging and a low enquiry conversion rate.</p>
            </div>
            <div className={tw("case-copy-block")}>
              <small>Services Provided</small>
              <p>Strategy · UI/UX Design · Web Development · SEO · Performance Optimisation</p>
            </div>
            <div className={tw("case-copy-block")}>
              <small>Solution</small>
              <p>We redesigned the complete digital experience, simplified the user journey, improved the visual hierarchy and developed a faster, conversion-focused website.</p>
            </div>
            <div className={tw("case-metrics")}>
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
            <p className={tw("case-disclaimer")}>Example case study metrics. Replace with verified project results before publishing.</p>
            <Link className={tw("button button-dark")} href="/projects">
              View Full Case Study <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
