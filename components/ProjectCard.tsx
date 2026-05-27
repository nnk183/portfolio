import type { Repo } from "@/lib/github";
import { ExternalLink, Github, Lock, Star } from "./icons";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  Shell: "#89e051",
};

function formatLaunchDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function ProjectCard({
  repo,
  featured = false,
}: {
  repo: Repo;
  featured?: boolean;
}) {
  if (repo.status === "secret") {
    return <SecretCard />;
  }

  const isUpcoming = repo.status === "upcoming";
  const showLive = repo.status !== "upcoming" && repo.liveUrl;

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border bg-card p-6 transition hover:-translate-y-1 ${
        featured ? "sm:p-8" : ""
      } ${
        isUpcoming
          ? "border-dashed border-border hover:border-accent-warm"
          : "border-border hover:border-accent"
      }`}
    >
      {isUpcoming && repo.launchDate && (
        <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-warm/40 bg-accent-warm/10 px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-accent-warm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-warm animate-pulse" />
          Launching {formatLaunchDate(repo.launchDate)}
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            className={`font-semibold tracking-tight ${
              featured ? "text-2xl" : "text-lg"
            }`}
          >
            {repo.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-muted truncate">
            {repo.name}
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted shrink-0">
          {repo.stars > 0 && (
            <span className="inline-flex items-center gap-1">
              <Star className="h-3.5 w-3.5" />
              {repo.stars}
            </span>
          )}
        </div>
      </div>

      <p
        className={`mt-3 text-muted leading-relaxed ${
          featured ? "text-base" : "text-sm"
        }`}
      >
        {repo.description}
      </p>

      {repo.topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2 py-0.5 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {isUpcoming && repo.progress != null && (
        <div className="mt-5">
          <div className="flex items-baseline justify-between font-mono text-xs">
            <span className="uppercase tracking-widest text-muted">
              Progress
            </span>
            <span className="text-foreground">{repo.progress}%</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-accent-warm transition-all"
              style={{ width: `${repo.progress}%` }}
            />
          </div>
        </div>
      )}

      <div className="mt-auto pt-5 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted">
          {repo.language && (
            <>
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor:
                    LANGUAGE_COLORS[repo.language] ?? "#9ca3af",
                }}
                aria-hidden="true"
              />
              <span>{repo.language}</span>
            </>
          )}
        </div>

        <div className="flex items-center gap-3 text-muted">
          {showLive && (
            <a
              href={repo.liveUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition"
              aria-label="Live site"
            >
              <ExternalLink />
              <span>Live</span>
            </a>
          )}
          {repo.htmlUrl && (
            <a
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-foreground transition"
              aria-label="GitHub repo"
            >
              <Github />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function SecretCard() {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-dashed border-border bg-card p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 12px)",
        }}
      />

      <div className="relative">
        <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-xs uppercase tracking-widest text-muted">
          <Lock className="h-3 w-3" />
          Stealth project
        </div>

        <h3 className="font-mono text-lg font-semibold tracking-tight">
          ███ ████████ ████████
        </h3>
        <p className="mt-1 font-mono text-xs text-muted">
          ████████-████████-████████
        </p>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          Currently in private development.{" "}
          <span className="select-none rounded-sm bg-foreground/80 px-1 text-transparent">
            Pipeline that touches generation, synthesis, and distribution.
          </span>{" "}
          Details available under NDA.
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted">
            ████████
          </span>
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted">
            ████
          </span>
          <span className="rounded-full border border-border px-2 py-0.5 font-mono text-xs text-muted">
            ██████
          </span>
        </div>

        <div className="mt-auto pt-5 flex items-center justify-between font-mono text-xs text-muted">
          <span className="uppercase tracking-widest">// access restricted</span>
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3 w-3" />
            Private
          </span>
        </div>
      </div>
    </article>
  );
}
