import Link from "next/link";

import { Logo } from "@/components/logo";
import { YoutubeIcon } from "@/components/youtube-icon";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from "@/components/social-icons";
import { categories } from "@/lib/categories";
import { personalContact } from "@/lib/contact";
import { siteConfig } from "@/lib/site";

const productLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Tools", href: "/tools" },
  { label: "App Monetization", href: "/app-monetization" },
  { label: "About Me", href: "/about" },
];

const resourceLinks = [
  { label: "How to Make Money From Apps", href: "/docs/app-monetization/how-to-make-money-from-apps" },
  { label: "App Income Calculator", href: "/tools/app-income-calculator" },
  { label: "AdMob Getting Started", href: "/docs/admob/getting-started" },
  { label: "Play Store Publishing", href: "/docs/play-store/app-publishing" },
];

const footerTopics = ["flutter", "firebase", "admob", "play-store", "app-monetization"];

export function SiteFooter() {
  const topics = categories.filter((category) => footerTopics.includes(category.slug));

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm font-medium tracking-wide text-primary">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Practical tutorials, documentation, tools and resources for developers building apps
              and digital products.
            </p>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <YoutubeIcon className="size-4 text-red-600 dark:text-red-400" />
              Subscribe on YouTube
            </a>
          </div>

          <nav aria-label="Product links">
            <p className="text-sm font-semibold">Product</p>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Topic links">
            <p className="text-sm font-semibold">Topics</p>
            <ul className="mt-4 space-y-2.5">
              {topics.map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={`/docs/${topic.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {topic.name === "Play Store" ? "Play Store" : topic.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resource links">
            <p className="text-sm font-semibold">Resources</p>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: siteConfig.youtubeUrl, label: "YouTube", icon: <YoutubeIcon className="size-4 text-red-600 dark:text-red-400" /> },
              { href: personalContact.github, label: "GitHub", icon: <GithubIcon className="size-4 text-muted-foreground" /> },
              { href: personalContact.facebook, label: "Facebook", icon: <FacebookIcon className="size-4 text-[#1877f2]" /> },
              { href: personalContact.instagram, label: "Instagram", icon: <InstagramIcon className="size-4 text-[#e4405f]" /> },
              { href: personalContact.linkedin, label: "LinkedIn", icon: <LinkedinIcon className="size-4 text-[#0077b5]" /> },
              { href: personalContact.whatsapp.startsWith("YOUR_") ? "#" : `https://wa.me/${personalContact.whatsapp.replace(/[^0-9]/g, "")}`, label: "WhatsApp", icon: <WhatsAppIcon className="size-4 text-emerald-600 dark:text-emerald-400" /> },
            ]
              .filter((s) => !s.href.startsWith("YOUR_") && s.href !== "#")
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-8 items-center justify-center rounded-md transition-colors hover:bg-accent"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Built for developers, by developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
