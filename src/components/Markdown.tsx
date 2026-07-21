"use client";

function parseMarkdown(text: string): string {
  return text
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline hover:text-foreground transition-colors">$1</a>')
    // Unordered list items
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul class="list-disc pl-5 space-y-1 my-2">$1</ul>')
    // Ordered list items (1. 2. 3. etc.)
    .replace(/^\d+\. (.+)$/gm, "<li>$1</li>")
    .replace(/((?:<li>.*<\/li>\n?)+)/g, (match) => {
      if (match.includes("list-disc")) return match;
      return `<ul class="list-decimal pl-5 space-y-1 my-2">${match}</ul>`;
    })
    // Paragraphs (double newline)
    .replace(/\n\n/g, '</p><p class="mb-3">')
    // Single newlines within paragraphs (not in lists)
    .replace(/(?<!>)\n(?!<)/g, "<br/>");
}

export default function Markdown({ content }: { content: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: `<p class="mb-3">${parseMarkdown(content)}</p>` }}
    />
  );
}
