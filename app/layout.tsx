import { tw } from "@/lib/tailwind";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionProvider } from "@/components/motion-provider";

const geist = Geist({
  variable: "--font-geist",
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
    <html
      lang="en"
      className={`${geist.variable} scroll-smooth scroll-pt-[104px] motion-reduce:scroll-auto`}
    >
      <body
        className={tw("m-0 overflow-x-hidden bg-[var(--paper)] font-[family-name:var(--font-geist)] text-base font-normal leading-[1.68] text-[var(--ink)] [font-synthesis:none] [text-rendering:optimizeLegibility] [--accent-hover:#1d4ed8] [--accent-light:#dbeafe] [--accent-soft:#60a5fa] [--background:#0f172a] [--body:var(--font-geist)] [--card:#ffffff] [--display:var(--font-geist)] [--ink:#111827] [--ink-soft:#5f6b7a] [--lime:#60a5fa] [--lime-soft:#dbeafe] [--line:#e5eaf0] [--line-dark:rgba(255,255,255,0.08)] [--muted:#5f6b7a] [--muted-light:#94a3b8] [--orange:#2563eb] [--paper:#ffffff] [--paper-deep:#eef5ff] [--radius-lg:32px] [--radius-md:22px] [--radius-sm:14px] [--shadow-md:0_22px_70px_rgba(15,23,42,0.12)] [--shadow-sm:0_10px_30px_rgba(15,23,42,0.07)] [--surface:#f7fafc] [--white:#ffffff] selection:bg-[#2563eb] selection:text-white [&_a]:[color:inherit] [&_a]:no-underline [&_a]:[-webkit-tap-highlight-color:transparent] [&_button]:font-inherit [&_button]:[-webkit-tap-highlight-color:transparent] [&_input]:font-inherit [&_select]:font-inherit [&_textarea]:font-inherit [&_h1]:font-[family-name:var(--font-geist)] [&_h2]:font-[family-name:var(--font-geist)] [&_h3]:font-[family-name:var(--font-geist)] [&_h4]:font-[family-name:var(--font-geist)] [&_strong]:font-[family-name:var(--font-geist)] [&_*:focus-visible]:outline-[3px] [&_*:focus-visible]:outline-offset-4 [&_*:focus-visible]:outline-[#2563eb] motion-reduce:[&_*]:[animation-duration:0.01ms]! motion-reduce:[&_*]:[animation-iteration-count:1]! motion-reduce:[&_*]:[transition-duration:0.01ms]! motion-reduce:[&_*::before]:[animation-duration:0.01ms]! motion-reduce:[&_*::after]:[animation-duration:0.01ms]!")}
      >
        <Header />
        <MotionProvider>
          <main className={tw("min-h-[70vh]")}>{children}</main>
        </MotionProvider>
        <Footer />
      </body>
    </html>
  );
}
