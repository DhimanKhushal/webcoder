import type { Metadata } from "next";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Webcodder, a digital product agency built around clarity, craft and useful outcomes.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-hero>About Webcodder</p>
          <h1 data-hero>Small team.<br /><span>Serious craft.</span></h1>
          <div className="page-hero-copy" data-hero>
            <p />
            <p>
              We are a Chandigarh-based independent agency helping ambitious
              businesses look sharper, work smarter and grow through thoughtful
              digital products.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container story-grid">
          <article className="story-card dark" data-reveal>
            <span className="eyebrow">Our belief</span>
            <h2>Clarity beats complexity.</h2>
            <p>
              Great digital work is not about adding more. It is about finding
              the clearest idea, removing friction and making every detail earn
              its place.
            </p>
          </article>
          <article className="story-card" data-reveal>
            <span className="eyebrow">Our approach</span>
            <h2>Partners, not vendors.</h2>
            <p>
              We ask hard questions, share work early and stay close from
              kickoff to launch. You always know what we are making, why it
              matters and what happens next.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow" data-reveal>How we work</p>
          <h2 className="section-title" data-reveal>From “what if?” to “we shipped it.”</h2>
          <div className="process-grid">
            {[
              ["01", "Discover", "We learn the business, audience and real problem before prescribing a solution."],
              ["02", "Define", "We shape the strategy, scope, content and a clear plan for every milestone."],
              ["03", "Design", "We turn insight into a distinctive, intuitive experience and test the details."],
              ["04", "Deliver", "We build, refine, launch and support a product made to perform in the real world."],
            ].map(([number, title, copy]) => (
              <article className="process-step" key={number} data-reveal>
                <strong>{number}</strong>
                <h3>{title}</h3>
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
