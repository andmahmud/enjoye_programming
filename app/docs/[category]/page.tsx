import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryIcon } from "@/components/category-icon";
import { DocCard } from "@/components/doc-card";
import { categories, getCategory } from "@/lib/categories";
import { getDocsByCategory } from "@/lib/docs";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/docs/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: `${category.name} Documentation`,
    description: category.description,
    alternates: { canonical: `/docs/${category.slug}` },
    openGraph: {
      title: `${category.name} Documentation | ${siteConfig.name}`,
      description: category.description,
      url: `${siteConfig.url}/docs/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps<"/docs/[category]">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const docs = getDocsByCategory(slug);

  return (
    <div className="max-w-5xl">
      <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-start">
        <CategoryIcon slug={slug} className="size-12 rounded-xl" />
        <div>
          <p className="text-sm font-medium text-muted-foreground">Documentation</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{category.name}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{category.description}</p>
        </div>
      </header>

      <h2 className="sr-only">All {category.name} guides</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {docs.map((doc) => (
          <DocCard key={doc.url} doc={doc} />
        ))}
      </div>
    </div>
  );
}
