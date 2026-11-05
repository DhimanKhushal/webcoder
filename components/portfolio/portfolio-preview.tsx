"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { caseStudies, getCaseStudyPath } from "@/lib/case-studies";
import styles from "./portfolio.module.css";

const previewProjects = [caseStudies[1], caseStudies[0], caseStudies[3], caseStudies[2]];

export function PortfolioPreview() {
  const [active, setActive] = useState(0);
  const project = previewProjects[active];

  return (
    <div className={styles.preview}>
      <div className={styles.previewHeading}>
        <span>Selected website work</span>
        <Link href="/portfolio/websites">View all websites <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </div>
      <Link href={getCaseStudyPath(project.slug)} className={styles.previewLink} aria-label={`View ${project.client} project`}>
        <div className={styles.previewImage} id="portfolio-project-preview">
          {previewProjects.map((item, index) => item.image ? (
            <Image key={item.slug} src={item.image} alt={`${item.client} website`} fill priority={index === 0}
              sizes="(max-width: 700px) 90vw, (max-width: 1000px) 80vw, 560px"
              className={index === active ? styles.previewActive : styles.previewInactive} aria-hidden={index !== active} />
          ) : null)}
        </div>
        <div className={styles.previewCaption} aria-live="polite" aria-atomic="true">
          <span><strong>{project.client}</strong><span>{project.industry} · Website design &amp; development</span></span>
          <ArrowUpRight size={22} aria-hidden="true" />
        </div>
      </Link>
      <div className={styles.previewPicker} role="group" aria-label="Preview a website project">
        {previewProjects.map((item, index) => (
          <button key={item.slug} type="button" aria-label={`Preview ${item.client}`} aria-pressed={active === index} aria-controls="portfolio-project-preview" onClick={() => setActive(index)}>
            <span className={styles.previewThumbnail} aria-hidden="true">
              {item.image && <Image src={item.image} alt="" fill sizes="130px" />}
            </span>
            <span>{item.client}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
