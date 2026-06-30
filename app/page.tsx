import { getAllItems } from "@/lib/markdown";
import HomeClient from "./HomeClient";

export default function Home() {
  const works = getAllItems("works");
  const posts = getAllItems("blog");
  return <HomeClient works={works} posts={posts} />;
}
