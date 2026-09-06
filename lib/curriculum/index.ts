import { BrainCircuit, Share2 } from "lucide-react";

import { siteConfig } from "@/lib/site";

import { aiCategories1 } from "./data/ai-categories-1";
import { aiCategories2 } from "./data/ai-categories-2";
import { aiCategories3 } from "./data/ai-categories-3";
import { dmCategories1 } from "./data/dm-categories-1";
import { dmCategories2 } from "./data/dm-categories-2";
import { dmCategories3 } from "./data/dm-categories-3";
import { dmCategories4 } from "./data/dm-categories-4";
import type { CurriculumCategory, CurriculumSection, CurriculumTopic } from "./types";

export type {
  CurriculumCategory,
  CurriculumDifficulty,
  CurriculumLessonSection,
  CurriculumResource,
  CurriculumSection,
  CurriculumStep,
  CurriculumTopic,
} from "./types";

export const curriculumSections: CurriculumSection[] = [
  /* ------------------------------------------------------------------ */
  /*  AI                                                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "ai",
    name: "AI",
    headline: "Learn AI. Build Smarter. Work Faster.",
    description:
      "Learn modern AI tools, concepts, prompting, automation, and practical AI skills to build smarter solutions and grow your career.",
    intro:
      "AI is changing how we build, write, work and create. This learning section guides you from the fundamentals — how models work and how to prompt them — through practical skills you can use the same day: AI tools, content, automation, agents and AI-powered apps.",
    heroBadge: { icon: BrainCircuit, label: "AI Learning" },
    teasers: ["ChatGPT", "Prompt Engineering", "Generative AI", "Automation", "AI Agents", "AI Apps"],
    categories: [...aiCategories1, ...aiCategories2, ...aiCategories3],
    popularTopics: [
      { categorySlug: "ai-fundamentals", topicSlug: "getting-started" },
      { categorySlug: "chatgpt", topicSlug: "getting-started" },
      { categorySlug: "prompt-engineering", topicSlug: "basics" },
      { categorySlug: "generative-ai", topicSlug: "what-generative-ai-can-create" },
      { categorySlug: "ai-tools", topicSlug: "the-ai-tool-stack" },
      { categorySlug: "ai-for-developers", topicSlug: "ai-apis-explained" },
      { categorySlug: "ai-automation", topicSlug: "first-workflow" },
      { categorySlug: "ai-app-development", topicSlug: "planning-an-ai-app" },
    ],
    learningPath: [
      {
        title: "Start with the fundamentals",
        description: "Understand what AI is, the core terms and how modern models work.",
      },
      {
        title: "Learn to prompt well",
        description: "Master prompt engineering and get useful results from ChatGPT and similar tools.",
      },
      {
        title: "Explore generative tools",
        description: "Create text, images, audio and code with today's generative AI tools.",
      },
      {
        title: "Apply AI to your work",
        description: "Build real workflows, content pipelines and automation for your projects or clients.",
      },
      {
        title: "Build with AI",
        description: "Add AI to apps and experiments — APIs, chat UIs and small automated agents.",
      },
      {
        title: "Keep shipping",
        description: "Turn AI skills into deliverables and products that grow your career or business.",
      },
    ],
    resources: [
      {
        type: "Guide",
        name: "Documentation Hub",
        description:
          "Search all Enjoye Programming guides — including developer content on APIs and automation.",
        href: "/docs",
      },
      {
        type: "Path",
        name: "AI App Planning Checklist",
        description: "Scope features, costs and safety before building your first AI product.",
        href: "/ai/ai-app-development",
      },
      {
        type: "Path",
        name: "AI for Developers Path",
        description: "Follow the AI-for-developers path to add intelligence to your apps.",
        href: "/ai/ai-for-developers",
      },
      {
        type: "Video",
        name: "Enjoye Programming on YouTube",
        description: "Watch practical tutorials on development, automation and AI workflows.",
        href: siteConfig.youtubeUrl,
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /*  Digital Marketing                                                  */
  /* ------------------------------------------------------------------ */
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    headline: "Learn Digital Marketing. Grow. Earn.",
    description:
      "Master SEO, social media, advertising, content marketing, analytics, and practical digital marketing strategies to grow brands and build online income.",
    intro:
      "Digital marketing is the fastest way to turn skills into an online income. This learning section takes you from the fundamentals of channels and funnels, through SEO, social media and paid ads — all the way to analytics, freelancing and marketing automation.",
    heroBadge: { icon: Share2, label: "Digital Marketing" },
    teasers: ["SEO", "Social Media", "Google Ads", "Content", "Email", "Analytics"],
    categories: [...dmCategories1, ...dmCategories2, ...dmCategories3, ...dmCategories4],
    popularTopics: [
      { categorySlug: "digital-marketing-fundamentals", topicSlug: "marketing-101" },
      { categorySlug: "seo", topicSlug: "seo-fundamentals" },
      { categorySlug: "facebook-marketing", topicSlug: "facebook-ads-beginners" },
      { categorySlug: "instagram-marketing", topicSlug: "reels-short-form" },
      { categorySlug: "google-ads", topicSlug: "google-ads-basics" },
      { categorySlug: "google-analytics", topicSlug: "analytics-basics" },
      { categorySlug: "affiliate-marketing", topicSlug: "affiliate-basics" },
      { categorySlug: "freelancing-client-acquisition", topicSlug: "where-to-find-clients" },
    ],
    learningPath: [
      {
        title: "Learn the fundamentals",
        description: "Understand channels, funnels and how marketing drives real growth.",
      },
      {
        title: "Master your channels",
        description: "Pick two channels and get genuinely good — content, social or SEO.",
      },
      {
        title: "Learn paid advertising",
        description: "Run small, measurable campaigns on Google and Facebook with budgets you control.",
      },
      {
        title: "Measure everything",
        description: "Use analytics to see what works, then double down on what performs.",
      },
      {
        title: "Get clients & freelance",
        description: "Package your skills into services and win your first paying clients.",
      },
      {
        title: "Automate & scale",
        description: "Automate repetitive work so your marketing scales without your time.",
      },
    ],
    resources: [
      {
        type: "Guide",
        name: "Documentation Hub",
        description:
          "Practical guides on building, publishing and monetizing products — a developer's edge in marketing.",
        href: "/docs",
      },
      {
        type: "Playbook",
        name: "Make Money From Apps",
        description: "Turn your audience into income with proven monetization models.",
        href: "/app-monetization",
      },
      {
        type: "Path",
        name: "Freelancing Path",
        description: "Package your marketing skills and win clients with the freelancing guides.",
        href: "/digital-marketing/freelancing-client-acquisition",
      },
      {
        type: "Video",
        name: "Enjoye Programming on YouTube",
        description: "Tutorials on building products, apps and online income streams.",
        href: siteConfig.youtubeUrl,
      },
    ],
  },
];

const sectionMap = new Map(curriculumSections.map((section) => [section.slug, section]));

export function getCurriculumSections(): CurriculumSection[] {
  return curriculumSections;
}

export function getCurriculumSection(slug: string): CurriculumSection | undefined {
  return sectionMap.get(slug);
}

export function getCurriculumCategory(
  sectionSlug: string,
  categorySlug: string,
): CurriculumCategory | undefined {
  return getCurriculumSection(sectionSlug)?.categories.find((category) => category.slug === categorySlug);
}

export function getCurriculumTopic(
  sectionSlug: string,
  categorySlug: string,
  topicSlug: string,
): CurriculumTopic | undefined {
  return getCurriculumCategory(sectionSlug, categorySlug)?.topics.find(
    (topic) => topic.slug === topicSlug,
  );
}

export function getCurriculumCategoryCount(): number {
  return curriculumSections.reduce(
    (total, section) => total + section.categories.reduce((sum, category) => sum + category.topics.length, 0),
    0,
  );
}

/** Resolve a popular-topic reference to its topic + owning category. */
export function resolvePopularTopic(
  section: CurriculumSection,
  ref: { categorySlug: string; topicSlug: string },
): { category: CurriculumCategory; topic: CurriculumTopic } | undefined {
  const category = section.categories.find((entry) => entry.slug === ref.categorySlug);
  const topic = category?.topics.find((entry) => entry.slug === ref.topicSlug);
  if (!category || !topic) return undefined;
  return { category, topic };
}

/** Previous and next topic within the same category, for details-page navigation. */
export function getCategoryTopicNavigation(
  category: CurriculumCategory,
  topicSlug: string,
): { prev?: CurriculumTopic; next?: CurriculumTopic } {
  const index = category.topics.findIndex((topic) => topic.slug === topicSlug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? category.topics[index - 1] : undefined,
    next: index < category.topics.length - 1 ? category.topics[index + 1] : undefined,
  };
}

/** Common section links used across the site (nav / footer / homepage). */
export const curriculumNav = {
  ai: { href: "/ai", label: "AI" },
  digitalMarketing: { href: "/digital-marketing", label: "Digital Marketing" },
  programming: { href: "/programming", label: "Programming" },
} as const;