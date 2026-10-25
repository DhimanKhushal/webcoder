"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, MousePointer2, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const codeSample = `const experience = {
  purposeful: true,
  accessible: true,
  scalable: true
};`;

const designNotes = [
  { label: "A11Y", tooltip: "Accessibility First", position: "left-[4%] top-[11%] -rotate-3" },
  { label: "PERF", tooltip: "Performance Matters", position: "right-[5%] top-[8%] rotate-2" },
  { label: "WHY?", tooltip: "Design With Purpose", position: "left-[1%] top-[54%] rotate-2" },
  { label: "SCALE", tooltip: "Scalable Architecture", position: "right-[1%] top-[48%] -rotate-2" },
  { label: "1PX", tooltip: "Pixel Precision", position: "bottom-[4%] left-[15%] -rotate-2" },
  { label: "USER", tooltip: "User Before Interface", position: "bottom-[3%] right-[10%] rotate-2" },
];

export function BehindEveryGreatProduct() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22, mass: 0.55 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22, mass: 0.55 });
  const rotateY = useTransform(smoothX, [-1, 1], [-3.2, 3.2]);
  const rotateX = useTransform(smoothY, [-1, 1], [3.2, -3.2]);
  const foregroundX = useTransform(smoothX, [-1, 1], [-9, 9]);
  const foregroundY = useTransform(smoothY, [-1, 1], [-7, 7]);
  const backgroundX = useTransform(smoothX, [-1, 1], [4, -4]);
  const backgroundY = useTransform(smoothY, [-1, 1], [3, -3]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 78%", "end 35%"],
  });
  const looseOpacity = useTransform(scrollYProgress, [0, 0.42, 0.72], [1, 0.85, 0]);
  const looseScale = useTransform(scrollYProgress, [0, 0.72], [1, 0.96]);
  const polishedOpacity = useTransform(scrollYProgress, [0.34, 0.72, 1], [0, 0.85, 1]);
  const polishedScale = useTransform(scrollYProgress, [0.34, 1], [0.94, 1]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.45, 0.8], [0.24, 0.38, 0.08]);

  useEffect(() => {
    if (!canvasRef.current || reduceMotion) return;
    let cleanup = () => {};

    async function animateCanvas() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      const root = canvasRef.current;
      if (!root) return;

      const context = gsap.context(() => {
        gsap.fromTo(
          root,
          { clipPath: "inset(10% 8% 10% 8% round 30px)", opacity: 0 },
          { clipPath: "inset(0% 0% 0% 0% round 24px)", opacity: 1, duration: 1.05, ease: "power3.out" }
        );
        gsap.fromTo(
          "[data-thinking-note]",
          { y: 18, opacity: 0, rotate: -4 },
          { y: 0, opacity: 1, rotate: 0, duration: 0.65, stagger: 0.11, delay: 0.25, ease: "power3.out" }
        );
        gsap.fromTo(
          "[data-grid-line]",
          { scaleX: 0, transformOrigin: "left" },
          { scaleX: 1, duration: 1.2, stagger: 0.05, ease: "power2.out" }
        );
        gsap.fromTo(
          "[data-flow-path]",
          { strokeDashoffset: 460 },
          { strokeDashoffset: 0, duration: 2.2, delay: 0.45, ease: "power2.inOut" }
        );
        gsap.to("[data-auto-cursor]", {
          keyframes: [
            { x: 78, y: 22, duration: 1.8 },
            { x: 128, y: 106, duration: 1.6 },
            { x: 18, y: 132, duration: 1.8 },
            { x: 0, y: 0, duration: 1.6 },
          ],
          repeat: -1,
          repeatDelay: 0.7,
          ease: "power1.inOut",
        });
        gsap.to("[data-polish-mark]", {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 48%",
            end: "bottom 42%",
            scrub: 0.7,
          },
        });
      }, root);

      cleanup = () => context.revert();
      ScrollTrigger.refresh();
    }

    animateCanvas();
    return () => cleanup();
  }, [reduceMotion]);

  function updatePerspective(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  function resetPerspective() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-paper text-ink [font-family:Geist,Inter,Manrope,var(--font-dm-sans),sans-serif]"
      aria-labelledby="behind-product-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[url('/grain.png')] opacity-[0.035]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-size:52px_52px] [background-image:linear-gradient(#121212_1px,transparent_1px),linear-gradient(90deg,#121212_1px,transparent_1px)]" aria-hidden="true" />

      <div className="relative mx-auto w-[min(1320px,calc(100%-48px))] py-[clamp(90px,9vw,132px)] max-sm:w-[calc(100%-32px)]">
        <div className="grid gap-14 lg:min-h-[108vh] lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:gap-[clamp(52px,6vw,94px)]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: reduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32 lg:pt-10"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Behind every great product
            </p>
            <h2 id="behind-product-title" className="m-0 max-w-xl text-[clamp(36px,4.6vw,62px)] font-semibold leading-[1.04] tracking-[-0.052em] text-balance">
              Great products aren&apos;t designed.
              <span className="mt-2 block text-muted">They&apos;re carefully constructed.</span>
            </h2>
            <p className="mb-0 mt-8 max-w-[52ch] text-[clamp(15px,1.35vw,18px)] leading-[1.7] text-muted">
              Every successful digital product is the result of hundreds of thoughtful decisions—about people, purpose, performance and scale. Never luck.
            </p>
            <div className="mt-10 flex items-center gap-4 border-t border-ink/12 pt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">
              <span className="size-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none" />
              Live thinking canvas · v3.8
            </div>
          </motion.div>

          <div className="lg:sticky lg:top-28">
            <motion.div
              ref={canvasRef}
              onPointerMove={updatePerspective}
              onPointerLeave={resetPerspective}
              style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
              className="relative mx-auto aspect-[1.08/1] w-full max-w-[760px] rounded-[26px] border border-ink/14 bg-white shadow-[0_34px_90px_rgba(18,18,18,0.12)] will-change-transform"
            >
              <CanvasChrome />

              <motion.div style={{ opacity: gridOpacity, x: backgroundX, y: backgroundY }} className="pointer-events-none absolute inset-10 sm:inset-14" aria-hidden="true">
                {[18, 38, 58, 78].map((top) => <span key={`h-${top}`} data-grid-line className="absolute left-0 right-0 h-px bg-ink/35" style={{ top: `${top}%` }} />)}
                {[18, 38, 58, 78].map((left) => <span key={`v-${left}`} className="absolute bottom-0 top-0 w-px bg-ink/20" style={{ left: `${left}%` }} />)}
              </motion.div>

              <motion.div style={{ opacity: looseOpacity, scale: looseScale, x: foregroundX, y: foregroundY }} className="absolute inset-0">
                <LooseThinkingLayer />
              </motion.div>

              <motion.div style={{ opacity: polishedOpacity, scale: polishedScale }} className="absolute inset-[12%_8%_10%] sm:inset-[13%_10%_11%]">
                <PolishedInterface />
              </motion.div>

              {designNotes.map((note) => <DesignNote key={note.label} {...note} />)}

              <div data-auto-cursor className="pointer-events-none absolute left-[42%] top-[40%] z-40 text-ink drop-shadow-sm" aria-hidden="true">
                <MousePointer2 size={20} fill="#FFFFFF" />
                <span className="ml-4 mt-1 block rounded-md bg-ink px-2 py-1 text-xs font-semibold text-white">Webcodder</span>
              </div>
            </motion.div>

            <div className="mt-4 flex items-center justify-between gap-5 text-xs font-semibold uppercase tracking-[0.11em] text-[#777]">
              <span>Move cursor to explore depth</span>
              <span>Scroll to refine · 08 layers</span>
            </div>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.7 }}
          className="border-t border-ink/14 pt-[clamp(58px,7vw,88px)] text-center"
        >
          <p className="m-0 text-[clamp(28px,4vw,48px)] font-semibold leading-tight tracking-[-0.045em]">Every pixel has a reason.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <MagneticButton reducedMotion={Boolean(reduceMotion)} />
            <Link href="#how-we-work" className="group inline-flex min-h-12 items-center gap-2 px-2 text-sm font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              See Our Process <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CanvasChrome() {
  return (
    <div className="absolute inset-x-0 top-0 z-30 flex h-10 items-center justify-between border-b border-ink/10 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">
      <span>Webcodder / Product Lab</span>
      <span className="flex items-center gap-2"><i className="size-1.5 rounded-full bg-accent" /> Auto-layout</span>
    </div>
  );
}

function LooseThinkingLayer() {
  return (
    <>
      <div data-thinking-note className="absolute left-[10%] top-[16%] w-[28%] -rotate-2 border border-ink/14 bg-paper-deep p-3 shadow-[0_10px_24px_rgba(18,18,18,0.08)] sm:p-4">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">Research note · 04</span>
        <p className="mb-0 mt-2 text-xs font-semibold leading-[1.35] sm:text-xs">What should feel effortless for the user?</p>
      </div>

      <div data-thinking-note className="absolute right-[9%] top-[15%] w-[26%] rotate-2 bg-accent p-3 text-ink shadow-[0_12px_26px_rgba(18,18,18,0.12)] sm:p-4">
        <span className="text-xs font-bold uppercase tracking-[0.12em]">Core idea</span>
        <p className="mb-0 mt-2 text-xs font-semibold leading-[1.35] sm:text-xs">Clarity before decoration.</p>
      </div>

      <div data-thinking-note className="absolute left-[8%] top-[40%] h-[28%] w-[42%] -rotate-1 border border-ink/18 bg-white p-3 shadow-[0_14px_30px_rgba(18,18,18,0.09)] sm:p-4">
        <div className="flex items-center justify-between border-b border-ink/10 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">
          <span>Wireframe / Home</span><span>12 cols</span>
        </div>
        <div className="mt-3 grid grid-cols-[0.68fr_0.32fr] gap-2">
          <div>
            <span className="block h-2 w-4/5 bg-ink/15" />
            <span className="mt-2 block h-2 w-3/5 bg-ink/10" />
            <span className="mt-3 block h-5 w-14 border border-ink/20" />
          </div>
          <div className="grid place-items-center border border-dashed border-ink/20 text-xs text-[#777]">MEDIA</div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((item) => <span key={item} className="h-9 border border-ink/12" />)}
        </div>
        <span className="absolute -bottom-4 left-1/2 text-xs font-semibold text-accent">24px gap</span>
      </div>

      <div data-thinking-note className="absolute right-[7%] top-[39%] w-[34%] rotate-1 border border-ink/14 bg-paper p-3 shadow-[0_12px_28px_rgba(18,18,18,0.09)] sm:p-4">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#777]">Type scale</span>
        <span className="mt-2 block text-[clamp(17px,2.2vw,29px)] font-semibold leading-none tracking-[-0.05em]">Aa</span>
        <div className="mt-3 flex items-end gap-2 text-ink">
          <b className="text-[14px]">H1</b><b className="text-xs">H2</b><span className="text-xs">Body / 16</span>
        </div>
        <div className="mt-3 flex gap-1.5" aria-label="Webcodder colour tokens">
          {["bg-ink", "bg-[#242424]", "bg-paper-deep", "bg-accent"].map((swatch) => <i key={swatch} className={`size-4 rounded-full border border-ink/10 ${swatch}`} />)}
        </div>
      </div>

      <CodeNote />

      <div data-thinking-note className="absolute bottom-[14%] left-[10%] flex items-center gap-2 rounded-full border border-ink/12 bg-white px-3 py-2 text-xs font-semibold shadow-[0_8px_20px_rgba(18,18,18,0.08)]">
        <Sparkles size={12} className="text-accent" /> AI idea · contextual onboarding
      </div>

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 700 650" fill="none" aria-hidden="true">
        <path data-flow-path className="stroke-accent" d="M270 215 C330 190 350 258 403 236 S520 205 558 270" strokeWidth="1.5" strokeDasharray="460" strokeDashoffset="460" />
        <path className="stroke-accent" d="M553 263 L562 270 L553 275" strokeWidth="1.5" />
      </svg>

      <span className="absolute left-[4%] top-[32%] text-xs font-semibold uppercase tracking-[0.1em] text-[#777] [writing-mode:vertical-rl]">640px canvas</span>
      <span className="absolute right-[3%] top-[31%] h-[30%] border-l border-dashed border-ink/18" />
    </>
  );
}

function CodeNote() {
  const reduceMotion = useReducedMotion();
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setCharacterCount((current) => current >= codeSample.length ? codeSample.length : current + 1);
    }, 32);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const visibleCode = reduceMotion ? codeSample : codeSample.slice(0, characterCount);
  return (
    <div data-thinking-note className="absolute bottom-[10%] right-[7%] w-[38%] -rotate-1 bg-ink p-3 text-white shadow-[0_14px_30px_rgba(18,18,18,0.18)] sm:p-4">
      <div className="mb-2 flex gap-1"><i className="size-1.5 rounded-full bg-accent" /><i className="size-1.5 rounded-full bg-white/20" /></div>
      <pre className="m-0 min-h-20 whitespace-pre-wrap font-mono text-xs leading-[1.55] text-white/68 sm:text-xs">{visibleCode}<i className="ml-0.5 inline-block h-2.5 w-px animate-pulse bg-accent motion-reduce:hidden" /></pre>
    </div>
  );
}

function PolishedInterface() {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-ink/14 bg-paper shadow-[0_24px_60px_rgba(18,18,18,0.14)]">
      <div className="flex h-9 items-center justify-between border-b border-ink/10 bg-white px-4 text-xs font-semibold uppercase tracking-[0.1em]">
        <span>webcodder.</span><span className="flex gap-3 text-[#777]"><i>Work</i><i>Studio</i><b className="text-ink">Start</b></span>
      </div>
      <div className="grid h-[calc(100%-36px)] grid-rows-[1fr_auto] p-[clamp(14px,3vw,28px)]">
        <div className="grid items-center gap-5 sm:grid-cols-[1.08fr_0.92fr]">
          <div>
            <span data-polish-mark className="block translate-y-2 text-xs font-semibold uppercase tracking-[0.13em] text-accent opacity-0">Independent product studio</span>
            <h3 data-polish-mark className="mb-0 mt-3 translate-y-2 text-[clamp(21px,3.5vw,40px)] font-semibold leading-[0.98] tracking-[-0.055em] opacity-0">Ideas shaped<br />into impact.</h3>
            <p data-polish-mark className="mb-0 mt-3 max-w-[28ch] translate-y-2 text-xs leading-[1.6] text-[#777] opacity-0 sm:text-xs">Strategy, design and engineering aligned around one clear business outcome.</p>
            <span data-polish-mark className="mt-4 inline-flex translate-y-2 rounded-full bg-accent px-3 py-2 text-xs font-semibold opacity-0">Start a project ↗</span>
          </div>
          <div data-polish-mark className="relative aspect-square translate-y-2 overflow-hidden rounded-xl bg-ink p-4 text-white opacity-0">
            <span className="text-xs uppercase tracking-[0.11em] text-white/40">System / 01</span>
            <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-1">
              <i className="h-8 bg-white/8" /><i className="h-13 bg-accent" /><i className="h-18 bg-white/14" />
            </div>
            <span className="absolute right-4 top-4 size-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none" />
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 border-t border-ink/10 pt-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#777]">
          <span>Strategy</span><span className="text-center">Experience</span><span className="text-right">Engineering</span>
        </div>
      </div>
    </div>
  );
}

function DesignNote({ label, tooltip, position }: { label: string; tooltip: string; position: string }) {
  return (
    <button type="button" aria-label={tooltip} className={`group absolute z-50 grid size-8 place-items-center rounded-full border border-ink/14 bg-white text-xs font-bold text-ink shadow-[0_7px_18px_rgba(18,18,18,0.1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${position}`}>
      {label}
      <span role="tooltip" className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 w-max -translate-x-1/2 translate-y-1 rounded-md bg-ink px-2.5 py-1.5 text-xs font-semibold tracking-normal text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
        {tooltip}
      </span>
    </button>
  );
}

function MagneticButton({ reducedMotion }: { reducedMotion: boolean }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 18 });
  const y = useSpring(rawY, { stiffness: 260, damping: 18 });

  function attract(event: React.PointerEvent<HTMLDivElement>) {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    rawY.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function release() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div onPointerMove={attract} onPointerLeave={release} className="p-2">
      <motion.div style={reducedMotion ? undefined : { x, y }}>
        <Link href="/contact" className="inline-flex min-h-14 items-center gap-2 rounded-full bg-accent px-7 text-sm font-semibold text-ink shadow-[0_12px_30px_rgba(79,140,255,0.2)] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          Build With Webcodder <ArrowUpRight size={17} />
        </Link>
      </motion.div>
    </div>
  );
}
