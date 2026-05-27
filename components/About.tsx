import Image from "next/image";
import { ABOUT } from "@/lib/about";
import { Github, Mail, Linkedin, Twitter, FileText } from "./icons";
import { CompanyStrip, ClientStrip } from "./CompanyStrip";

export function About() {
  const links = ABOUT.links;
  const photo = ABOUT.hero.photoSrc;
  return (
    <section id="top" className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 scroll-mt-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent-soft), transparent)",
        }}
      />

      <div className="relative">
        <div className="flex items-center gap-5">
          {photo && (
            <Image
              src={photo}
              alt={ABOUT.hero.photoAlt}
              width={80}
              height={80}
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover border border-border"
              priority
            />
          )}
          <div>
            <div className="text-sm text-muted font-mono">hi, i&apos;m</div>
            <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]">
              {ABOUT.name}
            </h1>
          </div>
        </div>

        <div className="mt-5 text-sm sm:text-base text-muted font-mono">
          {ABOUT.roleTag}
        </div>

        <div className="mt-10 font-mono text-xs uppercase tracking-widest text-muted mb-3">
          TL;DR
        </div>
        <p className="text-xl sm:text-3xl tracking-tight">
          {ABOUT.tagline}
        </p>

        <CompanyStrip />

        <ClientStrip />

        <div className="mt-14 flex flex-wrap gap-3">
          {links.email && (
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium transition hover:opacity-90"
            >
              <Mail />
              <span>Email me</span>
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:border-accent hover:-translate-y-0.5"
          >
            <span>Contact ↓</span>
          </a>
          {links.github && (
            <LinkBadge href={links.github} icon={<Github />} label="GitHub" />
          )}
          {links.linkedin && (
            <LinkBadge
              href={links.linkedin}
              icon={<Linkedin />}
              label="LinkedIn"
            />
          )}
          {links.twitter && (
            <LinkBadge href={links.twitter} icon={<Twitter />} label="Twitter" />
          )}
          {links.resume && (
            <LinkBadge href={links.resume} icon={<FileText />} label="Resume" />
          )}
        </div>
      </div>
    </section>
  );
}

export function HowIWork() {
  return (
    <section id="how-i-work" className="border-t border-border py-16 sm:py-20 scroll-mt-8">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
        How I work
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
        {ABOUT.pillarsHeading}
      </h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {ABOUT.pillars.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent hover:-translate-y-0.5"
          >
            <div className="font-mono text-xs text-accent-warm mb-3">
              0{i + 1}
            </div>
            <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-14 text-xl sm:text-2xl font-semibold tracking-tight">
        {ABOUT.ambiguity.heading}
      </h3>
      <p className="mt-3 max-w-3xl text-base text-muted leading-relaxed">
        I run on a{" "}
        <a
          href="https://en.wikipedia.org/wiki/There_are_known_knowns"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline decoration-dotted underline-offset-4 hover:text-accent-warm"
        >
          Rumsfeld matrix
        </a>
        , known unknowns versus unknown unknowns. Three steps that survive every project:
      </p>
      <ol className="mt-6 grid gap-5 sm:grid-cols-3">
        {ABOUT.ambiguity.steps.map((s, i) => (
          <li
            key={i}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="font-mono text-xs text-accent-warm mb-3">
              0{i + 1}
            </div>
            <div className="font-medium">{s.title}</div>
            <div className="mt-2 text-sm text-muted leading-relaxed">
              {s.body}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Personal() {
  const { heading, items } = ABOUT.personal;
  return (
    <section id="personal" className="border-t border-border py-16 sm:py-20 scroll-mt-8">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
        {heading}
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div className="text-2xl mb-2">{item.emoji}</div>
            <div className="font-medium">{item.title}</div>
            <p className="mt-1 text-sm text-muted leading-relaxed">
              {item.body}
            </p>
            {"linkUrl" in item && item.linkUrl && (
              <a
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm text-accent-warm hover:underline"
              >
                {item.linkLabel} →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const BOOK_STATUS_META: Record<
  "completed" | "reading" | "planned",
  { label: string; pillClass: string; dot: boolean }
> = {
  completed: {
    label: "Read",
    pillClass: "border-border bg-card text-muted",
    dot: false,
  },
  reading: {
    label: "Flipping pages",
    pillClass: "border-accent-warm/40 bg-accent-warm/10 text-accent-warm",
    dot: true,
  },
  planned: {
    label: "Up next",
    pillClass: "border-dashed border-border bg-transparent text-muted",
    dot: false,
  },
};

export function Books() {
  const { heading, subheading, items } = ABOUT.books;
  return (
    <section id="books" className="border-t border-border py-16 sm:py-20 scroll-mt-8">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
        {heading}
      </div>
      {subheading && (
        <p className="max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
          {subheading}
        </p>
      )}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((b, i) => {
          const meta = BOOK_STATUS_META[b.status];
          const noteLabel = "My take";
          return (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div
                className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${meta.pillClass}`}
              >
                {meta.dot && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-warm animate-pulse" />
                )}
                {meta.label}
              </div>
              <a
                href={b.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-baseline gap-1 font-medium leading-snug hover:text-accent-warm transition-colors"
              >
                <span>{b.title}</span>
                <span aria-hidden className="text-xs text-muted">↗</span>
              </a>
              <div className="mt-1 text-sm text-muted">{b.author}</div>
              {b.note && (
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-warm/80">
                    {noteLabel}:
                  </span>{" "}
                  {b.note}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function LinkBadge({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm transition hover:border-accent hover:-translate-y-0.5"
    >
      <span className="text-muted">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
