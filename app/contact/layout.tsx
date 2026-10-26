import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start an AI, website, software, design or marketing project with Webcodder in Chandigarh.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
