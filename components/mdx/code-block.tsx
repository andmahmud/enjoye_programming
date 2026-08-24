"use client";

import { Check, Copy } from "lucide-react";
import * as React from "react";

function extractText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    return extractText(props.children);
  }
  return "";
}

export function CodeBlock({ children }: { children?: React.ReactNode }) {
  const [copied, setCopied] = React.useState(false);

  const codeText = React.useMemo(() => extractText(children), [children]);

  const language = React.useMemo(() => {
    const first = React.Children.toArray(children)[0];
    if (React.isValidElement(first)) {
      const className = (first.props as { className?: string }).className ?? "";
      const match = className.match(/language-([\w-]+)/);
      if (match) return match[1];
    }
    return null;
  }, [children]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(codeText.trimEnd());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — ignore.
    }
  }

  return (
    <div className="code-block group my-6 overflow-hidden rounded-lg border bg-zinc-50 dark:bg-[#0d1117]">
      <div className="flex h-9 items-center justify-between border-b bg-muted/50 pr-2 pl-4 dark:border-b-white/10 dark:bg-white/5">
        <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
          {language ?? "code"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy code"}
          className="inline-flex h-7 items-center gap-1.5 rounded-md px-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {copied ? <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="text-foreground">{children}</pre>
    </div>
  );
}
