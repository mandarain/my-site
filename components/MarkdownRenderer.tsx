import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  return (
    <div className="prose prose-sm sm:prose-base max-w-none
      prose-headings:font-bold prose-headings:tracking-tight
      prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline
      prose-code:bg-[var(--card)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
      prose-pre:bg-[var(--card)] prose-pre:border prose-pre:border-[var(--border)]
      prose-blockquote:border-[var(--accent)] prose-blockquote:text-[var(--muted)]
      prose-strong:text-[var(--accent)]
      [&>*:first-child]:mt-0
    ">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
