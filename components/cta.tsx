"use client";

import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useState } from "react";

const services = ["Website", "Branding", "Marketing"] as const;
const timelines = ["ASAP", "1–2 Months"] as const;

function ChoiceChip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`brief-chip ${selected ? "selected" : ""}`}
      aria-pressed={selected}
      onClick={onClick}
    >
      {selected && <Check size={12} />}
      {children}
    </button>
  );
}

function DecorativeOrbit({
  x,
  y,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
}) {
  const orbitX = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const orbitY = useTransform(y, [-0.5, 0.5], [-6, 6]);
  const textX = useTransform(x, [-0.5, 0.5], [6, -6]);

  return (
    <>
      <motion.span
        aria-hidden="true"
        className="cta-outline-text"
        style={{ x: textX }}
      >
        LET&apos;S TALK
      </motion.span>
      <motion.div
        aria-hidden="true"
        className="cta-orbits"
        style={{ x: orbitX, y: orbitY }}
      >
        <span className="cta-orbit-dot" />
      </motion.div>
    </>
  );
}

function ProjectBriefCard({
  x,
  y,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
}) {
  const reduceMotion = useReducedMotion();
  const [service, setService] = useState<(typeof services)[number]>("Website");
  const [timeline, setTimeline] = useState<(typeof timelines)[number]>("ASAP");
  const [budget, setBudget] = useState(15);
  const rotateX = useTransform(y, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-2, 2]);

  return (
    <motion.div
      className="project-brief-card"
      initial={{ opacity: 0, y: 34, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
            }
      }
      style={{ rotateX, rotateY }}
    >
      <div className="brief-card-head">
        <div>
          <small>Quick brief · 01</small>
          <h3>Start Your Project</h3>
        </div>
        <span className="brief-status">
          <i />
          Open
        </span>
      </div>

      <fieldset className="brief-fieldset">
        <legend>What do you need?</legend>
        <div className="brief-chip-row">
          {services.map((item) => (
            <ChoiceChip
              key={item}
              selected={service === item}
              onClick={() => setService(item)}
            >
              {item}
            </ChoiceChip>
          ))}
        </div>
      </fieldset>

      <fieldset className="brief-fieldset">
        <legend>Ideal timeline</legend>
        <div className="brief-chip-row">
          {timelines.map((item) => (
            <ChoiceChip
              key={item}
              selected={timeline === item}
              onClick={() => setTimeline(item)}
            >
              {item}
            </ChoiceChip>
          ))}
        </div>
      </fieldset>

      <div className="brief-budget">
        <div>
          <span>Estimated budget</span>
          <strong>${budget}k</strong>
        </div>
        <input
          aria-label="Estimated project budget in thousands"
          type="range"
          min="5"
          max="50"
          step="5"
          value={budget}
          onChange={(event) => setBudget(Number(event.target.value))}
        />
        <div className="budget-range">
          <small>$5k</small>
          <small>$50k+</small>
        </div>
      </div>

      <Link className="brief-continue" href="/contact">
        Continue
        <ChevronRight size={16} />
      </Link>
    </motion.div>
  );
}

export function CTA() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 24 });

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (
        reduceMotion ||
        event.pointerType === "touch" ||
        !window.matchMedia("(pointer: fine)").matches
      ) {
        return;
      }

      const bounds = event.currentTarget.getBoundingClientRect();
      pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
      pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
    },
    [pointerX, pointerY, reduceMotion]
  );

  const resetPointer = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <section className="cta-wrap">
      <div className="container">
        <motion.div
          className="cta-panel"
          initial={{ opacity: 0, y: 54 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="cta-copy">
            <p className="eyebrow">Let&apos;s build together</p>
            <h2>
              Have an idea worth building?
              <br />
              Let&apos;s turn it into something real.
            </h2>
            <p className="cta-description">
              Tell us what you&apos;re planning — we&apos;ll help with strategy,
              design and development.
            </p>
            <div className="cta-actions">
              <Link className="button button-dark cta-primary" href="/contact">
                Start a Project <ArrowUpRight size={18} />
              </Link>
              <a className="cta-call-link" href="tel:+918298295419">
                Book a quick call <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="cta-visual">
            <DecorativeOrbit x={springX} y={springY} />
            <ProjectBriefCard x={springX} y={springY} />
          </div>

          <div className="cta-service-marquee" aria-label="Webcodder services">
            <div className="cta-service-track">
              {[0, 1].map((group) => (
                <span key={group} aria-hidden={group === 1}>
                  WEB DEVELOPMENT <i>—</i> UI/UX <i>—</i> BRANDING <i>—</i>{" "}
                  DIGITAL MARKETING <i>—</i>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
