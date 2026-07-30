import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceDetails } from "@/lib/services-page-data";

export function ServicesOverview() {
  return (
    <section className="services-overview section" data-reveal>
      <div className="services-page-container">
        <div className="services-section-head">
          <div>
            <p className="eyebrow">Complete capability</p>
            <h2>Everything your digital presence needs, under one roof.</h2>
          </div>
          <p>
            We combine strategy, creativity and technology to deliver complete
            digital solutions rather than disconnected services.
          </p>
        </div>
        <div className="service-summary-grid">
          {serviceDetails.map((service) => (
            <Link className="service-summary-card" href={`#service-${service.number}`} key={service.number}>
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.overview}</p>
              </div>
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
