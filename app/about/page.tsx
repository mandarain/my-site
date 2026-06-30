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
            {"我是一个喜欢在不同域之间穿梭的创造者。从前端开发到交互设计，从音乐创作到算法实验——我总是被“边界”吸引。"}
          </p>
          <p className="text-lg leading-relaxed mt-4">
            {"这个网站是我的工作室，也是我的展示档。这里有我做过的项目、写过的文章，还有一些尝试性的小玩意儿。"}
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
              <h3 className="font-bold mb-2">Music</h3>
              <p className="text-sm text-[var(--muted)]">Piano improvisation, generative music, sound experiments.</p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)]">
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-sm text-[var(--muted)]">Interaction design, prototyping, creative coding.</p>
            </div>
            <div className="p-5 rounded-xl border border-[var(--border)]">
              <h3 className="font-bold mb-2">Research</h3>
              <p className="text-sm text-[var(--muted)]">Exploring the intersection of AI, creativity, and tools.</p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">{"联系我"}</h2>
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Twitter</a>
            <a href="mailto:hello@example.com" className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors">Email</a>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
