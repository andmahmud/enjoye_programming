import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { CurriculumBreadcrumbs } from "@/components/curriculum/curriculum-breadcrumbs";
import { CurriculumCategoryCard } from "@/components/curriculum/category-card";
import { TopicCard } from "@/components/curriculum/topic-card";
import { Button } from "@/components/ui/button";
import type { CurriculumCategory, CurriculumSection } from "@/lib/curriculum";
import { cn } from "@/lib/utils";

export function CurriculumCategoryLanding({
  section,
  category,
  related,
}: {
  section: CurriculumSection;
  category: CurriculumCategory;
  related: CurriculumCategory[];
}) {
  const Icon = category.icon;

  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
      <CurriculumBreadcrumbs section={section} categoryName={category.name} />

      <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-start">
        <span
          className={cn(
            "inline-flex size-12 shrink-0 items-center justify-center rounded-xl",
            category.accentClass,
          )}
        >
          <Icon className="size-6" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{section.name} learning</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{category.description}</p>
        </div>
      </header>

      <h2 className="sr-only">All {category.name} tutorials</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.topics.map((topic) => (
          <TopicCard key={topic.slug} sectionSlug={section.slug} category={category} topic={topic} />
        ))}
      </div>

      {related.length > 0 && (
        <section aria-labelledby="continue-heading" className="mt-20">
          <h2 id="continue-heading" className="text-xl font-bold tracking-tight">
            Continue learning
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            More {section.name.toLowerCase()} categories on the same learning path.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((entry) => (
              <CurriculumCategoryCard key={entry.slug} sectionSlug={section.slug} category={entry} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-20 rounded-2xl border bg-muted/40 p-8 text-center sm:p-10">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Explore all of {section.name.toLowerCase()}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Head back to the main {section.name.toLowerCase()} page to browse every category, follow
          the learning path and find featured resources.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href={`/${section.slug}`}>
              Back to {section.name}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}