import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/content/privacy";
import { site, type Locale } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "zh" ? "zh" : "en") as Locale;
  return {
    title: site[locale].privacy,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "zh" ? "zh" : "en") as Locale;
  const content = privacy[locale];
  return <LegalPage title={content.title} lastUpdated={content.lastUpdated} sections={content.sections} />;
}
