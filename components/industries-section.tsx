"use client";

import { tw } from "@/lib/tailwind";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useState } from "react";

const industries = [
  {
    number: "01",
    title: "Healthcare",
    description:
      "Digital platforms designed to improve accessibility, communication and patient experiences.",
    image: "/industries/healthcare.jpg",
    imageAlt: "Medical professional using modern healthcare technology",
    slug: "healthcare",
  },
  {
    number: "02",
    title: "Education",
    description:
      "Modern learning platforms, institute websites and digital tools that make education more engaging.",
    image: "/industries/education.jpg",
    imageAlt: "Students collaborating in a modern digital learning environment",
    slug: "education",
  },
  {
    number: "03",
    title: "Real Estate",
    description:
      "High-converting property websites and digital experiences that turn visitors into enquiries.",
    image: "/industries/real-estate.jpg",
    imageAlt: "Contemporary residential architecture",
    slug: "real-estate",
  },
  {
    number: "04",
    title: "E-Commerce",
    description:
      "Fast, scalable and conversion-focused online stores built to increase digital sales.",
    image: "/industries/ecommerce.jpg",
    imageAlt: "Premium online shopping and payment experience",
    slug: "ecommerce",
  },
  {
    number: "05",
    title: "Hospitality",
    description:
      "Premium websites and booking experiences for hotels, restaurants and travel businesses.",
    image: "/industries/hospitality.jpg",
    imageAlt: "Premium hospitality and resort experience",
    slug: "hospitality",
  },
  {
    number: "06",
    title: "SaaS & Startups",
    description:
      "Scalable digital products, landing pages and platforms designed for rapid business growth.",
    image: "/industries/saas-startups.jpg",
    imageAlt: "Startup team collaborating in a technology workspace",
    slug: "saas-startups",
  },
  {
    number: "07",
    title: "Manufacturing",
    description:
      "Professional corporate websites and product platforms that strengthen industrial brands.",
    image: "/industries/manufacturing.jpg",
    imageAlt: "Modern industrial manufacturing facility",
    slug: "manufacturing",
  },
  {
    number: "08",
    title: "Professional Services",
    description:
      "Trust-focused digital experiences for consultants, agencies and service-based businesses.",
    image: "/industries/professional-services.jpg",
    imageAlt: "Professional team in a strategy meeting",
    slug: "professional-services",
  },
] as const;

export function IndustriesSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerX = useMotionValue(0);
  const previewY = useMotionValue(70);
  const springX = useSpring(pointerX, { stiffness: 110, damping: 24 });
  const springY = useSpring(previewY, { stiffness: 120, damping: 25 });
  const previewX = useTransform(springX, [-0.5, 0.5], [-9, 9]);
  const previewRotate = useTransform(springX, [-0.5, 0.5], [-3, 3]);

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
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = event.clientY - bounds.top - 150;
      pointerX.set(x);
      previewY.set(Math.max(34, Math.min(y, bounds.height - 350)));
    },
    [pointerX, previewY, reduceMotion]
  );

  return (
    <section className={tw("industries-section")} data-home-section>
      <span className={tw("industries-outline-orbit")} aria-hidden="true" />
      <div className={tw("container industries-layout")}>
        <motion.div
          className={tw("industries-intro")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            className={tw("eyebrow")}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Industries we serve
          </motion.p>
          <div className={tw("industries-heading-mask")}>
            <motion.h2
              variants={{
                hidden: { y: "105%" },
                visible: {
                  y: 0,
                  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              Digital solutions built for your industry.
            </motion.h2>
          </div>
          <motion.p
            className={tw("industries-description")}
            variants={{
              hidden: { opacity: 0, y: 22 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65 },
              },
            }}
          >
            We combine strategy, technology and creative thinking to build
            digital experiences tailored to the challenges of your industry.
          </motion.p>
          <motion.div
            className={tw("industries-intro-footer")}
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span>8 industries. One digital partner.</span>
            <Link href="/contact">
              Discuss your industry <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={tw("industries-list-wrap")}
          onPointerMove={handlePointerMove}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          <div className={tw("industries-list")}>
            {industries.map((industry, index) => {
              const active = activeIndex === index;
              return (
                <motion.article
                  className={tw(`industry-item ${active ? "active" : ""}`)}
                  id={`industry-${industry.slug}`}
                  key={industry.slug}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocusCapture={() => setActiveIndex(index)}
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.58,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                >
                  <button
                    className={tw("industry-trigger")}
                    type="button"
                    aria-expanded={active}
                    aria-controls={`industry-panel-${industry.slug}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={tw("industry-number")}>{industry.number}</span>
                    <span className={tw("industry-main")}>
                      <strong>{industry.title}</strong>
                      <span>{industry.description}</span>
                    </span>
                    <span className={tw("industry-arrow")} aria-hidden="true">
                      <ArrowUpRight size={18} />
                      <ChevronDown size={17} />
                    </span>
                  </button>
                  <div
                    className={tw("industry-mobile-panel")}
                    id={`industry-panel-${industry.slug}`}
                  >
                    <div>
                      <p>{industry.description}</p>
                      <div className={tw("industry-mobile-image")}>
                        <Image
                          src={industry.image}
                          alt={industry.imageAlt}
                          fill
                          sizes="(max-width: 820px) 90vw, 1px"
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              className={tw("industries-floating-image")}
              key={industries[activeIndex].slug}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{
                duration: reduceMotion ? 0 : 0.58,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                x: reduceMotion ? 0 : previewX,
                y: reduceMotion ? 70 : springY,
                rotate: reduceMotion ? 0 : previewRotate,
              }}
            >
              <Image
                src={industries[activeIndex].image}
                alt={industries[activeIndex].imageAlt}
                fill
                sizes="260px"
                priority={activeIndex === 0}
              />
              <span>{industries[activeIndex].title}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
