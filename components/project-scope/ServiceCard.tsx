"use client";

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
      className={`group relative min-h-44 rounded-2xl border p-5 text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26A3D] ${
        selected
          ? "border-[#F26A3D] bg-[#FFF0EA]"
          : "border-[#121212]/12 bg-white hover:border-[#121212]/35"
      }`}
    >
      <span
        className={`mb-8 grid size-10 place-items-center rounded-xl transition-colors ${
          selected ? "bg-[#121212] text-white" : "bg-[#EEEEEE] text-[#121212]"
        }`}
      >
        <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="block pr-8 text-[17px] font-semibold leading-tight tracking-[-0.02em] text-[#121212]">
        {service.title}
      </span>
      <span className="mt-2 block text-sm leading-5 text-[#606060]">
        {service.description}
      </span>

      <motion.span
        initial={false}
        animate={{ scale: selected ? 1 : 0.55, opacity: selected ? 1 : 0 }}
        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 430, damping: 25 }}
        className="absolute right-4 top-4 grid size-7 place-items-center rounded-full bg-[#F26A3D] text-[#121212]"
        aria-hidden="true"
      >
        <Check size={15} strokeWidth={3} />
      </motion.span>
    </motion.button>
  );
}
