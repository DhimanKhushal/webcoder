import Image from "next/image";
import styles from "./project-artwork.module.css";

type ProjectArtworkProps = {
  /** Unset while the screenshot is missing; the placeholder frame renders instead. */
  src?: string;
  alt: string;
  /** Shown on the placeholder in place of the screenshot. */
  label: string;
  caption?: string;
  sizes?: string;
  /** Smaller type, for narrow frames such as the phone mock. */
  compact?: boolean;
};

/**
 * A project screenshot, or a branded placeholder when the file is not available.
 * The parent must be positioned, since both states fill it.
 */
export function ProjectArtwork({ src, alt, label, caption, sizes, compact }: ProjectArtworkProps) {
  if (src) {
    return <Image src={src} alt={alt} fill sizes={sizes} />;
  }

  return (
    <div className={`${styles.placeholder} ${compact ? styles.compact : ""}`} role="img" aria-label={alt}>
      <span>{label}</span>
      {caption && !compact ? <small>{caption}</small> : null}
    </div>
  );
}
