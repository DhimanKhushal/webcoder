import type { Metadata } from "next";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Services",
  description: "UI/UX design, web development, software products, e-commerce, branding and digital growth.",
};

const detailedServices = [
  ["01", "UI/UX Design", "Product strategy, user flows, wireframes, interface design, prototypes, design systems and usability thinking."],
  ["02", "Web Development", "High-performance marketing sites, corporate websites, portals and platforms built for every screen."],
  ["03", "Software Development", "Custom web apps, dashboards, workflow tools, APIs and scalable digital products tailored to your operations."],
  ["04", "E-commerce", "Conversion-focused storefronts, Shopify builds, product journeys and integrations that make selling feel seamless."],
  ["05", "Branding", "Brand strategy, visual identity, typography, color systems, messaging and practical guidelines for consistent growth."],
  ["06", "Motion & Interaction", "GSAP motion, micro-interactions and scroll-led storytelling that add character without slowing the experience."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-hero>Capabilities</p>
          <h1 data-hero>Big picture.<br /><span>Pixel detail.</span></h1>
          <div className="page-hero-copy" data-hero>
            <p />
            <p>
              Strategy, design and engineering work better together. Our
              services connect the dots so your brand and product feel like one
              coherent experience.
            </p>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="service-list">
            {detailedServices.map(([number, title, copy]) => (
              <article className="service-row" key={number} data-reveal>
                <strong>{number}</strong>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
