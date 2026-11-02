"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { tw } from "@/lib/tailwind";

const caseStudies = [
  {
    number: "01",
    category: "Digital Marketing · Paid Social",
    title: "Brand Growth Through Digital Marketing",
    description:
      "Meta Ads, social media campaigns, audience targeting and creative strategy—brought together to build a stronger digital presence.",
    image: "/projects/kingsland-digital.png",
    alt: "Kingsland Digital website screenshot showing its digital marketing services",
    services: ["Meta Ads", "Facebook Ads", "Instagram Marketing", "Google Ads", "Lead Generation", "Campaign Strategy"],
    highlights: ["Meta Ads", "Social Media", "Lead Generation"],
    details:
      "Bring campaign planning, Meta Ads and social content into one clear creative direction. Audience targeting and lead generation are considered throughout the campaign journey, from first discovery to follow-up.",
    href: "/projects",
  },
  {
    number: "02",
    category: "Graphic Design · Social Content",
    title: "Visuals That Make Brands Stand Out",
    description:
      "A considered visual direction for brand identity, social media creatives and promotional graphics across digital touchpoints.",
    image: "/projects/amazing-aesthetics.png",
    alt: "Amazing Aesthetics website screenshot from the Webcodder project portfolio",
    services: ["Brand Identity", "Social Media Creatives", "Logo Design", "Promotional Graphics", "Advertising Designs"],
    highlights: ["Brand Identity", "Social Creatives", "Promotional Design"],
    details:
      "Connect brand identity, social creatives and promotional design through a consistent visual language. Each format is considered for how it appears across digital touchpoints.",
    href: "/projects",
  },
  {
    number: "03",
    category: "Website Development · Digital Experience",
    title: "Creating Modern Digital Experiences",
    description:
      "A clear, responsive web experience designed to make a complex consulting offer easier to explore.",
    image: "/projects/franchise-advisor.png",
    alt: "Franchise Advisor website screenshot from the Webcodder project portfolio",
    services: ["UI/UX Design", "Responsive Development", "Frontend Development", "Website Design"],
    highlights: ["Responsive Design", "UI/UX", "Web Development"],
    details:
      "The Franchise Advisor website organizes a consulting offer into a clear digital experience. Responsive layouts, considered UI/UX and frontend development support straightforward browsing across devices.",
    href: "/projects",
  },
];

export function FeaturedProjects() {
  const [openStudy, setOpenStudy] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section id="featured-work" className={tw("bg-white py-20 text-[#172b4d] sm:py-28 lg:py-32")}>
      <div className={tw("container")}>
        <motion.header
          className={tw("mb-12 grid gap-6 border-b border-[#dce5ef] pb-8 sm:mb-16 sm:grid-cols-[minmax(0,1fr)_minmax(260px,0.55fr)] sm:items-end sm:pb-10")}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className={tw("mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700")}>
              <span className={tw("size-2 rounded-full bg-blue-600")} aria-hidden="true" />
              Our selected work
            </p>
            <h2 className={tw("m-0 max-w-[760px] text-balance font-[family-name:var(--display)] text-[clamp(38px,5.4vw,66px)] font-semibold leading-[1.04] tracking-[-0.055em] text-[#101828]")}>
              Ideas Into Impactful Digital Experiences.
            </h2>
          </div>
          <p className={tw("m-0 max-w-[440px] text-[15px] leading-7 text-slate-600 sm:justify-self-end sm:text-base")}>
            A selection of our creative, marketing and digital experiences.
          </p>
        </motion.header>

        <div>
          {caseStudies.map((project, index) => {
            const isOpen = openStudy === project.number;
            const reverse = index % 2 === 1;
            return (
              <motion.article
                key={project.number}
                className={tw("grid items-center gap-8 border-b border-[#e2e8f0] py-10 first:pt-0 last:border-b-0 last:pb-0 sm:gap-12 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-[76px]")}
                initial={reduceMotion ? false : { opacity: 0, y: 34 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className={tw(`group relative isolate aspect-[1.18] overflow-hidden rounded-[22px] border border-slate-200 bg-[#f4f7fb] shadow-[0_18px_52px_rgba(23,43,77,0.09)] ${reverse ? "lg:order-2" : "lg:order-1"}`)}
                  initial={reduceMotion ? false : { clipPath: reverse ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", opacity: 0.55 }}
                  whileInView={reduceMotion ? undefined : { clipPath: "inset(0 0 0 0)", opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={tw("object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]")}
                  />
                  <span className={tw("absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#172b4d] shadow-sm backdrop-blur sm:left-5 sm:top-5 sm:text-[10px]")}>{project.category}</span>
                  <span aria-hidden="true" className={tw("absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-blue-600 text-white shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:bottom-5 sm:right-5")}><ArrowUpRight size={18} /></span>
                </motion.div>

                <div className={tw(`min-w-0 ${reverse ? "lg:order-1" : "lg:order-2"}`)}>
                  <motion.div
                    initial={reduceMotion ? false : "hidden"}
                    whileInView={reduceMotion ? undefined : "visible"}
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } } }}
                  >
                    <motion.p className={tw("mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-700")} variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                      <span>{project.number}</span><span className={tw("h-px w-9 bg-blue-500")} /><span>{project.category}</span>
                    </motion.p>
                    <motion.h3 className={tw("m-0 max-w-[620px] text-balance font-[family-name:var(--display)] text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] tracking-[-0.05em] text-[#101828]")} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
                      {project.title}
                    </motion.h3>
                    <motion.p className={tw("mb-0 mt-5 max-w-[570px] text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8")} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
                      {project.description}
                    </motion.p>
                    <motion.div className={tw("mt-7")} variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                      <p className={tw("mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500")}>Services</p>
                      <ul className={tw("m-0 flex list-none flex-wrap gap-2 p-0")}>
                        {project.services.map((service) => (
                          <li key={service} className={tw("rounded-full border border-[#dbe4ef] bg-white px-3 py-1.5 text-[11px] leading-4 text-slate-700")}>{service}</li>
                        ))}
                      </ul>
                    </motion.div>
                    <motion.ul className={tw("mt-7 grid list-none grid-cols-3 gap-2 border-y border-[#e2e8f0] py-4 pl-0 sm:gap-4 sm:py-5")} variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className={tw("border-l-2 border-blue-500 pl-2.5 text-[10px] font-medium leading-5 text-[#344054] sm:pl-3 sm:text-xs")}>{highlight}</li>
                      ))}
                    </motion.ul>
                    <motion.div className={tw("mt-6 flex flex-wrap items-center gap-4")} variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}>
                      <button
                        type="button"
                        className={tw("group/case relative inline-flex min-h-11 items-center gap-3 pb-1 text-sm font-semibold text-[#172b4d] transition-colors hover:text-blue-700 after:absolute after:bottom-0 after:left-0 after:h-px after:w-[calc(100%-2.5rem)] after:origin-left after:scale-x-100 after:bg-blue-600 after:transition-transform after:duration-300 group-hover/case:after:scale-x-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600")}
                        aria-expanded={isOpen}
                        aria-controls={`case-study-${project.number}`}
                        onClick={() => setOpenStudy(isOpen ? null : project.number)}
                      >
                        {isOpen ? "Close Case Study" : "View Case Study"}
                        <span className={tw("grid size-7 place-items-center rounded-full bg-blue-600 text-white transition-transform duration-300 group-hover/case:translate-x-1")}><ArrowDownRight size={15} /></span>
                      </button>
                      <Link href={project.href} className={tw("inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-blue-700")}>
                        Browse project index <ArrowUpRight size={14} />
                      </Link>
                    </motion.div>
                  </motion.div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`case-study-${project.number}`}
                        className={tw("overflow-hidden")}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className={tw("mt-5 border-l-2 border-blue-500 bg-[#f6f9fd] p-5 sm:p-6")}>
                          <p className={tw("m-0 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-700")}>Case study overview</p>
                          <p className={tw("mb-0 mt-2 text-sm leading-6 text-slate-700")}>{project.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
