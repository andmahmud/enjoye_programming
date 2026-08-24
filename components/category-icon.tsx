import { getCategory } from "@/lib/categories";
import { cn } from "@/lib/utils";

/**
 * Renders a category's icon in its accent-colored chip.
 * Works in both server and client components (icon resolved from the slug).
 */
export function CategoryIcon({
  slug,
  withLabel = false,
  className,
}: {
  slug: string;
  withLabel?: boolean;
  className?: string;
}) {
  const category = getCategory(slug);
  if (!category) return null;
  const Icon = category.icon;

  if (withLabel) {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-foreground/80">
        <span
          className={cn("inline-flex size-5 items-center justify-center rounded-md", category.accentClass)}
        >
          <Icon className="size-3" aria-hidden="true" />
        </span>
        {category.name}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-lg",
        category.accentClass,
        className,
      )}
    >
      <Icon className="size-5" aria-hidden="true" />
    </span>
  );
}
