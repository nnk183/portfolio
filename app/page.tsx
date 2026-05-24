import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { ABOUT } from "@/lib/about";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 sm:px-8">
      <About />
      <Projects />
      <footer className="border-t border-border py-10 text-sm text-muted font-mono">
        © {new Date().getFullYear()} {ABOUT.name}
      </footer>
    </main>
  );
}
