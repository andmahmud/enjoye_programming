import { ArrowRight, Info } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Developer Tools",
  description:
    "Free developer calculators — app income calculator, eCPM calculator, percentage calculator and app revenue estimator.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Developer Tools</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Free, fast and privacy-friendly calculators to plan, measure and grow your app business.
        </p>
        <p className="mt-4 flex items-start gap-2 rounded-lg border bg-muted/40 p-3 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          All calculations run entirely in your browser. Nothing you type is stored or sent anywhere.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {tools.map((tool) => (
          <article
            key={tool.id}
            className="group flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-colors hover:border-primary/30"
          >
            <div className="flex items-start justify-between gap-4">
              <span
                className={`inline-flex size-12 shrink-0 items-center justify-center rounded-xl ${tool.accentClass}`}
              >
                <tool.icon className="size-6" aria-hidden="true" />
              </span>
              <ArrowRight
                className="size-5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
            <h2 className="mt-4 font-semibold">{tool.name}</h2>
            <p className="mt-1 text-sm text-primary">{tool.tagline}</p>
            <p className="mt-3 mb-4 text-sm leading-relaxed text-muted-foreground">
              {tool.description}
            </p>
            <ul className="mb-5 space-y-1.5 text-sm text-muted-foreground">
              {tool.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span
                    className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-muted-foreground/60"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href={`/tools/${tool.id}`}
              className="mt-auto inline-flex h-9 w-fit items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Open tool
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
