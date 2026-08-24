"use client";

import { Menu } from "lucide-react";
import * as React from "react";

import { SidebarNav } from "@/components/docs/sidebar-nav";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { SidebarGroup } from "@/lib/types";

export function MobileSidebar({ groups }: { groups: SidebarGroup[] }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Menu className="size-4" aria-hidden="true" />
          Browse documentation
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto p-0">
        <SheetHeader>
          <SheetTitle>Documentation</SheetTitle>
          <SheetDescription>All guides and tutorials</SheetDescription>
        </SheetHeader>
        <div className="overflow-y-auto p-4">
          <SidebarNav groups={groups} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
