import { fetchRepos } from "@/lib/github";
import { ProjectCard } from "./ProjectCard";

export async function Projects() {
  const repos = await fetchRepos();
  const featured = repos.filter((r) => r.featured);
  const rest = repos.filter((r) => !r.featured);

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted mb-2">
            Weekend builds · shipped end-to-end with Claude Code
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Projects
          </h2>
        </div>
        <span className="font-mono text-xs text-muted shrink-0">
          {repos.length} {repos.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {repos.length === 0 ? (
        <p className="mt-8 text-muted">
          Couldn&apos;t load projects from GitHub. Try again in a moment.
        </p>
      ) : (
        <>
          {featured.length > 0 && (
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {featured.map((r) => (
                <ProjectCard key={r.name} repo={r} featured />
              ))}
            </div>
          )}

          {rest.length > 0 && (
            <div
              className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
                featured.length > 0 ? "mt-5" : "mt-8"
              }`}
            >
              {rest.map((r) => (
                <ProjectCard key={r.name} repo={r} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
