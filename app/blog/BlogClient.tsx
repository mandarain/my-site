"use client";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogClient({ posts }: { posts: any[] }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Blog</h1>
        <p className="text-[var(--muted)] mb-12">{"零散的文字和记录"}</p>
      </AnimatedSection>

      <div className="space-y-4">
        {posts.map((p, i) => (
          <AnimatedSection key={p.slug} delay={i * 0.06}>
            <Link
              href={"/blog/" + p.slug}
              className="block p-5 rounded-xl border border-[var(--border)] hover:bg-[var(--card)] transition-all group"
            >
              <div className="flex items-center gap-3 text-xs text-[var(--muted)] font-mono mb-1">
                <span>{p.date}</span>
                {(p.tags || []).map((t: string) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-[var(--bg)] text-[var(--muted)]">{t}</span>
                ))}
              </div>
              <h2 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors">{p.title}</h2>
              <p className="mt-1 text-sm text-[var(--muted)] line-clamp-2">{p.description}</p>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-[var(--muted)] text-center py-24">{"还没有文章，马上回来。"}</p>
      )}
    </div>
  );
}
