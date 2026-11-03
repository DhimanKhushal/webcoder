"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Briefcase, Camera, FileText, Grid2X2, Image as ImageIcon, Monitor, PanelsTopLeft, Play, Search, Smartphone, Users } from "lucide-react";
import styles from "@/components/portfolio/portfolio.module.css";

type CampaignPlatform = "meta-ads" | "google-ads" | "linkedin-ads";
type AdLayout = "feed" | "story" | "facebook" | "gallery" | "search" | "display" | "video" | "sponsored" | "message" | "lead";
type AdView = { id: string; label: string; icon: typeof Camera; layout: AdLayout };

const platformContent: Record<CampaignPlatform, {
  name: string;
  browserPath: string;
  experienceTitle: string;
  experienceCopy: string;
  footer: string;
  closeEyebrow: string;
  closeTitle: string;
  views: AdView[];
}> = {
  "meta-ads": {
    name: "Meta Ads",
    browserPath: "/portfolio/meta-ads",
    experienceTitle: "One campaign idea. Built for every placement.",
    experienceCopy: "Select a placement to explore the format. Campaign screenshots and verified context are pending from the team.",
    footer: "Facebook · Instagram",
    closeEyebrow: "Paid social, made with purpose",
    closeTitle: "Every Campaign Starts With a Creative Idea.",
    views: [
      { id: "instagram-feed", label: "Instagram Feed", icon: Camera, layout: "feed" },
      { id: "instagram-stories", label: "Instagram Stories", icon: Smartphone, layout: "story" },
      { id: "facebook-ads", label: "Facebook Ads", icon: PanelsTopLeft, layout: "facebook" },
      { id: "campaign-creatives", label: "Campaign Creatives", icon: Grid2X2, layout: "gallery" },
    ],
  },
  "google-ads": {
    name: "Google Ads",
    browserPath: "/portfolio/google-ads",
    experienceTitle: "Search intent. Clear messages. Better campaign journeys.",
    experienceCopy: "Explore how a campaign can appear across Google formats. Campaign screenshots and verified context are pending from the team.",
    footer: "Search · Display · YouTube",
    closeEyebrow: "Search advertising, with intent",
    closeTitle: "Every Search Starts With the Right Question.",
    views: [
      { id: "google-search", label: "Google Search", icon: Search, layout: "search" },
      { id: "google-display", label: "Display Ads", icon: Monitor, layout: "display" },
      { id: "google-youtube", label: "YouTube Ads", icon: Play, layout: "video" },
      { id: "google-creatives", label: "Campaign Creatives", icon: Grid2X2, layout: "gallery" },
    ],
  },
  "linkedin-ads": {
    name: "LinkedIn Ads",
    browserPath: "/portfolio/linkedin-ads",
    experienceTitle: "Professional audiences. Relevant campaign experiences.",
    experienceCopy: "Select a LinkedIn campaign format to explore its preview. Campaign screenshots and verified context are pending from the team.",
    footer: "Sponsored · Message · Lead Gen",
    closeEyebrow: "Campaigns for professional audiences",
    closeTitle: "Every Professional Campaign Starts With Relevance.",
    views: [
      { id: "linkedin-sponsored", label: "Sponsored Content", icon: Briefcase, layout: "sponsored" },
      { id: "linkedin-message", label: "Message Ads", icon: FileText, layout: "message" },
      { id: "linkedin-lead-gen", label: "Lead Gen Ads", icon: Users, layout: "lead" },
      { id: "linkedin-creatives", label: "Campaign Creatives", icon: Grid2X2, layout: "gallery" },
    ],
  },
};

type ViewId = AdView["id"];

const detailRows = [
  ["Campaign objective", "Awaiting approved campaign brief"],
  ["Audience approach", "Audience and targeting notes pending"],
  ["Creative direction", "Approved campaign assets pending"],
  ["Ad copy & formats", "Copy and placement details pending"],
  ["Reporting context", "Dates and verified performance evidence pending"],
];

function CampaignAssetPlaceholder({ layout, platform }: { layout: AdLayout; platform: CampaignPlatform }) {
  if (layout === "gallery") {
    return (
      <div className={styles.metaGallery} aria-label="Campaign creative asset placeholders">
        {[1, 2, 3, 4].map((item) => (
          <div className={styles.metaGalleryTile} key={item}>
            <ImageIcon size={21} strokeWidth={1.4} aria-hidden="true" />
            <span>Creative {String(item).padStart(2, "0")}</span>
            <small>Asset pending</small>
          </div>
        ))}
      </div>
    );
  }

  if (layout === "story") {
    return (
      <div className={styles.metaStoryCanvas} role="img" aria-label="Instagram Story ad preview placeholder. Campaign creative asset pending.">
        <span className={styles.metaStoryProgress}><i /></span>
        <span className={styles.metaStoryAccount}><span />Campaign account</span>
        <div className={styles.metaAssetMessage}><ImageIcon size={24} aria-hidden="true" /><strong>Story creative</strong><span>Approved campaign asset pending</span></div>
        <span className={styles.metaStoryReply}>Send message</span>
      </div>
    );
  }

  if (layout === "search") {
    return (
      <div className={styles.googleSearchMock} role="img" aria-label="Google Search ad preview placeholder. Campaign copy and screenshots pending.">
        <div className={styles.googleSearchBar}><Search size={15} aria-hidden="true" /><span>Search query / campaign context pending</span></div>
        <div className={styles.googleResultLabel}>Sponsored · Search result preview</div>
        <strong>Ad headline pending</strong>
        <span className={styles.googleResultUrl}>Destination URL pending</span>
        <p>Campaign-specific ad copy will appear here when approved material is supplied.</p>
        <span className={styles.googleResultSitelinks}>Sitelink extensions pending</span>
      </div>
    );
  }

  if (layout === "display" || layout === "video") {
    return (
      <div className={`${styles.googleVisualMock} ${layout === "video" ? styles.googleVideoMock : ""}`} role="img" aria-label={`${layout === "video" ? "YouTube" : "Google Display"} campaign preview placeholder. Creative asset pending.`}>
        {layout === "video" && <span className={styles.googlePlayMark}><Play size={20} fill="currentColor" aria-hidden="true" /></span>}
        <ImageIcon size={26} strokeWidth={1.4} aria-hidden="true" />
        <strong>{layout === "video" ? "Video creative pending" : "Display creative pending"}</strong>
        <span>Approved campaign asset will appear here</span>
      </div>
    );
  }

  if (layout === "message" || layout === "lead") {
    return (
      <div className={styles.linkedinMessageMock} role="img" aria-label={`${layout === "message" ? "LinkedIn Message Ad" : "LinkedIn Lead Gen"} preview placeholder. Campaign material pending.`}>
        <div className={styles.linkedinMockHeader}><span><Briefcase size={16} aria-hidden="true" /></span><div><strong>Campaign sender</strong><small>Sponsored message preview</small></div></div>
        <div className={styles.linkedinMockBody}><span>{layout === "message" ? "Message subject pending" : "Lead form title pending"}</span><p>{layout === "message" ? "Approved campaign message will appear here." : "Form content and fields will appear here when supplied."}</p><i /></div>
        <span className={styles.linkedinMockCta}>{layout === "message" ? "Message CTA pending" : "Lead form CTA pending"}</span>
      </div>
    );
  }

  return (
    <div className={`${styles.metaAdMock} ${layout === "facebook" ? styles.metaFacebookMock : ""}`}>
      <div className={styles.metaAdIdentity}><span className={styles.metaAvatar} /><div><strong>{platform === "linkedin-ads" ? "Campaign sender" : "Campaign account"}</strong><small>Sponsored · Placement preview</small></div><span className={styles.metaMore}>•••</span></div>
      <p className={styles.metaAdNotice}>Ad copy and campaign-specific messaging will appear here once supplied.</p>
      <div className={styles.metaFeedCanvas} role="img" aria-label="Paid social creative preview placeholder. Campaign asset pending.">
        <ImageIcon size={27} strokeWidth={1.3} aria-hidden="true" />
        <strong>{layout === "facebook" ? "Facebook ad creative" : layout === "sponsored" ? "Sponsored content creative" : "Instagram feed creative"}</strong>
        <span>Campaign screenshot pending</span>
      </div>
      <div className={styles.metaAdAction}><span>Destination / call to action pending</span><span>CTA pending <ArrowUpRight size={14} aria-hidden="true" /></span></div>
      <div className={styles.metaAdFooter}><span>♡　◯　➤</span><small>Engagement preview unavailable until supplied</small></div>
    </div>
  );
}

function MagneticContactLink() {
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 170, damping: 18, mass: 0.25 });

  function move(event: PointerEvent<HTMLAnchorElement>) {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.1);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.14);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a href="/contact" className={styles.metaContactButton} style={reducedMotion ? undefined : { x: springX, y: springY }} onPointerMove={move} onPointerLeave={reset}>
      Discuss Your Campaign <ArrowUpRight size={19} aria-hidden="true" />
    </motion.a>
  );
}

export function PaidAdsExperience({ platform: platformId }: { platform: CampaignPlatform }) {
  const platform = platformContent[platformId];
  const [activeView, setActiveView] = useState<ViewId>(platform.views[0].id);
  const reducedMotion = useReducedMotion();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const browserRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: browserRef, offset: ["start end", "end start"] });
  const browserParallax = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [15, -15]);
  const activeIndex = Math.max(0, platform.views.findIndex((view) => view.id === activeView));
  const active = platform.views[activeIndex];

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    let nextIndex = activeIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (activeIndex + 1) % platform.views.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (activeIndex - 1 + platform.views.length) % platform.views.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = platform.views.length - 1;
    else return;
    event.preventDefault();
    setActiveView(platform.views[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <>
      <section className={styles.metaExperience} aria-label={`Interactive ${platform.name} campaign browser`}>
        <div className={styles.metaExperienceIntro} data-reveal>
          <div><p className={styles.detailEyebrow}>Explore the formats</p><h2>{platform.experienceTitle}</h2></div>
          <p>{platform.experienceCopy}</p>
        </div>

        <motion.div className={styles.metaBrowserParallax} ref={browserRef} style={{ y: browserParallax }}>
        <div className={styles.metaBrowser} data-reveal>
          <div className={styles.metaBrowserChrome}>
            <div className={styles.metaWindowDots} aria-hidden="true"><i /><i /><i /></div>
            <div className={styles.metaAddress}><span>webcodder.com</span><span>{platform.browserPath}</span></div>
            <span className={styles.metaPreviewLabel}>CAMPAIGN PREVIEW</span>
          </div>
          <div className={styles.metaTabBar} role="tablist" aria-label={`${platform.name} format preview`}>
            {platform.views.map(({ id, label, icon: Icon }, index) => (
              <button
                aria-controls="meta-ad-panel"
                aria-selected={activeView === id}
                className={activeView === id ? styles.metaTabActive : styles.metaTab}
                id={`meta-tab-${id}`}
                key={id}
                onClick={() => setActiveView(id)}
                onKeyDown={handleTabKeyDown}
                ref={(element) => { tabRefs.current[index] = element; }}
                role="tab"
                tabIndex={activeView === id ? 0 : -1}
                type="button"
              >
                <Icon size={16} strokeWidth={1.7} aria-hidden="true" /><span>{label}</span>
              </button>
            ))}
          </div>

          <div className={styles.metaBrowserBody}>
            <div className={styles.metaPreviewColumn}>
              <div className={styles.metaPreviewHeading}><span>{active.label}</span><span><i /> Asset pending</span></div>
              <div className={styles.metaPreviewStage}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    aria-labelledby={`meta-tab-${active.id}`}
                    className={styles.metaPreviewTransition}
                    id="meta-ad-panel"
                    key={active.id}
                    role="tabpanel"
                    initial={reducedMotion ? false : { opacity: 0, y: 10, scale: 0.985 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reducedMotion ? undefined : { opacity: 0, y: -7, scale: 0.99 }}
                    transition={{ duration: reducedMotion ? 0 : 0.24, ease: "easeOut" }}
                  >
                    <CampaignAssetPlaceholder layout={active.layout} platform={platformId} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className={styles.metaPreviewFooter}><span>{platform.name} formats</span><span>{platform.footer}</span></div>
            </div>

            <motion.aside
              aria-label={`${active.label} campaign details`}
              className={styles.metaCampaignPanel}
              key={`${active.id}-details`}
              initial={reducedMotion ? false : { opacity: 0.7, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.28, ease: "easeOut" }}
            >
              <div className={styles.metaPanelHeading}><span>Campaign details</span><span>Awaiting source material</span></div>
              <dl>{detailRows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
              <p className={styles.metaIntegrityNote}>We only publish campaign outcomes when source reports and dates are available.</p>
            </motion.aside>
          </div>
          <div className={styles.metaBrowserBottom}><span><span className={styles.metaStatusDot} /> Preview mode</span><span>Creative assets have not been supplied</span></div>
        </div>
        </motion.div>
      </section>

      <section className={styles.metaCampaignClose} data-reveal>
        <div>
          <p className={styles.detailEyebrow}>{platform.closeEyebrow}</p>
          <h2>{platform.closeTitle}</h2>
          <p>Have a campaign to plan or a creative brief to discuss? Tell us what you are working on.</p>
        </div>
        <MagneticContactLink />
        <span className={styles.metaCloseMark} aria-hidden="true"><ArrowDownRight size={52} strokeWidth={1} /></span>
      </section>
    </>
  );
}
