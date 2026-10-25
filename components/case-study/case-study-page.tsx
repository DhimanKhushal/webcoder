import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Quote } from "lucide-react";
import { CTA } from "@/components/cta";
import { ProjectArtwork } from "@/components/project-artwork";
import { getCaseStudyPath, getNextCaseStudy, type CaseStudy } from "@/lib/case-studies";
import { getServicePage, getServicePath } from "@/lib/service-pages";
import styles from "./case-study.module.css";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const next = getNextCaseStudy(study.slug);
  const services = study.services
    .map((slug) => getServicePage(slug))
    .filter((service) => service !== undefined);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className="services-page-container">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li aria-current="page">{study.client}</li>
            </ol>
          </nav>
          <div className={styles.heroLayout}>
            <div>
              <p className="eyebrow">{study.category}</p>
              <h1>{study.heading} <span>{study.headingAccent}</span></h1>
              <p className={styles.heroSummary}>{study.summary}</p>
            </div>
            <dl className={styles.heroFacts}>
              {study.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="services-page-container">
          <figure className={styles.artwork}>
            <div className={styles.browserBar}>
              <i /><i /><i />
              <span>{study.slug}</span>
            </div>
            <div className={styles.artworkFrame}>
              <ProjectArtwork
                src={study.image}
                alt={`${study.client} website preview`}
                label={study.client}
                caption={study.category}
                sizes="(max-width: 900px) 94vw, 900px"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className={`${styles.section} section`} data-reveal>
        <div className="services-page-container">
          <div className={styles.briefLayout}>
            <div>
              <p className="eyebrow">The brief</p>
              <h2>What the project had to solve.</h2>
            </div>
            <p className={styles.briefCopy}>{study.brief}</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.approachSection}`} data-reveal>
        <div className="services-page-container">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Approach</p>
              <h2>How we worked through it.</h2>
            </div>
            <p>{study.badge}</p>
          </div>
          <div className={styles.approachGrid}>
            {study.approach.map((item, index) => (
              <article className={styles.approachCard} key={item.title} data-reveal-card>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} section`} data-reveal>
        <div className="services-page-container">
          <div className={styles.deliveredLayout}>
            <div className={styles.delivered}>
              <p className="eyebrow">Delivered</p>
              <h2>What we handed over</h2>
              <ul>
                {study.delivered.map((item) => (
                  <li key={item}><Check size={15} aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
            {services.length > 0 && (
              <aside className={styles.servicesCard}>
                <p className="eyebrow">Services involved</p>
                <ul>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link href={getServicePath(service.slug)}>
                        <span>{service.navLabel}</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link className={styles.asideLink} href="/contact">
                  Start a similar project <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </aside>
            )}
          </div>
        </div>
      </section>

      {study.results.length > 0 && (
        <section className={`${styles.section} ${styles.resultsSection}`} data-reveal>
          <div className="services-page-container">
            <p className="eyebrow">Results</p>
            <h2>What changed.</h2>
            <div className={styles.resultsGrid}>
              {study.results.map((result) => (
                <div key={result.label} data-reveal-card>
                  <strong>{result.value}</strong>
                  <span>{result.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {study.testimonial && (
        <section className={`${styles.section} ${styles.quoteSection}`} data-reveal>
          <div className="services-page-container">
            <figure className={styles.quote}>
              <Quote size={34} aria-hidden="true" />
              <blockquote><p>{study.testimonial.quote}</p></blockquote>
              <figcaption>
                <strong>{study.testimonial.name}</strong>
                <span>{study.testimonial.company}</span>
              </figcaption>
            </figure>
          </div>
        </section>
      )}

      <section className={`${styles.section} section`} data-reveal>
        <div className="services-page-container">
          <Link className={styles.nextCard} href={getCaseStudyPath(next.slug)}>
            <div>
              <small>Next project</small>
              <h2>{next.client}</h2>
              <p>{next.category}</p>
            </div>
            <span>View case study <ArrowRight size={18} aria-hidden="true" /></span>
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
