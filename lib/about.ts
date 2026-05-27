// Edit this to update the About section.

export const ABOUT = {
  name: "Naren Krishna",
  roleTag: "Accelerator, Product Operations Champion, Ships AI Products, Student Pilot, Dancer. Ruthless Prioritizer. Team Player.",
  cta: {
    text: "Roles I shine in: Product Ops · AI PM · Customer Strategy · Deployment · Cloud Alliances",
    available: true,
  },
  tagline: "I build systems that fix things. I bring structure to chaos. And drama.",
  aboutMe: {
    heading: "About me",
    body: "Product & Support Operations leader, 12+ years across Meta and EarnIn. I help organizations turn any growth idea into reality. I own the launch framework that aligns EPD, Marketing, Sales, Finance, and Support on goals, positioning, and metrics. I run the planning cadences and demo forums that keep the company in step, build voice-of-customer loops from GTM and Support back into the roadmap, and shape the PM operating system: planning, tracking, decisions, and the tools PMs live in. Where AI and agents can change how product work actually gets done, that's where I push hardest.",
    stack: "Hands-on with SQL (Databricks), Amplitude, Braze, Zendesk, Jira, BERT/NLP, n8n, and Claude.",
    credentials: "MBA, IIM Lucknow · CS, IIT Madras",
  },
  clients: {
    heading: "Clients I've worked with",
    items: ["HPE", "Argo", "Cargill", "Target", "Verizon"],
  },
  // Subheading under "How I work"
  pillarsHeading: "The loop I run",
  pillars: [
    {
      title: "I find signal others miss.",
      body: "Patterns in data, conversations, and systems that other people walk past. The unnamed thing is usually where the leverage is.",
    },
    {
      title: "I build the system that acts on it.",
      body: "Not a deck. The actual pipeline, classifier, workflow, or metric framework that turns the insight into a behavior change.",
    },
    {
      title: "I make sure it lands.",
      body: "Adoption is designed in, not bolted on at launch. Every team that has to live with the system actually uses it.",
    },
  ],
  ambiguity: {
    heading: "When the path is unclear",
    intro:
      "I run on a Rumsfeld matrix, known unknowns versus unknown unknowns. Three steps that survive every project:",
    steps: [
      {
        title: "Map what you know and don't know.",
        body: "Knowns, known unknowns, and the blindspots. Write them down before deciding anything.",
      },
      {
        title: "Bias toward cheap experiments.",
        body: "Test with a small cohort before any full rollout. Cheap is the point.",
      },
      {
        title: "Measure as you go.",
        body: "Validate assumptions weekly, not at the end. Most plans are wrong by week 2.",
      },
    ],
  },
  personal: {
    heading: "Off the keyboard",
    items: [
      {
        emoji: "💃",
        title: "I dance.",
        body: "Choreography, freestyle, and the occasional reel that goes harder than it should.",
        linkLabel: "@narenkris",
        linkUrl: "https://instagram.com/narenkris",
      },
      {
        emoji: "✈️",
        title: "I'm a student pilot.",
        body: "Training is currently paused, but the logbook is open. Single-engine, VFR.",
      },
      {
        emoji: "🛠️",
        title: "I prototype with Claude Code.",
        body: "Most weekend builds below get from idea to shipped in 1-2 sittings. The compression is real.",
      },
    ],
  },
  books: {
    heading: "Books on my shelf",
    subheading:
      "What I've read, what I'm flipping through now, and what's queued up next.",
    items: [
      {
        title: "The Secret",
        author: "Rhonda Byrne",
        status: "completed" as const,
        wikiUrl: "https://en.wikipedia.org/wiki/The_Secret_(book)",
        note: "The belief that focused, emotionally charged thought attracts matching outcomes. The Law of Attraction as a self-reinforcing loop of expectation, gratitude, and visualization.",
      },
      {
        title: "The Art of War",
        author: "Sun Tzu",
        status: "completed" as const,
        wikiUrl: "https://en.wikipedia.org/wiki/The_Art_of_War",
        note: "A timeless playbook for winning conflicts through positioning, deception, and economy of force. The conviction that the supreme victory is the one won before the battle begins.",
      },
      {
        title: "Screenplay",
        author: "Syd Field",
        status: "reading" as const,
        wikiUrl: "https://en.wikipedia.org/wiki/Syd_Field",
        note: "To learn how three-act structure shapes pitches, decks, and product narratives.",
      },
      {
        title: "The Almanack of Naval Ravikant",
        author: "Eric Jorgenson",
        status: "planned" as const,
        wikiUrl: "https://en.wikipedia.org/wiki/Naval_Ravikant",
        note: "Wealth, happiness, and freedom compound the same way: through specific knowledge, leverage, and the patience to play long games with the right people.",
      },
      {
        title: "Meditations",
        author: "Marcus Aurelius",
        status: "planned" as const,
        wikiUrl: "https://en.wikipedia.org/wiki/Meditations",
        note: "You don't control what happens to you, only your judgment of it, and that single distinction is the source of every freedom worth having.",
      },
      {
        title: "Man's Search for Meaning",
        author: "Viktor Frankl",
        status: "planned" as const,
        wikiUrl: "https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning",
        note: "When everything can be taken from you, one thing remains: the freedom to choose your response, and in that choice lies the meaning of a life.",
      },
    ],
  },
  hero: {
    photoSrc: "/me.jpg",
    photoAlt: "Naren Krishna",
  },
  links: {
    github: "https://github.com/nnk183",
    email: "naren.krishna@iiml.org",
    linkedin: "https://www.linkedin.com/in/naren-krishna/",
    twitter: "",
    resume: "",
  },
};

// Quantified outcomes mapped to six characteristics I bring.
// Each box = one trait, anchored by one metric.
export const RECEIPTS: Array<{
  theme: string;
  metric: string;
  label: string;
  context: string;
}> = [
  {
    theme: "AI pipelines that ship",
    metric: "$990K",
    label: "saved per year",
    context: "Voice-of-customer streamlined with a BERT + KNN ticket classifier at EarnIn",
  },
  {
    theme: "Launch readiness at scale",
    metric: "12M+",
    label: "users on the product I run",
    context: "Shipped through a launch-readiness process I own end-to-end at EarnIn",
  },
  {
    theme: "Fast domain ramp, high throughput",
    metric: "100+",
    label: "Meta launches in 2 years",
    context: "Across Integrity and Commerce. Ramped each domain fast and kept the cadence",
  },
  {
    theme: "Mastery of A/B experimentation",
    metric: "+13%",
    label: "registrations lift",
    context: "Proactive Care framework at EarnIn (also +5% bank connections)",
  },
  {
    theme: "Efficiency gains I bring in",
    metric: "3 days → 3 hrs",
    label: "VNF provisioning time",
    context: "Whitebox network function automation, Deloitte engagement",
  },
  {
    theme: "0 → 1 work I'm proud of",
    metric: "0 → 1",
    label: "Transactional comms on Braze",
    context: "Set up at EarnIn across every channel: email, SMS, push, in-app",
  },
];
