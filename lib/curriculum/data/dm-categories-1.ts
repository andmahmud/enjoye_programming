import { Compass, Hash, Search, Share2 } from "lucide-react";

import type { CurriculumCategory } from "../types";

/** Digital Marketing categories, chunk 1: Fundamentals, SEO, Facebook, Instagram. */
export const dmCategories1: CurriculumCategory[] = [
  {
    slug: "digital-marketing-fundamentals",
    name: "Digital Marketing Fundamentals",
    tagline: "How marketing works today",
    description:
      "Channels, funnels, audiences and the core levers that grow any business online — the foundation for everything else.",
    icon: Compass,
    accentClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    topics: [
      {
        slug: "marketing-101",
        title: "Digital Marketing 101",
        description:
          "How digital marketing works: channels, funnels, audiences and the core levers that grow any business online.",
        difficulty: "Beginner",
        duration: "10 min",
        tags: ["marketing", "basics"],
        objectives: [
          "Explain the four core levers of every marketing system.",
          "Match channels to the stage of the customer journey.",
          "Know why attention is the currency of digital marketing.",
        ],
        lesson: [
          {
            heading: "Marketing = matching solutions to people",
            paragraphs: [
              "Digital marketing is simply finding the people who need what you offer, getting their attention, building trust, and making it easy to buy — all measurable online.",
              "It replaced guessing with data: what gets seen, clicked, read and bought is trackable almost everywhere.",
            ],
            bullets: [
              "Attract the right audience with useful content.",
              "Convince with proof, clarity and a strong offer.",
              "Convert with friction-free next steps.",
              "Repeat with retention and win-backs.",
            ],
          },
          {
            heading: "The four levers",
            paragraphs: [
              "Every business grows with a mix of four levers: more traffic, better conversion, higher average order value, and more repeat purchases. Everything in marketing moves one of these.",
              "Improving any single lever compounds with the others.",
            ],
            bullets: [
              "Traffic: more, better-qualified visitors.",
              "Conversion: more visitors becoming customers.",
              "Order value: bigger average purchases.",
              "Frequency: repeat buying and referrals.",
            ],
          },
          {
            heading: "Channels match journey stages",
            paragraphs: [
              "Awareness channels (social, ads, SEO) bring new faces; consideration channels (email, content, reviews) build trust; conversion channels (checkout, offers) close the deal.",
              "Premium tools fail when the channel and stage don't match.",
            ],
            bullets: [
              "Awareness: short-form video, ads, search, PR.",
              "Consideration: email, blog, case studies, community.",
              "Conversion: clear offers, reviews, ease, urgency.",
            ],
          },
          {
            heading: "Attention is the real currency",
            paragraphs: [
              "People are busy and skeptical. Winning isn't about shouting louder — it's about being useful at the right moment until trust accumulates.",
              "Every channel competes for the same hours; consistency and clarity beat cleverness.",
            ],
            bullets: [
              "Stand out by being clear about who you help.",
              "Earn attention with value before asking for anything.",
              "Track what's working and double down on it.",
            ],
            tip: "Write one sentence answering 'who is this for and what do they get?' before spending any budget — vague marketing wastes everything.",
          },
        ],
        takeaways: [
          "Marketing moves four levers: traffic, conversion, order value, frequency.",
          "Match channels to the journey stage: awareness, consideration, conversion.",
          "Attention and trust are the currencies — clarity beats noise.",
        ],
        practice:
          "Pick your own project or a brand you know and write down one action that would move each of the four levers — then choose the single highest-impact one to do this week.",
      },
      {
        slug: "the-marketing-funnel",
        title: "The Marketing Funnel",
        description:
          "From awareness to sale — map your customer journey and choose the right channel for every stage.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["funnel", "customer journey"],
        objectives: [
          "Map a realistic funnel from awareness to repeat purchase.",
          "Identify the funnel stage where your marketing leaks.",
          "Choose channels and messages that match each stage.",
        ],
        lesson: [
          {
            heading: "The funnel is a journey, not a number",
            paragraphs: [
              "The funnel describes the journey from first hearing about you to buying again: awareness, interest, decision, action, retention.",
              "People move through it with their own timing — your job is removing friction at every step.",
            ],
            bullets: [
              "Awareness: they discover you exist.",
              "Interest: they engage with your content.",
              "Decision: they compare and build trust.",
              "Action: they buy; Retention: they return.",
            ],
          },
          {
            heading: "Find where you leak",
            paragraphs: [
              "Every funnel leaks — the question is where. High visitors but few leads? Poor awareness-to-interest. Good leads but no sales? Poor decision-stage trust or offers.",
              "Fix the biggest leak first; optimizing a tight stage you have already nailed wastes effort.",
            ],
            bullets: [
              "Map visitor → lead → sale → repeat in your data.",
              "Compare stage conversion rates against rough benchmarks.",
              "Attack the worst stage, not the easiest to measure.",
            ],
          },
          {
            heading: "Match the message to the stage",
            paragraphs: [
              "Awareness messaging should educate and interest; decision messaging should prove and reassure. Pitching hard at a cold audience repels; pitching softly at a warm one loses sales.",
              "Mid-funnel trust builders (reviews, case studies, consistency) are where most funnels actually win.",
            ],
            bullets: [
              "Awareness: problem-focused, useful, low-pressure.",
              "Interest: stories, results, how-you-help.",
              "Decision: proof, guarantees, comparison, offer.",
            ],
          },
          {
            heading: "Budget by stage, review weekly",
            paragraphs: [
              "Spend where the funnel converts, not where it feels busiest. Track cost per step and shift budget toward the stages with the best return.",
              "A weekly numbers review beats a monthly 'we should do marketing' meeting.",
            ],
            bullets: [
              "Know your cost per lead and cost per sale.",
              "Shift spend toward converting stages.",
              "Let data pick the bottleneck to fix next.",
            ],
            tip: "Fix the top of the funnel before growing traffic — 1000 visitors converting at 1% equals 100 at 10% every time.",
          },
        ],
        takeaways: [
          "Map awareness → interest → decision → action → retention.",
          "Fix the biggest leak first, judged by stage conversion rates.",
          "Match message and budget to each funnel stage.",
        ],
        practice:
          "Sketch your funnel with rough conversion guesses per stage. Circle the stage you're most confident is leaking, and pick one concrete fix for it this week.",
      },
      {
        slug: "brand-positioning",
        title: "Brand & Positioning Basics",
        description:
          "Define what your brand stands for, who it serves and how to sound different from competitors.",
        difficulty: "Beginner",
        duration: "11 min",
        tags: ["brand", "positioning"],
        objectives: [
          "Write a one-sentence positioning statement.",
          "Define your audience and the problem you solve for them.",
          "Sound distinct by focusing on one clear thing.",
        ],
        lesson: [
          {
            heading: "Positioning is a clearing decision",
            paragraphs: [
              "Positioning is choosing who you serve, the problem you solve and why you're the sensible pick — out loud, in one sentence.",
              "It's a decision to be something specific, which means choosing what you won't be.",
            ],
            bullets: [
              "Who: the specific person you serve best.",
              "Problem: the frustrating thing you solve.",
              "Why you: your proof and point of difference.",
            ],
          },
          {
            heading: "Write it as one sentence",
            paragraphs: [
              "The classic frame: 'For [audience] who struggle with [problem], [brand] is the [category] that [key benefit] because [reason to believe].'",
              "Say it out loud and to a friend — if it's awkward or vague, tighten it.",
            ],
            bullets: [
              "One sentence, no buzzwords.",
              "Make the benefit concrete, not abstract.",
              "The 'because' comes from real proof you can show.",
            ],
          },
          {
            heading: "Be clear before being clever",
            paragraphs: [
              "A clear 'we help busy founders automate their invoicing' beats a clever tagline nobody can decode. Clarity converts; cleverness entertains.",
              "Your difference doesn't have to be radical — it has to be specific and believable.",
            ],
            bullets: [
              "Lead with the outcome, not the adjectives.",
              "Pick one differentiator and repeat it everywhere.",
              "Test the sentence with strangers — clear wins.",
            ],
          },
          {
            heading: "Live it across every channel",
            paragraphs: [
              "A positioning statement is only useful when it shapes your site, content, offers and voice consistently.",
              "Everyone on your team should be able to say what you're about in one line — that's the real test.",
            ],
            bullets: [
              "Align headline, imagery and examples with the statement.",
              "Filter content ideas through 'does this serve our positioning?'.",
              "Review the statement quarterly as the market shifts.",
            ],
            tip: "Post it where you'll see it — a strong position is a decision you keep making.",
          },
        ],
        takeaways: [
          "Positioning = who, problem, and why-you in one clear sentence.",
          "Clarity beats cleverness — make it measurable, not moody.",
          "Every channel should reinforce the same one-line position.",
        ],
        practice:
          "Write your one-sentence positioning, test it on two people without explanation, and rewrite it until they can repeat the benefit back to you.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO",
    tagline: "Get found on Google",
    description:
      "Rank in search engines with solid basics, real keyword research and the technical checklist that lets content perform.",
    icon: Search,
    accentClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    topics: [
      {
        slug: "seo-fundamentals",
        title: "SEO Fundamentals",
        description:
          "Learn how search engines rank pages and the basic on-page factors you can fix today.",
        difficulty: "Beginner",
        duration: "13 min",
        tags: ["SEO", "ranking"],
        objectives: [
          "Understand how search engines decide what ranks.",
          "Apply the basic on-page factors: titles, headings, content.",
          "Know why relevance and authority drive rankings.",
        ],
        lesson: [
          {
            heading: "How search engines decide",
            paragraphs: [
              "Search engines crawl pages, index them, then rank them by relevance and authority against each query.",
              "Relevance means your page is the best match to what's typed; authority means the web (and users) signalling you're a trusted answer.",
            ],
            bullets: [
              "Crawl: discovering pages via links and sitemaps.",
              "Index: storing content for retrieval.",
              "Rank: matching relevance + authority to the query.",
            ],
          },
          {
            heading: "Relevance is in the words",
            paragraphs: [
              "Pages rank for queries when their content genuinely uses the words and intent behind those queries — a clear title, an H1, and body copy that covers the topic fully.",
              "Write for the human who asked the question; the words will naturally line up.",
            ],
            bullets: [
              "Title: the honest summary of the page.",
              "Headings: a structured outline of the page.",
              "Content: complete, specific, genuinely useful.",
            ],
          },
          {
            heading: "Authority comes from trust signals",
            paragraphs: [
              "Links from other sites, a track record of accuracy, and signals like engagement and freshness build authority. It's earned slowly and you can't fake it fast.",
              "Start with links and consistency on topics you can actually cover well.",
            ],
            bullets: [
              "Backlinks: other sites vouching for your content.",
              "Consistency: a site that stays updated and reliable.",
              "Experience: first-hand, credible, expert, trustworthy (E-E-A-T).",
            ],
          },
          {
            heading: "What you can fix today",
            paragraphs: [
              "Start with the cheap wins: one keyword-focused page title, one H1 per page, readable headings, and content that answers the search's intent.",
              "Check how your target pages look on mobile, since most searches now happen there.",
            ],
            bullets: [
              "Write titles and meta descriptions that earn clicks.",
              "One H1, logical H2s, strong internal links.",
              "Make pages fast and mobile-friendly.",
            ],
            tip: "Google ranks pages, not domains out of thin air — a single well-made page can outrank an old site with a weak answer.",
          },
        ],
        takeaways: [
          "Ranking needs relevance (words + intent) and authority (trust signals).",
          "On-page basics: honest titles, one H1, full-topic content.",
          "Start with the cheap on-page wins before chasing links.",
        ],
        practice:
          "Open your best page in a new tab: read its title and H1 as if you'd never seen it, and rewrite both to match the exact question a searcher would type.",
      },
      {
        slug: "keyword-research",
        title: "Keyword Research That Works",
        description:
          "Find keywords with real demand and achievable competition using free tools and common sense.",
        difficulty: "Intermediate",
        duration: "14 min",
        tags: ["keywords", "research"],
        objectives: [
          "Generate a keyword list from your audience's actual questions.",
          "Filter for demand that matches your ability to rank.",
          "Map keywords to the pages you'll create or improve.",
        ],
        lesson: [
          {
            heading: "Think in questions, not keywords",
            paragraphs: [
              "People search in questions and phrases, so start from how they'd really ask. Ask your customers, scan forums and communities, and mine autocomplete suggestions.",
              "Question-shaped keywords ('how to fix X') signal clear intent and are easier to rank for than one-word terms.",
            ],
            bullets: [
              "Mine: autocomplete, People Also Ask, Reddit, customer chats.",
              "Capture the phrasing your audience actually uses.",
              "Longer questions often mean stronger buying/learning intent.",
            ],
          },
          {
            heading: "Judge demand and difficulty honestly",
            paragraphs: [
              "Free tools give search volume estimates; difficulty is judgment, not a download. A keyword with volume you can't realistically rank for is noise.",
              "For a new site, target narrow, specific terms first — rank, then broaden.",
            ],
            bullets: [
              "Volume: how many searches roughly, and is interest growing?",
              "Difficulty: who currently ranks, and how strong are they?",
              "Intent: does it match a page you can genuinely win?",
            ],
          },
          {
            heading: "Build a keyword-to-page map",
            paragraphs: [
              "Group keywords by the job they solve, then assign each group one page. One page covering one intent ranks better than one page covering everything.",
              "Your internal linking then connects related groups for more authority.",
            ],
            bullets: [
              "One intent per page.",
              "Primary keyword in title/H1; variations in body.",
              "Link related pages together to build topical coverage.",
            ],
          },
          {
            heading: "Check serps before you commit",
            paragraphs: [
              "Search the keyword yourself before writing: if the top results are forums, videos or big-budget pages, adjust your content format or pick a different angle.",
              "Match your page format to what the SERP rewards for that query.",
            ],
            bullets: [
              "Read the current top 5 results for the query.",
              "Match their format (listicle, how-to, tool, video).",
              "Only target what you can beat or genuinely equal.",
            ],
            tip: "A keyword is only 'yours' when your page fully answers it better than what's currently ranking — aim for that or skip it.",
          },
        ],
        takeaways: [
          "Start from real questions, found in autocomplete and communities.",
          "Filter for achievable difficulty; narrow terms first.",
          "Map one keyword group per page and match the SERP format.",
        ],
        practice:
          "Build a 20-keyword list this week from autocomplete and one forum for your niche, then pick the 5 with achievable difficulty and map each to a page you'll create.",
      },
      {
        slug: "technical-seo-checklist",
        title: "Technical SEO Checklist",
        description:
          "Site speed, mobile experience, indexing and structured data — the technical basics that let good content rank.",
        difficulty: "Intermediate",
        duration: "15 min",
        tags: ["technical", "checklist"],
        objectives: [
          "Run the core technical checks: crawl, index, speed, mobile.",
          "Use Search Console to find and fix indexing problems.",
          "Apply structured data to boost rich results and CTR.",
        ],
        lesson: [
          {
            heading: "Make sure Google can crawl you",
            paragraphs: [
              "If search engines can't reach your pages, nothing else matters. Check your sitemap, robots directives and internal links so every important page is discoverable.",
              "Use the URL inspection tool to see how Google views a real page.",
            ],
            bullets: [
              "Submit a clean XML sitemap.",
              "Avoid blocking important pages with robots rules.",
              "Keep internal links from your best pages to the rest.",
            ],
          },
          {
            heading: "Fix the common indexing blockers",
            paragraphs: [
              "Noindex by accident, duplicate pages, thin or orphaned content and soft-404s are typical reasons pages stay out of results.",
              "Review Search Console's page-indexing report weekly at first.",
            ],
            bullets: [
              "Check for accidental noindex directives.",
              "Merge or canonicalize duplicate versions.",
              "Find orphaned pages with no internal links.",
            ],
          },
          {
            heading: "Speed and mobile are rankings, not nice-to-haves",
            paragraphs: [
              "Slow, clunky mobile pages lose rankings and visitors. Compress images, reduce blocking scripts and test on a real phone connection.",
              "Core Web Vitals measure the experience users feel — speed, stability, responsiveness.",
            ],
            bullets: [
              "Compress and resize images before upload.",
              "Minimize render-blocking JavaScript.",
              "Test on mobile with throttled network speed.",
            ],
          },
          {
            heading: "Structured data earns richer results",
            paragraphs: [
              "Schema markup (e.g., Article, FAQPage, Product, Breadcrumb) helps engines understand content and can earn rich results with images, ratings and layout.",
              "Validate with the Rich Results test and keep markup matching visible content.",
            ],
            bullets: [
              "Apply one relevant type per page to start.",
              "Validate with the free testing tools.",
              "Only mark up content a user can actually see.",
            ],
            tip: "Use a weekly 30-minute technical check: Search Console errors, one URL inspection, one PageSpeed run.",
          },
        ],
        takeaways: [
          "Crawlable and indexable pages come before rankings.",
          "Speed and mobile are ranking factors you can measure.",
          "Structured data earns richer results and better CTR.",
        ],
        practice:
          "This week run your own 30-minute technical check: sitemap submission check, Search Console indexing review, one mobile speed test — and fix the single worst issue you find.",
      },
    ],
  },
  {
    slug: "facebook-marketing",
    name: "Facebook Marketing",
    tagline: "Reach customers on Facebook",
    description:
      "Optimize your page, run ads that return data and build a real community with Facebook Groups.",
    icon: Share2,
    accentClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    topics: [
      {
        slug: "facebook-pages-profiles",
        title: "Facebook Pages & Profiles",
        description:
          "Set up and optimize a Facebook presence for your brand: page settings, visuals and info.",
        difficulty: "Beginner",
        duration: "9 min",
        tags: ["Facebook", "pages"],
        objectives: [
          "Set up a page that looks complete and trustworthy.",
          "Fill the signals people check before following or buying.",
          "Structure content so new visitors instantly get what you do.",
        ],
        lesson: [
          {
            heading: "Complete the trust checklist",
            paragraphs: [
              "A bare page reads as abandoned. Complete the essentials: profile and cover photos, description, contact details, website, location and hours.",
              "People who find you via a page decide in seconds whether you're real.",
            ],
            bullets: [
              "Clear profile and cover images at the right sizes.",
              "A bio that says who you help and how.",
              "Website, phone, address, and business category.",
            ],
          },
          {
            heading: "Make the pinned post work",
            paragraphs: [
              "Pin one post that instantly explains what you do, who it's for and how to take the next step. Treat it as your homepage inside Facebook.",
              "Answers + a simple call to action beats a generic welcome.",
            ],
            bullets: [
              "One pinned post that sells the 'what + who + how'.",
              "Use the featured/links section for key content.",
              "Update the pin whenever your offer changes.",
            ],
          },
          {
            heading: "Post with a rhythm",
            paragraphs: [
              "Consistency builds reach. Choose one content type you can sustain — tips, behind-the-scenes, proof of work — and post on a schedule that survives your week.",
              "Audience engagement signals (comments, shares) power organic reach.",
            ],
            bullets: [
              "Sustain 3–5 posts a week if you can — or fewer, done well.",
              "Mix value, proof and occasional offers.",
              "Reply to every comment to keep the flywheel turning.",
            ],
          },
          {
            heading: "Keep the signals fresh",
            paragraphs: [
              "Regular posts, reviews and active replies signal a live business, which matters for trust and for ad audiences built from your page.",
              "Set aside a weekly hour: schedule posts, reply, review insights.",
            ],
            bullets: [
              "Weekly post scheduling protects consistency.",
              "Respond quickly to messages and comments.",
              "Glance at insights monthly: what reached and engaged?",
            ],
          },
        ],
        takeaways: [
          "A complete, clear page builds instant trust.",
          "Pin one post that explains what you do and the next step.",
          "Consistent posting plus replies is the reach engine.",
        ],
        practice:
          "This week, audit your page against the trust checklist and write the single pinned post that explains what you do, who it's for and how to act.",
      },
      {
        slug: "facebook-ads-beginners",
        title: "Facebook Ads for Beginners",
        description:
          "Understand audiences, budgets and ad objectives — then launch a simple campaign that gets data.",
        difficulty: "Intermediate",
        duration: "16 min",
        tags: ["ads", "campaigns"],
        objectives: [
          "Choose the right campaign objective for your goal.",
          "Build a first audience and a small safe budget.",
          "Read the first round of results and decide next steps.",
        ],
        lesson: [
          {
            heading: "Start from the objective",
            paragraphs: [
              "Your goal drives everything: awareness (reach), engagement (interactions), traffic (clicks to a site) or conversions (signups/sales). Pick one objective and build the campaign around it.",
              "A campaign that chases two goals usually nails neither.",
            ],
            bullets: [
              "Traffic: get people to your page — the beginner default.",
              "Conversions: get actions — needs tracking set up.",
              "Reach/engagement: build audiences — good for social proof.",
            ],
          },
          {
            heading: "Audiences: start broad and narrow with data",
            paragraphs: [
              "For a first campaign, interest-based audiences (interests, behaviors, a lookalike) are the beginner sweet spot. Broad enough to learn, focused enough to be relevant.",
              "Let the delivery system learn; resist micro-audiences early.",
            ],
            bullets: [
              "Combine 2–4 relevant interests.",
              "Let the campaign run a week before touching the audience.",
              "Use data to cut, not vanity to keep.",
            ],
          },
          {
            heading: "Budget and creative that survive",
            paragraphs: [
              "Start with a daily budget you can keep for a week of learning, and write 3–5 creative angles (different hooks: problem, story, proof, offer).",
              "Creative quality moves ads more than anything else in the ranking formula.",
            ],
            bullets: [
              "A week of test data needs a real daily budget.",
              "3–5 variants beat one 'perfect' ad.",
              "Hooks in the first line decide the click.",
            ],
          },
          {
            heading: "Read results, then decide",
            paragraphs: [
              "After a week compare cost per result and CTR across angles. Kill the weakest, scale the winner gradually, and keep testing one variable at a time.",
              "Small, regular optimizations beat big brass-knuckles changes.",
            ],
            bullets: [
              "Cost per result is the scoreboard.",
              "Scale winners 20–30% at a time.",
              "Re-test creative — good ads fatigue over time.",
            ],
            tip: "Think of ad spend as research: you're paying for data about what resonates, not just for views.",
          },
        ],
        takeaways: [
          "Pick one objective; chase one goal per campaign.",
          "Start with a focused-but-observable audience at a safe budget.",
          "Creative angles and gradual scaling win in the long run.",
        ],
        practice:
          "Write the campaign brief for a first test: one objective, one audience, a $15–25/week budget, and 4 creative hook angles — then launch it and wait out the week.",
      },
      {
        slug: "facebook-groups-community",
        title: "Facebook Groups & Community",
        description:
          "Build a real community with Facebook Groups and use insights to grow engagement.",
        difficulty: "Intermediate",
        duration: "12 min",
        tags: ["groups", "community"],
        objectives: [
          "Run a group people actually engage with, not a broadcast channel.",
          "Use prompts and acknowledgement to seed conversation.",
          "Turn group engagement into business trust and sales.",
        ],
        lesson: [
          {
            heading: "A group is a conversation, not a feed",
            paragraphs: [
              "Groups work because members talk to each other. Your job is to ask good questions, welcome new members and put the spotlight on them.",
              "Broadcasting links with no conversation is why groups die.",
            ],
            bullets: [
              "Welcome posts: introduce every new member.",
              "Discussion prompts: questions that only members can answer.",
              "Share the mic: feature members' wins and questions.",
            ],
          },
          {
            heading: "Seed interactions deliberately",
            paragraphs: [
              "Early on, ask the questions and answer them yourself to model the vibe. Post consistently and respond inside hours, not days.",
              "Engagement compounds — every reply invites more replies.",
            ],
            bullets: [
              "Post daily prompts or a weekly themed question.",
              "Reply to everything early to set the norm.",
              "Use polls and wins to make joining effortless.",
            ],
          },
          {
            heading: "Community as marketing",
            paragraphs: [
              "A healthy group shortens the sales cycle: trust lives here. Announce offers, but mostly let members' questions and wins sell for you.",
              "The 'group of people who care' is your most honest marketing asset.",
            ],
            bullets: [
              "Let customer questions drive your content and offers.",
              "Share proof, not pitches.",
              "Give early access to your community as a reward.",
            ],
          },
          {
            heading: "Measure what matters",
            paragraphs: [
              "Watch active members, posts and replies — not just member count. An engaged 500 beats a silent 5,000.",
              "Use insights to find what drives conversations, then make more of that.",
            ],
            bullets: [
              "Track weekly active members and replies.",
              "Double down on the prompt types that spark the most.",
              "Prune spam and off-topic noise to protect the room.",
            ],
          },
        ],
        takeaways: [
          "Groups are conversations — seed them with questions and welcomes.",
          "Reply inside hours and feature members to compound engagement.",
          "Trust built in community is the most honest marketing there is.",
        ],
        practice:
          "This week, either revive or start a group: post one welcome, one discussion prompt, and personally reply to every single reply — measure your active members on day 7.",
      },
    ],
  },
  {
    slug: "instagram-marketing",
    name: "Instagram Marketing",
    tagline: "Turn attention into action",
    description:
      "Build an Instagram presence that converts — profiles, Reels and a growth strategy that attracts the right followers.",
    icon: Hash,
    accentClass: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    topics: [
      {
        slug: "profiles-that-convert",
        title: "Instagram Profiles That Convert",
        description:
          "Optimize your bio, highlights and content pillars so visitors follow and take action.",
        difficulty: "Beginner",
        duration: "10 min",
        tags: ["Instagram", "profile"],
        objectives: [
          "Rewrite a bio that converts visitors into followers.",
          "Use highlights to sell your story in seconds.",
          "Structure content pillars that match audience interests.",
        ],
        lesson: [
          {
            heading: "The bio's only job",
            paragraphs: [
              "A bio makes a stranger choose: follow, click the link, or scroll away. Say who you help, the outcome you deliver, and the proof in under 150 characters.",
              "Name the transformation, not just the topic.",
            ],
            bullets: [
              "Who + outcome + proof, in one breath.",
              "One clear call to action (link, DM, shop).",
              "Keywords help searchability within Instagram.",
            ],
          },
          {
            heading: "Highlights as your best-of",
            paragraphs: [
              "Highlights gather posts into chapters: About, Tutorials, Results, Offers, FAQ. New visitors read highlights like a menu before following.",
              "Cover images should match your visual identity so the profile feels designed.",
            ],
            bullets: [
              "Order highlights like a mini funnel.",
              "Curate evergreen best-posts, not stale ones.",
              "Consistent covers signal a serious account.",
            ],
          },
          {
            heading: "Content pillars that build FOMO",
            paragraphs: [
              "A conversion profile posts consistent pillars — education, proof/social proof, personality/humor, occasional offers — so followers get a rhythm they can rely on.",
              "Every post should nudge 'follow so I don't miss the next one'.",
            ],
            bullets: [
              "Education: teach one useful thing per post.",
              "Proof: results, testimonials, behind-the-scenes.",
              "Offer: a clear CTA at the right frequency.",
            ],
          },
          {
            heading: "Link and lead capture",
            paragraphs: [
              "Turn profile visits into owned data: a single link page or a simple 'DM the word X' flow converts better than a bare link-in-bio.",
              "A lead magnet ('free checklist') in bio gives followers a reason to act.",
            ],
            bullets: [
              "Use a link-in-bio page with clear choices.",
              "Run DM keyphrases for gated freebies.",
              "Track clicks to know which posts drive action.",
            ],
            tip: "Test your profile as a new visitor: can they say what you do and what to do next within five seconds?",
          },
        ],
        takeaways: [
          "The bio sells the transformation in seconds.",
          "Highlights are the menu new visitors read.",
          "Consistent pillars plus a clear CTA convert attention to action.",
        ],
        practice:
          "Open your bio with new eyes: rewrite it to who+outcome+proof+CTA, then reorganize your highlights into a funnel order and refresh their covers.",
      },
      {
        slug: "reels-short-form",
        title: "Reels & Short-Form Video",
        description:
          "Create Reels people watch: hooks, structure, captions and posting strategy.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["Reels", "video"],
        objectives: [
          "Open Reels with hooks that stop the scroll.",
          "Structure short videos for watch-through.",
          "Use captions and posting strategy for discovery.",
        ],
        lesson: [
          {
            heading: "The first second decides",
            paragraphs: [
              "Reels live or die by the hook — text, statement, motion — that stops a thumb in the first frame. Hook first, intro never.",
              "Best hooks make a promise the rest of the video keeps.",
            ],
            bullets: [
              "Open with the payoff or a provocative claim.",
              "Keep intros to zero — start inside the moment.",
              "Say or show the promise in the first second.",
            ],
          },
          {
            heading: "Structure for watch-through",
            paragraphs: [
              "Short videos hold attention with a tight shape: hook → fast value → payoff → CTA. Cut dead air ruthlessly.",
              "The algorithm rewards watching through; pace the video so it's impossible to look away.",
            ],
            bullets: [
              "Goal: hold the viewer to the end.",
              "One idea per Reel — no tangents.",
              "End with a clear next step (follow, comment, save).",
            ],
          },
          {
            heading: "Captions unlock discovery",
            paragraphs: [
              "Most Reels are watched muted with captions on. Burn in clean captions, and write a description with your keyword so search can find it.",
              "Add a caption CTA — 'save this for later' drives the signal that matters.",
            ],
            bullets: [
              "Always burn in accurate captions.",
              "Put your main keyword in the caption text.",
              "Ask viewers to save or share, not just like.",
            ],
          },
          {
            heading: "Post with a system",
            paragraphs: [
              "Consistency beats viral luck. Batch-create 3–5 Reels per session and schedule them on a cadence you can sustain.",
              "Review weekly: which hooks worked, which topics earned saves? Make more of those.",
            ],
            bullets: [
              "Batch produce to keep a regular schedule.",
              "Test different hooks on similar content.",
              "Steal formats that work in your niche, then improve them.",
            ],
          },
        ],
        takeaways: [
          "Hooks in the first frame decide the future of every Reel.",
          "Tight structure plus captions drive watch-through and discovery.",
          "Batching and hook-testing beat hoping for overnight virality.",
        ],
        practice:
          "Create one Reel this week: write the first-second hook as a full sentence, film it, add burned-in captions, and post with a save CTA.",
      },
      {
        slug: "growth-strategy",
        title: "Instagram Growth Strategy",
        description:
          "Plan 30 days of content, use hashtags and collaborations to grow followers that matter.",
        difficulty: "Intermediate",
        duration: "13 min",
        tags: ["growth", "strategy"],
        objectives: [
          "Plan a 30-day content calendar that builds momentum.",
          "Use hashtags and collaborations deliberately.",
          "Grow followers who fit your buyer, not just numbers.",
        ],
        lesson: [
          {
            heading: "Plan 30 days, then execute",
            paragraphs: [
              "A 30-day calendar of pillars and cadence removes daily guessing and builds compounding momentum. Plan topics in batches around your themes.",
              "Decide cadence you can honestly sustain; consistency compounds.",
            ],
            bullets: [
              "Weekly themes keep the account coherent.",
              "Batch ideas first, then create in sessions.",
              "Leave room to react to what works.",
            ],
          },
          {
            heading: "Hashtags with intent",
            paragraphs: [
              "Use a mix of relevant small, medium and large tags for your niche — not a wall of viral ones. Search for posts tagged with them to find your audience.",
              "Hashtags are discovery signals, not magic; quality content still decides.",
            ],
            bullets: [
              "5–10 relevant tags that match the post.",
              "Borrow tags from top accounts in your niche.",
              "Reuse a small proven set per content type.",
            ],
          },
          {
            heading: "Collaborate, don't just shout",
            paragraphs: [
              "Collabs, shout-outs and crossing over with similar- sized accounts put you in front of the right people fast. Find accounts whose audience fits yours.",
              "Give value first (useful collabs, features) and reciprocity follows.",
            ],
            bullets: [
              "Partner on Reels or Stories with aligned accounts.",
              "Join niche communities and answer genuinely.",
              "Deserve follows — engagement on others is how you earn reach.",
            ],
          },
          {
            heading: "Quality followers, then conversions",
            paragraphs: [
              "Follower count is vanity; the metric that matters is followers who engage and buy. Measure saves, DMs and clicks, not just follows.",
              "Grow the followers who match your ideal customer profile.",
            ],
            bullets: [
              "Track inbox DMs and link clicks weekly.",
              "Prune/move on from audiences outside your niche.",
              "Double down on content types that bring buyers.",
            ],
          },
        ],
        takeaways: [
          "A 30-day calendar turns guessing into momentum.",
          "Hashtags and collaborations are discovery, not shortcuts.",
          "Grow followers who engage and buy, not just numbers.",
        ],
        practice:
          "Map out 30 days: pick 4 weekly themes, fill 12 post slots, choose 10 hashtags, and line up one collab as a stretch goal for the month.",
      },
    ],
  },
];