"use client";

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
      ["Our Process", "/about#how-we-work"],
      ["All Services", "/services"],
      ["Portfolio", "/portfolio"],
      ["Projects", "/projects"],
      ["Contact Us", "/contact"],
    ],
  },
  {
    title: "AI & Development",
    links: [
      ["AI Automation", "/services/ai-automation"],
      ["AI Agents & Chatbots", "/services/ai-agents-chatbots"],
      ["Workflow Automation", "/services/workflow-automation"],
      ["Web Development", "/services/web-development"],
      ["App Development", "/services/app-development"],
      ["eCommerce Development", "/services/ecommerce-development"],
      ["Software Development", "/services/software-development"],
    ],
  },
  {
    title: "Design & Branding",
    links: [
      ["Web Designing", "/services/web-designing"],
      ["UI/UX Designing", "/services/ui-ux-designing"],
      ["Brand Kit", "/services/brand-kit"],
      ["Logo Design", "/services/logo-design"],
      ["Brochure Design", "/services/brochure-design"],
      ["Video Editing", "/services/video-editing"],
      ["Content Creation", "/services/content-creation"],
    ],
  },
  {
    title: "Marketing",
    links: [
      ["SEO", "/services/seo"],
      ["Local Business SEO", "/services/local-business-seo"],
      ["Social Media Marketing", "/services/social-media-marketing"],
      ["Google Ads", "/services/google-ads"],
      ["Meta Ads", "/services/meta-ads"],
      ["Content Marketing", "/services/content-marketing"],
      ["Marketing Automation", "/services/marketing-automation"],
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
    <footer className="site-footer">
      <div className="footer-orbit-decoration" aria-hidden="true">
        <span />
      </div>

      <div className="footer-container">
        <div className="footer-main">
          <section className="footer-brand" aria-labelledby="footer-brand-title">
            <Image
              className="footer-brand-logo"
              src="/webcodder-logo.png"
              unoptimized
              alt="Webcodder"
              width={1000}
              height={250}
            />
            <h2 id="footer-brand-title" className="sr-only">
              Webcodder, AI &amp; digital agency
            </h2>
            <p className="footer-brand-description">
              AI &amp; digital agency in Chandigarh. Websites, chatbots and
              automation that save your team hours and win more customers.
            </p>
            <span className="footer-orange-rule" aria-hidden="true" />

            <div className="footer-contact-list">
              {contactItems.map(({ label, helper, href, icon: Icon }) => (
                <a
                  className="footer-contact-item"
                  href={href}
                  key={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="footer-contact-icon">
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

          <nav className="footer-directory" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div className="footer-link-group" key={group.title}>
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

          <aside className="footer-aside">
            <div className="footer-newsletter">
              <p className="footer-column-title">Stay Updated</p>
              <p>
                Subscribe to get the latest insights, trends and offers
                straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe}>
                <label className="sr-only" htmlFor="footer-email">
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
              <span className="newsletter-status" aria-live="polite">
                {subscribed ? "Thank you — you’re on the list." : ""}
              </span>
            </div>

            <div className="footer-project-card">
              <span className="footer-dot-pattern" aria-hidden="true" />
              <small>Got a project in mind?</small>
              <h3>Let&apos;s build something amazing together.</h3>
              <Link href="/contact">
                Start a project <ArrowUpRight size={16} />
              </Link>
            </div>
          </aside>
        </div>

        <section className="footer-tech-strip" aria-labelledby="footer-tech-title">
          <div className="footer-tech-copy">
            <h3 id="footer-tech-title">Technologies we work with</h3>
            <p>Modern tools. Scalable solutions.</p>
          </div>
          <div className="footer-tech-list">
            {technologies.map(({ name, icon: Icon }) => (
              <span className="footer-tech-badge" key={name}>
                <Icon size={16} strokeWidth={1.7} />
                {name}
              </span>
            ))}
          </div>
        </section>

        <div className="footer-social-row">
          <div>
            <div className="footer-socials" aria-label="Social media">
              <a href="#" aria-label="Instagram">
                <span>IG</span>
              </a>
              <a href="#" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="#" aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="#" aria-label="Behance" className="behance-icon">
                Bē
              </a>
              <a href="#" aria-label="Dribbble">
                <span>Dr</span>
              </a>
            </div>
            <p>Let&apos;s connect and create something great</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Webcodder. All rights reserved.</span>
          <span>Built with strategy, pixels &amp; clean code.</span>
          <div className="footer-legal">
            <Link href="/terms">Terms &amp; Conditions</Link>
            <button type="button" onClick={backToTop} aria-label="Back to top">
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
