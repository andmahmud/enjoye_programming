import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import type { DocMeta } from "@/lib/types";
import { cn } from "@/lib/utils";

function PaginationLink({
  doc,
  direction,
}: {
  doc: DocMeta;
  direction: "prev" | "next";
}) {
  return (
    <Link
      href={doc.url}
      className={cn(
        "group flex min-w-0 flex-col gap-1 rounded-xl border p-4 transition-colors hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        direction === "prev" ? "items-start" : "items-end text-right",
      )}
    >
      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        {direction === "prev" ? (
          <>
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
            Previous
          </>
        ) : (
          <>
            Next
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </>
        )}
      </span>
      <span className="truncate text-sm font-medium">{doc.title}</span>
    </Link>
  );
}

export function DocPagination({ prev, next }: { prev?: DocMeta; next?: DocMeta }) {
  if (!prev && !next) return null;

  return (
    <nav aria-label="Pagination" className="mt-14 grid gap-3 border-t pt-8 sm:grid-cols-2">
      {prev ? <PaginationLink doc={prev} direction="prev" /> : <span />}
      {next ? <PaginationLink doc={next} direction="next" /> : null}
    </nav>
  );
}
