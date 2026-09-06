import { Briefcase, Workflow } from "lucide-react";

import type { CurriculumCategory } from "../types";

/** Digital Marketing categories, chunk 4: Freelancing & Clients, Marketing Automation. */
export const dmCategories4: CurriculumCategory[] = [
  {
    slug: "freelancing-client-acquisition",
    name: "Freelancing & Clients",
    tagline: "Turn skills into income",
    description:
      "Package your marketing skills into services, find paying clients and win projects with strong proposals.",
    icon: Briefcase,
    accentClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    topics: [
      {
        slug: "freelance-services",
        title: "Your Freelance Services",
        description:
          "Package your skills into clear services with pricing, deliverables and turnaround.",
        difficulty: "Beginner",
        duration: "13 min",
        tags: ["freelance", "services"],
        objectives: [
          "Turn skills into named services with clear deliverables.",
          "Price from value and effort, not hourly guessing.",
          "Scope work so 'yes' outcomes build your reputation.",
        ],
        lesson: [
          {
            heading: "From skills to named services",
            paragraphs: [
              "Clients buy outcomes, not skill lists. Package what you do into named services — 'Website content refresh', '30-day social launch' — each with deliverables, timeline and price.",
              "A clear service page sells itself; 'I do marketing' sells nothing.",
            ],
            bullets: [
              "Name the service from the client's outcome.",
              "List 3–5 deliverables and the timeline.",
              "State pricing or a 'starting at' range.",
            ],
          },
          {
            heading: "Price with a number in mind",
            paragraphs: [
              "Price from the value to the client and your effort, then sanity-check against the market. Hourly billing caps your income; scoped prices reward results.",
              "Raise prices as your portfolio and reputation prove out.",
            ],
            bullets: [
              "Value-based: what's it worth to their business?",
              "Effort check: days × your desired day rate.",
              "Start with scoped packages; iterate quarterly.",
            ],
          },
          {
            heading: "Scope so wins stay wins",
            paragraphs: [
              "Write the scope in the proposal: what's included, what's not, revision limits, timeline, payment terms. Scope creep kills margins and joy.",
              "A written scope is the professional backstop when projects shift.",
            ],
            bullets: [
              "Included/not-included lists per deliverable.",
              "Revisions capped (e.g., two rounds).",
              "A simple contract, even for small jobs.",
            ],
          },
          {
            heading: "Offer a small, honest starter",
            paragraphs: [
              "A modest 'starter' package reduces the barrier for new clients and lets you prove value. From the starter, satisfied clients buy bigger scopes.",
              "The starter should be profitable alone and built for upsell.",
            ],
            bullets: [
              "One deliverable, fixed price, quick win.",
              "Back it with a two-line case or sample.",
              "Path to the next package is obvious.",
            ],
            tip: "A one-page service sheet (name, who it's for, deliverables, price) beats a long pitch deck in winning casual clients.",
          },
        ],
        takeaways: [
          "Package skills into named services clients can buy.",
          "Price from value and effort; scope protects margins.",
          "A profitable starter service wins trust and the upsell.",
        ],
        practice:
          "Write your one-page service sheet this week: three named services, deliverables, starting price and turnaround for each — then send it to one potential client.",
      },
      {
        slug: "where-to-find-clients",
        title: "Where to Find Clients",
        description:
          "Proven places to find paying clients — platforms, communities, referral systems and outreach.",
        difficulty: "Intermediate",
        duration: "14 min",
        tags: ["clients", "outreach"],
        objectives: [
          "Understand the client pipelines: platforms, communities, referrals.",
          "Run focused outreach that earns replies.",
          "Build a referral engine that brings repeat work.",
        ],
        lesson: [
          {
            heading: "The three pipelines",
            paragraphs: [
              "Platforms (marketplaces) and communities offer volume; referrals offer trust and quality; outreach reaches people who haven't found you. Most freelancers need all three.",
              "Each pipeline has a currency: platforms = profiles and reviews, communities = genuine help, referrals = happy clients.",
            ],
            bullets: [
              "Platforms: low friction, review-driven, some margin cost.",
              "Communities: relationship-driven, trusted recommendations.",
              "Referrals: highest quality, grows on delivery.",
            ],
          },
          {
            heading: "Communities before strangers",
            paragraphs: [
              "Be visibly useful where your buyers already gather (niche groups, forums, newsletters). Answer questions, share process, and let the reputation bring the ask.",
              "Strangers from cold outreach cost more to convince than people who've watched you help others.",
            ],
            bullets: [
              "Pick where your buyer actually spends time.",
              "Help in public; offers follow naturally.",
              "Let a short intro + case study live on your profile.",
            ],
          },
          {
            heading: "Outreach that earns a reply",
            paragraphs: [
              "Short, personal outreach wins: reference something specific about their business and offer one useful thought, not 'can we chat?'.",
              "Follow up once, then stop. Volume of relevant touches beats one-shot blasts.",
            ],
            bullets: [
              "One specific insight about their site/business.",
              "Offer value or a small sample, not a pitch.",
              "Warm outreach (previous interaction) converts best.",
            ],
          },
          {
            heading: "Build the referral engine",
            paragraphs: [
              "Ask happy clients for introductions, offer a referral incentive, and send periodic 'who should we help next?' notes. Referrals come from delight, surfaced deliberately.",
              "Your delivery quality is the engine; ask and remind are the accelerator.",
            ],
            bullets: [
              "Ask at the moment of a great result.",
              "Create a simple redirect: 'who else needs this?'.",
              "Track referral source in your pipeline.",
            ],
            tip: "Keep a public 'working with me' one-pager so a happy client can forward it in under a minute.",
          },
        ],
        takeaways: [
          "Platforms, communities and referrals form the three pipelines.",
          "Being useful in communities beats cold-shouting.",
          "Delight plus polite reminding keeps the referral engine fed.",
        ],
        practice:
          "This week: join one niche community and answer 3 questions genuinely, write a 5-line personal outreach to 5 prospects, and ask one happy client for an introduction.",
      },
      {
        slug: "proposals-that-win",
        title: "Proposals That Win",
        description:
          "Write proposals that answer client questions, show proof and make saying yes easy.",
        difficulty: "Intermediate",
        duration: "12 min",
        tags: ["proposals", "sales"],
        objectives: [
          "Write proposals that answer the client's real questions.",
          "Lead with proof and a clear, scoped plan.",
          "Make yes the obvious, low-risk choice.",
        ],
        lesson: [
          {
            heading: "Answer their unasked question",
            paragraphs: [
              "Clients don't think in deliverables; they think 'will this work and can I trust you?' Answer risk and proof first, then process.",
              "Mirror their words for their problem back to them — it's proof you listened.",
            ],
            bullets: [
              "Open: you understand their situation.",
              "Show how you've solved similar problems.",
              "Make the connection between their goal and your plan explicit.",
            ],
          },
          {
            heading: "Proof beats adjectives",
            paragraphs: [
              "Past results, client quotes and concrete numbers out-sell any adjective. Include one matched case study with the specific outcome.",
              "A small relevant result beats a large irrelevant one.",
            ],
            bullets: [
              "One case study matched to their industry/task.",
              "Numbers: time saved, leads, conversions.",
              "A client quote with context adds trust.",
            ],
          },
          {
            heading: "The scoped plan makes it real",
            paragraphs: [
              "Break the work into phases with deliverables, timings and the investment. A concrete plan reads as competence; vague plans read as uncertainty.",
              "Include what's included and what's not — clarity both ways prevents scope fights.",
            ],
            bullets: [
              "Phases: what happens, when, what you deliver.",
              "Investment: clear price and payment terms.",
              "Included/not-included: protects everyone.",
            ],
          },
          {
            heading: "Reduce the risk of yes",
            paragraphs: [
              "Make accepting easy: a simple signature, a modest first step, a money-back or satisfaction clause where sensible, and a clear 'what happens next'.",
              "The proposal's job is to remove reasons to say no.",
            ],
            bullets: [
              "One clear next step (reply to start).",
              "A small pilot or milestone reduces commitment fear.",
              "Answer objections you already heard from them.",
            ],
          },
        ],
        takeaways: [
          "Lead by proving understanding, then proof, then plan.",
          "A scoped, phased plan reads as competence.",
          "Make 'yes' easy and low-risk — answer every quiet objection.",
        ],
        practice:
          "Rewrite one past proposal using this structure: mirror-their-problem, one matched case study, scoped phases, and a single low-risk next step.",
      },
    ],
  },
  {
    slug: "marketing-automation",
    name: "Marketing Automation",
    tagline: "Scale without burnout",
    description:
      "Remove repetitive work with rules, scheduling and AI — so your marketing runs even when you are busy.",
    icon: Workflow,
    accentClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    topics: [
      {
        slug: "automation-tools-basics",
        title: "Automation Tools & Basics",
        description:
          "Take repetitive marketing work off your plate with basic automation rules and triggers.",
        difficulty: "Beginner",
        duration: "11 min",
        tags: ["automation", "tools"],
        objectives: [
          "Spot the marketing tasks best suited to automation.",
          "Wire a basic trigger → action rule.",
          "Keep quality high with reviews and fallbacks.",
        ],
        lesson: [
          {
            heading: "What to automate first",
            paragraphs: [
              "Best first automations are high-frequency, low-risk and rule-shaped: scheduling posts, capturing leads from forms, notifying on responses, drafting routine replies.",
              "Automate the mechanics; keep judgment and tone human.",
            ],
            bullets: [
              "Scheduling: content calendar → publishing.",
              "Capture: form submissions → CRM/email list.",
              "Notify: signups/comments → your phone.",
            ],
          },
          {
            heading: "The trigger → action pattern",
            paragraphs: [
              "Every automation is a chain: when X happens (trigger), do Y (action). Start with one link, prove it, then add branches.",
              "A clear name and description per rule keeps the system readable.",
            ],
            bullets: [
              "Trigger: form, email, schedule, tag, payment.",
              "Action: send, log, tag, notify, create.",
              "Branch (later): if/else on conditions.",
            ],
          },
          {
            heading: "Choose tools by connectors, not hype",
            paragraphs: [
              "Pick automation platforms that connect the apps you already use. Check free tiers and trigger limits before committing.",
              "The best platform is the one whose connectors match your stack.",
            ],
            bullets: [
              "Map your current app stack first.",
              "Free tier: enough to learn the pattern.",
              "Test one real flow before a bigger build.",
            ],
          },
          {
            heading: "Reviews keep automation safe",
            paragraphs: [
              "Automated messages still represent you. Build in approval steps for anything public, and run a monthly audit of what each rule does.",
              "An automated system without review is a reputation risk.",
            ],
            bullets: [
              "Human approval for anything customer-facing.",
              "Test triggers with real inputs quarterly.",
              "Document rules so a teammate can run them.",
            ],
          },
        ],
        takeaways: [
          "Automate mechanics and scheduling; keep judgment human.",
          "Start with one trigger → action link and prove it.",
          "Approval steps and audits protect brand and reputation.",
        ],
        practice:
          "List your five most repetitive marketing tasks, mark each as 'automate now / later / never', and wire ONE trigger → action rule this week.",
      },
      {
        slug: "automate-social-email",
        title: "Automate Social & Email",
        description:
          "Schedule content and send triggered email without busywork using simple connectors.",
        difficulty: "Intermediate",
        duration: "13 min",
        tags: ["social", "email"],
        objectives: [
          "Schedule a month of social content in batches.",
          "Set up triggered emails for onboarding and follow-ups.",
          "Keep the system nutritious, not just on-time.",
        ],
        lesson: [
          {
            heading: "Social scheduling done weekly",
            paragraphs: [
              "One scheduling session per week feeds every platform for days. Batch ideas, write captions, then let the scheduler publish at your best times.",
              "Schedule is for consistency, not for abandoning engagement — replies still need you.",
            ],
            bullets: [
              "Batch captions against your calendar.",
              "Set per-platform best times.",
              "Keep reply windows in your schedule.",
            ],
          },
          {
            heading: "Triggered emails that feel hand-timed",
            paragraphs: [
              "Automation shines at the moments of interest: welcome, first-purchase thank-you, cart reminder, re-engagement. They arrive exactly when the reader cares.",
              "A welcome flow plus a cart reminder is the highest-ROI email automation a small business can run.",
            ],
            bullets: [
              "Welcome: deliver the magnet, set expectations.",
              "Cart: recover with clarity, not pressure.",
              "Post-purchase: thank-you, how-to, gentle next step.",
            ],
          },
          {
            heading: "Connectors make it a system",
            paragraphs: [
              "Bridge your apps: form → email list, email list → send platform, purchase → tag. Each connector closes a loop that previously needed babysitting.",
              "Map the loops you run by hand, then connect them one at a time.",
            ],
            bullets: [
              "Form submit → welcome email → follow-up.",
              "Tag → campaign → re-engagement.",
              "Purchase → receipt → post-purchase flow.",
            ],
          },
          {
            heading: "Keep it human at the edges",
            paragraphs: [
              "Automated email should sound like a person wrote it, with honest subject lines and reasonable frequency. Over-automation feels spammy and burns your list.",
              "Review flow copy quarterly and prune what no longer fits.",
            ],
            bullets: [
              "Write flows in your real voice.",
              "Respect frequency — a flow on every action is noise.",
              "Quarterly prune: delete, merge, refresh.",
            ],
            tip: "Set a weekly 15-minute 'automation check': test one flow, read one report, note one improvement.",
          },
        ],
        takeaways: [
          "Batch schedule social; automate the moments that matter.",
          "Welcome and cart flows pay the highest ROI.",
          "Connectors close the loops; reviews keep it human.",
        ],
        practice:
          "This month: schedule two weeks of social in one session and draft the 3-email welcome flow plus a cart reminder as your first automated campaigns.",
      },
      {
        slug: "ai-in-marketing-ops",
        title: "AI in Marketing Ops",
        description:
          "Layer AI into marketing workflows for copy, segmentation, reporting and campaign iteration.",
        difficulty: "Advanced",
        duration: "14 min",
        tags: ["AI", "operations"],
        objectives: [
          "Apply AI to copy, segmentation and reporting workflows.",
          "Automate recurring reports and campaign drafts.",
          "Keep brand quality with AI + human checks.",
        ],
        lesson: [
          {
            heading: "Where AI multiplies marketing ops",
            paragraphs: [
              "AI earns its keep in high-volume, template-shaped marketing work: drafting copy at scale, segmenting audiences, summarizing campaign reports and generating variant tests.",
              "It performs best on jobs with a clear input → output and a human review.",
            ],
            bullets: [
              "Copy: drafts, variants, localization.",
              "Segmentation: group audiences by behavior and intent.",
              "Reporting: weekly summaries from raw numbers.",
            ],
          },
          {
            heading: "Automate the recurring report chain",
            paragraphs: [
              "Tie your data sources to an AI step that summarizes what changed and why, then delivers a polished email or document on schedule.",
              "A 15-line AI summary beats a 3-page report nobody reads.",
            ],
            bullets: [
              "Source: analytics/ads data → AI narrative → send.",
              "Include the numbers, not just the narrative.",
              "Schedule delivery for your decision time.",
            ],
          },
          {
            heading: "Draft campaigns at scale, review every one",
            paragraphs: [
              "Let AI generate campaign variants from your brief — subject lines, hooks, landers — then edit ruthlessly for brand voice before anything ships.",
              "AI multiplies your output, but nothing public ships unaided.",
            ],
            bullets: [
              "Brief: goal, audience, tone, offer, constraints.",
              "Generate → rank → edit → approve → launch.",
              "Keep a 'sounds like us' checkpoint.",
            ],
          },
          {
            heading: "Watch quality and compliance",
            paragraphs: [
              "AI copy can miss nuance, overclaim or drift off-brand. Track checked results over time and keep human sign-off on anything customers see.",
              "The ops win isn't zero-effort marketing — it's the same quality at a fraction of the hours.",
            ],
            bullets: [
              "Human approval for customer-facing output.",
              "Log flawed generations to sharpen prompts.",
              "Audit AI-generated claims against facts.",
            ],
            tip: "Double-click on the process: the templates and prompts you refine are the real automation asset.",
          },
        ],
        takeaways: [
          "AI accelerates template-shaped marketing work: copy, segmentation, reporting.",
          "Automate the report chain and campaign drafts; review everything.",
          "Refining prompts and templates compounds the leverage.",
        ],
        practice:
          "Pick one recurring marketing deliverable (weekly report or a campaign batch) and run it through an AI workflow this week, keeping your existing checklist as the approval gate.",
      },
    ],
  },
];