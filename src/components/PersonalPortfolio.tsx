import { useEffect, useRef } from "react";
import me from "@/assets/me.jpg";
import { Mail, ArrowDown, ExternalLink } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-6");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Section({
  id,
  children,
  className = "",
  ariaLabel,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useFadeIn();
  return (
    <section
      id={id}
      ref={ref}
      aria-label={ariaLabel}
      className={`translate-y-6 opacity-0 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </section>
  );
}

function SectionTitle({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="mb-6 text-2xl font-bold tracking-tight text-foreground">
      {children}
    </h2>
  );
}

const projects = [
  {
    title: "Zentia",
    featured: true,
    description: "Sistema de monitoreo del ciclo minero basado en IoT",
    details:
      "Red de sensores autónomos BLE que trackea personas, equipos y variables ambientales en tiempo real bajo tierra.",
    role: "CTO y co-fundador. Arquitectura full-stack: firmware C++, backend, frontend. MVP construido 100% por mí.",
  },
  {
    title: "CPS Ingeniería",
    featured: false,
    description: "Automatización operacional para empresa de ingeniería eléctrica fundada en 1997",
    details:
      "Sistemas de autmatización para minería. Pipeline automático de licitaciones. Cotizador paramétrico. Mejoras de productividad con IA.",
  },
];

const stackGroups = [
  {
    label: "Full-stack",
    items: ["React 19", "TypeScript", "Astro", "Tailwind", "Hono", "Bun"],
  },
  {
    label: "IoT & Embedded",
    items: ["C++", "PlatformIO", "ESP32", "BLE"],
  },
  {
    label: "Data & Backend",
    items: ["PostgreSQL", "Supabase", "Python"],
  },
  {
    label: "Automatización",
    items: ["Claude Code", "Playwright", "Pipelines IMAP", "GitHub Actions"],
  },
];

export default function PersonalPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6"
        >
          <a href="#hero" className="text-sm font-semibold tracking-tight text-foreground">
            IN
          </a>
          <div className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#about" className="transition-colors hover:text-foreground">
              Sobre mí
            </a>
            <a href="#projects" className="transition-colors hover:text-foreground">
              Proyectos
            </a>
            <a href="#stack" className="transition-colors hover:text-foreground">
              Stack
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main>
        <Section
          id="hero"
          ariaLabel="Presentación"
          className="flex min-h-screen items-center justify-center px-6 pt-14"
        >
          <div className="max-w-3xl text-center">
            <img
              src={me.src}
              alt="Foto de Ignacio Norambuena, Ingeniero Civil Informático y CTO de Zentia"
              width={112}
              height={112}
              className="mx-auto mb-8 h-28 w-28 rounded-full object-cover ring-2 ring-border"
            />
            <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Ignacio Norambuena
            </h1>
            <p className="mb-4 text-lg text-muted-foreground">
              Co-fundador & CTO de Zentia &nbsp;|&nbsp; Ing. Civil Informático UTFSM
            </p>
            <p className="mx-auto mb-8 max-w-xl text-base text-muted-foreground">
              Construyo software que resuelve problemas reales.
            </p>
            <div className="mb-12 flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/inorambuenaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Ignacio Norambuena"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/archidemus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Ignacio Norambuena"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
            <a
              href="#about"
              aria-label="Ir a sección Sobre mí"
              className="inline-block animate-bounce text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </Section>

        <Section id="about" ariaLabel="Sobre mí" className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle id="about-title">Sobre mí</SectionTitle>
            <div
              className="space-y-4 leading-relaxed text-muted-foreground"
              aria-labelledby="about-title"
            >
              <p>
                Ing. Civil Informático de la UTFSM con 8 años de experiencia en desarrollo de
                software. Pasé por fintech (Penta), startups (Centry), y lideré equipos como tech
                lead en Unholster, donde desarrollé plataformas con diversas tecnologías. Fui CPO de
                Trazit (ex Cumpl.io), startup seleccionada en Start-Up Chile SUP 10 (Build).
              </p>
              <p>
                Hoy soy CTO y co-fundador de Zentia, un sistema de monitoreo del ciclo minero basado
                en IoT. Paralelamente, lidero la automatización operacional de CPS Ingeniería —
                empresa familiar de ingeniería eléctrica — donde diseñamos soluciones para clientes
                como Anglo American y CODELCO.
              </p>
            </div>
          </div>
        </Section>

        <Section id="projects" ariaLabel="Proyectos" className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle id="projects-title">Proyectos</SectionTitle>
            <div className="space-y-5" role="list" aria-labelledby="projects-title">
              {projects.map((project) => (
                <article
                  key={project.title}
                  role="listitem"
                  className={`rounded-xl border bg-card p-6 ${
                    project.featured ? "border-accent ring-1 ring-accent" : "border-border"
                  }`}
                >
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      {project.title}
                      {project.featured && (
                        <span className="rounded-full border border-accent bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                          Destacado
                        </span>
                      )}
                    </h3>
                    <ExternalLink
                      className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mb-2 text-sm text-foreground">{project.description}</p>
                  <p className="mb-1 text-sm text-muted-foreground">{project.details}</p>
                  {project.role && (
                    <p className="text-sm italic text-muted-foreground">{project.role}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="stack" ariaLabel="Stack tecnológico y habilidades" className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle id="stack-title">Stack y habilidades</SectionTitle>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2" aria-labelledby="stack-title">
              {stackGroups.map((group) => (
                <div key={group.label} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="mb-3 text-sm font-semibold text-foreground">{group.label}</h3>
                  <ul className="flex flex-wrap gap-2" aria-label={`Habilidades en ${group.label}`}>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="rounded-lg bg-secondary px-3 py-1.5 text-sm text-secondary-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="contact" ariaLabel="Contacto" className="px-6 pb-32 pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle id="contact-title">Conversemos</SectionTitle>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/inorambuenaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por LinkedIn"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/archidemus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver perfil de GitHub"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
              <a
                href="mailto:ignacio@archidemus.me"
                aria-label="Enviar email a ignacio@archidemus.me"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        <p>
          <span>&copy;</span>{" "}
          <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear()}</time>{" "}
          Ignacio Norambuena
        </p>
      </footer>
    </div>
  );
}
