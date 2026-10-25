import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CTA } from "@/components/cta";
import {
  getCategory,
  getRelatedServices,
  getServicePath,
  type ServicePage,
} from "@/lib/service-pages";
import { ServiceFAQ } from "./service-faq";
import styles from "./service-detail.module.css";

export function ServiceDetailPage({ service }: { service: ServicePage }) {
  const category = getCategory(service);
  const related = getRelatedServices(service);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className="services-page-container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li aria-current="page">{service.title}</li>
            </ol>
          </nav>
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className="eyebrow">{service.tagline}</p>
              <h1>
                {service.heading} <span>{service.headingAccent}</span>
              </h1>
              <p className={styles.heroIntro}>{service.intro}</p>
              <div className={styles.heroActions}>
                <Link className="button" href="/contact">
                  Start a project <ArrowUpRight size={17} />
                </Link>
                <a className="button button-outline" href="#what-you-get">
                  What&rsquo;s included <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <dl className={styles.heroFacts}>
              {service.highlights.map((highlight) => (
                <div key={highlight.label}>
                  <dt>{highlight.label}</dt>
                  <dd>{highlight.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={`${styles.section} section`} id="what-you-get" data-reveal>
        <div className="services-page-container">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">What you get</p>
              <h2>How we approach {service.title}.</h2>
            </div>
            <p>{category.summary}</p>
          </div>
          <div className={styles.valueGrid}>
            {service.whatYouGet.map((item, index) => (
              <article className={styles.valueCard} key={item.title} data-reveal-card>
                <span className={styles.valueNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deliverySection}`} data-reveal>
        <div className="services-page-container">
          <div className={styles.deliveryLayout}>
            <div className={styles.deliverables}>
              <p className="eyebrow">Scope</p>
              <h2>What&rsquo;s included</h2>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <aside className={styles.stackCard}>
              <p className="eyebrow">Tools &amp; technology</p>
              <ul>
                {service.stack.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <Link className={styles.stackLink} href="/contact">
                Discuss your requirements <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className={`${styles.section} section`} data-reveal>
        <div className="services-page-container">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Process</p>
              <h2>How the work runs.</h2>
            </div>
            <p>A consistent sequence we follow on every {category.label} engagement.</p>
          </div>
          <ol className={styles.processGrid}>
            {category.process.map((step) => (
              <li className={styles.processStep} key={step.step} data-reveal-card>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.faqSection}`} data-reveal>
        <div className="services-page-container">
          <div className={styles.faqLayout}>
            <div>
              <p className="eyebrow">Questions</p>
              <h2>Straight answers.</h2>
              <p className={styles.faqAside}>
                Something not covered here? Ask us directly — we would rather set
                expectations now than after a contract.
              </p>
              <Link className={styles.stackLink} href="/contact">
                Ask a question <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <ServiceFAQ faqs={service.faqs} />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={`${styles.section} section`} data-reveal>
          <div className="services-page-container">
            <div className={styles.sectionHead}>
              <div>
                <p className="eyebrow">Related services</p>
                <h2>Often combined with this.</h2>
              </div>
              <p>Most projects pull in more than one capability. These pair naturally with {service.title}.</p>
            </div>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <Link className={styles.relatedCard} href={getServicePath(item.slug)} key={item.slug} data-reveal-card>
                  <small>{item.tagline}</small>
                  <h3>{item.title}</h3>
                  <p>{item.metaDescription}</p>
                  <span>View service <ArrowUpRight size={15} aria-hidden="true" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
