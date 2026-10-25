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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Header />
        <MotionProvider>
          <main>{children}</main>
        </MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
