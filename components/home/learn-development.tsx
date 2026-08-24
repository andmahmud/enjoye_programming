import {
  ArrowRight,
  Bell,
  Code2,
  Database,
  Flame,
  KeyRound,
  Rocket,
  Smartphone,
  Webhook,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const STACK_ITEMS = [
  { icon: Smartphone, label: "Flutter", description: "Cross-platform UI toolkit" },
  { icon: Code2, label: "Dart", description: "Modern, fast language" },
  { icon: Flame, label: "Firebase", description: "Backend-as-a-service" },
  { icon: Webhook, label: "APIs", description: "Connect to any service" },
  { icon: KeyRound, label: "Authentication", description: "Secure sign-in flows" },
  { icon: Database, label: "Database", description: "Cloud Firestore & more" },
  { icon: Bell, label: "Notifications", description: "Push messaging (FCM)" },
  { icon: Rocket, label: "App Publishing", description: "Ship to Google Play" },
];

export function LearnDevelopment() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-screen-2xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Learn App Development</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Learn how to build, publish and monetize real-world mobile applications — step by step,
            with code you can actually use in your own projects.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              Beginner-friendly documentation written alongside every video tutorial.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              Production-ready patterns: authentication, databases, APIs and notifications.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              Publishing checklists so your app passes review the first time.
            </li>
          </ul>
          <Button className="mt-8" asChild>
            <Link href="/docs/flutter/getting-started">
              Start with Flutter
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {STACK_ITEMS.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border bg-card p-4 shadow-sm transition-colors hover:border-primary/30"
            >
              <item.icon className="size-5 text-primary" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold">{item.label}</p>
              <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
