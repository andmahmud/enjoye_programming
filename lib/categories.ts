import {
  Banknote,
  Binary,
  CirclePlay,
  Flame,
  Megaphone,
  Smartphone,
  TabletSmartphone,
  Webhook,
  type LucideIcon,
} from "lucide-react";

export interface CategoryDef {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  /** Icon chip classes, e.g. "bg-sky-500/10 text-sky-600 dark:text-sky-400" */
  accentClass: string;
}

/**
 * Single source of truth for documentation categories.
 * To add a new category: create `content/docs/<slug>/` and add an entry here.
 * The sidebar, docs index, sitemap and navigation pick it up automatically.
 */
export const categories: CategoryDef[] = [
  {
    slug: "flutter",
    name: "Flutter",
    tagline: "Build beautiful cross-platform apps",
    description:
      "Learn Flutter from scratch — widgets, layouts, navigation, state management and shipping real cross-platform apps from a single codebase.",
    icon: Smartphone,
    accentClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    slug: "dart",
    name: "Dart",
    tagline: "The language behind Flutter",
    description:
      "Master the Dart programming language — syntax, null safety, async programming and the patterns you need for Flutter development.",
    icon: Binary,
    accentClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
  {
    slug: "firebase",
    name: "Firebase",
    tagline: "Backend for your apps",
    description:
      "Add authentication, cloud database, notifications and more to your apps using Firebase — Google’s app development platform.",
    icon: Flame,
    accentClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    slug: "admob",
    name: "AdMob",
    tagline: "Monetize with ads",
    description:
      "Integrate Google AdMob into your mobile apps — banner, interstitial, rewarded and app open ads — done right, policy-safe and revenue-ready.",
    icon: Megaphone,
    accentClass: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    slug: "android",
    name: "Android",
    tagline: "Android platform essentials",
    description:
      "Understand the Android platform — project structure, manifests, permissions, build configuration and app lifecycle fundamentals.",
    icon: TabletSmartphone,
    accentClass: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    slug: "api",
    name: "APIs",
    tagline: "Connect your apps to the world",
    description:
      "Work with REST APIs — HTTP requests, JSON parsing, authentication headers, error handling and clean networking layers in your apps.",
    icon: Webhook,
    accentClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
  {
    slug: "play-store",
    name: "Play Store",
    tagline: "Publish with confidence",
    description:
      "Ship your app to Google Play — developer console setup, app signing, data safety forms, privacy policies and policy compliance.",
    icon: CirclePlay,
    accentClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    slug: "app-monetization",
    name: "App Monetization",
    tagline: "Turn apps into income",
    description:
      "Every proven way to earn from apps — advertising, AdMob, subscriptions, in-app purchases, premium features and sustainable business models.",
    icon: Banknote,
    accentClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
];

export const categoryMap: Record<string, CategoryDef> = Object.fromEntries(
  categories.map((category) => [category.slug, category]),
);

export function getCategory(slug: string): CategoryDef | undefined {
  return categoryMap[slug];
}
