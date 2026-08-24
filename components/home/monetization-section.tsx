import {
  ArrowRight,
  Banknote,
  Briefcase,
  CalendarClock,
  Crown,
  DollarSign,
  Handshake,
  Megaphone,
  Package,
  ShoppingCart,
  Target,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const MODELS = [
  {
    icon: Megaphone,
    title: "Advertising",
    description: "Banner, interstitial, rewarded, native and app open ads.",
  },
  {
    icon: Target,
    title: "AdMob",
    description: "Google’s ad network — the most popular way to monetize apps.",
  },
  {
    icon: Crown,
    title: "Premium Features",
    description: "Unlock pro tools and content with a one-time upgrade.",
  },
  {
    icon: CalendarClock,
    title: "Subscription",
    description: "Recurring monthly or yearly plans for ongoing value.",
  },
  {
    icon: ShoppingCart,
    title: "In-App Purchase",
    description: "Sell consumables, upgrades and digital goods inside the app.",
  },
  {
    icon: DollarSign,
    title: "Paid Apps",
    description: "Charge once up front — no ads, full features.",
  },
  {
    icon: Handshake,
    title: "Affiliate Marketing",
    description: "Earn commissions promoting relevant products and services.",
  },
  {
    icon: Briefcase,
    title: "Services",
    description: "Use your app as a client portal for services you provide.",
  },
  {
    icon: Package,
    title: "Digital Products",
    description: "Templates, courses, presets and other downloadable assets.",
  },
];

export function MonetizationSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Make Money From Apps</h2>
          <p className="mt-3 text-muted-foreground">
            Building the app is only half the story. Explore every proven model for turning your app
            into a sustainable source of income.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MODELS.map((model) => (
            <div
              key={model.title}
              className="flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                <model.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">{model.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/app-monetization">
              Learn App Monetization
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/tools/app-income-calculator">
              <Banknote aria-hidden="true" />
              Try the Income Calculator
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
