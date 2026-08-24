import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";

import { tools } from "@/lib/tools";

export function ToolsSection() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Developer Tools</h2>
            <p className="mt-2 text-muted-foreground">
              Free, fast calculators to plan your app business with real numbers.
            </p>
          </div>
          <Link
            href="/tools"
            className="hidden shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline sm:block"
          >
            View all tools
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <span
                className={`inline-flex size-10 items-center justify-center rounded-lg ${tool.accentClass}`}
              >
                <tool.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-semibold">{tool.name}</p>
              <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{tool.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary">
                Open tool
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-6 flex items-start justify-center gap-2 text-center text-xs text-muted-foreground">
          <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          Calculator results are estimates for educational purposes only. Actual earnings vary by
          traffic, country, ad demand and engagement.
        </p>
      </div>
    </section>
  );
}
