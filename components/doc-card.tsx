import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import { CategoryIcon } from "@/components/category-icon";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { formatDate } from "@/lib/format";
import type { DocMeta } from "@/lib/types";
import { cn } from "@/lib/utils";

interface DocCardProps {
  doc: DocMeta;
  showButton?: boolean;
  className?: string;
}

export function DocCard({ doc, showButton = true, className }: DocCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
        <CategoryIcon slug={doc.categorySlug} withLabel />
        <span aria-hidden="true">·</span>
        <DifficultyBadge difficulty={doc.difficulty} />
      </div>
      <h3 className="font-semibold leading-snug tracking-tight">
        <Link href={doc.url} className="outline-none focus-visible:ring-2 focus-visible:ring-ring">
          {doc.title}
        </Link>
      </h3>
      <p className="mt-2 mb-4 line-clamp-2 text-sm text-muted-foreground">{doc.description}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" aria-hidden="true" />
            {doc.readingTime} min read
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="size-3" aria-hidden="true" />
            <time dateTime={doc.publishedAt}>{formatDate(doc.publishedAt)}</time>
          </span>
        </div>
        {showButton && (
          <span className="inline-flex items-center gap-1 font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100 max-sm:opacity-100">
            Read documentation
            <ArrowRight className="size-3" aria-hidden="true" />
          </span>
        )}
      </div>
    </article>
  );
}
