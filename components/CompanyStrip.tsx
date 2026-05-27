// Companies are rendered as inline SVG paths so they look crisp at any size,
// adapt to light/dark mode via currentColor, and don't require network calls.

import { ABOUT } from "@/lib/about";

type Company = {
  name: string;
  viewBox: string;
  path?: string;
  pathFillRule?: "evenodd" | "nonzero";
  wordmark?: boolean;
};

// Reverse-chronological: current first so the eye anchors on recent + most-known names.
const COMPANIES: Company[] = [
  {
    name: "EarnIn",
    wordmark: true,
    viewBox: "0 0 24 24",
  },
  {
    name: "Meta",
    wordmark: true,
    viewBox: "0 0 24 24",
  },
  {
    name: "Apple",
    viewBox: "0 0 24 24",
    path: "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z",
  },
  {
    name: "Deloitte",
    wordmark: true,
    viewBox: "0 0 24 24",
  },
  {
    name: "Microsoft",
    viewBox: "0 0 24 24",
    path: "M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z",
  },
  {
    name: "Ericsson",
    wordmark: true,
    viewBox: "0 0 24 24",
  },
];

export function CompanyStrip() {
  const { heading, body, stack, credentials } = ABOUT.aboutMe;
  return (
    <div className="mt-14">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
        {heading}
      </div>
      <p className="max-w-2xl text-base sm:text-lg leading-relaxed">{body}</p>
      {stack && (
        <p className="mt-3 max-w-2xl text-sm text-muted leading-relaxed">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent-warm/80">
            Stack:
          </span>{" "}
          {stack}
        </p>
      )}
      <div className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-6 sm:gap-x-14">
        {COMPANIES.map((c) => (
          <div
            key={c.name}
            className="group relative flex items-center text-muted hover:text-foreground transition-colors duration-300"
            title={c.name}
          >
            {c.wordmark ? (
              <span
                className={
                  c.name === "EarnIn"
                    ? "text-xl font-semibold tracking-tighter italic"
                    : "text-xl font-bold tracking-tight"
                }
              >
                {c.name}
              </span>
            ) : (
              <svg
                viewBox={c.viewBox}
                className="h-7 w-auto sm:h-8 fill-current"
                aria-label={c.name}
              >
                <title>{c.name}</title>
                <path d={c.path} />
              </svg>
            )}
          </div>
        ))}
      </div>
      <p className="mt-5 font-mono text-xs text-muted">{credentials}</p>
    </div>
  );
}

export function ClientStrip() {
  const { heading, items } = ABOUT.clients;
  return (
    <div className="mt-14">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
        {heading}
      </div>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-6 sm:gap-x-14">
        {items.map((name) => (
          <span
            key={name}
            className="text-xl font-bold tracking-tight text-muted hover:text-foreground transition-colors duration-300"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
