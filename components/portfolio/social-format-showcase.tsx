"use client";

import { useState, type KeyboardEvent } from "react";
import { ImageIcon } from "lucide-react";
import styles from "./smo-portfolio.module.css";

const formats = [
  { id: "posts", label: "Posts", heading: "Social posts", description: "A single creative with a clear message. A place for brand content, announcements and promotional posts.", shape: "square", ratio: "Square format", details: ["Brand-led visuals", "Focused messages & supporting copy"] },
  { id: "carousels", label: "Carousels", heading: "Carousel content", description: "An idea told across a connected set of slides. A place for explainers, product details and stories that need more room.", shape: "portrait", ratio: "Portrait format", details: ["A connected visual sequence", "Clear slide-by-slide storytelling"] },
  { id: "stories", label: "Stories", heading: "Social stories", description: "Content that fills the phone screen. A place for updates, offers and brand moments in a vertical format.", shape: "story", ratio: "Full-screen vertical format", details: ["Mobile-first composition", "Short messages with a clear next step"] },
] as const;

export function SocialFormatShowcase() {
  const [active, setActive] = useState(0);
  const format = formats[active];

  function handleKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % formats.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + formats.length) % formats.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = formats.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`social-format-${formats[next].id}`)?.focus();
  }

  return (
    <div className={styles.formatShowcase}>
      <div className={styles.formatTabs} role="tablist" aria-label="Social media formats">
        {formats.map((item, index) => (
          <button key={item.id} type="button" role="tab" id={`social-format-${item.id}`} aria-selected={active === index} aria-controls={`social-panel-${item.id}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => handleKey(event, index)}>{item.label}</button>
        ))}
      </div>
      {formats.map((item, index) => (
        <div key={item.id} id={`social-panel-${item.id}`} role="tabpanel" aria-labelledby={`social-format-${item.id}`} hidden={active !== index} tabIndex={0} className={styles.formatPanel}>
          <div className={styles.formatCopy}>
            <h3>{item.heading}</h3>
            <p>{item.description}</p>
            <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </div>
          <div className={styles.formatStage}>
            <div className={`${styles.formatCanvas} ${styles[item.shape]}`} role="img" aria-label={`${item.heading}. ${item.ratio}. Artwork coming soon.`}>
              <ImageIcon size={34} strokeWidth={1.2} aria-hidden="true" /><span>Artwork coming soon</span>
            </div>
            <span className={styles.formatCaption}>{item.ratio} · Preview pending</span>
          </div>
        </div>
      ))}
      <p className={styles.assetNote}>Creative examples will appear here once the team shares the artwork.</p>
      <span className={styles.srOnly} role="status">{format.heading} selected</span>
    </div>
  );
}
