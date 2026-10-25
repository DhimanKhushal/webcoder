import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { headers } from "next/headers";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionProvider } from "@/components/motion-provider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const base = host ? `${protocol}://${host}` : "https://webcodder.com";

  return {
    metadataBase: new URL(base),
    title: {
      default: "Webcodder — Digital Products That Move Business",
      template: "%s | Webcodder",
    },
    description:
      "A Chandigarh-based IT agency creating high-converting websites, software products, UI/UX, branding and digital experiences.",
    // Home page canonical. Each child route sets its own, so this is not
    // inherited anywhere it would be wrong.
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      title: "Webcodder — Ideas, coded into impact.",
      description: "Strategy, design and development for ambitious brands.",
      images: [{ url: `${base}/og.png`, width: 1200, height: 630, alt: "Webcodder — Ideas, coded into impact." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Webcodder — Ideas, coded into impact.",
      description: "Strategy, design and development for ambitious brands.",
      images: [`${base}/og.png`],
    },
  };
}

/**
 * Site-wide structured data.
 *
 * Rendered as a native <script> rather than next/script: per the installed
 * Next docs, next/script is for loading executable JavaScript, and JSON-LD is
 * data. The payload escapes "<" to \u003c because JSON.stringify does not
 * sanitise strings for XSS.
 *
 * The URL is the production origin rather than the request host used by
 * metadataBase, so the business identity stays stable across preview hosts.
 */
const SITE_URL = "https://webcodder.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Webcodder",
  description:
    "Full-service IT agency offering website development, UI/UX design, software development, mobile apps, branding, SEO, Google Ads, CRM and CMS solutions.",
  url: SITE_URL,
  logo: `${SITE_URL}/webcodder-logo.png`,
  image: `${SITE_URL}/og.png`,
  telephone: "+91-829-829-5419",
  email: "opt.webcodder@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "SCO 114–115, 2nd Floor, Sector 34-A",
    addressLocality: "Chandigarh",
    addressRegion: "Punjab",
    postalCode: "160022",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: [
    "https://www.instagram.com/webcodder",
    "https://www.linkedin.com/company/webcodder",
    "https://www.facebook.com/webcodder",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      "Website Development",
      "UI/UX Design",
      "Software Development",
      "Mobile App Development",
      "Branding & Identity",
      "SEO Services",
      "Google Ads / PPC",
      "CRM & CMS Solutions",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Header />
        <MotionProvider>
          <main>{children}</main>
        </MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
