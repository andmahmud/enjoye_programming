import { ArrowRight, BookOpen, FileText } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CategoryIcon } from "@/components/category-icon";
import { DocCard } from "@/components/doc-card";
import { categories } from "@/lib/categories";
import { getDocCount, getDocsByCategory, getDoc, getLatestDocs } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Guides and tutorials for Flutter, Dart, Firebase, AdMob, Google Play publishing and app monetization — written for real-world app development.",
  alternates: { canonical: "/docs" },
};

export default function DocsIndexPage() {
  const featured = getDoc("app-monetization", "how-to-make-money-from-apps");

  return (
    <div className="max-w-5xl">
      <header className="mb-12">
        <p className="flex items-center gap-2 text-sm font-medium text-primary">
          <BookOpen className="size-4" aria-hidden="true" />
          Documentation
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Learn. Build. Earn.</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          Everything you need to build, publish and monetize apps — {getDocCount()} in-depth guides
          across {categories.length} topics, with new documentation added alongside every video.
        </p>
      </header>

      {featured && (
        <Link
          href={featured.url}
          className="group mb-10 flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm transition-colors hover:border-primary/30 sm:flex-row sm:items-center"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <FileText className="size-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-wide text-primary uppercase">Start here</p>
            <p className="mt-1 font-semibold">{featured.title}</p>
            <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{featured.description}</p>
          </div>
          <ArrowRight
            className="ml-auto hidden size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 sm:block"
            aria-hidden="true"
          />
        </Link>
      )}

      <h2 className="sr-only">All documentation categories</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const docs = getDocsByCategory(category.slug);
          return (
            <article
              key={category.slug}
              className="group relative flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40"
            >
              <div className="flex items-center justify-between">
                <CategoryIcon slug={category.slug} />
                <ArrowRight
                  className="size-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 font-semibold">
                <Link href={`/docs/${category.slug}`} className="outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {category.name}
                </Link>
              </h3>
              <p className="mt-1 mb-3 line-clamp-2 text-sm text-muted-foreground">
                {category.tagline}
              </p>
              <p className="mt-auto text-xs text-muted-foreground">
                {docs.length} {docs.length === 1 ? "guide" : "guides"}
              </p>
            </article>
          );
        })}
      </div>

      <section aria-labelledby="all-guides-heading" className="mt-16">
        <h2 id="all-guides-heading" className="text-xl font-bold tracking-tight">
          Recently published
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {getLatestDocs(6).map((doc) => (
            <DocCard key={doc.url} doc={doc} showButton={false} />
          ))}
        </div>
      </section>
    </div>
  );
}
