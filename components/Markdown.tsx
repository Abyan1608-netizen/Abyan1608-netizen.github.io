import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Flowchart from "@/components/Flowchart";

const kode = (props: React.ComponentProps<"code">) => {
  const { className, children } = props;
  const text = String(children).replace(/\n$/, "");
  if (/language-flowchart/.test(className ?? "")) return <Flowchart src={text} />;
  if (!className && !text.includes("\n")) {
    return <code className="rounded-md bg-ink/10 px-1.5 py-0.5 font-mono text-[0.92em] font-semibold">{text}</code>;
  }
  return <code className="font-mono">{text}</code>;
};

export default function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSlug]}
      components={{
        h2: (p) => <h2 {...p} className="mb-4 mt-14 scroll-mt-24 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl" />,
        h3: (p) => <h3 {...p} className="mb-3 mt-10 scroll-mt-24 text-2xl font-extrabold tracking-tight" />,
        p: (p) => <p {...p} className="my-5" />,
        ul: (p) => <ul {...p} className="my-5 list-disc space-y-2 pl-7 marker:text-tangerine" />,
        ol: (p) => <ol {...p} className="my-5 list-decimal space-y-2 pl-7 marker:font-extrabold" />,
        strong: (p) => <strong {...p} className="font-extrabold" />,
        hr: () => <hr className="my-12 border-t-2 border-dashed border-ink" />,
        a: (p) => <a {...p} className="font-bold underline decoration-tangerine decoration-2 underline-offset-4" />,
        blockquote: (p) => (
          <blockquote {...p} className="my-8 rounded-3xl border-2 border-ink bg-sun px-6 py-4 text-[1.1rem] font-semibold shadow-[5px_5px_0_0_#141414] [&>p]:my-2" />
        ),
        pre: ({ children }) => {
          const child = React.Children.toArray(children)[0] as React.ReactElement<{ className?: string }> | undefined;
          if (child && /language-flowchart/.test(child.props?.className ?? "")) return <>{children}</>;
          return (
            <pre className="my-6 overflow-x-auto rounded-3xl border-2 border-ink bg-ink px-6 py-5 text-[1.05rem] leading-relaxed text-paper shadow-[5px_5px_0_0_#ff6a2b]">
              {children}
            </pre>
          );
        },
        code: kode,
        table: (p) => (
          <div className="my-8 overflow-x-auto rounded-3xl border-2 border-ink bg-[#fffaf2] shadow-[5px_5px_0_0_#141414]">
            <table {...p} className="w-full border-collapse text-left text-[1.05rem]" />
          </div>
        ),
        th: (p) => <th {...p} className="border-b-2 border-ink bg-sun/70 px-4 py-3 font-extrabold" />,
        td: (p) => <td {...p} className="border-b border-ink/25 px-4 py-3 align-top" />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
