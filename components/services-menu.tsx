"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, ChevronDown, Code2, Megaphone, Palette } from "lucide-react";
import { NavigationDropdown, type DropdownStateProps } from "./navigation-dropdown";
import { navigationServices, type NavigationServiceGroup } from "@/lib/navigation-services";
import styles from "./services-menu.module.css";

const groupIcons = [Bot, Palette, Code2, Megaphone];

type ServicesMenuProps = DropdownStateProps;

function ServiceLinks({ services, onNavigate }: {
  services: NavigationServiceGroup["services"];
  onNavigate: () => void;
}) {
  return (
    <ul className={styles.list}>
      {services.map(({ label, href, badge }) => (
        <li key={label}>
          <Link href={href} onClick={onNavigate}>
            <span>{label}</span>
            {badge ? <em className={styles.badge}>{badge}</em> : null}
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ServicesMenu({ mobile = false, active, open, onOpenChange, onNavigate }: ServicesMenuProps) {
  return (
    <NavigationDropdown label="Services" id="services" mobile={mobile} active={active} open={open} onOpenChange={onOpenChange} onNavigate={onNavigate}>
      {(closeAfterNavigation) => (
        <>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>What we do</span>
            <Link href="/services" onClick={closeAfterNavigation}>All services <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
          {mobile ? (
            <div className={styles.mobileGroups}>
              {navigationServices.map((group, index) => {
                const Icon = groupIcons[index];
                return (
                  <details className={styles.group} key={group.stage}>
                    <summary className={styles.mobileHeading}>
                      <span className={styles.icon}><Icon size={16} aria-hidden="true" /></span>
                      <span>{group.title}</span>
                      <ChevronDown size={15} aria-hidden="true" />
                    </summary>
                    <p className={styles.mobileSummary}>{group.summary}</p>
                    <ServiceLinks services={group.services} onNavigate={closeAfterNavigation} />
                  </details>
                );
              })}
            </div>
          ) : (
            <div className={styles.columns}>
              {navigationServices.map((group, index) => {
                const Icon = groupIcons[index];
                return (
                  <section className={styles.column} key={group.stage}>
                    <header className={styles.columnHead}>
                      <span className={styles.icon}><Icon size={17} aria-hidden="true" /></span>
                      <div>
                        <h2>{group.title}</h2>
                        <p>{group.summary}</p>
                      </div>
                    </header>
                    <ServiceLinks services={group.services} onNavigate={closeAfterNavigation} />
                    <Link className={styles.explore} href={group.href} onClick={closeAfterNavigation}>
                      {group.cta}<ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </section>
                );
              })}
            </div>
          )}
          <div className={styles.footer}>
            <p>Not sure where to start? We&rsquo;ll map it out with you.</p>
            <Link href="/contact" onClick={closeAfterNavigation}>Let&rsquo;s build something <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </>
      )}
    </NavigationDropdown>
  );
}
