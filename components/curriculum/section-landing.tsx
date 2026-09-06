import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

import { CurriculumHero } from "@/components/curriculum/curriculum-hero";
import { CurriculumCategoryCard } from "@/components/curriculum/category-card";
import { FeaturedResources } from "@/components/curriculum/featured-resources";
import { LearningPath } from "@/components/curriculum/learning-path";
import { TopicBrowser } from "@/components/curriculum/topic-browser";
import { TopicCard } from "@/components/curriculum/topic-card";
import { Button } from "@/components/ui/button";
import type { CurriculumSection } from "@/lib/curriculum";
import { resolvePopularTopic } from "@/lib/curriculum";

export function CurriculumSectionLanding({ section }: { section: CurriculumSection }) {
  const fundamentalsSlug = section.categories[0]?.slug;
  const featured = section.popularTopics
    .map((ref) => resolvePopularTopic(section, ref))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  return (
    <main>
      <CurriculumHero
        section={section}
        primaryCta={{
          href: `/${section.slug}/${fundamentalsSlug}`,
          label: "Start with fundamentals",
        }}
      />

      {/* Short introduction */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <BookOpen className="size-4" aria-hidden="true" />
              Why learn {section.name.toLowerCase()} here
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              Practical skills, explained in plain language — no fluff.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{section.intro}</p>
          </div>
        </div>
      </section>

      {/* Learning categories */}
      <section className="border-t border-b bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {section.name} Learning Categories
              </h2>
              <p className="mt-2 text-muted-foreground">
                Pick a category and start with the beginner tutorials inside.
              </p>
            </div>
            <Link
              href={`/${section.slug}/${fundamentalsSlug}`}
              className="hidden shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline sm:block"
            >
              Start from the beginning
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {section.categories.map((category) => (
              <CurriculumCategoryCard key={category.slug} sectionSlug={section.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular tutorials */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Popular {section.name} Tutorials</h2>
              <p className="mt-2 text-muted-foreground">
                The most useful starting points, hand-picked across categories.
              </p>
            </div>
            <Link
              href={`/${section.slug}/${fundamentalsSlug}`}
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline sm:inline-flex"
            >
              Explore all categories
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>

          {featured.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map(({ category, topic }) => (
                <TopicCard
                  key={`${category.slug}/${topic.slug}`}
                  sectionSlug={section.slug}
                  category={category}
                  topic={topic}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <LearningPath steps={section.learningPath} />

      <FeaturedResources resources={section.resources} />

      <TopicBrowser
        sectionSlug={section.slug}
        categories={section.categories.map((category) => ({
          slug: category.slug,
          name: category.name,
          topics: category.topics,
        }))}
      />

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-muted/40 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to start learning {section.name.toLowerCase()}?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Follow the beginner path, or jump straight into the category that matches what you
              want to achieve today.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link href={`/${section.slug}/${fundamentalsSlug}`}>
                  Start learning
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">Explore documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}