"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getCaseStudy, getCaseStudyPath, type CaseStudy } from "@/lib/case-studies";

/** Real client work, fanned out: two projects behind, one linked project in front. */
const stack = [
  { slug: "wings-chauffeurs", className: "left-0 top-[6%] w-[60%] -rotate-6", delay: 0.2 },
  { slug: "franchise-advisor", className: "right-0 top-0 w-[60%] rotate-[5deg]", delay: 0.3 },
  { slug: "kingsland-digital", className: "left-[12%] top-[24%] z-10 w-[76%]", delay: 0.4, front: true },
] as const;

function BrowserFrame({ study, priority }: { study: CaseStudy; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-ink-soft shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#242424] px-3.5 py-2.5" aria-hidden="true">
        <i className="size-2 rounded-full bg-white/25" />
        <i className="size-2 rounded-full bg-white/25" />
        <i className="size-2 rounded-full bg-white/25" />
        <span className="ml-2 truncate text-xs text-white/45">{study.client}</span>
      </div>
      <div className="relative aspect-[1.17] bg-[#202020]">
        {study.image && (
          <Image
            src={study.image}
            alt={`${study.client} website, built by Webcodder`}
            fill
            priority={priority}
            sizes="(max-width: 900px) 70vw, 420px"
            className="object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[1.08] w-full max-w-[560px]">
      <span
        aria-hidden="true"
        className="absolute inset-[12%] rounded-full bg-accent/20 blur-3xl"
      />
      {stack.map((item) => {
        const study = getCaseStudy(item.slug);
        if (!study) return null;
        const front = "front" in item;

        return (
          <motion.div
            key={item.slug}
            className={`absolute ${item.className}`}
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
          >
            {front ? (
              <Link
                href={getCaseStudyPath(study.slug)}
                className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <BrowserFrame study={study} priority />
                <span className="absolute -bottom-5 left-5 flex min-h-11 items-center gap-3 rounded-full border border-white/15 bg-ink/90 py-2 pl-4 pr-3 text-white shadow-lg backdrop-blur-md">
                  <span className="flex flex-col leading-tight">
                    <strong className="text-sm font-semibold">{study.client}</strong>
                    <small className="text-xs text-white/55">{study.category}</small>
                  </span>
                  <span className="grid size-7 place-items-center rounded-full bg-accent text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ) : (
              <div className="opacity-80">
                <BrowserFrame study={study} />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
