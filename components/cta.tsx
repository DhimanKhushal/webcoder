"use client";

import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const services = ["AI", "Website", "Branding", "Marketing"] as const;
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

function ProjectBriefCard() {
  const reduceMotion = useReducedMotion();
  const [service, setService] = useState<(typeof services)[number]>("AI");
  const [timeline, setTimeline] = useState<(typeof timelines)[number]>("ASAP");
  const [budget, setBudget] = useState(15);

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

  return (
    <section className="cta-wrap">
      <div className="container">
        <motion.div
          className="cta-panel"
          initial={reduceMotion ? false : { opacity: 0, y: 54 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta-copy">
            <p className="eyebrow">Let&apos;s build together</p>
            <h2>
              Have an idea worth building?
              <br />
              Let&apos;s turn it into something real.
            </h2>
            <p className="cta-description">
              Tell us what you&apos;re planning. We&apos;ll help with AI, design,
              development and marketing.
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
            <ProjectBriefCard />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
