import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { CurriculumCategory } from "@/lib/curriculum";
import { cn } from "@/lib/utils";

export function CurriculumCategoryCard({
  sectionSlug,
  category,
}: {
  sectionSlug: string;
  category: CurriculumCategory;
}) {
  const Icon = category.icon;
  const topicCount = category.topics.length;

  return (
    <Link
      href={`/${sectionSlug}/${category.slug}`}
      className="group relative flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "inline-flex size-10 shrink-0 items-center justify-center rounded-lg",
            category.accentClass,
          )}
        >
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <ArrowRight
          className="size-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-4 font-semibold">{category.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{category.tagline}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        {topicCount} {topicCount === 1 ? "tutorial" : "tutorials"}
      </p>
    </Link>
  );
}