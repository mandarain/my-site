"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--bg)]/70 border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">
          {"<"}Codex{"/>"}
        </Link>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-[var(--accent)] ${
                path === l.href ? "text-[var(--accent)]" : "text-[var(--muted)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
