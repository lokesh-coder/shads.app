import { describe, expect, it } from "vitest"

import { createDefaultConfig, createDefaultShadcnConfig } from "@/lib/theme-config"
import { getChangedExportSections } from "@/lib/export-plan"
import {
  generateAll,
  generateBrandCss,
  generateBrandSemanticCss,
  generateDensityCss,
  generateFocusCss,
  generateIndexCss,
  generateNeutralCss,
  generateOverlaysCss,
  generateSurfacesCss,
  generateThemeBundleFromSections,
} from "@/lib/theme-codegen"

describe("theme-codegen", () => {
  const config = createDefaultConfig()

  it("generates neutral css with all steps", () => {
    const css = generateNeutralCss(config)
    expect(css).toContain("--neutral-900: #18181b")
  })

  it("generates brand css from roles", () => {
    const css = generateBrandCss(config)
    expect(css).toMatchSnapshot()
    expect(css).toContain("--brand-600: #6a5d80")
  })

  it("generates role-based semantic css", () => {
    const css = generateBrandSemanticCss(config)
    expect(css).toMatchSnapshot()
    expect(css).toContain("--foreground: var(--neutral-900)")
    expect(css).toContain("--primary: var(--brand-600)")
    expect(css).toContain("--secondary: var(--neutral-100)")
    expect(css).toContain("--chart-1: #6a5d80")
    expect(css).toContain("--chart-2: #0891b2")
  })

  it("updates primary step when mapping changes", () => {
    const updated = {
      ...config,
      semanticMapping: {
        ...config.semanticMapping,
        light: { ...config.semanticMapping.light, primary: 500 as const },
      },
    }
    const css = generateBrandSemanticCss(updated)
    expect(css).toContain("--primary: var(--brand-500)")
  })

  it("generates surfaces css", () => {
    expect(generateSurfacesCss(config)).toMatchSnapshot()
  })

  it("generates overlays css", () => {
    expect(generateOverlaysCss(config)).toMatchSnapshot()
  })

  it("generates focus css", () => {
    const css = generateFocusCss(config)
    expect(css).toMatchSnapshot()
    expect(css).toContain("--focus-border:")
  })

  it("generates density css", () => {
    const css = generateDensityCss(config)
    expect(css).toMatchSnapshot()
    expect(css).toContain("--density-control-height:")
    expect(css).toContain('[data-slot="button"]')
  })

  it("compact density changes control height", () => {
    const css = generateDensityCss({
      ...config,
      density: {
        ...config.density,
        controlHeight: "1.75rem",
        controlHeightSm: "1.5rem",
      },
    })
    expect(css).toContain("1.75rem")
    expect(css).toContain("--density-control-height: 1.75rem")
  })

  it("wires fonts through runtime css variables for live updates", () => {
    const css = generateIndexCss({
      ...config,
      fonts: { sans: "geist", heading: "geist", mono: "jetbrains-mono" },
    })
    expect(css).toContain("--font-family-sans: 'Geist Variable', sans-serif")
    expect(css).toContain("--font-sans: var(--font-family-sans)")
    expect(css).toContain('@import "@fontsource-variable/geist"')
    expect(css).toContain('@import "@fontsource-variable/jetbrains-mono"')
  })

  it("imports only the theme bundle from index.css", () => {
    const minimal = {
      ...config,
      layers: {
        ...config.layers,
        brandSemantic: false,
        surfaces: false,
        overlays: false,
        focus: false,
      },
    }
    const css = generateIndexCss(minimal)
    expect(css).toContain('@import "./styles/theme.css";')
    expect(css).not.toContain("neutral.css")
    expect(css).not.toContain("brand-semantic.css")
    expect(css).not.toContain("brand-secondary.css")
  })

  it("theme bundle includes only changed sections", () => {
    const baseline = createDefaultShadcnConfig()
    const sections = getChangedExportSections({
      ...baseline,
      layers: { ...baseline.layers, surfaces: true },
    })
    expect(sections).not.toContain("surfaces")

    const bundle = generateThemeBundleFromSections(baseline, ["typography"])
    expect(bundle).toContain("OPTIONAL: Typography")
    expect(bundle).not.toContain("Neutral ramp")
    expect(bundle).not.toContain("--background: oklch")
  })

  it("theme bundle includes semantic path when brand semantic is enabled", () => {
    const config = createDefaultConfig()
    const sections = getChangedExportSections(config)
    expect(sections).toContain("semantic")

    const all = generateAll(config)
    expect(all.isEmpty).toBe(false)
    expect(all.theme).toContain("Role-based semantic wiring")
    expect(all.theme).toContain("UI neutral ramp")
    expect(all.index).toBeNull()
  })

  it("default shadcn has nothing to export", () => {
    const all = generateAll(createDefaultShadcnConfig())
    expect(all.isEmpty).toBe(true)
    expect(all.sections).toEqual([])
    expect(all.index).toBeNull()
    expect(all.theme).toBeNull()
    expect(all.quickStart).toContain("no custom files")
  })

  it("typography-only change exports minimal delta", () => {
    const config = {
      ...createDefaultShadcnConfig(),
      typeScale: {
        ...createDefaultShadcnConfig().typeScale,
        rootSize: "14px",
      },
    }
    const all = generateAll(config)
    expect(all.isEmpty).toBe(false)
    expect(all.sections).toEqual(["typography"])
    expect(all.theme).toContain("OPTIONAL: Typography")
    expect(all.theme).not.toContain("UI neutral ramp")
    expect(all.theme).not.toContain("--background: oklch")
    expect(all.index).toBeNull()
  })

  it("font change exports index snippet only", () => {
    const config = {
      ...createDefaultShadcnConfig(),
      fonts: {
        ...createDefaultShadcnConfig().fonts,
        sans: "geist",
      },
    }
    const all = generateAll(config)
    expect(all.sections).toEqual(["fonts"])
    expect(all.index).toContain("Add to src/index.css")
    expect(all.index).toContain('@import "@fontsource-variable/geist"')
    expect(all.index).toContain("--font-family-sans: 'Geist Variable'")
    expect(all.index).not.toContain("tailwindcss")
    expect(all.index).not.toContain("--color-background")
    expect(all.theme).toBeNull()
  })

  it("font change includes font imports only", () => {
    const config = {
      ...createDefaultShadcnConfig(),
      fonts: { sans: "geist", heading: "geist", mono: "jetbrains-mono" },
    }
    const all = generateAll(config)
    expect(all.sections).toContain("fonts")
    expect(all.index).toContain('@import "@fontsource-variable/geist"')
    expect(all.theme).toBeNull()
  })
})
