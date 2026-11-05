import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, getCaseStudyPath } from "@/lib/case-studies";
import { PortfolioPreview } from "./portfolio-preview";
import { WebsitePortfolioBrowser } from "./website-portfolio-browser";
import { PortfolioHero, PortfolioSection, CapabilityList, PortfolioProcess, PortfolioQuestions, PortfolioEnquiry } from "./detail-layout";
import styles from "./detail-layout.module.css";

export function WebsitePortfolio() {
  return (
    <div className={styles.page}>
      <PortfolioHero label="Website development" title={<>Websites for<br />your business.</>} intro="Design and development shaped around your customers. Explore real projects, compare WordPress and custom-coded builds, and find work in your industry."
        links={[{ href: "#website-projects", label: "Explore website work", description: "Real projects & niche search" }, { href: "#website-build-types", label: "Choose a build type", description: "WordPress or custom-coded" }, { href: "#website-process", label: "How we build", description: "From brief to launch" }]}
        visual={<PortfolioPreview />} />

      <PortfolioSection id="website-build-types" title="The right kind of build." intro="Start with what the business needs to do and how the website will be managed. We can shape the project around WordPress or a custom-coded approach.">
        <div className={styles.buildTypes}>
          <article data-reveal><h3>WordPress</h3><p>For teams that want to manage website content through a familiar editor, with a design and structure tailored to the business.</p><ul><li>Editable pages and content</li><li>Brand-led design and responsive layouts</li><li>Integrations agreed around the brief</li></ul></article>
          <article data-reveal><h3>Custom-coded</h3><p>For experiences that need more control over the interface, interactions or business workflows. The build and editing approach are agreed together.</p><ul><li>Tailored interfaces and interactions</li><li>Features shaped around a specific workflow</li><li>A technology choice suited to the project</li></ul></article>
        </div>
      </PortfolioSection>

      <PortfolioSection id="website-projects" tone="gray" title="Explore website work." intro="Browse the actual website projects below. Search by niche or project, or choose a build type. Platform labels are added only after the project stack has been confirmed.">
        <WebsitePortfolioBrowser showcase />
      </PortfolioSection>

      <PortfolioSection id="website-experience" tone="dark" title={<>From first visit<br />to enquiry.</>} intro="A website should help people understand the business and take a useful next step. These are the parts we consider together when shaping the experience.">
        <CapabilityList items={[
          { title: "Clear information", copy: "A sensible structure for services, products or information, with copy and navigation that help people find what they need." },
          { title: "A design that fits", copy: "A visual direction grounded in the brand, adapted for phones and larger screens with readable content and clear controls." },
          { title: "A useful next step", copy: "An enquiry, booking or other agreed action that makes sense at the point where a visitor is ready to continue." },
          { title: "Foundations for launch", copy: "Responsive checks, page metadata, performance considerations and the integrations agreed in the project scope." },
        ]} />
      </PortfolioSection>

      <PortfolioSection id="website-process" title="From a brief to a site." intro="A clear sequence gives you room to review the direction before it becomes the finished website.">
        <PortfolioProcess items={[
          { title: "Understand", copy: "Agree the audience, business goals, page requirements and the role of the website." },
          { title: "Structure & design", copy: "Map the content and journey, then develop the visual direction for key pages." },
          { title: "Build & connect", copy: "Develop the responsive website and connect the agreed forms, content and integrations." },
          { title: "Check & launch", copy: "Review the pages and interactions, resolve launch issues and agree the handover." },
        ]} />
      </PortfolioSection>

      <PortfolioSection id="website-industries" tone="gray" title={<>Different businesses.<br />Different journeys.</>} intro="The portfolio spans healthcare, agencies, consulting and luxury travel. Explore a relevant project, or use the niche search above to tell us what you are looking for.">
        <div className={styles.industryList}>{caseStudies.map((study) => <Link key={study.slug} href={getCaseStudyPath(study.slug)}><span><strong>{study.industry}</strong><span>{study.client}</span></span><ArrowUpRight size={23} aria-hidden="true" /></Link>)}</div>
        <a href="#website-projects" className={styles.textLink}>Search your niche <ArrowUpRight size={18} aria-hidden="true" /></a>
      </PortfolioSection>

      <PortfolioSection id="website-questions" title="Planning a website?" intro="A few answers to help you judge the examples and shape a useful website brief.">
        <PortfolioQuestions items={[
          { question: "Should we choose WordPress or a custom-coded website?", answer: "That depends on your content, editing needs, features and business workflow. We discuss those requirements before recommending a build approach." },
          { question: "Why do some build-type filters have no projects yet?", answer: "The website screenshots are real, but their platform labels are still being checked. A project is only included under WordPress or custom-coded once its stack has been verified." },
          { question: "What if there is no project in our industry?", answer: "Search for your niche in the project browser. If no verified example matches, it shows a contextual enquiry so we can discuss the pages, features and journey your industry needs." },
          { question: "Can our team edit the content afterwards?", answer: "Editing requirements are part of the brief. WordPress supports content management through its editor; for a custom-coded project, we agree the content source and editing workflow before development." },
        ]} />
      </PortfolioSection>
      <PortfolioEnquiry title={<>Have a website<br />in mind?</>} copy="Share your industry, the pages or features you need and how your team wants to manage the site." service="website development" related={["seo", "smo", "google-ads"]} />
    </div>
  );
}
