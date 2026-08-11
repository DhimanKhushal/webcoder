import { tw } from "@/lib/tailwind";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  image: string;
  badge: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={tw("project-card")} data-reveal data-reveal-card>
      <div className={tw("project-image")}>
        <Image
          src={project.image}
          alt={`${project.title} website project`}
          width={720}
          height={590}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <span className={tw("project-badge")}>{project.badge}</span>
      </div>
      <div className={tw("project-meta")}>
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <ArrowUpRight size={25} />
      </div>
    </article>
  );
}
