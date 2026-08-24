"use client";

import { ChevronDown, Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Logo } from "@/components/logo";
import { SearchCommand } from "@/components/search-command";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { YoutubeIcon } from "@/components/youtube-icon";
import { categories } from "@/lib/categories";
import { siteConfig } from "@/lib/site";
import type { SearchDoc } from "@/lib/types";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Documentation", href: "/docs" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "App Monetization", href: "/app-monetization" },
  { label: "Tools", href: "/tools" },
] as const;

export function SiteNavbar({ searchIndex }: { searchIndex: SearchDoc[] }) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/65">
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Logo className="mr-1" />

        <nav aria-label="Main navigation" className="ml-4 hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive(link.href) ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            YouTube
            <YoutubeIcon className="size-3.5 text-red-600 dark:text-red-400" />
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          {/* Desktop search trigger */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="hidden h-9 w-56 items-center gap-2 rounded-md border border-input bg-muted/40 px-3 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:flex xl:w-64"
            aria-label="Search documentation"
          >
            <Search className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="flex-1 truncate text-left">Search docs...</span>
            <kbd className="rounded border bg-background px-1.5 font-mono text-[10px] font-medium">
              Ctrl K
            </kbd>
          </button>
          {/* Mobile / tablet search trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="size-9 lg:hidden"
            onClick={() => setSearchOpen(true)}
            aria-label="Search documentation"
          >
            <Search className="size-4" aria-hidden="true" />
          </Button>

          <ThemeToggle />

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="size-9 md:hidden" aria-label="Open menu">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="overflow-y-auto p-0">
              <SheetHeader>
                <SheetTitle asChild>
                  <div>
                    <Logo />
                  </div>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="space-y-1 p-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium transition-colors hover:bg-accent",
                      isActive(link.href) ? "bg-accent text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-accent"
                >
                  YouTube
                  <YoutubeIcon className="size-4 text-red-600 dark:text-red-400" />
                </a>

                <p className="px-3 pt-5 pb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Popular topics
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/docs/${category.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent"
                    >
                      <category.icon className="size-3.5" aria-hidden="true" />
                      {category.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <SearchCommand items={searchIndex} open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}

export function DocsCategoryDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5">
          Categories
          <ChevronDown className="size-3.5" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {categories.map((category) => (
          <DropdownMenuItem key={category.slug} asChild>
            <Link href={`/docs/${category.slug}`}>{category.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
