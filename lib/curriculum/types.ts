import type { LucideIcon } from "lucide-react";

export type CurriculumDifficulty = "Beginner" | "Intermediate" | "Advanced";

/** A block within a lesson body. */
export interface CurriculumLessonSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  /** Short callout that reinforces the section. */
  tip?: string;
}

export interface CurriculumTopic {
  /** Unique slug within the section, e.g. "getting-started" */
  slug: string;
  title: string;
  description: string;
  difficulty: CurriculumDifficulty;
  /** Estimated effort, e.g. "14 min" */
  duration: string;
  tags: string[];
  /** Optional destination override. When absent, the topic links to its own details page. */
  href?: string;
  /** "What you'll learn" list shown at the top of the details page. */
  objectives?: string[];
  /** Full lesson body rendered on the topic details page. */
  lesson?: CurriculumLessonSection[];
  /** Key takeaways shown after the lesson. */
  takeaways?: string[];
  /** Short exercise the reader can try right away. */
  practice?: string;
}

export interface CurriculumCategory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  /** Icon chip classes, e.g. "bg-sky-500/10 text-sky-600 dark:text-sky-400" */
  accentClass: string;
  topics: CurriculumTopic[];
}

export interface CurriculumStep {
  title: string;
  description: string;
}

export interface CurriculumResource {
  type: string;
  name: string;
  description: string;
  href: string;
}

export interface CurriculumSection {
  /** Top-level URL segment, e.g. "ai" */
  slug: string;
  name: string;
  headline: string;
  description: string;
  intro: string;
  heroBadge: { icon: LucideIcon; label: string };
  /** Short snippet topics shown under the hero CTA */
  teasers: string[];
  categories: CurriculumCategory[];
  learningPath: CurriculumStep[];
  resources: CurriculumResource[];
  /** [{ categorySlug, topicSlug }] rendered as the "Popular tutorials" row */
  popularTopics: { categorySlug: string; topicSlug: string }[];
}