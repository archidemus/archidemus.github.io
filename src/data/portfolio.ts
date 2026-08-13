export interface Project {
  title: string;
  featured: boolean;
  description: string;
  details: string;
  role?: string;
  url?: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export const projects: Project[] = [
  {
    title: "Zentia",
    featured: true,
    description: "Sistema de monitoreo del ciclo minero basado en IoT",
    details:
      "Red de sensores autónomos BLE que trackea personas, equipos y variables ambientales en tiempo real bajo tierra.",
    role: "CTO y co-fundador. Arquitectura full-stack: firmware C++, backend, frontend. MVP construido 100% por mí.",
    url: "https://zentialab.cl",
  },
  {
    title: "CPS Ingeniería",
    featured: false,
    description: "Automatización operacional para empresa de ingeniería eléctrica fundada en 1997",
    details:
      "Sistemas de automatización para minería. Pipeline automático de licitaciones. Cotizador paramétrico. Mejoras de productividad con IA.",
    url: "https://www.cpsingenieria.cl",
  },
];

export const stackGroups: StackGroup[] = [
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
