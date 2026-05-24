import {
  ALLOWLIST,
  DENYLIST,
  FEATURED,
  GITHUB_USERNAME,
  MANUAL_PROJECTS,
  OVERRIDES,
  SHOW_GITHUB_REPOS,
} from "./projects-config";

export type Repo = {
  name: string;
  title: string;
  description: string;
  htmlUrl: string | null;
  liveUrl: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
  featured: boolean;
  image?: string;
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
};

export async function fetchRepos(): Promise<Repo[]> {
  const manual: Repo[] = MANUAL_PROJECTS.map((p) => ({
    name: p.name,
    title: p.title,
    description: p.description,
    htmlUrl: p.repoUrl ?? null,
    liveUrl: p.liveUrl,
    language: p.language ?? null,
    stars: 0,
    forks: 0,
    topics: p.tags ?? [],
    updatedAt: new Date().toISOString(),
    featured: p.featured ?? false,
    image: p.image,
  }));

  if (!SHOW_GITHUB_REPOS) return manual;

  const gh = await fetchGithubRepos();
  // Manual entries first (preserving their order), then GitHub.
  // Avoid duplicates by name.
  const manualNames = new Set(manual.map((m) => m.name));
  return [...manual, ...gh.filter((r) => !manualNames.has(r.name))];
}

async function fetchGithubRepos(): Promise<Repo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
    {
      headers,
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    console.error(`GitHub API error: ${res.status} ${res.statusText}`);
    return [];
  }

  const data = (await res.json()) as GitHubRepo[];

  const filtered = data.filter((r) => {
    if (r.fork || r.archived || r.private) return false;
    if (DENYLIST.includes(r.name)) return false;
    if (ALLOWLIST.length > 0 && !ALLOWLIST.includes(r.name)) return false;
    return true;
  });

  const repos: Repo[] = filtered.map((r) => {
    const override = OVERRIDES[r.name] ?? {};
    return {
      name: r.name,
      title: override.title ?? prettify(r.name),
      description:
        override.description ?? r.description ?? "No description yet.",
      htmlUrl: r.html_url,
      liveUrl: override.liveUrl ?? (r.homepage?.trim() ? r.homepage : null),
      language: r.language,
      stars: r.stargazers_count,
      forks: r.forks_count,
      topics: override.tags ?? r.topics ?? [],
      updatedAt: r.updated_at,
      featured: FEATURED.includes(r.name),
      image: override.image,
    };
  });

  return repos.sort((a, b) => {
    const aF = FEATURED.indexOf(a.name);
    const bF = FEATURED.indexOf(b.name);
    if (aF !== -1 || bF !== -1) {
      if (aF === -1) return 1;
      if (bF === -1) return -1;
      return aF - bF;
    }
    return b.updatedAt.localeCompare(a.updatedAt);
  });
}

function prettify(name: string): string {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
