import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowUpRight, ImageIcon, Plus } from "lucide-react";
import { portfolioEnquiry, getPortfolioCollection, getPortfolioPath, type PortfolioCollection } from "@/lib/portfolio";
import { getCaseStudyPath, type CaseStudy } from "@/lib/case-studies";
import { ProjectArtwork } from "@/components/project-artwork";
import styles from "./detail-layout.module.css";

export type ContentItem = { title: string; copy: string };
export type PortfolioQuestion = { question: string; answer: string };

export function PortfolioHero({ label, title, intro, visual, links }: {
  label: string; title: ReactNode; intro: string; visual: ReactNode;
  links: { href: string; label: string; description: string }[];
}) {
  return (
    <section className={styles.hero} aria-labelledby="portfolio-detail-title">
      <div className={styles.frame}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/portfolio"><ArrowLeft size={16} aria-hidden="true" /> Portfolio</Link><span aria-hidden="true">/</span><span aria-current="page">{label}</span></nav>
        <div className={styles.heroGrid}>
          <div>
            <h1 id="portfolio-detail-title" data-hero>{title}</h1>
            <p className={styles.heroIntro} data-hero>{intro}</p>
            <a href={links[0].href} className={styles.primaryLink} data-hero>{links[0].label}<ArrowDown size={18} aria-hidden="true" /></a>
          </div>
          <div className={styles.heroVisual} data-hero>{visual}</div>
        </div>
        <nav className={styles.sectionNav} aria-label={`${label} page sections`}>
          {links.map((link) => <a key={link.href} href={link.href}><span><strong>{link.label}</strong><span>{link.description}</span></span><ArrowDown size={18} aria-hidden="true" /></a>)}
        </nav>
      </div>
    </section>
  );
}

export function PortfolioSection({ id, title, intro, tone = "light", children, className = "" }: {
  id: string; title: ReactNode; intro: string; tone?: "light" | "gray" | "dark"; children: ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`${styles.section} ${styles[tone]} ${className}`} aria-labelledby={`${id}-title`}>
      <div className={styles.frame}>
        <div className={styles.sectionHeading}><h2 id={`${id}-title`} data-reveal>{title}</h2><p data-reveal>{intro}</p></div>
        {children}
      </div>
    </section>
  );
}

export function CapabilityList({ items }: { items: readonly ContentItem[] }) {
  return <div className={styles.capabilities}>{items.map((item) => <article className={styles.capability} key={item.title} data-reveal><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>;
}

export function PortfolioProcess({ items }: { items: readonly ContentItem[] }) {
  return <ol className={styles.process}>{items.map((item) => <li key={item.title} data-reveal><h3>{item.title}</h3><p>{item.copy}</p></li>)}</ol>;
}

export function PortfolioQuestions({ items }: { items: readonly PortfolioQuestion[] }) {
  return <div className={styles.questions}>{items.map((item) => <details key={item.question}><summary><span>{item.question}</span><Plus size={22} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>;
}

export function PendingAsset({ title, note = "Approved artwork coming soon", portrait = false }: { title: string; note?: string; portrait?: boolean }) {
  return <div className={`${styles.pendingAsset} ${portrait ? styles.portraitAsset : ""}`} role="img" aria-label={`${title}. ${note}.`}><ImageIcon size={34} strokeWidth={1.2} aria-hidden="true" /><strong>{title}</strong><span>{note}</span></div>;
}

export function CaseStudyFeature({ study, note }: { study: CaseStudy; note?: string }) {
  return (
    <article className={styles.caseFeature}>
      <Link href={getCaseStudyPath(study.slug)} className={styles.caseImage} data-reveal><ProjectArtwork src={study.image} alt={`${study.client} website project`} label={study.client} sizes="(max-width: 700px) 90vw, 620px" /></Link>
      <div className={styles.caseCopy} data-reveal><h3>{study.client}</h3><p>{study.summary}</p>{note && <p className={styles.caseNote}>{note}</p>}<ul>{study.delivered.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul><Link href={getCaseStudyPath(study.slug)} className={styles.textLink}>View the project <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    </article>
  );
}

export function PortfolioEnquiry({ title, copy, service, related }: { title: ReactNode; copy: string; service: string; related: PortfolioCollection["slug"][] }) {
  return (
    <section className={`${styles.section} ${styles.dark}`} aria-labelledby="portfolio-enquiry-title">
      <div className={styles.frame}>
        <div className={styles.enquiryTop}><div data-reveal><h2 id="portfolio-enquiry-title">{title}</h2><p>{copy}</p></div><a href={portfolioEnquiry(service)} className={styles.primaryLink}>Discuss your project <ArrowUpRight size={20} aria-hidden="true" /></a></div>
        <div className={styles.related}><p>Explore related work</p><div>{related.map((slug) => { const collection = getPortfolioCollection(slug); return collection ? <Link key={slug} href={getPortfolioPath(slug)}>{collection.title}<ArrowUpRight size={17} aria-hidden="true" /></Link> : null; })}<Link href="/portfolio">All portfolios<ArrowUpRight size={17} aria-hidden="true" /></Link></div></div>
      </div>
    </section>
  );
}
