"use client";

import { tw } from "@/lib/tailwind";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  PenTool,
  Phone,
  Send,
  Server,
  type LucideIcon,
} from "lucide-react";
import { FormEvent, useState } from "react";

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["About Us", "/about"],
      ["Our Process", "/about"],
      ["Projects", "/projects"],
      ["Careers", "/contact"],
      ["Blog", "/"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Web Development", "/services"],
      ["UI/UX Design", "/services"],
      ["Digital Marketing", "/services"],
      ["SEO Services", "/services"],
      ["Social Media Marketing", "/services"],
      ["Google Ads", "/services"],
      ["Branding", "/services"],
      ["Content Marketing", "/services"],
    ],
  },
  {
    title: "Industries",
    links: [
      ["Healthcare", "/projects"],
      ["Education", "/projects"],
      ["Real Estate", "/projects"],
      ["E-Commerce", "/projects"],
      ["IT & SaaS", "/projects"],
      ["Hospitality", "/projects"],
      ["Finance", "/projects"],
      ["Startups", "/projects"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Case Studies", "/projects"],
      ["Blog & Insights", "/"],
      ["Guides", "/services"],
      ["FAQs", "/"],
      ["Privacy Policy", "/"],
      ["Terms & Conditions", "/"],
    ],
  },
] as const;

const technologies: Array<{
  name: string;
  icon: LucideIcon;
}> = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Layers3 },
  { name: "TypeScript", icon: Braces },
  { name: "Node.js", icon: Server },
  { name: "MongoDB", icon: Database },
  { name: "Tailwind CSS", icon: Boxes },
  { name: "Figma", icon: PenTool },
  { name: "AWS", icon: Cloud },
  { name: "Git", icon: GitBranch },
  { name: "Docker", icon: Boxes },
];

const contactItems = [
  {
    label: "opt.webcodder@gmail.com",
    helper: "Drop us an email",
    href: "mailto:opt.webcodder@gmail.com",
    icon: Mail,
  },
  {
    label: "+91-829-829-5419",
    helper: "Mon - Sat 10AM - 7PM",
    href: "tel:+918298295419",
    icon: Phone,
  },
  {
    label: "SCO 114–115, 2nd Floor, Sector 34-A, Chandigarh, Punjab 160022",
    helper: "Visit our office",
    href: "https://www.google.com/maps/search/?api=1&query=SCO+114-115+2nd+Floor+Sector+34-A+Chandigarh+Punjab+160022",
    icon: MapPin,
  },
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  function backToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className={tw("site-footer")}>
      <div className={tw("footer-orbit-decoration")} aria-hidden="true">
        <span />
      </div>

      <div className={tw("footer-container")}>
        <div className={tw("footer-main")}>
          <section className={tw("footer-brand")} aria-labelledby="footer-brand-title">
            <Image
              className={tw("footer-brand-logo")}
              src="/webcodder-logo.png"
              alt="Webcodder Digital Marketing Agency"
              width={2508}
              height={627}
            />
            <h2 id="footer-brand-title" className={tw("sr-only")}>
              Webcodder Digital Marketing Agency
            </h2>
            <p className={tw("footer-brand-description")}>
              We help brands grow digitally with creative strategies, powerful
              websites and result-driven marketing.
            </p>
            <span className={tw("footer-orange-rule")} aria-hidden="true" />

            <div className={tw("footer-contact-list")}>
              {contactItems.map(({ label, helper, href, icon: Icon }) => (
                <a
                  className={tw("footer-contact-item")}
                  href={href}
                  key={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className={tw("footer-contact-icon")}>
                    <Icon size={17} strokeWidth={1.8} />
                  </span>
                  <span>
                    <strong>{label}</strong>
                    <small>{helper}</small>
                  </span>
                </a>
              ))}
            </div>
          </section>

          <nav className={tw("footer-directory")} aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div className={tw("footer-link-group")} key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <aside className={tw("footer-aside")}>
            <div className={tw("footer-newsletter")}>
              <p className={tw("footer-column-title")}>Stay Updated</p>
              <p>
                Subscribe to get the latest insights, trends and offers
                straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe}>
                <label className={tw("sr-only")} htmlFor="footer-email">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" aria-label="Subscribe to newsletter">
                  <Send size={17} />
                </button>
              </form>
              <span className={tw("newsletter-status")} aria-live="polite">
                {subscribed ? "Thank you — you’re on the list." : ""}
              </span>
            </div>

            <div className={tw("footer-project-card")}>
              <span className={tw("footer-dot-pattern")} aria-hidden="true" />
              <small>Got a project in mind?</small>
              <h3>Let&apos;s build something amazing together.</h3>
              <Link href="/contact">
                Start a project <ArrowUpRight size={16} />
              </Link>
            </div>
          </aside>
        </div>

        <section className={tw("footer-tech-strip")} aria-labelledby="footer-tech-title">
          <div className={tw("footer-tech-copy")}>
            <h3 id="footer-tech-title">Technologies we work with</h3>
            <p>Modern tools. Scalable solutions.</p>
          </div>
          <div className={tw("footer-tech-list")}>
            {technologies.map(({ name, icon: Icon }) => (
              <span className={tw("footer-tech-badge")} key={name}>
                <Icon size={16} strokeWidth={1.7} />
                {name}
              </span>
            ))}
          </div>
        </section>

        <div className={tw("footer-social-row")}>
          <div>
            <div className={tw("footer-socials")} aria-label="Social media">
              <a href="#" aria-label="Instagram">
                <span>IG</span>
              </a>
              <a href="#" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="#" aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="#" aria-label="Behance" className={tw("behance-icon")}>
                Bē
              </a>
              <a href="#" aria-label="Dribbble">
                <span>Dr</span>
              </a>
            </div>
            <p>Let&apos;s connect and create something great</p>
          </div>
        </div>

        <div className={tw("footer-bottom")}>
          <span>© {new Date().getFullYear()} Webcodder. All rights reserved.</span>
          <span>Built with strategy, pixels &amp; clean code.</span>
          <div className={tw("footer-legal")}>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms &amp; Conditions</Link>
            <Link href="/">Sitemap</Link>
            <button type="button" onClick={backToTop} aria-label="Back to top">
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
