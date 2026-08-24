import { MobileSidebar } from "@/components/docs/mobile-sidebar";
import { SidebarNav } from "@/components/docs/sidebar-nav";
import { buildSidebar } from "@/lib/docs";

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  const groups = buildSidebar();

  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-1 items-stretch">
      <aside className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-64 shrink-0 overflow-y-auto border-r lg:block">
        <div className="py-8 pr-6 pl-3">
          <SidebarNav groups={groups} />
        </div>
      </aside>
      <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="mb-8 lg:hidden">
          <MobileSidebar groups={groups} />
        </div>
        {children}
      </main>
    </div>
  );
}
