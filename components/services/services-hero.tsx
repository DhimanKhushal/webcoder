"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Megaphone,
  PenTool,
  Search,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback } from "react";

const cards = [
  { number: "01", title: "Web Development", label: "Build", icon: Code2, className: "ecosystem-web" },
  { number: "02", title: "UI/UX Design", label: "Design", icon: PenTool, className: "ecosystem-ux" },
  { number: "03", title: "Digital Marketing", label: "Growth", icon: Megaphone, className: "ecosystem-marketing" },
  { number: "04", title: "Branding", label: "Identity", icon: Sparkles, className: "ecosystem-brand" },
  { number: "05", title: "SEO", label: "Discover", icon: Search, className: "ecosystem-seo" },
];

export function ServicesHero() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 100, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 100, damping: 24 });
  const ecosystemX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const ecosystemY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (
        reduceMotion ||
        event.pointerType === "touch" ||
        !window.matchMedia("(pointer: fine)").matches
      ) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
      pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
    },
    [pointerX, pointerY, reduceMotion]
  );

  return (
    <section className="services-hero">
      <div className="services-hero-grid" aria-hidden="true" />
      <div className="services-page-container services-hero-layout">
        <motion.div
          className="services-hero-copy"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
        >
          <motion.p className="eyebrow" variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
            Our Services
          </motion.p>
          <div className="services-hero-heading-mask">
            <motion.h1
              variants={{
                hidden: { y: "105%" },
                visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              Digital services designed to move your business <span>forward.</span>
            </motion.h1>
          </div>
          <motion.p
            className="services-hero-description"
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          >
            From strategy and design to development and growth, we create digital
            experiences that help modern businesses perform, connect and scale.
          </motion.p>
          <motion.div
            className="services-hero-actions"
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
          >
            <Link className="button" href="/contact">
              Start a Project <ArrowUpRight size={17} />
            </Link>
            <a className="button button-outline" href="#all-services">
              Explore Our Services <ArrowDown size={16} />
            </a>
          </motion.div>
        </motion.div>

        <div className="services-ecosystem" onPointerMove={handlePointerMove}>
          <span className="ecosystem-spotlight" aria-hidden="true" />
          <span className="ecosystem-line line-one" aria-hidden="true" />
          <span className="ecosystem-line line-two" aria-hidden="true" />
          <motion.div style={{ x: ecosystemX, y: ecosystemY }} className="ecosystem-card-field">
            {cards.map(({ number, title, label, icon: Icon, className }, index) => (
              <motion.article
                className={`ecosystem-card ${className}`}
                key={title}
                initial={{ opacity: 0, x: index % 2 ? 35 : -35, y: 22, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{ duration: 0.72, delay: 0.18 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span>{number}</span>
                <Icon size={20} strokeWidth={1.5} />
                <div>
                  <small>{label}</small>
                  <h3>{title}</h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
