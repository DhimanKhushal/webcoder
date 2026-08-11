"use client";

import { tw } from "@/lib/tailwind";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import type { ServiceOption } from "./project-scope-types";

interface ServiceCardProps {
  service: ServiceOption;
  selected: boolean;
  onToggle: (id: ServiceOption["id"]) => void;
}

export function ServiceCard({ service, selected, onToggle }: ServiceCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.button
      type="button"
      aria-pressed={selected}
      onClick={() => onToggle(service.id)}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={tw(`group relative min-h-44 rounded-2xl border p-5 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] ${
        selected
          ? "border-[#2563EB] bg-[#172033]"
          : "border-white/[0.08] bg-[#172033] hover:border-white/[0.08]"
      }`)}
    >
      <span
        className={tw(`mb-8 grid size-10 place-items-center rounded-xl transition-colors ${
          selected ? "bg-[#0F172A] text-white" : "bg-[#172033] text-white"
        }`)}
      >
        <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className={tw("block pr-8 text-[22px] font-semibold leading-[1.2] tracking-[-0.025em] text-white")}>
        {service.title}
      </span>
      <span className={tw("mt-2 block text-[16px] leading-7 text-[#CBD5E1]")}>
        {service.description}
      </span>

      <motion.span
        initial={false}
        animate={{ scale: selected ? 1 : 0.55, opacity: selected ? 1 : 0 }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 430, damping: 25 }}
        className={tw("absolute right-4 top-4 grid size-7 place-items-center rounded-full bg-[#2563EB] text-white")}
        aria-hidden="true"
      >
        <Check size={15} strokeWidth={3} />
      </motion.span>
    </motion.button>
  );
}
