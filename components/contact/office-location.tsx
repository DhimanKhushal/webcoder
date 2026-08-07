"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
  type LucideIcon,
} from "lucide-react";
import styles from "./office-location.module.css";

const officeAddress = [
  "SCO 114-115, 2nd Floor,",
  "Sector 34-A,",
  "Chandigarh, Punjab 160022",
] as const;

const officeDetails: Array<{
  label: string;
  value: readonly string[];
  href?: string;
  icon: LucideIcon;
  ariaLabel?: string;
}> = [
  {
    label: "Phone",
    value: ["+91-829-829-5419"],
    href: "tel:+918298295419",
    icon: Phone,
    ariaLabel: "Call Webcodder at +91-829-829-5419",
  },
  {
    label: "Email",
    value: ["opt.webcodder@gmail.com"],
    href: "mailto:opt.webcodder@gmail.com",
    icon: Mail,
    ariaLabel: "Email Webcodder at opt.webcodder@gmail.com",
  },
  {
    label: "Office hours",
    value: ["Monday – Saturday", "9:30 AM – 6:30 PM"],
    icon: Clock3,
  },
];

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=SCO+114-115%2C+2nd+Floor%2C+Sector+34-A%2C+Chandigarh%2C+Punjab+160022";

const mapEmbedUrl =
  "https://www.google.com/maps?q=SCO+114-115%2C+2nd+Floor%2C+Sector+34-A%2C+Chandigarh%2C+Punjab+160022&z=16&output=embed";

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const detailsReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.25 },
  },
};

const detailItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function OfficeLocation() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="office-location-title">
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          variants={detailsReveal}
        >
          <motion.p className={styles.eyebrow} variants={reveal}>
            Our location
          </motion.p>
          <motion.div className={styles.headingRow} variants={reveal}>
            <h2 id="office-location-title">Visit Our Creative Workspace</h2>
            <p>
              Have a project in mind? Visit our Chandigarh office and let&apos;s
              discuss how we can build something meaningful together.
            </p>
          </motion.div>
        </motion.header>

        <div className={styles.locationCard}>
          <motion.article
            className={styles.infoPanel}
            initial={reduceMotion ? false : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            aria-labelledby="webcodder-office-title"
          >
            <div className={styles.officeIntro}>
              <span className={styles.officeMarker} aria-hidden="true">
                <MapPin size={18} strokeWidth={1.8} />
              </span>
              <div>
                <p className={styles.panelLabel}>Chandigarh · India</p>
                <h3 id="webcodder-office-title">Webcodder Office</h3>
                <address>
                  {officeAddress.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </div>
            </div>

            <motion.div
              className={styles.details}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.55 }}
              variants={detailsReveal}
            >
              {officeDetails.map(({ label, value, href, icon: Icon, ariaLabel }) => {
                const content = (
                  <>
                    <span className={styles.detailIcon} aria-hidden="true">
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                    <span className={styles.detailCopy}>
                      <small>{label}</small>
                      <strong>
                        {value.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </strong>
                    </span>
                  </>
                );

                return (
                  <motion.div className={styles.detailRow} variants={detailItem} key={label}>
                    {href ? (
                      <a href={href} aria-label={ariaLabel}>
                        {content}
                      </a>
                    ) : (
                      <div>{content}</div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>

            <div className={styles.actions}>
              <a
                className={styles.directionsButton}
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to the Webcodder office in Google Maps (opens in a new tab)"
              >
                <span>Get Directions</span>
                <ArrowUpRight size={19} strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                className={styles.callLink}
                href="tel:+918298295419"
                aria-label="Call Webcodder before visiting"
              >
                Call Before Visiting <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </motion.article>

          <motion.div
            className={styles.mapPanel}
            initial={reduceMotion ? false : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <iframe
              src={mapEmbedUrl}
              title="Map showing the Webcodder office in Sector 34-A, Chandigarh"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className={styles.mapFade} aria-hidden="true" />

            <a
              className={styles.mapBadge}
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Webcodder office location in Google Maps (opens in a new tab)"
            >
              <span className={styles.badgePin} aria-hidden="true">
                <i />
                <Navigation size={17} fill="currentColor" strokeWidth={1.5} />
              </span>
              <span>
                <strong>Webcodder</strong>
                <small>Sector 34-A, Chandigarh</small>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
