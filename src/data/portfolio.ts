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
  description: string;
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
    label: "Sistemas end-to-end",
    description:
      "Conecto investigación con usuarios, decisiones de producto y arquitectura para llevar una idea desde su definición hasta producción.",
    items: ["Producto digital", "Full-stack", "Arquitectura", "MVPs"],
  },
  {
    label: "IoT e industria",
    description:
      "Integro firmware, sensores, datos y software para resolver problemas de operación en terreno, con experiencia en minería y automatización.",
    items: ["IoT", "Firmware", "Sensores", "Minería"],
  },
  {
    label: "IA aplicada",
    description:
      "Uso intensivamente IA en el desarrollo y la operación de mis proyectos: prototipado, agentes y automatización de tareas, con criterio técnico para revisar sus resultados.",
    items: ["Automatización con IA", "Agentes", "Pipelines inteligentes", "Prototipado"],
  },
  {
    label: "Liderazgo técnico",
    description:
      "Traduzco necesidades de negocio en decisiones técnicas. Defino estándares, acompaño equipos y conecto producto, datos e ingeniería.",
    items: ["Estrategia técnica", "Producto", "Equipos", "Operaciones"],
  },
];

export const experience = [
  {
    company: "Zentia",
    period: "Feb 2026 — presente",
    role: "Co-fundador y CTO",
    description:
      "Construyo tecnología para el monitoreo del ciclo minero, conectando sensores, firmware y plataformas de software.",
  },
  {
    company: "Cumpl.io",
    period: "Abr 2025 — feb 2026",
    role: "Chief Product Officer",
    description:
      "Lideré el diseño y desarrollo de producto, desde investigación con usuarios hasta definición de la solución. Experiencia directa con aceleradoras y gestión de fondos públicos a través de Start-Up Chile y FitPyme (CChC).",
  },
  {
    company: "Unholster",
    period: "Jul 2020 — feb 2025",
    role: "Full Stack Developer → Frontend Technical Leader",
    description:
      "Lideré plataformas de datos públicos como DecideChile, con resultados electorales en tiempo real y exigencias de precisión y rendimiento. Definí estándares y herramientas internas, asesoré decisiones de arquitectura y conecté equipos de datos e ingeniería.",
  },
  {
    company: "Penta Financiero",
    period: "Sep 2018 — ago 2019",
    role: "Full Stack Developer",
    description:
      "Participé en la transformación digital de la compañía desde front-end, DevOps y arquitectura: microservicios, BFF y escalado horizontal. Una experiencia que me enseñó a abordar también el cambio cultural y la adopción de productos.",
  },
  {
    company: "Proyectos independientes",
    period: "2014 — 2018",
    role: "Software Developer · part-time",
    description:
      "Desarrollé soluciones web, móviles y de comercio electrónico. Participé en la app Mi Salcobrand y optimicé un sistema de reportería para Fundación Ciudades, además de proyectos de scraping y migración de plataformas.",
  },
];
