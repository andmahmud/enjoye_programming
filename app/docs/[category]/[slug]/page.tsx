import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocHeader } from "@/components/docs/doc-header";
import { DocPagination } from "@/components/docs/doc-pagination";
import { RelatedDocs } from "@/components/docs/related-docs";
import { TableOfContents } from "@/components/docs/table-of-contents";
import { MdxRenderer } from "@/components/mdx/mdx-renderer";
import { YouTubeVideo } from "@/components/mdx/youtube-video";
import { categories } from "@/lib/categories";
import { absoluteUrl, getAdjacentDocs, getAllDocs, getDoc, getRelatedDocs } from "@/lib/docs";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllDocs().map((doc) => ({
    category: doc.categorySlug,
    slug: doc.slug.split("/")[1],
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/docs/[category]/[slug]">): Promise<Metadata> {
  const { category, slug } = await params;
  const doc = getDoc(category, slug);
  if (!doc) return {};

  const title = `${doc.title} | ${siteConfig.name}`;
  const url = absoluteUrl(doc.url);

  return {
    title: doc.title,
    description: doc.description,
    keywords: [...doc.tags],
    authors: [{ name: siteConfig.name }],
    alternates: { canonical: doc.url },
    openGraph: {
      type: "article",
      title,
      description: doc.description,
      url,
      publishedTime: doc.publishedAt,
      tags: doc.tags,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: doc.description,
    },
  };
}

export default async function DocPage({ params }: PageProps<"/docs/[category]/[slug]">) {
  const { category, slug } = await params;
  const doc = getDoc(category, slug);
  if (!doc) notFound();

  const { prev, next } = getAdjacentDocs(doc);
  const related = getRelatedDocs(doc);
  const categoryName = categories.find((entry) => entry.slug === category)?.name ?? category;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: doc.title,
    description: doc.description,
    datePublished: doc.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: absoluteUrl(doc.url),
    keywords: doc.tags.join(", "),
    articleSection: categoryName,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Documentation", item: absoluteUrl("/docs") },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: absoluteUrl(`/docs/${category}`),
      },
      { "@type": "ListItem", position: 3, name: doc.title, item: absoluteUrl(doc.url) },
    ],
  };

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_230px] xl:gap-12">
      <article className="min-w-0">
        <DocHeader doc={doc} />

        {doc.youtube ? <YouTubeVideo id={doc.youtube} title={doc.title} /> : null}

        <div className="docs-content">
          <MdxRenderer source={doc.content} />
        </div>

        <RelatedDocs docs={related} />
        <DocPagination prev={prev} next={next} />
      </article>

      <aside className="hidden xl:block">
        <div className="sticky top-24 max-h-[calc(100dvh-8rem)] overflow-y-auto pb-10">
          <TableOfContents headings={doc.headings} />
        </div>
      </aside>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </div>
  );
}
