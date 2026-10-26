import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, Code2, Megaphone, Palette } from "lucide-react";
import {
  getServicePath,
  getServicesByCategory,
  serviceCategories,
  type ServiceCategorySlug,
} from "@/lib/service-pages";
import styles from "./home-services.module.css";

/** Categories in nav order, with the service each card links through to. */
const categories: { slug: ServiceCategorySlug; icon: typeof Bot; entry: string }[] = [
  { slug: "ai-automation", icon: Bot, entry: "ai-automation" },
  { slug: "design-branding", icon: Palette, entry: "web-designing" },
  { slug: "development", icon: Code2, entry: "web-development" },
  { slug: "marketing", icon: Megaphone, entry: "seo" },
];

export function HomeServices() {
  return (
    <section className="section" style={{ paddingTop: 0 }} data-home-section>
      <div className="container">
        <div className={styles.head}>
          <div>
            <p className="eyebrow" data-reveal>What we do</p>
            <h2 className="section-title" data-reveal>AI, design, development and marketing.</h2>
          </div>
          <Link className={styles.allLink} href="/services" data-reveal>
            All services <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.grid}>
          {categories.map(({ slug, icon: Icon, entry }, index) => {
            const category = serviceCategories[slug];
            const services = getServicesByCategory(slug);
            return (
              <article className={styles.card} key={slug} data-reveal-card>
                <div className={styles.cardHead}>
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.icon}><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></span>
                </div>
                <h3>{category.label}</h3>
                <p>{category.summary}</p>
                <ul className={styles.list}>
                  {services.slice(0, 4).map((service, serviceIndex) => (
                    <li key={service.slug} className={serviceIndex >= 2 ? styles.desktopOnly : undefined}>
                      <Link href={getServicePath(service.slug)}>{service.navLabel}</Link>
                    </li>
                  ))}
                </ul>
                <Link className={styles.cardLink} href={getServicePath(entry)}>
                  Explore {category.label} <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
