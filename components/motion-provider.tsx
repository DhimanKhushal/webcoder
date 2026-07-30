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
      gsap.registerPlugin(ScrollTrigger);

      const context = gsap.context(() => {
        gsap.fromTo(
          "[data-hero]",
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out" }
        );
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.fromTo(
            element,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            }
          );
        });
        gsap.to("[data-orbit]", {
          rotation: 360,
          duration: 48,
          repeat: -1,
          ease: "none",
        });
      });
      cleanup = () => context.revert();
    }

    animate();
    return () => cleanup();
  }, [pathname]);

  return children;
}
