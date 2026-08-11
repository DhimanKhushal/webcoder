"use client";

import { tw } from "@/lib/tailwind";

import { useState } from "react";
import { technologies, type Technology } from "@/lib/services-page-data";

const categories: Array<"All" | Technology["category"]> = [
  "All",
  "Frontend",
  "Backend",
  "Design",
  "Marketing",
  "CMS",
  "Analytics",
];

export function TechnologyMarquee() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const upper = technologies.slice(0, 9);
  const lower = technologies.slice(9);

  const renderItems = (items: Technology[], group: string) =>
    [0, 1].flatMap((copy) =>
      items.map((technology) => (
        <span
          className={active === "All" || active === technology.category ? "matched" : "muted"}
          key={`${group}-${copy}-${technology.name}`}
        >
          <i>{technology.category}</i>
          {technology.name}
        </span>
      ))
    );

  return (
    <section className={tw("technology-system section")}>
      <div className={tw("services-page-container")}>
        <p className={tw("eyebrow")}>Our Toolkit</p>
        <h2 className={tw("services-editorial-heading")}>Modern tools for modern digital products.</h2>
        <div className={tw("technology-filters")} role="group" aria-label="Filter technologies">
          {categories.map((category) => (
            <button
              type="button"
              className={active === category ? "active" : ""}
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className={tw("technology-marquees")}>
        <div className={tw("technology-marquee-row")}>
          <div>{renderItems(upper, "upper")}</div>
        </div>
        <div className={tw("technology-marquee-row reverse")}>
          <div>{renderItems(lower, "lower")}</div>
        </div>
      </div>
    </section>
  );
}
