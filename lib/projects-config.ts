// Curate which projects appear on the portfolio.
//
// Two sources:
// 1. MANUAL_PROJECTS, projects you list by hand (typically your Vercel deployments)
// 2. GitHub repos from GITHUB_USERNAME (set SHOW_GITHUB_REPOS = false to hide)

export const GITHUB_USERNAME = "nnk183";

// Set to false to hide GitHub repos entirely and show only MANUAL_PROJECTS.
export const SHOW_GITHUB_REPOS = false;

export type ManualProject = {
  name: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  liveUrl: string;
  repoUrl?: string;
  tags?: string[];
  language?: string;
  image?: string;
  featured?: boolean;
  status?: "live" | "upcoming" | "secret";
  launchDate?: string;
  progress?: number;
};

// Add your Vercel projects here. Order in this list = order on the page
// (unless `featured: true`, which floats it to the top in a larger card).
export const MANUAL_PROJECTS: ManualProject[] = [
  {
    name: "pzle",
    title: "pzle.day",
    description: "",
    problem:
      "AI is moving faster than most people can absorb. Abstracts feel intimidating, so daily engagement falls off and the field stays opaque.",
    solution:
      "A daily 4×4 grouping puzzle with AI-themed words. Solving reveals the hidden theme behind the 16 terms and recommends one paper to read. Daily AI literacy as a ritual. One Claude call per day, edge-cached for millions of plays at ~$1.50/month.",
    liveUrl: "https://pzle.day",
    tags: [
      "Next.js 15",
      "Supabase",
      "Claude Sonnet 4.5",
      "Vercel Cron",
      "ISR + Edge caching",
      "Framer Motion",
      "@vercel/og",
    ],
    language: "TypeScript",
    featured: true,
    status: "live",
  },
  {
    name: "paper-radar",
    title: "Paper Radar",
    description: "",
    problem:
      "200+ ML papers drop on arXiv every day. Abstracts don't tell you which ones are actually being built on or gaining momentum.",
    solution:
      "Daily arXiv tracker that scores ML papers by real-world traction: GitHub repos building on each paper, citation velocity, and time-decayed shipping signals. Two-tier LLM pipeline: Haiku classifies 150 papers daily, Sonnet writes narratives for the top 10.",
    liveUrl: "https://paper-radar-lake.vercel.app",
    tags: [
      "Next.js 16",
      "Supabase + pgvector",
      "Claude Haiku + Sonnet",
      "Voyage embeddings",
      "arXiv / GitHub / Semantic Scholar",
      "Recharts",
    ],
    language: "TypeScript",
    featured: true,
    status: "live",
  },
  {
    name: "stackmap",
    title: "StackMap",
    description: "",
    problem:
      "The AI ecosystem changes faster than any static market map. Most maps don't help you decide what to actually ship. They just list companies.",
    solution:
      "A living architecture explorer that maps companies as blocks across 12 layers, connected by typed wires, assembled dynamically around the solution someone is shipping. Stays alive via a five-agent pipeline (Scout, Classifier, Comparator, Synthesizer, Auditor), each with its own eval cohort.",
    liveUrl: "https://stackmap-ten.vercel.app",
    tags: [
      "Multi-agent system",
      "Anthropic SDK",
      "Eval-driven dev",
      "TypeScript",
      "SVG rendering",
      "Taxonomy design",
    ],
    language: "TypeScript",
    status: "upcoming",
  },
  {
    name: "social-media-pipeline",
    title: "Social Media Content Generation Pipeline",
    description: "",
    problem:
      "Daily social posting is the kind of work that kills momentum. Most automation pipelines stop at generation. A human still has to hit publish, every day.",
    solution:
      "Fully autonomous daily social-content pipeline. A scheduled n8n trigger kicks off a Mastra workflow that generates copy with Claude, synthesizes images and videos in Python, then publishes via the Publer API. Zero human touch per post. Runs on a private host, not a Next.js app.",
    liveUrl: "",
    tags: [
      "Mastra",
      "n8n",
      "Claude Haiku",
      "Python (image + video synthesis)",
      "Publer API",
      "Docker",
    ],
    language: "Python",
  },
  {
    name: "cloud-alliance-score",
    title: "Cloud Alliance Score",
    description: "",
    problem:
      "Partner and sales teams manually research and rank hundreds of companies as potential cloud-alliance accounts. It's slow, inconsistent across reviewers, and hard to defend without a documented evidence trail.",
    solution:
      "A multi-agent account scorer for LangChain × GCP alliance accounts. A LangGraph supervisor fans out to 5 parallel sub-agents (GCP commit size, AI maturity, industry fit, LangChain footprint, strategic signals), each gathering Tavily web evidence and scoring 1-5 with Claude, then an aggregator rolls it up into a composite score out of 25 and a priority tier with reasoning. Discovery Mode takes a vendor pair, generates and validates candidate companies, and ranks them on cheaper Claude Haiku.",
    liveUrl: "https://cloud-alliance-score.vercel.app",
    repoUrl: "https://github.com/nnk183/cloud-alliance-score",
    tags: [
      "LangGraph",
      "Claude Haiku + Sonnet",
      "Tavily web search",
      "FastAPI",
      "Streamlit",
      "LangSmith",
      "Docker",
    ],
    language: "Python",
    status: "live",
  },
  {
    name: "ml-glider-project",
    title: "ML Glider Project",
    description: "Building gliders.",
    liveUrl: "",
    repoUrl: "https://github.com/nnk183/ml-glider-project",
    language: "Python",
  },
];

// --- GitHub controls (only used if SHOW_GITHUB_REPOS is true) ---

export const ALLOWLIST: string[] = [];
export const DENYLIST: string[] = [];
export const FEATURED: string[] = [];

export const OVERRIDES: Record<
  string,
  Partial<{
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    tags: string[];
  }>
> = {};
