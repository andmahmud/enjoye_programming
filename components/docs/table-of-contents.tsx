"use client";

import * as React from "react";

import type { TocHeading } from "@/lib/types";
import { cn } from "@/lib/utils";

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-90px 0px -70% 0px", threshold: 1 },
    );

    for (const heading of headings) {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="space-y-3">
      <p className="text-[0.8rem] font-semibold tracking-wide text-foreground uppercase">
        On this page
      </p>
      <ul className="space-y-2 border-l">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "-ml-px block border-l-2 border-transparent py-0.5 text-[0.8rem] leading-snug transition-colors hover:text-foreground",
                heading.level === 3 ? "pl-7" : "pl-4",
                activeId === heading.id
                  ? "border-primary font-medium text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
