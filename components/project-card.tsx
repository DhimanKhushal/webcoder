import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import { getCaseStudyPath } from "@/lib/case-studies";

export type Project = {
  slug: string;
  title: string;
  category: string;
  image?: string;
  badge: string;
};

/**
 * `headingLevel` follows the page: the grid sits under an h2 on the home page
 * but directly under the h1 on /projects, where an h3 would skip a level.
 */
export function ProjectCard({ project, headingLevel = 3 }: { project: Project; headingLevel?: 2 | 3 }) {
  const Heading = `h${headingLevel}` as "h2" | "h3";
  return (
    <Link className="project-card" href={getCaseStudyPath(project.slug)} data-reveal data-reveal-card>
      <div className="project-image">
        <ProjectArtwork
          src={project.image}
          alt={`${project.title} website project`}
          label={project.title}
          caption={project.category}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <span className="project-badge">{project.badge}</span>
      </div>
      <div className="project-meta">
        <div>
          <Heading>{project.title}</Heading>
          <p>{project.category}</p>
        </div>
        <ArrowUpRight size={25} />
      </div>
    </Link>
  );
}
