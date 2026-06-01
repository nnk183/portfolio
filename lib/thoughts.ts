// Edit this to add a new piece of writing. Newest first.
// Each entry is a card on /thoughts that links out to where the piece lives.

export type Thought = {
  title: string;
  // One- or two-line summary shown on the card. Keep it tight.
  blurb: string;
  // ISO date the piece was published (YYYY-MM-DD). Optional for drafts.
  date?: string;
  // Rough read time in minutes. Shown as "N min read". Optional for drafts.
  readMinutes?: number;
  // Where the full piece lives (LinkedIn, for now). Omit while drafting.
  url?: string;
  // Short label, e.g. "Essay", "Note". Optional.
  tag?: string;
  // Mark true while the piece is still being written — renders as a
  // non-clickable card with a "Draft" pill instead of a link-out.
  draft?: boolean;
};

// Newest first. Drafts can sit at the top; published pieces link out.
export const THOUGHTS: Thought[] = [
  {
    title: "The Rejection Theorem",
    blurb:
      "For any two candidates A and B competing for role R at time T: if A ranks above B on f(R, T), it does not follow that B is bad, nor that B will rank below A at f(R′, T′). Rejection is a partial measurement, not a total verdict.",
    tag: "Essay",
    draft: true,
  },
  {
    title: "The Great Reset",
    blurb:
      "Career growth used to be linear. AI broke it. Everyone is at a starting line, at every layer, simultaneously. This is a race — not against AI, but against the version of yourself from yesterday. The only way to win is how fast you can unlearn and learn. Every single day.",
    date: "2026-05-30",
    readMinutes: 2,
    url: "https://www.linkedin.com/posts/nnarenk_ugcPost-7466512896206852096-OYoE/",
    tag: "Essay",
  },
];
