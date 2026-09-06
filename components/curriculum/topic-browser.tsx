"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { DifficultyBadge } from "@/components/difficulty-badge";
import { Input } from "@/components/ui/input";
import type { CurriculumDifficulty } from "@/lib/curriculum";
import { cn } from "@/lib/utils";

export interface BrowserTopic {
  slug: string;
  title: string;
  description: string;
  difficulty: CurriculumDifficulty;
  duration: string;
  tags: string[];
}

export interface BrowserCategory {
  slug: string;
  name: string;
  topics: BrowserTopic[];
}

const DIFFICULTIES: CurriculumDifficulty[] = ["Beginner", "Intermediate", "Advanced"];

export function TopicBrowser({
  sectionSlug,
  categories,
}: {
  sectionSlug: string;
  categories: BrowserCategory[];
}) {
  const [query, setQuery] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState<string | "all">("all");
  const [activeDifficulty, setActiveDifficulty] = React.useState<CurriculumDifficulty | "all">("all");

  const totalCount = React.useMemo(
    () => categories.reduce((sum, category) => sum + category.topics.length, 0),
    [categories],
  );

  const results = React.useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const matched: { category: BrowserCategory; topic: BrowserTopic }[] = [];

    for (const category of categories) {
      if (activeCategory !== "all" && category.slug !== activeCategory) continue;
      for (const topic of category.topics) {
        if (activeDifficulty !== "all" && topic.difficulty !== activeDifficulty) continue;
        if (terms.length > 0) {
          const haystack = `${topic.title} ${topic.description} ${topic.tags.join(" ")} ${category.name}`.toLowerCase();
          if (!terms.every((term) => haystack.includes(term))) continue;
        }
        matched.push({ category, topic });
      }
    }
    return matched;
  }, [categories, query, activeCategory, activeDifficulty]);

  function resetFilters() {
    setQuery("");
    setActiveCategory("all");
    setActiveDifficulty("all");
  }

  return (
    <section className="border-t py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Browse All Tutorials</h2>
            <p className="mt-2 text-muted-foreground">
              Search every {totalCount} tutorial in this learning section by keyword, category or
              difficulty.
            </p>
          </div>
          <div className="relative w-full lg:w-96">
            <Search
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search tutorials..."
              className="pl-9"
              aria-label="Search tutorials"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full border px-3 py-1 text-sm font-medium transition-colors",
              activeCategory === "all"
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground",
            )}
          >
            All categories
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "rounded-full border px-3 py-1 text-sm font-medium transition-colors",
                activeCategory === category.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
            >
              {category.name}
            </button>
          ))}
          <span aria-hidden="true" className="hidden h-6 w-px bg-border sm:block" />
          {DIFFICULTIES.map((difficulty) => (
            <button
              key={difficulty}
              type="button"
              onClick={() =>
                setActiveDifficulty(activeDifficulty === difficulty ? "all" : difficulty)
              }
              className={cn(
                "rounded-full border px-3 py-1 text-sm font-medium transition-colors",
                activeDifficulty === difficulty
                  ? "border-primary bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground",
              )}
            >
              {difficulty}
            </button>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="mt-10 rounded-xl border border-dashed bg-card/40 px-4 py-16 text-center">
            <p className="font-medium">No tutorials match your filters</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different keyword or reset the filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map(({ category, topic }) => (
              <Link
                key={`${category.slug}/${topic.slug}`}
                href={`/${sectionSlug}/${category.slug}/${topic.slug}`}
                className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/80">{category.name}</span>
                  <span aria-hidden="true">·</span>
                  <DifficultyBadge difficulty={topic.difficulty} />
                </div>
                <h3 className="mt-3 font-semibold leading-snug tracking-tight">{topic.title}</h3>
                <p className="mt-1.5 mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground">
                  {topic.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span>{topic.duration}</span>
                  <span className="inline-flex flex-wrap gap-1.5">
                    {topic.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}