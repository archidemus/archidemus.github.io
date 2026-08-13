import { defineConfig } from "vitest/config";

// Estándar — coverage de RAMAS ≥ 80% (no de líneas).
// src/components/** excluido: JSX estático sin lógica (decision documentada en estandar/).
export default defineConfig({
  test: {
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx,js,jsx}"],
      exclude: ["src/**/*.d.ts", "src/**/*.test.*", "src/env.d.ts", "src/components/**"],
      thresholds: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80,
      },
    },
  },
});
