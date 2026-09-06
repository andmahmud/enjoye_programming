import { ArrowRight, CirclePlay } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { CurriculumSection } from "@/lib/curriculum";
import { siteConfig } from "@/lib/site";

export function CurriculumHero({
  section,
  primaryCta,
}: {
  section: CurriculumSection;
  primaryCta: { href: string; label: string };
}) {
  const BadgeIcon = section.heroBadge.icon;

  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
          <BadgeIcon className="size-3.5 text-primary" aria-hidden="true" />
          {section.heroBadge.label}
        </p>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {section.headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{section.description}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={siteConfig.youtubeUrl} target="_blank" rel="noopener noreferrer">
              <CirclePlay aria-hidden="true" />
              Watch on YouTube
            </a>
          </Button>
        </div>

        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          {section.teasers.map((topic, index) => (
            <span key={topic} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true" className="text-border">·</span>}
              {topic}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}