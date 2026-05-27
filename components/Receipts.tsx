import { RECEIPTS } from "@/lib/about";

export function Receipts() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
        Receipts
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        What I&apos;ve delivered at work.
      </h2>
      <p className="mt-2 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
        Selected outcomes across EarnIn, Meta, Apple, and Deloitte.
      </p>
      <div className="mt-10 grid gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
        {RECEIPTS.map((r, i) => (
          <div key={i} className="bg-card p-6 sm:p-7">
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-accent-warm">
              {r.metric}
            </div>
            <div className="mt-1 text-sm font-medium">{r.label}</div>
            <div className="mt-2 text-xs text-muted leading-relaxed">
              {r.context}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
