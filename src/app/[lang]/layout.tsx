import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, type Locale } from "@/content/site";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "zh" ? "zh" : "en") as Locale;
  const t = site[locale];
  return {
    title: {
      default: `${site.appName} - ${t.heroTitle}`,
      template: `%s | ${site.appName}`,
    },
    description: t.homeDescription,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "zh" ? "zh" : "en") as Locale;
  return (
    <>
      <Header lang={locale} />
      <main className="flex-1">{children}</main>
      <Footer lang={locale} />
    </>
  );
}
