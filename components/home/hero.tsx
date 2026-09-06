import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const CODE_LINES = [
  { indent: 0, parts: [{ text: "import ", color: "text-[#d73a49] dark:text-[#ff7b72]" }, { text: "'package:flutter/material.dart'", color: "text-[#032f62] dark:text-[#a5d6ff]" }, { text: ";", color: "" }] },
  {
    indent: 0,
    blank: true,
    parts: [],
  },
  { indent: 0, parts: [{ text: "class ", color: "text-[#d73a49] dark:text-[#ff7b72]" }, { text: "RevenueDashboard ", color: "text-[#6f42c1] dark:text-[#d2a8ff]" }, { text: "extends ", color: "text-[#d73a49] dark:text-[#ff7b72]" }, { text: "StatelessWidget", color: "text-[#6f42c1] dark:text-[#d2a8ff]" }, { text: " {", color: "" }] },
  { indent: 1, parts: [{ text: "@override", color: "text-[#6a737d] dark:text-[#8b949e]" }] },
  { indent: 1, parts: [{ text: "Widget ", color: "text-[#005cc5] dark:text-[#79c0ff]" }, { text: "build", color: "text-[#6f42c1] dark:text-[#d2a8ff]" }, { text: "(BuildContext context) {", color: "" }] },
  { indent: 2, parts: [{ text: "return ", color: "text-[#d73a49] dark:text-[#ff7b72]" }, { text: "AdMobBanner", color: "text-[#6f42c1] dark:text-[#d2a8ff]" }, { text: "(", color: "" }] },
  { indent: 3, parts: [{ text: "adUnitId", color: "text-[#e36209] dark:text-[#ffa657]" }, { text: ": ", color: "" }, { text: "'ca-app-pub-394...'", color: "text-[#032f62] dark:text-[#a5d6ff]" }, { text: ",", color: "" }] },
  { indent: 2, parts: [{ text: ");", color: "" }] },
  { indent: 1, parts: [{ text: "}", color: "" }] },
  { indent: 0, parts: [{ text: "}", color: "" }] },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-screen-2xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Free · Practical · Project-based
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl xl:text-6xl">
            Learn. Build. <span className="text-primary">Earn.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Practical programming tutorials, app development documentation, monetization guides and
            developer tools — everything you need to ship real apps and grow your income.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/ai">
                Learn AI
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/digital-marketing">Learn Digital Marketing</Link>
            </Button>
          </div>

          <p className="mt-6">
            <Link
              href="/docs"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Prefer coding? Explore the documentation →
            </Link>
          </p>

          <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            {["Flutter", "Firebase", "AI", "ChatGPT", "SEO", "Monetization"].map((topic, index) => (
              <span key={topic} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true" className="text-border">·</span>}
                {topic}
              </span>
            ))}
          </p>
        </div>

        {/* Developer-themed visual */}
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="rounded-xl border bg-zinc-50 shadow-md dark:bg-[#0d1117]">
            <div className="flex h-9 items-center justify-between border-b px-4 dark:border-b-white/10">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">main.dart</span>
            </div>
            <pre className="overflow-hidden p-5 font-mono text-[13px] leading-relaxed">
              <code>
                {CODE_LINES.map((line, index) => (
                  <div key={index} style={{ paddingLeft: line.indent * 16 }}>
                    {line.blank ? "\u00A0" : null}
                    {line.parts.map((part, partIndex) => (
                      <span key={partIndex} className={part.color}>
                        {part.text}
                      </span>
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          </div>

          <div className="absolute -bottom-7 -left-7 w-56 rounded-xl border bg-background p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-muted-foreground">Monthly revenue</p>
              <TrendingUp className="size-3.5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="mt-1.5 text-2xl font-bold tracking-tight tabular-nums">$1,248</p>
            <div className="mt-3 flex h-9 items-end gap-1" role="presentation">
              {[35, 45, 40, 55, 50, 70, 65, 85, 80, 100].map((height, index) => (
                <span
                  key={index}
                  className="w-full rounded-sm bg-emerald-500/25"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
