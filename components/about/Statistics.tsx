"use client";

import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
}

const stats: StatItem[] = [
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 120, suffix: "+", label: "Successful Projects" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Reliable Delivery" },
];

export function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <div ref={ref} className="mt-12 grid border-y border-[#121212]/14 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <div key={stat.label} className={`py-7 text-center sm:px-5 sm:py-8 ${index > 0 ? "border-t border-[#121212]/14 sm:border-l sm:border-t-0" : ""}`}>
          <AnimatedNumber stat={stat} active={inView} />
          <p className="mb-0 mt-2 text-xs font-semibold uppercase tracking-[0.11em] text-[#606060]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function AnimatedNumber({ stat, active }: { stat: StatItem; active: boolean }) {
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) return;
    const controls = animate(0, stat.value, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: setDisplay,
    });
    return () => controls.stop();
  }, [active, reduceMotion, stat.value]);

  return (
    <motion.strong
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : undefined}
      className="block text-[clamp(36px,4.5vw,58px)] font-semibold leading-none tracking-[-0.045em] text-[#121212]"
      aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
    >
      <span aria-hidden="true">{stat.prefix}{(reduceMotion && active ? stat.value : display).toFixed(stat.decimals ?? 0)}{stat.suffix}</span>
    </motion.strong>
  );
}
