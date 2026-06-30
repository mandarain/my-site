export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} XanaZephYr. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://linux.do/u/xanazephyr/summary" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">linux.do</a>
          <a href="https://space.bilibili.com/2040180" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">bilibili</a>
          <a href="mailto:yujiany6@gmail.com" className="hover:text-[var(--accent)] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
