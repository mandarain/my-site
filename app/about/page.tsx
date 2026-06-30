"use client";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <AnimatedSection>
        <h1 className="text-4xl font-bold tracking-tight mb-2">{"关于我"}</h1>
        <p className="text-[var(--muted)] mb-12">About</p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="mb-12">
          <p className="text-lg leading-relaxed">
            {"喜欢打游戏的码农，喜欢看电影的程序员。"}
          </p>
          <p className="text-lg leading-relaxed mt-4">
            {"这个网站是我的个人空间，用于记录我的作品、想法和一些有趣的小垃圾。"}
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight mb-6">{"我在做什么"}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-5 rounded-xl border border-[var(--border)]">
              <h3 className="font-bold mb-2">Frontend</h3>
              <p className="text-sm text-[var(--muted)]">React, Next.js, Tailwind CSS, building things for the web.</p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)]">
              <h3 className="font-bold mb-2">Game</h3>
              <p className="text-sm text-[var(--muted)]">STG,4X,online TCG,SLG,AVG/VN</p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)]">
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-sm text-[var(--muted)]">Interaction design, prototyping, creative coding.</p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)]">
              <h3 className="font-bold mb-2">Research</h3>
              <p className="text-sm text-[var(--muted)]">Computer Vision, exploring the intersection of AI, creativity, and tools.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">{"联系我"}</h2>
          <div className="flex gap-6">
            <a href="https://space.bilibili.com/2040180" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">bilibili</a>
            <a href="mailto:yujiany6@gmail.com" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Email</a>
            <a href="https://linux.do/u/xanazephyr/summary" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">linux.do</a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
