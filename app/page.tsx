import { About, HowIWork, Personal, Books } from "@/components/About";
import { Receipts } from "@/components/Receipts";
import { Projects } from "@/components/Projects";
import { DotRail } from "@/components/DotRail";
import { ABOUT } from "@/lib/about";

export default function HomePage() {
  return (
    <>
      <DotRail />
      <main className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <About />
        <Receipts />
        <Projects />
        <HowIWork />
        <Personal />
        <Books />
        <Footer />
      </main>
    </>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-16 scroll-mt-8">
      <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
        <div className="font-mono text-xs uppercase tracking-widest text-accent-warm mb-3">
          Let&apos;s talk
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
          Looking for a leader who can build the system,
          <br className="hidden sm:block" /> not just write the doc?
        </h2>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
          The fastest way to reach me is email. I read every inbound from
          founders, hiring managers, and engineers building anything interesting
          at the seam between AI and operations.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${ABOUT.links.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium transition hover:opacity-90"
          >
            {ABOUT.links.email}
          </a>
          {ABOUT.links.linkedin && (
            <a
              href={ABOUT.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition hover:border-accent"
            >
              LinkedIn
            </a>
          )}
          {ABOUT.links.github && (
            <a
              href={ABOUT.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition hover:border-accent"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
      <div className="mt-10 text-xs text-muted font-mono">
        © {new Date().getFullYear()} {ABOUT.name} · Built with Claude Code
      </div>
    </footer>
  );
}
