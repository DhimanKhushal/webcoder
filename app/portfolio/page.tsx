import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  BarChart3,
  Blocks,
  Brush,
  Check,
  Code2,
  Compass,
  Lightbulb,
  Megaphone,
  MousePointer2,
  PenTool,
  Rocket,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Video,
} from "lucide-react";
import { tw } from "@/lib/tailwind";
import { FeaturedProjects } from "@/components/portfolio/featured-projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Webcodder's creative portfolio across digital marketing, content, graphic design and website development.",
};

const expertise = [
  {
    number: "01",
    title: "Digital Marketing",
    intro: "Strategy and campaigns that connect the right message with the right audience.",
    icon: Target,
    services: [
      "Digital Marketing Strategy", "Meta Ads (Facebook & Instagram Ads)", "Google Ads",
      "Social Media Marketing", "Audience Targeting", "Campaign Management",
      "Lead Generation", "Performance Marketing", "Analytics & Optimization",
    ],
  },
  {
    number: "02",
    title: "Content Creation",
    intro: "A clear, consistent voice across every format and platform.",
    icon: Video,
    services: [
      "Social Media Content", "Creative Content Strategy", "Reels & Short-form Video Content",
      "Brand Storytelling", "Marketing Copywriting", "Promotional Content", "Content Planning",
    ],
  },
  {
    number: "03",
    title: "Graphic Designing",
    intro: "Visual systems and creative assets that make a brand recognizable.",
    icon: Brush,
    services: [
      "Social Media Creatives", "Brand Identity Design", "Logo Design", "Marketing Banners",
      "Posters & Advertisements", "Promotional Graphics", "Creative Visual Designs",
    ],
  },
  {
    number: "04",
    title: "Website Design & Development",
    intro: "Useful, responsive web experiences designed to look sharp and work hard.",
    icon: Code2,
    services: [
      "Responsive Website Design", "UI/UX Design", "Frontend Development", "Landing Page Design",
      "Business Websites", "Modern Web Experiences", "Website Optimization",
    ],
  },
];

const process = [
  ["01", "Discover", "Understanding the brand, audience, and business goals.", Search],
  ["02", "Strategize", "Planning the right creative and digital strategy.", Compass],
  ["03", "Create", "Designing, developing, and producing engaging content.", PenTool],
  ["04", "Launch", "Executing campaigns and delivering digital experiences.", Rocket],
  ["05", "Optimize", "Analyzing performance and continuously improving results.", TrendingUp],
] as const;

const reasons = [
  ["Creative Thinking", "Fresh concepts grounded in a clear purpose.", Lightbulb],
  ["Modern Technology", "Thoughtful tools and technology built for the job.", Blocks],
  ["Strategic Marketing", "Connected plans that bring content and campaigns together.", BarChart3],
  ["User-focused Design", "Clear, accessible experiences shaped around real people.", MousePointer2],
  ["Performance-driven Approach", "Continuous learning through meaningful measurement.", TrendingUp],
  ["Complete Digital Solutions", "Creative, marketing and web under one roof.", Asterisk],
] as const;

export default function PortfolioPage() {
  return (
    <>
      <section className={tw("relative isolate overflow-hidden bg-[#0b1220] pb-20 pt-36 text-white sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-48")}>
        <div aria-hidden="true" className={tw("pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(220,234,247,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(220,234,247,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]")} />
        <div aria-hidden="true" className={tw("pointer-events-none absolute -right-28 top-28 -z-10 size-[440px] rounded-full border border-blue-400/15 shadow-[0_0_0_52px_rgba(59,130,246,0.035),0_0_0_104px_rgba(59,130,246,0.025)] sm:right-[8%] sm:top-32 sm:size-[520px]")} />
        <div aria-hidden="true" className={tw("pointer-events-none absolute right-[18%] top-[34%] -z-10 size-3 rotate-45 border border-blue-300/70 [animation:portfolio-float_6s_ease-in-out_infinite]")} />
        <div className={tw("container relative")}>
          <p className={tw("eyebrow text-[#8db8ff]")} data-hero>Creative digital agency · Chandigarh</p>
          <h1 className={tw("mt-7 max-w-[980px] text-balance font-[family-name:var(--display)] text-[clamp(46px,8vw,100px)] font-semibold leading-[0.99] tracking-[-0.065em]")} data-hero>
            Creative Ideas.<br />
            <span className={tw("text-[#8db8ff]")}>Digital Experiences.</span><br />
            Measurable Growth.
          </h1>
          <div className={tw("mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.65fr)_minmax(320px,0.35fr)] lg:items-end")} data-hero>
            <p className={tw("m-0 max-w-[690px] text-pretty text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9")}>
              We combine creativity, technology, and digital marketing to build powerful brands and meaningful digital experiences.
            </p>
            <div className={tw("flex flex-wrap gap-3 lg:justify-end")}>
              <Link href="#featured-work" className={tw("button")}>
                Explore Our Work <ArrowDown size={17} />
              </Link>
              <Link href="/contact" className={tw("button button-outline")}>
                Let&apos;s Work Together <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
          <div className={tw("mt-16 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:mt-20")} data-hero>
            <span className={tw("grid size-9 place-items-center rounded-full border border-white/15 text-[#8db8ff]")}><ArrowDown size={14} /></span>
            <span>Scroll to explore</span>
            <span aria-hidden="true" className={tw("ml-2 h-px w-16 bg-gradient-to-r from-blue-400/70 to-transparent")} />
          </div>
        </div>
      </section>

      <section id="expertise" className={tw("section bg-[#f5faff]")}>
        <div className={tw("container")}>
          <div className={tw("mb-12 grid gap-7 md:mb-16 md:grid-cols-[minmax(0,0.8fr)_minmax(280px,0.4fr)] md:items-end")} data-reveal>
            <div>
              <p className={tw("eyebrow")}>Our expertise</p>
              <h2 className={tw("section-title mt-4")}>Every part of your digital presence, working together.</h2>
            </div>
            <p className={tw("section-copy m-0")}>One connected team for the ideas, content, campaigns and experiences that help your brand move forward.</p>
          </div>
          <div className={tw("grid gap-4 sm:grid-cols-2")}>
            {expertise.map((area) => {
              const Icon = area.icon;
              return (
                <article key={area.number} className={tw("group relative overflow-hidden rounded-[24px] border border-[#dceaf7] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.045)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(15,23,42,0.09)] sm:p-8")} data-reveal>
                  <div className={tw("flex items-start justify-between gap-4")}>
                    <span className={tw("text-xs font-semibold tracking-[0.16em] text-blue-600")}>{area.number} / 04</span>
                    <span className={tw("grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:rotate-[-6deg] group-hover:bg-blue-600 group-hover:text-white")}><Icon size={21} strokeWidth={1.7} /></span>
                  </div>
                  <h3 className={tw("mt-8 text-[25px] font-semibold leading-tight tracking-[-0.04em] text-[#172b4d] sm:text-[29px]")}>{area.title}</h3>
                  <p className={tw("mt-3 max-w-[48ch] text-[15px] leading-7 text-slate-600")}>{area.intro}</p>
                  <ul className={tw("mt-6 flex flex-wrap gap-2")} aria-label={`${area.title} services`}>
                    {area.services.map((service) => (
                      <li key={service} className={tw("inline-flex items-center gap-1.5 rounded-full border border-[#e4edf7] bg-[#f8fbff] px-3 py-1.5 text-[11px] leading-4 text-slate-600 transition group-hover:border-blue-100 group-hover:bg-blue-50/70")}>
                        <Check size={11} className={tw("shrink-0 text-blue-500")} />{service}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FeaturedProjects />

      <section id="process" className={tw("section bg-white")}>
        <div className={tw("container")}>
          <div className={tw("mb-12 max-w-2xl sm:mb-16")} data-reveal>
            <p className={tw("eyebrow")}>How we work</p>
            <h2 className={tw("section-title mt-4")}>A clear path from first thought to lasting impact.</h2>
          </div>
          <ol className={tw("grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-5")}>
            {process.map(([number, title, description, Icon]) => (
              <li key={number} className={tw("group relative min-h-[230px] rounded-[20px] border border-[#dceaf7] bg-[#f8fbff] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_38px_rgba(15,23,42,0.08)] lg:min-h-[270px]")} data-reveal>
                <div className={tw("flex items-center justify-between")}>
                  <span className={tw("font-[family-name:var(--display)] text-[32px] font-semibold tracking-[-0.05em] text-blue-600")}>{number}</span>
                  <Icon size={20} strokeWidth={1.6} className={tw("text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-600")} />
                </div>
                <h3 className={tw("mb-2 mt-10 text-xl font-semibold tracking-[-0.03em] text-[#172b4d]")}>{title}</h3>
                <p className={tw("m-0 text-sm leading-6 text-slate-600")}>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={tw("section bg-[#f5faff]")}>
        <div className={tw("container")}>
          <div className={tw("mb-12 grid gap-7 md:mb-14 md:grid-cols-[minmax(0,0.7fr)_minmax(280px,0.3fr)] md:items-end")} data-reveal>
            <div>
              <p className={tw("eyebrow")}>Why Webcodder</p>
              <h2 className={tw("section-title mt-4")}>Built on good thinking. Delivered with care.</h2>
            </div>
            <p className={tw("section-copy m-0")}>The right mix of creative craft, technology and strategy for every stage of your digital journey.</p>
          </div>
          <div className={tw("grid gap-3 sm:grid-cols-2 lg:grid-cols-3")}>
            {reasons.map(([title, description, Icon], index) => (
              <article key={title} className={tw("group flex gap-4 rounded-[20px] border border-[#dceaf7] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_14px_36px_rgba(15,23,42,0.07)] sm:p-6")} data-reveal>
                <span className={tw("grid size-11 shrink-0 place-items-center rounded-2xl bg-[#eaf3ff] text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white")}><Icon size={20} strokeWidth={1.7} /></span>
                <div>
                  <span className={tw("text-[10px] font-semibold tracking-[0.15em] text-blue-600")}>0{index + 1}</span>
                  <h3 className={tw("mb-1 mt-1 text-base font-semibold tracking-[-0.02em] text-[#172b4d]")}>{title}</h3>
                  <p className={tw("m-0 text-sm leading-6 text-slate-600")}>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={tw("relative isolate overflow-hidden bg-[#0b1220] py-20 text-white sm:py-28 lg:py-32")}>
        <div aria-hidden="true" className={tw("pointer-events-none absolute -right-36 -top-40 -z-10 size-[460px] rounded-full border border-blue-300/15 shadow-[0_0_0_50px_rgba(59,130,246,0.035),0_0_0_100px_rgba(59,130,246,0.025)]")} />
        <div className={tw("container relative")} data-reveal>
          <div className={tw("max-w-4xl")}>
            <p className={tw("eyebrow text-[#8db8ff]")}><Sparkles size={14} className={tw("mr-2 inline-block")} />Your next chapter starts here</p>
            <h2 className={tw("mt-5 text-balance font-[family-name:var(--display)] text-[clamp(38px,6vw,72px)] font-semibold leading-[1.04] tracking-[-0.055em]")}>Let&apos;s Build Something Extraordinary.</h2>
            <p className={tw("mt-5 max-w-2xl text-lg leading-8 text-slate-300")}>Have an idea or a project in mind? Let&apos;s turn your vision into a powerful digital experience.</p>
            <div className={tw("mt-8 flex flex-wrap gap-3")}>
              <Link href="/contact" className={tw("button")}>Start a Project <ArrowUpRight size={17} /></Link>
              <Link href="/contact" className={tw("button button-outline")}>Contact Us <Megaphone size={17} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
