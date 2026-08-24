import { ArrowLeft, FileQuestion } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="flex size-16 items-center justify-center rounded-2xl border bg-muted/40">
        <FileQuestion className="size-8 text-muted-foreground" aria-hidden="true" />
      </p>
      <p className="mt-6 text-7xl font-bold tracking-tight">404</p>
      <h1 className="mt-3 text-xl font-semibold">This page could not be found</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        The page may have been moved or removed. Try searching with Ctrl+K, or start from the
        documentation.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/docs">Browse documentation</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">
            <ArrowLeft aria-hidden="true" />
            Back to home
          </Link>
        </Button>
      </div>
    </main>
  );
}
