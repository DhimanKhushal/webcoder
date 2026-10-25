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

export function ProjectCard({ project }: { project: Project }) {
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
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <ArrowUpRight size={25} />
      </div>
    </Link>
  );
}
