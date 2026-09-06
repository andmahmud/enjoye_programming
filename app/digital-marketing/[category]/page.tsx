import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CurriculumCategoryLanding } from "@/components/curriculum/category-landing";
import { getCurriculumCategory, getCurriculumSection } from "@/lib/curriculum";
import { siteConfig } from "@/lib/site";

const SECTION_SLUG = "digital-marketing";

export function generateStaticParams() {
  const section = getCurriculumSection(SECTION_SLUG);
  return (section?.categories ?? []).map((category) => ({ category: category.slug }));
}

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCurriculumCategory(SECTION_SLUG, categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} Tutorials & Learning`,
    description: category.description,
    keywords: [
      `${category.name} tutorial`,
      `${category.name} learning`,
      "digital marketing",
      "SEO",
      "social media",
      "Google Ads",
    ],
    alternates: { canonical: `/digital-marketing/${category.slug}` },
    openGraph: {
      type: "website",
      title: `${category.name} Tutorials & Learning | ${siteConfig.name}`,
      description: category.description,
      url: `${siteConfig.url}/digital-marketing/${category.slug}`,
      siteName: siteConfig.name,
    },
  };
}

export default async function DigitalMarketingCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const section = getCurriculumSection(SECTION_SLUG);
  const category = getCurriculumCategory(SECTION_SLUG, categorySlug);
  if (!section || !category) notFound();

  const related = section.categories.filter((entry) => entry.slug !== category.slug).slice(0, 3);

  return <CurriculumCategoryLanding section={section} category={category} related={related} />;
}