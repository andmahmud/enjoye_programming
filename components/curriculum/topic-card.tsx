import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

import { DifficultyBadge } from "@/components/difficulty-badge";
import type { CurriculumCategory, CurriculumTopic } from "@/lib/curriculum";
import { cn } from "@/lib/utils";

export function TopicCard({
  sectionSlug,
  category,
  topic,
  className,
}: {
  sectionSlug: string;
  category: CurriculumCategory;
  topic: CurriculumTopic;
  className?: string;
}) {
  const href = topic.href ?? `/${sectionSlug}/${category.slug}/${topic.slug}`;
  const Icon = category.icon;

  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40",
        className,
      )}
    >
      <Link
        href={href}
        className="flex min-h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex min-w-0 items-center gap-1.5 font-medium text-foreground/80">
            <span
              className={cn(
                "inline-flex size-5 shrink-0 items-center justify-center rounded-md",
                category.accentClass,
              )}
            >
              <Icon className="size-3" aria-hidden="true" />
            </span>
            <span className="truncate">{category.name}</span>
          </span>
          <span aria-hidden="true">·</span>
          <DifficultyBadge difficulty={topic.difficulty} />
        </div>

        <h3 className="font-semibold leading-snug tracking-tight">{topic.title}</h3>
        <p className="mt-2 mb-4 line-clamp-2 text-sm text-muted-foreground">{topic.description}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" aria-hidden="true" />
            {topic.duration}
          </span>
          {topic.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] font-medium"
            >
              #{tag}
            </span>
          ))}
          <span className="inline-flex items-center gap-1 font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100 max-sm:opacity-100">
            Start learning
            <ArrowRight className="size-3" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}