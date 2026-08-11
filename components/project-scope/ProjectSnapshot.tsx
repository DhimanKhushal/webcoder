"use client";

import { tw } from "@/lib/tailwind";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Clock3, Gauge, UsersRound } from "lucide-react";
import type { ProjectEstimate, ServiceOption } from "./project-scope-types";

interface ProjectSnapshotProps {
  estimate: ProjectEstimate;
  selectedServices: ServiceOption[];
}

const trustIndicators = [
  "Strategy-led execution",
  "Responsive development",
  "Scalable architecture",
  "Post-launch support",
];

export function ProjectSnapshot({ estimate, selectedServices }: ProjectSnapshotProps) {
  const reduceMotion = useReducedMotion();

  return (
    <aside className={tw("xl:sticky xl:top-28")}>
      <div className={tw("overflow-hidden rounded-[26px] bg-[#172033] text-white")}>
        <div className={tw("border-b border-white/10 px-6 py-6 sm:px-8")}>
          <div className={tw("flex items-center justify-between gap-4")}>
            <p className={tw("m-0 text-xs font-semibold uppercase tracking-[0.14em] text-white/50")}>Live scope</p>
            <span className={tw("size-2.5 rounded-full bg-[#2563EB] shadow-[0_0_0_6px_rgba(37, 99, 235,0.12)]")} />
          </div>
          <h3 className={tw("mt-4 text-[clamp(26px,3vw,34px)] font-semibold leading-tight tracking-[-0.035em]")}>
            Your Project Snapshot
          </h3>
        </div>

        <div className={tw("px-6 py-7 sm:px-8")}>
          <p className={tw("m-0 text-xs font-semibold uppercase tracking-[0.13em] text-[#2563EB]")}>Recommended solution</p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={estimate.solution}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              className={tw("mb-7 mt-2 text-xl font-semibold tracking-[-0.02em]")}
            >
              {estimate.solution}
            </motion.p>
          </AnimatePresence>

          <div className={tw("grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10")}>
            <SnapshotStat icon={Clock3} label="Timeline" value={estimate.timeline} />
            <SnapshotStat icon={Gauge} label="Complexity" value={`${estimate.complexity}%`} />
          </div>

          <div className={tw("mt-5")}>
            <div className={tw("h-1.5 overflow-hidden rounded-full bg-white/10")} aria-hidden="true">
              <motion.div
                className={tw("h-full rounded-full bg-[#2563EB]")}
                initial={false}
                animate={{ width: `${estimate.complexity}%` }}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 20 }}
              />
            </div>
            <span className={tw("sr-only")}>Project complexity: {estimate.complexity}%</span>
          </div>

          <div className={tw("mt-7 border-t border-white/10 pt-6")}>
            <div className={tw("mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/50")}>
              <UsersRound size={14} aria-hidden="true" /> Recommended team
            </div>
            <p className={tw("m-0 text-sm leading-6 text-white/85")}>{estimate.team.join(" · ")}</p>
          </div>

          <div className={tw("mt-6")}>
            <p className={tw("mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/50")}>Selected services</p>
            <motion.div layout className={tw("flex min-h-8 flex-wrap gap-2")}>
              <AnimatePresence mode="popLayout">
                {selectedServices.length ? selectedServices.map((service, index) => (
                  <motion.span
                    layout
                    key={service.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
                    className={tw("rounded-full border border-white/[0.08] bg-[#172033] px-3 py-1.5 text-xs text-white/80")}
                  >
                    {service.title}
                  </motion.span>
                )) : (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={tw("text-sm text-white/40")}>
                    Choose at least one service
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className={tw("mt-7 rounded-2xl bg-[#172033] p-5")}>
            <p className={tw("m-0 text-xs font-semibold uppercase tracking-[0.12em] text-white/50")}>Expected outcomes</p>
            <ul className={tw("mb-0 mt-4 grid list-none gap-3 p-0")}>
              {estimate.outcomes.map((outcome) => (
                <li key={outcome} className={tw("flex items-start gap-2.5 text-sm leading-5 text-white/80")}>
                  <Check className={tw("mt-0.5 shrink-0 text-[#2563EB]")} size={15} strokeWidth={2.5} aria-hidden="true" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <ul className={tw("mb-0 mt-6 grid list-none gap-2 p-0 sm:grid-cols-2")}>
            {trustIndicators.map((item) => (
              <li key={item} className={tw("flex items-center gap-2 text-xs text-white/60")}>
                <Check size={13} className={tw("text-[#2563EB]")} aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>

          <button
            type="submit"
            form="project-scope-form"
            className={tw("mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border border-[#2563EB] bg-[#2563EB] px-5 text-[15px] font-medium tracking-[0.005em] text-white transition-[transform,background-color,border-color] hover:-translate-y-0.5 hover:border-[#1D4ED8] hover:bg-[#1D4ED8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]")}
          >
            Get My Free Project Roadmap <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <p className={tw("mb-0 mt-3 text-center text-[11px] leading-4 text-white/45")}>
            No obligation. Our team will review your requirements and contact you within one business day.
          </p>
        </div>
      </div>
    </aside>
  );
}

function SnapshotStat({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) {
  return (
    <div className={tw("bg-[#172033] p-4")}>
      <Icon size={16} className={tw("mb-4 text-[#2563EB]")} aria-hidden="true" />
      <span className={tw("block text-[11px] uppercase tracking-[0.1em] text-white/40")}>{label}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.strong
          key={value}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className={tw("mt-1 block text-lg font-semibold tracking-[-0.02em]")}
        >
          {value}
        </motion.strong>
      </AnimatePresence>
    </div>
  );
}
