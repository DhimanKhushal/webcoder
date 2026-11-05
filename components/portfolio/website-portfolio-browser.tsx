"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { caseStudies, getCaseStudyPath } from "@/lib/case-studies";
import { portfolioEnquiry } from "@/lib/portfolio";
import { ProjectArtwork } from "@/components/project-artwork";
import styles from "./portfolio.module.css";

type TechnologyFilter = "all" | "wordpress" | "custom-coded";

const technologyOptions: { value: TechnologyFilter; label: string }[] = [
  { value: "all", label: "All websites" },
  { value: "wordpress", label: "WordPress" },
  { value: "custom-coded", label: "Custom-coded" },
];

export function WebsitePortfolioBrowser({ showcase = false }: { showcase?: boolean }) {
  const [technology, setTechnology] = useState<TechnologyFilter>("all");
  const [niche, setNiche] = useState("all");
  const [query, setQuery] = useState("");

  const niches = useMemo(
    () => Array.from(new Set(caseStudies.map((study) => study.industry))).sort((a, b) => a.localeCompare(b)),
    []
  );

  const visibleStudies = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return caseStudies.filter((study) => {
      const matchesTechnology = technology === "all" || study.websiteTechnology === technology;
      const matchesNiche = niche === "all" || study.industry === niche;
      const haystack = `${study.client} ${study.category} ${study.industry} ${study.summary}`.toLocaleLowerCase();
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
      return matchesTechnology && matchesNiche && matchesQuery;
    });
  }, [technology, niche, query]);

  const hasFilters = technology !== "all" || niche !== "all" || query.trim().length > 0;
  const requestedNiche = query.trim() || (niche !== "all" ? niche : "");
  const requestedTechnology = technologyOptions.find((item) => item.value === technology)?.label;
  const enquiryContext = [requestedNiche || "website development", technology !== "all" ? requestedTechnology : ""].filter(Boolean).join(" / ");
  const emptyMessage = requestedNiche
    ? `For ${requestedNiche}, we can plan a responsive website with relevant service or product pages, clear navigation and a focused enquiry or booking journey. We'll confirm your needs and platform fit before recommending the build.`
    : "Tell us the industry, audience and goal. We can outline website design and development options, then confirm platform fit before recommending a build.";

  return (
    <div className={`${styles.websiteBrowser} ${showcase ? styles.websiteBrowserShowcase : ""}`}>
      <div className={styles.websiteFilters}>
        <fieldset className={styles.filterGroup}>
          <legend>Build type</legend>
          <div className={styles.filterButtons} role="group" aria-label="Filter websites by build type">
            {technologyOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={technology === option.value ? styles.filterActive : undefined}
                aria-pressed={technology === option.value}
                onClick={() => setTechnology(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <p className={styles.filterNote}>Platform labels appear only after each project&apos;s stack is verified.</p>
        </fieldset>

        <label className={styles.nicheSearch}>
          <span>Search by niche or project</span>
          <span className={styles.searchInputWrap}>
            <Search size={17} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. healthcare"
              autoComplete="off"
            />
          </span>
        </label>
      </div>

      <fieldset className={styles.nicheFieldset}>
        <legend>Browse by niche</legend>
        <div className={styles.nicheButtons} role="group" aria-label="Filter websites by industry niche">
          <button type="button" className={niche === "all" ? styles.filterActive : undefined} aria-pressed={niche === "all"} onClick={() => setNiche("all")}>
            All niches
          </button>
          {niches.map((item) => (
            <button key={item} type="button" className={niche === item ? styles.filterActive : undefined} aria-pressed={niche === item} onClick={() => setNiche(item)}>
              {item}
            </button>
          ))}
        </div>
      </fieldset>

      <p className={styles.resultCount} aria-live="polite">
        {visibleStudies.length === 1 ? "1 website project" : `${visibleStudies.length} website projects`}
        {hasFilters ? " match these filters." : " in the portfolio."}
      </p>
      {hasFilters && <button className={styles.resetFilters} type="button" onClick={() => { setTechnology("all"); setNiche("all"); setQuery(""); }}>Reset filters</button>}

      {visibleStudies.length > 0 ? (
        <div className={styles.projectGrid}>
          {visibleStudies.map((study) => (
            <Link key={study.slug} href={getCaseStudyPath(study.slug)} className={styles.project}>
              <div className={styles.projectImage}>
                <ProjectArtwork
                  src={study.image}
                  alt={`${study.client} website project screenshot`}
                  label={study.client}
                  sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1248px) 46vw, 564px"
                />
              </div>
              <div className={styles.projectCaption}>
                <div>
                  <h3>{study.client}</h3>
                  <p>{study.industry}</p>
                  <span className={styles.stackStatus}>
                    {study.websiteTechnology === "wordpress" ? "WordPress" : study.websiteTechnology === "custom-coded" ? "Custom-coded" : "Build type to be confirmed"}
                  </span>
                </div>
                <span className={styles.projectArrow} aria-hidden="true"><ArrowUpRight size={20} /></span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <section className={styles.nicheEmptyState} aria-labelledby="niche-empty-title">
          <h3 id="niche-empty-title">Let&apos;s shape your website.</h3>
          <p>No verified {requestedNiche || requestedTechnology?.toLowerCase()} project matches these filters yet.</p>
          <p>{emptyMessage}</p>
          <Link className={styles.detailAction} href={portfolioEnquiry(enquiryContext)}>
            Ask about this niche <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </section>
      )}
    </div>
  );
}
