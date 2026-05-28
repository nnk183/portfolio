// Edit this to update the About section.

export const ABOUT = {
  name: "Naren Krishna",
  roleTag: "AI-native Product Operations Lead. Ruthless Prioritizer. Catalyst. First Principles Thinker.",
  cta: {
    text: "Roles I shine in: Product Ops · AI PM · Customer Strategy · Deployment · Cloud Alliances",
    available: true,
  },
  tagline: "I build systems that fix things. I bring structure to chaos. And drama.",
  aboutMe: {
    heading: "About me",
    body: "Product & Support Operations leader, 12+ years across Meta and EarnIn. I help organizations turn any growth idea into reality. I own the launch framework that aligns EPD, Marketing, Sales, Finance, and Support on goals, positioning, and metrics. I run the planning cadences and demo forums that keep the company in step, build voice-of-customer loops from GTM and Support back into the roadmap, and shape the PM operating system: planning, tracking, decisions, and the tools PMs live in. Where AI and agents can change how product work actually gets done, that's where I push hardest.",
    stack: "Hands-on with SQL (Databricks), Amplitude, Braze, Zendesk, Jira, BERT/NLP, n8n, and Claude.",
    companiesHeading: "Where I created impact",
  },
  clients: {
    heading: "Clients I served at Deloitte",
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

// Six frameworks I've built. Each one was reusable — the metric is just
// the proof, not the point.
export const RECEIPTS: Array<{
  theme: string;
  name: string;
  impact: string;
  detail: string;
}> = [
  {
    theme: "AI pipelines that ship",
    name: "Voice of Customer Streamlined",
    impact: "Identify opportunities faster. 4 days to realtime.",
    detail: "BERT + KNN classifier that turns raw ticket noise into routed signal. Same pattern reusable wherever customer feedback is fragmented.",
  },
  {
    theme: "Launch readiness at scale",
    name: "Launch Readiness Framework",
    impact: "End-to-end ownership from EPD alignment to GTM activation.",
    detail: "Modular enough to ship monetization features, platform changes, and customer-facing products on the same backbone.",
  },
  {
    theme: "Fast domain ramp, high throughput",
    name: "Cross-domain Ramp System",
    impact: "Ramp into a new product domain in weeks, not quarters.",
    detail: "Stress-tested across multiple high-stakes domains. Different problems, same playbook.",
  },
  {
    theme: "Mastery of A/B experimentation",
    name: "Proactive Care Framework",
    impact: "10% reduction at key drop-off points.",
    detail: "Detects friction signals before users churn and routes interventions where they matter.",
  },
  {
    theme: "Efficiency gains I bring in",
    name: "Modular Architecture",
    impact: "Monolithic to microservices, plug-and-play at every layer.",
    detail: "Decompose what was a wall. Swap any component without rewriting the rest. Pattern applies wherever brittle systems live.",
  },
  {
    theme: "0 to 1 work I'm proud of",
    name: "Transactional Comms on Braze",
    impact: "End-to-end setup across every channel: email, SMS, push, in-app.",
    detail: "A zero-to-one system that other product squads still extend today.",
  },
];
