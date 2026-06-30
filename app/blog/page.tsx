import { getAllItems } from "@/lib/markdown";
import BlogClient from "./BlogClient";

export default function BlogPage() {
  const posts = getAllItems("blog");
  return <BlogClient posts={posts} />;
}
