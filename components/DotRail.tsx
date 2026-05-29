"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "receipts", label: "Receipts" },
  { id: "projects", label: "Projects" },
  { id: "how-i-work", label: "How I work" },
  { id: "personal", label: "Off the keyboard" },
  { id: "books", label: "Bookshelf" },
  { id: "contact", label: "Contact" },
];

export function DotRail() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibility: Record<string, number> = {};

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          visibility[s.id] = entry.intersectionRatio;
          let best = SECTIONS[0].id;
          let bestRatio = -1;
          for (const sec of SECTIONS) {
            const r = visibility[sec.id] ?? 0;
            if (r > bestRatio) {
              bestRatio = r;
              best = sec.id;
            }
          }
          setActiveId(best);
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: "-20% 0px -20% 0px",
        },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed z-30 flex bottom-5 left-1/2 -translate-x-1/2 flex-row gap-3 rounded-full border border-muted/15 bg-background/80 px-3 py-2 backdrop-blur md:bottom-auto md:left-6 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:flex-col md:gap-4 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none"
    >
      {SECTIONS.map((s) => {
        const active = s.id === activeId;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3"
            aria-label={s.label}
            aria-current={active ? "true" : undefined}
          >
            <span
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                active
                  ? "bg-accent-warm scale-150"
                  : "bg-muted/50 group-hover:bg-muted"
              }`}
            />
            <span
              className={`hidden md:inline-block font-mono text-xs whitespace-nowrap transition-colors duration-200 ${
                active
                  ? "text-accent-warm font-medium"
                  : "text-muted/60 group-hover:text-muted"
              }`}
            >
              {s.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
