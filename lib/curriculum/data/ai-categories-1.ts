import { Atom, Bot, SquarePen, Sparkles } from "lucide-react";

import type { CurriculumCategory } from "../types";

/** AI categories, chunk 1: Fundamentals, ChatGPT, Prompt Engineering, Generative AI. */
export const aiCategories1: CurriculumCategory[] = [
  {
    slug: "ai-fundamentals",
    name: "AI Fundamentals",
    tagline: "Understand what AI really is",
    description:
      "Start here — the core ideas behind modern AI, machine learning and the terms you will hear everywhere.",
    icon: Atom,
    accentClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    topics: [
      {
        slug: "getting-started",
        title: "What Is AI? A Beginner's Guide",
        description:
          "Understand what artificial intelligence is, how it works, and the difference between AI, machine learning and deep learning — in plain language.",
        difficulty: "Beginner",
        duration: "8 min",
        tags: ["AI", "basics", "machine learning"],
        objectives: [
          "Define AI in plain language and separate the hype from the reality.",
          "Explain the differences between AI, machine learning and deep learning.",
          "Recognize the everyday tools around you that rely on AI.",
        ],
        lesson: [
          {
            heading: "What we actually mean by AI",
            paragraphs: [
              "Artificial intelligence is software that can do things that normally require human intelligence — understanding language, recognizing images, making decisions or holding a conversation. It is a field of computer science, not a single product.",
              "The AI you meet today is 'narrow AI': extremely good at one kind of task, like translating text or recommending videos. It does not think or feel like a human.",
            ],
            bullets: [
              "AI solves one defined problem at a time (language, vision, prediction).",
              "It learns patterns from data instead of following hand-written rules for every case.",
              "Modern AI is everywhere: search, maps, keyboards, cameras and shopping apps.",
            ],
            tip: "When someone says 'AI' at work, ask: what specific task is the software doing? Naming the task makes the technology far less mysterious.",
          },
          {
            heading: "Machine learning: how AI learns",
            paragraphs: [
              "Most modern AI is built with machine learning. Instead of a programmer writing rules for every situation, the program learns rules by studying thousands of examples.",
              "You show the program input and the correct output many times, and it adjusts itself until it can handle examples it has never seen.",
            ],
            bullets: [
              "Training = showing the model examples so it learns patterns.",
              "Inference = using the trained model on new, unseen input.",
              "More quality data usually beats more clever rules.",
            ],
          },
          {
            heading: "Deep learning and the core terms",
            paragraphs: [
              "Deep learning is machine learning with very large neural networks — loosely inspired by how brain cells connect. It powers most impressive AI today, from chatbots to image generators.",
              "You will also hear 'model' (the trained program), 'LLM' (a model trained for language) and 'parameters' (the dials the model tuned while training).",
            ],
            bullets: [
              "Neural network: layers of connected 'neurons' that transform input into output.",
              "LLM: a large language model that predicts the next word to generate text.",
              "Token: the small unit of text an LLM reads and writes.",
            ],
          },
          {
            heading: "What AI can and can't do",
            paragraphs: [
              "Modern AI is remarkable at generating fluent text, images and audio, and at summarizing huge amounts of information quickly. It is a fast, tireless assistant.",
              "It is also unreliable: models can invent facts confidently ('hallucinations'), they have no real-world experience, and they stop at a fixed training date.",
            ],
            bullets: [
              "Great for: drafting, summarizing, explaining, brainstorming, code suggestions.",
              "Weak at: facts it was never trained on, math precision, judgment and accountability.",
              "Always check important AI output before you trust it.",
            ],
            tip: "Treat AI as a brilliant intern: fast, eager, but occasionally wrong. Verify anything that matters.",
          },
        ],
        takeaways: [
          "AI is software that does tasks needing human-like intelligence — always one defined task at a time.",
          "Machine learning learns patterns from data; deep learning uses large neural networks.",
          "AI is a fast assistant and an unreliable oracle — verify important output.",
        ],
        practice:
          "List three apps you used today and name the single AI task each one performs — translation, recommendation, prediction or generation.",
      },
      {
        slug: "how-machine-learning-works",
        title: "How Machine Learning Works",
        description:
          "Learn the core idea of machine learning: training models from data, and how predictions improve with better data and feedback.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["machine learning", "models"],
        objectives: [
          "Explain the train-and-inference cycle in your own words.",
          "Know why data quality matters more than model size.",
          "Spot the three main learning styles: supervised, unsupervised and reinforcement.",
        ],
        lesson: [
          {
            heading: "The big idea: learning from examples",
            paragraphs: [
              "Machine learning flips traditional programming. Instead of rules → answers, you give the computer answers (examples) and it extracts the rules itself.",
              "The result is a 'model': a mathematical function that takes input and returns a prediction.",
            ],
            bullets: [
              "Traditional code: input + written rules = answer.",
              "Machine learning: input + many example answers = learned rules (model).",
              "The model generalizes: it should also work on examples it never saw.",
            ],
          },
          {
            heading: "Training: the model tunes itself",
            paragraphs: [
              "During training, the model makes a guess, compares it with the correct answer, and nudges its internal values to reduce the error. This repeats over the whole dataset many times.",
              "A trackable number called 'loss' measures how wrong the model is; training pushes it down.",
            ],
            bullets: [
              "Each pass over the data is called an epoch.",
              "The model learns by making and correcting mistakes.",
              "Lower loss on training data, then on unseen data, signals real learning.",
            ],
            tip: "If a model learns your training data perfectly but fails on new data, it 'memorized' instead of learned — that's called overfitting.",
          },
          {
            heading: "Three ways models learn",
            paragraphs: [
              "Supervised learning uses labeled examples (email + 'spam'/'not spam'). Unsupervised learning finds structure in unlabeled data (grouping similar customers). Reinforcement learning improves through rewards and penalties (game-playing bots, robotics).",
              "Today's chatbots combine all three at different stages of their lifecycle.",
            ],
            bullets: [
              "Supervised: prediction from labeled examples — most common.",
              "Unsupervised: discovers patterns and clusters on its own.",
              "Reinforcement: learns actions that maximize a reward signal.",
            ],
          },
          {
            heading: "Data quality is everything",
            paragraphs: [
              "Models copy the data they are trained on. Biased, noisy or misleading data produces biased, noisy or misleading AI — no matter how large the model.",
              "Cleaning, labeling and balancing data are the highest-leverage skills in any machine learning project.",
            ],
            bullets: [
              "Garbage in, garbage out: the model can only learn what the data shows.",
              "Diverse data helps the model handle more real-world situations.",
              "Most real projects spend most of their time preparing data, not training models.",
            ],
          },
        ],
        takeaways: [
          "Machine learning lets software learn rules from examples instead of hand-written logic.",
          "Training repeats guess → compare → adjust until predictions improve.",
          "Data quality and diversity matter far more than model size.",
        ],
        practice:
          "Think of a decision you make daily (e.g., which email to open first) and list the 'training examples' a machine would need to learn it, plus what could corrupt that data.",
      },
      {
        slug: "key-ai-terms",
        title: "Key AI Terms Explained",
        description:
          "LLMs, neural networks, tokens, parameters, models and inference — a practical glossary for working with AI every day.",
        difficulty: "Beginner",
        duration: "10 min",
        tags: ["LLM", "glossary"],
        objectives: [
          "Speak AI confidently with the 10 core terms explained in plain language.",
          "Understand tokens and why they affect cost and limits.",
          "Distinguish a base model from an assistant product like ChatGPT.",
        ],
        lesson: [
          {
            heading: "Model, base model and assistant",
            paragraphs: [
              "A model is the trained program that turns input into output. A base model has general language skills but is not yet a helpful assistant.",
              "Products like ChatGPT are base models plus extra layers: safety tuning, memory, tools and a friendly interface.",
            ],
            bullets: [
              "Model: the core trained program.",
              "Base model: general skills, no conversation polish.",
              "Assistant/product: model + tuning + tools + UI.",
            ],
          },
          {
            heading: "LLM, neural network and parameters",
            paragraphs: [
              "An LLM (large language model) is a deep neural network specialized for text. It predicts the next word over and over to generate a response.",
              "Parameters are the internal numbers tuned during training. Larger models generally handle more complex requests — but are not automatically smarter.",
            ],
            bullets: [
              "LLM: language specialist — chat, writing, code, analysis.",
              "Neural network: the layered architecture that transforms input.",
              "Parameters: the tuned dials; 'lighter' models trade power for speed and cost.",
            ],
          },
          {
            heading: "Token, context, inference and hallucination",
            paragraphs: [
              "A token is the unit of text a model reads — roughly three-quarters of an English word. Cost and limits are usually measured in tokens.",
              "Inference is the act of running the model to get an answer. Context is the amount of conversation the model can 'see' at once. A hallucination is a confident answer that simply isn't true.",
            ],
            bullets: [
              "Token: ~¾ of a word; the model's counting unit.",
              "Context window: how much text the model remembers in one go.",
              "Hallucination: made-up facts the model presents as real.",
            ],
            tip: "Watch your context budget in long chats — older messages can be dropped. Keep important instructions near the end of a prompt.",
          },
          {
            heading: "Prompt, temperature and fine-tuning",
            paragraphs: [
              "A prompt is your instruction to the model. Temperature controls randomness: low = predictable, high = creative.",
              "Fine-tuning is extra training on a specific dataset to specialize the model for one kind of task or tone.",
            ],
            bullets: [
              "Prompt: what you ask — the biggest lever on output quality.",
              "Temperature: creativity dial (0 = rote, 1+ = wild).",
              "Fine-tuning: targeted training so the model matches a job or style.",
            ],
          },
        ],
        takeaways: [
          "Tokens measure text and cost; context limits how much a model remembers.",
          "A model is the brain; the assistant product wraps it in polish, tools and safety.",
          "Hallucinations and temperature explain most 'weird' AI behavior.",
        ],
        practice:
          "Open any AI chat tool and count roughly how many tokens your next 50-word prompt might use (multiply words by ~1.3) — then watch the token counter if the tool shows one.",
      },
    ],
  },
  {
    slug: "chatgpt",
    name: "ChatGPT",
    tagline: "Practical ChatGPT skills for real work",
    description:
      "Go beyond the chat window — learn to use ChatGPT for study, writing, research and everyday problem-solving.",
    icon: Bot,
    accentClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    topics: [
      {
        slug: "getting-started",
        title: "ChatGPT Tour: Getting Started",
        description:
          "Set up an account, learn the interface, and start using ChatGPT for questions, writing, learning and problem-solving.",
        difficulty: "Beginner",
        duration: "7 min",
        tags: ["ChatGPT", "getting started"],
        objectives: [
          "Create an account and navigate the main ChatGPT interface.",
          "Start a conversation and manage chats, history and settings.",
          "Know how conversations are stored and how to keep sensitive data safe.",
        ],
        lesson: [
          {
            heading: "Create your account and log in",
            paragraphs: [
              "Go to the ChatGPT website in a browser or install the official mobile app, then create a free account with an email or a Google/Apple account. No credit card is needed for the free plan.",
              "A phone or email verification step keeps accounts secure and lets you recover access later.",
            ],
            bullets: [
              "Browser, Windows, macOS, Android and iOS are all supported.",
              "Start free; paid plans add newer models, more usage and file features.",
              "Use a strong password or your existing single sign-on.",
            ],
          },
          {
            heading: "The interface in one minute",
            paragraphs: [
              "The home screen has a message box at the bottom, a sidebar with your conversation history, and a few controls for new chats and settings.",
              "Type a question or instruction and press Enter to start a chat. Each conversation keeps its own context, so the model remembers what you discussed inside it.",
            ],
            bullets: [
              "Message box: enter your prompt here.",
              "Sidebar: browse, rename, delete or pin past chats.",
              "New chat: fresh conversation with no memory of previous ones.",
            ],
            tip: "Give each chat a focused purpose (one project per conversation). You get sharper answers and cleaner history.",
          },
          {
            heading: "Your first useful prompt",
            paragraphs: [
              "The fastest way to get value is a clear request: tell ChatGPT your role, task, context and the format you want back.",
              "Example: 'Act as a tutor. Explain how loans work to a teenager, then give me 3 practice questions with answers.' A structured instruction returns structured answers.",
            ],
            bullets: [
              "Say what you want (goal) and how (format).",
              "Give it a role or persona when you want a specific tone.",
              "Ask follow-ups — refine instead of restarting.",
            ],
          },
          {
            heading: "Privacy and account safety",
            paragraphs: [
              "Chats are stored and can be used to improve products unless you turn on data controls. Never paste passwords, bank details or private customer information.",
              "Use 'memory' settings deliberately, and use the delete/pin tools to curate your history.",
            ],
            bullets: [
              "Check Data Controls in settings before sharing anything private.",
              "Treat prompts as you would an email to a stranger.",
              "Log out on shared or public devices.",
            ],
          },
        ],
        takeaways: [
          "ChatGPT is free to start and runs in your browser or on your phone.",
          "One focused purpose per chat gives sharper, more reliable answers.",
          "Your prompts are stored — keep secrets out of the chat box.",
        ],
        practice:
          "Ask ChatGPT to role-play three different helpers (tutor, editor, brainstorm partner) on the same task and compare how the answers change.",
      },
      {
        slug: "chatgpt-for-study",
        title: "ChatGPT for Study & Learning",
        description:
          "Use ChatGPT to explain concepts, generate practice questions and turn complex topics into simple notes.",
        difficulty: "Beginner",
        duration: "11 min",
        tags: ["study", "learning"],
        objectives: [
          "Turn a confusing topic into a simple explanation you understand.",
          "Generate practice questions and check your own answers.",
          "Build revision notes or flashcards from any material.",
        ],
        lesson: [
          {
            heading: "Explain it like you're new",
            paragraphs: [
              "The best study trick is asking for simplicity: 'Explain [topic] as if I'm 12 years old, then as if I just started university.' Comparing the two reveals what actually matters.",
              "Follow up with 'give me a concrete example' — examples anchor abstract ideas in memory far better than definitions.",
            ],
            bullets: [
              "Request plain-language explanations with an example.",
              "Ask for an analogy, then ask where that analogy breaks down.",
              "Test your understanding by explaining the idea back to the model.",
            ],
            tip: "Use the phrase 'check my understanding': paste your own summary and ask the model to spot gaps or mistakes.",
          },
          {
            heading: "Generate practice questions",
            paragraphs: [
              "Give ChatGPT your study notes or a chapter outline and ask for quiz questions: 'Write 10 questions from Beginner to Advanced with an answer key and short explanations.'",
              "Then answer them yourself before revealing the key, and ask for extra questions on the ones you got wrong.",
            ],
            bullets: [
              "Specify the number, level and style of questions.",
              "Ask for explanations alongside answers — not just marks.",
              "Retry failed topics with fresh, targeted questions.",
            ],
          },
          {
            heading: "Turn notes into revision tools",
            paragraphs: [
              "Paste messy notes and request a cleaner structure: 'Rewrite as headings with two-sentence summaries and a key terms list.' The model is excellent at compressing your material.",
              "For spaced repetition, ask it to output flashcards in a question/answer format you can import into a flashcard app.",
            ],
            bullets: [
              "Ask for headings, summaries and a glossary.",
              "Convert material into Q&A flashcards.",
              "Request a one-page cheat sheet the night before exams.",
            ],
          },
          {
            heading: "Stay honest: learn, don't copy",
            paragraphs: [
              "Use AI to understand and drill — then do the real work yourself. Asking for answers to copy short-circuits learning and can violate your school's rules.",
              "A strong habit: use the model to prepare, not to submit. Practice writing and solving on your own.",
            ],
            bullets: [
              "AI for explanations, examples, quizzes and summaries.",
              "You for actual problem-solving and writing.",
              "Check your institution's policy on AI use.",
            ],
          },
        ],
        takeaways: [
          "Simplify + example + explain-back is a powerful AI study loop.",
          "Generate practice questions and drill precisely the topics you miss.",
          "Let AI prepare your material, but do the final work yourself.",
        ],
        practice:
          "Pick one topic you struggled with this week. Have ChatGPT explain it two ways, generate 5 quiz questions, answer them, and ask for feedback on your answers.",
      },
      {
        slug: "chatgpt-voice-files",
        title: "ChatGPT Voice, Vision & Files",
        description:
          "Use ChatGPT's voice mode, image understanding and file uploads to work the way you like to work.",
        difficulty: "Intermediate",
        duration: "10 min",
        tags: ["voice", "vision", "files"],
        objectives: [
          "Use voice mode to ask questions and dictate hands-free.",
          "Get value from images: screenshots, photos and diagrams.",
          "Upload documents and PDFs for summarization and analysis.",
        ],
        lesson: [
          {
            heading: "Voice mode: hands-free conversations",
            paragraphs: [
              "Tap the voice icon in the app to talk to ChatGPT and hear spoken answers. It is ideal while commuting, cooking or when typing is inconvenient.",
              "Voice is a conversation, not a dictation tool — you can interrupt, steer and ask follow-ups naturally.",
            ],
            bullets: [
              "Available on mobile and the desktop apps.",
              "Great for brainstorming, learning on the go and taking verbal notes.",
              "Speak clearly; long pauses can end the turn.",
            ],
          },
          {
            heading: "Vision: think about images together",
            paragraphs: [
              "Attach a screenshot, photo or diagram and ask questions about it: 'What's wrong in this screenshot?', 'Explain this chart', 'Read this whiteboard photo'.",
              "The model reads text in images and can walk through errors, diagrams, receipts or study material.",
            ],
            bullets: [
              "Perfect for debugging screenshots and analyzing charts.",
              "Useful for digitizing handwritten notes into clean text.",
              "Point at a file, add a concrete question, and iterate.",
            ],
            tip: "For the clearest results, describe what you need out loud AND attach the image; don't make the model guess your goal.",
          },
          {
            heading: "Files: documents and data",
            paragraphs: [
              "You can upload PDFs, Word documents, spreadsheets and code files to summarize, compare, extract or explain. It's like having a second reader for long documents.",
              "Ask specific things: 'Summarize this contract in five bullets', 'Find the mistakes in this data', 'Explain the key changes between these two files'.",
            ],
            bullets: [
              "PDFs and most document types are supported.",
              "Great for long reports, terms of service, notes and code.",
              "Ask for extraction (tables → format) as well as explanation.",
            ],
          },
          {
            heading: "Combine the modes for real workflows",
            paragraphs: [
              "The power comes from combining: record a voice note, have the model type it up, attach supporting images or files, and ask for a finished deliverable.",
              "Example: photograph a whiteboard brainstorm → ask for a typed project plan → refine by voice while walking.",
            ],
            bullets: [
              "Voice → structured notes with one request.",
              "Image + file + prompt → polished document.",
              "Reserve each mode for what it does best.",
            ],
          },
        ],
        takeaways: [
          "Voice turns ChatGPT into a hands-free tutor and note-taker.",
          "Vision reads screenshots, diagrams and photos for analysis.",
          "Files turn long documents into quick summaries and extractions.",
        ],
        practice:
          "Take a screenshot of a real error or confusing screen in your life, upload it to ChatGPT and ask it to explain what's happening and how to fix it.",
      },
    ],
  },
  {
    slug: "prompt-engineering",
    name: "Prompt Engineering",
    tagline: "Write prompts that get results",
    description:
      "The skill behind every great AI answer — craft prompts with role, task, context and format for accurate output.",
    icon: SquarePen,
    accentClass: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    topics: [
      {
        slug: "basics",
        title: "Prompt Engineering Basics",
        description:
          "The simple formula for better prompts: role, task, context and format — and why small wording changes change results.",
        difficulty: "Beginner",
        duration: "9 min",
        tags: ["prompts", "basics"],
        objectives: [
          "Structure every prompt with role, task, context and format.",
          "Recognize why vague prompts produce vague answers.",
          "Improve a weak prompt into a strong one step by step.",
        ],
        lesson: [
          {
            heading: "Why wording changes results",
            paragraphs: [
              "A language model predicts text based on your instruction and its training. Clear instructions narrow the space of possible answers; vague ones leave it wide open.",
              "Two prompts for the same job often return very different quality — the fix is usually structure, not luck.",
            ],
            bullets: [
              "The model follows instructions, but it can't read your mind.",
              "Small clarifications shift whole answers.",
              "Your prompt is 80% of the output's quality.",
            ],
          },
          {
            heading: "The 4-part prompt recipe",
            paragraphs: [
              "Strong prompts answer four questions: Who is the model being? (role), What should it produce? (task), What does it need to know? (context), and How should the answer look? (format).",
              "Example: 'You are a senior editor. Rewrite this paragraph to be more concise. Here is my draft: … Return a single improved version and a bullet list of changes.'",
            ],
            bullets: [
              "Role: give it a persona or expertise.",
              "Task: one clear verb — summarize, rewrite, compare, list.",
              "Context: background, constraints, audience, tone.",
              "Format: bullets, table, JSON, headings, length.",
            ],
          },
          {
            heading: "Weak prompt → strong prompt",
            paragraphs: [
              "Weak: 'Write about video marketing.' Strong: 'You are a content strategist. Write a 300-word LinkedIn post about video marketing for small-business owners. Include one surprising stat and end with a call to action.'",
              "Adding audience, length, angle and outcome turns a generic essay into a usable deliverable.",
            ],
            bullets: [
              "Weak prompts lack a goal, audience and format.",
              "Strong prompts constrain every dimension.",
              "Iterate: once you have a good base, tweak one variable at a time.",
            ],
            tip: "When an answer misses the mark, don't restart — tell the model what to change: 'Narrower', 'More casual', 'Focus on cost'.",
          },
          {
            heading: "A feedback loop that compound-improves",
            paragraphs: [
              "Treat prompting as a conversation: request, review, refine. Save your best prompts as reusable templates so your quality stays high without re-typing.",
              "A small personal prompt library is worth more than any fancy setting.",
            ],
            bullets: [
              "Review the output against your goal before editing.",
              "Refine with follow-up instructions instead of new prompts.",
              "Copy winning prompts into a notes file for reuse.",
            ],
          },
        ],
        takeaways: [
          "Structure prompts with role, task, context and format.",
          "Vague instructions produce vague answers — constrain everything.",
          "Iterate and save your best prompts as reusable templates.",
        ],
        practice:
          "Take one weak prompt you've recently typed and rebuild it using the 4-part recipe; run both and compare the answers.",
      },
      {
        slug: "structuring-complex-prompts",
        title: "Structuring Complex Prompts",
        description:
          "Break big tasks into clear steps, give examples and ask the model to think step by step for reliable output.",
        difficulty: "Intermediate",
        duration: "13 min",
        tags: ["structure", "examples"],
        objectives: [
          "Split complex jobs into ordered steps the model can follow.",
          "Use examples (few-shot) to bat exact style and structure.",
          "Ask for step-by-step reasoning to reduce errors on tricky tasks.",
        ],
        lesson: [
          {
            heading: "Break big tasks into steps",
            paragraphs: [
              "Complex requests fail when the model must guess the process. List the steps explicitly: 'First identify the problem, then propose three fixes, then recommend the best one with reasoning.'",
              "Step-by-step instructions act as a plan the model follows, which makes output consistent and auditable.",
            ],
            bullets: [
              "Numbered steps keep the model on track.",
              "State the final deliverable after the steps.",
              "One step per sentence keeps instructions unambiguous.",
            ],
          },
          {
            heading: "Show, don't just tell: few-shot examples",
            paragraphs: [
              "Give 1–3 examples of the exact input/output style you want. Models match patterns remarkably well once they see a concrete sample.",
              "Example: 'Rewrite these sentences for a young audience. Input: … Output: … Input: … Output: … Now do the same for this one.'",
            ],
            bullets: [
              "Examples beat adjectives like 'friendly' or 'professional'.",
              "2–3 samples are usually enough.",
              "Show correct input AND correct output together.",
            ],
            tip: "Include one slightly tricky example so the model sees how to handle edge cases — not just easy ones.",
          },
          {
            heading: "Think step by step",
            paragraphs: [
              "For math, logic or anything with multiple considerations, add 'Think step by step before answering' or 'Work through the reasoning, then give the final answer.'",
              "Why it works: the model computes intermediate results in the open, and errors surface where you can spot them.",
            ],
            bullets: [
              "Chain-of-thought instructions reduce errors on reasoning tasks.",
              "Longer, structured output is easier to verify.",
              "Ask for the final answer to be separated from the working.",
            ],
          },
          {
            heading: "Put rules up front and constraints after",
            paragraphs: [
              "Models weigh the start and end of a prompt heavily. State the most important rules early, and restate key constraints again at the end.",
              "For safety-critical work, add an explicit 'do not include X' clause and ask the model to flag uncertainty.",
            ],
            bullets: [
              "Critical instructions first, format details after.",
              "Repeat must-do / must-not-do at the end.",
              "Ask the model to say when it's unsure rather than bluff.",
            ],
          },
        ],
        takeaways: [
          "Ordinal steps turn fuzzy jobs into repeatable processes.",
          "Show 1–3 input/output examples to lock exact style.",
          "Request step-by-step reasoning for anything that could go wrong silently.",
        ],
        practice:
          "Pick a multi-step task you often ask AI for (e.g., 'turn a blog idea into an outline'). Rebuild it as numbered steps with one worked example and a step-by-step reasoning request.",
      },
      {
        slug: "prompt-patterns",
        title: "Prompt Patterns for Real Work",
        description:
          "Reusable prompt patterns for writing, coding, analysis, ideation and review — copy them into any chatbot.",
        difficulty: "Intermediate",
        duration: "14 min",
        tags: ["patterns", "reusable"],
        objectives: [
          "Collect 5–6 reusable prompt patterns you can copy today.",
          "Know when to use each pattern for writing, coding and analysis.",
          "Turn patterns into a personal template library.",
        ],
        lesson: [
          {
            heading: "The critique pattern",
            paragraphs: [
              "'Review this [draft/code/plan] and find: errors, unclear parts, missing steps. Rate it 1–10 and give the 3 highest-impact fixes.' Attach your work and let the model play the role of a demanding reviewer.",
              "This pattern turns AI from a writer into an editor and works for nearly everything.",
            ],
            bullets: [
              "Give context: what the work is for and who reads it.",
              "Ask for a prioritized list, not a generic 'looks good'.",
              "Set a high bar: 'assume the reader is an expert.'",
            ],
          },
          {
            heading: "The brainstorm-and-narrow pattern",
            paragraphs: [
              "Ask for 10 options first ('give me 10 taglines'), then narrow ('pick the best 3 and refine them'). Generating broadly before narrowing produces far better ideas than asking for 'one good' anything.",
              "Volume first, judgment second.",
            ],
            bullets: [
              "Always request options in the plural.",
              "Narrow with criteria: best for our audience, easiest to run.",
              "Re-roll the narrowed shortlist for polish.",
            ],
          },
          {
            heading: "The explain-and-verify pattern",
            paragraphs: [
              "For learning: 'Explain X as if I'm a beginner, give a concrete example, then ask me 3 questions to check my understanding.' Answers reveal your gaps better than reading.",
              "For code: 'Explain what this function does line by line, then tell me what could break.'",
            ],
            bullets: [
              "Teach-back questions cement what you learned.",
              "Line-by-line walkthroughs surface hidden assumptions.",
              "Pair any explanation with a 'what could go wrong' pass.",
            ],
          },
          {
            heading: "The transform pattern and your library",
            paragraphs: [
              "The transform pattern converts content from one form to another: notes → email, outline → script, bullet points → slides, rough → polished. State the source, target and audience.",
              "Store your best patterns in a notes file or prompt folder. Over time this library becomes your personal competitive edge.",
            ],
            bullets: [
              "Specify source, target format and audience in every transform.",
              "Keep a library of prompts that worked.",
              "Reuse, don't reinvent — quality compounds.",
            ],
          },
        ],
        takeaways: [
          "Critique, brainstorm-and-narrow, explain-and-verify and transform cover most work.",
          "Generate volume first, then narrow with explicit criteria.",
          "Save what works — a prompt library is a compounding asset.",
        ],
        practice:
          "Create a notes file called 'prompts.md'. Add the four patterns from this lesson, each with one example filled with your own task.",
      },
    ],
  },
  {
    slug: "generative-ai",
    name: "Generative AI",
    tagline: "Create with text, image, audio & code",
    description:
      "Explore what generative models create and learn practical skills for generating images, text and code.",
    icon: Sparkles,
    accentClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    topics: [
      {
        slug: "what-generative-ai-can-create",
        title: "What Generative AI Can Create",
        description:
          "Text, images, audio, video and code — a tour of what generative models produce and where each one shines.",
        difficulty: "Beginner",
        duration: "10 min",
        tags: ["images", "text", "overview"],
        objectives: [
          "Name the main output types generative AI produces.",
          "Know which tool class fits which job.",
          "Understand the shared strengths and limits of all generators.",
        ],
        lesson: [
          {
            heading: "Text: the most mature output",
            paragraphs: [
              "Language models generate everything from emails and reports to scripts and poetry. This is the most reliable and widely used generative category.",
              "They shine at drafting, summarizing, rewriting and structuring — and are weakest at precise facts and numbers.",
            ],
            bullets: [
              "Use for: documents, marketing copy, code, study guides.",
              "Check for: invented facts, outdated info, bias.",
              "Best value: first drafts you then edit.",
            ],
          },
          {
            heading: "Images: from text to visuals",
            paragraphs: [
              "Image models turn a written description into pictures — illustrations, logos, mockups, backgrounds and photoreal concepts. You describe scene, style, mood and composition.",
              "Quality improves with detailed prompts, reference images and several regeneration passes.",
            ],
            bullets: [
              "Great for concepts, thumbnails, and unique visuals.",
              "Watch out for deformed hands, text and fine detail (still improving).",
              "You usually need a few iterations to get 'the one'.",
            ],
          },
          {
            heading: "Audio and video: new territory",
            paragraphs: [
              "Voice cloning, music and sound effects tools are impressive; video generation has advanced fast but remains harder to control.",
              "Use audio for narration, songs and speech-to-text; reserve video for short clips with clear subjects.",
            ],
            bullets: [
              "Voice: narration, dubbing, accessibility.",
              "Music/sound: background tracks, effects.",
              "Video: short scenes — the newest and least controllable.",
            ],
          },
          {
            heading: "Code: a developer multiplier",
            paragraphs: [
              "Generative models write, explain, refactor and test code. Used well they accelerate development enormously; used blindly they inject silent bugs.",
              "The winning habit: let AI draft and review, but always read, run and understand what changed.",
            ],
            bullets: [
              "Drafting functions, writing tests, explaining unfamiliar code.",
              "Never merge AI code you haven't reviewed and run.",
              "Small, isolated asks beat 'build me an app'.",
            ],
            tip: "Across all formats the same rule holds: generator for volume, you for judgment.",
          },
        ],
        takeaways: [
          "Generative AI produces text, images, audio, video and code with one prompt.",
          "Text and code are the most controllable; video the least.",
          "Every output needs a human review pass.",
        ],
        practice:
          "Create the same idea twice — once as text (ask an LLM for a 10-point list) and once as an image (ask an image tool for an illustration) — and compare which tool served the idea better.",
      },
      {
        slug: "generating-images",
        title: "Generating Images with AI",
        description:
          "Write image prompts, pick styles and iterate on AI-generated images using today's popular image tools.",
        difficulty: "Beginner",
        duration: "12 min",
        tags: ["images", "prompt"],
        objectives: [
          "Write a complete image prompt: subject, scene, style and mood.",
          "Improve results by iterating instead of starting over.",
          "Choose the right image tool for the job and know common limits.",
        ],
        lesson: [
          {
            heading: "Anatomy of a strong image prompt",
            paragraphs: [
              "A complete image prompt names the subject, the scene, the style and the mood: 'A small cozy bookstore at night, warm window light, watercolor style, calm and inviting, wide shot.'",
              "Each detail steers the result. Style words (photoreal, flat illustration, 3D render) matter as much as content.",
            ],
            bullets: [
              "Subject: the hero of the image.",
              "Scene/background: where it happens.",
              "Style + mood: how it looks and feels.",
              "Extra: camera angle, lighting, colors, composition.",
            ],
          },
          {
            heading: "Iterate, don't regenerate",
            paragraphs: [
              "Rarely is the first image perfect. Instead of rolling the dice, steer: 'keep the style, make the lighting warmer', 'move the subject left', 'add a person reading at a table'.",
              "Many tools let you use one image as a reference for the next — the fastest path to consistency.",
            ],
            bullets: [
              "Change one element per regeneration.",
              "Use style references to hold a visual identity.",
              "Generate variations, then pick winners.",
            ],
          },
          {
            heading: "Choosing the right tool",
            paragraphs: [
              "All-in-one creative tools and standalone image generators vary in style, speed, cost and control. Free tiers exist for experimentation.",
              "Match the tool to the job: photoreal product shots, illustrated characters, logos or concept art each favour different models.",
            ],
            bullets: [
              "Compare free limits before committing.",
              "Check the license terms for commercial use.",
              "Start with one tool and master its prompt language.",
            ],
            tip: "For text inside images (posters, logos), state the exact text in quotes — image models often garble wording otherwise.",
          },
          {
            heading: "Know the limits and keep it ethical",
            paragraphs: [
              "Faces, hands, text and small details are common weak spots — plan rework or fix-ups. Ownership rules vary by tool and country, so read the fine print before selling AI images.",
              "Never generate images of real people in misleading or harmful contexts, and be transparent when content is AI-made.",
            ],
            bullets: [
              "Hands, faces and text need several tries or manual fix.",
              "Check commercial-use rights per tool.",
              "Use AI images honestly — label them where it matters.",
            ],
          },
        ],
        takeaways: [
          "Prompt anatomy: subject, scene, style, mood — then tweak one thing at a time.",
          "Iterate and use references instead of hoping for a lucky first draft.",
          "Know the tool's licensing and its weak spots (hands, text, faces).",
        ],
        practice:
          "Write one image prompt with all four elements, generate it, then produce three refined versions by changing exactly one element each time.",
      },
      {
        slug: "generating-code",
        title: "Generating Code with AI",
        description:
          "Use generative models to write, explain, refactor and debug code — and how to review output you did not write.",
        difficulty: "Intermediate",
        duration: "13 min",
        tags: ["code", "developer"],
        objectives: [
          "Get useful code out of AI for writing, explaining and debugging.",
          "Apply a reliable review loop before using AI code.",
          "Avoid the common traps: silent bugs, security holes and over-trust.",
        ],
        lesson: [
          {
            heading: "What models do well with code",
            paragraphs: [
              "AI is genuinely strong at common patterns, boilerplate, conversions, unit tests, and explaining complex or unfamiliar code. It turns hours of searching into minutes of prompting.",
              "It is weakest on brand-new problems, project-wide architecture and anything requiring knowledge of your exact environment.",
            ],
            bullets: [
              "Great for: starters, tests, refactors, error reading, tutorials.",
              "Weak at: large architectural calls, uncommon APIs, latest versions.",
              "Treat AI code as a first draft by a developer who knows your project's name — and nothing else.",
            ],
          },
          {
            heading: "Prompt for code the right way",
            paragraphs: [
              "Give the model your language, framework, input/output shape, and what to avoid: 'Write a Dart function that converts a date string to a compact format. Input example: … Expected output: … No external packages.'",
              "For fixes, paste the error message AND the surrounding code rather than describing it.",
            ],
            bullets: [
              "Always state the language and framework explicitly.",
              "Include example input/output — the model matches them.",
              "Paste real errors; they decode better than stories.",
            ],
          },
          {
            heading: "The review loop before you commit",
            paragraphs: [
              "Never merge code you don't understand. Run it, read it, and test edge cases — empty input, bad data, conflicting values.",
              "Ask the model to critique its own code: 'Point out the weak spots, missing error handling and security risks in this function.' Then fix them.",
            ],
            bullets: [
              "Run before you trust; unseen code may not compile or behave.",
              "Test boundaries and failure paths, not just the happy path.",
              "Ask for a self-critique, then address the findings.",
            ],
          },
          {
            heading: "Security and fresher eyes",
            paragraphs: [
              "AI-generated code can import insecure or outdated packages, hardcode secrets, or mishandle user input. Review dependencies and resist pasting credentials into prompts.",
              "Balance the convenience against risk: keep AI dumb simple and let human judgment own the critical paths.",
            ],
            bullets: [
              "Check every dependency it suggests.",
              "Never put secrets or proprietary code in prompts.",
              "Audit anything touching money, users or security.",
            ],
          },
        ],
        takeaways: [
          "AI accelerates common code tasks and explanations — not architecture.",
          "Give language, framework, examples and errors for better output.",
          "Review, run and critique before committing AI code.",
        ],
        practice:
          "Take a function you wrote and ask an AI code assistant for: a rewritten version, a list of edge cases it handles, and three security risks in the original.",
      },
    ],
  },
];