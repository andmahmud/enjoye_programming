import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { AppIncomeCalculator } from "@/components/tools/app-income-calculator";
import { AppRevenueEstimator } from "@/components/tools/app-revenue-estimator";
import { EcpmCalculator } from "@/components/tools/ecpm-calculator";
import { PercentageCalculator } from "@/components/tools/percentage-calculator";
import { getTool, tools } from "@/lib/tools";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map((tool) => ({ tool: tool.id }));
}

const CALCULATORS: Record<string, React.ComponentType> = {
  "app-income-calculator": AppIncomeCalculator,
  "ecpm-calculator": EcpmCalculator,
  "percentage-calculator": PercentageCalculator,
  "app-revenue-estimator": AppRevenueEstimator,
};

export async function generateMetadata({ params }: PageProps<"/tools/[tool]">): Promise<Metadata> {
  const { tool: id } = await params;
  const tool = getTool(id);
  if (!tool) return {};

  return {
    title: tool.name,
    description: tool.description,
    alternates: { canonical: `/tools/${tool.id}` },
    openGraph: {
      title: `${tool.name} | ${siteConfig.name}`,
      description: tool.description,
      url: `${siteConfig.url}/tools/${tool.id}`,
    },
  };
}

export default async function ToolPage({ params }: PageProps<"/tools/[tool]">) {
  const { tool: id } = await params;
  const tool = getTool(id);
  if (!tool) return null;

  const Calculator = CALCULATORS[tool.id];

  return (
    <main className="mx-auto w-full max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/tools" className="transition-colors hover:text-foreground">
              Tools
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="size-3.5" />
          </li>
          <li aria-current="page" className="text-foreground">
            {tool.name}
          </li>
        </ol>
      </nav>

      <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center">
        <span
          className={`inline-flex size-14 shrink-0 items-center justify-center rounded-xl ${tool.accentClass}`}
        >
          <tool.icon className="size-7" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{tool.name}</h1>
          <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{tool.tagline}</p>
        </div>
      </header>

      <Calculator />

      <section aria-labelledby="how-to-use-heading" className="mt-12 max-w-3xl">
        <h2 id="how-to-use-heading" className="text-xl font-semibold tracking-tight">
          How it works
        </h2>
        <ol className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          {getSteps(tool.id).map((step, index) => (
            <li key={step} className="flex items-start gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/5 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <nav aria-label="Other tools" className="mt-14 border-t pt-8">
        <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          More tools
        </h2>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {tools
            .filter((entry) => entry.id !== tool.id)
            .map((entry) => (
              <Link
                key={entry.id}
                href={`/tools/${entry.id}`}
                className="inline-flex items-center gap-2 rounded-lg border bg-card px-3.5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <entry.icon className={`size-4 ${entry.accentClass.split(" ").slice(1).join(" ")}`} aria-hidden="true" />
                {entry.name}
              </Link>
            ))}
        </div>
      </nav>
    </main>
  );
}

function getSteps(toolId: string): string[] {
  switch (toolId) {
    case "app-income-calculator":
      return [
        "Enter how many users open your app on an average day.",
        "Enter the average number of ad impressions each user generates per day.",
        "Enter your estimated eCPM — the amount you earn per 1,000 impressions (check your ad network dashboard for real numbers).",
        "The calculator multiplies these together to project daily, monthly and yearly revenue.",
      ];
    case "ecpm-calculator":
      return [
        "Enter the total ad earnings for a period (day, week or month).",
        "Enter how many ad impressions were served in that period.",
        "Optionally add clicks to also calculate CTR (click-through rate) and CPC (cost per click).",
      ];
    case "percentage-calculator":
      return [
        "Pick the mode that matches your question — percent of a number, X as a percent of Y, or percentage change.",
        "Type both values into the fields.",
        "Read the result instantly — no button press needed.",
      ];
    case "app-revenue-estimator":
      return [
        "Model a realistic day: daily active users, sessions per user, ads per session.",
        "Add your average eCPM across all ad formats you use.",
        "Compare conservative, expected and optimistic monthly outcomes, plus ARPU per user.",
      ];
    default:
      return [];
  }
}
