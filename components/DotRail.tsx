"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Intro" },
  { id: "receipts", label: "Receipts" },
  { id: "projects", label: "Projects" },
  { id: "how-i-work", label: "How I work" },
  { id: "personal", label: "Off the keyboard" },
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
      className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-4"
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
              className={`font-mono text-xs whitespace-nowrap transition-all duration-200 ${
                active
                  ? "opacity-100 translate-x-0 text-accent-warm font-medium"
                  : "opacity-0 -translate-x-1 text-muted group-hover:opacity-100 group-hover:translate-x-0"
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
