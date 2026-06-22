"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { BookOpen, ChevronDown, LoaderCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

export function ProjectReadme({
  title,
  source,
  imageBase,
  linkBase,
  imageMap = {},
}: {
  title: string;
  source: string;
  imageBase?: string;
  linkBase?: string;
  imageMap?: Partial<Record<string, string>>;
}) {
  const [open, setOpen] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleToggle() {
    const nextOpen = !open;
    setOpen(nextOpen);

    if (!nextOpen || markdown || loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(source);
      if (!response.ok) throw new Error("Não foi possível carregar o README.");
      setMarkdown(await response.text());
    } catch {
      setError("Não foi possível carregar o README neste momento.");
    } finally {
      setLoading(false);
    }
  }

  function resolveUrl(
    value: string,
    base?: string,
    replacements: Partial<Record<string, string>> = {}
  ) {
    if (replacements[value]) return replacements[value];
    if (
      !value ||
      value.startsWith("/") ||
      value.startsWith("#") ||
      value.startsWith("http://") ||
      value.startsWith("https://") ||
      value.startsWith("mailto:") ||
      value.startsWith("data:")
    ) {
      return value;
    }

    return base ? new URL(value, base).toString() : value;
  }

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 bg-slate-50 px-5 py-4 text-left transition hover:bg-slate-100 dark:bg-white/[0.035] dark:hover:bg-white/[0.06]"
      >
        <span className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-sky-500" />
          <span>
            <span className="block font-semibold text-slate-950 dark:text-white">
              README completo
            </span>
            <span className="mt-0.5 block text-xs text-slate-500 dark:text-slate-400">
              Conteúdo integral da documentação do {title}
            </span>
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-slate-500 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open ? (
        <div className="border-t border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#091522] sm:p-8">
          {loading ? (
            <div className="flex items-center justify-center gap-3 py-16 text-sm text-slate-500">
              <LoaderCircle className="h-5 w-5 animate-spin" />
              Carregando README...
            </div>
          ) : error ? (
            <p className="py-10 text-center text-sm text-red-500">{error}</p>
          ) : (
            <article className="github-readme">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  a: ({ href = "", children }) => (
                    <a
                      href={resolveUrl(href, linkBase)}
                      target={href.startsWith("#") ? undefined : "_blank"}
                      rel={href.startsWith("#") ? undefined : "noopener noreferrer"}
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src = "", alt = "", width, height }) => {
                    const resolvedSource = resolveUrl(
                      String(src),
                      imageBase,
                      imageMap
                    );

                    return (
                      /* README images may come from repository raw URLs. */
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={resolvedSource}
                        alt={alt}
                        width={width}
                        height={height}
                      />
                    );
                  },
                  code: ({ className, children, ...props }) => {
                    const language =
                      /language-(\w+)/.exec(className ?? "")?.[1] ?? "";

                    if (language === "mermaid") {
                      return (
                        <span className="readme-mermaid">
                          <span className="readme-mermaid-title">
                            Diagrama de arquitetura
                          </span>
                          <code>{children}</code>
                        </span>
                      );
                    }

                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {markdown}
              </ReactMarkdown>
            </article>
          )}
        </div>
      ) : null}
    </section>
  );
}
