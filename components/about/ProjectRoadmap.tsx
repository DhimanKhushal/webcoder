"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  Code2,
  FlaskConical,
  Lightbulb,
  PanelsTopLeft,
  PenTool,
  Rocket,
  Search,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef } from "react";

interface RoadmapStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

const roadmapSteps: RoadmapStep[] = [
  {
    title: "Business Idea",
    description: "We clarify the opportunity, audience and business outcome worth building toward.",
    icon: Lightbulb,
  },
  {
    title: "Deep Research",
    description: "Market, competitor and user insights turn assumptions into informed direction.",
    icon: Search,
  },
  {
    title: "Wireframe",
    description: "Content, journeys and functionality take shape before visual decisions begin.",
    icon: PenTool,
  },
  {
    title: "UI Design",
    description: "A distinctive interface system brings the strategy to life across every screen.",
    icon: PanelsTopLeft,
  },
  {
    title: "Development",
    description: "Clean engineering transforms approved designs into a fast, scalable product.",
    icon: Code2,
  },
  {
    title: "Testing",
    description: "We inspect performance, responsiveness, accessibility and real-world behaviour.",
    icon: FlaskConical,
  },
  {
    title: "Launch",
    description: "A measured release puts the product live with analytics and systems ready.",
    icon: Rocket,
  },
  {
    title: "Growth",
    description: "Continuous learning, optimisation and support keep compounding business value.",
    icon: TrendingUp,
  },
];

export function ProjectRoadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 72%", "end 34%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-ink py-[clamp(88px,9vw,132px)] text-white"
      aria-labelledby="project-roadmap-title"
    >
      <div className="mx-auto w-[min(1160px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]">
        <div className="grid gap-7 border-b border-white/12 pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              How every project is born
            </p>
            <h2
              id="project-roadmap-title"
              className="m-0 max-w-3xl text-[clamp(32px,4.2vw,52px)] font-semibold leading-[1.07] tracking-[-0.045em] text-balance"
            >
              From a raw idea to a system that keeps growing.
            </h2>
          </div>
          <p className="m-0 max-w-lg text-[15px] leading-6 text-white/52 lg:justify-self-end">
            Every stage earns the next. Strategy reduces risk, design creates clarity and engineering turns intent into measurable progress.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-14">
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-full w-full lg:block"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M 118 30 H 882 Q 955 30 955 92 V 239 Q 955 301 882 301 H 118"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d="M 118 30 H 882 Q 955 30 955 92 V 239 Q 955 301 882 301 H 118"
              stroke="#4F8CFF"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength: reduceMotion ? 1 : progress }}
            />
          </svg>

          <div className="absolute left-0 right-0 top-[25px] h-px bg-white/12 lg:hidden" aria-hidden="true" />
          <motion.div
            className="absolute left-0 right-0 top-6 h-[3px] origin-left rounded-full bg-accent lg:hidden"
            style={{ scaleX: reduceMotion ? 1 : progress }}
            aria-hidden="true"
          />

          <ol className="relative z-10 -mx-4 m-0 flex snap-x snap-mandatory list-none gap-3 overflow-x-auto px-4 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:gap-x-4 lg:gap-y-7 lg:overflow-visible lg:px-0 lg:pb-0 lg:pt-0">
            {roadmapSteps.map((step, index) => (
              <RoadmapMilestone key={step.title} step={step} index={index} reduceMotion={Boolean(reduceMotion)} />
            ))}
          </ol>
          <p className="mb-0 mt-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white/32 lg:hidden">
            Swipe through the journey →
          </p>
        </div>
      </div>
    </section>
  );
}

function RoadmapMilestone({ step, index, reduceMotion }: { step: RoadmapStep; index: number; reduceMotion: boolean }) {
  const Icon = step.icon;
  const gridColumn = index < 4 ? index + 1 : 8 - index;
  const gridRow = index < 4 ? 1 : 2;

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.48 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-[78vw] max-w-[310px] shrink-0 snap-center pt-13 sm:w-[46vw] lg:w-auto lg:max-w-none lg:pt-14"
      style={{ gridColumn, gridRow }}
    >
      <div
        className="relative min-h-[205px] rounded-2xl border border-white/12 bg-ink-soft p-5 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/75"
      >
        <div className="flex items-start justify-between gap-5">
          <span className="grid size-10 place-items-center rounded-xl bg-white/[0.055] text-accent">
            <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="text-xs font-semibold tracking-[0.14em] text-white/25">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="mb-0 mt-6 text-lg font-semibold leading-tight tracking-[-0.025em]">{step.title}</h3>
        <p className="mb-0 mt-2 text-[13px] leading-[1.55] text-white/48">{step.description}</p>
      </div>

      <motion.span
        initial={reduceMotion ? false : { scale: 0.55, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 340, damping: 22, delay: 0.1 }}
        className="absolute left-1/2 top-2 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-accent bg-ink text-xs font-semibold text-accent shadow-[0_0_0_7px_rgba(79,140,255,0.08)]"
        aria-hidden="true"
      >
        {index + 1}
      </motion.span>
    </motion.li>
  );
}
