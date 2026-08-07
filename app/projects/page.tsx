import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected Webcodder work across healthcare, digital, consulting and luxury services.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero dark-section">
        <div className="container">
          <p className="eyebrow" data-hero>Selected projects</p>
          <h1 data-hero>Work that does<br /><span>the talking.</span></h1>
          <div className="page-hero-copy" data-hero>
            <p />
            <p style={{ color: "#94A3B8" }}>
              A selection of brands, websites and digital platforms designed to
              create clarity, attention and meaningful business momentum.
            </p>
          </div>
        </div>
      </section>
      <section className="dark-section">
        <div className="container projects-page-grid">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
      <CTA />
    </>
  );
}
