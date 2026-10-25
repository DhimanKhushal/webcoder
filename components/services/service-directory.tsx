import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  getServicePath,
  getServicesByCategory,
  serviceCategories,
  type ServiceCategorySlug,
} from "@/lib/service-pages";
import styles from "./service-directory.module.css";

const categoryOrder: ServiceCategorySlug[] = [
  "ai-automation",
  "design-branding",
  "development",
  "marketing",
];

export function ServiceDirectory() {
  return (
    <section className="section" id="all-services" data-reveal>
      <div className="services-page-container">
        <div className={styles.head}>
          <div>
            <p className="eyebrow">Complete capability</p>
            <h2>Everything your digital presence needs, under one roof.</h2>
          </div>
          <p>
            Thirty services across four disciplines. Each one has its own page
            covering scope, process, tools and the questions clients ask first.
          </p>
        </div>
        <div className={styles.columns}>
          {categoryOrder.map((categorySlug) => {
            const category = serviceCategories[categorySlug];
            return (
              <div className={styles.column} key={categorySlug} data-reveal-card>
                <h3>{category.label}</h3>
                <p>{category.summary}</p>
                <ul>
                  {getServicesByCategory(categorySlug).map((service) => (
                    <li key={service.slug}>
                      <Link href={getServicePath(service.slug)}>
                        <span>{service.navLabel}</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
