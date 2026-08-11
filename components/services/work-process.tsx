"use client";

import { tw } from "@/lib/tailwind";

import { useEffect, useRef } from "react";
import { processSteps } from "@/lib/services-page-data";

export function WorkProcess() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup = () => {};

    async function setup() {
      if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        const setStatus = (card: HTMLElement, status: string) => {
          card.dataset.status = status;
          const label = card.querySelector("small");
          if (label) label.textContent = status;
        };

        gsap.fromTo(
          ".process-progress-fill",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".services-process-list",
              start: "top 64%",
              end: "bottom 62%",
              scrub: 0.5,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>(".services-process-card").forEach((card) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 58%",
            end: "bottom 42%",
            toggleClass: { targets: card, className: "active" },
            onEnter: () => {
              setStatus(card, "Active");
              if (card.previousElementSibling?.classList.contains("services-process-card")) {
                setStatus(card.previousElementSibling as HTMLElement, "Complete");
              }
            },
            onLeave: () => {
              setStatus(card, "Complete");
            },
            onEnterBack: () => {
              setStatus(card, "Active");
            },
            onLeaveBack: () => {
              setStatus(card, "Upcoming");
            },
          });
        });
      }, rootRef);

      cleanup = () => context.revert();
    }

    setup();
    return () => cleanup();
  }, []);

  return (
    <section className={tw("services-process section")} ref={rootRef}>
      <div className={tw("services-page-container")}>
        <div className={tw("services-section-head")}>
          <div>
            <p className={tw("eyebrow")}>Our Process</p>
            <h2>From first conversation to final launch.</h2>
          </div>
          <p>A connected, transparent process that keeps decisions clear and momentum visible.</p>
        </div>
        <div className={tw("services-process-list")}>
          <div className={tw("process-progress-track")} aria-hidden="true">
            <span className={tw("process-progress-fill")} />
          </div>
          {processSteps.map((step, index) => (
            <article
              className={tw("services-process-card")}
              data-status={index === 0 ? "Active" : "Upcoming"}
              key={step.number}
            >
              <span className={tw("process-card-number")}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <small>{index === 0 ? "Active" : "Upcoming"}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
