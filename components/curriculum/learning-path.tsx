import { Route } from "lucide-react";

import type { CurriculumStep } from "@/lib/curriculum";

export function LearningPath({ steps }: { steps: CurriculumStep[] }) {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Beginner-Friendly Learning Path</h2>
          <p className="mt-3 text-muted-foreground">
            Follow the steps in order — each one builds on the last — or jump straight to the skill
            you need today.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Route className="size-3.5" aria-hidden="true" />
          Roughly one to two weeks per step at a comfortable pace.
        </p>
      </div>
    </section>
  );
}