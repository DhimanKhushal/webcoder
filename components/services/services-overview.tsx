import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Megaphone,
  PenTool,
  Search,
  Sparkles,
} from "lucide-react";
import { serviceDetails } from "@/lib/services-page-data";

const serviceIcons = [Code2, PenTool, Megaphone, Sparkles, Search];

export function ServicesOverview() {
  return (
    <section className="services-overview" data-services-overview>
      <div className="services-overview-construction" aria-hidden="true">
        <span />
        <span />
        <i />
      </div>

      <div className="services-page-container services-overview-container">
        <div className="services-section-head" data-services-overview-header>
          <div>
            <p className="eyebrow services-overview-eyebrow">Our expertise</p>
            <h2>Everything your business{" "}<br />needs under one roof.</h2>
          </div>
          <p>
            Strategy, design, engineering and growth work together as one connected capability—giving your business clarity from first idea to continuous improvement.
          </p>
        </div>

        <div className="service-summary-grid">
          {serviceDetails.map((service, index) => {
            const ServiceIcon = serviceIcons[index];

            return (
              <Link
                className="service-summary-card"
                href={`#service-${service.number}`}
                key={service.number}
                data-services-overview-column
              >
                <span className="service-summary-number">{service.number}</span>
                <div className="service-summary-content">
                  <div className="service-summary-mark" aria-hidden="true">
                    <ServiceIcon size={68} strokeWidth={1.15} />
                    <span>{service.category}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <ul>
                    {service.deliverables.slice(0, 4).map((offering) => (
                      <li key={offering}>{offering}</li>
                    ))}
                  </ul>
                  <ArrowUpRight className="service-summary-arrow" size={22} aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="service-summary-footer" data-services-overview-footer>
          <Link href="#service-details" className="service-summary-cta">
            Explore Every Service <ArrowDown size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
