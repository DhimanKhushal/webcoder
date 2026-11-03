"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FileText, Link2, MapPin, Settings2, Target } from "lucide-react";
import styles from "@/components/portfolio/portfolio.module.css";

const services = [
  { icon: Target, title: "Keyword research", copy: "Map the language people use to find a service, then group topics by intent and relevance to the business." },
  { icon: FileText, title: "On-page SEO", copy: "Improve page structure, titles, internal links and useful content so each page is clear to people and search engines." },
  { icon: Settings2, title: "Technical SEO", copy: "Review crawl access, indexation, site structure, mobile behavior and page performance; fix issues in priority order." },
  { icon: Link2, title: "Off-page SEO", copy: "Build a credible authority plan around relevant mentions and useful resources, with quality and context ahead of volume." },
  { icon: MapPin, title: "Local SEO", copy: "Align local pages and business details so nearby customers can understand where the business operates and what it offers." },
];

export function SeoServiceGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <div className={styles.seoServiceGrid}>
      {services.map(({ icon: Icon, title, copy }, index) => (
        <motion.article
          className={styles.seoService}
          key={title}
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.48, delay: reducedMotion ? 0 : index * 0.07, ease: "easeOut" }}
        >
          <span className={styles.seoServiceIcon}><Icon size={21} strokeWidth={1.6} aria-hidden="true" /></span>
          <h3>{title}</h3><p>{copy}</p>
        </motion.article>
      ))}
    </div>
  );
}
