import { ArrowRight, CirclePlay } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Enjoye Programming is the companion learning platform for the Enjoye Programming YouTube channel — practical app development and monetization knowledge for developers.",
  alternates: { canonical: "/about" },
};

const WORKFLOW = [
  { step: 1, title: "Create a YouTube video", description: "A new topic is explained on the channel." },
  { step: 2, title: "Write documentation", description: "The same topic becomes a written guide here." },
  { step: 3, title: "Connect the video", description: "The doc page embeds the matching video." },
  { step: 4, title: "Publish & link", description: "Related topics are cross-linked for deep learning." },
];

const TOPICS = [
  "Flutter",
  "Dart",
  "Firebase",
  "AdMob",
  "Google Play Console",
  "App Monetization",
  "APIs",
  "Android",
  "Developer Tools",
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-screen-lg px-4 py-14 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">About Enjoye Programming</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          <strong className="font-semibold text-foreground">{siteConfig.tagline}</strong> — that is
          the whole idea behind this platform. We teach practical programming skills, show you how to
          build real applications, and explain how to turn those apps into income.
        </p>
      </header>

      <section aria-labelledby="mission-heading" className="prose-section mt-12 max-w-3xl space-y-4">
        <h2 id="mission-heading" className="text-2xl font-bold tracking-tight">Our mission</h2>
        <p className="leading-relaxed text-muted-foreground">
          Most tutorials stop at “hello world”. We go further: building complete apps, publishing
          them to Google Play, integrating monetization properly, and understanding the business side
          of software. Every video on our YouTube channel has a companion documentation page here —
          so you can read the code, follow the steps at your own pace and come back anytime.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          The documentation is written to grow with the channel. New guides appear as new videos are
          published, and every guide links to related topics so you can keep learning without
          searching.
        </p>
      </section>

      <section aria-labelledby="topics-heading" className="mt-12">
        <h2 id="topics-heading" className="text-2xl font-bold tracking-tight">What we cover</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {TOPICS.map((topic) => (
            <span
              key={topic}
              className="rounded-full border bg-muted/40 px-3.5 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section aria-labelledby="workflow-heading" className="mt-12">
        <h2 id="workflow-heading" className="text-2xl font-bold tracking-tight">
          How this platform works
        </h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW.map((item) => (
            <li key={item.step} className="rounded-xl border bg-card p-5 shadow-sm">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                {item.step}
              </span>
              <p className="mt-3 font-semibold">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 rounded-2xl border bg-muted/30 p-8 text-center sm:p-10">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Learn with us</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Subscribe on YouTube for new tutorials every week, and use the documentation as your
          permanent reference.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <a href={siteConfig.youtubeUrl} target="_blank" rel="noopener noreferrer">
              <CirclePlay aria-hidden="true" />
              Visit the channel
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs">
              Browse documentation
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
