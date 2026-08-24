import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import bash from "highlight.js/lib/languages/bash";
import css from "highlight.js/lib/languages/css";
import dart from "highlight.js/lib/languages/dart";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import kotlin from "highlight.js/lib/languages/kotlin";
import sql from "highlight.js/lib/languages/sql";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { Callout } from "@/components/mdx/callout";
import { CodeBlock } from "@/components/mdx/code-block";
import { YouTubeVideo } from "@/components/mdx/youtube-video";

const languages = { bash, css, dart, javascript, json, kotlin, sql, typescript, xml, yaml };

const mdxComponents = {
  Callout,
  YouTubeVideo,
  pre: ({ children }: ComponentPropsWithoutRef<"pre">) => <CodeBlock>{children}</CodeBlock>,
  code: ({ children, className }: ComponentPropsWithoutRef<"code">) => {
    if (className) {
      return <code className={className}>{children}</code>;
    }
    return <code>{children}</code>;
  },
  table: ({ children }: ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-lg border">
      <table>{children}</table>
    </div>
  ),
};

export function MdxRenderer({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypeHighlight, { languages, detect: false, ignoreMissing: true }],
          ],
        },
      }}
    />
  );
}
