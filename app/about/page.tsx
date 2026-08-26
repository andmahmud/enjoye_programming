import {
  ArrowRight,
  Banknote,
  BookOpen,
  BrainCircuit,
  Building2,
  Cloud,
  Code2,
  Crown,
  Database,
  ExternalLink,
  FileText,
  Flame,
  GitBranch,
  Layers,
  Mail,
  Megaphone,
  MessageCircle,
  Network,
  Package,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Webhook,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsAppIcon,
} from "@/components/social-icons";
import { companyContact, personalContact } from "@/lib/contact";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "MD MAHMUDUL HASAN — App Developer & Software Engineer",
  description:
    "Personal profile of MD MAHMUDUL HASAN — App Developer & Software Engineer specializing in Flutter, Dart, Firebase, Laravel, Next.js, TypeScript, REST APIs, app monetization and software development.",
  alternates: { canonical: "/about" },
};

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const TECH_STACK = {
  Mobile: [
    { name: "Flutter", icon: Smartphone },
    { name: "Dart", icon: Code2 },
    { name: "Android", icon: Phone },
  ],
  Frontend: [
    { name: "Next.js", icon: Layers },
    { name: "React", icon: Palette },
    { name: "TypeScript", icon: FileText },
    { name: "Tailwind CSS", icon: PaintbrushIcon },
  ],
  Backend: [
    { name: "Laravel", icon: Building2 },
    { name: "PHP", icon: Code2 },
    { name: "Node.js", icon: ServerIcon },
    { name: "REST API", icon: Webhook },
  ],
  Database: [
    { name: "Firebase Firestore", icon: Flame },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
  ],
  "Cloud & Tools": [
    { name: "Firebase", icon: Flame },
    { name: "Vercel", icon: Cloud },
    { name: "GitHub", icon: GitBranch },
    { name: "Git", icon: GitBranch },
    { name: "Play Store", icon: Smartphone },
    { name: "AdMob", icon: Megaphone },
  ],
  "AI / Automation": [
    { name: "AI APIs", icon: BrainCircuit },
    { name: "OpenRouter", icon: Network },
    { name: "n8n", icon: Zap },
    { name: "AI Automation", icon: Sparkles },
  ],
} as const;

const WHAT_I_DO = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Flutter/Dart based Android and cross-platform applications.",
  },
  {
    icon: Layers,
    title: "Web Development",
    description: "Modern web applications using Next.js, TypeScript and Tailwind CSS.",
  },
  {
    icon: ServerIcon,
    title: "Backend & APIs",
    description: "REST APIs, Laravel, Node.js, authentication, databases and backend architecture.",
  },
  {
    icon: Flame,
    title: "Firebase",
    description: "Authentication, Firestore, Cloud Functions and Firebase-based application infrastructure.",
  },
  {
    icon: Banknote,
    title: "App Monetization",
    description: "AdMob, subscriptions, in-app purchases, premium features and revenue strategies.",
  },
  {
    icon: Rocket,
    title: "App Publishing",
    description: "Google Play Console, store listing, app releases, testing and publishing workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "AI-powered applications, automation systems, AI APIs and intelligent workflows.",
  },
  {
    icon: Building2,
    title: "Business Software",
    description: "ERP, HR, payroll, employee management, attendance, leave management and business systems.",
  },
];

const JOURNEY_STEPS = [
  {
    phase: "Learning",
    title: "Start with Fundamentals",
    description: "Learning programming languages, frameworks and development fundamentals.",
    icon: BookOpen,
    color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    phase: "Building",
    title: "Build Real Projects",
    description: "Applying knowledge to build actual applications, tools and systems.",
    icon: Code2,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    phase: "Publishing",
    title: "Ship to Production",
    description: "Publishing apps on Google Play Store and deploying web applications live.",
    icon: Rocket,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    phase: "Monetizing",
    title: "Turn Apps Into Income",
    description: "Integrating AdMob, subscriptions and monetization strategies into published products.",
    icon: Banknote,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    phase: "Products",
    title: "Build Products & Systems",
    description: "Developing larger software products, business systems and SaaS applications.",
    icon: Crown,
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
];

const PROJECTS = [
  {
    title: "Biology Study & Quiz",
    description:
      "Educational quiz application with chapter-based learning, flashcards and difficulty levels.",
    technologies: ["Flutter", "Dart", "Firebase"],
    status: "Published",
    category: "Education",
  },
  {
    title: "n8n Workflow Manager",
    description:
      "A mobile-focused application for managing and automating n8n workflows on the go.",
    technologies: ["Flutter", "REST API", "n8n"],
    status: "In Development",
    category: "Automation",
  },
  {
    title: "PDF Scanner & Tools",
    description:
      "PDF and document utility application with scanning, editing and management features.",
    technologies: ["Flutter", "Dart"],
    status: "In Development",
    category: "Utility",
  },
  {
    title: "ERP / Payroll System",
    description:
      "Business management system including employees, attendance, leave, payroll and administration.",
    technologies: ["Laravel", "MySQL", "Next.js"],
    status: "In Development",
    category: "Business",
  },
  {
    title: "Developer Control Center",
    description:
      "Developer-focused platform for managing and monitoring services like GitHub, Vercel and Supabase.",
    technologies: ["Next.js", "TypeScript", "REST API"],
    status: "In Development",
    category: "Developer Tools",
  },
  {
    title: "AI Social Media Manager",
    description:
      "AI-powered social media and business management tool for content scheduling and analytics.",
    technologies: ["Next.js", "AI APIs", "TypeScript"],
    status: "In Development",
    category: "AI / Social",
  },
  {
    title: "Facebook Auto Reply System",
    description:
      "Facebook Page comment and reply automation with webhook, queue, AI and reply-engine architecture.",
    technologies: ["Node.js", "REST API", "AI"],
    status: "In Development",
    category: "Automation",
  },
];

const MONETIZATION_ADS = [
  { name: "Banner Ads", description: "Standard ad placements within app layouts." },
  { name: "Interstitial Ads", description: "Full-screen ads displayed at natural transition points." },
  { name: "Rewarded Ads", description: "User-opted ads that reward engagement with in-app benefits." },
  { name: "App Open Ads", description: "Ads shown when the app is opened or returned to foreground." },
];

const MONETIZATION_MODELS = [
  {
    icon: Crown,
    title: "Premium Features",
    items: ["Free vs Premium versions", "Feature unlocking"],
  },
  {
    icon: Target,
    title: "Subscriptions",
    items: ["Monthly subscriptions", "Premium plans", "Subscription management"],
  },
  {
    icon: ShoppingCart,
    title: "In-App Purchases",
    items: ["Google Play Billing", "Premium products"],
  },
  {
    icon: Rocket,
    title: "Publishing",
    items: ["Google Play Console", "Store listings", "App testing", "Production releases"],
  },
];

const PHILOSOPHY = [
  {
    title: "Build Real Things",
    description: "I focus on practical products that solve actual problems.",
    icon: Rocket,
  },
  {
    title: "Learn by Building",
    description: "I prefer learning technologies by applying them to real applications.",
    icon: BookOpen,
  },
  {
    title: "Production First",
    description: "Code should eventually work reliably in a real product environment.",
    icon: ShieldCheck,
  },
  {
    title: "Keep Improving",
    description: "Every project is an opportunity to improve architecture, UX and development practices.",
    icon: TrendingUp,
  },
];

const CURRENT_FOCUS = [
  "Flutter development",
  "Advanced app architecture",
  "Firebase",
  "Laravel APIs",
  "Next.js",
  "AI integrations",
  "App monetization",
  "Developer tools",
  "Automation",
  "SaaS/product development",
];

const BUSINESSES = [
  {
    name: "Orivix Devs",
    description:
      "Software, app and digital product development company. Building mobile apps, web platforms, backend systems and AI-powered tools for real-world clients and products.",
    website: "https://orivixdevs.com",
    type: "Company",
    services: ["App Development", "Web Development", "Backend Systems", "AI Products"],
    accent: "bg-primary/5 text-primary",
    borderHover: "hover:border-primary/30",
  },
  {
    name: "Kathergolpo",
    description:
      "Digital storytelling and content platform. Creating engaging digital experiences and products.",
    website: "http://kathergolpo.com",
    type: "Business",
    services: ["Digital Products", "Content Platform", "Storytelling"],
    accent: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    borderHover: "hover:border-rose-500/30",
  },
  {
    name: "Enjoye Programming",
    description:
      "Developer learning platform and YouTube channel. Practical tutorials, documentation and monetization guides for app developers.",
    website: siteConfig.youtubeUrl,
    type: "Platform",
    services: ["YouTube Tutorials", "Documentation", "Developer Tools", "Monetization Guides"],
    accent: "bg-red-500/10 text-red-600 dark:text-red-400",
    borderHover: "hover:border-red-500/30",
  },
];

const WORK_WITH_CATEGORIES = [
  "Educational Apps",
  "Utility Apps",
  "Developer Tools",
  "Monetization Apps",
  "ERP Systems",
  "Payroll Systems",
  "Business Management Systems",
  "AI Applications",
  "Automation Systems",
  "Social Media Tools",
  "API-based Applications",
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

function PaintbrushIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* ------------------------------------------------------------------ */}
      {/*  1. Hero / Profile Header                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden border-b">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-screen-2xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-14 lg:px-8 lg:py-24">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative size-44 overflow-hidden rounded-2xl border-2 border-border bg-muted shadow-lg sm:size-52 lg:size-60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile_image.jpg"
                  alt="MD MAHMUDUL HASAN"
                  className="h-full w-full object-cover"
                  width={240}
                  height={240}
                />
              </div>
              <span
                className="absolute bottom-2 right-2 size-3.5 rounded-full border-2 border-background bg-emerald-500"
                title="Available"
                aria-label="Available for work"
              />
            </div>
          </div>

          {/* Info */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl xl:text-5xl">
              MD MAHMUDUL HASAN
            </h1>
            <p className="mt-2 text-lg font-medium text-muted-foreground sm:text-xl">
              App Developer &amp; Software Engineer
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build mobile applications, web applications, backend systems, developer tools and
              monetization-focused products. From concept to production — I design, develop, publish
              and monetize real-world software.
            </p>

            <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground lg:justify-start">
              {["Flutter", "Dart", "Firebase", "Laravel", "Next.js", "TypeScript", "REST APIs", "MongoDB", "MySQL", "Node.js"].map(
                (tech, index) => (
                  <span key={tech} className="flex items-center gap-2">
                    {index > 0 && <span aria-hidden="true" className="text-border">·</span>}
                    {tech}
                  </span>
                ),
              )}
            </p>

            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
              Building Apps &bull; Building Products &bull; Learning &bull; Earning
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/docs">
                  View My Projects
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={personalContact.email.startsWith("YOUR_") ? "#contact" : `mailto:${personalContact.email}`}>
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  2. About Me                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20" id="about">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About Me</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a software and app developer focused on building real-world products rather than
                only experimenting with code. My work spans across mobile app development, web
                development, backend/API development and everything in between — from Firebase
                authentication to full business management systems.
              </p>
              <p>
                I build with Flutter and Dart for cross-platform mobile apps, Next.js and TypeScript
                for modern web applications, and Laravel and Node.js for backend APIs and server-side
                systems. I work with Firebase extensively — authentication, Firestore, Cloud Functions
                and the full Firebase ecosystem.
              </p>
              <p>
                Beyond just writing code, I focus on the complete product lifecycle: app monetization
                with AdMob and subscriptions, Google Play publishing, authentication systems,
                developer tools, AI-powered applications and business/ERP software. Every project I
                build is designed to solve a real problem and work reliably in production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  3. What I Do                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y bg-muted/30 py-16 sm:py-20" id="what-i-do">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What I Do</h2>
            <p className="mt-3 text-muted-foreground">
              The areas of software development I work in daily.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_I_DO.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  4. Tech Stack                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20" id="tech-stack">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Tech Stack</h2>
            <p className="mt-3 text-muted-foreground">
              Technologies and tools I use to build products.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(Object.entries(TECH_STACK) as [string, readonly { name: string; icon: React.FC<React.SVGProps<SVGSVGElement>> }[]][]).map(
              ([group, items]) => (
                <div key={group} className="rounded-xl border bg-card p-5 shadow-sm">
                  <h3 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                    {group}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 rounded-lg border bg-muted/40 px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <tech.icon className="size-3.5" aria-hidden="true" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  5. Development Journey                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y bg-muted/30 py-16 sm:py-20" id="journey">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">My Development Journey</h2>
            <p className="mt-3 text-muted-foreground">
              From learning fundamentals to building production products.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-3xl">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border sm:left-1/2 sm:-translate-x-px" aria-hidden="true" />
            <div className="space-y-10">
              {JOURNEY_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={step.phase}
                    className={cn(
                      "relative flex items-start gap-6 sm:gap-0",
                      isEven ? "sm:flex-row" : "sm:flex-row-reverse",
                    )}
                  >
                    <div className={cn("hidden sm:block sm:w-1/2", isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12")} />
                    <div className="absolute left-5 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-border bg-background sm:left-1/2">
                      <span className={cn("flex size-8 items-center justify-center rounded-full", step.color)}>
                        <step.icon className="size-4" aria-hidden="true" />
                      </span>
                    </div>
                    <div className={cn("ml-12 sm:ml-0 sm:w-1/2", isEven ? "sm:pl-12" : "sm:pr-12 sm:text-right")}>
                      <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {step.phase}
                      </span>
                      <h3 className="mt-2 text-lg font-bold tracking-tight">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  6. Featured Projects                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20" id="projects">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Projects</h2>
            <p className="mt-3 text-muted-foreground">
              A selection of projects I have built or am currently developing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30 hover:bg-accent/40"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {project.category}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      project.status === "Published"
                        ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        : "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                    )}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border bg-muted/40 px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  7. What I Work With                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y bg-muted/30 py-16 sm:py-20" id="work-with">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What I Work With</h2>
            <p className="mt-3 text-muted-foreground">
              Different types of applications and systems I build.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {WORK_WITH_CATEGORIES.map((category) => (
              <span
                key={category}
                className="rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  7b. Businesses & Ventures                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20" id="businesses">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Businesses &amp; Ventures</h2>
            <p className="mt-3 text-muted-foreground">
              The companies and platforms I am building and running.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESSES.map((biz) => (
              <a
                key={biz.name}
                href={biz.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-colors ${biz.borderHover} sm:p-7`}
              >
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${biz.accent}`}>
                    {biz.type}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold tracking-tight">{biz.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {biz.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {biz.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-md border bg-muted/40 px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Visit website
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  8. App Monetization Experience                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20" id="monetization">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">App Monetization Experience</h2>
            <p className="mt-3 text-muted-foreground">
              Strategies and tools I use to turn apps into sustainable revenue.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* AdMob */}
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <Megaphone className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold tracking-tight">AdMob</h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {MONETIZATION_ADS.map((ad) => (
                  <li key={ad.name} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>
                      <strong className="font-medium text-foreground">{ad.name}</strong> — {ad.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Models */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {MONETIZATION_MODELS.map((model) => (
                <div
                  key={model.title}
                  className="rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
                >
                  <div className="flex items-center gap-2.5">
                    <model.icon className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="font-semibold">{model.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {model.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1 size-1 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  9. Developer Philosophy                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y bg-muted/30 py-16 sm:py-20" id="philosophy">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How I Build</h2>
            <p className="mt-3 text-muted-foreground">
              The principles that guide my work as a developer and builder.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {PHILOSOPHY.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border bg-card p-5 shadow-sm transition-colors hover:border-primary/30"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border bg-card p-8 text-center shadow-sm sm:p-10">
            <p className="text-2xl font-bold tracking-tight sm:text-3xl">
              Learn <span className="text-primary">&rarr;</span> Build{" "}
              <span className="text-primary">&rarr;</span> Earn
            </p>
            <p className="mt-3 text-muted-foreground">
              The core philosophy behind everything I do — learn new skills by building real things,
              then turn those skills into products that generate value.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  10. Current Focus                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20" id="focus">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Currently Building &amp; Learning</h2>
            <p className="mt-3 text-muted-foreground">
              My current areas of focus and active development.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {CURRENT_FOCUS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  11. Personal Developer Stats                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y bg-muted/30 py-16 sm:py-20" id="stats">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">At a Glance</h2>
            <p className="mt-3 text-muted-foreground">
              A quick overview of my development work.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Projects Built", value: "Multiple", icon: Package },
              { label: "Technologies", value: "10+", icon: Code2 },
              { label: "App Categories", value: "8+", icon: Layers },
              { label: "Areas of Expertise", value: "10+", icon: Target },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl border bg-card p-5 shadow-sm text-center"
              >
                <stat.icon className="size-6 text-primary" aria-hidden="true" />
                <p className="mt-3 text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  12. Contact / Connect                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y bg-muted/30 py-16 sm:py-20" id="contact">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Let&apos;s Connect</h2>
            <p className="mt-3 text-muted-foreground">
              Have a project, idea, or collaboration in mind? Feel free to connect with me or reach
              out to my company.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {/* ---- Personal Contact ---- */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">Personal</h3>
                  <p className="text-sm text-muted-foreground">{personalContact.name}</p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                {/* Phone 1 */}
                <a
                  href={`tel:${personalContact.phones[0]}`}
                  className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-primary/30 hover:bg-accent/40"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground">Phone</p>
                    <p className="truncate text-sm font-medium">{personalContact.phones[0]}</p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                </a>

                {/* Phone 2 */}
                <a
                  href={`tel:${personalContact.phones[1]}`}
                  className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-primary/30 hover:bg-accent/40"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <Phone className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground">Phone</p>
                    <p className="truncate text-sm font-medium">{personalContact.phones[1]}</p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                </a>

                {/* WhatsApp */}
                <a
                  href={
                    personalContact.whatsapp.startsWith("YOUR_")
                      ? "#"
                      : `https://wa.me/${personalContact.whatsapp.replace(/[^0-9]/g, "")}`
                  }
                  target={personalContact.whatsapp.startsWith("YOUR_") ? undefined : "_blank"}
                  rel={personalContact.whatsapp.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <WhatsAppIcon className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground">WhatsApp</p>
                    <p className="truncate text-sm font-medium">
                      {personalContact.whatsapp.startsWith("YOUR_") ? "Add WhatsApp number" : personalContact.whatsapp}
                    </p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                </a>

                {/* Email */}
                <a
                  href={personalContact.email.startsWith("YOUR_") ? "#" : `mailto:${personalContact.email}`}
                  className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-primary/30 hover:bg-accent/40"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <Mail className="size-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground">Email</p>
                    <p className="truncate text-sm font-medium">
                      {personalContact.email.startsWith("YOUR_") ? "Add email address" : personalContact.email}
                    </p>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a
                  href={personalContact.github.startsWith("YOUR_") ? "#" : personalContact.github}
                  target={personalContact.github.startsWith("YOUR_") ? undefined : "_blank"}
                  rel={personalContact.github.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-primary/30 hover:bg-accent/40"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <GithubIcon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground">GitHub</p>
                    <p className="truncate text-sm font-medium">
                      {personalContact.github.startsWith("YOUR_") ? "Add GitHub profile" : personalContact.github.replace("https://", "")}
                    </p>
                  </div>
                  <ExternalLink className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" aria-hidden="true" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalContact.linkedin.startsWith("YOUR_") ? "#" : personalContact.linkedin}
                  target={personalContact.linkedin.startsWith("YOUR_") ? undefined : "_blank"}
                  rel={personalContact.linkedin.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#0077b5]/10 text-[#0077b5]">
                    <LinkedinIcon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground">LinkedIn</p>
                    <p className="truncate text-sm font-medium">
                      {personalContact.linkedin.startsWith("YOUR_") ? "Add LinkedIn profile" : personalContact.linkedin.replace("https://", "")}
                    </p>
                  </div>
                  <ExternalLink className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" aria-hidden="true" />
                </a>

                {/* Facebook */}
                <a
                  href={personalContact.facebook.startsWith("YOUR_") ? "#" : personalContact.facebook}
                  target={personalContact.facebook.startsWith("YOUR_") ? undefined : "_blank"}
                  rel={personalContact.facebook.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-[#1877f2]/30 hover:bg-[#1877f2]/5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#1877f2]/10 text-[#1877f2]">
                    <FacebookIcon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground">Facebook</p>
                    <p className="truncate text-sm font-medium">
                      {personalContact.facebook.startsWith("YOUR_") ? "Add Facebook profile" : personalContact.facebook.replace("https://", "")}
                    </p>
                  </div>
                  <ExternalLink className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a
                  href={personalContact.instagram.startsWith("YOUR_") ? "#" : personalContact.instagram}
                  target={personalContact.instagram.startsWith("YOUR_") ? undefined : "_blank"}
                  rel={personalContact.instagram.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                  className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-[#e4405f]/30 hover:bg-[#e4405f]/5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e4405f]/10 text-[#e4405f]">
                    <InstagramIcon />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-muted-foreground">Instagram</p>
                    <p className="truncate text-sm font-medium">
                      {personalContact.instagram.startsWith("YOUR_") ? "Add Instagram profile" : personalContact.instagram.replace("https://", "")}
                    </p>
                  </div>
                  <ExternalLink className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* ---- Company Contact ---- */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border-2 border-primary/10 bg-card p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Building2 className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{companyContact.name}</h3>
                    <p className="text-sm text-muted-foreground">{companyContact.tagline}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  {/* Company Email */}
                  <a
                    href={companyContact.email.startsWith("YOUR_") ? "#" : `mailto:${companyContact.email}`}
                    className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-primary/30 hover:bg-accent/40"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <Mail className="size-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-muted-foreground">Company Email</p>
                      <p className="truncate text-sm font-medium">
                        {companyContact.email.startsWith("YOUR_") ? "Add company email" : companyContact.email}
                      </p>
                    </div>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden="true" />
                  </a>

                  {/* Company Website */}
                  <a
                    href={companyContact.website.startsWith("YOUR_") ? "#" : companyContact.website}
                    target={companyContact.website.startsWith("YOUR_") ? undefined : "_blank"}
                    rel={companyContact.website.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-primary/30 hover:bg-accent/40"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <GlobeIcon className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-muted-foreground">Company Website</p>
                      <p className="truncate text-sm font-medium">
                        {companyContact.website.startsWith("YOUR_") ? "Add company website" : companyContact.website.replace("https://", "")}
                      </p>
                    </div>
                    <ExternalLink className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" aria-hidden="true" />
                  </a>

                  {/* Company LinkedIn */}
                  <a
                    href={companyContact.linkedin.startsWith("YOUR_") ? "#" : companyContact.linkedin}
                    target={companyContact.linkedin.startsWith("YOUR_") ? undefined : "_blank"}
                    rel={companyContact.linkedin.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#0077b5]/10 text-[#0077b5]">
                      <LinkedinIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-muted-foreground">LinkedIn</p>
                      <p className="truncate text-sm font-medium">
                        {companyContact.linkedin.startsWith("YOUR_") ? "Add LinkedIn page" : companyContact.linkedin.replace("https://", "")}
                      </p>
                    </div>
                    <ExternalLink className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" aria-hidden="true" />
                  </a>

                  {/* Company Facebook */}
                  <a
                    href={companyContact.facebook.startsWith("YOUR_") ? "#" : companyContact.facebook}
                    target={companyContact.facebook.startsWith("YOUR_") ? undefined : "_blank"}
                    rel={companyContact.facebook.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-3 rounded-xl border bg-background p-3.5 transition-colors hover:border-[#1877f2]/30 hover:bg-[#1877f2]/5"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#1877f2]/10 text-[#1877f2]">
                      <FacebookIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-medium text-muted-foreground">Facebook</p>
                      <p className="truncate text-sm font-medium">
                        {companyContact.facebook.startsWith("YOUR_") ? "Add Facebook page" : companyContact.facebook.replace("https://", "")}
                      </p>
                    </div>
                    <ExternalLink className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Visit Company CTA */}
              <a
                href={companyContact.website.startsWith("YOUR_") ? "#" : companyContact.website}
                target={companyContact.website.startsWith("YOUR_") ? undefined : "_blank"}
                rel={companyContact.website.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 rounded-2xl border-2 border-primary/20 bg-primary/5 p-5 transition-colors hover:border-primary/40 hover:bg-primary/10 sm:p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                  <Building2 className="size-6" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-bold tracking-tight">{companyContact.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{companyContact.tagline}</p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  13. Quick Contact CTA                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border bg-muted/30 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to build something?</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Let&apos;s turn your ideas into real products. Reach out and let&apos;s start building.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" asChild>
                <a href={personalContact.email.startsWith("YOUR_") ? `mailto:${siteConfig.url}` : `mailto:${personalContact.email}`}>
                  <MessageCircle aria-hidden="true" />
                  Contact Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href={companyContact.website.startsWith("YOUR_") ? "#" : companyContact.website}
                  target={companyContact.website.startsWith("YOUR_") ? undefined : "_blank"}
                  rel={companyContact.website.startsWith("YOUR_") ? undefined : "noopener noreferrer"}
                >
                  <Building2 aria-hidden="true" />
                  Visit {companyContact.name}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
