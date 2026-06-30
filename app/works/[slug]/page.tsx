import { notFound } from "next/navigation";
import { getItemBySlug } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const work = getItemBySlug("works", params.slug);
  if (!work) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-sm font-mono text-[var(--muted)] mb-2">{work.date}</p>
        <h1 className="text-4xl font-bold tracking-tight mb-3">{work.title}</h1>
        {work.role && <p className="text-[var(--muted)]">{work.role}</p>}
        {work.url && (
          <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-[var(--accent)] hover:underline">
            {"查看项目 →"}
          </a>
        )}
        <div className="flex flex-wrap gap-2 mt-4">
          {(work.tags || []).map((t: string) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[var(--card)] text-[var(--muted)]">{t}</span>
          ))}
        </div>
      </header>
      <MarkdownRenderer content={work.content} />
    </article>
  );
}
