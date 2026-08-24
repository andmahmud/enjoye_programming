import {
  ArrowRight,
  Banknote,
  Briefcase,
  CalendarClock,
  CirclePlay,
  Crown,
  DollarSign,
  Handshake,
  Megaphone,
  Package,
  ShoppingCart,
  Target,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Can Apps Make Money?",
  description:
    "Learn every proven way to make money from mobile apps: advertising, AdMob, premium features, subscriptions, in-app purchases, paid apps, affiliate marketing and more.",
  alternates: { canonical: "/app-monetization" },
};

const METHODS = [
  {
    icon: Megaphone,
    name: "Advertising",
    description:
      "The most common model. You show ads inside your free app and earn money every time an ad is displayed, clicked or completed.",
    bullets: ["Banner ads", "Interstitial ads", "Rewarded video", "Native ads", "App open ads"],
    href: "/docs/app-monetization/advertising",
  },
  {
    icon: Target,
    name: "AdMob by Google",
    description:
      "Google’s ad platform built for mobile apps — the easiest way to start earning from advertising with high fill rates worldwide.",
    bullets: ["Free to join", "Works with Flutter & native apps", "Detailed earnings reports"],
    href: "/docs/admob/getting-started",
  },
  {
    icon: Crown,
    name: "Premium Features",
    description:
      "Keep your app free for everyone, but lock your best features behind a one-time unlock payment.",
    bullets: ["No recurring billing needed", "Great for tool & utility apps"],
    href: "/docs/app-monetization/premium-features",
  },
  {
    icon: CalendarClock,
    name: "Subscription",
    description:
      "Users pay monthly or yearly for continued access to content, tools or services — the strongest model for predictable revenue.",
    bullets: ["Recurring income", "Free trial support on Play Store"],
    href: "/docs/app-monetization/subscription",
  },
  {
    icon: ShoppingCart,
    name: "In-App Purchase",
    description:
      "Sell digital items directly inside the app — coins, hints, templates, levels or upgrades through Play Billing.",
    bullets: ["Consumable & non-consumable products", "Powered by Google Play Billing"],
    href: "/docs/app-monetization/in-app-purchase",
  },
  {
    icon: DollarSign,
    name: "Paid Applications",
    description:
      "Charge a one-time price before download. Simple and clean — users pay once and get everything.",
    bullets: ["Upfront revenue per install", "No in-app ads required"],
    href: null,
  },
  {
    icon: Handshake,
    name: "Affiliate Marketing",
    description:
      "Promote relevant products, tools or services inside your app and earn a commission for every sale or signup you refer.",
    bullets: ["Works even without high ad demand", "Best with a targeted audience"],
    href: "/docs/app-monetization/app-business-models",
  },
  {
    icon: Briefcase,
    name: "Business & Services",
    description:
      "Use your app as the front-end of a service business — bookings, client portals, delivery or consultations.",
    bullets: ["Apps that power real businesses", "Combine with any other model"],
    href: "/docs/app-monetization/app-business-models",
  },
  {
    icon: Package,
    name: "Digital Products",
    description:
      "Sell what you create — UI kits, templates, courses, presets or e-books — directly or through your own app.",
    bullets: ["High profit margin", "Builds your personal brand"],
    href: null,
  },
];

export default function AppMonetizationPage() {
  return (
    <main>
      <section className="border-b bg-muted/30">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
          <p className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Banknote className="size-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
            App Monetization
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            How Can Apps Make Money?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            An app becomes a business when it delivers real value — and there are many ways to turn
            that value into income. Here are all the proven models, explained simply.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/docs/app-monetization/how-to-make-money-from-apps">
                Read the complete guide
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={siteConfig.youtubeUrl} target="_blank" rel="noopener noreferrer">
                <CirclePlay aria-hidden="true" />
                Watch on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-screen-xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:px-8 lg:gap-6">
          {METHODS.map((method) => (
            <article
              key={method.name}
              className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-colors hover:border-primary/30"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <method.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-semibold tracking-tight">{method.name}</h2>
              </div>
              <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
                {method.description}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {method.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span
                      className="mt-[0.45rem] size-1 shrink-0 rounded-full bg-muted-foreground/60"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              {method.href && (
                <Link
                  href={method.href}
                  className="mt-5 inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  Read the guide
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-muted/40 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to build an app that earns?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Follow the full roadmap — from your first Flutter widget to a published, monetized app
              on Google Play.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button asChild>
                <Link href="/docs/flutter/getting-started">Start building</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/tools/app-income-calculator">Estimate your income</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
