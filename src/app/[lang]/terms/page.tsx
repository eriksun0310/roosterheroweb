import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/content/terms";
import { site, type Locale } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "zh" ? "zh" : "en") as Locale;
  return {
    title: site[locale].terms,
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "zh" ? "zh" : "en") as Locale;
  const content = terms[locale];
  return <LegalPage title={content.title} lastUpdated={content.lastUpdated} sections={content.sections} />;
}
