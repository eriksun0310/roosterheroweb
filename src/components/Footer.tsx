import { site, type Locale } from "@/content/site";

export default function Footer({ lang }: { lang: Locale }) {
  const t = site[lang];
  return (
    <footer className="border-t border-border mt-auto py-6 text-center text-sm text-muted">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-1">
        <p>{t.copyright}</p>
        <p>
          Contact: <a href={`mailto:${site.email}`} className="underline hover:text-foreground transition-colors">{site.email}</a>
        </p>
      </div>
    </footer>
  );
}
