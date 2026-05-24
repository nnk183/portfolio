import { ABOUT } from "@/lib/about";
import { Github, Mail, Linkedin, Twitter, FileText } from "./icons";

export function About() {
  const links = ABOUT.links;
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div className="text-sm text-muted mb-4 font-mono">hi, i'm</div>
      <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
        {ABOUT.name}
      </h1>
      <p className="mt-3 text-xl sm:text-2xl text-muted">{ABOUT.tagline}</p>

      <div className="mt-8 max-w-2xl space-y-4 text-base sm:text-lg leading-relaxed">
        {ABOUT.intro.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
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
