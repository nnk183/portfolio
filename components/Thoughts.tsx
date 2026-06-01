import { THOUGHTS, type Thought } from "@/lib/thoughts";
import { ExternalLink } from "./icons";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function metaLine(t: Thought) {
  const parts: string[] = [];
  if (t.date) parts.push(formatDate(t.date));
  if (t.readMinutes) parts.push(`${t.readMinutes} min read`);
  return parts.join(" · ");
}

export function Thoughts() {
  return (
    <section
      id="thoughts"
      className="border-t border-border py-16 sm:py-20 scroll-mt-8"
    >
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
        Thoughts
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Things I&apos;m thinking through.
      </h2>
      <p className="mt-2 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
        Essays and notes, written in public — mostly on AI-native operations and
        building systems that fix things.
      </p>
      <div className="mt-10 grid gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-2">
        {THOUGHTS.map((t, i) => (
          <ThoughtCard key={i} thought={t} />
        ))}
      </div>
    </section>
  );
}

function ThoughtCard({ thought: t }: { thought: Thought }) {
  const line = metaLine(t);

  const inner = (
    <>
      <div className="flex items-center gap-3">
        {t.tag && (
          <span className="font-mono text-xs uppercase tracking-widest text-accent-warm">
            {t.tag}
          </span>
        )}
        {t.draft && (
          <span className="inline-flex items-center rounded-full border border-dashed border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted">
            Draft
          </span>
        )}
      </div>

      <h3 className="mt-3 flex items-baseline gap-2 text-xl sm:text-2xl font-semibold tracking-tight leading-tight">
        <span>{t.title}</span>
        {!t.draft && t.url && (
          <ExternalLink className="h-4 w-4 shrink-0 translate-y-0.5 text-muted transition-colors group-hover:text-accent-warm" />
        )}
      </h3>

      <p className="mt-2 text-sm text-muted leading-relaxed">{t.blurb}</p>

      <div className="mt-4 font-mono text-xs text-muted">
        {t.draft ? "Coming soon" : line}
      </div>
    </>
  );

  if (t.draft || !t.url) {
    return <div className="flex flex-col bg-card p-6 sm:p-7">{inner}</div>;
  }

  return (
    <a
      href={t.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-card p-6 sm:p-7 transition-colors hover:bg-card/60"
    >
      {inner}
    </a>
  );
}
