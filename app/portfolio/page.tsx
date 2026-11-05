import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ImageIcon, Play, Search } from "lucide-react";
import { FeaturedProjects } from "@/components/portfolio/featured-projects";
import { PortfolioPreview } from "@/components/portfolio/portfolio-preview";
import { getPortfolioPath, portfolioAreas, portfolioEnquiry, type PortfolioCollection } from "@/lib/portfolio";
import styles from "@/components/portfolio/portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Webcodder's portfolio of organic marketing, performance marketing and website development. Find the work that fits your next project.",
  alternates: { canonical: "/portfolio" },
};

function OrganicCollection({ collection }: { collection: PortfolioCollection }) {
  const social = collection.slug === "smo";

  return (
    <article className={`${styles.organicFeature} ${social ? "" : styles.searchFeature}`}>
      <div className={styles.organicFeatureCopy} data-reveal>
        <h3>{social ? "Social, design & video." : "Get found in search."}</h3>
        <p>{collection.description}</p>
        <ul>{collection.includes.map((item) => <li key={item}>{item}</li>)}</ul>
        <Link href={getPortfolioPath(collection.slug)} className={styles.textLink}>
          Explore {collection.title} portfolio <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
      {social ? (
        <div className={styles.socialStage} aria-label="Social media portfolio previews" data-reveal>
          <div className={styles.creativeSlot}>
            <ImageIcon size={32} strokeWidth={1.2} aria-hidden="true" />
            <span>Brand creatives<small>Preview coming soon</small></span>
          </div>
          <div className={styles.videoSlot}>
            <Play size={30} strokeWidth={1.2} aria-hidden="true" />
            <span>Reels &amp; video<small>Preview coming soon</small></span>
          </div>
        </div>
      ) : (
        <div className={styles.searchStage} data-reveal>
          <span><Search size={21} aria-hidden="true" /> Keyword &amp; ranking reports</span>
          <div><ImageIcon size={38} strokeWidth={1.1} aria-hidden="true" /><p>Ranking screenshots coming soon</p></div>
          <p>Space for the search story, from keyword focus to ranking progress.</p>
        </div>
      )}
    </article>
  );
}

export default function PortfolioPage() {
  const [organic, performance, websites] = portfolioAreas;
  const campaignSummaries: Partial<Record<PortfolioCollection["slug"], string>> = {
    "meta-ads": "Facebook & Instagram advertising",
    "google-ads": "Google search & display advertising",
    "linkedin-ads": "Advertising for business audiences on LinkedIn",
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="portfolio-title">
        <div className={styles.heroFrame}>
          <div className={styles.heroTop}>
            <div className={styles.heroCopy}>
              <h1 id="portfolio-title">The Webcodder<br />portfolio.</h1>
              <p>Websites, search, social and paid campaigns. Explore our work by the service your business needs.</p>
              <a href="#portfolio-services" className={styles.primaryLink}>
                Find your portfolio <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
            <PortfolioPreview />
          </div>
          <nav id="portfolio-services" className={styles.serviceDirectory} aria-label="Portfolio by service">
            <div className={styles.serviceGroup}>
              <h2><a href={`#${organic.id}`}>{organic.title}<ArrowDown size={18} aria-hidden="true" /></a></h2>
              <Link href={getPortfolioPath("smo")} className={styles.serviceLink}>
                <span>SMO &amp; social media<span>Graphic design &amp; video editing</span></span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
              <Link href={getPortfolioPath("seo")} className={styles.serviceLink}>
                <span>SEO<span>Search visibility &amp; keyword strategy</span></span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.serviceGroup}>
              <h2><a href={`#${performance.id}`}>{performance.title}<ArrowDown size={18} aria-hidden="true" /></a></h2>
              {performance.collections.map((collection) => (
                <Link key={collection.slug} href={getPortfolioPath(collection.slug)} className={styles.serviceLink}>
                  <span>{collection.title}</span><ArrowUpRight size={19} aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className={styles.serviceGroup}>
              <h2><a href={`#${websites.id}`}>{websites.title}<ArrowDown size={18} aria-hidden="true" /></a></h2>
              <Link href={getPortfolioPath("websites")} className={styles.serviceLink}>
                <span>Website design &amp; development<span>WordPress &amp; custom-coded websites</span></span>
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
              <p>Find a project in your industry, or tell us what you have in mind.</p>
            </div>
          </nav>
        </div>
      </section>

      <section id={organic.id} className={styles.organic} aria-labelledby="organic-title">
        <div className={styles.frame}>
          <div className={styles.sectionIntro}>
            <h2 id="organic-title" data-reveal>{organic.title}</h2>
            <p data-reveal>Build a recognisable brand. Be there when people search. Explore the creative and search sides of organic marketing.</p>
          </div>
          <div className={styles.organicFeatures}>
            {organic.collections.map((collection) => <OrganicCollection key={collection.slug} collection={collection} />)}
          </div>
        </div>
      </section>

      <section id={performance.id} className={styles.performance} aria-labelledby="performance-title">
        <div className={styles.frame}>
          <div className={styles.performanceIntro}>
            <h2 id="performance-title" data-reveal>Performance<br />marketing</h2>
            <div data-reveal>
              <p>Explore our advertising work on Facebook, Instagram, Google and LinkedIn. Choose a platform to see its portfolio.</p>
              <a href={portfolioEnquiry("Performance marketing")} className={styles.textLink}>
                Discuss your campaign <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={styles.campaignDirectory}>
            {performance.collections.map((collection) => (
              <Link key={collection.slug} href={getPortfolioPath(collection.slug)} className={styles.campaignRow} data-reveal>
                <h3>{collection.title}</h3>
                <div><p>{campaignSummaries[collection.slug]}</p><span>{collection.includes.slice(0, 2).join(" · ")}</span></div>
                <span className={styles.campaignAction}><span>View portfolio</span><ArrowUpRight size={26} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
          <p className={styles.campaignNote}>Campaign previews and reporting will be added as the team shares approved work.</p>
        </div>
      </section>

      <section id={websites.id} className={styles.websites} aria-labelledby="websites-title">
        <div className={styles.frame}>
          <div className={styles.websiteIntro}>
            <div data-reveal>
              <h2 id="websites-title">Website<br />development</h2>
              <p>WordPress &amp; custom-coded websites.</p>
            </div>
            <div data-reveal>
              <p>{websites.description}</p>
              <Link href={getPortfolioPath("websites")} className={styles.textLink}>
                Explore all website work <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <FeaturedProjects />
          <div className={styles.websiteClose} data-reveal>
            <div><h3>Looking for your industry?</h3><p>Browse by niche to find relevant work, or start a conversation about your brief.</p></div>
            <Link href={getPortfolioPath("websites")} className={styles.textLink}>
              Find your industry <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="portfolio-contact-title">
        <div className={styles.frame}>
          <div data-reveal>
            <h2 id="portfolio-contact-title">Your next project.</h2>
            <p>Tell us what you have in mind. We&apos;ll help you find the right direction.</p>
          </div>
          <Link href="/contact" className={styles.contactLink}>
            Let&apos;s talk <ArrowUpRight size={24} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
