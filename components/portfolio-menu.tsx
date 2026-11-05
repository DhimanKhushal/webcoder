"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPortfolioPath, portfolioAreas, portfolioCollections } from "@/lib/portfolio";
import { NavigationDropdown, type DropdownStateProps } from "./navigation-dropdown";
import shared from "./services-menu.module.css";
import styles from "./portfolio-menu.module.css";

const groups = portfolioAreas.map((area) => ({
  title: area.title,
  collections: area.id === "website-development"
    ? portfolioCollections.filter((collection) => collection.slug === "websites")
    : area.collections,
}));

export function PortfolioMenu({ pathname, ...props }: DropdownStateProps & { pathname: string }) {
  return (
    <NavigationDropdown {...props} label="Portfolio" id="portfolio" panelClassName={`${styles.panel} ${props.mobile ? styles.mobilePanel : ""}`}>
      {(close) => (
        <>
          <div className={shared.intro}>
            <span className={styles.introLabel}>Find the work you want to see</span>
            <Link href="/portfolio" onClick={close} aria-current={pathname === "/portfolio" ? "page" : undefined}>All portfolios <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className={styles.groups}>
            {groups.map((group) => (
              <section key={group.title} className={styles.group} aria-label={`${group.title} portfolios`}>
                <h2>{group.title}</h2>
                <ul>
                  {group.collections.map((collection) => (
                    <li key={collection.slug}>
                      <Link className={styles.entry} href={getPortfolioPath(collection.slug)} onClick={close} aria-current={pathname === getPortfolioPath(collection.slug) ? "page" : undefined}>
                        <span><strong>{collection.slug === "smo" ? "SMO · Social media" : collection.title}</strong><span>{collection.summary}</span></span>
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className={shared.footer}>
            <p>Have a project in mind? Tell us what you need.</p>
            <Link href="/contact" onClick={close}>Discuss your project <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </>
      )}
    </NavigationDropdown>
  );
}
