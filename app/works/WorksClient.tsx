"use client";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function WorksClient({ works }: { works: any[] }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold tracking-tight mb-2">Works</h1>
        <p className="text-[var(--muted)] mb-12">{"一些做过的东西"}</p>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2">
        {works.map((w, i) => (
          <AnimatedSection key={w.slug} delay={i * 0.08}>
            <Link
              href={"/works/" + w.slug}
              className="block p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 hover:bg-[var(--card)] transition-all group h-full"
            >
              <p className="text-xs font-mono text-[var(--muted)] mb-2">{w.date}</p>
              <h2 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors">{w.title}</h2>
              {w.role && <p className="text-sm text-[var(--muted)] mt-1">{w.role}</p>}
              <p className="mt-3 text-sm text-[var(--muted)] line-clamp-3">{w.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {(w.tags || []).map((t: string) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg)] text-[var(--muted)]">{t}</span>
                ))}
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {works.length === 0 && (
        <p className="text-[var(--muted)] text-center py-24">{"还没有作品，马上回来。"}</p>
      )}
    </div>
  );
}
