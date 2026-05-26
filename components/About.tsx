import { ABOUT } from "@/lib/about";
import { Github, Mail, Linkedin, Twitter, FileText } from "./icons";

export function About() {
  const links = ABOUT.links;
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="text-sm text-muted mb-4 font-mono">hi, i&apos;m</div>
      <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
        {ABOUT.name}
      </h1>
      <p className="mt-3 text-xl sm:text-2xl text-muted">{ABOUT.tagline}</p>

      <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed">
        {ABOUT.passion}
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        {links.github && (
          <LinkBadge href={links.github} icon={<Github />} label="GitHub" />
        )}
        {links.email && (
          <LinkBadge
            href={`mailto:${links.email}`}
            icon={<Mail />}
            label="Email"
          />
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

      <Pillars />
      <Ambiguity />
      <Career />
    </section>
  );
}

function Pillars() {
  return (
    <div className="mt-16">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-6">
        What people say about me
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {ABOUT.pillars.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <div className="font-mono text-xs text-muted mb-3">
              0{i + 1}
            </div>
            <h3 className="text-lg font-semibold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Ambiguity() {
  const { heading, intro, steps } = ABOUT.ambiguity;
  return (
    <div className="mt-16 max-w-3xl">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
        {heading}
      </div>
      <p className="text-base sm:text-lg text-muted leading-relaxed">
        {intro}
      </p>
      <ol className="mt-6 space-y-4">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <span className="font-mono text-xs text-muted mt-1 shrink-0 w-6">
              0{i + 1}
            </span>
            <div>
              <div className="font-medium">{s.title}</div>
              <div className="mt-1 text-sm text-muted leading-relaxed">
                {s.body}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Career() {
  return (
    <div className="mt-16 max-w-3xl border-l-2 border-border pl-5">
      <div className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
        Day job & history
      </div>
      <p className="text-sm sm:text-base text-muted leading-relaxed">
        {ABOUT.career}
      </p>
    </div>
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
