import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface ContentData {
  slug: string;
  content: string;
  [key: string]: any;
}

export function getAllItems(subdir: string): ContentData[] {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return { slug: file.replace(/.md$/, ""), ...data, content };
  });
  return items.sort((a, b) => new Date((b as any).date).getTime() - new Date((a as any).date).getTime());
}

export function getItemBySlug(subdir: string, slug: string): ContentData | null {
  const fp = path.join(contentDir, subdir, slug + ".md");
  if (!fs.existsSync(fp)) return null;
  const raw = fs.readFileSync(fp, "utf-8");
  const { data, content } = matter(raw);
  return { slug, ...data, content };
}
