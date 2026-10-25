"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function AnimatedDivider() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};

    async function setupDivider() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const root = rootRef.current;
      if (!root) return;
      const line = root.querySelector<HTMLElement>("[data-comparison-line]");
      const badge = root.querySelector<HTMLElement>("[data-comparison-badge]");
      if (!line || !badge) return;

      const context = gsap.context(() => {
        const desktop = window.matchMedia("(min-width: 1024px)").matches;
        gsap.fromTo(
          line,
          { scaleX: desktop ? 1 : 0, scaleY: desktop ? 0 : 1 },
          {
            scaleX: 1,
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 80%",
              end: "bottom 28%",
              scrub: 0.8,
            },
          }
        );
        gsap.fromTo(
          badge,
          { rotate: -8, scale: 0.92 },
          {
            rotate: 8,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 75%",
              end: "bottom 35%",
              scrub: 0.8,
            },
          }
        );
      }, root);

      cleanup = () => context.revert();
      ScrollTrigger.refresh();
    }

    setupDivider();
    return () => cleanup();
  }, []);

  return (
    <div ref={rootRef} className="relative h-24 w-full lg:h-auto lg:min-h-full lg:w-[72px]" aria-hidden="true">
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#121212]/10 lg:left-1/2 lg:top-0 lg:h-full lg:w-px lg:-translate-x-1/2 lg:translate-y-0" />
      <div
        data-comparison-line
        className="absolute left-0 top-1/2 h-0.5 w-full origin-left -translate-y-1/2 bg-[#4F8CFF] shadow-[0_0_16px_rgba(79,140,255,0.42)] lg:left-1/2 lg:top-0 lg:h-full lg:w-0.5 lg:origin-top lg:-translate-x-1/2 lg:translate-y-0"
      />
      <div
        data-comparison-badge
        className="absolute left-1/2 top-1/2 z-10 grid size-18 -translate-x-1/2 -translate-y-1/2 place-items-center overflow-hidden rounded-full border-2 border-[#4F8CFF] bg-white shadow-[0_0_0_8px_rgba(79,140,255,0.11)] sm:size-20"
      >
        <Image src="/webcodder-logo.png" alt="" width={82} height={21} unoptimized className="h-auto w-14 object-contain sm:w-16" />
      </div>
      <span className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 animate-[ping_2.6s_ease-in-out_infinite] rounded-full border border-[#4F8CFF]/30 motion-reduce:animate-none sm:size-22" />
    </div>
  );
}
