// Edit this to update the About section.

export const ABOUT = {
  name: "Naren Krishna",
  roleTag: "Senior Product & Operations Leader · ships AI products on the side",
  cta: {
    text: "Roles I shine in: Product Ops · AI PM · Customer Strategy · Deployment · Cloud Alliances",
    available: true,
  },
  tagline: "I build systems that fix things. I bring structure to chaos. And drama.",
  aboutMe: {
    heading: "About me",
    body: "I find unnamed problems and build the systems that solve them. Today at EarnIn (12M+ users). Yesterday at Meta, Apple, Deloitte, Microsoft, and Ericsson.",
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
        note: "Belief sets the altitude. Intent precedes outcome.",
      },
      {
        title: "The Art of War",
        author: "Sun Tzu",
        status: "completed" as const,
        wikiUrl: "https://en.wikipedia.org/wiki/The_Art_of_War",
        note: "Win before you fight. Position beats force.",
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
        note: "To pressure-test how I think about wealth, judgment, and time.",
      },
      {
        title: "Meditations",
        author: "Marcus Aurelius",
        status: "planned" as const,
        wikiUrl: "https://en.wikipedia.org/wiki/Meditations",
        note: "To borrow a 2,000-year-old framework for staying steady under daily friction.",
      },
      {
        title: "Man's Search for Meaning",
        author: "Viktor Frankl",
        status: "planned" as const,
        wikiUrl: "https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning",
        note: "To see how meaning holds up when everything else collapses.",
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
    context: "Across Integrity and Commerce — ramped each domain fast and kept the cadence",
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
    context: "Whitebox network function automation — Deloitte engagement",
  },
  {
    theme: "0 → 1 work I'm proud of",
    metric: "0 → 1",
    label: "Transactional comms on Braze",
    context: "Set up at EarnIn across every channel — email, SMS, push, in-app",
  },
];
