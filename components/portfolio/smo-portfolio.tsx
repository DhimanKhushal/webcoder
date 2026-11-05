import Link from "next/link";
import { ArrowDown, ArrowLeft, ImageIcon, Play } from "lucide-react";
import { SocialFormatShowcase } from "./social-format-showcase";
import { PortfolioSection, CapabilityList, PortfolioProcess, PortfolioQuestions, PortfolioEnquiry } from "./detail-layout";
import styles from "./smo-portfolio.module.css";

const sections = [
  { id: "smo-social", title: "Social media", description: "Posts, carousels & stories" },
  { id: "smo-graphics", title: "Graphic design", description: "Brand & promotional creatives" },
  { id: "smo-video", title: "Video editing", description: "Reels & campaign videos" },
];

function PendingMedia({ label, video = false, className = "" }: { label: string; video?: boolean; className?: string }) {
  const Icon = video ? Play : ImageIcon;
  return (
    <div className={`${styles.pendingMedia} ${className}`} role="img" aria-label={`${label}. Preview coming soon; awaiting team assets.`}>
      <Icon size={32} strokeWidth={1.2} aria-hidden="true" />
      <span>{label}<small>{video ? "Video preview coming soon" : "Artwork coming soon"}</small></span>
    </div>
  );
}

export function SmoPortfolio() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="smo-title">
        <div className={styles.frame}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/portfolio"><ArrowLeft size={16} aria-hidden="true" /> Portfolio</Link>
            <span aria-hidden="true">/</span><span aria-current="page">SMO</span>
          </nav>
          <div className={styles.heroGrid}>
            <div>
              <h1 id="smo-title" data-hero>Social, design<br />&amp; video.</h1>
              <p className={styles.heroIntro} data-hero>Social media, graphic design and video editing. Explore the content we create for your brand.</p>
              <a href="#smo-social" className={styles.primaryLink} data-hero>Explore the work <ArrowDown size={18} aria-hidden="true" /></a>
            </div>
            <div className={styles.heroShowcase} data-hero>
              <PendingMedia label="Social creatives" className={styles.heroPost} />
              <PendingMedia label="Reels & video" video className={styles.heroReel} />
            </div>
          </div>
          <nav className={styles.sectionNav} aria-label="SMO portfolio sections">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                <span><strong>{section.title}</strong><span>{section.description}</span></span>
                <ArrowDown size={19} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section id="smo-social" className={styles.social} aria-labelledby="smo-social-title">
        <div className={styles.frame}>
          <div className={styles.sectionHeading}>
            <h2 id="smo-social-title" data-reveal>Social media</h2>
            <p data-reveal>Content made for how people browse. Explore the formats we create for a consistent social presence.</p>
          </div>
          <SocialFormatShowcase />
        </div>
      </section>

      <section id="smo-graphics" className={styles.graphics} aria-labelledby="smo-graphics-title">
        <div className={styles.frame}>
          <div className={styles.sectionHeading}>
            <h2 id="smo-graphics-title" data-reveal>Graphic design</h2>
            <p data-reveal>A recognisable look across your brand. This gallery brings together brand creatives, promotional artwork and campaign graphics.</p>
          </div>
          <div className={styles.graphicGallery}>
            <figure data-reveal><PendingMedia label="Brand creatives" className={styles.brandArtwork} /><figcaption>Brand creatives<span>A consistent visual identity.</span></figcaption></figure>
            <figure data-reveal><PendingMedia label="Promotional artwork" className={styles.promoArtwork} /><figcaption>Promotional artwork<span>Give an offer a clear focus.</span></figcaption></figure>
            <figure data-reveal><PendingMedia label="Campaign graphics" className={styles.campaignArtwork} /><figcaption>Campaign graphics<span>One idea across different formats.</span></figcaption></figure>
          </div>
        </div>
      </section>

      <section id="smo-video" className={styles.video} aria-labelledby="smo-video-title">
        <div className={`${styles.frame} ${styles.videoGrid}`}>
          <figure className={styles.reelFigure} data-reveal>
            <PendingMedia label="Reels & short videos" video className={styles.reelArtwork} />
            <figcaption>Portrait edits<span>For reels, stories &amp; short-form video.</span></figcaption>
          </figure>
          <div className={styles.videoCopy}>
            <h2 id="smo-video-title" data-reveal>Video editing</h2>
            <p data-reveal>From a short reel to a campaign edit. See how footage, pacing, captions and sound come together to tell the story.</p>
            <figure data-reveal>
              <PendingMedia label="Campaign video edits" video className={styles.landscapeArtwork} />
              <figcaption>Landscape edits<span>For campaigns, brand stories &amp; wider screens.</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <PortfolioSection id="smo-scope" title="More than a single post." intro="Social content works best when the message, design and format are considered together. Here is what can be included in a creative brief.">
        <CapabilityList items={[
          { title: "Content direction", copy: "Agree the audience, the message and the role each piece of content should play in the brand's social presence." },
          { title: "Design & editing", copy: "Bring the brand's visual direction into graphics, short videos and supporting copy, using the assets agreed in the brief." },
          { title: "Formats ready to use", copy: "Prepare the work for the intended channels, with the right dimensions, captions and delivery requirements confirmed together." },
        ]} />
      </PortfolioSection>
      <PortfolioSection id="smo-process" tone="gray" title="From brief to feed." intro="A simple sequence makes it easier to review the creative direction, give feedback and prepare the work for use.">
        <PortfolioProcess items={[
          { title: "Understand", copy: "Discuss the brand, audience, channels and the content needed." },
          { title: "Create", copy: "Develop the message, visual approach and first design or edit." },
          { title: "Review & refine", copy: "Work through agreed feedback, checking the message and format together." },
          { title: "Prepare & deliver", copy: "Export the approved work for the platforms and uses in the brief." },
        ]} />
      </PortfolioSection>
      <PortfolioSection id="smo-questions" title="About the creative work." intro="Answers to help you understand what belongs in the SMO portfolio and what to share when you get in touch.">
        <PortfolioQuestions items={[
          { question: "Are graphic design and video editing included here?", answer: "Yes. This page brings social media content, brand and promotional graphics, and edited reels or videos into one portfolio. The exact work is agreed in the brief." },
          { question: "Can we use our existing brand assets or footage?", answer: "Share the brand guidelines, artwork, footage or other material you already have. We can review what is usable and agree what additional content or design is needed." },
          { question: "Where are the finished creative examples?", answer: "The gallery and video areas are ready for them. Original creative files are still pending from the team, so the preview areas are clearly labelled until approved work is supplied." },
          { question: "What should we include in a creative brief?", answer: "Your brand, audience, message, intended channels, any existing assets and the formats you need. Include examples of your current content if they help explain the direction." },
        ]} />
      </PortfolioSection>
      <PortfolioEnquiry title="Have a social brief?" copy="Tell us about your brand, the formats you need and where you want to show up." service="SMO — social media, graphic design and video editing" related={["meta-ads", "websites", "seo"]} />
    </div>
  );
}
