import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import { caseStudies, getCaseStudyPath } from "@/lib/case-studies";
import styles from "./portfolio.module.css";

export function FeaturedProjects() {
  return (
    <div className={styles.projectGrid}>
      {caseStudies.map((project) => (
        <Link key={project.slug} href={getCaseStudyPath(project.slug)} className={styles.project}>
          <div className={styles.projectImage}>
            <ProjectArtwork src={project.image} alt={`${project.client} website design`} label={project.client}
              sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1248px) 46vw, 564px" />
          </div>
          <div className={styles.projectCaption}>
            <div><h3>{project.client}</h3><p>{project.industry}</p></div>
            <span className={styles.projectArrow}><ArrowUpRight size={22} aria-hidden="true" /></span>
          </div>
        </Link>
      ))}
    </div>
  );
}
