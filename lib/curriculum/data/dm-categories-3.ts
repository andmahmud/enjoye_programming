import { ChartLine, Link2, Mail } from "lucide-react";

import type { CurriculumCategory } from "../types";

/** Digital Marketing categories, chunk 3: Email, Affiliate, Google Analytics. */
export const dmCategories3: CurriculumCategory[] = [
  {
    slug: "email-marketing",
    name: "Email Marketing",
    tagline: "Your most profitable channel",
    description:
      "Grow a list the right way, write emails that get opened and automate campaigns that run themselves.",
    icon: Mail,
    accentClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    topics: [
      {
        slug: "email-lists-newsletters",
        title: "Email Lists & Newsletters",
        description:
          "Why lists matter and how to grow one the right way with lead magnets and opt-ins.",
        difficulty: "Beginner",
        duration: "11 min",
        tags: ["email", "list building"],
        objectives: [
          "Explain why an email list beats rented social reach.",
          "Create a lead magnet that earns signups.",
          "Grow a list with explicit consent and clean practices.",
        ],
        lesson: [
          {
            heading: "Why the list wins",
            paragraphs: [
              "Social platforms rent you their audience; your email list is owned. The same announcement reaches your list even when algorithms change or platforms disappear.",
              "Email consistently converts at several times the rate of social posts.",
            ],
            bullets: [
              "Owned audience: deliver directly, no algorithm in between.",
              "Repeated touch builds trust and buying intent.",
              "A list is an asset that keeps growing in value.",
            ],
          },
          {
            heading: "The lead magnet earns the email",
            paragraphs: [
              "People trade their address for value. Make a lead magnet that solves one specific, felt problem fast — a checklist, template, guide or mini-course.",
              "Specific beats broad: 'the 5-point ad launch checklist' outperforms 'marketing tips'.",
            ],
            bullets: [
              "One problem, solved in minutes.",
              "Deliverable now, downloadable, practical.",
              "Match the magnet to what you eventually sell.",
            ],
          },
          {
            heading: "Opt-ins done right",
            paragraphs: [
              "Use single opt-in with a clear expectation (what they get, how often) or double opt-in for maximum consent and deliverability. State what you'll send and respect it.",
              "Honest signups convert; bought or scammy lists poison deliverability.",
            ],
            bullets: [
              "Clear: what and how often, delivered instantly.",
              "Prefer double opt-in for higher quality and trust.",
              "Never buy lists — it breaks trust and deliverability.",
            ],
          },
          {
            heading: "Grow in the right places",
            paragraphs: [
              "Your signup form belongs everywhere your readers are: website, content, social bio, videos. Each channel feeds the list, the list feeds the business.",
              "Track where signups come from and double down on the winner.",
            ],
            bullets: [
              "Embed forms in posts, pages and product pages.",
              "Tease the magnet in every piece of content.",
              "Measure signups per channel monthly.",
            ],
            tip: "The welcome email sets the standard — make it useful and human, and the list performs from day one.",
          },
        ],
        takeaways: [
          "An email list is an owned asset that compounds.",
          "Lead magnets trade fast-specific value for signups.",
          "Honest opt-ins and good delivery habits protect your list.",
        ],
        practice:
          "This week create one lead magnet on your most-asked question and put signup forms in three places, then log where the first signups come from.",
      },
      {
        slug: "writing-emails-people-open",
        title: "Writing Emails People Open",
        description:
          "Subject lines, preview text and structure that earn opens and clicks — with copy-paste templates.",
        difficulty: "Beginner",
        duration: "10 min",
        tags: ["copywriting", "templates"],
        objectives: [
          "Write subject lines that earn opens without clickbait.",
          "Structure emails that get read and clicked.",
          "Use proven templates for common email types.",
        ],
        lesson: [
          {
            heading: "Subject lines are bargains, not traps",
            paragraphs: [
              "A subject line promises the email's value in a handful of words. Earn the open with curiosity, specificity or the reader's own words — and deliver on it.",
              "Clickbait lifts opens once and kills trust for the long term.",
            ],
            bullets: [
              "Specific beats vague: '3 fixes for your checkout'.",
              "Use their words, not your jargon.",
              "Keep it honest — the email must keep the promise.",
            ],
          },
          {
            heading: "Preview text is the second headline",
            paragraphs: [
              "The preview text after the subject decides the click. Use it to add context or the payoff: '…and why most teams skip it'.",
              "Write preview text deliberately; leaving it blank lets clients fill it with noise.",
            ],
            bullets: [
              "Complete the subject's thought.",
              "Reinforce the reader's gain.",
              "Set it explicitly in every send.",
            ],
          },
          {
            heading: "The email skeleton",
            paragraphs: [
              "A readable email: personal greeting, hook in one line, value in short paragraphs or bullets, one clear CTA, human sign-off.",
              "Long emails should read fast — short paragraphs, scannable bullets.",
            ],
            bullets: [
              "Hook: why this matters to them now.",
              "Body: one idea, short lines, no fluff.",
              "CTA: one button/line, stated clearly.",
            ],
          },
          {
            heading: "Templates to copy",
            paragraphs: [
              "Keep proven skeletons: the useful update, the 'here's a tip', the case study, the invitation, the re-engagement ('is this still useful?'). Fill-in-the-blank templates save the blank page.",
              "Your list responds to consistency — same voice, useful beats.",
            ],
            bullets: [
              "The useful tip: 3 bullets + one CTA.",
              "The story/review: result + how + offer.",
              "The check-in: warm, short, one question.",
            ],
            tip: "Write the CTA before the body — it forces the email to actually lead somewhere.",
          },
        ],
        takeaways: [
          "Subject + preview promise; the email must keep it.",
          "Short, scannable structure with one clear CTA reads best.",
          "Reusable templates remove the blank-page barrier.",
        ],
        practice:
          "Write one email this week using the skeleton: promise-honest subject, deliberate preview, 3-sentence body, single CTA — then send it to your recent top 10 subscribers.",
      },
      {
        slug: "automations-campaigns",
        title: "Automations & Campaigns",
        description:
          "Set up welcome sequences, abandoned-cart reminders and re-engagement campaigns that run themselves.",
        difficulty: "Intermediate",
        duration: "14 min",
        tags: ["automation", "campaigns"],
        objectives: [
          "Set up a welcome sequence that onboards new subscribers.",
          "Automate abandoned-cart and post-purchase follow-ups.",
          "Design re-engagement campaigns that clean the list.",
        ],
        lesson: [
          {
            heading: "The welcome sequence does the heavy lifting",
            paragraphs: [
              "New subscribers are at their most interested within days. A short welcome flow — deliver the magnet, set expectations, share your best value, soft-sell — captures that attention.",
              "Three to four emails, sent over a week, beat one 'thanks'.",
            ],
            bullets: [
              "Email 1: deliver the magnet and say what's next.",
              "Email 2: your best free insight/story.",
              "Email 3: a clear, low-pressure offer.",
            ],
          },
          {
            heading: "Behavioral automations that pay rent",
            paragraphs: [
              "Cart abandonment, first-purchase thank-you, and 'we miss you' flows run on triggers and quietly recover revenue you'd have lost.",
              "Automations are the highest-ROI hours in email marketing.",
            ],
            bullets: [
              "Abandoned cart: 2–3 emails, remove friction, add trust.",
              "Post-purchase: thank-you, how-to-use, upsell later.",
              "Win-back: relevance question, honest re-engagement.",
            ],
          },
          {
            heading: "Segment so people get what they want",
            paragraphs: [
              "Segments (by interest, behavior, purchase) let you send relevant messages instead of the same blast to everyone. Relevance drives opens and sales.",
              "Start with a few simple segments and grow from data.",
            ],
            bullets: [
              "Segment by how they signed up and what they bought.",
              "Send tailored value, not more mail.",
              "Review list health monthly.",
            ],
          },
          {
            heading: "Maintain deliverability",
            paragraphs: [
              "Clean the list: remove hard bounces, let inactive readers re-engage or float away, and keep a regular sending pattern. Reputation is built over months and lost in one spam folder.",
              "A smaller clean list beats a larger stale one every time.",
            ],
            bullets: [
              "Remove bounces and unengaged subscribers.",
              "Keep a consistent cadence.",
              "Watch open and complaint rates.",
            ],
          },
        ],
        takeaways: [
          "Welcome flows capture the highest-interest moment.",
          "Behavioral automations buy back revenue automatically.",
          "Segments, cleaning and cadence protect deliverability.",
        ],
        practice:
          "Map your welcome sequence this week (3–4 emails), then draft the abandoned-cart and win-back flow triggers — and set a monthly list-cleaning rule.",
      },
    ],
  },
  {
    slug: "affiliate-marketing",
    name: "Affiliate Marketing",
    tagline: "Earn commissions with content",
    description:
      "Promote products you believe in and earn — structured offers, honest reviews and content that converts.",
    icon: Link2,
    accentClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    topics: [
      {
        slug: "affiliate-basics",
        title: "Affiliate Marketing Basics",
        description:
          "How affiliate programs work and how people earn commissions promoting other people's products.",
        difficulty: "Beginner",
        duration: "10 min",
        tags: ["affiliate", "basics"],
        objectives: [
          "Explain how affiliate commissions work.",
          "Recognize the programs and players in the model.",
          "See affiliate as earned trust, not fast money.",
        ],
        lesson: [
          {
            heading: "The affiliate model in one picture",
            paragraphs: [
              "A creator promotes a merchant's product with a tracked link. When a reader buys through that link, the creator earns a commission. Merchant converts, creator earns.",
              "It's performance marketing: the merchant pays only for results.",
            ],
            bullets: [
              "You recommend → reader clicks your link → buy → commission.",
              "Commissions are a share of the sale, set by the program.",
              "Tracking identifies the sale to your link (cookies).",
            ],
          },
          {
            heading: "The players",
            paragraphs: [
              "Merchants run programs (often via networks). Networks aggregate thousands of programs and handle tracking and payouts. Affiliates supply content and reach.",
              "Most beginners start on networks or direct partner programs of tools they already use.",
            ],
            bullets: [
              "Merchant: the product owner paying commission.",
              "Network: middle layer for programs, tracking, payments.",
              "Affiliate: you — the trusted recommender.",
            ],
          },
          {
            heading: "What earns: trust first, then commissions",
            paragraphs: [
              "Commissions grow with trust: honest reviews, real experience and genuinely useful recommendations. Readers who trust you click; those you've burned never return.",
              "The #1 rankers are helpful content that happens to recommend — not link dumps.",
            ],
            bullets: [
              "Recommend only what you'd vouch for.",
              "Disclose affiliate links clearly — it's the law and it builds trust.",
              "Value first, offer after.",
            ],
          },
          {
            heading: "The realistic income curve",
            paragraphs: [
              "Affiliate income snowballs: it starts small as content ranks and trust builds, then compounds as your library grows. Treat it as a content business, not a hack.",
              "Income per click depends on niche, product price and conversion — choose deliberately.",
            ],
            bullets: [
              "Time horizon: months, not weeks.",
              "Wide breadcrumbs: searches, emails, reviews compound.",
              "Diversify into owned audiences (email) to smooth income.",
            ],
          },
        ],
        takeaways: [
          "Merchant pays only for real conversions via your links.",
          "Trust and honest recommendations convert; link dumps don't.",
          "Affiliate income is a compounding content business.",
        ],
        practice:
          "List five tools or products you already use and would honestly recommend, then check each for an affiliate program and note the commission terms.",
      },
      {
        slug: "choosing-offers-partners",
        title: "Choosing Offers & Partners",
        description:
          "Pick products that fit your audience, compare commission structures and join the right programs.",
        difficulty: "Intermediate",
        duration: "12 min",
        tags: ["offers", "programs"],
        objectives: [
          "Judge a product's fit for your audience before promoting.",
          "Compare commission structures meaningfully.",
          "Pick programs worth the effort of promotion.",
        ],
        lesson: [
          {
            heading: "Fit beats commission rate",
            paragraphs: [
              "A product that genuinely helps your audience converts and earns more than a high-rate product nobody needs. Start from audience → problem → product.",
              "You'll write, email and defend whatever you promote — promote things you'd defend.",
            ],
            bullets: [
              "Who needs it, and is it a fit for them?",
              "Do you use it or trust firsthand results?",
              "Would you buy it at this price?",
            ],
          },
          {
            heading: "Compare the whole commission, not the %",
            paragraphs: [
              "A 10% of a $500 product can beat 40% of a $20 digital download. Compare average order value × rate × expected conversion.",
              "Recurring/recurring products and rising tiers reward building a base.",
            ],
            bullets: [
              "Estimate: order value × commission × conversion.",
              "Recurring commissions compound over time.",
              "Cookie windows and payout thresholds matter too.",
            ],
          },
          {
            heading: "Check the program's real terms",
            paragraphs: [
              "Read the fine print: cookie duration, payout thresholds, excluded channels, and whether the program pays on upgrades/subscriptions. Surprises here eat income.",
              "A favorable program you understand beats one you guessed at.",
            ],
            bullets: [
              "Cookie window: how long after the click you earn.",
              "Solid payout schedule and threshold.",
              "Clear rules on content style and channels.",
            ],
          },
          {
            heading: "Pick a short portfolio",
            paragraphs: [
              "Focus on two to four products per audience, with a clear role each (entry offer, core, premium). Spreading thinly dilutes trust and effort.",
              "Review your portfolio quarterly as audiences and programs shift.",
            ],
            bullets: [
              "A small set you'd actively defend.",
              "Entry/core/premium structure guides content.",
              "Regularly prune programs that don't convert.",
            ],
            tip: "Sign up only when you have real content momentum — empty accounts with no placements waste mindspace.",
          },
        ],
        takeaways: [
          "Commitment to helping the audience decides the best partner.",
          "Compare full earning potential, not just percentages.",
          "Understand cookie windows and program terms before you begin.",
        ],
        practice:
          "Shortlist 6 products you'd defend, compute estimated earnings per 100 clicks for each (order value × rate × rough conversion), and pick the top 4 to pursue.",
      },
      {
        slug: "growing-affiliate-income",
        title: "Growing Affiliate Income",
        description:
          "Build content that ranks and converts for affiliate income through SEO, email and reviews.",
        difficulty: "Advanced",
        duration: "14 min",
        tags: ["income", "SEO"],
        objectives: [
          "Design content that ranks and converts for affiliate terms.",
          "Use email and reviews to smooth the income curve.",
          "Scale winners and diversify with an owned audience.",
        ],
        lesson: [
          {
            heading: "The affiliate content formula",
            paragraphs: [
              "Winning affiliate content answers a comparison or a problem: 'X vs Y', 'best [product] for [use case]', 'how to [solve]'. It ranks on search and converts through genuine specificity.",
              "Match intent: people researching buy later; serve that moment.",
            ],
            bullets: [
              "Comparison and 'best for' pages capture intent.",
              "Real experience, honest pros/cons, updated data.",
              "Put the honest recommendation first, links served from the page.",
            ],
          },
          {
            heading: "SEO: the compounding traffic tap",
            paragraphs: [
              "Search traffic keeps paying long after the post is published — each ranking page is an asset. Target achievable keywords, write completely, and interlink them.",
              "Fix the leak before scaling: content that ranks but doesn't convert earns nothing.",
            ],
            bullets: [
              "Keyword research with achievable difficulty first.",
              "One complete page per keyword group.",
              "Conversion rates on ranked pages are the real lever.",
            ],
          },
          {
            heading: "Email and reviews as income rafts",
            paragraphs: [
              "Reviews on niche-specific channels and an email list insulate income from algorithm swings. An owned audience buys repeatedly and cheaply.",
              "The affiliate who owns the audience out-earns the affiliate who rents reach.",
            ],
            bullets: [
              "Email: send real value; affiliate offers fit naturally.",
              "Reviews: honest, observable, current.",
              "Portfolio per audience smooths seasonal dips.",
            ],
          },
          {
            heading: "Scale what's proven",
            paragraphs: [
              "Study your best pages, double down on their format and topics, and replicate them across adjacent niches before chasing new channels.",
              "Growth here is a library-building game: publish, rank, convert, repeat.",
            ],
            bullets: [
              "Model the winners, not the trends.",
              "Update existing winners for freshness.",
              "Add a new audience asset (email, video) each quarter.",
            ],
            tip: "Keep a public 'updated' date on reviews — fresh, honest content wins trust and search both.",
          },
        ],
        takeaways: [
          "Comparison and problem-solve content ranks and converts best.",
          "SEO pages are compounding assets; fix conversion before scaling.",
          "Owned audiences (email/list) make income durable.",
        ],
        practice:
          "Audit your top 3 pages: intent, keyword fit, and conversion path to a recommendation — then update the weakest one and plan one new comparison page.",
      },
    ],
  },
  {
    slug: "google-analytics",
    name: "Google Analytics",
    tagline: "Measure what matters",
    description:
      "Set up tracking and read the reports that tell you where traffic comes from and what actually converts.",
    icon: ChartLine,
    accentClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    topics: [
      {
        slug: "analytics-basics",
        title: "Google Analytics Basics",
        description:
          "Set up tracking and read the core reports: users, sessions, channels and conversions.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["analytics", "setup"],
        objectives: [
          "Install tracking properly on your site.",
          "Read the core reports: users, sessions, channels.",
          "Define conversions that match your business goals.",
        ],
        lesson: [
          {
            heading: "Install it once, correctly",
            paragraphs: [
              "Add the tracking tag to every page, verify it fires, and confirm your key events. A clean install beats a hundred reports on broken data.",
              "Verify with the real-time report and your own private session.",
            ],
            bullets: [
              "Tag on all pages (and app where relevant).",
              "Exclude your own traffic from the data.",
              "Validate events and conversions fire correctly.",
            ],
          },
          {
            heading: "The core reports",
            paragraphs: [
              "Users tells you people; sessions tell you visits; engagement tells you depth; channels tells you where traffic came from. Each answers a different question.",
              "Read them together: a channel with high users but shallow engagement suggests a message/mismatch.",
            ],
            bullets: [
              "Users vs sessions: unique people vs total visits.",
              "Engagement: time, depth, return visits.",
              "Channels: search, social, direct, referral, paid.",
            ],
          },
          {
            heading: "Define what 'good' means",
            paragraphs: [
              "Conversions are events that matter: signups, purchases, downloads. Set your business events as conversions so reports tell you about money, not just clicks.",
              "Without conversions, analytics measures activity, not progress.",
            ],
            bullets: [
              "Pick 3–5 key business events.",
              "Mark them as conversions in the settings.",
              "Review the conversion report weekly.",
            ],
          },
          {
            heading: "Read it weekly, simply",
            paragraphs: [
              "Set a simple weekly habit: users trend, top channels, top pages, conversions. A 10-minute read beats deep dives you never do.",
              "Let trends guide action; a bad week prompts a look, not a panic.",
            ],
            bullets: [
              "One dashboard page, four numbers.",
              "Compare to last week and last month.",
              "Turn one insight into one action.",
            ],
            tip: "Compare like-for-like periods (week vs week, not week vs holiday) or the numbers lie to you.",
          },
        ],
        takeaways: [
          "Clean tracking is the foundation of every other report.",
          "Users, sessions, channels and conversions answer the core questions.",
          "A simple weekly read beats an unread deep dashboard.",
        ],
        practice:
          "This week run the setup checklist, confirm your top 5 business events as conversions, and do one 10-minute read of the weekly report.",
      },
      {
        slug: "understanding-traffic",
        title: "Understanding Your Traffic",
        description:
          "Use acquisition and behavior reports to see what brings visitors and what they do on your site.",
        difficulty: "Intermediate",
        duration: "11 min",
        tags: ["traffic", "reports"],
        objectives: [
          "Read acquisition data to see which sources bring visitors.",
          "Spot behavior patterns that signal interest or friction.",
          "Turn traffic numbers into improvement actions.",
        ],
        lesson: [
          {
            heading: "Acquisition: where they come from",
            paragraphs: [
              "Acquisition reports split traffic by channel — organic search, social, direct, paid, referral. Each channel answers 'what brought them here?'.",
              "Watch the story across channels: direct-growing-with-search usually means search is working (people type your brand).",
            ],
            bullets: [
              "Organic: search engine results.",
              "Social/direct/paid/referral: their own stories.",
              "Cross-check channels against conversion rates.",
            ],
          },
          {
            heading: "Behavior: what they do here",
            paragraphs: [
              "Pages and events tell you interest: which content holds attention, which pages are exits, where visitors stop. Behavior is the 'then what?' to acquisition.",
              "High-traffic high-exit pages aren't failing — they may just be routing visitors elsewhere; check the flow.",
            ],
            bullets: [
              "Top pages: the entry points winning attention.",
              "Exit pages: where the journey stalls.",
              "Events: the actions that matter along the way.",
            ],
          },
          {
            heading: "Find the mismatch",
            paragraphs: [
              "Channels that bring visitors vs pages that convert often tell two stories. A high-clicking channel with low conversions means the handoff to your page or offer is weak.",
              "Improve the handoff (message match, page clarity), not the channel.",
            ],
            bullets: [
              "Pair channel → landing page → conversion.",
              "Fix message mismatch before spending more.",
              "Test clearer page promises against the traffic source.",
            ],
          },
          {
            heading: "Turn numbers into actions",
            paragraphs: [
              "Turn each weekly finding into one action: a channel to feed, a page to fix, an event to track. Measure again next week — that's the loop.",
              "Traffic understanding is a habit, not a launch project.",
            ],
            bullets: [
              "One finding → one action per week.",
              "Re-measure after changes.",
              "Document wins so they compound into process.",
            ],
          },
        ],
        takeaways: [
          "Acquisition tells you what brought them; behavior tells you what they did.",
          "Channel-to-conversion mismatch pinpoints the weak handoff.",
          "Weekly action loop turns signals into growth.",
        ],
        practice:
          "Study your acquisition and behavior report this week: name the channel that converts best, the page that exits most, and the single mismatch you'll fix.",
      },
      {
        slug: "conversions-goals",
        title: "Conversions & Goals",
        description:
          "Configure goals and events to measure the actions that actually matter for your business.",
        difficulty: "Intermediate",
        duration: "13 min",
        tags: ["conversions", "goals"],
        objectives: [
          "Set up events and conversions that mirror business goals.",
          "Read conversion reports to see the true funnel.",
          "Test changes that move conversion rates.",
        ],
        lesson: [
          {
            heading: "Events are your business goals",
            paragraphs: [
              "Events capture the actions that matter — signups, purchases, downloads, calls. Name them clearly and mark the important ones as conversions.",
              "What you choose to track defines what you'll improve; choose the actions that equal revenue.",
            ],
            bullets: [
              "Key events: purchase, signup, lead, download, call.",
              "Mark 3–5 as conversions.",
              "Name them in business language a colleague understands.",
            ],
          },
          {
            heading: "Build the true funnel",
            paragraphs: [
              "Visualize the path: visit → engage → event → conversion. Each stage between is a number you can improve.",
              "The funnel shows you the real math behind heads-down effort.",
            ],
            bullets: [
              "Stage 1: sessions that reach your key page.",
              "Stage 2: those that engage (scroll, click, browse).",
              "Stage 3: those that complete a conversion event.",
            ],
          },
          {
            heading: "Fix the stage, not the symptom",
            paragraphs: [
              "Low reach? Traffic problem. Low reach-to-engage? Content/UX problem. Low engage-to-convert? Offer/trust problem. Each drop-off names its fix.",
              "Improve the worst stage first — it's the cheapest lever.",
            ],
            bullets: [
              "Reach → traffic and visibility work.",
              "Engage → content and navigation work.",
              "Convert → offer and trust work.",
            ],
          },
          {
            heading: "Test, measure, repeat",
            paragraphs: [
              "Change one thing — headline, CTA, page layout, price presentation — and compare conversion rates before/after. Small tests compound.",
              "A testing habit is the difference between growing and explaining.",
            ],
            bullets: [
              "One variable per test, enough data to judge.",
              "Apply wins to related pages.",
              "Keep a simple log of tests and results.",
            ],
            tip: "Start tests on the steps with the biggest drop-offs — that's where the concentrated wins live.",
          },
        ],
        takeaways: [
          "Events mirror your business goals; mark the money-actions as conversions.",
          "A visit→engage→convert funnel names each fix.",
          "Test one variable at a time and keep a results log.",
        ],
        practice:
          "Audit this week: are your 3–5 money events tracked and marked as conversions? Write your visit→engage→convert funnel with real numbers and pick today's one test.",
      },
    ],
  },
];