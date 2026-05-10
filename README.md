# archidemus.github.io

Sitio personal de Ignacio Norambuena — Ing. Civil Informático UTFSM, CTO y co-fundador de Zentia.

## Stack

- [Astro](https://astro.build) + [TailwindCSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (React)
- Runtime: [Bun](https://bun.sh)
- Deploy: GitHub Pages (automático via GitHub Actions al hacer push a `main`)

## Desarrollo

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

## Estructura

```
src/
├── assets/         # Imágenes y recursos estáticos
├── components/
│   ├── ui/         # Componentes shadcn/ui
│   └── PersonalPortfolio.tsx  # Componente principal
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── globals.css
```

## Repo

GitHub: [archidemus/archidemus.github.io](https://github.com/archidemus/archidemus.github.io)
