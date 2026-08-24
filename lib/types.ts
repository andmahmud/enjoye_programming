export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface TocHeading {
  level: 2 | 3;
  text: string;
  id: string;
}

export interface DocMeta {
  /** "category/file-slug", e.g. "flutter/getting-started" */
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  tags: string[];
  difficulty: Difficulty;
  readingTime: number;
  /** ISO date, e.g. "2026-08-10" */
  publishedAt: string;
  youtube?: string;
  order: number;
  url: string;
  headings: TocHeading[];
}

export interface Doc extends DocMeta {
  content: string;
}

export interface SearchDoc {
  title: string;
  description: string;
  categorySlug: string;
  categoryName: string;
  url: string;
  tags: string[];
  difficulty: Difficulty;
  readingTime: number;
  headings: string[];
  excerpt: string;
}

export interface SidebarDoc {
  title: string;
  url: string;
}

export interface SidebarGroup {
  slug: string;
  name: string;
  docs: SidebarDoc[];
}
