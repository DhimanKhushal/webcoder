import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ImageIcon, Plus } from "lucide-react";
import { FeaturedProjects } from "@/components/portfolio/featured-projects";
import { PortfolioPreview } from "@/components/portfolio/portfolio-preview";
import { getPortfolioPath, portfolioAreas, portfolioEnquiry, type PortfolioCollection } from "@/lib/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Webcodder's portfolio of organic marketing, performance marketing and website development. Find the work that fits your next project.",
  alternates: { canonical: "/portfolio" },
};

function Collection({ collection, preview = false }: { collection: PortfolioCollection; preview?: boolean }) {
  return (
    <article className={styles.collectionCard}>
      {preview && (
        <div className={styles.placeholder} role="img" aria-label={`${collection.title} portfolio preview placeholder`}>
          <ImageIcon size={32} strokeWidth={1.2} aria-hidden="true" />
          <span>{collection.title} portfolio</span>
          <small>Creative preview</small>
        </div>
      )}
      <details className={styles.collection} name="portfolio-collection">
        <summary>
          <span>
            <h3>{collection.title}</h3>
            <span className={styles.collectionSummary}>{collection.summary}</span>
          </span>
          <Plus size={22} aria-hidden="true" />
        </summary>
        <div className={styles.collectionBody}>
          <p>{collection.description}</p>
          {!preview && (
            <div className={styles.campaignPlaceholder} role="img" aria-label={`${collection.title} campaign screenshot placeholder`}>
              <ImageIcon size={28} strokeWidth={1.2} aria-hidden="true" />
              <span>Campaign preview</span>
            </div>
          )}
          <ul>{collection.includes.map((item) => <li key={item}>{item}</li>)}</ul>
          <a href={portfolioEnquiry(collection.title)} className={styles.textLink}>
            Discuss {collection.title} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </details>
      <Link href={getPortfolioPath(collection.slug)} className={`${styles.textLink} ${styles.collectionLink}`}>
        View {collection.title} portfolio <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function PortfolioPage() {
  const [organic, performance, websites] = portfolioAreas;

  return (
    <div className={styles.page}>
      <div className={styles.frame}>
        <section className={styles.hero} aria-labelledby="portfolio-title">
          <div className={styles.heroCopy}>
            <h1 id="portfolio-title">Our work.<br />Your next move.</h1>
            <p>The Webcodder portfolio. Organic marketing, performance marketing and websites, brought into focus.</p>
            <a href="#organic-marketing" className={styles.primaryLink}>
              Explore the portfolio <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <PortfolioPreview />
          <nav className={styles.areaNav} aria-label="Explore the portfolio">
            {portfolioAreas.map((area) => (
              <a key={area.id} href={`#${area.id}`}>
                <span>{area.title}</span><ArrowDown size={20} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </section>

        <section id={organic.id} className={styles.organic} aria-labelledby="organic-title">
          <div className={styles.sectionIntro}>
            <h2 id="organic-title">{organic.title}</h2>
            <p>{organic.description}</p>
          </div>
          <div className={styles.organicCollections}>
            {organic.collections.map((collection) => <Collection key={collection.slug} collection={collection} preview />)}
          </div>
          <div className={styles.organicNote}>
            <p>One brand. Every touchpoint.</p>
            <p>Social content, graphic design and video editing live together in our SMO portfolio.</p>
          </div>
        </section>

        <section id={performance.id} className={styles.performance} aria-labelledby="performance-title">
          <div className={styles.performanceIntro}>
            <h2 id="performance-title">{performance.title}</h2>
            <p>{performance.description}</p>
            <a href={portfolioEnquiry("Performance marketing")} className={styles.textLink}>
              Find work for your brief <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.adCollections}>
            {performance.collections.map((collection) => <Collection key={collection.slug} collection={collection} />)}
          </div>
        </section>

        <section id={websites.id} className={styles.websites} aria-labelledby="websites-title">
          <div className={styles.sectionIntro}>
            <h2 id="websites-title">{websites.title}</h2>
            <div>
              <p>{websites.description}</p>
              <p className={styles.websiteScope}>WordPress &amp; custom-coded websites. Built around the business.</p>
              <Link href={getPortfolioPath("websites")} className={styles.textLink}>
                View website portfolio <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <FeaturedProjects />
          <div className={styles.websiteClose}>
            <p>Have a different industry in mind?</p>
            <a href={portfolioEnquiry("Website development for my industry")} className={styles.textLink}>
              Tell us what you need <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className={styles.contact} aria-labelledby="portfolio-contact-title">
          <div>
            <h2 id="portfolio-contact-title">Your next project.</h2>
            <p>Tell us what you have in mind. We&apos;ll help you find the right direction.</p>
          </div>
          <Link href="/contact" className={styles.contactLink}>
            Let&apos;s talk <ArrowUpRight size={24} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </div>
  );
}
