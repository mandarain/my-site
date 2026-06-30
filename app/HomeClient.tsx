"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function HomeClient({ works, posts }: { works: any[]; posts: any[] }) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const itemV = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-center py-24">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--muted)] text-sm mb-4 font-mono"
        >
          {"// hello, i am"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          {"XanaZephYr"}
          <br />
          <span className="text-[var(--muted)]">{"create & code"}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-lg text-[var(--muted)] text-lg leading-relaxed"
        >
          {"个人的备忘录和作品集网站，记录一些有趣的想法和项目。"}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 flex gap-4"
        >
          <Link href="/works" className="px-6 py-2.5 rounded-full border border-[var(--border)] text-sm hover:bg-[var(--card)] transition-all">
            {"看作品 →"}
          </Link>
          <Link href="/about" className="px-6 py-2.5 rounded-full border border-[var(--border)] text-sm hover:bg-[var(--card)] transition-all">
            {"关于我 →"}
          </Link>
        </motion.div>
      </section>

      {/* Featured Works */}
      <AnimatedSection>
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">{"精选作品"}</h2>
            <Link href="/works" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              {"查看全部 →"}
            </Link>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 sm:grid-cols-2">
            {works.slice(0, 2).map((w: any, i: number) => (
              <motion.div key={w.slug} variants={itemV}>
                <Link href={"/works/" + w.slug} className="block p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]/50 hover:bg-[var(--card)] transition-all group">
                  <p className="text-xs font-mono text-[var(--muted)] mb-2">{w.date}</p>
                  <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors">{w.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">{w.description}</p>
                  <div className="flex gap-2 mt-3">
                    {(w.tags || []).map((t: string) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg)] text-[var(--muted)]">{t}</span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Recent Posts */}
      <AnimatedSection delay={0.15}>
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">{"最新文章"}</h2>
            <Link href="/blog" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
              {"查看全部 →"}
            </Link>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
            {posts.slice(0, 3).map((p: any, i: number) => (
              <motion.div key={p.slug} variants={itemV}>
                <Link href={"/blog/" + p.slug} className="block p-5 rounded-xl border border-[var(--border)] hover:bg-[var(--card)] transition-all group">
                  <div className="flex items-center gap-3 text-xs text-[var(--muted)] font-mono mb-1">
                    <span>{p.date}</span>
                    {(p.tags || []).map((t: string) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-[var(--bg)] text-[var(--muted)]">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold group-hover:text-[var(--accent)] transition-colors">{p.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted)] line-clamp-1">{p.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </AnimatedSection>
    </div>
  );
}
