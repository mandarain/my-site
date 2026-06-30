import { getAllItems } from "@/lib/markdown";
import WorksClient from "./WorksClient";

export default function WorksPage() {
  const works = getAllItems("works");
  return <WorksClient works={works} />;
}
