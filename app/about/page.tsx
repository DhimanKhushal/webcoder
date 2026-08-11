import { tw } from "@/lib/tailwind";
import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { HeroVisual } from "@/components/hero-visual";
import { ComparisonSection } from "@/components/about/ComparisonSection";
import { CompanyPhilosophy } from "@/components/about/CompanyPhilosophy";
import { ClientJourney } from "@/components/about/ClientJourney";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Webcodder, a digital product agency built around clarity, craft and useful outcomes.",
};

export default function AboutPage() {
  return (
    <>
      <section className={tw("page-hero about-page-hero")}>
        <div className={tw("container about-hero-grid")}>
          <div className={tw("about-hero-content")}>
            <p className={tw("eyebrow")} data-hero>About Webcodder</p>
            <h1 data-hero>Small team.<br /><span>Serious craft.</span></h1>
            <p data-hero>
              We are a Chandigarh-based independent agency helping ambitious
              businesses look sharper, work smarter and grow through thoughtful
              digital products.
            </p>
          </div>
          <div className={tw("about-command-panel")}>
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className={tw("section")} style={{ paddingTop: 20 }}>
        <div className={tw("container story-grid")}>
          <article className={tw("story-card dark")} data-reveal>
            <span className={tw("eyebrow")}>Our belief</span>
            <h2>Clarity beats complexity.</h2>
            <p>
              Great digital work is not about adding more. It is about finding
              the clearest idea, removing friction and making every detail earn
              its place.
            </p>
          </article>
          <article className={tw("story-card")} data-reveal>
            <span className={tw("eyebrow")}>Our approach</span>
            <h2>Partners, not vendors.</h2>
            <p>
              We ask hard questions, share work early and stay close from
              kickoff to launch. You always know what we are making, why it
              matters and what happens next.
            </p>
          </article>
        </div>
      </section>

      <CompanyPhilosophy />

      <section className={tw("section")}>
        <div className={tw("container")}>
          <p className={tw("eyebrow")} data-reveal>How we work</p>
          <h2 className={tw("section-title")} data-reveal>From “what if?” to “we shipped it.”</h2>
          <div className={tw("process-grid")}>
            {[
              ["01", "Discover", "We learn the business, audience and real problem before prescribing a solution."],
              ["02", "Define", "We shape the strategy, scope, content and a clear plan for every milestone."],
              ["03", "Design", "We turn insight into a distinctive, intuitive experience and test the details."],
              ["04", "Deliver", "We build, refine, launch and support a product made to perform in the real world."],
            ].map(([number, title, copy]) => (
              <article className={tw("process-step")} key={number} data-reveal>
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ClientJourney />
      <ComparisonSection />
      <CTA />
    </>
  );
}
