import { tw } from "@/lib/tailwind";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Boxes,
  Code2,
  Layers3,
  PenTool,
} from "lucide-react";
import { CTA } from "@/components/cta";
import { FAQ } from "@/components/faq";
import { HeroVisual } from "@/components/hero-visual";
import { IndustriesSection } from "@/components/industries-section";
import { ProjectCard } from "@/components/project-card";
import { ProjectScopeBuilder } from "@/components/project-scope/ProjectScopeBuilder";
import { projects, services } from "@/lib/data";

const serviceIcons = [PenTool, Code2, Boxes, Layers3];

export default function Home() {
  return (
    <>
      <section className={tw("hero")}>
        <div className={tw("container")}>
          <div className={tw("hero-grid")}>
            <div>
              <p className={tw("eyebrow")} data-hero>Independent digital agency · Chandigarh</p>
              <h1 data-hero>Ideas, coded <em>into impact.</em></h1>
              <p className={tw("hero-lede")} data-hero>
                We turn ambitious ideas into high-performing brands, websites
                and digital products people actually enjoy using.
              </p>
              <div className={tw("hero-actions")} data-hero>
                <Link href="/projects" className={tw("button")}>
                  Explore our work <ArrowUpRight size={18} />
                </Link>
                <Link href="/contact" className={tw("button button-outline")}>
                  Start a conversation
                </Link>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className={tw("hero-bottom")} data-hero>
            <div className={tw("stat")}><strong>40+</strong><span>Projects delivered</span></div>
            <div className={tw("stat")}><strong>8+</strong><span>Years of craft</span></div>
            <div className={tw("stat")}><strong>15+</strong><span>Industries explored</span></div>
            <div className={tw("stat")}><strong>100%</strong><span>Built with care</span></div>
          </div>
        </div>
      </section>

      <div className={tw("marquee")} aria-hidden="true" data-home-section>
        <div className={tw("marquee-track")}>
          {[...Array(2)].flatMap((_, group) =>
            ["Strategy", "UI/UX", "Web Development", "Branding", "Software"].map((item) => (
              <span key={`${group}-${item}`}>{item}</span>
            ))
          )}
        </div>
      </div>

      <section className={tw("section")} data-home-section>
        <div className={tw("container intro-grid")}>
          <div className={tw("intro-note")} data-reveal-card>
            <strong>Digital, but deeply human.</strong>
            <p>Small senior team. Big attention to every interaction.</p>
          </div>
          <div data-reveal-card>
            <p className={tw("eyebrow")}>Hello, we&apos;re Webcodder</p>
            <h2 className={tw("section-title")}>
              We build digital experiences that work as good as they look.
            </h2>
            <p className={tw("section-copy")}>
              From the first messy sketch to a polished launch, we bring
              strategy, design and engineering together under one roof. Less
              handoff, more clarity, better results.
            </p>
          </div>
        </div>
      </section>

      <section className={tw("section")} style={{ paddingTop: 0 }} data-home-section>
        <div className={tw("container")}>
          <p className={tw("eyebrow")} data-reveal>What we do</p>
          <h2 className={tw("section-title")} data-reveal>One team. Every digital touchpoint.</h2>
          <div className={tw("services-grid")}>
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article className={tw("service-card")} key={service.title} data-reveal-card>
                  <span className={tw("service-number")}>{service.number}</span>
                  <Icon className={tw("service-icon")} size={30} strokeWidth={1.5} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectScopeBuilder />

      <section className={tw("section dark-section")}>
        <div className={tw("container")}>
          <div data-home-section>
            <div className={tw("work-head")}>
              <div>
                <p className={tw("eyebrow")}>Selected work</p>
                <h2 className={tw("section-title")}>Proof lives in the product.</h2>
              </div>
              <Link href="/projects" className={tw("button")}>
                View all projects <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className={tw("work-grid")}>
              {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
            </div>
          </div>
          <div className={tw("tech-strip")} data-home-section>
            <div data-reveal-card>
              <p className={tw("eyebrow")}>Technology stack</p>
              <h2 className={tw("section-title")} style={{ fontSize: "clamp(42px, 5vw, 68px)" }}>
                The right tools. No tech theatre.
              </h2>
              <p className={tw("section-copy")}>
                We choose the stack that best serves your product, users and team.
              </p>
            </div>
            <div className={tw("tech-cloud")}>
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GSAP", "Figma", "WordPress", "Shopify", "Laravel"].map((tech, index) => (
                <span className={tw(`tech-pill ${index < 3 ? "accent" : ""}`)} key={tech} data-reveal-card>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <IndustriesSection />

      <section className={tw("section")} data-home-section>
        <div className={tw("container")}>
          <p className={tw("eyebrow")} data-reveal>Client notes</p>
          <h2 className={tw("section-title")} data-reveal>Good work gets talked about.</h2>
          <div className={tw("reviews-grid")}>
            {[
              ["They understood the business before touching the design. The final website feels exactly like us—only sharper.", "Seema D.", "Amazing Aesthetics"],
              ["Webcodder made a complicated brief feel simple. Clear communication, thoughtful design and a strong launch.", "Aman K.", "Kingsland Digital"],
              ["Fast, creative and refreshingly honest. We saw better engagement within the first few weeks.", "Rohan M.", "Franchise Advisor"],
            ].map(([quote, name, company]) => (
              <article className={tw("review-card")} key={company} data-reveal-card>
                <div className={tw("stars")}>★★★★★</div>
                <blockquote>“{quote}”</blockquote>
                <div className={tw("review-person")}>
                  <span className={tw("avatar")}>{name[0]}</span>
                  <div><strong>{name}</strong><small>{company}</small></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={tw("section")} style={{ paddingTop: 0 }} data-home-section>
        <div className={tw("container")}>
          <p className={tw("eyebrow")} data-reveal>FAQs</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 30 }}>
            <h2 className={tw("section-title")} data-reveal>Questions, answered.</h2>
            <ArrowDownRight size={42} />
          </div>
          <FAQ />
        </div>
      </section>
      <div data-home-section>
        <CTA />
      </div>
    </>
  );
}
