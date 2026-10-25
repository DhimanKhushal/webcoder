"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Clock3,
  Copy,
  LayoutTemplate,
  LifeBuoy,
  Network,
  RefreshCw,
  ScanSearch,
  UsersRound,
} from "lucide-react";
import { AnimatedDivider } from "./AnimatedDivider";
import { ComparisonCard, type ComparisonItem } from "./ComparisonCard";
import { Statistics } from "./Statistics";

const typicalAgency: ComparisonItem[] = [
  { title: "Templates", description: "Generic layouts used repeatedly without considering the business.", icon: LayoutTemplate },
  { title: "Delays", description: "Poor planning and inefficient communication slow everything down.", icon: Clock3 },
  { title: "Poor Support", description: "Projects end after delivery with little or no ongoing assistance.", icon: LifeBuoy },
  { title: "Generic Design", description: "Looks similar to hundreds of other websites.", icon: Copy },
];

const webcodder: ComparisonItem[] = [
  { title: "Custom Strategy", description: "Every project begins with business research, goals and user understanding.", icon: ScanSearch },
  { title: "Scalable Architecture", description: "Modern technologies built for future growth and performance.", icon: Network },
  { title: "Dedicated Team", description: "Designers, developers and marketers collaborate from day one.", icon: UsersRound },
  { title: "Long-Term Partnership", description: "Continuous optimisation, support and business improvements.", icon: RefreshCw },
];

export function ComparisonSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-paper py-[clamp(88px,9vw,132px)]" aria-labelledby="comparison-title">
      <div className="mx-auto w-[min(1200px,calc(100%-48px))] max-sm:w-[calc(100%-32px)]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-7 border-b border-ink/14 pb-10 lg:grid-cols-[1fr_0.68fr] lg:items-end"
        >
          <div>
            <p className="eyebrow">Why Webcodder</p>
            <h2 id="comparison-title" className="m-0 max-w-3xl text-[clamp(32px,4.3vw,54px)] font-semibold leading-[1.06] tracking-[-0.045em] text-ink text-balance">
              Not every agency builds products. <span className="text-accent">We build digital growth systems.</span>
            </h2>
          </div>
          <p className="m-0 max-w-xl text-[15px] leading-6 text-muted lg:justify-self-end">
            Most agencies deliver projects. We build scalable digital experiences that continue creating value long after launch.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 grid w-full items-stretch lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)]">
        <ComparisonPanel title="Typical Agency" subtitle="Built to finish projects." items={typicalAgency} variant="typical" />
        <AnimatedDivider />
        <ComparisonPanel title="Webcodder" subtitle="Built to grow businesses." items={webcodder} variant="webcodder" />
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-[min(1000px,calc(100%-48px))] py-[clamp(72px,8vw,112px)] text-center max-sm:w-[calc(100%-32px)]"
      >
        <p className="m-0 text-[clamp(24px,3.2vw,40px)] font-semibold leading-[1.18] tracking-[-0.035em] text-ink text-balance">
          We don&apos;t compete on price.<br />We compete on <span className="text-accent">long-term business value.</span>
        </p>
        <p className="mx-auto mb-0 mt-6 max-w-2xl text-sm leading-6 text-muted">
          Choosing the right agency isn&apos;t about finding a vendor. It&apos;s about finding a long-term technology partner.
        </p>
        <Statistics />
      </motion.div>
    </section>
  );
}

function ComparisonPanel({ title, subtitle, items, variant }: { title: string; subtitle: string; items: ComparisonItem[]; variant: "typical" | "webcodder" }) {
  const dark = variant === "typical";
  return (
    <div className={`${dark ? "bg-ink text-white" : "bg-white text-ink"} min-w-0 px-5 py-10 sm:px-8 sm:py-12 xl:px-[clamp(48px,5vw,84px)] xl:py-16`}>
      <div className="mx-auto max-w-[620px]">
        <div className="mb-8 flex items-end justify-between gap-5 border-b pb-6 sm:mb-10 sm:pb-7 border-current/10">
          <div>
            <p className={`m-0 text-xs font-semibold uppercase tracking-[0.14em] ${dark ? "text-white/35" : "text-accent"}`}>
              {dark ? "The old model" : "The Webcodder standard"}
            </p>
            <h3 className="mb-0 mt-3 text-[clamp(26px,3vw,36px)] font-semibold leading-none tracking-[-0.035em]">{title}</h3>
          </div>
          <p className={`m-0 hidden text-xs sm:block ${dark ? "text-white/35" : "text-muted"}`}>{subtitle}</p>
        </div>
        <p className={`-mt-5 mb-7 text-sm sm:hidden ${dark ? "text-white/35" : "text-muted"}`}>{subtitle}</p>
        <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-1 xl:grid-cols-2">
          {items.map((item, index) => <ComparisonCard key={item.title} item={item} variant={variant} index={index} />)}
        </div>
        <p className={`mb-0 mt-4 text-center text-xs uppercase tracking-[0.12em] sm:hidden ${dark ? "text-white/30" : "text-[#777]"}`}>
          Swipe to compare →
        </p>
      </div>
    </div>
  );
}
