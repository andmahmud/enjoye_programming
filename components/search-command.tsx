"use client";

import { FileText, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { SearchDoc } from "@/lib/types";
import { cn } from "@/lib/utils";

const SUGGESTED_SLUGS = [
  "/docs/flutter/getting-started",
  "/docs/admob/getting-started",
  "/docs/app-monetization/how-to-make-money-from-apps",
  "/docs/firebase/authentication",
  "/docs/play-store/app-publishing",
];

function scoreDoc(doc: SearchDoc, terms: string[]): number {
  const title = doc.title.toLowerCase();
  const category = doc.categoryName.toLowerCase();
  const tags = doc.tags.join(" ").toLowerCase();
  const description = doc.description.toLowerCase();
  const headings = doc.headings.join(" ").toLowerCase();
  const excerpt = doc.excerpt.toLowerCase();

  let score = 0;
  for (const term of terms) {
    if (title.includes(term)) score += 10;
    if (category.includes(term)) score += 5;
    if (tags.includes(term)) score += 4;
    if (description.includes(term)) score += 2;
    if (headings.includes(term)) score += 2;
    if (excerpt.includes(term)) score += 1;
    if (score === 0 && !`${title} ${description}`.includes(term)) return -1;
  }
  return score;
}

export function SearchCommand({
  items,
  open,
  onOpenChange,
}: {
  items: SearchDoc[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  // Global keyboard shortcut: Ctrl+K / Cmd+K
  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpenChange(!open);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  const results = React.useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];
    const terms = trimmed.split(/\s+/).filter(Boolean);
    return items
      .map((doc) => ({ doc, score: scoreDoc(doc, terms) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 15)
      .map((entry) => entry.doc);
  }, [items, query]);

  React.useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 20);
    return () => window.clearTimeout(timer);
  }, [open]);

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
    onOpenChange(nextOpen);
  }

  React.useEffect(() => {
    const node = listRef.current?.querySelector<HTMLElement>(`[data-index="${selectedIndex}"]`);
    node?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const suggestions = React.useMemo(
    () =>
      SUGGESTED_SLUGS.map((slug) => items.find((item) => item.url === slug)).filter(
        (item): item is SearchDoc => Boolean(item),
      ),
    [items],
  );

  const visible = query.trim() ? results : suggestions;

  function handleSelect(url: string) {
    onOpenChange(false);
    router.push(url);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((index) => Math.min(index + 1, visible.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && visible[selectedIndex]) {
      event.preventDefault();
      handleSelect(visible[selectedIndex].url);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="top-[12%] max-w-xl translate-y-0 gap-0 overflow-hidden p-0"
        onKeyDown={handleKeyDown}
      >
        <DialogTitle className="sr-only">Search documentation</DialogTitle>
        <DialogDescription className="sr-only">
          Search documentation by title, topic or content.
        </DialogDescription>

        <div className="flex h-12 items-center gap-3 border-b px-4">
          <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search documentation..."
            className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            role="combobox"
            aria-expanded={visible.length > 0}
            aria-controls="search-results"
            aria-activedescendant={
              visible[selectedIndex] ? `search-option-${selectedIndex}` : undefined
            }
          />
          <kbd className="hidden rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex">
            ESC
          </kbd>
        </div>

        <div ref={listRef} id="search-results" role="listbox" className="max-h-[min(55vh,380px)] overflow-y-auto p-2">
          {visible.length === 0 ? (
            <div className="px-4 py-10 text-center">
              <p className="text-sm font-medium">No results found</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Try different keywords like “admob”, “firebase” or “monetize”.
              </p>
            </div>
          ) : (
            <>
              {!query.trim() && (
                <p className="px-3 pt-1 pb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Suggestions
                </p>
              )}
              {visible.map((doc, index) => (
                <button
                  key={doc.url}
                  id={`search-option-${index}`}
                  data-index={index}
                  role="option"
                  aria-selected={index === selectedIndex}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => handleSelect(doc.url)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                    index === selectedIndex ? "bg-accent text-accent-foreground" : "",
                  )}
                >
                  <FileText className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium">{doc.title}</span>
                    <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                      {doc.description}
                    </span>
                  </span>
                  <span className="shrink-0 rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground">
                    {doc.categoryName}
                  </span>
                </button>
              ))}
            </>
          )}
        </div>

        <div className="flex items-center gap-4 border-t bg-muted/40 px-4 py-2 text-[11px] text-muted-foreground">
          <span>
            <kbd className="rounded border bg-background px-1 font-mono">↑↓</kbd> navigate
          </span>
          <span>
            <kbd className="rounded border bg-background px-1 font-mono">↵</kbd> open
          </span>
          <span className="ml-auto hidden sm:inline">{items.length} articles indexed</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
