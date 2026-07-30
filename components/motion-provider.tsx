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

        const orbit = document.querySelector("[data-orbit]");
        if (orbit) {
          gsap.to(orbit, {
            rotation: 360,
            duration: 48,
            repeat: -1,
            ease: "none",
          });
        }
      });
      ScrollTrigger.refresh();
      cleanup = () => {
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
