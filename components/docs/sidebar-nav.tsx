"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { categories } from "@/lib/categories";
import type { SidebarGroup } from "@/lib/types";
import { cn } from "@/lib/utils";

export function SidebarNav({ groups }: { groups: SidebarGroup[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Documentation">
      <Link
        href="/docs"
        className={cn(
          "mb-4 flex items-center rounded-md px-2.5 py-1.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground",
          pathname === "/docs" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        Documentation
        <span className="sr-only"> overview</span>
      </Link>
      <div className="space-y-5">
        {groups.map((group) => {
          const category = categories.find((entry) => entry.slug === group.slug);
          if (!category) return null;
          return (
            <div key={group.slug}>
              <Link
                href={`/docs/${group.slug}`}
                className="flex items-center gap-2 px-2.5 py-1 text-[0.8rem] font-semibold tracking-wide text-foreground uppercase outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <category.icon className={cn("size-3.5", category.accentClass.split(" ").slice(1).join(" "))} aria-hidden="true" />
                {group.name}
              </Link>
              <ul className="mt-1 space-y-px">
                {group.docs.map((doc) => {
                  const active = pathname === doc.url;
                  return (
                    <li key={doc.url}>
                      <Link
                        href={doc.url}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-md px-2.5 py-1.5 text-sm leading-snug transition-colors",
                          active
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/60 hover:text-accent-foreground",
                        )}
                      >
                        {doc.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
