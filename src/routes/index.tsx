import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wuji Labs — A studio for cognition, systems & AI" },
      {
        name: "description",
        content:
          "Wuji Labs is a personal AI-native studio exploring cognition, learning systems, and human-centered technology in the age of AI.",
      },
      { property: "og:title", content: "Wuji Labs" },
      {
        property: "og:description",
        content:
          "Building systems that help humans think, learn, and create better in the age of AI.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap",
      },
    ],
  }),
  component: Index,
});

const explorations = [
  {
    no: "01",
    title: "AI-assisted credential translation",
    body: "Building systems for translating professional knowledge across languages, contexts, and AI workflows.",
  },
  {
    no: "02",
    title: "Cognitive workflow architecture",
    body: "Designing the shape of thought — how attention, memory, and tools move together.",
  },
  {
    no: "03",
    title: "Human + AI learning systems",
    body: "Exploring environments where humans and intelligent systems learn alongside each other.",
  },
  {
    no: "04",
    title: "Knowledge systems for deep work",
    body: "Creating quiet infrastructure for sustained thinking, reflection, and long-term creative work.",
  },
  {
    no: "05",
    title: "Long-term AI-native thinking tools",
    body: "Designing tools intended to support ongoing thought, learning, and creation over time.",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10">
        <div className="flex items-center gap-3 text-sm tracking-[0.2em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground/70" />
          WUJI&nbsp;LABS
        </div>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#philosophy" className="transition-colors hover:text-foreground">Philosophy</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-32 md:px-10 md:pt-32 md:pb-48">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <p className="fade-in mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Founder &nbsp;·&nbsp; Chief Architect
            </p>
            <h1 className="fade-up font-display text-6xl font-light leading-[0.95] tracking-tight text-balance text-ink md:text-8xl">
              Wuji&nbsp;Labs
            </h1>
            <p className="fade-up fade-up-delay-2 mt-10 max-w-2xl text-pretty text-xl font-light leading-relaxed text-foreground/90 md:text-2xl">
              Building systems that help humans think, learn, and create better
              in the age of AI.
            </p>
            <p className="fade-up fade-up-delay-3 mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              A long-term exploration of cognition, systems, AI, and human potential.
            </p>
          </div>

          {/* Enso-inspired mark */}
          <div className="hidden md:col-span-4 md:flex md:items-start md:justify-end">
            <svg
              viewBox="0 0 200 200"
              className="enso h-44 w-44 opacity-60"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="100"
                cy="100"
                r="78"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="460 50"
                className="text-foreground/70"
              />
              <circle
                cx="100"
                cy="100"
                r="2"
                className="fill-foreground/60"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 border-t border-hairline"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-12 md:gap-10 md:px-10 md:py-40">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              ⟶ &nbsp; About
            </p>
            <h2 className="mt-6 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
              A quiet studio for thinking in public.
            </h2>
          </div>
          <div className="space-y-6 text-pretty text-lg font-light leading-relaxed text-foreground/85 md:col-span-7 md:col-start-6">
            <p>
              Wuji Labs is a personal, AI-native studio — a deliberate space
              for building, learning, and exploring the intersection of
              cognition, systems, and human-centered technology.
            </p>
            <p>
              The work here is intentionally long-term. It combines deep
              thinking with practical creation: experiments, workflows, tools,
              and ideas designed to help humans think, learn, and create more
              clearly in the age of AI.
            </p>
            <p>
              Less a traditional company than an evolving platform for
              exploration, Wuji Labs is a place for projects, reflections, and
              ongoing attempts to understand how humans and intelligent
              systems can grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Current Explorations */}
      <section
        id="work"
        className="relative z-10 border-t border-hairline"
      >
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                ⟶ &nbsp; Current explorations
              </p>
              <h2 className="mt-6 font-display text-3xl font-light leading-tight text-ink md:text-4xl">
                Threads currently being pulled.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ul className="divide-y divide-hairline border-y border-hairline">
                {explorations.map((item) => (
                  <li
                    key={item.no}
                    className="group grid grid-cols-[auto_1fr] gap-6 py-8 transition-colors md:grid-cols-[3rem_1fr_auto] md:gap-10"
                  >
                    <span className="font-mono text-xs text-muted-foreground/80 md:pt-1">
                      {item.no}
                    </span>
                    <div>
                      <h3 className="text-lg font-normal text-ink md:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="hidden self-start pt-2 font-mono text-xs text-muted-foreground/60 transition-transform group-hover:translate-x-1 group-hover:text-foreground/80 md:block"
                    >
                      ⟶
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="relative z-10 border-t border-hairline"
      >
        <div className="mx-auto max-w-4xl px-6 py-32 text-center md:px-10 md:py-48">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            無極 &nbsp;·&nbsp; Wújí
          </p>
          <blockquote className="mt-12 font-display text-4xl font-light italic leading-tight text-balance text-ink md:text-6xl">
            “From chaos,
            <br />
            clarity emerges.”
          </blockquote>
          <p className="mx-auto mt-14 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            Wuji — the boundless, the undivided — refers to the state before
            form. Wuji Labs takes its name from this idea: staying with
            complexity long enough to recognize patterns, and building
            systems that help humans think, learn, and create more clearly
            in the age of AI.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <span>Wuji Labs &nbsp;© 2026</span>
          <span className="font-mono text-[10px] tracking-[0.2em] normal-case text-muted-foreground/70">
            無 &nbsp;·&nbsp; built slowly, on purpose
          </span>
        </div>
      </footer>
    </main>
  );
}
