import Link from "next/link";

import { DifficultyBadge } from "@/components/difficulty-badge";
import type { DocMeta } from "@/lib/types";

export function RelatedDocs({ docs }: { docs: DocMeta[] }) {
  if (docs.length === 0) return null;

  return (
    <section aria-labelledby="related-docs-heading" className="mt-14">
      <h2 id="related-docs-heading" className="text-lg font-semibold tracking-tight">
        Related documentation
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {docs.map((doc) => (
          <Link
            key={doc.url}
            href={doc.url}
            className="group flex flex-col rounded-xl border bg-card p-4 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
              <DifficultyBadge difficulty={doc.difficulty} />
              <span>{doc.readingTime} min read</span>
            </div>
            <p className="text-sm leading-snug font-semibold group-hover:text-primary">{doc.title}</p>
            <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">{doc.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
