import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/content/terms";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.terms,
};

export default function TermsPage() {
  return <LegalPage title={terms.title} lastUpdated={terms.lastUpdated} sections={terms.sections} />;
}
