import { useEffect, useRef } from "react";
import me from "@/assets/me.webp";
import { Mail, ArrowDown, ExternalLink } from "lucide-react";
import { projects, stackGroups } from "@/data/portfolio";

/* ── Icons ── */

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

/* ── Hooks ── */

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-4");
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

/* ── Primitives ── */

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
      className={`translate-y-4 opacity-0 transition-all duration-500 ease-out ${className}`}
    >
      {children}
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-pixel tracking-label-sm text-primary text-[11px] uppercase">
      {"// "}
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-pixel text-headline-sm tracking-headline-sm text-foreground sm:text-headline-md sm:tracking-headline-md mt-2">
      {children}
    </h2>
  );
}

function DitherDivider() {
  return (
    <div className="mx-auto max-w-4xl px-4 md:px-16">
      <div className="dither-line" />
    </div>
  );
}

/* ── Data ── */

/* ── Main Component ── */

export default function PersonalPortfolio() {
  return (
    <div className="min-h-screen">
      {/* ── Header ── */}
      <header className="border-border bg-background fixed top-0 right-0 left-0 z-50 border-b">
        <nav
          aria-label="Navegación principal"
          className="mx-auto flex h-12 max-w-4xl items-center justify-between px-4 md:px-16"
        >
          <a href="#hero" className="font-pixel tracking-label text-primary text-sm">
            IN_
          </a>
          <div className="font-pixel tracking-label-sm text-muted-foreground hidden items-center gap-6 text-[11px] uppercase sm:flex">
            <a href="#about" className="hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#stack" className="hover:text-primary transition-colors">
              Stack
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <Section
          id="hero"
          ariaLabel="Presentación"
          className="flex min-h-screen items-center justify-center px-4 pt-12 md:px-16"
        >
          <div className="max-w-3xl text-center">
            {/* Photo — sharp, 1px teal border */}
            <img
              src={me.src}
              alt="Foto de Ignacio Norambuena, Ingeniero Civil Informático y CTO de Zentia"
              width={112}
              height={112}
              className="border-primary mx-auto mb-8 h-28 w-28 border object-cover"
            />

            {/* Name — GeistPixel, the pixel IS the texture */}
            <h1 className="font-pixel-grid text-headline-lg-mobile tracking-headline text-foreground sm:text-headline-lg sm:tracking-headline mb-4">
              Ignacio Norambuena
            </h1>

            {/* Role — pixel font, uppercase, blinking cursor */}
            <p className="font-pixel tracking-label-sm text-primary mb-2 inline-flex items-center gap-1 text-[11px] uppercase sm:text-xs">
              <span>&gt; Ing. Civil Informático // CTO @ Zentia</span>
              <span className="animate-blink bg-primary inline-block h-3.5 w-2 align-middle" />
            </p>

            <p className="text-body-md tracking-body text-muted-foreground mx-auto mt-4 mb-8 max-w-lg">
              Apasionado por crear soluciones tecnológicas que impactan.
            </p>

            {/* Social links — chamfered pixel buttons */}
            <div className="mb-12 flex justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/inorambuenaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de Ignacio Norambuena"
                className="btn-chamfer hover:bg-dither-teal border-border font-pixel tracking-label-sm text-foreground hover:border-primary inline-flex items-center gap-2 border px-4 py-2 text-[11px] uppercase transition-colors"
              >
                <LinkedInIcon className="h-3.5 w-3.5" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/archidemus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub de Ignacio Norambuena"
                className="btn-chamfer hover:bg-dither-teal border-border font-pixel tracking-label-sm text-foreground hover:border-primary inline-flex items-center gap-2 border px-4 py-2 text-[11px] uppercase transition-colors"
              >
                <GitHubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                GitHub
              </a>
            </div>

            {/* Scroll indicator */}
            <a
              href="#about"
              aria-label="Ir a sección Sobre mí"
              className="text-muted-foreground hover:text-primary inline-block transition-colors"
            >
              <ArrowDown className="mx-auto h-4 w-4 animate-bounce" aria-hidden="true" />
            </a>
          </div>
        </Section>

        <DitherDivider />

        {/* ── About ── */}
        <Section id="about" ariaLabel="Sobre mí" className="px-4 py-20 md:px-16">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>Sobre mí</SectionLabel>
            <SectionTitle>Sobre mí</SectionTitle>
            <div className="text-body-md tracking-body text-muted-foreground sm:text-body-lg mt-6 space-y-4">
              <p>
                Ing. Civil Informático de la UTFSM con 8 años de experiencia en desarrollo de
                software. Pasé por fintech (Penta), startups (Centry), y lideré equipos como tech
                lead en Unholster, donde desarrollé plataformas con diversas tecnologías. Fui CPO de
                Trazit (ex Cumpl.io), startup seleccionada en Start-Up Chile SUP 10 (Build).
              </p>
              <p>
                Hoy soy CTO y co-fundador de&nbsp;
                <span className="text-foreground">Zentia</span>, un sistema de monitoreo del ciclo
                minero basado en IoT. Paralelamente, lidero la automatización operacional de{" "}
                <span className="text-foreground">CPS Ingeniería</span> — empresa familiar de
                ingeniería eléctrica — donde diseñamos soluciones para clientes como Anglo American
                y CODELCO.
              </p>
            </div>
          </div>
        </Section>

        <DitherDivider />

        {/* ── Projects ── */}
        <Section id="projects" ariaLabel="Proyectos" className="px-4 py-20 md:px-16">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>Proyectos</SectionLabel>
            <SectionTitle>Proyectos</SectionTitle>
            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`pixel-card inner-glow border p-6 ${
                    project.featured ? "border-primary" : "border-border"
                  }`}
                >
                  {/* Header row */}
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="font-pixel tracking-headline text-foreground text-base sm:text-lg">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="animate-pixel-pulse border-primary font-pixel tracking-label-sm text-primary inline-flex items-center gap-1.5 border px-2 py-0.5 text-[10px] uppercase">
                          <span
                            className="bg-primary inline-block h-1.5 w-1.5"
                            aria-hidden="true"
                          />
                          Destacado
                        </span>
                      )}
                      <ExternalLink
                        className="text-muted-foreground h-3.5 w-3.5 shrink-0"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="tracking-body text-foreground mb-1 text-sm">
                    {project.description}
                  </p>
                  <p className="tracking-body text-muted-foreground mb-1 text-sm">
                    {project.details}
                  </p>
                  {project.role && (
                    <p className="tracking-body text-muted-foreground text-sm italic">
                      {project.role}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </Section>

        <DitherDivider />

        {/* ── Stack ── */}
        <Section
          id="stack"
          ariaLabel="Stack tecnológico y habilidades"
          className="px-4 py-20 md:px-16"
        >
          <div className="mx-auto max-w-4xl">
            <SectionLabel>Stack</SectionLabel>
            <SectionTitle>Stack y habilidades</SectionTitle>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {stackGroups.map((group) => (
                <div key={group.label} className="inner-glow border-border border p-5">
                  <h3 className="font-pixel tracking-label-sm text-primary mb-3 text-[11px] uppercase">
                    {group.label}
                  </h3>
                  <ul className="flex flex-wrap gap-2" aria-label={`Habilidades en ${group.label}`}>
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        <span className="border-border font-pixel tracking-label-sm text-muted-foreground hover:border-primary hover:text-foreground border px-2.5 py-1 text-[11px] transition-colors">
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

        <DitherDivider />

        {/* ── Contact ── */}
        <Section id="contact" ariaLabel="Contacto" className="px-4 pt-20 pb-28 md:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>Contacto</SectionLabel>
            <SectionTitle>Conversemos</SectionTitle>
            <p className="text-body-md tracking-body text-muted-foreground mt-3 mb-6">
              Siempre abierto a conversar sobre tecnología, IoT, minería o cualquier proyecto
              interesante.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/inorambuenaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por LinkedIn"
                className="btn-chamfer hover:bg-dither-teal border-border font-pixel tracking-label-sm text-foreground hover:border-primary inline-flex items-center gap-2 border px-4 py-2 text-[11px] uppercase transition-colors"
              >
                <LinkedInIcon className="h-3.5 w-3.5" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://github.com/archidemus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver perfil de GitHub"
                className="btn-chamfer hover:bg-dither-teal border-border font-pixel tracking-label-sm text-foreground hover:border-primary inline-flex items-center gap-2 border px-4 py-2 text-[11px] uppercase transition-colors"
              >
                <GitHubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                GitHub
              </a>
              <a
                href="mailto:ignacio@archidemus.me"
                aria-label="Enviar email a ignacio@archidemus.me"
                className="btn-chamfer hover:bg-dither-teal border-border font-pixel tracking-label-sm text-foreground hover:border-primary inline-flex items-center gap-2 border px-4 py-2 text-[11px] uppercase transition-colors"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                Email
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-border border-t py-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 md:px-16">
          <p className="font-pixel tracking-label-sm text-muted-foreground text-[11px]">
            &copy;{" "}
            <time dateTime={new Date().getFullYear().toString()}>{new Date().getFullYear()}</time>{" "}
            Ignacio Norambuena
          </p>
          <span
            className="animate-pixel-pulse border-primary bg-primary inline-block h-2 w-2 border"
            aria-hidden="true"
          />
        </div>
      </footer>
    </div>
  );
}
