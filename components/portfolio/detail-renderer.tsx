import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ImageIcon, Search, Video, ChartNoAxesCombined } from "lucide-react";
import type { PortfolioCollection } from "@/lib/portfolio";
import { portfolioEnquiry } from "@/lib/portfolio";
import { caseStudies, getCaseStudyPath } from "@/lib/case-studies";
import { ProjectArtwork } from "@/components/project-artwork";
import { WebsitePortfolioBrowser } from "@/components/portfolio/website-portfolio-browser";
import { SeoServiceGrid } from "@/components/portfolio/seo-service-grid";
import { PaidAdsExperience } from "@/components/portfolio/meta-ads-experience";
import styles from "@/components/portfolio/portfolio.module.css";

const pageHeadings: Record<PortfolioCollection["slug"], string> = {
  smo: "Social media, design & video",
  seo: "Search visibility, built with intent.",
  "meta-ads": "Creative Ads. Smarter Campaigns. Stronger Brands.",
  "google-ads": "Google Ads. Relevant Searches. Better Campaigns.",
  "linkedin-ads": "LinkedIn Ads. Built for Professional Audiences.",
  websites: "Websites built around the business",
};

function DetailHeader({ collection }: { collection: PortfolioCollection }) {
  const metaAds = collection.slug === "meta-ads";

  return (
    <>
      <nav className={styles.detailBreadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">›</span>
        <Link href="/portfolio">Portfolio</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">{collection.title}</span>
      </nav>
      <header className={styles.detailHeader} data-hero={metaAds ? undefined : ""}>
        <p className={styles.detailEyebrow} data-hero={metaAds ? "" : undefined}>Webcodder portfolio / {collection.title}</p>
        <h1 data-hero={metaAds ? "" : undefined}>{pageHeadings[collection.slug]}</h1>
        <p className={styles.detailIntro} data-hero={metaAds ? "" : undefined}>{metaAds ? "Explore our Facebook and Instagram advertising creatives through an interactive campaign experience." : collection.description}</p>
        {!metaAds && <p className={styles.detailSummary}>{collection.summary}</p>}
      </header>
    </>
  );
}

function PendingArtwork({ title, note, icon = "image" }: { title: string; note: string; icon?: "image" | "video" | "search" }) {
  const Icon = icon === "video" ? Video : icon === "search" ? Search : ImageIcon;
  return (
    <div className={styles.detailPlaceholder} role="img" aria-label={`${title}. ${note}`}>
      <span className={styles.placeholderIcon}><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span>
      <strong>{title}</strong>
      <span>{note}</span>
      <small>Portfolio asset pending</small>
    </div>
  );
}

function CampaignDetail({ collection }: { collection: PortfolioCollection }) {
  const campaignTopics = [
    { title: "Campaign creative", note: "Campaign screenshot or artwork to be supplied.", icon: "image" as const },
    { title: "Audience & placement", note: "Campaign context to be supplied and verified.", icon: "image" as const },
    { title: "Reporting context", note: "Dates and verified reporting to be supplied.", icon: "search" as const },
  ];

  return (
    <>
      <section className={styles.detailSection} aria-labelledby="campaign-work-title" data-reveal>
        <div className={styles.detailSectionHeading}>
          <div>
            <p className={styles.detailEyebrow}>Campaign work</p>
            <h2 id="campaign-work-title">Campaigns, shown with their context.</h2>
          </div>
          <p>Campaign screenshots and verified reporting will appear here once supplied.</p>
        </div>
        <div className={styles.pendingGrid}>
          {campaignTopics.map((topic) => <PendingArtwork key={topic.title} {...topic} />)}
        </div>
      </section>

      <section className={styles.detailTopics} aria-labelledby="campaign-topics-title" data-reveal>
        <h2 id="campaign-topics-title">What this portfolio covers</h2>
        <ul>{collection.includes.map((topic) => <li key={topic}>{topic}</li>)}</ul>
      </section>
      <DetailEnquiry title={`Discuss ${collection.title}`} collection={collection.title} />
    </>
  );
}

function SmoDetail({ collection }: { collection: PortfolioCollection }) {
  const workTypes = [
    { title: "Social media content", note: "Social posts and campaign creatives will appear here when supplied.", icon: "image" as const },
    { title: "Graphic design", note: "Brand and promotional design examples are pending.", icon: "image" as const },
    { title: "Video editing", note: "Reels and short-form video examples are pending.", icon: "video" as const },
  ];

  return (
    <>
      <section className={styles.detailSection} aria-labelledby="smo-work-title" data-reveal>
        <div className={styles.detailSectionHeading}>
          <div>
            <p className={styles.detailEyebrow}>Organic social work</p>
            <h2 id="smo-work-title">One social presence, across formats.</h2>
          </div>
          <p>Social media, graphics and video editing belong together here. The creative files are pending from the team.</p>
        </div>
        <div className={styles.pendingGrid}>
          {workTypes.map((item) => <PendingArtwork key={item.title} {...item} />)}
        </div>
      </section>
      <section className={styles.detailTopics} aria-labelledby="smo-topics-title" data-reveal>
        <h2 id="smo-topics-title">Included in SMO</h2>
        <ul>{collection.includes.map((topic) => <li key={topic}>{topic}</li>)}</ul>
      </section>
      <DetailEnquiry title="Share your social brief" collection="SMO" />
    </>
  );
}

function SeoDetail() {
  const relevantStudies = caseStudies.filter((study) => study.services.includes("seo"));
  const process = [
    ["Understand", "Learn the business, audience, locations and the questions customers bring to search."],
    ["Audit", "Review current content, technical foundations and the search landscape before recommending work."],
    ["Prioritise", "Turn findings into a clear sequence of changes, tied to the pages and topics that matter."],
    ["Improve", "Implement and refine content, site structure and technical fixes with the team."],
    ["Measure", "Agree on a reporting period and source data, then review visibility and next opportunities."],
  ];

  return (
    <>
      <section className={styles.seoHero} aria-label="SEO portfolio introduction" data-reveal>
        <div className={styles.seoHeroCopy}>
          <p className={styles.detailEyebrow}>Organic discovery</p>
          <h2>Make it easier for the right people to find you.</h2>
          <p>Search engine optimisation connects useful pages to real questions. Our work starts with the site and the audience, then focuses on changes that can be explained and measured.</p>
          <a className={styles.seoHeroLink} href="#seo-services">Explore our SEO approach <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className={styles.seoHeroVisual}>
          <div className={styles.seoHeroImage}>
            <ProjectArtwork src="/projects/kingsland-digital.png" alt="Kingsland Digital website screenshot used as an SEO project example" label="Kingsland Digital" sizes="(max-width: 850px) 100vw, 48vw" />
          </div>
          <div className={styles.searchSignal} aria-hidden="true">
            <span><Search size={19} /></span>
            <div><small>Search experience</small><strong>Useful content. Clear structure.</strong></div>
            <ArrowUpRight size={18} />
          </div>
          <span className={styles.seoHeroCaption}>A real website project · SEO fundamentals included</span>
        </div>
      </section>

      <section className={styles.seoIntro} data-reveal>
        <p className={styles.detailEyebrow}>The role of SEO</p>
        <div>
          <h2>Strong foundations make every page work harder.</h2>
          <p>SEO is a connected practice: understand demand, make pages useful, keep the site accessible to search engines and earn trust over time. We shape the work around the business rather than chasing rankings without context.</p>
        </div>
      </section>

      <section id="seo-services" className={styles.seoServices} aria-labelledby="seo-services-title">
        <div className={styles.detailSectionHeading}>
          <div><p className={styles.detailEyebrow}>What we work on</p><h2 id="seo-services-title">Search, from the ground up.</h2></div>
          <p>Each area is assessed against the site and its goals. The right priorities depend on what the evidence shows.</p>
        </div>
        <SeoServiceGrid />
      </section>

      <section className={styles.seoProcess} aria-labelledby="seo-process-title" data-reveal>
        <div className={styles.seoProcessIntro}>
          <p className={styles.detailEyebrow}>A considered process</p>
          <h2 id="seo-process-title">Clear priorities. Steady improvement.</h2>
          <p>We make the work understandable, so your team knows what is changing, why it matters and how it will be reviewed.</p>
        </div>
        <ol className={styles.seoProcessList}>
          {process.map(([title, copy], index) => (
            <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
          ))}
        </ol>
      </section>

      <section className={styles.detailSection} aria-labelledby="seo-evidence-title" data-reveal>
        <div className={styles.detailSectionHeading}>
          <div>
            <p className={styles.detailEyebrow}>Search evidence</p>
            <h2 id="seo-evidence-title">Verified rankings and dates.</h2>
          </div>
          <p>Keyword names, locations, reporting dates and ranking evidence will be published once the team supplies verified records.</p>
        </div>
        <div className={styles.evidencePending}>
          <ChartNoAxesCombined size={24} strokeWidth={1.5} aria-hidden="true" />
          <div>
            <strong>Ranking evidence pending</strong>
            <p>No keyword positions, dates or performance figures are published without source data.</p>
          </div>
          <span>Awaiting verified data</span>
        </div>
      </section>

      <section className={styles.detailSection} aria-labelledby="seo-projects-title" data-reveal>
        <div className={styles.detailSectionHeading}>
          <div>
            <p className={styles.detailEyebrow}>Relevant website work</p>
            <h2 id="seo-projects-title">Projects with SEO in scope.</h2>
          </div>
          <p>These project records list SEO work in their documented service scope. No ranking results are implied.</p>
        </div>
        <div className={styles.seoProjects}>
          {relevantStudies.map((study) => (
            <article key={study.slug} className={styles.seoProject}>
              <Link href={getCaseStudyPath(study.slug)} className={styles.seoProjectImage}>
                <ProjectArtwork src={study.image} alt={`${study.client} website screenshot`} label={study.client} sizes="(max-width: 850px) 100vw, 43vw" />
              </Link>
              <div>
                <p className={styles.detailEyebrow}>{study.industry} / Website</p>
                <h3><Link href={getCaseStudyPath(study.slug)}>{study.client}</Link></h3>
                <p>{study.summary}</p>
                <p className={styles.evidenceStatus}>Ranking report and measurement dates: awaiting verified data.</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <DetailEnquiry title="Discuss search visibility" collection="SEO" />
    </>
  );
}

function WebsiteDetail() {
  return (
    <>
      <section className={styles.detailSection} aria-labelledby="website-overview-title" data-reveal>
        <div className={styles.detailSectionHeading}>
          <div>
            <p className={styles.detailEyebrow}>Website portfolio</p>
            <h2 id="website-overview-title">Browse by build type or niche.</h2>
          </div>
          <p>Explore the current website case studies, search by industry and choose a build type. Project platform labels appear only after verification.</p>
        </div>
        <WebsitePortfolioBrowser />
      </section>
      <DetailEnquiry title="Planning a website?" collection="website development" />
    </>
  );
}

function DetailEnquiry({ title, collection }: { title: string; collection: string }) {
  return (
    <section className={`${styles.detailEnquiry} ${collection === "SEO" ? styles.seoFinalCta : ""}`}>
      <div>
        <p className={styles.detailEyebrow}>Have a project in mind?</p>
        <h2>{title}</h2>
        <p>Tell us what you&apos;re looking for and we&apos;ll share relevant work and next steps.</p>
      </div>
      <Link href={portfolioEnquiry(collection)} className={styles.detailAction}>
        Discuss your project <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </section>
  );
}

export function PortfolioDetail({ collection }: { collection: PortfolioCollection }) {
  return (
    <div className={styles.detailPage}>
      <div className={styles.detailFrame}>
        <DetailHeader collection={collection} />
        {collection.slug === "smo" ? <SmoDetail collection={collection} />
          : collection.slug === "seo" ? <SeoDetail />
            : collection.slug === "websites" ? <WebsiteDetail />
              : collection.slug === "meta-ads" || collection.slug === "google-ads" || collection.slug === "linkedin-ads"
                ? <PaidAdsExperience key={collection.slug} platform={collection.slug} />
                : <CampaignDetail collection={collection} />}
        <Link href="/portfolio" className={styles.detailBackBottom}>
          <ArrowLeft size={16} aria-hidden="true" /> Return to the portfolio hub
        </Link>
      </div>
    </div>
  );
}
