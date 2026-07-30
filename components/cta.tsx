import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta-panel" data-reveal>
          <p className="eyebrow">Let&apos;s build together</p>
          <h2>Got a bold idea? Let&apos;s make it real.</h2>
          <Link className="button button-dark" href="/contact">
            Tell us about it <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
