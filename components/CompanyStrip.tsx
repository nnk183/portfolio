// Companies are rendered as inline SVG paths so they look crisp at any size,
// adapt to light/dark mode via currentColor, and don't require network calls.

type Company = {
  name: string;
  viewBox: string;
  path?: string;
  pathFillRule?: "evenodd" | "nonzero";
  wordmark?: boolean;
};

const COMPANIES: Company[] = [
  {
    name: "Ericsson",
    viewBox: "0 0 24 24",
    path: "M12.027 2.04c-.518 0-.939.42-.939.94v3.696H4.62c-.52 0-.94.42-.94.939s.42.939.94.939h6.467v3.515H4.62c-.52 0-.94.42-.94.939s.42.939.94.939h6.467v3.515H4.62c-.52 0-.94.42-.94.939s.42.939.94.939h6.467v3.696c0 .52.42.94.939.94s.939-.42.939-.94v-3.696h6.466c.52 0 .94-.42.94-.939s-.42-.939-.94-.939h-6.466v-3.515h6.466c.52 0 .94-.42.94-.939s-.42-.939-.94-.939h-6.466V8.554h6.466c.52 0 .94-.42.94-.939s-.42-.939-.94-.939h-6.466V2.98c0-.52-.42-.94-.94-.94z",
  },
  {
    name: "Microsoft",
    viewBox: "0 0 24 24",
    path: "M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z",
  },
  {
    name: "Deloitte",
    wordmark: true,
    viewBox: "0 0 24 24",
  },
  {
    name: "Apple",
    viewBox: "0 0 24 24",
    path: "M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z",
  },
  {
    name: "Meta",
    viewBox: "0 0 24 24",
    path: "M12.001 4.8c-3.2 0-5.2 1.6-6.4 4 1.6-2.4 3.6-3.2 6.4-3.2 4.8 0 9.6 4.8 9.6 9.6 0 3.2-1.6 4.8-4.8 4.8-2.4 0-4-1.6-6.4-4.8-1.6-2.4-3.2-4.8-4.8-4.8s-3.2 1.6-3.2 4c0 2.4 1.6 4.8 3.2 4.8 1.6 0 2.4-.8 4-2.4l-1.6-2.4c-1.6 1.6-2.4 1.6-2.4 1.6-.8 0-1.6-1.6-1.6-2.4 0-1.6.8-2.4 1.6-2.4 1.6 0 2.4 1.6 4 4 1.6 2.4 3.2 6.4 6.4 6.4 4.8 0 6.4-3.2 6.4-6.4 0-7.2-6.4-12-11.2-12-6.4 0-9.6 4.8-9.6 9.6 0 7.2 5.6 12 9.6 12v-1.6c-3.2 0-8-4-8-10.4 0-4 2.4-8 8-8z",
  },
  {
    name: "EarnIn",
    wordmark: true,
    viewBox: "0 0 24 24",
  },
];

export function CompanyStrip() {
  return (
    <div className="mt-16">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
        Where I&apos;ve shipped
      </div>
      <div className="flex flex-wrap items-center gap-x-10 gap-y-6 sm:gap-x-14">
        {COMPANIES.map((c) => (
          <div
            key={c.name}
            className="group relative flex items-center text-muted hover:text-foreground transition-colors duration-300"
            title={c.name}
          >
            {c.wordmark ? (
              <span
                className={
                  c.name === "Deloitte"
                    ? "text-xl font-bold tracking-tight"
                    : "text-xl font-semibold tracking-tighter italic"
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
      <p className="mt-5 text-sm text-muted max-w-2xl leading-relaxed">
        12+ years across telecom infra, big tech, strategy consulting, and
        consumer fintech. Currently leading Product Operations and Customer
        Care Strategy at EarnIn (12M+ users). MBA, IIM Lucknow. CS, IIT Madras.
      </p>
    </div>
  );
}
