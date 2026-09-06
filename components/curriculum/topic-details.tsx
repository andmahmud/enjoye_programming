import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Lightbulb,
  PencilLine,
  RotateCcw,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";

import { CurriculumBreadcrumbs } from "@/components/curriculum/curriculum-breadcrumbs";
import { CurriculumCategoryCard } from "@/components/curriculum/category-card";
import { TopicCard } from "@/components/curriculum/topic-card";
import { DifficultyBadge } from "@/components/difficulty-badge";
import type { CurriculumCategory, CurriculumSection, CurriculumTopic } from "@/lib/curriculum";
import { cn } from "@/lib/utils";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TopicDetails({
  section,
  category,
  topic,
  position,
  prevTopic,
  nextTopic,
  otherTopics,
  relatedCategories,
}: {
  section: CurriculumSection;
  category: CurriculumCategory;
  topic: CurriculumTopic;
  position: number;
  prevTopic?: CurriculumTopic;
  nextTopic?: CurriculumTopic;
  otherTopics: CurriculumTopic[];
  relatedCategories: CurriculumCategory[];
}) {
  const Icon = category.icon;
  const sections =
    topic.lesson && topic.lesson.length > 0
      ? topic.lesson
      : [{ heading: "Overview", paragraphs: [topic.description] }];

  const tableOfContents = [
    { id: "what-you-ll-learn", label: "What you'll learn" },
    ...sections.map((sectionItem) => ({
      id: slugify(sectionItem.heading),
      label: sectionItem.heading,
    })),
    ...(topic.takeaways?.length ? [{ id: "key-takeaways", label: "Key takeaways" }] : []),
    ...(topic.practice ? [{ id: "practice", label: "Practice" }] : []),
  ];

  const topicHref = (slug: string) => `/${section.slug}/${category.slug}/${slug}`;

  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
      <CurriculumBreadcrumbs section={section} categoryName={category.name} />

      {/* Topic header */}
      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold",
              category.accentClass,
            )}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            {category.name}
          </span>
          <DifficultyBadge difficulty={topic.difficulty} />
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Clock className="size-3.5" aria-hidden="true" />
            {topic.duration} read
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {topic.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{topic.description}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          Tutorial {position} of {category.topics.length} in {category.name}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topic tags">
          {topic.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border bg-muted/50 px-2 py-0.5 font-mono text-xs font-medium text-muted-foreground"
            >
              #{tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        {/* Content */}
        <div className="min-w-0">
          {topic.objectives && topic.objectives.length > 0 && (
            <section
              id="what-you-ll-learn"
              className="scroll-mt-24 rounded-xl border bg-muted/30 p-6"
              aria-labelledby="what-you-ll-learn-heading"
            >
              <h2
                id="what-you-ll-learn-heading"
                className="flex items-center gap-2 text-lg font-semibold tracking-tight"
              >
                <TargetIcon />
                What you&apos;ll learn
              </h2>
              <ul className="mt-4 space-y-2.5">
                {topic.objectives.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Lesson body */}
          <article className="mt-10 space-y-10">
            {sections.map((sectionItem) => {
              const id = slugify(sectionItem.heading);
              return (
                <section key={id} id={id} className="scroll-mt-24" aria-labelledby={`${id}-h`}>
                  <h2
                    id={`${id}-h`}
                    className="flex items-start gap-2 text-2xl font-bold tracking-tight text-balance"
                  >
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {sectionItem.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {sectionItem.paragraphs.map((paragraph, index) => (
                      <p key={index} className="leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                    {sectionItem.bullets && sectionItem.bullets.length > 0 && (
                      <ul className="space-y-2.5">
                        {sectionItem.bullets.map((bullet, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/60" aria-hidden="true" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {sectionItem.tip && (
                      <aside className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed">
                        <Lightbulb className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>
                          <strong className="font-semibold text-foreground">Key tip: </strong>
                          {sectionItem.tip}
                        </span>
                      </aside>
                    )}
                  </div>
                </section>
              );
            })}
          </article>

          {/* Takeaways */}
          {topic.takeaways && topic.takeaways.length > 0 && (
            <section
              id="key-takeaways"
              className="mt-10 scroll-mt-24 rounded-xl border bg-muted/30 p-6"
              aria-labelledby="key-takeaways-heading"
            >
              <h2
                id="key-takeaways-heading"
                className="flex items-center gap-2 text-lg font-semibold tracking-tight"
              >
                <Star className="size-4 text-primary" aria-hidden="true" />
                Key takeaways
              </h2>
              <ul className="mt-4 space-y-2.5">
                {topic.takeaways.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Practice */}
          {topic.practice && (
            <section
              id="practice"
              className="mt-10 scroll-mt-24 rounded-xl border border-dashed p-6"
              aria-labelledby="practice-heading"
            >
              <h2
                id="practice-heading"
                className="flex items-center gap-2 text-lg font-semibold tracking-tight"
              >
                <PencilLine className="size-4 text-primary" aria-hidden="true" />
                Try it yourself
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{topic.practice}</p>
            </section>
          )}

          {/* Prev / Next */}
          <nav
            className="mt-12 grid grid-cols-1 gap-4 border-t border-dashed pt-8 sm:grid-cols-2"
            aria-label="Topic navigation"
          >
            <TopicNavigationLink
              href={prevTopic ? topicHref(prevTopic.slug) : `/${section.slug}/${category.slug}`}
              direction="previous"
              title={prevTopic ? prevTopic.title : "Category overview"}
            />
            <TopicNavigationLink
              href={nextTopic ? topicHref(nextTopic.slug) : `/${section.slug}/${category.slug}`}
              direction="next"
              title={nextTopic ? nextTopic.title : "Back to all topics"}
              alignEnd
            />
          </nav>
        </div>

        {/* Sidebar */}
        <aside className="lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto" aria-label="On this page">
          <div className="hidden rounded-xl border bg-card p-5 lg:block">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              On this page
            </p>
            <ul className="mt-3 space-y-1.5 border-l border-border pl-4">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border bg-card p-5">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Tutorial details
            </p>
            <dl className="mt-3 space-y-2.5 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Category</dt>
                <dd className="text-right font-medium">{category.name}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Level</dt>
                <dd>
                  <DifficultyBadge difficulty={topic.difficulty} />
                </dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Time</dt>
                <dd className="font-medium">{topic.duration}</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-muted-foreground">Part of</dt>
                <dd className="font-medium">Series {position} of {category.topics.length}</dd>
              </div>
            </dl>
            <Link
              href={`/${section.slug}/${category.slug}`}
              className="mt-5 inline-flex w-full items-center justify-center gap-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <ArrowRight className="size-3.5 rotate-180" aria-hidden="true" />
              All {category.name} tutorials
            </Link>
          </div>
        </aside>
      </div>

      {/* More in this category */}
      {otherTopics.length > 0 && (
        <section className="mt-20 border-t pt-14" aria-labelledby="more-in-category-heading">
          <h2 id="more-in-category-heading" className="text-xl font-bold tracking-tight">
            More in {category.name}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Keep the momentum with the rest of this tutorial series.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherTopics.map((entry) => (
              <TopicCard key={entry.slug} sectionSlug={section.slug} category={category} topic={entry} />
            ))}
          </div>
        </section>
      )}

      {/* Related categories */}
      {relatedCategories.length > 0 && (
        <section className="mt-20" aria-labelledby="related-categories-heading">
          <h2 id="related-categories-heading" className="text-xl font-bold tracking-tight">
            Continue learning {section.name}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Related categories on the same learning path.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCategories.map((entry) => (
              <CurriculumCategoryCard key={entry.slug} sectionSlug={section.slug} category={entry} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-14 rounded-2xl border bg-muted/40 p-8 text-center sm:p-10">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          Ready to put this into practice?
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          Revisit the tutorial details, try the practice exercise, or move to the next tutorial in
          this series.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {nextTopic ? (
            <NextCta href={topicHref(nextTopic.slug)} label={`Next: ${nextTopic.title}`} />
          ) : (
            <NextCta
              href={`/${section.slug}/${category.slug}`}
              label="Explore more tutorials"
            />
          )}
          <BackCta href={`/${section.slug}`} label={`Back to ${section.name}`} />
        </div>
      </div>
    </main>
  );
}

function TargetIcon() {
  return <RotateCcw className="size-4 rotate-180 text-primary" aria-hidden="true" />;
}

function TopicNavigationLink({
  href,
  direction,
  title,
  alignEnd = false,
}: {
  href: string;
  direction: "previous" | "next";
  title: string;
  alignEnd?: boolean;
}) {
  const isPrevious = direction === "previous";
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-xl border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-accent/40",
        alignEnd && "sm:flex-row-reverse sm:text-right",
      )}
    >
      {isPrevious ? (
        <ChevronLeft className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
      ) : (
        <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      )}
      <span className="min-w-0">
        <span className="block text-xs text-muted-foreground">
          {isPrevious ? "Previous tutorial" : "Next tutorial"}
        </span>
        <span className="mt-0.5 line-clamp-2 block text-sm font-semibold">{title}</span>
      </span>
    </Link>
  );
}

function NextCta({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
    >
      {label}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

function BackCta({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
    >
      {label}
    </Link>
  );
}