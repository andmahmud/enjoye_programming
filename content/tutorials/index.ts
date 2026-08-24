export interface Tutorial {
  title: string;
  description: string;
  /** Category slug used for grouping & theming, e.g. "admob" */
  categorySlug: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  /** Video duration, e.g. "12 min" or "1 hr 5 min" */
  duration: string;
  publishedAt: string;
  /** Full YouTube watch URL — replace with your real video links */
  youtubeUrl?: string;
  /** Path to the companion documentation page */
  docsPath?: string;
}

/**
 * Tutorial index. Add a new entry here and it appears on /tutorials
 * and in the latest-tutorials selection automatically.
 */
export const tutorials: Tutorial[] = [
  {
    title: "App বানিয়ে কীভাবে টাকা আয় করা যায়?",
    description:
      "মোবাইল অ্যাপ বানানোর পর কীভাবে AdMob, Subscription, In-App Purchase সহ বিভিন্ন উপায়ে আয় করা যায় — সম্পূর্ণ গাইড।",
    categorySlug: "app-monetization",
    difficulty: "Beginner",
    duration: "18 min",
    publishedAt: "2026-08-10",
    youtubeUrl: undefined,
    docsPath: "/docs/app-monetization/how-to-make-money-from-apps",
  },
  {
    title: "Flutter App-এ AdMob Add করার নিয়ম",
    description:
      "Complete walkthrough of adding Google AdMob to a Flutter app — from creating an AdMob account to showing your first ad.",
    categorySlug: "admob",
    difficulty: "Intermediate",
    duration: "22 min",
    publishedAt: "2026-07-28",
    docsPath: "/docs/admob/getting-started",
  },
  {
    title: "Banner Ad Setup",
    description:
      "Add adaptive banner ads to your Flutter screens the right way — sizing, placement and policy-safe layouts.",
    categorySlug: "admob",
    difficulty: "Beginner",
    duration: "9 min",
    publishedAt: "2026-07-21",
    docsPath: "/docs/admob/banner-ads",
  },
  {
    title: "Interstitial Ad Setup",
    description:
      "Show full-screen interstitial ads at natural breaks in your app without destroying the user experience.",
    categorySlug: "admob",
    difficulty: "Beginner",
    duration: "11 min",
    publishedAt: "2026-07-14",
    docsPath: "/docs/admob/interstitial-ads",
  },
  {
    title: "Rewarded Ad Setup",
    description:
      "Let users unlock premium content by watching rewarded video ads — the highest eCPM ad format.",
    categorySlug: "admob",
    difficulty: "Intermediate",
    duration: "13 min",
    publishedAt: "2026-07-07",
    docsPath: "/docs/admob/rewarded-ads",
  },
  {
    title: "Firebase Authentication",
    description:
      "Set up Firebase Auth in Flutter — email/password, phone verification and user session management.",
    categorySlug: "firebase",
    difficulty: "Beginner",
    duration: "16 min",
    publishedAt: "2026-06-23",
    docsPath: "/docs/firebase/authentication",
  },
  {
    title: "Google Sign-In",
    description:
      "Add one-tap Google Sign-In to your Flutter app with Firebase — configuration, code and testing.",
    categorySlug: "firebase",
    difficulty: "Intermediate",
    duration: "12 min",
    publishedAt: "2026-06-16",
    docsPath: "/docs/firebase/authentication",
  },
  {
    title: "Play Store Publishing",
    description:
      "Publish your app on Google Play step by step — store listing, signing, release build and review process.",
    categorySlug: "play-store",
    difficulty: "Intermediate",
    duration: "25 min",
    publishedAt: "2026-06-02",
    docsPath: "/docs/play-store/app-publishing",
  },
];

export function getSortedTutorials(): Tutorial[] {
  return [...tutorials].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
