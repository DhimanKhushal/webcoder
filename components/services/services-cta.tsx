import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="services-final-cta">
      <div className="services-page-container">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let&apos;s build something that works beautifully and performs brilliantly.</h2>
          <p>Tell us about your goals, challenges and ideas. We will help you identify the right digital solution for your business.</p>
          <div>
            <Link className="button services-primary-cta" href="/contact">
              Start Your Project <ArrowUpRight size={17} />
            </Link>
            <a className="button button-outline" href="tel:+918298295419">
              Book a Consultation <CalendarDays size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
