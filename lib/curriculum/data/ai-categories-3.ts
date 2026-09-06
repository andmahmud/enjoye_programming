import { Building2, CodeXml, Gauge, PenLine } from "lucide-react";

import type { CurriculumCategory } from "../types";

/** AI categories, chunk 3: Content, Business, App Development, Productivity. */
export const aiCategories3: CurriculumCategory[] = [
  {
    slug: "ai-content-creation",
    name: "AI Content Creation",
    tagline: "Create and publish with AI",
    description:
      "Run a repeatable writing, script and media workflow with AI — while keeping your brand and originality.",
    icon: PenLine,
    accentClass: "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400",
    topics: [
      {
        slug: "ai-writing-workflows",
        title: "AI Writing Workflows",
        description:
          "From outline to publishable draft — a repeatable AI writing workflow with human editing checkpoints.",
        difficulty: "Beginner",
        duration: "11 min",
        tags: ["writing", "workflow"],
        objectives: [
          "Run a repeatable outline → draft → edit → publish workflow.",
          "Keep your voice and facts under your control.",
          "Build a template library that makes each piece faster.",
        ],
        lesson: [
          {
            heading: "The write-with-AI loop",
            paragraphs: [
              "The reliable workflow is: research and outline with AI, draft with AI, then edit as a human — fixing voice, facts and flow before publishing.",
              "The human edit is not optional; it's the step that makes the work yours.",
            ],
            bullets: [
              "Outline: AI proposes structure from your topic.",
              "Draft: AI writes a version at your requested length.",
              "Edit: you fix voice, accuracy and energy.",
              "Publish: only after the human pass.",
            ],
          },
          {
            heading: "Outlining beats blank-page drafting",
            paragraphs: [
              "A strong outline makes drafting fast: ask AI for 3 structural options, pick one, then expand section by section.",
              "Each section generated separately from a clear heading beats one giant 'write the whole article' prompt.",
            ],
            bullets: [
              "Request 3 outline angles, not one.",
              "Expand section by section with the outline as context.",
              "Adjust the outline whenever the draft drifts.",
            ],
            tip: "Feed AI your real notes and data as context — grounded drafts beat generic ones.",
          },
          {
            heading: "Keep your voice",
            paragraphs: [
              "Give the model 2–3 samples of your past writing as a style guide, then remind it: 'match the voice of these samples'. Passages that sound 'off' get rewritten, not accepted.",
              "Bold claims, numbers and quotes should be checked against sources yourself.",
            ],
            bullets: [
              "Samples of your writing train the model's ear.",
              "Rewrite any paragraph that doesn't sound like you.",
              "Verify claims and quotes before sharing.",
            ],
          },
          {
            heading: "Build a shrinking-template library",
            paragraphs: [
              "As you write, keep the prompt skeletons — 'listicle from this outline', 'newsletter from this blog post' — in a notes file. With reuse, each piece gets faster and better.",
              "Your editing preferences (phrases to avoid, structure) become prompt rules over time.",
            ],
            bullets: [
              "Save prompts that produced drafts you liked.",
              "Add your 'avoid' list to every template.",
              "Treat the library as living documentation of your style.",
            ],
          },
        ],
        takeaways: [
          "Outline → draft → human edit → publish is the pattern that holds up.",
          "Your voice comes from samples, edits and fact-checking.",
          "Reusable templates turn writing into a compounding skill.",
        ],
        practice:
          "Next piece of content you write: run the full loop once — AI outline, section-by-section drafts, then a strict human edit — and note where the loop saved or cost you time.",
      },
      {
        slug: "ai-for-video-scripts",
        title: "AI for Video & Scripts",
        description:
          "Generate video scripts, hooks and even voiceovers with AI tools — then assemble in your editor.",
        difficulty: "Intermediate",
        duration: "13 min",
        tags: ["video", "scripts"],
        objectives: [
          "Write scripts with a hook that earns a few extra seconds of attention.",
          "Plan a video with a clear 3-act structure.",
          "Use AI voice and pacing tools without losing authenticity.",
        ],
        lesson: [
          {
            heading: "Start from the viewer's hook",
            paragraphs: [
              "The first 3 seconds decide everything. Ask AI for multiple hook angles — curiosity, problem, promise, contrast — and pick the one a stranger would keep watching.",
              "Hooks earn attention; structure keeps it.",
            ],
            bullets: [
              "The hook answers: why watch further?",
              "Generate 5–10 hook options, pick the sharpest.",
              "Say it out loud — spoken hooks differ from written ones.",
            ],
          },
          {
            heading: "Script with a three-act skeleton",
            paragraphs: [
              "A 3-act skeleton — set up the problem, work through it, land the payoff — is the difference between a story and a ramble. Outline it before writing word-for-word.",
              "Keep sentences short and spoken; a script is heard, not read.",
            ],
            bullets: [
              "Act 1: open with the payoff promise and context.",
              "Act 2: steps, examples, tension and transitions.",
              "Act 3: summarize, call to action, tasteful sign-off.",
            ],
          },
          {
            heading: "Filling dialogue and prose",
            paragraphs: [
              "Generate the script in sections with the outline as context, then read it aloud — awkward lines get rewritten by you, not accepted.",
              "Add pacing cues (pause, slower) so the read feels human.",
            ],
            bullets: [
              "Draft section-by-section from your outline.",
              "Read everything aloud; rewrite anything that trips you.",
              "Keep a 60–70% clip rate for voiceover density.",
            ],
          },
          {
            heading: "AI voice and assembly",
            paragraphs: [
              "AI voice tools turn scripts into narration when your voice isn't available — useful for faceless channels and drafts. Quality varies; test a natural-voice option and add human pacing.",
              "You still assemble in an editor: audio, footage, captions and the final human pass.",
            ],
            bullets: [
              "Use AI voice for drafts and faceless formats.",
              "Test the most natural voice preset for your niche.",
              "Edit audio, visuals and captions yourself for the human touch.",
            ],
            tip: "Captions are the most-viewed part of short-form video — script with short punchy lines that caption well.",
          },
        ],
        takeaways: [
          "Hooks earn attention; a 3-act structure keeps it.",
          "Draft section by section, then read it aloud.",
          "AI voices assist, but you assemble and polish the final video.",
        ],
        practice:
          "Take one video idea and generate 8 hook options, write a 3-act outline, and draft just the first act with AI — then read it aloud exactly as viewers would hear it.",
      },
      {
        slug: "ethics-originality",
        title: "Ethics & Originality",
        description:
          "Avoid plagiarism, cite AI honestly and keep your brand's voice while using AI to create.",
        difficulty: "Intermediate",
        duration: "9 min",
        tags: ["ethics", "originality"],
        objectives: [
          "Use AI without tripping plagiarism lines.",
          "Disclose AI use honestly where it matters.",
          "Protect your originality and your audience's trust.",
        ],
        lesson: [
          {
            heading: "AI output and plagiarism",
            paragraphs: [
              "AI doesn't copy paragraphs wholesale the way search-and-paste does, but it can echo another's ideas and structure closely. The risk is in how you use it — not the tool itself.",
              "Your safeguard is transformation: research, draft, then rewrite in your own thinking and examples.",
            ],
            bullets: [
              "Check any AI draft against your sources for close similarity.",
              "Paraphrase and contextualize rather than ship raw output.",
              "Original insight comes from you — keep it central.",
            ],
          },
          {
            heading: "Disclose AI use honestly",
            paragraphs: [
              "Different contexts demand different disclosures: academic work often restricts AI entirely, professional work may expect acknowledgment, and creative work values transparency with audiences.",
              "When in doubt, disclose briefly — trust survives honesty better than surprise.",
            ],
            bullets: [
              "Check your institution's or client's AI policy first.",
              "A short 'drafted with AI, edited by me' note covers most cases.",
              "Never claim AI work as purely human when asked.",
            ],
          },
          {
            heading: "Keep your brand's voice",
            paragraphs: [
              "When AI drafts for your brand, every published piece should pass your voice check — tone, values and perspective. Otherwise your audience hears a blend of everyone's tone and nobody's.",
              "Your editing pass is the originality guarantee.",
            ],
            bullets: [
              "Run every piece through your voice checklist.",
              "Add your specific experience and examples.",
              "Reject generically 'AI-sounding' writing.",
            ],
          },
          {
            heading: "Responsibility to your audience",
            paragraphs: [
              "Publishing with AI multiplies output — and multiplies mistakes if unchecked. Fact-check, disclose where required, and never let speed outrank accuracy.",
              "The brands that win long-term are the ones whose AI-aided content still reads clearly human.",
            ],
            bullets: [
              "Verify facts, data and quotes yourself.",
              "Deliberately limit what AI generates for high-trust content.",
              "Build a bias-and-error review into every workflow.",
            ],
          },
        ],
        takeaways: [
          "Transform AI drafts with your own thinking to stay original.",
          "Disclose AI use whenever honesty demands it.",
          "Your editing and voice are the originality engine.",
        ],
        practice:
          "Take one AI-drafted paragraph from your recent work and rewrite it fully in your own words and experience, then compare how much more 'you' it reads.",
      },
    ],
  },
  {
    slug: "ai-for-business",
    name: "AI for Business",
    tagline: "Grow and run a business with AI",
    description:
      "Practical, low-cost AI applications for marketing, support, admin and decision-making in a growing business.",
    icon: Building2,
    accentClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    topics: [
      {
        slug: "ai-in-small-business",
        title: "AI in Small Business",
        description:
          "Practical, low-cost AI applications for marketing, support, admin and decision-making in a growing business.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["business", "small"],
        objectives: [
          "Apply AI to marketing, support, admin and decisions.",
          "Prioritize the AI wins with the best ROI for a small business.",
          "Keep people accountable for quality and safety.",
        ],
        lesson: [
          {
            heading: "Where small business wins fastest",
            paragraphs: [
              "The quick wins are marketing (drafts, content, ads copy), support (common answers, drafting replies), admin (summaries, proposals, follow-ups) and decisions (research and comparisons).",
              "Each of these is high-volume, repetitive and low-risk with a human check.",
            ],
            bullets: [
              "Marketing: faster copy, content and campaign ideas.",
              "Support: draft replies and answer FAQs.",
              "Admin: tenders, invoices, summaries, follow-ups.",
              "Decisions: research options before you decide.",
            ],
          },
          {
            heading: "Build a two-week adoption plan",
            paragraphs: [
              "Don't try everything at once. Pick one painful area, use AI on it for two weeks, measure the time saved, and only then expand.",
              "Evidence from your own workflow beats articles about other people's.",
            ],
            bullets: [
              "Week 1: use AI on your #1 repetitive task.",
              "Week 2: refine prompts and add a second task.",
              "Measure: hours saved, output quality, error rate.",
            ],
          },
          {
            heading: "Cost control for a small budget",
            paragraphs: [
              "Free tiers handle light use; paid plans pay off only on volume or quality-critical work. Keep one or two subscriptions checked quarterly.",
              "A 10-minute template library often beats a top-tier subscription for most small-business tasks.",
            ],
            bullets: [
              "Max out free tiers before subscribing.",
              "Audit subscriptions quarterly.",
              "Invest in templates and workflow, not just tools.",
            ],
          },
          {
            heading: "Accountability and privacy",
            paragraphs: [
              "Assign an owner to every AI output that reaches customers or decisions. Someone human signs off — that's how you keep quality high and avoid embarrassing autopilot mistakes.",
              "Keep customer data and secrets out of public tools.",
            ],
            bullets: [
              "A named person approves each critical output.",
              "Redact customer details before pasting into tools.",
              "Document which tool handles which job.",
            ],
          },
        ],
        takeaways: [
          "Focus AI on marketing, support, admin and decisions — the repetitive core.",
          "Adopt one area at a time and measure the time saved.",
          "Humans sign off on anything customer-facing.",
        ],
        practice:
          "Choose the single most time-consuming task in your business this week and run an AI-assisted version for 5 producing days, tracking minutes saved and any quality issues.",
      },
      {
        slug: "ai-for-client-work",
        title: "AI for Client Work",
        description:
          "Deliver more with AI: proposals, research, reports and presentations that shine.",
        difficulty: "Intermediate",
        duration: "11 min",
        tags: ["clients", "proposals"],
        objectives: [
          "Produce faster, higher-quality proposals and reports with AI.",
          "Use AI research to prepare thoroughly before client calls.",
          "Deliver AI-assisted work that still feels clearly yours.",
        ],
        lesson: [
          {
            heading: "Proposals that win faster",
            paragraphs: [
              "Feed AI your client's brief and your services, and let it draft the proposal structure: problem, approach, deliverables, timeline, pricing and next steps.",
              "You own the final edit — numbers, tone and commitments must be checked by hand.",
            ],
            bullets: [
              "Give the model the brief and your process as context.",
              "Draft, then tailor tone and specifics to this client.",
              "Validate all numbers and promises before sending.",
            ],
          },
          {
            heading: "Research before the call",
            paragraphs: [
              "Before a client meeting, ask AI to compile what you should know: their business, industry trends, likely pain points and suggested talking points.",
              "Verify the details quickly, then walk into the conversation informed.",
            ],
            bullets: [
              "Generate a prep brief: context, questions, risks.",
              "Spot inconsistencies to probe during the call.",
              "Translate industry jargon into plain talking points.",
            ],
          },
          {
            heading: "Reports and deliverables, polished",
            paragraphs: [
              "AI turns your notes into structured reports: summary, findings, recommendations and next steps. Keep a consistent template so every client gets the same professional shape.",
              "Clip the report's length ruthlessly — clients skim, so lead with decisions.",
            ],
            bullets: [
              "Transform rough notes into structured deliverables.",
              "Ask for 'decision first, details after' formatting.",
              "Reuse a report template for a consistent brand.",
            ],
          },
          {
            heading: "Keep the work yours",
            paragraphs: [
              "Deliverables live or die on specifics only you have: their data, your experience, your judgment. Use AI for the first 60%, then make the final 40% unmistakably yours.",
              "Clients rightly ask about AI use today — an honest, skilled answer builds trust.",
            ],
            bullets: [
              "Ground every deliverable in their real data.",
              "Add your examples, opinions and experience.",
              "Disclose and demonstrate how AI made you faster, not lazier.",
            ],
          },
        ],
        takeaways: [
          "AI drafts proposals, research and reports; you own the specifics and the tone.",
          "Structured templates keep every client deliverable professional.",
          "The final 40% of any deliverable should be unmistakably you.",
        ],
        practice:
          "Rebuild your next proposal with AI: draft from your notes, then edit for tone and verify numbers — and time yourself against your old process.",
      },
      {
        slug: "measuring-ai-investment",
        title: "Measuring AI Investment",
        description:
          "Track time saved and output quality to decide where AI genuinely pays off for your business.",
        difficulty: "Intermediate",
        duration: "10 min",
        tags: ["ROI", "metrics"],
        objectives: [
          "Measure time saved with a simple before/after comparison.",
          "Score quality changes beyond raw speed.",
          "Decide where AI genuinely pays and where it doesn't.",
        ],
        lesson: [
          {
            heading: "Measure time, the honest way",
            paragraphs: [
              "For two weeks, time one task done the old way, then two weeks with AI aid, and compare. Keep it to a task you run regularly so the sample is meaningful.",
              "Vague feelings like 'seems faster' lose to a stopwatch and a column.",
            ],
            bullets: [
              "Choose one recurring task and a fixed sample size.",
              "Record minutes old vs minutes with AI.",
              "Include correction time — small mistakes throw off the ROI.",
            ],
          },
          {
            heading: "Score quality, not just speed",
            paragraphs: [
              "Faster output can hide quality drops. Create a simple 1–5 score for: accuracy, completeness, readiness to share. Score both the manual and AI-aided versions.",
              "AB rate: 50% speed gain with a quality drop may not be a win.",
            ],
            bullets: [
              "Score accuracy, completeness and polish per sample.",
              "Compare average scores between both methods.",
              "Reject 'wins' that load errors onto teammates.",
            ],
          },
          {
            heading: "Calculate real ROI",
            paragraphs: [
              "Minutes saved × how often you run the task × your time value = monthly value. Subtract subscription and setup costs, and you have a defensible number.",
              "Include the cost of your time learning and maintaining the setup.",
            ],
            bullets: [
              "Value = (time saved per run × runs per month) × hourly value.",
              "Subtract subscriptions and maintenance effort.",
              "Update the numbers quarterly — tools and tasks change.",
            ],
          },
          {
            heading: "Decide and spiral out",
            paragraphs: [
              "Growth comes from concentrating AI on the wins and ignoring the rest: double down where ROI is proven, pause everything marginal.",
              "Re-run the measurement whenever you change tools or prompts.",
            ],
            bullets: [
              "Scale the proven workflows first.",
              "Cut or auto-ignore tools with no measured return.",
              "Make measurement part of every new AI adoption.",
            ],
            tip: "Keep a one-page AI scorecard per area — before/after time, average quality score and monthly cost. Review it monthly.",
          },
        ],
        takeaways: [
          "Measure time with before/after timing, not feelings.",
          "Score quality separately from speed.",
          "Concentrate where ROI is proven; cut the rest.",
        ],
        practice:
          "Create the one-page AI scorecard today: pick one recurring task, record its manual time and quality score for three runs, and start the AI version's log this week.",
      },
    ],
  },
  {
    slug: "ai-app-development",
    name: "AI App Development",
    tagline: "From idea to shipped AI app",
    description:
      "Build AI-powered applications end to end — planning, chat interfaces, costs and safety.",
    icon: CodeXml,
    accentClass: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    topics: [
      {
        slug: "planning-an-ai-app",
        title: "Planning an AI App",
        description:
          "Scope a real AI product: problem, data, model choice, pricing and the minimum useful feature set.",
        difficulty: "Intermediate",
        duration: "13 min",
        tags: ["planning", "product"],
        objectives: [
          "Scope an AI product from problem, not technology.",
          "Choose a model strategy that fits the job and budget.",
          "Define the minimum useful feature set to ship.",
        ],
        lesson: [
          {
            heading: "Start with the problem, not the AI",
            paragraphs: [
              "AI products fail when they start from 'can we use AI?' instead of 'what job does this do better?'. Write the problem, the user, and the outcome before models enter.",
              "If the problem doesn't need AI, don't force it in.",
            ],
            bullets: [
              "Problem: who is stuck, doing what, how often?",
              "Outcome: what must measurably improve?",
              "AI-fit: does the task involve language, generation or pattern-finding?",
            ],
          },
          {
            heading: "Design the data flow",
            paragraphs: [
              "Map what data enters, how it's prepared for the model, and what comes out. Most AI app complexity lives here, not in the model call.",
              "Consider chunking long input, grounding with retrieved context, and caching repeated results.",
            ],
            bullets: [
              "Input: user content, uploaded files, fetched data.",
              "Prepare: cleaning, chunking, context retrieval.",
              "Output: the reply plus metadata, validation and fallback.",
            ],
          },
          {
            heading: "Choose the model strategy",
            paragraphs: [
              "Decide between a hosted API (fast to build, per-token cost) and self-hosting (control, staffing and infra cost). Start with an API; move to self-hosting only when volume justifies it.",
              "Match model size to the task and remember you can switch models without changing your UX.",
            ],
            bullets: [
              "Hosted API: fastest path, pay per token.",
              "Self-host: control and cost at scale — heavy operating burden.",
              "Tier models: cheap/fast for simple jobs, strong for hard ones.",
            ],
          },
          {
            heading: "Find the minimum useful slice",
            paragraphs: [
              "Scope the smallest version that solves the core job: one problem, one flow, one output. Ship that, learn from real users, then add features.",
              "Every feature you can cut to reach launch is a feature you should cut.",
            ],
            bullets: [
              "One primary flow end to end.",
              "A small target group who feels the pain daily.",
              "Metrics that tell you if it works before 'polish'.",
            ],
          },
        ],
        takeaways: [
          "Scope from the problem and measurable outcome — AI is the tool, not the pitch.",
          "Map your data flow; that's where most complexity lives.",
          "Ship a minimum useful slice and learn from real users.",
        ],
        practice:
          "Write a one-page plan for an AI app idea: problem, user, outcome, data flow, model approach and the minimum slice you'd ship — before writing any code.",
      },
      {
        slug: "chat-ui-fundamentals",
        title: "Chat UI Fundamentals",
        description:
          "Design the chat-based interface users expect from AI apps — message states, streaming and error handling.",
        difficulty: "Intermediate",
        duration: "14 min",
        tags: ["chat UI", "design"],
        objectives: [
          "Build the message list UI users expect from AI chat.",
          "Handle streaming, pending and error states cleanly.",
          "Make conversation history and resets obvious and safe.",
        ],
        lesson: [
          {
            heading: "The message model that powers the UI",
            paragraphs: [
              "A chat UI is a list of messages, each with a role (user/assistant), status (sending, streaming, done, error) and content. A clear data model makes every visual state easy.",
              "Keep the history as the single source of truth — the UI just renders it.",
            ],
            bullets: [
              "Message: role, status, content, timestamp.",
              "Status drives the visual state.",
              "History array = both the UI and the API context.",
            ],
          },
          {
            heading: "Streaming makes it feel fast",
            paragraphs: [
              "Stream tokens as they arrive instead of waiting for the whole answer. Users perceive streaming as 10× faster and abandon waiting screens far less.",
              "Show a typing indicator immediately after send, then render streamed text chunk by chunk.",
            ],
            bullets: [
              "Send the request and open a stream.",
              "Append tokens to the assistant message live.",
              "Fall back to a single response for tiny answers if needed.",
            ],
          },
          {
            heading: "Design every state, especially errors",
            paragraphs: [
              "Design for: sending, streaming, done, failed, rate-limited and empty. A failed call should offer retry, not a blank screen.",
              "Show rate limits and response-length issues clearly so users aren't confused.",
            ],
            bullets: [
              "Retry button with the original prompt intact.",
              "Explain limits in plain language.",
              "Keep the user's input safe while retrying.",
            ],
          },
          {
            heading: "History, memory and resets",
            paragraphs: [
              "Let users rename chats, clear a conversation and start fresh easily. Context grows with history — give a visible way to start over when outputs degrade.",
              "Consider trimming or summarizing old turns in long conversations to control cost.",
            ],
            bullets: [
              "'New chat' should be one tap away.",
              "Long histories degrade quality and raise cost — manage them.",
              "Persist chats where users expect them back.",
            ],
          },
        ],
        takeaways: [
          "Model messages as role + status + content to power every UI state.",
          "Stream responses and give a typing indicator for perceived speed.",
          "Design error, retry and reset states before launch.",
        ],
        practice:
          "Sketch or build a minimal chat UI with four visible states: sending, streaming, done, and failed-with-retry — then test all four against one real API call.",
      },
      {
        slug: "costs-limits-safety",
        title: "Costs, Limits & Safety",
        description:
          "Budget for tokens, handle rate limits and add safety rails before shipping your AI app.",
        difficulty: "Advanced",
        duration: "12 min",
        tags: ["costs", "safety"],
        objectives: [
          "Estimate and control token costs before they surprise you.",
          "Handle rate limits and outages gracefully.",
          "Add safety rails: moderation, PII and human oversight.",
        ],
        lesson: [
          {
            heading: "Budget like an engineer",
            paragraphs: [
              "Estimate per-request cost from tokens (input + output), multiply by expected requests per month, and set a hard spending cap on your provider account.",
              "One runaway loop or prompt-injection incident can burn a month's budget — caps are cheap insurance.",
            ],
            bullets: [
              "Cost = tokens in × input price + tokens out × output price.",
              "Add a monthly cap on your provider account.",
              "Log usage per feature to catch runaway spend early.",
            ],
          },
          {
            heading: "Trim the bills on purpose",
            paragraphs: [
              "Trimming context, caching repeated prompts, using smaller models for simple jobs and compressing chat history all cut token costs dramatically.",
              "Profile where tokens go before optimizing — guesswork wastes effort.",
            ],
            bullets: [
              "Cache identical or near-identical requests.",
              "Summarize older chat turns instead of resending them.",
              "Route simple requests to cheaper models.",
            ],
          },
          {
            heading: "Handle limits and failures",
            paragraphs: [
              "Providers rate-limit and go down. Design for retries with backoff, queue long jobs, and warn users clearly when capacity is hit.",
              "A graceful queue beats a confusing error at high volume.",
            ],
            bullets: [
              "Retry with exponential backoff on 429/5xx.",
              "Queue and batch long-running work.",
              "Surface 'popular model busy — try again' instead of raw errors.",
            ],
          },
          {
            heading: "Safety rails before shipping",
            paragraphs: [
              "Add content moderation, strip personal data before it hits the model, and restrict what the app can do on behalf of users.",
              "For anything with real consequences (money, health, hiring), keep a human in the decision loop.",
            ],
            bullets: [
              "Moderation: filter input and output where it matters.",
              "PII handling: redact, minimize, and secure in transit.",
              "Human oversight for consequential auto-actions.",
              "Prompt-injection awareness: don't trust model instructions blindly.",
            ],
          },
        ],
        takeaways: [
          "Budget from tokens and cap provider spend early.",
          "Cache, trim and tier models to control cost.",
          "Add moderation, PII handling and human checks before launch.",
        ],
        practice:
          "For your app idea, fill in a cost sheet: tokens per request, expected monthly volume, per-feature budget, and the three safety rails you'd ship in v1 — before writing code.",
      },
    ],
  },
  {
    slug: "ai-productivity",
    name: "AI Productivity",
    tagline: "Finish more with AI helpers",
    description:
      "Build personal AI workflows for email, notes, scheduling, research and learning — so you finish more in less time.",
    icon: Gauge,
    accentClass: "bg-lime-500/10 text-lime-600 dark:text-lime-400",
    topics: [
      {
        slug: "daily-workflow",
        title: "Your AI Daily Workflow",
        description:
          "Set up a personal AI workflow: email, notes, scheduling and research — so you finish more in less time.",
        difficulty: "Beginner",
        duration: "10 min",
        tags: ["workflow", "personal"],
        objectives: [
          "Design one daily rhythm around three AI helpers.",
          "Auto-draft email responses you still approve.",
          "Keep a running AI note pipeline that never loses an idea.",
        ],
        lesson: [
          {
            heading: "Three helpers, one rhythm",
            paragraphs: [
              "Most of the daily win fits in three helpers: a drafts assistant (email and messages), a notes processor (capture and organize) and a research assistant (lookups and summaries).",
              "The rhythm: batch capture → let AI structure → approve and dispatch.",
            ],
            bullets: [
              "Drafting assistant: turn quick notes into clean messages.",
              "Notes processor: organize scattered capture into structure.",
              "Research assistant: fast summaries when you need context.",
            ],
          },
          {
            heading: "Email that starts drafted",
            paragraphs: [
              "For routine replies, jot a one-line note and have AI expand it into a clear, polite message you review before sending. Drafting speed doubles; judgment stays yours.",
              "Keep a 'tone' rule so replies sound like you.",
            ],
            bullets: [
              "One rough sentence in → polished draft out.",
              "Review every send — never auto-save drafts.",
              "Save your preferred phrases as prompt rules.",
            ],
          },
          {
            heading: "A capture pipeline that never loses ideas",
            paragraphs: [
              "Forward notes, voice memos and screenshots into one inbox; a weekly (or daily) pass organizes them into projects and next actions with AI's help.",
              "The system only works if capture is frictionless — one place, no filing.",
            ],
            bullets: [
              "One capture inbox for everything.",
              "AI structures it: summary, project, next action.",
              "Weekly triage keeps inboxes honest.",
            ],
          },
          {
            heading: "Guard your focus",
            paragraphs: [
              "AI's temptation is more output, more often — which fragments attention. Batch the AI assists once or twice a day instead of live-refreshing all day.",
              "The goal is finishing more, not juggling more windows.",
            ],
            bullets: [
              "Batch email drafting to set times.",
              "Close productivity tools during deep work.",
              "Measure 'tasks finished', not 'AI calls made'.",
            ],
            tip: "A 45-minute 'AI assistant hour' each morning beats a dozen scattered micro-interactions.",
          },
        ],
        takeaways: [
          "Three helpers — drafts, notes, research — cover the daily win.",
          "Capture once, let AI structure, then you approve.",
          "Batch your AI use and protect deep-work blocks.",
        ],
        practice:
          "Tomorrow, run one AI-assistant hour: draft three messages from one-line notes, dump every idea into one capture inbox, and have AI organize it before your next meeting.",
      },
      {
        slug: "ai-triage",
        title: "AI Triage for Inbox & Tasks",
        description:
          "Let AI summarize, prioritize and draft responses for email and message overload.",
        difficulty: "Beginner",
        duration: "9 min",
        tags: ["email", "focus"],
        objectives: [
          "Reduce inbox overwhelm with AI summaries and sorting.",
          "Prioritize by importance, not arrival order.",
          "Keep judgment on everything that actually matters.",
        ],
        lesson: [
          {
            heading: "Summarize before you decide",
            paragraphs: [
              "Ask AI to summarize batches of new messages: who, what they want, by when. A summary lets you triage in minutes instead of opening everything.",
              "Summaries are a starting point — click through to the real thread for anything that matters.",
            ],
            bullets: [
              "Summary per batch: sender, ask, deadline.",
              "Sort by what truly needs your attention.",
              "Drill into details only where it counts.",
            ],
          },
          {
            heading: "Prioritize by importance, not order",
            paragraphs: [
              "Group messages by theme ('money', 'customers', 'urgent', 'FYI') and by action required. AI can propose the grouping; you decide what fires first.",
              "Urgency blindness — answering first is easy — is the enemy of a good day.",
            ],
            bullets: [
              "Group by theme and action required.",
              "Set your own top-3 priorities before checking email.",
              "Dispatch the rest from your priorities, not their arrival.",
            ],
          },
          {
            heading: "Draft from one-line intents",
            paragraphs: [
              "For each message you must answer, write a one-line intent and let AI draft a clear reply. Keep short-thread replies to two or three sentences.",
              "Drafting never replaces reading — always scan the real thread first.",
            ],
            bullets: [
              "Intent per reply: what must the other party know/do?",
              "AI drafts, you approve and personalize.",
              "For sensitive or long conversations, write it yourself.",
            ],
          },
          {
            heading: "Keep humans in the loop",
            paragraphs: [
              "The boundary: AI handles volume and structure; you handle judgment, tone and decisions. Never let triage autopilot a reply to someone important.",
              "Set an 'escalation' threshold — anything beyond routine requires the human version of you.",
            ],
            bullets: [
              "Routine asks: AI-assisted triage is fine.",
              "People, money, contracts: human-only.",
              "Audit triage decisions weekly.",
            ],
          },
        ],
        takeaways: [
          "Summarize and group the inbox before you open anything.",
          "Priority runs on your goals, not arrival order.",
          "AI drafts the routine; people and big calls stay human.",
        ],
        practice:
          "Today, before answering anything, use AI to summarize your queue and group it by theme and action — then handle the top group first and notice the difference.",
      },
      {
        slug: "ai-study-routines",
        title: "AI-Assisted Learning Routines",
        description:
          "Build spaced review notes, practice questions and explainer sessions with AI.",
        difficulty: "Beginner",
        duration: "11 min",
        tags: ["study", "routine"],
        objectives: [
          "Design a 3-step learning loop: study, quiz, review.",
          "Turn lessons into spaced flashcards automatically.",
          "Use AI explainers that adapt to your level.",
        ],
        lesson: [
          {
            heading: "The study → quiz → review loop",
            paragraphs: [
              "Effective learning alternates input and active recall: study a topic, quiz yourself, then review the misses. AI compresses all three steps.",
              "Active recall (retrieving from memory) is what actually strengthens memory — quizzing matters more than re-reading.",
            ],
            bullets: [
              "Study: AI simplifies and structures the material.",
              "Quiz: AI generates questions from your notes.",
              "Review: AI drills exactly what you missed.",
            ],
          },
          {
            heading: "Turn notes into flashcards",
            paragraphs: [
              "Paste your lesson notes and ask for flashcards in a strict question/answer format. Export them to a flashcard app for spaced repetition.",
              "Spaced repetition schedules reviews at the moment you're about to forget — the highest-leverage habit in studying.",
            ],
            bullets: [
              "Flashcard format: crisp question → one-line answer.",
              "Import into a spaced-repetition app.",
              "New cards daily, reviews as scheduled.",
            ],
          },
          {
            heading: "Explanations that adapt to you",
            paragraphs: [
              "Ask the AI to explain the same idea at increasing depth — 'as a 10-year-old', then 'as a first-year university student' — and compare the layers.",
              "The gap between what you can explain and can't is your next revision target.",
            ],
            bullets: [
              "Layer explanations: simple → technical → expert.",
              "Explain it back to the AI and have it grade your gaps.",
              "Focus on the level where you can't quite explain it yet.",
            ],
          },
          {
            heading: "Make it a daily habit, not a session",
            paragraphs: [
              "Tiny consistent loops beat heroic cramming: 20 minutes a day of study + quiz + flashcard review outperforms a weekend marathon.",
              "Let the routine become the default and results arrive quietly.",
            ],
            bullets: [
              "Fix a daily time and place for the loop.",
              "Keep the stack small: study, quiz, flashcards.",
              "Review weekly: what's sticking, what needs re-covering?",
            ],
            tip: "Use AI's review of your own summaries as the weekly check — it surfaces what you confidently wrong, which is where you really stand.",
          },
        ],
        takeaways: [
          "Alternate study, quiz and review — recall beats re-reading.",
          "Turn notes into spaced flashcards with AI.",
          "Small daily loops beat big cramming sessions.",
        ],
        practice:
          "This week, take one subject and run the 3-step loop daily: AI-structured notes, an AI quiz from those notes, and flashcards into a spaced app — keep it to 20 minutes.",
      },
    ],
  },
];