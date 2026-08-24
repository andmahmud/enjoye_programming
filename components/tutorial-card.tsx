import { CalendarDays, Play } from "lucide-react";
import Link from "next/link";

import { CategoryIcon } from "@/components/category-icon";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { formatDate } from "@/lib/format";
import { siteConfig } from "@/lib/site";
import type { Tutorial } from "@/content/tutorials";

export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  const watchHref = tutorial.youtubeUrl ?? siteConfig.youtubeUrl;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-colors hover:border-primary/30">
      {/* Thumbnail (generated — no external assets needed) */}
      <div className="relative aspect-video overflow-hidden border-b bg-muted/60">
        <div className="absolute inset-0 flex items-center justify-center">
          <CategoryIcon slug={tutorial.categorySlug} className="size-14 rounded-xl opacity-90" />
        </div>
        <span
          className="absolute inset-0 m-auto flex size-12 items-center justify-center rounded-full bg-black/70 text-white shadow-md transition-transform group-hover:scale-105"
          aria-hidden="true"
        >
          <Play className="ml-0.5 size-5 fill-current" />
        </span>
        <span className="absolute right-2.5 bottom-2.5 rounded-md bg-black/80 px-1.5 py-0.5 font-mono text-[11px] font-medium text-white">
          {tutorial.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-muted-foreground">
          <CategoryIcon slug={tutorial.categorySlug} withLabel />
          <DifficultyBadge difficulty={tutorial.difficulty} />
        </div>

        <h3 className="mt-3 leading-snug font-semibold text-[0.95rem]">{tutorial.title}</h3>
        <p className="mt-1.5 mb-4 line-clamp-2 text-sm text-muted-foreground">
          {tutorial.description}
        </p>

        <p className="mt-auto flex items-center gap-1.5 text-xs text-muted-foreground">
          <CalendarDays className="size-3" aria-hidden="true" />
          <time dateTime={tutorial.publishedAt}>{formatDate(tutorial.publishedAt)}</time>
        </p>

        <div className="mt-3.5 grid grid-cols-2 gap-2">
          <a
            href={watchHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md border bg-background text-xs font-medium shadow-sm transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <Play className="size-3" aria-hidden="true" />
            Watch video
          </a>
          {tutorial.docsPath ? (
            <Link
              href={tutorial.docsPath}
              className="inline-flex h-8 items-center justify-center rounded-md bg-primary text-xs font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Read docs
            </Link>
          ) : (
            <Link
              href="/docs"
              className="inline-flex h-8 items-center justify-center rounded-md bg-secondary text-xs font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              Browse docs
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
