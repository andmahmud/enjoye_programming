import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TopicDetails } from "@/components/curriculum/topic-details";
import {
  getCategoryTopicNavigation,
  getCurriculumCategory,
  getCurriculumSection,
  getCurriculumTopic,
} from "@/lib/curriculum";
import { siteConfig } from "@/lib/site";

const SECTION_SLUG = "ai";

interface TopicPageProps {
  params: Promise<{ category: string; topic: string }>;
}

export function generateStaticParams() {
  const section = getCurriculumSection(SECTION_SLUG);
  return (
    section?.categories.flatMap((category) =>
      category.topics.map((topic) => ({ category: category.slug, topic: topic.slug })),
    ) ?? []
  );
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { category: categorySlug, topic: topicSlug } = await params;
  const topic = getCurriculumTopic(SECTION_SLUG, categorySlug, topicSlug);
  const category = getCurriculumCategory(SECTION_SLUG, categorySlug);
  if (!topic || !category) return {};

  return {
    title: `${topic.title} – AI Learning Tutorial`,
    description: topic.description,
    keywords: [...topic.tags, category.name, "AI learning", "AI tutorial"],
    alternates: { canonical: `/ai/${category.slug}/${topic.slug}` },
    openGraph: {
      type: "article",
      title: `${topic.title} – AI Learning Tutorial | ${siteConfig.name}`,
      description: topic.description,
      url: `${siteConfig.url}/ai/${category.slug}/${topic.slug}`,
      siteName: siteConfig.name,
      tags: topic.tags,
    },
  };
}

export default async function AiTopicPage({ params }: TopicPageProps) {
  const { category: categorySlug, topic: topicSlug } = await params;
  const section = getCurriculumSection(SECTION_SLUG);
  const category = getCurriculumCategory(SECTION_SLUG, categorySlug);
  const topic = getCurriculumTopic(SECTION_SLUG, categorySlug, topicSlug);
  if (!section || !category || !topic) notFound();

  const position = category.topics.findIndex((entry) => entry.slug === topic.slug) + 1;
  const { prev, next } = getCategoryTopicNavigation(category, topic.slug);
  const otherTopics = category.topics.filter((entry) => entry.slug !== topic.slug);
  const relatedCategories = section.categories
    .filter((entry) => entry.slug !== category.slug)
    .slice(0, 3);

  return (
    <TopicDetails
      section={section}
      category={category}
      topic={topic}
      position={position}
      prevTopic={prev}
      nextTopic={next}
      otherTopics={otherTopics}
      relatedCategories={relatedCategories}
    />
  );
}