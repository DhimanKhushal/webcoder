import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { termsAndConditions } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms that apply when you use the Webcodder website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage document={termsAndConditions} />;
}
