import type { Difficulty } from "@/lib/types";
import { cn } from "@/lib/utils";

const difficultyClasses: Record<Difficulty, string> = {
  Beginner: "border-transparent bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  Intermediate: "border-transparent bg-amber-500/10 text-amber-700 dark:text-amber-400",
  Advanced: "border-transparent bg-rose-500/10 text-rose-700 dark:text-rose-400",
};

export function DifficultyBadge({
  difficulty,
  className,
}: {
  difficulty: Difficulty;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
        difficultyClasses[difficulty],
        className,
      )}
    >
      {difficulty}
    </span>
  );
}
