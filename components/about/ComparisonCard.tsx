"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ComparisonItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ComparisonCardProps {
  item: ComparisonItem;
  variant: "typical" | "webcodder";
  index: number;
}

export function ComparisonCard({ item, variant, index }: ComparisonCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = item.icon;
  const isWebcodder = variant === "webcodder";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: isWebcodder ? 1 : 0.74, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4, scale: isWebcodder ? 1.008 : 1 }}
      className={`group relative min-h-40 shrink-0 snap-center overflow-hidden rounded-2xl border p-5 sm:min-h-0 sm:p-6 ${
        isWebcodder
          ? "w-[84vw] border-white/[0.08] bg-[#172033] text-white transition-[border-color,box-shadow] duration-300 hover:border-[#2563EB] hover:shadow-[0_18px_45px_rgba(37, 99, 235,0.12)] sm:w-auto"
          : "w-[84vw] border-white/[0.08] bg-[#172033] text-white opacity-75 sm:w-auto"
      }`}
    >
      <div className="flex items-start justify-between gap-5">
        <motion.span
          whileHover={reduceMotion || !isWebcodder ? undefined : { rotate: 7 }}
          className={`grid size-11 shrink-0 place-items-center rounded-xl ${
            isWebcodder ? "bg-[#172033] text-[#2563EB]" : "bg-white/[0.055] text-white/38"
          }`}
        >
          <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
        </motion.span>
        {isWebcodder && (
          <ArrowUpRight
            size={19}
            aria-hidden="true"
            className="text-[#2563EB] opacity-45 transition-[transform,opacity] duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
          />
        )}
      </div>
      <h4 className={`mb-0 mt-8 text-[22px] font-semibold leading-[1.2] tracking-[-0.025em] transition-transform duration-300 group-hover:scale-[1.01] ${isWebcodder ? "text-white" : "text-white/75"}`}>
        {item.title}
      </h4>
      <p className={`mb-0 mt-2 text-[16px] leading-[1.7] ${isWebcodder ? "text-[#CBD5E1]" : "text-white/38"}`}>
        {item.description}
      </p>
      {isWebcodder && (
        <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#2563EB] transition-transform duration-300 group-hover:scale-x-100" aria-hidden="true" />
      )}
    </motion.article>
  );
}
