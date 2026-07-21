"use client";

import Link from "next/link";
import { site, type Locale } from "@/content/site";

export default function Header({ lang }: { lang: Locale }) {
  const t = site[lang];
  const otherLang = lang === "en" ? "zh" : "en";
  const otherLabel = lang === "en" ? "中文" : "EN";

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href={`/${lang}`} className="font-bold text-lg tracking-tight">
          {site.appName}
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href={`/${lang}/privacy`} className="text-muted hover:text-foreground transition-colors">
            {t.privacy}
          </Link>
          <Link href={`/${lang}/terms`} className="text-muted hover:text-foreground transition-colors">
            {t.terms}
          </Link>
          <Link
            href={`/${otherLang}`}
            className="ml-2 rounded border border-border px-2 py-0.5 text-xs font-medium text-muted hover:text-foreground transition-colors"
          >
            {otherLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
