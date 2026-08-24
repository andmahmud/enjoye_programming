import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { DocCard } from "@/components/doc-card";
import { getLatestDocs } from "@/lib/docs";

export function LatestTutorials() {
  const latest = getLatestDocs(4);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Latest Tutorials</h2>
            <p className="mt-2 text-muted-foreground">
              Fresh guides from the channel — each one paired with full written documentation.
            </p>
          </div>
          <Link
            href="/tutorials"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline sm:inline-flex"
          >
            View all tutorials
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {latest.map((doc) => (
            <DocCard key={doc.url} doc={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
