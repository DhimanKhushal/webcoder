import { paidPortfolios, type PaidPlatform } from "@/lib/paid-portfolios";
import { PaidAdsExperience } from "./meta-ads-experience";
import { PortfolioHero, PortfolioSection, CapabilityList, PortfolioProcess, PortfolioQuestions, PortfolioEnquiry, PendingAsset } from "./detail-layout";
import styles from "./detail-layout.module.css";

export function PaidPortfolio({ platform }: { platform: PaidPlatform }) {
  const content = paidPortfolios[platform];
  return (
    <div className={styles.page}>
      <PortfolioHero label={content.name} title={<>{content.name}<br />portfolio.</>} intro={content.intro}
        links={[{ href: `#${platform}-formats`, label: "Explore ad formats", description: "Browse the creative placements" }, { href: `#${platform}-work`, label: "Campaign work", description: "Creative with its context" }, { href: `#${platform}-process`, label: "How we work", description: "From brief to review" }]}
        visual={<div className={styles.heroAssetPair}><PendingAsset title={content.previewLabel} note="Approved campaign artwork pending" /><PendingAsset title="Creative in context" note="Placement preview coming soon" portrait /></div>} />

      <PortfolioSection id={`${platform}-overview`} title={content.overviewTitle} intro={content.overviewIntro}><CapabilityList items={content.services} /></PortfolioSection>

      <PortfolioSection id={`${platform}-formats`} tone="gray" title="Explore the formats." intro={content.formatsIntro}>
        <div data-ui><PaidAdsExperience platform={platform} embedded /></div>
      </PortfolioSection>

      <PortfolioSection id={`${platform}-work`} tone="dark" title="Campaign work." intro={content.workIntro}>
        <div className={styles.assetPair}><PendingAsset title="Campaign creative" note="Client screenshots and approved artwork pending" /><PendingAsset title="Reporting snapshot" note="Source reports and measurement dates pending" /></div>
        <dl className={styles.evidenceNotes}><div><dt>The business brief</dt><dd>Who the campaign was for, the offer and the action it was intended to support.</dd></div><div><dt>The creative &amp; placement</dt><dd>The message and artwork as they appeared in the selected format.</dd></div><div><dt>The reporting period</dt><dd>Approved source records, dates and context alongside any outcome figures.</dd></div></dl>
      </PortfolioSection>

      <PortfolioSection id={`${platform}-journey`} title={content.journeyTitle} intro={content.journeyIntro}><CapabilityList items={content.journey} /></PortfolioSection>

      <PortfolioSection id={`${platform}-process`} tone="gray" title="From brief to campaign." intro={`A practical view of how a ${content.name} brief becomes a campaign, with clear decisions and a review of the evidence.`}><PortfolioProcess items={content.process} /></PortfolioSection>

      <PortfolioSection id={`${platform}-questions`} title="Before we begin." intro={`Answers to common questions about the ${content.name} work, the portfolio and what to share in your brief.`}><PortfolioQuestions items={content.questions} /></PortfolioSection>

      <PortfolioEnquiry title={<>Plan your next<br />campaign.</>} copy={content.enquiry} service={content.name} related={content.related} />
    </div>
  );
}
