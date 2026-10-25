"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { useEffect, useRef } from "react";

interface RoadmapModalProps {
  open: boolean;
  name: string;
  onClose: () => void;
}

export function RoadmapModal({ open, name, onClose }: RoadmapModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink/75 p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="roadmap-success-title"
            initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[26px] bg-paper p-7 text-ink sm:p-10"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close confirmation"
              className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/12 bg-white transition-colors hover:bg-paper-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <div className="grid size-14 place-items-center rounded-2xl bg-accent">
              <Check size={28} strokeWidth={2.5} aria-hidden="true" />
            </div>
            <p className="mb-0 mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-accent">Scope received</p>
            <h3 id="roadmap-success-title" className="mb-0 mt-3 text-[clamp(28px,5vw,38px)] font-semibold leading-[1.08] tracking-[-0.04em]">
              Your roadmap is taking shape{name ? `, ${name.split(" ")[0]}` : ""}.
            </h3>
            <p className="mb-0 mt-5 text-[15px] leading-6 text-muted">
              We&apos;ll review your priorities, identify the clearest route forward and contact you within one business day.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-ink px-5 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Back to Webcodder <ArrowRight size={17} aria-hidden="true" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
