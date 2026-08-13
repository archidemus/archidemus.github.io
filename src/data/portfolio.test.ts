import { describe, expect, it } from "vitest";
import { projects, stackGroups, featuredProjects } from "./portfolio";

describe("projects", () => {
  it("tiene al menos un proyecto destacado y uno no destacado", () => {
    expect(projects.some((p) => p.featured)).toBe(true);
    expect(projects.some((p) => !p.featured)).toBe(true);
  });

  it("tiene títulos únicos (claves React estables)", () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("cada proyecto tiene descripción y detalles no vacíos", () => {
    for (const project of projects) {
      expect(project.description.trim().length).toBeGreaterThan(0);
      expect(project.details.trim().length).toBeGreaterThan(0);
    }
  });

  it("los proyectos destacados tienen rol (se renderiza en la tarjeta)", () => {
    for (const project of featuredProjects()) {
      expect(project.role?.trim().length).toBeGreaterThan(0);
    }
  });

  it("featuredProjects() devuelve exactamente los proyectos con featured=true", () => {
    const expected = projects.filter((p) => p.featured);
    expect(featuredProjects()).toEqual(expected);
    expect(featuredProjects().every((p) => p.featured)).toBe(true);
  });
});

describe("stackGroups", () => {
  it("tiene etiquetas únicas y no vacías", () => {
    const labels = stackGroups.map((g) => g.label);
    expect(new Set(labels).size).toBe(labels.length);
    for (const label of labels) {
      expect(label.trim().length).toBeGreaterThan(0);
    }
  });

  it("cada grupo tiene al menos un ítem", () => {
    for (const group of stackGroups) {
      expect(group.items.length).toBeGreaterThan(0);
    }
  });

  it("ningún ítem se repite entre grupos", () => {
    const items = stackGroups.flatMap((g) => g.items);
    expect(new Set(items).size).toBe(items.length);
  });
});
