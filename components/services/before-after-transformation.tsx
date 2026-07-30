"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export function BeforeAfterTransformation() {
  const [position, setPosition] = useState(50);

  return (
    <section className="transformation-section section">
      <div className="services-page-container">
        <p className="eyebrow">The Transformation</p>
        <h2 className="services-editorial-heading">See what strategic design and development can change.</h2>
        <div className="comparison-slider" style={{ "--comparison": `${position}%` } as React.CSSProperties}>
          <div className="comparison-side before-side">
            <span>Before Website</span>
            <div className="before-mock-nav" />
            <div className="before-mock-title" />
            <div className="before-mock-columns"><i /><i /><i /></div>
            <div className="before-mock-copy"><i /><i /><i /><i /></div>
          </div>
          <div className="comparison-side after-side">
            <span>After Webcodder Redesign</span>
            <div className="after-mock-nav"><b>webcodder.</b><i>Start a project</i></div>
            <h3>Ideas shaped into digital impact.</h3>
            <div className="after-mock-grid"><i /><i /></div>
          </div>
          <div className="comparison-handle" aria-hidden="true">
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
        <div className="transformation-metrics">
          <div><strong>+65%</strong><span>Engagement</span></div>
          <div><strong>2.1s</strong><span>Faster Loading</span></div>
          <div><strong>+38%</strong><span>More Enquiries</span></div>
        </div>
        <p className="transformation-disclaimer">Illustrative transformation metrics. Replace with verified project results.</p>
      </div>
    </section>
  );
}
