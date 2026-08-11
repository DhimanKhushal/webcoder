import { tw } from "@/lib/tailwind";
import {
  ArrowUpRight,
  Gauge,
  LifeBuoy,
  MessageSquareText,
  MonitorSmartphone,
  Route,
  SwatchBook,
} from "lucide-react";

const benefits = [
  { number: "01", title: "Clear Project Strategy", copy: "Every project begins with clear goals, priorities, scope and direction.", icon: Route },
  { number: "02", title: "Custom Design System", copy: "We create consistent visual systems designed around your brand and audience.", icon: SwatchBook },
  { number: "03", title: "Responsive Development", copy: "Every experience is optimised for desktop, tablet and mobile devices.", icon: MonitorSmartphone },
  { number: "04", title: "Performance Optimisation", copy: "We improve loading speed, usability, accessibility and technical performance.", icon: Gauge },
  { number: "05", title: "Transparent Communication", copy: "You receive regular updates, clear timelines and complete project visibility.", icon: MessageSquareText },
  { number: "06", title: "Post-Launch Support", copy: "We continue supporting, maintaining and improving your digital product after launch.", icon: LifeBuoy },
];

export function WhatYouGet() {
  return (
    <section className={tw("services-benefits section")}>
      <div className={tw("services-page-container")}>
        <p className={tw("eyebrow")} data-reveal>The Webcodder difference</p>
        <h2 className={tw("services-editorial-heading")} data-reveal>
          More than a service. A complete digital partnership.
        </h2>
        <div className={tw("benefit-bento")}>
          {benefits.map(({ number, title, copy, icon: Icon }) => (
            <article className={tw("benefit-card")} key={number} data-reveal>
              <div>
                <span>{number}</span>
                <Icon size={23} strokeWidth={1.45} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ArrowUpRight className={tw("benefit-corner-arrow")} size={17} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
