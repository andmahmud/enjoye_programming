import { Calculator, Divide, Percent, TrendingUp, type LucideIcon } from "lucide-react";

export interface ToolDef {
  /** URL id: /tools/<id> */
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  features: string[];
  showEarningsDisclaimer?: boolean;
}

/**
 * Registry of developer tools. To add a new tool:
 * 1. Add an entry here.
 * 2. Create the interactive component and map it in `app/tools/[tool]/page.tsx`.
 */
export const tools: ToolDef[] = [
  {
    id: "app-income-calculator",
    name: "App Income Calculator",
    tagline: "Estimate daily, monthly and yearly ad revenue",
    description:
      "Enter your daily active users, ads shown per user and your estimated eCPM to instantly project how much revenue your app could generate.",
    icon: Calculator,
    accentClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    features: ["Daily revenue estimate", "Monthly projection", "Yearly projection", "Ad impressions overview"],
    showEarningsDisclaimer: true,
  },
  {
    id: "ecpm-calculator",
    name: "eCPM Calculator",
    tagline: "Measure real ad performance",
    description:
      "Find out your effective cost per mille from total earnings and impressions — plus CTR and CPC when you have click data.",
    icon: Percent,
    accentClass: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    features: ["eCPM from earnings & impressions", "CTR calculation", "CPC calculation"],
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    tagline: "Everyday percentage math, solved",
    description:
      "Three modes in one tool: percentage of a number, what percent X is of Y, and percentage increase or decrease between two values.",
    icon: Divide,
    accentClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    features: ["% of a number", "X as % of Y", "% change between values"],
  },
  {
    id: "app-revenue-estimator",
    name: "App Revenue Estimator",
    tagline: "Model realistic income scenarios",
    description:
      "Go deeper than simple math — model sessions, ad load and eCPM together to see conservative, expected and optimistic monthly revenue.",
    icon: TrendingUp,
    accentClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    features: ["Scenario-based estimates", "ARPU calculation", "Monthly & yearly outlook"],
    showEarningsDisclaimer: true,
  },
];

export function getTool(id: string): ToolDef | undefined {
  return tools.find((tool) => tool.id === id);
}
