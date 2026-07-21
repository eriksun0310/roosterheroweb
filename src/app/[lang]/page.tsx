import Link from "next/link";
import type { Metadata } from "next";
import { site, type Locale } from "@/content/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "zh" ? "zh" : "en") as Locale;
  const t = site[locale];
  return {
    title: `${site.appName} - ${t.heroTitle}`,
    description: t.homeDescription,
  };
}

const pages = [
  { href: "privacy", icon: "shield" },
  { href: "terms", icon: "file-text" },
  { href: "account-deletion", icon: "user-x" },
] as const;

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  "file-text": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  "user-x": (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    </svg>
  ),
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "zh" ? "zh" : "en") as Locale;
  const t = site[locale];

  const labels: Record<string, string> = {
    privacy: t.privacy,
    terms: t.terms,
    "account-deletion": t.accountDeletion,
  };

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3">{t.heroTitle}</h1>
      <p className="text-muted text-base sm:text-lg mb-10 max-w-xl">
        {t.heroDescription}
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {pages.map(({ href, icon }) => (
          <Link
            key={href}
            href={`/${locale}/${href}`}
            className="group flex flex-col gap-3 rounded-lg border border-border p-5 hover:border-foreground/20 hover:bg-card transition-all"
          >
            <span className="text-muted group-hover:text-foreground transition-colors">
              {icons[icon]}
            </span>
            <span className="font-medium">{labels[href]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
