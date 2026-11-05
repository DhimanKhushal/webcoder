import { caseStudies } from "@/lib/case-studies";
import { ProjectArtwork } from "@/components/project-artwork";
import { PortfolioHero, PortfolioSection, CapabilityList, PortfolioProcess, PortfolioQuestions, PortfolioEnquiry, PendingAsset, CaseStudyFeature } from "./detail-layout";
import styles from "./detail-layout.module.css";

const scope = [
  { title: "Keyword research", copy: "Understand the words customers use, the questions behind them and the pages that should answer them. Prioritise topics that fit the business." },
  { title: "On-page SEO", copy: "Make headings, page copy, titles and internal links work together. Give every important page a clear purpose and a useful answer." },
  { title: "Technical SEO", copy: "Review crawl access, indexing, site structure, mobile behaviour and page speed. Resolve the issues that stop useful pages from being discovered." },
  { title: "Local visibility", copy: "Connect service and location pages with consistent business information, so nearby customers can understand what you offer and where you operate." },
  { title: "Authority & relevance", copy: "Build a plan for relevant mentions and useful resources. Keep the focus on context and credibility rather than a volume of unrelated links." },
];

export function SeoPortfolio() {
  const study = caseStudies.find((item) => item.services.includes("seo"))!;
  return (
    <div className={styles.page}>
      <PortfolioHero label="SEO" title={<>SEO with<br />clear intent.</>} intro="Search engine optimisation, explained through useful pages, technical foundations and relevant keywords. Explore our approach and the website work behind it."
        links={[{ href: "#seo-work", label: "Explore SEO work", description: "A relevant website project" }, { href: "#seo-evidence", label: "Keywords & rankings", description: "Reporting with proper context" }, { href: "#seo-scope", label: "What we work on", description: "Content, technical & local SEO" }]}
        visual={<><div className={styles.heroImage}><ProjectArtwork src={study.image} alt={`${study.client} website with SEO in its documented scope`} label={study.client} sizes="(max-width: 700px) 90vw, 560px" /></div><p className={styles.heroCaption}>{study.client} · Website project with SEO in scope</p></>} />

      <PortfolioSection id="seo-overview" title={<>Help people<br />find the right page.</>} intro="SEO connects a real customer question with a useful answer. The work brings together what people search for, what a website says and how easily it can be found.">
        <CapabilityList items={[
          { title: "Understand search demand", copy: "Find relevant themes and customer questions before deciding what to write or which pages to improve." },
          { title: "Make the website useful", copy: "Organise information clearly, remove friction and help visitors move from an answer to the next step." },
          { title: "Review progress in context", copy: "Look at visibility, relevant traffic and enquiries over an agreed reporting period, with the source data alongside the story." },
        ]} />
      </PortfolioSection>

      <PortfolioSection id="seo-work" tone="gray" title="SEO in the website." intro="A real project from our website portfolio. SEO is listed in its service scope; ranking screenshots and measured outcomes are still awaiting verified records.">
        <CaseStudyFeature study={study} note="This is a website example, not a published ranking result." />
      </PortfolioSection>

      <PortfolioSection id="seo-evidence" tone="dark" title={<>Keywords.<br />Context. Progress.</>} intro="A ranking is useful when you know the search term, location and date behind it. This area will show the evidence alongside the work once the team supplies approved reports.">
        <div className={styles.assetPair}><PendingAsset title="Keyword & ranking report" note="Verified search terms, positions and dates pending" /><PendingAsset title="Search performance" note="Approved reporting screenshots pending" /></div>
        <dl className={styles.evidenceNotes}><div><dt>What was measured</dt><dd>The query, relevant page, location and device where applicable.</dd></div><div><dt>When it was measured</dt><dd>The reporting period and comparison dates, so changes can be understood.</dd></div><div><dt>What it means</dt><dd>The connection to useful visits and enquiries, with limitations explained.</dd></div></dl>
      </PortfolioSection>

      <PortfolioSection id="seo-scope" title="The work behind search." intro="Every site needs a different set of priorities. We assess these areas together and explain which changes matter for the business."><CapabilityList items={scope} /></PortfolioSection>

      <PortfolioSection id="seo-process" tone="gray" title="A clear way forward." intro="The aim is to leave you knowing what is being changed, why it matters and how the next decision will be made.">
        <PortfolioProcess items={[
          { title: "Understand", copy: "Discuss the business, customers, locations and services that matter most." },
          { title: "Audit & prioritise", copy: "Review the website and search landscape, then agree a practical order of work." },
          { title: "Improve", copy: "Refine content, structure and technical foundations against those priorities." },
          { title: "Review & refine", copy: "Read the evidence together and use it to decide what to improve next." },
        ]} />
      </PortfolioSection>

      <PortfolioSection id="seo-questions" title="Questions about SEO." intro="A few things to know before looking at a report or starting a search project.">
        <PortfolioQuestions items={[
          { question: "Can you show keyword rankings and results?", answer: "The reporting area is ready for them. Keyword positions, dates and outcome figures will be added once the team provides verified source reports. The website example above does not imply a ranking outcome." },
          { question: "Do you work on existing websites?", answer: "Yes. We can start with an existing site, review its structure and content, and recommend an improvement plan. A rebuild is considered only when it fits the requirements." },
          { question: "Is local SEO part of the work?", answer: "It can be. For businesses serving particular locations, we look at location content, relevant services and consistent business details as part of the scope." },
          { question: "How do you decide what to improve first?", answer: "We combine the business priorities with the audit findings and search demand. The proposed work should explain the problem, the page or area affected and what will be reviewed afterwards." },
        ]} />
      </PortfolioSection>
      <PortfolioEnquiry title={<>Let’s talk<br />search visibility.</>} copy="Share your website, industry and the services or locations you want people to find." service="SEO" related={["websites", "smo"]} />
    </div>
  );
}
