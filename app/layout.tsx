import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
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

// Display face for large headings only; body and small headings stay DM Sans.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  fallback: ["Georgia", "serif"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const base = host ? `${protocol}://${host}` : "https://webcodder.com";

  return {
    metadataBase: new URL(base),
    title: {
      default: "Webcodder — AI & Digital Agency in Chandigarh",
      template: "%s | Webcodder",
    },
    description:
      "Webcodder is an AI & digital agency in Chandigarh. We build websites, chatbots and automations that save your team hours and win more customers.",
    // Home page canonical. Each child route sets its own, so this is not
    // inherited anywhere it would be wrong.
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      title: "Webcodder — Websites and AI that work while you don't.",
      description: "AI & digital agency in Chandigarh: websites, chatbots and automation.",
      images: [{ url: `${base}/og.png`, width: 1200, height: 630, alt: "Webcodder — Websites and AI that work while you don't." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Webcodder — Websites and AI that work while you don't.",
      description: "AI & digital agency in Chandigarh: websites, chatbots and automation.",
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
    "AI & digital agency in Chandigarh offering AI automation, AI chatbots, website development, UI/UX design, software and app development, branding, SEO and paid advertising.",
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
    name: "AI & Digital Services",
    itemListElement: [
      "AI Automation",
      "AI Chatbots & Agents",
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
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
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
