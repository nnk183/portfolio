import type { Metadata } from "next";
import Link from "next/link";
import { THOUGHTS, type Thought } from "@/lib/thoughts";
import { ABOUT } from "@/lib/about";
import { ExternalLink } from "@/components/icons";

const title = `Thoughts · ${ABOUT.name}`;
const description =
  "Essays and notes from Naren Krishna — on AI-native operations, building systems, and the work in between.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${ABOUT.siteUrl}/thoughts`,
    siteName: `${ABOUT.name} · Portfolio`,
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function meta(t: Thought) {
  const parts: string[] = [];
  if (t.date) parts.push(formatDate(t.date));
  if (t.readMinutes) parts.push(`${t.readMinutes} min read`);
  return parts.join(" · ");
}

export default function ThoughtsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 sm:px-8 pb-24">
      <header className="pt-16 sm:pt-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent-warm"
        >
          ← {ABOUT.name}
        </Link>

        <div className="mt-12 font-mono text-xs uppercase tracking-widest text-muted mb-3">
          Thoughts
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05]">
          Things I&apos;m thinking through.
        </h1>
        <p className="mt-4 max-w-xl text-muted text-sm sm:text-base leading-relaxed">
          Essays and notes — written in public, mostly about AI-native
          operations and building systems that fix things.
        </p>
      </header>

      <ul className="mt-12 flex flex-col gap-px bg-border rounded-2xl overflow-hidden">
        {THOUGHTS.map((t, i) => (
          <li key={i}>
            <ThoughtCard thought={t} />
          </li>
        ))}
      </ul>
    </main>
  );
}

function ThoughtCard({ thought: t }: { thought: Thought }) {
  const line = meta(t);

  const inner = (
    <>
      <div className="flex items-center gap-3">
        {t.tag && (
          <span className="font-mono text-xs uppercase tracking-widest text-accent-warm">
            {t.tag}
          </span>
        )}
        {t.draft && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
            Draft
          </span>
        )}
      </div>

      <h2 className="mt-3 flex items-baseline gap-2 text-xl sm:text-2xl font-semibold tracking-tight leading-tight">
        <span>{t.title}</span>
        {!t.draft && t.url && (
          <ExternalLink className="h-4 w-4 shrink-0 translate-y-0.5 text-muted transition-colors group-hover:text-accent-warm" />
        )}
      </h2>

      <p className="mt-2 text-sm text-muted leading-relaxed">{t.blurb}</p>

      {(line || t.draft) && (
        <div className="mt-4 font-mono text-xs text-muted">
          {t.draft ? "Coming soon" : line}
        </div>
      )}
    </>
  );

  if (t.draft || !t.url) {
    return <div className="bg-card p-6 sm:p-7">{inner}</div>;
  }

  return (
    <a
      href={t.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card p-6 sm:p-7 transition-colors hover:bg-card/60"
    >
      {inner}
    </a>
  );
}
