import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { CurriculumResource } from "@/lib/curriculum";

const accentByType: Record<string, string> = {
  Guide: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  Playbook: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Path: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  Video: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  Tool: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export function FeaturedResources({ resources }: { resources: CurriculumResource[] }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Resources</h2>
          <p className="mt-3 text-muted-foreground">
            Helper content, tools and paths that pair well with this learning section.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => {
            const isExternal = resource.href.startsWith("http");
            const Comp = isExternal ? "a" : Link;

            return (
              <Comp
                key={resource.name}
                href={resource.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${accentByType[resource.type] ?? "bg-primary/10 text-primary"}`}
                  >
                    {resource.type}
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-semibold">{resource.name}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {resource.description}
                </p>
              </Comp>
            );
          })}
        </div>
      </div>
    </section>
  );
}