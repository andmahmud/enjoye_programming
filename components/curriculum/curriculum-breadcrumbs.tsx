import { ChevronRight } from "lucide-react";
import Link from "next/link";

import type { CurriculumSection } from "@/lib/curriculum";

export function CurriculumBreadcrumbs({
  section,
  categoryName,
}: {
  section: CurriculumSection;
  categoryName?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="size-3.5" />
        </li>
        <li>
          <Link href={`/${section.slug}`} className="transition-colors hover:text-foreground">
            {section.name}
          </Link>
        </li>
        {categoryName && (
          <>
            <li aria-hidden="true">
              <ChevronRight className="size-3.5" />
            </li>
            <li aria-current="page" className="truncate text-foreground">
              {categoryName}
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}