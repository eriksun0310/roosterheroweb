import Link from "next/link";
import { site } from "@/content/site";

export default function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          {site.appName}
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/privacy" className="text-muted hover:text-foreground transition-colors">
            {site.privacy}
          </Link>
          <Link href="/terms" className="text-muted hover:text-foreground transition-colors">
            {site.terms}
          </Link>
        </nav>
      </div>
    </header>
  );
}
