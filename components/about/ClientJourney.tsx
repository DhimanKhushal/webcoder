import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const journeyMilestones = [
  ["01", "Discovery", "We understand your goals, business and audience."],
  ["02", "Trust", "Transparent communication creates confidence."],
  ["03", "Delivery", "We deliver scalable digital products with precision."],
  ["04", "Growth", "We optimise, improve and help your business grow."],
  ["05", "Partnership", "Our best projects become long-term relationships."],
];

export function ClientJourney() {
  return (
    <section className="client-journey" aria-labelledby="client-journey-title" data-client-journey>
      <div className="journey-construction" aria-hidden="true">
        <span className="journey-construction-line journey-construction-line-one" />
        <span className="journey-construction-line journey-construction-line-two" />
        <span className="journey-construction-mark journey-construction-mark-one" />
        <span className="journey-construction-mark journey-construction-mark-two" />
      </div>

      <div className="container client-journey-container">
        <header className="client-journey-header" data-journey-header>
          <div>
            <p className="eyebrow client-journey-eyebrow">Client journey</p>
            <h2 id="client-journey-title">
              <span>Why clients stay.</span>
              <span>Not because they have to.</span>
              <span>Because every project becomes a partnership.</span>
            </h2>
          </div>
          <p className="client-journey-intro">
            <span>After the first project, our work doesn&apos;t stop.</span>
            <span>
              We continue refining, improving and supporting every digital product so our clients can keep growing with confidence.
            </span>
          </p>
        </header>

        <div className="journey-timeline">
          <span className="journey-timeline-track" aria-hidden="true">
            <span data-journey-progress />
          </span>

          {journeyMilestones.map(([number, title, description], index) => (
            <article
              className={`journey-milestone${index === 0 ? " is-active" : ""}`}
              key={number}
              data-journey-milestone
            >
              <span className="journey-number">{number}</span>
              <span className="journey-indicator" aria-hidden="true" />
              <div className="journey-milestone-copy">
                <h3>
                  {title}
                  <i aria-hidden="true" />
                </h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="journey-end" data-journey-end>
          <p>
            We don&apos;t measure success by completed projects.
            <span>We measure it by relationships that continue to grow.</span>
          </p>
          <Link href="/contact" className="journey-cta">
            Start Your Journey <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
