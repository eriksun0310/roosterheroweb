import Markdown from "@/components/Markdown";

interface Section {
  heading: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: readonly Section[];
}

export default function LegalPage({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-1">{title}</h1>
      <p className="text-sm text-muted mb-8">{lastUpdated}</p>
      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg sm:text-xl font-semibold mb-3">{section.heading}</h2>
            <div className="prose-content text-[15px] leading-relaxed text-foreground/85">
              <Markdown content={section.body} />
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
