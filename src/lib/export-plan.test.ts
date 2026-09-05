import { describe, expect, it } from "vitest"

import {
  EXPORT_SECTION_ORDER,
  getChangedExportSections,
  getExportBaseline,
} from "@/lib/export-plan"
import { createDefaultConfig, createDefaultShadcnConfig } from "@/lib/theme-config"

describe("export-plan", () => {
  it("returns empty sections for stock shadcn baseline", () => {
    expect(getChangedExportSections(createDefaultShadcnConfig())).toEqual([])
  })

  it("detects typography-only changes", () => {
    const baseline = getExportBaseline()
    const sections = getChangedExportSections({
      ...baseline,
      typeScale: { ...baseline.typeScale, rootSize: "15px" },
    })
    expect(sections).toEqual(["typography"])
  })

  it("detects preset-level diffs from builder default", () => {
    const sections = getChangedExportSections(createDefaultConfig())
    expect(sections.length).toBeGreaterThan(0)
    expect(sections).toContain("semantic")
    expect(sections).toContain("personality")
    expect(EXPORT_SECTION_ORDER).toEqual(expect.arrayContaining(sections))
  })
})
