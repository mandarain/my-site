import { notFound } from "next/navigation";
import Link from "next/link";
import { getItemBySlug } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = getItemBySlug("blog", params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        <Link href="/blog" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
          {"← 回到博客"}
        </Link>
        <p className="text-sm font-mono text-[var(--muted)] mt-4 mb-2">{post.date}</p>
        <h1 className="text-4xl font-bold tracking-tight mb-3">{post.title}</h1>
        <p className="text-[var(--muted)]">{post.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {(post.tags || []).map((t: string) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[var(--card)] text-[var(--muted)]">{t}</span>
          ))}
        </div>
      </header>
      <MarkdownRenderer content={post.content} />
    </article>
  );
}
