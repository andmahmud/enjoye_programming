import Link from "next/link";
import { CalendarDays, ChevronRight, Clock } from "lucide-react";

import { CategoryIcon } from "@/components/category-icon";
import { DifficultyBadge } from "@/components/difficulty-badge";
import { getCategory } from "@/lib/categories";
import { formatDate } from "@/lib/format";
import type { DocMeta } from "@/lib/types";

export function DocHeader({ doc }: { doc: DocMeta }) {
  const category = getCategory(doc.categorySlug);

  return (
    <header className="mb-10">
      <nav aria-label="Breadcrumb" className="mb-5">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/docs" className="transition-colors hover:text-foreground">
              Docs
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-3.5" />
          </li>
          <li>
            <Link
              href={`/docs/${doc.categorySlug}`}
              className="transition-colors hover:text-foreground"
            >
              {category?.name ?? doc.categorySlug}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-3.5" />
          </li>
          <li aria-current="page" className="max-w-[16rem] truncate text-foreground sm:max-w-none">
            {doc.title}
          </li>
        </ol>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{doc.title}</h1>
      <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">{doc.description}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-sm text-muted-foreground">
        <CategoryIcon slug={doc.categorySlug} withLabel />
        <DifficultyBadge difficulty={doc.difficulty} />
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3.5" aria-hidden="true" />
          {doc.readingTime} min read
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-3.5" aria-hidden="true" />
          Published{" "}
          <time dateTime={doc.publishedAt} className="text-foreground/80">
            {formatDate(doc.publishedAt)}
          </time>
        </span>
      </div>

      {doc.tags.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {doc.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border bg-muted/50 px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
