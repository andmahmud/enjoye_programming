import { Info } from "lucide-react";
import type { Metadata } from "next";

import { TutorialCard } from "@/components/tutorial-card";
import { getSortedTutorials } from "@/content/tutorials";

export const metadata: Metadata = {
  title: "Tutorials",
  description:
    "Video tutorials for Flutter, Firebase, AdMob and Google Play publishing — every video paired with complete written documentation.",
  alternates: { canonical: "/tutorials" },
};

export default function TutorialsPage() {
  const sorted = getSortedTutorials();

  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Tutorials</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Watch the video, then go deeper with full written documentation — code, explanations and
          checklists included.
        </p>
        <p className="mt-4 flex items-start gap-2 rounded-lg border bg-muted/40 p-3 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          Every tutorial links to its companion documentation page so you can follow along at your
          own pace.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((tutorial) => (
          <TutorialCard key={`${tutorial.title}-${tutorial.publishedAt}`} tutorial={tutorial} />
        ))}
      </div>
    </main>
  );
}
