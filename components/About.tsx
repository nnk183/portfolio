import Image from "next/image";
import { ABOUT } from "@/lib/about";
import { Github, Mail, Linkedin, Twitter, FileText } from "./icons";
import { CompanyStrip } from "./CompanyStrip";

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

        <p className="mt-4 text-xl sm:text-3xl tracking-tight">
          {ABOUT.tagline}
        </p>

        <p className="mt-7 max-w-2xl text-lg sm:text-xl leading-relaxed">
          {ABOUT.passion}
        </p>

        {ABOUT.cta.available && (
          <div className="mt-7 inline-flex items-start gap-3 rounded-2xl border border-accent-warm/30 bg-accent-warm/5 px-5 py-3 max-w-2xl">
            <span
              aria-hidden
              className="mt-1.5 h-2 w-2 rounded-full bg-accent-warm shrink-0 animate-pulse"
            />
            <span className="text-sm leading-relaxed">{ABOUT.cta.text}</span>
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
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

      <CompanyStrip />
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
        {ABOUT.ambiguity.intro}
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
