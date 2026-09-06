import { MonitorPlay, MousePointerClick, PenLine, Share2 } from "lucide-react";

import type { CurriculumCategory } from "../types";

/** Digital Marketing categories, chunk 2: Google Ads, YouTube, Social Media, Content Marketing. */
export const dmCategories2: CurriculumCategory[] = [
  {
    slug: "google-ads",
    name: "Google Ads",
    tagline: "Advertise on Google, profitably",
    description:
      "Run search campaigns with control — keywords, bidding, budgets and the reports that tell you what to scale.",
    icon: MousePointerClick,
    accentClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    topics: [
      {
        slug: "google-ads-basics",
        title: "Google Ads Basics",
        description:
          "Search ads explained: keywords, bidding, quality score and the account structure that keeps costs low.",
        difficulty: "Beginner",
        duration: "14 min",
        tags: ["Google Ads", "search"],
        objectives: [
          "Understand how search ads match and rank.",
          "Explain quality score and why it decides your cost.",
          "Structure a simple account cleanly from day one.",
        ],
        lesson: [
          {
            heading: "How search ads work",
            paragraphs: [
              "When someone searches, Google auctions which ads appear and in what order — combining your bid, your ad's expected quality and relevance.",
              "You only pay when someone clicks (CPC), and the auction runs anew on every search.",
            ],
            bullets: [
              "Keyword triggers your ad to enter the auction.",
              "Rank = bid × quality signals, not bid alone.",
              "Pay per click: cost = what your position's auction demanded.",
            ],
          },
          {
            heading: "Quality score decides your price",
            paragraphs: [
              "Google grades expected click-through rate, ad relevance and landing page experience. Better grades mean higher position at lower cost.",
              "Making ads relevant to the keyword beats raising the bid.",
            ],
            bullets: [
              "Write ad copy that echoes the keyword and promise.",
              "Send clicks to a page that matches the ad.",
              "Watch quality score alongside spend.",
            ],
          },
          {
            heading: "Keywords: intent beats volume",
            paragraphs: [
              "Match keywords to buying intent with match types: exact (tight), phrase (moderate) and broad (loose). Start with exact and phrase so spend stays controlled.",
              "Negative keywords stop wasted clicks on terms you don't want.",
            ],
            bullets: [
              "Exact match: small, precise, controllable.",
              "Broad match: volume but needs careful negatives.",
              "Negatives: filter out 'free', 'jobs', 'review' noise.",
            ],
          },
          {
            heading: "Account structure from the start",
            paragraphs: [
              "Organize campaigns around intent (one theme per campaign, tight ad groups). Clean structure makes reports readable and bids manageable.",
              "Start small: one or two tight campaigns beat a sprawling account.",
            ],
            bullets: [
              "One clear theme per campaign.",
              "Ad groups with 5–10 closely related keywords.",
              "A few strong ad variations per ad group.",
            ],
            tip: "Copy that includes the exact keyword tends to earn higher relevance — a cheap quality-score win.",
          },
        ],
        takeaways: [
          "The ad auction rewards relevance, not just budget.",
          "Quality score is the lever for cheaper placements.",
          "Intent-matched keywords and clean structure control spend.",
        ],
        practice:
          "Write a plan for one search campaign: 10–15 exact/phrase keywords, one tight ad group theme, 2 ad drafts echoing the keyword, and 5 negative keywords.",
      },
      {
        slug: "campaign-structure-budget",
        title: "Campaign Structure & Budget",
        description:
          "Organize campaigns, ad groups and keywords for control — and set budgets you can scale safely.",
        difficulty: "Intermediate",
        duration: "15 min",
        tags: ["structure", "budget"],
        objectives: [
          "Structure campaigns that are readable and controllable.",
          "Set budgets based on data, then scale safely.",
          "Avoid the structure mistakes that burn ad budget.",
        ],
        lesson: [
          {
            heading: "Structure is reporting",
            paragraphs: [
              "An account structured by intent makes every report tell you something. Messy structure hides waste and makes decisions guesswork.",
              "Rule of thumb: whenever you'd want to know a number on its own, it deserves its own campaign or ad group.",
            ],
            bullets: [
              "Separate campaigns by goal and budget.",
              "Separate ad groups by message and keywords.",
              "Keep competitor and brand searches apart.",
            ],
          },
          {
            heading: "Set budgets with function, not hopes",
            paragraphs: [
              "Pick a budget you can sustain while learning, sized against your margins: know your cost-per-conversion target before the first click.",
              "Set a cap and grow spend only when the numbers earn it.",
            ],
            bullets: [
              "Budget = affordability + learning time.",
              "Know target CPA before scaling.",
              "Cap daily spend; review weekly before raising.",
            ],
          },
          {
            heading: "Scale in safe steps",
            paragraphs: [
              "When a campaign works, scale gradually — 20–30% budget bumps at a time — and watch how the cost per conversion reacts.",
              "Big jumps alarm the auction and can spike costs.",
            ],
            bullets: [
              "Raise budgets 20–30% and observe a week.",
              "Scale winners, not hopes.",
              "Pause losers, reclaim budget for winners.",
            ],
          },
          {
            heading: "Avoid the common burns",
            paragraphs: [
              "Common budget fires: no negatives, broad match everywhere, duplicate keywords competing within an account, and no tracking. All fixable before launch.",
              "One clean audit a month prevents most of it.",
            ],
            bullets: [
              "Add negatives before launch.",
              "Never duplicate keywords across campaigns.",
              "Verify conversion tracking actually fires.",
            ],
          },
        ],
        takeaways: [
          "Intent-driven structure turns reports into decisions.",
          "Set budgets against target CPAs, then scale in measured steps.",
          "Negatives, no-duplicate keywords and working tracking protect spend.",
        ],
        practice:
          "Audit your account or a mock one: list where structure blurs intents, note your target CPA, and write the 20–30% scaling plan for your current winner.",
      },
      {
        slug: "measuring-optimizing-ads",
        title: "Measuring & Optimizing Ads",
        description:
          "Read the reports that matter, cut wasted spend and scale winners with confidence.",
        difficulty: "Advanced",
        duration: "14 min",
        tags: ["optimization", "reports"],
        objectives: [
          "Read the reports that matter: cost, conversion, quality score.",
          "Cut waste using data instead of feelings.",
          "Run structured tests that improve results over time.",
        ],
        lesson: [
          {
            heading: "The metrics that matter",
            paragraphs: [
              "Focus on the chain that earns money: impressions → clicks (CTR) → conversions (CVR) → cost per conversion. Each stage tells you where the leak is.",
              "CTR tells you about ad relevance; CVR tells you about the landing page and offer.",
            ],
            bullets: [
              "CTR: is the ad getting clicked?",
              "CVR: are those clicks converting?",
              "CPA: what does a conversion cost overall?",
            ],
          },
          {
            heading: "Find and fix the leak",
            paragraphs: [
              "Low CTR → improve keywords and ad copy. Low CVR → improve landing page, offer and message match. High CPA → look at bids, quality score and spaces.",
              "Fix the upstream stage first — more traffic won't help a leaky page.",
            ],
            bullets: [
              "CTR problem = ad/keyword work.",
              "CVR problem = page/offer work.",
              "Track stage by stage, act on the worst.",
            ],
          },
          {
            heading: "Test one variable at a time",
            paragraphs: [
              "Run structured experiments: one ad heading against another, one landing page version against another. Change one thing, let it accumulate data, read the result.",
              "Tiny wins stacked across tests compound into very different accounts.",
            ],
            bullets: [
              "A/B adjacent ideas, not revolutions.",
              "Give tests enough data to be conclusive.",
              "Log winners and iterate forward.",
            ],
          },
          {
            heading: "Optimize on a schedule",
            paragraphs: [
              "Set a weekly optimization rhythm: review metrics, pause the obvious losers, test one new idea, scale proven winners within limits.",
              "Habits beat heroics — a consistent review loop outperforms panic fixes.",
            ],
            bullets: [
              "Weekly: metrics review + one test + one cut.",
              "Monthly: restructure if report blurs.",
              "Before scaling: does unit economics still hold?",
            ],
            tip: "Export a screenshot of your weekly report into a notes folder — comparing months later shows the compounding.",
          },
        ],
        takeaways: [
          "Read the click→conversion chain to find the actual leak.",
          "Fix the upstream stage first, then test one variable at a time.",
          "A weekly review rhythm beats sporadic heroics.",
        ],
        practice:
          "Pull your last 14 days of data. For each converting campaign, name the biggest leak (CTR or CVR), plan one fix for it, and schedule your weekly 30-minute optimization slot.",
      },
    ],
  },
  {
    slug: "youtube-marketing",
    name: "YouTube Marketing",
    tagline: "Grow a channel that earns",
    description:
      "Foundations for a channel people subscribe to — packaging, scripts, YouTube SEO and monetization.",
    icon: MonitorPlay,
    accentClass: "bg-red-500/10 text-red-600 dark:text-red-400",
    topics: [
      {
        slug: "channel-foundations",
        title: "YouTube Channel Foundations",
        description:
          "Set up your channel, design branding and plan the video types that grow a following.",
        difficulty: "Beginner",
        duration: "11 min",
        tags: ["YouTube", "channel"],
        objectives: [
          "Set up a channel that communicates the niche instantly.",
          "Define the video formats your audience wants from you.",
          "Plan a first batch of videos with a research-backed niche.",
        ],
        lesson: [
          {
            heading: "Position the channel in one look",
            paragraphs: [
              "A stranger should get 'who this is for' from your banner, avatar, handle and description in seconds. Align all of it around one niche.",
              "Consistent branding tells the algorithm and viewers you're a real, lasting channel.",
            ],
            bullets: [
              "One niche, stated clearly.",
              "Consistent avatar/banner/thumbnails style.",
              "About section: who you help and what they get.",
            ],
          },
          {
            heading: "Pick the video types you can sustain",
            paragraphs: [
              "Most channels thrive on a small set of formats: tutorials/how-tos, case studies, reviews, storytelling or vlogs. Choose formats you can produce repeatedly at good quality.",
              "Content you can't sustain is content that stalls the channel.",
            ],
            bullets: [
              "Match format to niche and your output capacity.",
              "One promising format done well beats five done rarely.",
              "Outline a content plan from research, not whim.",
            ],
          },
          {
            heading: "Research what the audience wants",
            paragraphs: [
              "Find where your niche already asks questions: competitor channels, comments, search suggestions and forums. Each is a video waiting to be made better.",
              "Steal demand, not content — see what people crave and serve it better.",
            ],
            bullets: [
              "Mine competitor videos for their best topics.",
              "Read comments for gaps viewers point out.",
              "Search YouTube autocomplete for demand hints.",
            ],
          },
          {
            heading: "Ship the first batch",
            paragraphs: [
              "Consistency compounds: publish on a schedule you can hold (weekly is a strong default) and treat the first videos as learning runs.",
              "Volume + improvement beats a perfect single video.",
            ],
            bullets: [
              "Commit to a schedule and protect it.",
              "Improve one thing per video.",
              "Measure watch-through, not just views, from the start.",
            ],
          },
        ],
        takeaways: [
          "Branding and niche clarity work in the first five seconds.",
          "Sustain format choice beats channel sprawl.",
          "Research audience demand, then ship on a schedule.",
        ],
        practice:
          "This week write your channel position (niche + who + what), list your 3 sustainable formats, and outline the first 5 videos from real search demand you found.",
      },
      {
        slug: "videos-people-watch",
        title: "Videos People Watch",
        description:
          "Craft titles, thumbnails and intros that earn clicks — and structure scripts that hold attention.",
        difficulty: "Beginner",
        duration: "13 min",
        tags: ["video", "CTR"],
        objectives: [
          "Write titles that earn clicks without lying.",
          "Design thumbnails that read at thumbnail size.",
          "Open videos fast and hold attention to the end.",
        ],
        lesson: [
          {
            heading: "The title keeps the promise",
            paragraphs: [
              "A strong title names the payoff and creates curiosity truthfully. It's the first promise between you and the viewer.",
              "Avoid clickbait: viewers who bounce punish the video's future.",
            ],
            bullets: [
              "Lead with the outcome or the question.",
              "Add a pressing detail ('without X', 'in Y minutes').",
              "Match the title to what the video actually delivers.",
            ],
          },
          {
            heading: "Thumbnails read at a glance",
            paragraphs: [
              "Thumbnails must work at phone size: huge subject, high contrast, 3–4 words max, one clear visual idea.",
              "Test variations; a +1% CTR is a big, compounding win on YouTube.",
            ],
            bullets: [
              "One subject, huge; one message, few words.",
              "High contrast and consistent style.",
              "Design for mobile, test before posting.",
            ],
          },
          {
            heading: "Intro that earns attention",
            paragraphs: [
              "Open with the payoff or the core promise within seconds — no logo stings or 'hey guys'. Move fast into value.",
              "A viewer decides in the first 10–15 seconds whether you get their stay.",
            ],
            bullets: [
              "Steal the pattern: promise → preview → deliver.",
              "Cut intros and throat-clearing ruthlessly.",
              "Keep the 'remember to subscribe' out of the first minute.",
            ],
          },
          {
            heading: "Scripts that hold to the end",
            paragraphs: [
              "Structure every video: hook, preview, value in segments, payoff summary, CTA. Short segments and clear transitions keep retention up.",
              "Watch-through is the metric that feeds growth; pace the script for it.",
            ],
            bullets: [
              "One idea per segment, no tangents.",
              "Recap and preview transitions reduce drop-off.",
              "End with the takeaway CTA, not a random sign-off.",
            ],
            tip: "Your 5 most-viewed videos' intros are a free masterclass — study what made people stay.",
          },
        ],
        takeaways: [
          "Titles and thumbnails earn the click; the intro earns the stay.",
          "Thumbnails must read instantly on mobile.",
          "Retention-shaped scripts are the real growth engine.",
        ],
        practice:
          "Rewrite titles and thumbnails for your last 3 videos using the rules above, and re-script one opening so the payoff lands in the first 10 seconds.",
      },
      {
        slug: "youtube-seo-monetization",
        title: "YouTube SEO & Monetization",
        description:
          "Rank videos with good metadata, SEO descriptions and packaging — and ready your channel for monetization.",
        difficulty: "Intermediate",
        duration: "14 min",
        tags: ["SEO", "monetization"],
        objectives: [
          "Optimize titles, tags, descriptions and chapters for discovery.",
          "Use playlists and end screens to compound watch time.",
          "Understand the monetization milestones and income sources.",
        ],
        lesson: [
          {
            heading: "Discovery starts with the title+tag set",
            paragraphs: [
              "YouTube matches videos to searches via title, description, tags and the spoken words in the video. Lead with the keyword one clear time.",
              "Ask 'what would someone type to find this?' and answer it honestly.",
            ],
            bullets: [
              "Keyword in title early and naturally.",
              "Descriptions: restate the topic + a summary.",
              "Tags: a few precise ones, not a wall.",
            ],
          },
          {
            heading: "Metadata that helps the algorithm",
            paragraphs: [
              "Chapters and playlists improve engagement and session time — signals YouTube rewards. End screens and cards push viewers to your next video.",
              "The algorithm amplifies what keeps people on YouTube.",
            ],
            bullets: [
              "Add chapters to long videos.",
              "Group videos into themed playlists.",
              "End screens: drive to the next watch in a series.",
            ],
          },
          {
            heading: "Monetization milestones",
            paragraphs: [
              "Program eligibility typically needs 1,000 subscribers and 4,000 watch-hours in 12 months (or 10M shorts views in 90 days). Reach these with watch-time-shaped content.",
              "Ad revenue is one stream — memberships, merch, sponsorships and affiliate links scale faster for most creators.",
            ],
            bullets: [
              "Milestone: subs + watch time (or Shorts views).",
              "Diversify: memberships, sponsors, affiliate, products.",
              "Watch time is earned by retention-shaped videos.",
            ],
          },
          {
            heading: "Grow income, not just views",
            paragraphs: [
              "Paid clicks and engaged niches out-earn viral blowups. Build audience trust and a small set of monetized offers.",
              "Treat the channel as a system: discoverable videos → engaged audience → monetized offers.",
            ],
            bullets: [
              "High-intent topics earn better affiliate/sponsor value.",
              "Nurture an email list outside the platform.",
              "Measure revenue per view, not just views.",
            ],
            tip: "Start building your email list and affiliate partnerships before hitting the milestone — they kick in faster than ad revenue.",
          },
        ],
        takeaways: [
          "Discovery flows from keyword-aligned titles, descriptions and tags.",
          "Retention and session time are the algorithm's favorite signals.",
          "Diversify income streams; watch time takes time.",
        ],
        practice:
          "Take your next scheduled video and finish the metadata: keyword-first title, a 3-sentence description, tags, chapters and one end-screen to its playlist.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    tagline: "A strategy across every platform",
    description:
      "Choose the right channels, plan sustainable content and manage communities that trust you.",
    icon: Share2,
    accentClass: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    topics: [
      {
        slug: "social-media-strategy",
        title: "Social Media Strategy",
        description:
          "Choose channels and content pillars based on where your audience actually spends time.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["strategy", "channels"],
        objectives: [
          "Pick platforms by where your audience is, not where trends are.",
          "Define content pillars that match each channel's strength.",
          "Set goals and metrics per platform before posting.",
        ],
        lesson: [
          {
            heading: "Audience first, platforms second",
            paragraphs: [
              "Strategy begins with one question: where does your audience spend their attention and what format do they want there? Start with the one platform where your buyer actually lives.",
              "Being everywhere thinly beats none but is still thin.",
            ],
            bullets: [
              "One primary platform based on your audience.",
              "One format per platform (short video, text, image).",
              "Add channels only with a real reason and capacity.",
            ],
          },
          {
            heading: "Content pillars per channel",
            paragraphs: [
              "Each channel rewards a format: short video on Reels/TikTok, conversation on X/LinkedIn, visual proof on Instagram. Shape pillars to those strengths.",
              "Don't copy-paste one post everywhere; adapt it to each platform's grammar.",
            ],
            bullets: [
              "Pillars: educate, demonstrate, entertain, sell — in your mix.",
              "Adapt the same idea to each channel's format.",
              "Cadence must be sustainable per channel.",
            ],
          },
          {
            heading: "Goals and metrics before posting",
            paragraphs: [
              "Define what success means per channel (awareness, clicks, leads, community) and the metric you'll watch. Posting without a goal is busywork.",
              "Pick one north-star metric per channel.",
            ],
            bullets: [
              "Awareness → reach and shares.",
              "Traffic → clicks and link clicks.",
              "Leads/sales → DMs, saves, signups.",
            ],
          },
          {
            heading: "Review and adapt monthly",
            paragraphs: [
              "Social changes fast: review monthly what reached and engaged, double the winners, cut the losers.",
              "Strategy is a living document; the audience vote updates it.",
            ],
            bullets: [
              "Monthly: what worked, what to stop, what to test.",
              "Steal effective formats from your niche.",
              "Reallocate effort to the channels that pay back.",
            ],
            tip: "Before adding a new channel, write the answer to 'and what will I do less of to make room'?",
          },
        ],
        takeaways: [
          "Platform choice follows audience location and format fit.",
          "Adapt one idea to each channel's native format.",
          "Goals and monthly reviews keep social productive.",
        ],
        practice:
          "Map your strategy page: primary platform, its native format, 3 content pillars with examples, one north-star metric, and your monthly review date.",
      },
      {
        slug: "content-calendars",
        title: "Content Calendars & Schedules",
        description:
          "Plan a month of posts across platforms with a calendar that protects your time and quality.",
        difficulty: "Beginner",
        duration: "10 min",
        tags: ["calendar", "planning"],
        objectives: [
          "Build a monthly content calendar in a simple tool.",
          "Balance pillars and cadence into a realistic plan.",
          "Turn batching into a repeatable weekly routine.",
        ],
        lesson: [
          {
            heading: "A calendar is a decision list",
            paragraphs: [
              "Plan a month of posts in advance so daily 'what do I post?' never eats your energy. One matrix — date × platform × pillar × CTA — covers everything.",
              "A simple spreadsheet beats the fanciest content tool you won't keep using.",
            ],
            bullets: [
              "Columns: date, platform, pillar, topic, CTA, asset.",
              "Fill from your pillars and audience questions.",
              "Keep vacation/holiday slots intentional.",
            ],
          },
          {
            heading: "Balance pillars and cadence",
            paragraphs: [
              "Plan the mix consciously: mostly value, some proof, a few offers, tiny personality. Cadence should match your capacity — a reliable twice a week beats volatile daily.",
              "Every post should earn at least one kind of reaction (save, share, click, DM).",
            ],
            bullets: [
              "70/20/10 is a sane starting mix (value/proof/offers).",
              "Cadence you can sustain for 90 days.",
              "Batch creates in blocks to protect consistency.",
            ],
          },
          {
            heading: "Batch: create in blocks, publish in minutes",
            paragraphs: [
              "Production batching (one week's content in one sitting) beats creating daily. Edit assets together, then use a scheduler to publish on rhythm.",
              "Protect one to two focused blocks per week for creation.",
            ],
            bullets: [
              "Block 1: outline the month's topics.",
              "Block 2: shoot/write all of it.",
              "Schedule and forget; react only to what's needed.",
            ],
          },
          {
            heading: "Keep the calendar honest",
            paragraphs: [
              "Update the calendar as you learn what performs. Once a month, review: which pillars and times worked, what to rebalance.",
              "The calendar serves the strategy — don't follow it rigidly into uselessness.",
            ],
            bullets: [
              "Move the mix toward what worked.",
              "Delete or reschedule drifters, don't post junk.",
              "Keep yourself accountable with a weekly check.",
            ],
          },
        ],
        takeaways: [
          "A month-planned calendar removes daily creativity anxiety.",
          "Plan the mix and cadence you can actually sustain.",
          "Batch creation in blocks; schedule and review monthly.",
        ],
        practice:
          "Create your calendar this week: 30 rows, your pillar mix filled, two creation blocks marked, and a scheduler set so next week posts itself.",
      },
      {
        slug: "community-management",
        title: "Community Management",
        description:
          "Respond, engage and moderate like a professional so your community grows and trusts you.",
        difficulty: "Intermediate",
        duration: "11 min",
        tags: ["community", "engagement"],
        objectives: [
          "Respond with a tone and pace that builds trust.",
          "Set and enforce light, clear community rules.",
          "Turn feedback and questions into content ideas.",
        ],
        lesson: [
          {
            heading: "Response as a trust engine",
            paragraphs: [
              "How you reply to comments is public proof of how you treat people. Reply quickly where it matters, warmly always, and never argue in public threads.",
              "Every reply is a content event — others read them too.",
            ],
            bullets: [
              "Reply speed builds momentum with the algorithm.",
              "Acknowledge, then add value or a question.",
              "Take tough conversations to private messages.",
            ],
          },
          {
            heading: "Moderate lightly and clearly",
            paragraphs: [
              "Set a few crystal-clear rules (be respectful, no spam, stay on topic) and enforce them gently and consistently. Moderation protects the room you're building.",
              "Consistent removals keep the community feel safe and reliable.",
            ],
            bullets: [
              "Publish a short rules list.",
              "Remove spam fast; warn, then ban repeat offenders.",
              "Never feed trolls engagement — they feed on it.",
            ],
          },
          {
            heading: "Feedback becomes content",
            paragraphs: [
              "Questions and complaints are the raw material of your next posts, FAQs and products. Mine comments weekly for recurring themes.",
              "Your community already told you what to make next.",
            ],
            bullets: [
              "Log recurring questions and turn them into content.",
              "Ask the community what to cover next.",
              "Feature member wins to fuel more engagement.",
            ],
          },
          {
            heading: "Stay sane at scale",
            paragraphs: [
              "Protect your hours: batch community time twice a day, use saved replies for FAQs, and escalate anything sensitive early.",
              "Consistency beats burnout — a healthy manager makes a healthy community.",
            ],
            bullets: [
              "Two daily response windows.",
              "Saved replies for repetitive questions.",
              "Escalate threats/abuse to the right channels quickly.",
            ],
          },
        ],
        takeaways: [
          "Public replies are proof of how you treat people.",
          "Clear, light moderation protects the room.",
          "Community questions are your next content calendar.",
        ],
        practice:
          "Run one 7-day experiment: reply to every comment within business hours, log the recurring questions, and turn the top one into your next post.",
      },
    ],
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    tagline: "Content that attracts & sells",
    description:
      "Create valuable content that attracts leads and quietly moves readers toward buying.",
    icon: PenLine,
    accentClass: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    topics: [
      {
        slug: "content-foundations",
        title: "Content Marketing Foundations",
        description:
          "Create valuable content that attracts leads — blogs, guides and resources built around customer problems.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["content", "foundation"],
        objectives: [
          "Build content around customer problems, not your features.",
          "Distinguish educational vs promotional content and use both.",
          "Set up the content → lead → sale loop.",
        ],
        lesson: [
          {
            heading: "Content sells the before/after",
            paragraphs: [
              "The best content starts from a customer's problem and shows a path to a better outcome. Answer their questions first; your product earns attention naturally.",
              "Educational content attracts; proof converts.",
            ],
            bullets: [
              "Every piece answers a real customer question.",
              "Lead with the value, connect to your offer gently.",
              "The reader should feel measurably smarter than before.",
            ],
          },
          {
            heading: "Blogs, guides and formats",
            paragraphs: [
              "Long-form guides rank and build authority; shorter posts feed social and email. Choose formats that match your audience's search and reading habits.",
              "One thorough pillar piece can feed a dozen smaller posts.",
            ],
            bullets: [
              "Pillar guide: the definitive answer to one big question.",
              "Clusters: smaller posts linking into the pillar for SEO.",
              "Repurpose: turn one pillar into email, social, scripts.",
            ],
          },
          {
            heading: "The content → lead → sale loop",
            paragraphs: [
              "Value content earns attention; a free lead magnet trades that value for an email; email campaigns convert into customers; their wins become more content.",
              "Every piece should have one next step — a subscribe, a download, a demo.",
            ],
            bullets: [
              "Content attracts → magnet captures → email nurtures → offer converts.",
              "One clear next step per piece prevents dead ends.",
              "Track which content actually generates leads, not just views.",
            ],
          },
          {
            heading: "Consistency and patience",
            paragraphs: [
              "Content marketing compounds slowly and then suddenly. Publish on schedule, track what resonates, and keep improving the funnel end.",
              "Six months of steady, useful output beats one viral shot.",
            ],
            bullets: [
              "Protect a publishing cadence you can sustain.",
              "Measure lead generation per piece monthly.",
              "The compounding curve rewards the survivors.",
            ],
          },
        ],
        takeaways: [
          "Content lives at the intersection of customer problems and your expertise.",
          "One pillar piece feeds a cluster of channels.",
          "Content, lead magnet, email, offer — every piece feeds the loop.",
        ],
        practice:
          "List the 10 questions your customers most often ask. Pick the biggest one, draft the outline of your first pillar guide this week, and map the lead magnet it will promote.",
      },
      {
        slug: "blogging-repurposing",
        title: "Blogging & Repurposing",
        description:
          "Write one great resource and transform it into posts, emails, videos and infographics.",
        difficulty: "Intermediate",
        duration: "13 min",
        tags: ["blogging", "repurpose"],
        objectives: [
          "Write a complete, useful pillar post in reasonable time.",
          "Repurpose one pillar into five-plus formats.",
          "Manage the repurposing workflow without burnout.",
        ],
        lesson: [
          {
            heading: "One pillar, many pieces",
            paragraphs: [
              "Repurposing turns one strong asset into many: outline it once, then slice it into social posts, email summary, video script, checklist and infographic.",
              "Content budgets stretch far when every piece of the pillar pays for itself many times.",
            ],
            bullets: [
              "Pillar = deep answer to one big question.",
              "Slices = shorter formats from the same value.",
              "Same ideas, native format per channel.",
            ],
          },
          {
            heading: "Writing the pillar efficiently",
            paragraphs: [
              "Plan the outline from real questions, write section by section, and use a checklist to stay on task. Speed comes from structure, not caffeine.",
              "A concrete checklist (headline holds a promise, one point per section, examples) keeps quality high under time pressure.",
            ],
            bullets: [
              "Outline first, from audience questions.",
              "One section at a time against your checklist.",
              "Edit for clarity, then for length.",
            ],
          },
          {
            heading: "The repurposing map",
            paragraphs: [
              "From one pillar: 4–6 social posts (value + CTA), a newsletter summary, a short video script, a carousel/infographic, and a downloadable checklist.",
              "Each slice stands alone but links back to the pillar for depth.",
            ],
            bullets: [
              "Social: pull single insights per post.",
              "Email: the condensed 'here's the takeaway'.",
              "Video: talk through the 3 strongest points.",
              "Checklist: actionable version of the steps.",
            ],
          },
          {
            heading: "Run the machine weekly",
            paragraphs: [
              "Batch it: one pillar per week, then one repurposing session turns it into the week's output across channels.",
              "The system pays off because creation and promotion are one workflow, not two jobs.",
            ],
            bullets: [
              "Weekly rhythm: write, publish, repurpose on one day.",
              "Schedule the slices to spread over the week.",
              "Update pillars quarterly, not forever.",
            ],
          },
        ],
        takeaways: [
          "One pillar becomes many native formats.",
          "Structure and checklists beat heroic writing sessions.",
          "Batch write→publish→repurpose as one weekly machine.",
        ],
        practice:
          "This week produce one pillar, then slice it into 5 pieces (3 social, 1 email, 1 video outline) on a single day — and schedule them across the week.",
      },
      {
        slug: "content-that-sells",
        title: "Content That Sells",
        description:
          "Move readers from useful content to confident buyers with clear offers and calls to action.",
        difficulty: "Intermediate",
        duration: "12 min",
        tags: ["conversion", "offers"],
        objectives: [
          "Write CTAs that match each reader's stage.",
          "Present offers with clarity and proof.",
          "Turn engaged readers into buyers without feeling pushy.",
        ],
        lesson: [
          {
            heading: "CTA the reader is ready for",
            paragraphs: [
              "Match the call to action to reader stage: early readers get 'read more / subscribe', mid-stage get the checklist or comparison, ready buyers get the clear offer.",
              "One clear next step per page, not five buttons.",
            ],
            bullets: [
              "Top of mind: learn more, subscribe, download.",
              "Consideration: checklist, comparison, case study.",
              "Ready to buy: clear, specific, low-friction offer.",
            ],
          },
          {
            heading: "Offers get specific",
            paragraphs: [
              "A strong offer is concrete: what's included, the outcome, the timeframe, the price, and the risk reduction (guarantee, trial, refund). Vague offers get ignored.",
              "The reader's real question: 'Is this worth it and is it safe?' — answer both.",
            ],
            bullets: [
              "Name the outcome in the offer line.",
              "Include proof: results, reviews, guarantees.",
              "Make the next step dead simple to take.",
            ],
          },
          {
            heading: "Sell without needing to push",
            paragraphs: [
              "When content teaches first and offers second, the sell feels like a natural next step instead of a pitch. Earn the right by being useful first.",
              "People buy from those who've already given them something.",
            ],
            bullets: [
              "Teach the insight, then present the solution.",
              "Use the reader's words to describe their problem.",
              "Make buying feel like progress, not persuasion.",
            ],
          },
          {
            heading: "Measure what content sells",
            paragraphs: [
              "Tag and track which pieces generate leads and sales, not just traffic. Double down on topics that move money.",
              "A weekly look at the 'content performance' report keeps the funnel pointed at revenue.",
            ],
            bullets: [
              "Track conversions per piece with simple link tags.",
              "Let proven performers drive more of the calendar.",
              "Kill vanity pieces that earn attention but no action.",
            ],
            tip: "One honest review or result shown beside a CTA usually beats more persuasive copy.",
          },
        ],
        takeaways: [
          "Match the CTA to the reader's stage.",
          "Specific offers with proof and a guarantee convert.",
          "Earn the right, then make buying the natural next step.",
        ],
        practice:
          "Audit your best-performing page: rewrite its CTA to match reader stage, make the offer concrete in one line, and add one piece of proof near the button.",
      },
    ],
  },
];