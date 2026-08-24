# Enjoye Programming — Learn. Build. Earn.

The official companion website for the **Enjoye Programming** YouTube channel — a modern developer documentation platform with tutorials, monetization guides, interactive tools and file-based MDX content.

## Tech Stack

- **Next.js 16** (App Router, React 19, Server Components)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui-style components** (Radix UI primitives)
- **MDX** via `next-mdx-remote` (file-based content, frontmatter-driven)
- **Lucide React** icons
- **next-themes** (light / dark / system)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
npm run lint     # eslint
```

## Project Structure

```text
app/                    # Routes (App Router)
  docs/                 # Documentation system
  tutorials/            # Video tutorials index
  tools/[tool]/         # Interactive calculators
  app-monetization/     # Monetization landing page
components/
  ui/                   # Design-system primitives (button, card…)
  mdx/                  # CodeBlock, Callout, YouTubeVideo…
  docs/                 # Sidebar, TOC, pagination…
  home/                 # Homepage sections
content/
  docs/<category>/      # ← All documentation (MDX + frontmatter)
  tutorials/index.ts    # Tutorial data
lib/
  docs.ts               # Content layer: parsing, sidebar, search, related
  categories.ts         # Category registry (add new topics here)
  tools.ts              # Tool registry
```

## Adding a Documentation Page

Create a new `.mdx` file in `content/docs/<category>/`:

```mdx
---
title: My New Guide
description: One-line description used for SEO, cards and search.
category: flutter
tags: [flutter, guide]
difficulty: Beginner
readingTime: 6
publishedAt: "2026-09-01"
order: 10
youtube: dQw4w9WgXcQ        # optional — embeds the matching video
---

## Introduction

Content with **markdown**, tables, lists...

<Callout type="tip" title="Pro tip">Callouts work out of the box.</Callout>

```dart
// Syntax-highlighted code with copy button
void main() {}
```

<YouTubeVideo id="VIDEO_ID" title="Optional title" />
```

That's it. The page is generated automatically with:

- SEO metadata (title, description, OpenGraph, canonical URL, JSON-LD)
- Sidebar entry (sorted by `order`)
- Search index entry (Ctrl+K)
- Table of contents (from H2/H3 headings)
- Previous/Next navigation and related articles

### Frontmatter reference

| Field | Required | Notes |
| --- | --- | --- |
| `title` | ✅ | Page title |
| `description` | ✅ | Used in meta description & cards |
| `category` | ✅ | Must match folder name |
| `tags` | — | Array; boosts search relevance |
| `difficulty` | — | Beginner / Intermediate / Advanced |
| `readingTime` | — | Minutes (auto-computed if omitted) |
| `publishedAt` | ✅ | ISO date, drives sitemap + sorting |
| `youtube` | — | YouTube video ID to embed |
| `order` | — | Sidebar sort order |

### Adding a new category

1. Create the folder `content/docs/my-category/`.
2. Add an entry to `categories` in `lib/categories.ts`.

Sidebar, docs index, sitemap and navigation update automatically.

## Adding Tutorials

Append to `content/tutorials/index.ts`. Each entry supports a YouTube link and companion docs path.

## Adding Tools

1. Register metadata in `lib/tools.ts`.
2. Create the interactive component.
3. Map it in `app/tools/[tool]/page.tsx`.

## Environment Variables

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://enjoyeprogramming.com   # canonical URL for SEO/sitemap
```

## Deploying to Vercel

1. Push this repository to GitHub/GitLab.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy — no other configuration needed.

Everything (docs, search index, sitemap) is generated statically at build time.
