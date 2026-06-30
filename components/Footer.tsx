export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} 盛德美. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">GitHub</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Twitter</a>
          <a href="mailto:hello@example.com" className="hover:text-[var(--accent)] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
