// Curate which projects appear on the portfolio.
//
// Two sources:
// 1. MANUAL_PROJECTS — projects you list by hand (typically your Vercel deployments)
// 2. GitHub repos from GITHUB_USERNAME (set SHOW_GITHUB_REPOS = false to hide)

export const GITHUB_USERNAME = "nnk183";

// Set to false to hide GitHub repos entirely and show only MANUAL_PROJECTS.
export const SHOW_GITHUB_REPOS = false;

export type ManualProject = {
  name: string;
  title: string;
  description: string;
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
    name: "cluster",
    title: "Cluster",
    description:
      "A daily 4×4 grouping puzzle with AI-themed words. Solving reveals the hidden theme behind the 16 terms and recommends one paper to read, turning the game into a daily AI literacy ritual. One Claude call per day, edge-cached for millions of plays at ~$1.50/month.",
    liveUrl: "https://cluster-sandy.vercel.app",
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
    description:
      "Daily arXiv tracker that scores ML papers by real-world traction. Tracks GitHub repos building on each paper, citation velocity, and time-decayed shipping signals, instead of just summarizing abstracts. Two-tier LLM pipeline: Haiku classifies 150 papers daily, Sonnet writes narratives for the top 10.",
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
    description:
      "A living architecture explorer for the AI ecosystem. Maps companies as blocks, organized into 12 layers, connected by typed wires, assembled dynamically around the solution someone is shipping. Stays alive via a five-agent pipeline (Scout, Classifier, Comparator, Synthesizer, Auditor), each with its own eval cohort.",
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
    launchDate: "2026-06-02",
    progress: 90,
  },
  {
    name: "digital-twin",
    title: "Digital Twin",
    description:
      "An AI alter-ego platform. Upload your resume, docs, and links to build a private knowledge base, then chat with an agent that represents you. Includes PII detection, per-user RLS, and an MCP server so other agents can talk to your twin.",
    liveUrl: "https://altpro.me",
    tags: [
      "Next.js 16",
      "Anthropic SDK + AI SDK v6",
      "MCP server",
      "Supabase Auth + RLS",
      "pdf-parse",
      "cheerio scraping",
    ],
    language: "TypeScript",
    status: "upcoming",
    launchDate: "2026-06-10",
    progress: 75,
  },
  {
    name: "nybf",
    title: "NYBF — Not Your Best Friend",
    description:
      "A companion chat product with multiple personas (Partner, Big Sibling, Friend). The interesting half is the autonomous eval loop: simulated user agents stress-test the app, a product-head agent triages findings, a dev agent writes code diffs, a QA agent re-simulates to validate, all in one command.",
    liveUrl: "https://nybf-rho.vercel.app",
    tags: [
      "Next.js 16",
      "Supabase Auth",
      "Multi-agent eval loop",
      "Anthropic Claude",
      "PWA",
      "Web Push",
    ],
    language: "TypeScript",
    status: "upcoming",
    launchDate: "2026-06-30",
    progress: 55,
  },
  {
    name: "social-media-pipeline",
    title: "Social Media Pipeline",
    description: "",
    liveUrl: "",
    language: "",
    status: "secret",
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
