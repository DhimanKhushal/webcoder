"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    let cleanup = () => {};

    async function animate() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { default: Lenis } = await import("lenis");
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        touchMultiplier: 1.1,
        wheelMultiplier: 0.9,
      });
      const updateScrollTrigger = () => ScrollTrigger.update();
      const updateLenis = (time: number) => lenis.raf(time * 1000);

      lenis.on("scroll", updateScrollTrigger);
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);
      let removePhilosophyPointer = () => {};

      const context = gsap.context(() => {
        gsap.fromTo(
          "[data-hero]",
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out" }
        );

        if (pathname === "/") {
          gsap.utils.toArray<HTMLElement>("[data-home-section]").forEach((section) => {
            const cards = section.querySelectorAll<HTMLElement>("[data-reveal-card]");
            const timeline = gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: "top 86%",
                once: true,
              },
            });

            timeline.fromTo(
              section,
              {
                y: 64,
                autoAlpha: 0,
                clipPath: "inset(0 0 12% 0 round 28px)",
              },
              {
                y: 0,
                autoAlpha: 1,
                clipPath: "inset(0 0 0% 0 round 0px)",
                duration: 1,
                ease: "power3.out",
                clearProps: "transform,clipPath",
              }
            );

            if (cards.length) {
              timeline.fromTo(
                cards,
                { y: 48, autoAlpha: 0 },
                {
                  y: 0,
                  autoAlpha: 1,
                  duration: 0.85,
                  stagger: 0.1,
                  ease: "power3.out",
                  clearProps: "transform",
                },
                "-=0.7"
              );
            }
          });
        } else {
          gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.fromTo(
              element,
              {
                y: 60,
                opacity: 0,
                clipPath: "inset(0 0 12% 0 round 22px)",
              },
              {
                y: 0,
                opacity: 1,
                clipPath: "inset(0 0 0% 0 round 0px)",
                duration: 0.95,
                ease: "power3.out",
                clearProps: "transform,clipPath",
                scrollTrigger: { trigger: element, start: "top 88%", once: true },
              }
            );
          });
        }

        const servicesOverview = document.querySelector<HTMLElement>("[data-services-overview]");
        if (servicesOverview) {
          const header = servicesOverview.querySelector<HTMLElement>("[data-services-overview-header]");
          const columns = gsap.utils.toArray<HTMLElement>(
            "[data-services-overview-column]",
            servicesOverview
          );
          const footer = servicesOverview.querySelector<HTMLElement>("[data-services-overview-footer]");
          const reveal = gsap.timeline({
            scrollTrigger: {
              trigger: servicesOverview,
              start: "top 82%",
              once: true,
            },
          });

          if (header) {
            reveal.fromTo(
              header,
              { y: 24, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.78,
                ease: "power3.out",
                clearProps: "transform",
              }
            );
          }

          if (columns.length) {
            reveal.fromTo(
              columns,
              { y: 24, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.72,
                stagger: 0.1,
                ease: "power3.out",
                clearProps: "transform",
              },
              header ? "-=0.48" : 0
            );
          }

          if (footer) {
            reveal.fromTo(
              footer,
              { y: 18, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.62,
                ease: "power3.out",
                clearProps: "transform",
              },
              "-=0.28"
            );
          }
        }

        const philosophy = document.querySelector<HTMLElement>("[data-philosophy]");
        if (philosophy) {
          const content = philosophy.querySelector<HTMLElement>("[data-philosophy-content]");
          const words = gsap.utils.toArray<HTMLElement>("[data-philosophy-word]", philosophy);
          const indicators = gsap.utils.toArray<HTMLElement>("[data-philosophy-indicator]", philosophy);
          const progress = philosophy.querySelector<HTMLElement>("[data-philosophy-progress]");
          const blueprint = philosophy.querySelector<HTMLElement>("[data-philosophy-blueprint]");

          const reveal = gsap.timeline({
            scrollTrigger: {
              trigger: philosophy,
              start: "top 78%",
              once: true,
            },
          });

          if (content) {
            reveal.fromTo(
              content,
              { y: 20, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.72, ease: "power3.out" }
            );
          }

          reveal.fromTo(
            words,
            { y: 20, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.72,
              stagger: 0.14,
              ease: "power3.out",
              clearProps: "transform",
            },
            content ? "-=0.48" : 0
          );

          if (progress && words.length) {
            gsap.fromTo(
              progress,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: words[0],
                  start: "top 68%",
                  endTrigger: words[words.length - 1],
                  end: "top 68%",
                  scrub: true,
                },
              }
            );
          }

          indicators.forEach((indicator, index) => {
            gsap.set(indicator, { backgroundColor: "#f8fafc", scale: 0.72 });
            gsap.to(indicator, {
              backgroundColor: "#2563eb",
              scale: 1,
              duration: 0.35,
              ease: "power2.out",
              scrollTrigger: {
                trigger: words[index],
                start: "top 68%",
                once: true,
              },
            });
          });

          if (blueprint && window.matchMedia("(pointer: fine)").matches) {
            const moveX = gsap.quickTo(blueprint, "x", { duration: 0.8, ease: "power3.out" });
            const moveY = gsap.quickTo(blueprint, "y", { duration: 0.8, ease: "power3.out" });
            const handlePointerMove = (event: PointerEvent) => {
              const bounds = philosophy.getBoundingClientRect();
              moveX(((event.clientX - bounds.left) / bounds.width - 0.5) * 12);
              moveY(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
            };
            const resetBlueprint = () => {
              moveX(0);
              moveY(0);
            };

            philosophy.addEventListener("pointermove", handlePointerMove);
            philosophy.addEventListener("pointerleave", resetBlueprint);
            removePhilosophyPointer = () => {
              philosophy.removeEventListener("pointermove", handlePointerMove);
              philosophy.removeEventListener("pointerleave", resetBlueprint);
            };
          }
        }

        const journey = document.querySelector<HTMLElement>("[data-client-journey]");
        if (journey) {
          const header = journey.querySelector<HTMLElement>("[data-journey-header]");
          const milestones = gsap.utils.toArray<HTMLElement>("[data-journey-milestone]", journey);
          const progress = journey.querySelector<HTMLElement>("[data-journey-progress]");
          const endStatement = journey.querySelector<HTMLElement>("[data-journey-end]");

          const setActiveMilestone = (activeIndex: number) => {
            milestones.forEach((milestone, index) => {
              milestone.classList.toggle("is-active", index === activeIndex);
              milestone.classList.toggle("is-complete", index < activeIndex);
            });
          };

          if (header) {
            gsap.fromTo(
              header,
              { y: 20, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.78,
                ease: "power3.out",
                clearProps: "transform",
                scrollTrigger: { trigger: header, start: "top 82%", once: true },
              }
            );
          }

          milestones.forEach((milestone, index) => {
            gsap.fromTo(
              milestone,
              { y: 24, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.72,
                ease: "power3.out",
                clearProps: "transform,opacity,visibility",
                scrollTrigger: { trigger: milestone, start: "top 88%", once: true },
              }
            );

            ScrollTrigger.create({
              trigger: milestone,
              start: "top 62%",
              end: "bottom 42%",
              onEnter: () => setActiveMilestone(index),
              onEnterBack: () => setActiveMilestone(index),
            });
          });

          if (progress && milestones.length) {
            gsap.fromTo(
              progress,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: milestones[0],
                  start: "top 62%",
                  endTrigger: milestones[milestones.length - 1],
                  end: "top 62%",
                  scrub: true,
                },
              }
            );
          }

          if (endStatement) {
            gsap.fromTo(
              endStatement,
              { y: 20, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                ease: "power3.out",
                clearProps: "transform",
                scrollTrigger: { trigger: endStatement, start: "top 84%", once: true },
              }
            );
          }
        }
      });
      ScrollTrigger.refresh();
      cleanup = () => {
        removePhilosophyPointer();
        context.revert();
        gsap.ticker.remove(updateLenis);
        lenis.off("scroll", updateScrollTrigger);
        lenis.destroy();
      };
    }

    animate();
    return () => cleanup();
  }, [pathname]);

  return children;
}
