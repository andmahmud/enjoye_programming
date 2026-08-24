import fs from "node:fs";
import path from "node:path";

import BananaSlug from "github-slugger";
import matter from "gray-matter";

import { categories } from "@/lib/categories";
import type { Difficulty, Doc, DocMeta, SearchDoc, SidebarGroup, TocHeading } from "@/lib/types";
import { siteConfig } from "@/lib/site";

const CONTENT_DIR = path.join(process.cwd(), "content", "docs");

const DIFFICULTIES: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];

interface RawDocFile {
  categorySlug: string;
  fileSlug: string;
  absolutePath: string;
}

let docsCache: Doc[] | null = null;

function listRawDocFiles(): RawDocFile[] {
  const files: RawDocFile[] = [];

  for (const entry of fs.readdirSync(CONTENT_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const categoryDir = path.join(CONTENT_DIR, entry.name);
    for (const file of fs.readdirSync(categoryDir, { withFileTypes: true })) {
      if (!file.isFile() || !file.name.endsWith(".mdx")) continue;
      files.push({
        categorySlug: entry.name,
        fileSlug: file.name.replace(/\.mdx$/, ""),
        absolutePath: path.join(categoryDir, file.name),
      });
    }
  }

  return files;
}

/**
 * Extract h2/h3 headings (with GitHub-style anchor ids) from MDX source.
 * Mirrors what rehype-slug generates so TOC links match heading ids.
 */
function extractHeadings(source: string): TocHeading[] {
  const withoutCode = source
    .split("\n")
    .reduce<{ lines: string[]; inFence: boolean }>(
      (acc, line) => {
        if (acc.inFence) {
          if (/^\s*(```|~~~)/.test(line)) acc.inFence = false;
          return acc;
        }
        if (/^\s*(```|~~~)/.test(line)) {
          acc.inFence = true;
          return acc;
        }
        acc.lines.push(line);
        return acc;
      },
      { lines: [], inFence: false },
    )
    .lines.join("\n");

  const slugger = new BananaSlug();
  const headings: TocHeading[] = [];
  // Match every heading level so duplicate slugs stay in sync with rehype-slug.
  const pattern = /^(#{2,6})\s+(.+?)\s*#*\s*$/gm;

  let match: RegExpExecArray | null;
  while ((match = pattern.exec(withoutCode)) !== null) {
    const level = match[1].length;
    const rawText = match[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_~`]/g, "")
      .trim();
    if (!rawText) continue;
    const id = slugger.slug(rawText);
    if (level === 2 || level === 3) {
      headings.push({ level, text: rawText, id });
    }
  }

  return headings;
}

function stripMarkdownForExcerpt(content: string): string {
  return content
    .replace(/^---[\s\S]*?---/, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/^\s*(?:import|export)\s+.*$/gm, " ")
    .replace(/<[^>]+>/g, " ") // JSX elements
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[`*_~>#|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseDoc(file: RawDocFile): Doc {
  const source = fs.readFileSync(file.absolutePath, "utf8");
  const { data, content } = matter(source);

  const title = typeof data.title === "string" && data.title.trim() ? data.title.trim() : "";
  const description =
    typeof data.description === "string" ? data.description.trim() : "";

  if (!title || !description) {
    throw new Error(
      `Documentation file "${path.relative(process.cwd(), file.absolutePath)}" must define "title" and "description" in its frontmatter.`,
    );
  }

  const difficulty: Difficulty = DIFFICULTIES.includes(data.difficulty as Difficulty)
    ? (data.difficulty as Difficulty)
    : "Beginner";

  const wordsPerMinute = 200;
  const computedReadingTime = Math.max(1, Math.round(stripMarkdownForExcerpt(content).split(/\s+/).length / wordsPerMinute));
  const readingTime =
    typeof data.readingTime === "number" && data.readingTime > 0
      ? Math.round(data.readingTime)
      : computedReadingTime;

  const publishedAt =
    typeof data.publishedAt === "string"
      ? data.publishedAt
      : new Date().toISOString().slice(0, 10);

  const doc: Doc = {
    slug: `${file.categorySlug}/${file.fileSlug}`,
    categorySlug: file.categorySlug,
    title,
    description,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    difficulty,
    readingTime,
    publishedAt,
    youtube: typeof data.youtube === "string" && data.youtube.trim() ? data.youtube.trim() : undefined,
    order: typeof data.order === "number" ? data.order : Number.MAX_SAFE_INTEGER,
    url: `/docs/${file.categorySlug}/${file.fileSlug}`,
    headings: extractHeadings(content),
    content,
  };

  return doc;
}

const categoryOrder = new Map(categories.map((category, index) => [category.slug, index]));

function sortDocs(docs: Doc[]): Doc[] {
  return [...docs].sort((a, b) => {
    const catDiff = (categoryOrder.get(a.categorySlug) ?? 999) - (categoryOrder.get(b.categorySlug) ?? 999);
    if (catDiff !== 0) return catDiff;
    if (a.order !== b.order) return a.order - b.order;
    return a.title.localeCompare(b.title);
  });
}

export function getAllDocs(): Doc[] {
  if (!docsCache) {
    docsCache = sortDocs(listRawDocFiles().map(parseDoc));
  }
  return docsCache;
}

export function getDocMetas(): DocMeta[] {
  return getAllDocs().map(({ content: _content, ...meta }) => meta);
}

export function getDocsByCategory(categorySlug: string): Doc[] {
  return getAllDocs().filter((doc) => doc.categorySlug === categorySlug);
}

export function getDoc(categorySlug: string, fileSlug: string): Doc | undefined {
  return getAllDocs().find((doc) => doc.slug === `${categorySlug}/${fileSlug}`);
}

export function getLatestDocs(limit: number): DocMeta[] {
  return [...getAllDocs()]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit)
    .map(({ content: _content, ...meta }) => meta);
}

export function getAdjacentDocs(doc: Doc): { prev?: DocMeta; next?: DocMeta } {
  const all = getAllDocs();
  const index = all.findIndex((candidate) => candidate.slug === doc.slug);
  if (index === -1) return {};
  const toMeta = ({ content: _content, ...meta }: Doc): DocMeta => meta;
  return {
    prev: index > 0 ? toMeta(all[index - 1]) : undefined,
    next: index < all.length - 1 ? toMeta(all[index + 1]) : undefined,
  };
}

export function getRelatedDocs(doc: Doc, limit = 3): DocMeta[] {
  const sameCategory = getAllDocs().filter(
    (candidate) => candidate.categorySlug === doc.categorySlug && candidate.slug !== doc.slug,
  );
  const others = getAllDocs()
    .filter((candidate) => candidate.categorySlug !== doc.categorySlug)
    .sort((a, b) => {
      const overlap = (cand: Doc) => cand.tags.filter((tag) => doc.tags.includes(tag)).length;
      return overlap(b) - overlap(a);
    });
  return [...sameCategory, ...others].slice(0, limit).map(({ content: _content, ...meta }) => meta);
}

export function buildSidebar(): SidebarGroup[] {
  return categories
    .map((category) => ({
      slug: category.slug,
      name: category.name,
      docs: getDocsByCategory(category.slug).map((doc) => ({ title: doc.title, url: doc.url })),
    }))
    .filter((group) => group.docs.length > 0);
}

export function buildSearchIndex(): SearchDoc[] {
  return getAllDocs().map((doc) => {
    const category = categories.find((entry) => entry.slug === doc.categorySlug);
    return {
      title: doc.title,
      description: doc.description,
      categorySlug: doc.categorySlug,
      categoryName: category?.name ?? doc.categorySlug,
      url: doc.url,
      tags: doc.tags,
      difficulty: doc.difficulty,
      readingTime: doc.readingTime,
      headings: doc.headings.map((heading) => heading.text),
      excerpt: stripMarkdownForExcerpt(doc.content).slice(0, 320),
    };
  });
}

export function getDocCount(): number {
  return getAllDocs().length;
}

export function absoluteUrl(pathname: string): string {
  return `${siteConfig.url}${pathname}`;
}
