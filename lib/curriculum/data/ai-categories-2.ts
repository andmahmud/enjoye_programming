import { Terminal, Waypoints, Workflow, Wrench } from "lucide-react";

import type { CurriculumCategory } from "../types";

/** AI categories, chunk 2: Tools, For Developers, Automation, Agents. */
export const aiCategories2: CurriculumCategory[] = [
  {
    slug: "ai-tools",
    name: "AI Tools",
    tagline: "Find the right tool for the job",
    description:
      "A practical map of the AI tools that get real work done — writing, images, video, code, meetings, research and automation.",
    icon: Wrench,
    accentClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    topics: [
      {
        slug: "the-ai-tool-stack",
        title: "The AI Tool Stack",
        description:
          "A practical map of AI tools by job: writing, images, video, code, meetings, research and automation.",
        difficulty: "Beginner",
        duration: "9 min",
        tags: ["tools", "overview"],
        objectives: [
          "Map AI tools to seven everyday jobs.",
          "See which jobs have mature tools and which don't.",
          "Build a sensible first tool stack without clutter.",
        ],
        lesson: [
          {
            heading: "Map tools to jobs, not features",
            paragraphs: [
              "The fastest way through the AI tool noise is to start from the job, not the tool: writing, images, video, code, meetings, research and automation.",
              "For each job, one or two good tools are enough. Stacking novelty adds cost, learning time and confusion.",
            ],
            bullets: [
              "Writing: AI chatbots and document assistants handle drafting and editing.",
              "Images: specialized generators for text-to-image work.",
              "Code: assistants embedded in your editor save the most time.",
              "Video/audio: newer tools for scripts, voiceovers and clips.",
            ],
            tip: "Give every tool a job title in your head (e.g., 'my editor', 'my thumbnail designer'). If a tool has no job, drop it.",
          },
          {
            heading: "The productivity tier",
            paragraphs: [
              "Meeting tools summarize calls and extract actions. Research tools find, summarize and compare sources. Automation platforms connect tools so work runs itself.",
              "These 'multiplier' tools deliver outsized time savings with a small learning curve.",
            ],
            bullets: [
              "Meetings: transcripts, summaries, action items.",
              "Research: digest long reports and compare options.",
              "Automation: connect apps into flows that trigger on events.",
            ],
          },
          {
            heading: "Build a minimal first stack",
            paragraphs: [
              "A beginner-friendly stack is three tools: one chat assistant (writing + brainstorming), one editor assistant (code), and one image generator (visuals). Add meeting/research/automation only when a real recurring task demands it.",
              "Mastering three tools beats sampling twenty—skill compounds with depth.",
            ],
            bullets: [
              "Start with chat + code + images.",
              "Adopt new tools to fix a painful recurring task.",
              "Re-evaluate quarterly as tools change quickly.",
            ],
          },
          {
            heading: "Cost, privacy and lock-in",
            paragraphs: [
              "Compare free tiers, limits and whether your data trains the model. Different teams have very different privacy requirements.",
              "Favor tools that let you export your data; avoid workflows that weld you into one vendor.",
            ],
            bullets: [
              "Check data/retention settings before pasting anything sensitive.",
              "Understand usage limits so you're never surprised mid-task.",
              "Keep exports working: you should be able to leave any tool.",
            ],
          },
        ],
        takeaways: [
          "Pick tools by the job they do — one or two per job is plenty.",
          "Form a three-tool core: chat, code, images — then grow from need.",
          "Check privacy, limits and export options before committing.",
        ],
        practice:
          "List the 3–4 recurring tasks you spend the most time on, then name the single AI tool you'd trust to handle each one — and install just those.",
      },
      {
        slug: "choosing-the-right-tool",
        title: "Choosing the Right AI Tool",
        description:
          "Compare free vs paid AI tools, limits, privacy and accuracy so you pick what fits your workflow.",
        difficulty: "Intermediate",
        duration: "11 min",
        tags: ["comparison", "workflow"],
        objectives: [
          "Compare AI tools on the criteria that actually matter for your work.",
          "Decide whether a paid plan is worth it for your use case.",
          "Run a clean, fair comparison before committing.",
        ],
        lesson: [
          {
            heading: "What to compare, in order",
            paragraphs: [
              "Judge tools on output quality for YOUR tasks, then cost, speed, limits, privacy and ecosystem fit. A tool that's best in a blog review may be wrong for your workflow.",
              "Quality should be measured with your own data, not generic demos.",
            ],
            bullets: [
              "1) Quality on your real tasks 2) price vs free tier 3) limits",
              "4) privacy/retention 5) integrations 6) how fast it stays current",
            ],
          },
          {
            heading: "Free vs paid: when to upgrade",
            paragraphs: [
              "Free tiers are ideal for learning and light use. Upgrade when volume limits block you, when a professional feature (longer context, voice, higher-quality models) pays for itself, or when you use a tool multiple times daily.",
              "Cost is only 'saved' if a free path truly meets your needs — cheap tools that waste hours are expensive.",
            ],
            bullets: [
              "Upgrade on: usage limits, quality needs, or daily reliance.",
              "Stay free when your tasks are light and occasional.",
              "Value = time saved vs subscription cost — track it honestly.",
            ],
          },
          {
            heading: "Race the tools yourself",
            paragraphs: [
              "Run the same representative task on two or three candidates and score the outputs against your criteria. Keep it small: one task, one afternoon, one spreadsheet row per tool.",
              "A fair test reveals a lot that marketing pages and review lists hide.",
            ],
            bullets: [
              "Use your own real examples, not demo prompts.",
              "Score outputs blind if you can.",
              "Re-test after a few weeks — tools change fast.",
            ],
          },
          {
            heading: "Avoid comparison paralysis",
            paragraphs: [
              "The best tool is the one you'll actually use. Decide with a lightweight test, then commit for a month before re-evaluating.",
              "Perfectionism about tool choice is procrastination in disguise.",
            ],
            bullets: [
              "Set a decision deadline before you start comparing.",
              "Pick, use for a month, then assess.",
              "Switching later is cheap if you keep your data portable.",
            ],
            tip: "Keep all your prompting and data in a portable form (plain text, standard formats) so changing tools never strands your work.",
          },
        ],
        takeaways: [
          "Compare on your real tasks: quality, cost, limits, privacy, integrations.",
          "Upgrade for volume, quality or daily reliance — not hype.",
          "Small self-run tests plus monthly reviews beat endless research.",
        ],
        practice:
          "Write one real task you'd use an AI tool for. Test it free on two tools today, score both against a 5-point list, and commit to the winner for a month.",
      },
      {
        slug: "tools-for-freelancers",
        title: "AI Tools for Students & Freelancers",
        description:
          "Cheap or free AI tools that give students and freelancers the most leverage for study, content and delivery.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["freelance", "students"],
        objectives: [
          "Assemble a budget-friendly AI toolkit for studying and client work.",
          "Use AI to speed up research, drafts, polish and delivery.",
          "Protect your originality, data and client trust while using AI.",
        ],
        lesson: [
          {
            heading: "The student's core stack",
            paragraphs: [
              "Students get maximum leverage from a general chat assistant (explainations and practice), a document tool for research summarization, and grammar/spelling assist for writing.",
              "All of these have generous free tiers.",
            ],
            bullets: [
              "Chat assistant: explain concepts, quiz yourself, plan your week.",
              "Research: summarize papers and compare sources.",
              "Writing help: refine drafts, check citations carefully.",
            ],
          },
          {
            heading: "The freelancer's core stack",
            paragraphs: [
              "Freelancers win by delivering faster: a chat assistant for proposals and copy, an image generator for mockups and thumbnails, and an automation tool to move work between apps.",
              "The same three tools cover almost every service you might sell.",
            ],
            bullets: [
              "Proposals and emails: draft fast, edit to your voice.",
              "Visuals: concepts, screenshots, social assets.",
              "Automation: paperwork, reporting and follow-ups on autopilot.",
            ],
          },
          {
            heading: "Look professional, stay honest",
            paragraphs: [
              "Clients care about outcome and honesty. Use AI to be faster, but review everything, keep your own voice, and disclose AI involvement when it matters (many client briefs now require it).",
              "Never deliver unchecked AI output as finished work — it erodes the trust you're trying to earn.",
            ],
            bullets: [
              "AI drafts, you own the final judgment.",
              "Disclose AI use when asked or when it materially matters.",
              "Keep client data out of public/free tools.",
            ],
          },
          {
            heading: "Protect your data and originality",
            paragraphs: [
              "Keep client files, personal details and proprietary material out of tools with unclear retention policies. For sensitive work, use tools with enterprise privacy controls.",
              "Your unique thinking remains the product — AI multiplies it, it does not replace it.",
            ],
            bullets: [
              "Redact names and secrets before pasting into tools.",
              "Prefer tools whose policies say your data is not used for training.",
              "Store your best prompts and reusable templates as your own IP.",
            ],
          },
        ],
        takeaways: [
          "A free three-tool stack (chat, images, automation) covers study and client work.",
          "AI makes you faster; your judgment and honesty keep you hired.",
          "Keep secrets out of tools and keep your originality central.",
        ],
        practice:
          "Write down one client project or assignment on your plate. Map which step AI could shorten first, try it with a free tool today, and time yourself to feel the real difference.",
      },
    ],
  },
  {
    slug: "ai-for-developers",
    name: "AI for Developers",
    tagline: "Put AI inside your apps",
    description:
      "Integrate AI APIs and models into real applications and use AI to write better software, faster.",
    icon: Terminal,
    accentClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    topics: [
      {
        slug: "ai-apis-explained",
        title: "AI APIs Explained for Developers",
        description:
          "How to call AI APIs from your code: endpoints, tokens, models and the request/response pattern.",
        difficulty: "Intermediate",
        duration: "14 min",
        tags: ["API", "integration"],
        objectives: [
          "Understand the request/response pattern of AI APIs.",
          "Model a JSON call and read the response structure.",
          "Reason about tokens, pricing and quality trade-offs.",
        ],
        lesson: [
          {
            heading: "An AI API is just an endpoint",
            paragraphs: [
              "An AI API exposes a hosted model through a normal HTTP endpoint: you send JSON (messages, model, settings) and receive JSON (the model's reply). No infrastructure to run, no model to train.",
              "Underneath it's the same client/server pattern you already know — with tokens instead of bytes as the unit of account.",
            ],
            bullets: [
              "POST a JSON body to the model endpoint.",
              "Get back generated content plus usage metadata.",
              "Authentication is a simple API key header.",
            ],
          },
          {
            heading: "The chat request shape",
            paragraphs: [
              "The common 'chat completions' request sends a list of messages with roles: system (instructions), user (input) and assistant (history). Together they form the full context the model sees.",
              "You also pass the model name and knobs like temperature and max tokens.",
            ],
            bullets: [
              "system: define behavior and constraints.",
              "user: the actual prompt or question.",
              "assistant: previous replies when sending history.",
              "Parameters: temperature, token limits, model choice.",
            ],
          },
          {
            heading: "Reading the response",
            paragraphs: [
              "The response contains the assistant's content, the model used, token usage and sometimes 'finish reason' — why generation ended.",
              "Handle the finish reason: 'stop' is normal, 'length' means you ran out of tokens (raise the limit or shorten prompt), 'content_filter' means moderation blocked it.",
            ],
            bullets: [
              "content: the generated message text.",
              "usage: prompt/completion tokens — your bill.",
              "finish_reason: stop, length, content_filter.",
            ],
            tip: "Add retries with backoff for transient network errors and 429 rate-limit responses — they're normal under bursty usage.",
          },
          {
            heading: "Cost, latency and model choice",
            paragraphs: [
              "Larger models answer better but cost more and run slower. Match the model to the task: friendly summaries may not need a top-tier model.",
              "Estimate costs early: tokens per request × requests per day × price per token. Optimize by trimming context and caching repeated prompts.",
            ],
            bullets: [
              "Tier models by task difficulty, not just by preference.",
              "Shorten context to cut token costs.",
              "Cache identical prompts/responses you call often.",
            ],
          },
        ],
        takeaways: [
          "AI APIs are HTTP JSON endpoints — send messages, get a reply.",
          "Structure context into system/user/assistant messages.",
          "Watch finish reasons and token usage; match model size to the task.",
        ],
        practice:
          "Read the docs of any major AI API and build a minimal 'hello world' request — even in a scratch script — that sends a system message plus a user question and prints the reply.",
      },
      {
        slug: "ai-in-flutter",
        title: "Adding AI to Flutter Apps",
        description:
          "Connect your Flutter app to AI services and build features like chat, summarization and smart search.",
        difficulty: "Intermediate",
        duration: "16 min",
        tags: ["Flutter", "chat"],
        href: "/docs/flutter/getting-started",
        objectives: [
          "Choose between calling an AI API directly or using a client SDK.",
          "Keep API keys secure and manage state cleanly.",
          "Design chat, summary and search features that feel fast.",
        ],
        lesson: [
          {
            heading: "Architecture first: where AI lives",
            paragraphs: [
              "Decide where intelligence runs: server-side (call an AI API from your backend) or client-side (call directly from the app). Server-side keeps keys secret and logic central; client-side ships faster but exposes keys.",
              "Most production apps put the AI call behind a small backend that proxies the request.",
            ],
            bullets: [
              "Server-side proxy: secure keys, rate limiting, logging.",
              "Client SDK: fastest to prototype, key exposure risk.",
              "For learning, client-side is fine; for shipping, proxy it.",
            ],
          },
          {
            heading: "Keep your keys out of the app",
            paragraphs: [
              "An API key in app source code is retrievable by anyone who installs your app. Store secrets server-side or use environment-constrained access in development.",
              "Add a rate limit and allowlist on the backend so a leaked key can't drain your account.",
            ],
            bullets: [
              "Never hardcode keys in Flutter source.",
              "Proxy calls through your backend or a serverless function.",
              "Monitor usage for anomalies.",
            ],
          },
          {
            heading: "Designing the chat experience",
            paragraphs: [
              "A good AI feature streams replies, shows a typing state, and handles errors gracefully. Keep the whole conversation in state so the UI stays in sync.",
              "Show progress early (streaming) so users aren't staring at a blank screen.",
            ],
            bullets: [
              "Stream tokens as they arrive for a responsive feel.",
              "Model message states: sending, streaming, done, error.",
              "Provide retry and 'clear chat' affordances.",
            ],
          },
          {
            heading: "Summarization and smart search",
            paragraphs: [
              "Summarization: send the text (chunked if long) with an instruction and render the result, or stream it. Smart search: embed content and query into vectors, then rank by similarity.",
              "Vector search is powerful but needs an embedding model and a vector store — start simpler with keyword + LLM re-ranking.",
            ],
            bullets: [
              "Chunk long documents for summary quality.",
              "Embeddings power semantic search and RAG.",
              "Prototype with simple search, upgrade to vectors when needed.",
            ],
          },
        ],
        takeaways: [
          "Proxy AI calls through your backend to keep keys private.",
          "Stream responses and model message states for a great chat UX.",
          "Chunk text for summarization; add embeddings only when search demands it.",
        ],
        practice:
          "In a scratch Flutter app, add a button that sends a fixed prompt to an AI API (use your own test key) and displays the streamed reply, then mark your follow-up work: add retry and error states.",
      },
      {
        slug: "ai-in-development",
        title: "Embracing AI in Your Workflow",
        description:
          "Use AI tools at every stage of building — planning, coding, review, docs and testing — without losing control.",
        difficulty: "Intermediate",
        duration: "12 min",
        tags: ["productivity", "workflow"],
        objectives: [
          "Use AI at each build stage: plan, code, review, docs, test.",
          "Keep your engineering standards while moving faster.",
          "Spot the stages where AI helps most vs where it hurts.",
        ],
        lesson: [
          {
            heading: "Planning and discovery",
            paragraphs: [
              "Use AI to scope work: 'Break this feature into tasks, estimate effort, list risks and open questions.' It's a strong thinking partner for structure and edge cases.",
              "Keep the final plan yours — validate feasibility and ordering yourself.",
            ],
            bullets: [
              "Turn a vague idea into a concrete task list.",
              "Surface risks and missing requirements early.",
              "Generate acceptance criteria for each task.",
            ],
          },
          {
            heading: "Coding and editing",
            paragraphs: [
              "Inline assistants complete code, generate tests, and rename/refactor safely. Keep asks small and contextual — the assistant shines on focused, well-scoped edits.",
              "Prefer accepting suggestions you understand; auto-merge everything and you lose your codebase's soul.",
            ],
            bullets: [
              "Autocomplete and small transforms: high trust.",
              "Tests from existing code: big time-saver.",
              "Large rewrites: review thoroughly or split up.",
            ],
          },
          {
            heading: "Review and debugging",
            paragraphs: [
              "AI review catches many issues before a human reviewer does — style, missing error handling, tests, security smells. Use it as a first-pass reviewer, not the final authority.",
              "For bugs, paste symptoms + code and ask for hypotheses; verify each one by hand.",
            ],
            bullets: [
              "First-pass code review: fast and thorough.",
              "Explain the error: paste actual messages.",
              "Human review stays non-negotiable for merges.",
            ],
          },
          {
            heading: "Docs, tests and the guardrails",
            paragraphs: [
              "AI writes documentation from code and generates test cases from behavior — excellent leverage for the parts developers love least.",
              "The guardrail throughout: define 'done' with standards you enforce. AI speeds the work; your standards keep the quality.",
            ],
            bullets: [
              "Docs: generate and keep in sync with code.",
              "Tests: generate happy-path plus edge cases.",
              "Guardrail: code review, CI checks and real testing still run.",
            ],
            tip: "Give AI your project's style and conventions (paste a sample file) — output instantly conforms.",
          },
        ],
        takeaways: [
          "AI helps at every stage, but planning judgment and reviews stay yours.",
          "Small, contextual asks produce trustworthy output.",
          "Your standards gate every AI-assisted change.",
        ],
        practice:
          "For your next feature, use AI for the task breakdown and acceptance criteria, then for a first-pass review of the finished diff — and compare what it changed about how you worked.",
      },
    ],
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    tagline: "Automate the repetitive work",
    description:
      "Put AI on your repetitive tasks — drafting, sorting, researching, scheduling and responding — without code.",
    icon: Workflow,
    accentClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    topics: [
      {
        slug: "what-is-automation",
        title: "What Is AI Automation?",
        description:
          "See how AI handles repetitive tasks: sorting, drafting, researching, scheduling and responding for you.",
        difficulty: "Beginner",
        duration: "8 min",
        tags: ["automation", "basics"],
        objectives: [
          "Define AI automation and the jobs it does well.",
          "Pick 2–3 of your repetitive tasks that are automation-ready.",
          "Know when a task should NOT be automated.",
        ],
        lesson: [
          {
            heading: "Automation = trigger + AI + output",
            paragraphs: [
              "AI automation takes a repetitive task with a clear trigger and input, runs an AI action over that input, and produces an output you'd otherwise do by hand.",
              "It's the same person-hours saved logic as any automation — the AI just adds judgment to the steps.",
            ],
            bullets: [
              "Trigger: new email, new row, scheduled time, file added.",
              "AI step: summarize, draft, classify, extract, compare.",
              "Output: reply, spreadsheet entry, label, notification.",
            ],
          },
          {
            heading: "The best first automations",
            paragraphs: [
              "Start with tasks that are high-volume, low-stakes and rule-like yet need a little judgment: sorting/marking emails, drafting replies, turning voice notes into text, summarizing daily reports.",
              "These save minutes each and build your confidence safely.",
            ],
            bullets: [
              "Sort and tag incoming messages.",
              "Draft responses or meeting summaries.",
              "Convert notes into structured records.",
            ],
          },
          {
            heading: "Where NOT to automate",
            paragraphs: [
              "Avoid automating anything with big consequences, strong personal touch, or unclear rules — contracts, apologies, high-stakes customer issues and creative that must be exactly 'you'.",
              "Also avoid automating tasks that occur once a year; setup time rarely pays back.",
            ],
            bullets: [
              "Skip high-stakes or irreversible actions.",
              "Keep human touch where relationships and tone matter.",
              "Frequency × time saved must beat setup cost.",
            ],
          },
          {
            heading: "Automation is a practice",
            paragraphs: [
              "The skill is spotting tasks, mapping them to trigger + AI + output, and reviewing the results weekly. Start with two automations, refine their prompts, then expand.",
              "Treat early runs as humans-in-the-loop; audit outputs until you trust them.",
            ],
            bullets: [
              "Run weekly reviews of what got automated.",
              "Lift quality by refining the AI instructions.",
              "Expand only after reliability is proven.",
            ],
          },
        ],
        takeaways: [
          "AI automation = trigger + AI step + output on your repetitive tasks.",
          "Begin with high-volume, low-stakes tasks that need judgment.",
          "Keep humans in the loop for anything risky or personal.",
        ],
        practice:
          "Write down five things you repeat this week. For each, note the trigger, the AI step and the output — then build the top one with any no-code tool.",
      },
      {
        slug: "first-workflow",
        title: "Build Your First Workflow",
        description:
          "Connect AI steps into a simple workflow — input, processing, output — using no-code tooling.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["workflow", "no-code"],
        objectives: [
          "Diagram a real task as input → AI steps → output.",
          "Wire a starter workflow in a no-code automation tool.",
          "Test edge cases and add a human approval step.",
        ],
        lesson: [
          {
            heading: "Design the pipeline on paper first",
            paragraphs: [
              "Draw your task as boxes before touching a tool: where does input come from, what AI steps process it, and where does the result go? A clear diagram makes a boring 30-minute build.",
              "State each AI step as one job with a clear instruction.",
            ],
            bullets: [
              "Input box: email, form, file, spreadsheet row.",
              "AI boxes: summarize, classify, draft, extract.",
              "Output box: reply, notify, add row, save document.",
            ],
          },
          {
            heading: "Pick a no-code automation tool",
            paragraphs: [
              "Popular platforms connect triggers, AI nodes and actions visually. Free tiers cover simple workflows and let you experiment without cost.",
              "Choose based on the apps you already use, not marketing hype — integration count matters.",
            ],
            bullets: [
              "Compare connectors to your daily apps.",
              "Confirm an AI node and free tier exist.",
              "Start with a template close to your goal.",
            ],
          },
          {
            heading: "Wire and test your first flow",
            paragraphs: [
              "Connect: trigger → AI step → action. Use a sample input and run it a few times, checking the AI behaves before letting it touch real data.",
              "Almost every early issue is in prompting: make the AI instruction concrete and include 'output X as' instructions.",
            ],
            bullets: [
              "Test with 3 realistic sample inputs.",
              "Refine the prompt between runs, not after.",
              "Add a stop/approval step where used externally.",
            ],
            tip: "For outputs you'll send to real people, add a manual approval node and review the first 10 runs before you trust it fully.",
          },
          {
            heading: "Deploy carefully and measure",
            paragraphs: [
              "Run the workflow alongside your manual process for a while, comparing quality. Only then set it live without supervision.",
              "Track simple numbers: runs, approvals needed, and time saved — they justify the next workflow.",
            ],
            bullets: [
              "Parallel-run to compare AI vs manual output.",
              "Track time saved and error rate.",
              "Document the workflow so a teammate can maintain it.",
            ],
          },
        ],
        takeaways: [
          "Draw input → AI steps → output before building anything.",
          "Use a no-code platform's free tier with your real apps.",
          "Test, parallel-run and measure before you trust it live.",
        ],
        practice:
          "Pick one weekly email or report task and build the full workflow today: diagram it, wire it in a free no-code tool, and run it three times with sample input.",
      },
      {
        slug: "automating-content-reports",
        title: "Automating Content & Reports",
        description:
          "Auto-generate weekly content drafts and recurring reports with AI and simple triggers.",
        difficulty: "Intermediate",
        duration: "13 min",
        tags: ["content", "reports"],
        objectives: [
          "Build a weekly content-draft automation from shared inputs.",
          "Generate recurring report summaries with AI.",
          "Keep quality consistent with templates and reviews.",
        ],
        lesson: [
          {
            heading: "Automate content drafts, not decisions",
            paragraphs: [
              "AI can prepare weekly content drafts from shared inputs — your notes, data, past posts — but humans should choose what ships and how it sounds.",
              "Define a template and a review gate up front; the result is editorial, not spam.",
            ],
            bullets: [
              "Inputs: wins, stats, screenshots, weekly notes.",
              "AI: drafts posts/newsletters in your voice.",
              "Human: picks, edits and approves before publishing.",
            ],
          },
          {
            heading: "The recurring report pattern",
            paragraphs: [
              "A recurring report is perfect automation: same structure, changing data. Have the flow collect data, ask AI to summarize what changed and why it matters, then produce the PDF/email/Slide deck.",
              "Keep a strong template so formats stay consistent run after run.",
            ],
            bullets: [
              "Collect: pull numbers and updates from your sources.",
              "Summarize: AI writes the narrative from the data.",
              "Deliver: AI generates the document/email and sends it.",
            ],
          },
          {
            heading: "Make output template-consistent",
            paragraphs: [
              "Feed the AI an example of the exact format you want (previous report, a sample post) and instruct it to follow the same shape. Templates beat adjectives.",
              "Add fixed sections so nothing important is dropped between runs.",
            ],
            bullets: [
              "Give a worked example as your format spec.",
              "List required sections in the prompt.",
              "Flag missing data as a warning, don't guess around it.",
            ],
          },
          {
            heading: "Reviews keep quality human",
            paragraphs: [
              "Even a smooth automation needs a check: set a weekly review pass so errors, tone drift or data changes get caught early, and refine the prompt as you learn.",
              "The end state is not 'no work' — it's 'the good work, done with AI's speed'.",
            ],
            bullets: [
              "Review the first outputs of every new automation.",
              "Track prompt/format adjustments over time.",
              "Escalate anything that depends on judgment.",
            ],
            tip: "When the automation touches numbers or finances, add a manual validation step — AI summaries of figures deserve a second read.",
          },
        ],
        takeaways: [
          "Automate content drafting and report mechanics; humans decide and approve.",
          "Templates and worked examples keep output consistently formatted.",
          "Schedule reviews so quality and tone never drift.",
        ],
        practice:
          "Build one recurring automation: a weekly 'what happened' summary from a folder or sheet you already fill, auto-drafted into a short report you then edit and send.",
      },
    ],
  },
  {
    slug: "ai-agents",
    name: "AI Agents",
    tagline: "Agents that plan and act",
    description:
      "Go beyond chatbots. Learn how agents plan, use tools and complete tasks on your behalf.",
    icon: Waypoints,
    accentClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    topics: [
      {
        slug: "what-are-agents",
        title: "What Are AI Agents?",
        description:
          "Agents don't just answer — they plan, use tools, make decisions and complete tasks. Understand the difference.",
        difficulty: "Intermediate",
        duration: "9 min",
        tags: ["agents", "concepts"],
        objectives: [
          "Contrast a chatbot with an agent that acts.",
          "Name the parts of an agent: model, tools, memory, loop.",
          "Pick tasks appropriate for agents and avoid overreach.",
        ],
        lesson: [
          {
            heading: "From chatbot to agent",
            paragraphs: [
              "A chatbot answers. An agent pursues a goal: it plans steps, calls tools, checks results and adjusts until the job is done or it gives up.",
              "The difference is the loop — decide, act, observe, decide again — instead of a single answer.",
            ],
            bullets: [
              "Chatbot: responds to one query.",
              "Agent: works toward a goal with tools and iteration.",
              "Same underlying models; different orchestration.",
            ],
          },
          {
            heading: "The four parts of an agent",
            paragraphs: [
              "Every agent has a model that decides, tools it can call (search, code, APIs, files), memory of what it's doing, and a loop that keeps it moving toward the goal.",
              "Tool access is what turns 'generation' into 'action'.",
            ],
            bullets: [
              "Model: plans and makes decisions.",
              "Tools: search, compute, files and third-party APIs.",
              "Memory: conversation and task state.",
              "Loop: act → observe → plan again.",
            ],
          },
          {
            heading: "What agents are good at",
            paragraphs: [
              "Well-scoped, step-heavy, measurable jobs suit agents: researching and summarizing, triaging inboxes, cleaning and preparing data, drafting follow-ups, and collecting information from several sources.",
              "Clear goal + clear stopping point = a happy agent.",
            ],
            bullets: [
              "Research + synthesis: visits sources, writes a brief.",
              "Data work: cleans, transforms, checks.",
              "Operations: sorts, drafts, schedules.",
            ],
          },
          {
            heading: "Where agents still stumble",
            paragraphs: [
              "Agents drift on fuzzy goals, plunge into rabbit holes, and can spend money or push actions you didn't intend. Untethered autonomy is a risk, not a feature.",
              "Constrain scope, budget, tools and permissions — and give them a clear 'when to stop and ask' rule.",
            ],
            bullets: [
              "Fuzzy goals → wandering behavior.",
              "Wide tool access → unplanned actions.",
              "No stop rules → runaway loops or costs.",
              "Design them to ask for help at boundaries.",
            ],
          },
        ],
        takeaways: [
          "Agents loop decide→act→observe to reach a goal with tools.",
          "Pick measurable, step-based tasks; avoid open-ended ones.",
          "Constrain tools, budgets and add 'stop and ask' rules.",
        ],
        practice:
          "Take one task you'd automate and write the agent brief: the goal, the 3–5 steps, the allowed tools, and the exact point where it should stop and report back.",
      },
      {
        slug: "agent-tools",
        title: "Tools That Make Agents Powerful",
        description:
          "Web search, calculators, memory and custom actions — the tools agents use to get real work done.",
        difficulty: "Advanced",
        duration: "13 min",
        tags: ["tools", "search"],
        objectives: [
          "List the tool categories that multiply agent usefulness.",
          "Understand how the model chooses which tool to call.",
          "Pick tools that match your agent's goal and budget.",
        ],
        lesson: [
          {
            heading: "Why tools change everything",
            paragraphs: [
              "A model frozen at its training date becomes useful in real time when it can search the web, run code, read files or call APIs. Tools let agents ground answers and take actions.",
              "Tool calling is standardized: the model emits a structured request, your code runs it, and the result feeds back into the loop.",
            ],
            bullets: [
              "Search: current facts and sources.",
              "Code interpreter: exact math and data work.",
              "File/API access: reads, writes and third-party actions.",
              "Memory tools: remembers preferences and progress.",
            ],
          },
          {
            heading: "How the agent picks a tool",
            paragraphs: [
              "Every call, the model sees the goal plus descriptions of available tools and chooses the best-fit function. It can chain tools — search, then summarize, then email — to complete multi-step jobs.",
              "Good tool descriptions matter: the model reads them to decide. Write them clearly.",
            ],
            bullets: [
              "Tools are exposed as functions with descriptions.",
              "The model calls what matches the current step.",
              "Tool results go back into context for the next decision.",
            ],
          },
          {
            heading: "Ground with search, don't guess",
            paragraphs: [
              "Search tools keep answers current and sourced. For anything that changes — prices, docs, news — a search step beats relying on training memory.",
              "Ask the agent to cite which source each fact came from so you can verify.",
            ],
            bullets: [
              "Search for current, time-sensitive information.",
              "Request citations and links in the output.",
              "Set result counts and allowed domains to control cost/quality.",
            ],
          },
          {
            heading: "Capabilities and guardrails",
            paragraphs: [
              "Give agents only the tools their job needs and least privilege: an agent that emails should not also read all your files unless required.",
              "Budget limits, timeouts and approvals for destructive actions keep ambitious agents safe.",
            ],
            bullets: [
              "Least privilege: only the tools the goal needs.",
              "Read-only by default; approve writes and sends.",
              "Set spending caps and time limits.",
              "Log tool calls to audit what the agent did.",
            ],
          },
        ],
        takeaways: [
          "Tools (search, code, files, APIs, memory) make agents act, not just talk.",
          "Clear tool descriptions guide which tool the model picks.",
          "Least privilege, budgets and approval gates keep agents safe.",
        ],
        practice:
          "Design the tool list for one agent you'd build this week: name at least three tools, describe each the way the agent will see them, and mark which need approval before acting.",
      },
      {
        slug: "simple-agent-playbook",
        title: "Simple Agent Playbook",
        description:
          "Practical steps to define, scope and test a small agent that handles one useful job end to end.",
        difficulty: "Advanced",
        duration: "15 min",
        tags: ["playbook", "practical"],
        objectives: [
          "Scope one tiny, useful agent that can actually finish.",
          "Define its goal, steps, tools and stop conditions.",
          "Test it against realistic inputs before releasing it.",
        ],
        lesson: [
          {
            heading: "Choose a boring, measurable job",
            paragraphs: [
              "The best first agent handles one defined job with a clear finish line: 'summarize these five URLs into three paragraphs with sources' or 'turn this transcript into a titled outline'.",
              "If you can score the output on a 1–10, it's a candidate. If it's 'be my general assistant', it's not ready.",
            ],
            bullets: [
              "One job, one output format, one success metric.",
              "Steps are known and few (3–6).",
              "You can judge the result in under a minute.",
            ],
          },
          {
            heading: "Write the brief",
            paragraphs: [
              "Specify the goal, inputs, tools allowed and the stopping rules. Name the exact output shape and the 'ask for help' conditions (missing input, ambiguous instruction, risky action).",
              "The brief is what you paste into the agent's system prompt — spend time here.",
            ],
            bullets: [
              "Goal: one sentence, measurable.",
              "Steps: from input to finished output.",
              "Boundaries: what it must NOT do.",
              "Stop: when to stop and report instead of guessing.",
            ],
          },
          {
            heading: "Build the smallest version",
            paragraphs: [
              "Wire just enough to run the brief: one program/loop, 2–3 tools, no extra features. A thin, working version you can observe beats a clever, opaque one.",
              "Add logging so you can see what the agent decided at each step.",
            ],
            bullets: [
              "Smallest loop that completes the job.",
              "Log each decision and tool call.",
              "Hard-coded inputs first; connect real data sources later.",
            ],
          },
          {
            heading: "Test, then trust incrementally",
            paragraphs: [
              "Run 5–10 realistic inputs through the agent and score each output. Fix repeat failures in the brief or tool usage, and keep a list of cases it fails so boundaries are explicit.",
              "Release to real use only after the failure rate is acceptable — and keep humans on the critical path.",
            ],
            bullets: [
              "Score outputs against your success metric.",
              "Iterate the brief, not the model.",
              "Track edge cases as a known-limits list.",
              "Run supervised in production first.",
            ],
            tip: "Save every failed run: failures are the best fuel for a sharper brief.",
          },
        ],
        takeaways: [
          "Scope one measurable job with a clear finish line.",
          "Write a tight brief: goal, steps, boundaries, stop rules.",
          "Build thin, test wide, then trust incrementally.",
        ],
        practice:
          "Document your first agent today: the job, the brief, the 2–3 tools, the stop rules and your success metric — then build the smallest loop that runs it.",
      },
    ],
  },
];