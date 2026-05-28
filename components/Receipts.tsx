import { RECEIPTS } from "@/lib/about";

export function Receipts() {
  return (
    <section id="receipts" className="border-t border-border py-16 sm:py-20 scroll-mt-8">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
        Receipts
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        Modular frameworks that ship.
      </h2>
      <p className="mt-2 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
        Built once, refined under pressure, reused across product problems.
      </p>
      <div className="mt-10 grid gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
        {RECEIPTS.map((r, i) => (
          <div key={i} className="flex flex-col bg-card p-6 sm:p-7">
            <div className="font-mono text-xs uppercase tracking-widest text-accent-warm">
              {r.theme}
            </div>
            <div className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight leading-tight">
              {r.name}
            </div>
            <div className="mt-2 text-sm font-medium leading-snug">{r.impact}</div>
            <div className="mt-2 text-xs text-muted leading-relaxed">
              {r.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
