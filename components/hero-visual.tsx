"use client";

import { tw } from "@/lib/tailwind";

import {
  ArrowUpRight,
  Gauge,
  Layers3,
  MousePointer2,
  Radio,
} from "lucide-react";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback } from "react";

const reveal = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

type FloatingMetricCardProps = {
  className: string;
  children: React.ReactNode;
  delay: number;
  duration: number;
};

export function FloatingMetricCard({
  className,
  children,
  delay,
  duration,
}: FloatingMetricCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={tw(`command-float ${className}`)}
      variants={reveal}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -7, 0],
              transition: {
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function TechnologyPill({
  className,
  icon,
  children,
  delay,
}: {
  className: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <FloatingMetricCard
      className={tw(`command-pill ${className}`)}
      delay={delay}
      duration={5.8}
    >
      {icon}
      <span>{children}</span>
    </FloatingMetricCard>
  );
}

export function BrowserMockup({
  style,
}: {
  style: {
    rotateX: MotionValue<number>;
    rotateY: MotionValue<number>;
  };
}) {
  return (
    <motion.div
      className={tw("command-browser")}
      variants={reveal}
      style={style}
      transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={tw("browser-bar")}>
        <div className={tw("browser-dots")} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className={tw("browser-address")}>webcodder.studio</div>
        <MousePointer2 size={13} aria-hidden="true" />
      </div>

      <div className={tw("browser-viewport")}>
        <div className={tw("browser-page")}>
          <div className={tw("mock-nav")}>
            <strong>webcodder.</strong>
            <div>
              <span>Work</span>
              <span>Studio</span>
              <b>Let&apos;s talk</b>
            </div>
          </div>

          <div className={tw("mock-hero")}>
            <p>Independent digital studio</p>
            <h3>We shape digital ideas into real growth.</h3>
            <button type="button">
              Start a project <ArrowUpRight size={11} />
            </button>
          </div>

          <div className={tw("mock-projects")}>
            <article className={tw("mock-project mock-project-dark")}>
              <span>01 / Product</span>
              <strong>Fintech reimagined</strong>
              <i />
            </article>
            <article className={tw("mock-project")}>
              <span>02 / Commerce</span>
              <strong>Built to convert</strong>
              <i />
            </article>
          </div>

          <div className={tw("mock-service-row")}>
            <span>Strategy</span>
            <span>UI/UX</span>
            <span>Development</span>
          </div>

          <div className={tw("mock-case-study")}>
            <small>Featured outcome</small>
            <strong>Digital products with measurable impact.</strong>
            <div className={tw("mock-case-grid")}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CursorGlow({
  x,
  y,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={tw("command-cursor-glow")}
      style={{ x, y }}
    />
  );
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(320);
  const pointerY = useMotionValue(250);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 120, damping: 22 });
  const springY = useSpring(tiltY, { stiffness: 120, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

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
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      pointerX.set(x);
      pointerY.set(y);
      tiltX.set(x / bounds.width - 0.5);
      tiltY.set(y / bounds.height - 0.5);
    },
    [pointerX, pointerY, reduceMotion, tiltX, tiltY]
  );

  const resetTilt = useCallback(() => {
    tiltX.set(0);
    tiltY.set(0);
  }, [tiltX, tiltY]);

  return (
    <motion.div
      className={tw("hero-command-center")}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      aria-label="Webcodder digital product command center"
    >
      <CursorGlow x={pointerX} y={pointerY} />
      <div className={tw("command-orange-glow")} aria-hidden="true" />

      <BrowserMockup style={{ rotateX, rotateY }} />

      <FloatingMetricCard
        className={tw("performance-card")}
        delay={0.24}
        duration={5.2}
      >
        <Gauge size={17} />
        <div>
          <strong>98</strong>
          <span>Performance Score</span>
        </div>
      </FloatingMetricCard>

      <FloatingMetricCard
        className={tw("growth-card")}
        delay={0.32}
        duration={6.4}
      >
        <div className={tw("growth-card-copy")}>
          <strong>+42%</strong>
          <span>Conversion Growth</span>
        </div>
        <div className={tw("growth-bars")} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </FloatingMetricCard>

      <TechnologyPill
        className={tw("technology-pill")}
        icon={<Radio size={14} />}
        delay={0.4}
      >
        Next.js + TypeScript
      </TechnologyPill>

      <TechnologyPill
        className={tw("design-pill")}
        icon={<Layers3 size={14} />}
        delay={0.48}
      >
        UI/UX System
      </TechnologyPill>

      <FloatingMetricCard
        className={tw("project-live-card")}
        delay={0.56}
        duration={5.6}
      >
        <span className={tw("live-dot")} aria-hidden="true" />
        <span>Project Live</span>
      </FloatingMetricCard>
    </motion.div>
  );
}
