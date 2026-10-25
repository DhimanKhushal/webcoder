"use client";

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
    <aside className="xl:sticky xl:top-28">
      <div className="overflow-hidden rounded-[26px] bg-ink text-white">
        <div className="border-b border-white/10 px-6 py-6 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Live scope</p>
            <span className="size-2.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(79,140,255,0.12)]" />
          </div>
          <h3 className="mt-4 text-[clamp(26px,3vw,34px)] font-semibold leading-tight tracking-[-0.035em]">
            Your Project Snapshot
          </h3>
        </div>

        <div className="px-6 py-7 sm:px-8">
          <p className="m-0 text-xs font-semibold uppercase tracking-label text-accent">Recommended solution</p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={estimate.solution}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              className="mb-7 mt-2 text-xl font-semibold tracking-[-0.02em]"
            >
              {estimate.solution}
            </motion.p>
          </AnimatePresence>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            <SnapshotStat icon={Clock3} label="Timeline" value={estimate.timeline} />
            <SnapshotStat icon={Gauge} label="Complexity" value={`${estimate.complexity}%`} />
          </div>

          <div className="mt-5">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
              <motion.div
                className="h-full rounded-full bg-accent"
                initial={false}
                animate={{ width: `${estimate.complexity}%` }}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 20 }}
              />
            </div>
            <span className="sr-only">Project complexity: {estimate.complexity}%</span>
          </div>

          <div className="mt-7 border-t border-white/10 pt-6">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-label text-white/50">
              <UsersRound size={14} aria-hidden="true" /> Recommended team
            </div>
            <p className="m-0 text-sm leading-6 text-white/85">{estimate.team.join(" · ")}</p>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-label text-white/50">Selected services</p>
            <motion.div layout className="flex min-h-8 flex-wrap gap-2">
              <AnimatePresence mode="popLayout">
                {selectedServices.length ? selectedServices.map((service, index) => (
                  <motion.span
                    layout
                    key={service.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
                    className="rounded-full border border-white/12 bg-ink-soft px-3 py-1.5 text-xs text-white/80"
                  >
                    {service.title}
                  </motion.span>
                )) : (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-white/40">
                    Choose at least one service
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="mt-7 rounded-2xl bg-ink-soft p-5">
            <p className="m-0 text-xs font-semibold uppercase tracking-label text-white/50">Expected outcomes</p>
            <ul className="mb-0 mt-4 grid list-none gap-3 p-0">
              {estimate.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5 text-sm leading-5 text-white/80">
                  <Check className="mt-0.5 shrink-0 text-accent" size={15} strokeWidth={2.5} aria-hidden="true" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mb-0 mt-6 grid list-none gap-2 p-0 sm:grid-cols-2">
            {trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-white/60">
                <Check size={13} className="text-accent" aria-hidden="true" /> {item}
              </li>
            ))}
          </ul>

          <button
            type="submit"
            form="project-scope-form"
            className="mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border border-accent bg-accent px-5 text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Get My Free Project Roadmap <ArrowUpRight size={18} aria-hidden="true" />
          </button>
          <p className="mb-0 mt-3 text-center text-xs leading-4 text-white/45">
            No obligation. Our team will review your requirements and contact you within one business day.
          </p>
        </div>
      </div>
    </aside>
  );
}

function SnapshotStat({ icon: Icon, label, value }: { icon: typeof Clock3; label: string; value: string }) {
  return (
    <div className="bg-ink-soft p-4">
      <Icon size={16} className="mb-4 text-accent" aria-hidden="true" />
      <span className="block text-xs uppercase tracking-label text-white/40">{label}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.strong
          key={value}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="mt-1 block text-lg font-semibold tracking-[-0.02em]"
        >
          {value}
        </motion.strong>
      </AnimatePresence>
    </div>
  );
}
