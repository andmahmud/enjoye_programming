import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CategoryIcon } from "@/components/category-icon";
import { categories } from "@/lib/categories";
import { getDocsByCategory } from "@/lib/docs";

const POPULAR_SLUGS = [
  "flutter",
  "dart",
  "firebase",
  "admob",
  "play-store",
  "app-monetization",
  "api",
  "android",
];

export function PopularTopics() {
  const topics = POPULAR_SLUGS.map((slug) => ({
    category: categories.find((entry) => entry.slug === slug)!,
    count: getDocsByCategory(slug).length,
  }));

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Popular Topics</h2>
            <p className="mt-2 text-muted-foreground">
              Jump straight into the topics developers ask about the most.
            </p>
          </div>
          <Link
            href="/docs"
            className="hidden shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline sm:block"
          >
            View all documentation
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map(({ category, count }) => (
            <Link
              key={category.slug}
              href={`/docs/${category.slug}`}
              className="group relative flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <ArrowUpRight className="absolute top-4 right-4 size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              <CategoryIcon slug={category.slug} />
              <p className="mt-4 font-semibold">{category.name}</p>
              <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{category.tagline}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {count} {count === 1 ? "article" : "articles"}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
