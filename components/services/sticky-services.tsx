"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { ProjectArtwork } from "@/components/project-artwork";
import { useEffect, useRef, useState } from "react";
import { getServicePath } from "@/lib/service-pages";
import { serviceDetails, type Service } from "@/lib/services-page-data";

function ServiceDetailPanel({ service }: { service: Service }) {
  return (
    <article className="service-detail-panel" id={`service-${service.number}`} data-service-panel>
      <div className="service-detail-head">
        <span>{service.number}</span>
        <small>{service.category}</small>
      </div>
      <h3>{service.title}</h3>
      <p className="service-overview-copy">{service.overview}</p>

      <div className="service-information-grid">
        <div>
          <h4>What we deliver</h4>
          <div className="deliverable-list">
            {service.deliverables.map((item) => (
              <span key={item}>
                <Check size={13} />
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4>{service.toolsLabel}</h4>
          <div className="service-tool-pills">
            {service.tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
          <div className="service-timeline">
            <small>Estimated timeline</small>
            <strong>{service.timeline}</strong>
          </div>
        </div>
      </div>

      <div className="service-project-preview">
        <div className="service-browser-bar">
          <i />
          <i />
          <i />
          <span>webcodder.project</span>
        </div>
        <div className="service-project-image">
          <ProjectArtwork
            src={service.project.image}
            alt={`${service.project.title} website preview`}
            label={service.project.title}
            caption={service.project.category}
            sizes="(max-width: 820px) 92vw, 620px"
          />
        </div>
        <div className="service-project-meta">
          <div>
            <small>{service.project.category}</small>
            <strong>{service.project.title}</strong>
          </div>
          <span>{service.project.metric}</span>
        </div>
      </div>

      <Link className="service-explore-link" href={getServicePath(service.slug)}>
        {service.cta} <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}

export function StickyServices() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let cleanup = () => {};

    async function setup() {
      if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-service-panel]");
        panels.forEach((panel, index) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top 48%",
            end: "bottom 48%",
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });

          gsap.fromTo(
            panel,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: panel, start: "top 84%", once: true },
            }
          );
        });
      }, rootRef);

      cleanup = () => context.revert();
    }

    setup();
    return () => cleanup();
  }, []);

  return (
    <section className="sticky-services" id="service-details" ref={rootRef}>
      <div className="services-page-container sticky-services-layout">
        <aside className="service-sticky-nav">
          <p className="eyebrow">Detailed services</p>
          <h2>Depth where it matters.</h2>
          <nav aria-label="Service details">
            {serviceDetails.map((service, index) => (
              <a
                className={index === activeIndex ? "active" : ""}
                href={`#service-${service.number}`}
                key={service.number}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <span>{service.number}</span>
                <strong>{service.title}</strong>
                <i />
              </a>
            ))}
          </nav>
          <div className="service-progress" aria-hidden="true">
            <span style={{ transform: `scaleY(${(activeIndex + 1) / serviceDetails.length})` }} />
          </div>
        </aside>
        <div className="service-detail-stack">
          {serviceDetails.map((service) => <ServiceDetailPanel service={service} key={service.number} />)}
        </div>
      </div>
    </section>
  );
}
