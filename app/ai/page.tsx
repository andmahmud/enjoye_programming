import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CurriculumSectionLanding } from "@/components/curriculum/section-landing";
import { getCurriculumSection } from "@/lib/curriculum";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "AI Learning – Learn AI Tools, ChatGPT, Prompt Engineering & Automation | Enjoye Programming",
  },
  description:
    "Learn AI, ChatGPT, prompt engineering, generative AI, automation, AI tools, and practical AI skills with Enjoye Programming.",
  keywords: [
    "AI tutorial",
    "ChatGPT",
    "prompt engineering",
    "generative AI",
    "AI automation",
    "AI tools",
    "AI agents",
    "AI for developers",
    "machine learning basics",
  ],
  alternates: { canonical: "/ai" },
  openGraph: {
    type: "website",
    title:
      "AI Learning – Learn AI Tools, ChatGPT, Prompt Engineering & Automation | Enjoye Programming",
    description:
      "Learn AI, ChatGPT, prompt engineering, generative AI, automation, AI tools, and practical AI skills with Enjoye Programming.",
    url: `${siteConfig.url}/ai`,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Learning – Learn AI Tools, ChatGPT, Prompt Engineering & Automation | Enjoye Programming",
    description:
      "Learn AI, ChatGPT, prompt engineering, generative AI, automation, AI tools, and practical AI skills with Enjoye Programming.",
  },
};

export default function AiLearningPage() {
  const section = getCurriculumSection("ai");
  if (!section) notFound();

  return <CurriculumSectionLanding section={section} />;
}