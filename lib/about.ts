// Edit this to update the About section.

export const ABOUT = {
  name: "Naren Krishna",
  roleTag: "Senior Product & Operations Leader · ships AI products on the side",
  cta: {
    text: "Roles I shine in: Product Operations · AI Product Manager · Customer Support Strategy · Deployment Strategy",
    available: true,
  },
  tagline: "I build systems that fix things. I bring structure to chaos. And drama.",
  passion:
    "The thread in every job, side project, and weekend build: find the signal nobody named, ship the system that handles it, then make sure it actually lands. Docs are easy. Adoption is the work.",
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

// Quantified outcomes. 4-6 entries renders cleanest.
// Order matters: strongest 2 land first.
export const RECEIPTS: Array<{
  metric: string;
  label: string;
  context: string;
}> = [
  {
    metric: "$990K",
    label: "saved per year",
    context: "BERT + KNN ticket classifier routing customer ops at EarnIn",
  },
  {
    metric: "12M+",
    label: "users on the product I own",
    context: "EarnIn cash advance platform, consumer fintech",
  },
  {
    metric: "100+",
    label: "Meta product launches",
    context: "Creator Monetization portfolio, ~8% of Meta's revenue",
  },
  {
    metric: "+13%",
    label: "registrations lift",
    context: "Proactive Care framework, EarnIn (also +5% bank connections)",
  },
  {
    metric: "40h → 3h",
    label: "payment-support TAT",
    context: "End-to-end customer ops overhaul, Meta Payments",
  },
  {
    metric: "$130M+",
    label: "in client value at Deloitte",
    context: "$100M/yr platform launch + $30M+ in cost savings",
  },
];
