import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto py-6 text-center text-sm text-muted">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-1">
        <p>{site.copyright}</p>
        <p>
          <a href={`mailto:${site.email}`} className="underline hover:text-foreground transition-colors">{site.email}</a>
          <span className="mx-2">|</span>
          <span>Threads: {site.threads}</span>
        </p>
      </div>
    </footer>
  );
}
