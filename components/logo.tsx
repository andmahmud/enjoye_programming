import Link from "next/link";
import { Terminal } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className,
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
        <Terminal className="size-4" aria-hidden="true" />
      </span>
      <span className="text-[1.05rem] font-bold leading-none tracking-tight">
        Enjoye <span className="text-primary">Programming</span>
      </span>
    </Link>
  );
}
