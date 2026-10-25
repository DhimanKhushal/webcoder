"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, ChevronDown, Code2, Megaphone, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigationServices, type NavigationServiceGroup } from "@/lib/navigation-services";
import styles from "./services-menu.module.css";

const groupIcons = [Bot, Palette, Code2, Megaphone];

type ServicesMenuProps = {
  mobile?: boolean;
  active: boolean;
  onNavigate?: () => void;
};

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

export function ServicesMenu({ mobile = false, active, onNavigate }: ServicesMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = mobile ? "mobile-services-menu" : "desktop-services-menu";

  function cancelHoverClose() {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  useEffect(() => () => {
    if (closeTimerRef.current !== null) clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    if (!open) return;
    function closeOutside(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: WindowEventMap["keydown"]) {
      if (event.key !== "Escape") return;
      event.stopPropagation();
      if (closeTimerRef.current !== null) clearTimeout(closeTimerRef.current);
      setOpen(false);
      triggerRef.current?.focus();
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function closeAfterNavigation() {
    cancelHoverClose();
    setOpen(false);
    onNavigate?.();
  }

  return (
    <div
      ref={rootRef}
      className={mobile ? styles.mobile : styles.desktop}
      onPointerEnter={(event) => {
        if (mobile || event.pointerType !== "mouse") return;
        cancelHoverClose();
        setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (mobile || event.pointerType !== "mouse") return;
        cancelHoverClose();
        closeTimerRef.current = setTimeout(() => setOpen(false), 250);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          cancelHoverClose();
          setOpen(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={`${mobile ? "" : "nav-link"} ${styles.trigger} ${active ? "active" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          cancelHoverClose();
          setOpen((value) => !value);
        }}
      >
        Services <ChevronDown size={15} aria-hidden="true" className={open ? styles.rotated : ""} />
      </button>
      <div id={panelId} className={styles.panel} hidden={!open} data-lenis-prevent>
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
      </div>
    </div>
  );
}
