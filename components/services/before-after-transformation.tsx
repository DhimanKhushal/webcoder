"use client";

import { tw } from "@/lib/tailwind";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export function BeforeAfterTransformation() {
  const [position, setPosition] = useState(50);

  return (
    <section className={tw("transformation-section section")}>
      <div className={tw("services-page-container")}>
        <p className={tw("eyebrow")}>The Transformation</p>
        <h2 className={tw("services-editorial-heading")}>See what strategic design and development can change.</h2>
        <div className={tw("comparison-slider")} style={{ "--comparison": `${position}%` } as React.CSSProperties}>
          <div className={tw("comparison-side before-side")}>
            <span>Before Website</span>
            <div className={tw("before-mock-nav")} />
            <div className={tw("before-mock-title")} />
            <div className={tw("before-mock-columns")}><i /><i /><i /></div>
            <div className={tw("before-mock-copy")}><i /><i /><i /><i /></div>
          </div>
          <div className={tw("comparison-side after-side")}>
            <span>After Webcodder Redesign</span>
            <div className={tw("after-mock-nav")}><b>webcodder.</b><i>Start a project</i></div>
            <h3>Ideas shaped into digital impact.</h3>
            <div className={tw("after-mock-grid")}><i /><i /></div>
          </div>
          <div className={tw("comparison-handle")} aria-hidden="true">
            <span><ArrowLeft size={14} /><ArrowRight size={14} /></span>
            <small>Drag to Compare</small>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Compare website before and after redesign"
          />
        </div>
        <div className={tw("transformation-metrics")}>
          <div><strong>+65%</strong><span>Engagement</span></div>
          <div><strong>2.1s</strong><span>Faster Loading</span></div>
          <div><strong>+38%</strong><span>More Enquiries</span></div>
        </div>
        <p className={tw("transformation-disclaimer")}>Illustrative transformation metrics. Replace with verified project results.</p>
      </div>
    </section>
  );
}
