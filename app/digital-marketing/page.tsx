import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CurriculumSectionLanding } from "@/components/curriculum/section-landing";
import { getCurriculumSection } from "@/lib/curriculum";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Digital Marketing Learning – Learn SEO, Social Media, Google Ads & Online Marketing | Enjoye Programming",
  },
  description:
    "Master SEO, social media, advertising, content marketing, analytics, and practical digital marketing strategies to grow brands and build online income.",
  keywords: [
    "digital marketing tutorial",
    "SEO",
    "social media marketing",
    "Google Ads",
    "content marketing",
    "email marketing",
    "affiliate marketing",
    "Google Analytics",
    "marketing automation",
    "online income",
  ],
  alternates: { canonical: "/digital-marketing" },
  openGraph: {
    type: "website",
    title:
      "Digital Marketing Learning – Learn SEO, Social Media, Google Ads & Online Marketing | Enjoye Programming",
    description:
      "Master SEO, social media, advertising, content marketing, analytics, and practical digital marketing strategies to grow brands and build online income.",
    url: `${siteConfig.url}/digital-marketing`,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing Learning – Learn SEO, Social Media, Google Ads & Online Marketing | Enjoye Programming",
    description:
      "Master SEO, social media, advertising, content marketing, analytics, and practical digital marketing strategies to grow brands and build online income.",
  },
};

export default function DigitalMarketingLearningPage() {
  const section = getCurriculumSection("digital-marketing");
  if (!section) notFound();

  return <CurriculumSectionLanding section={section} />;
}