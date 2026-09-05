import { describe, expect, it } from "vitest"

import { createDefaultConfig } from "@/lib/theme-config"
import {
  applyThemeBrief,
  buildThemeBriefPrompt,
  extractJsonFromAiResponse,
  parseThemeBriefInput,
  validateThemeBrief,
} from "@/lib/theme-brief"

const SAMPLE_BRIEF = {
  $schema: "shadstyle-theme-brief/v1",
  name: "Calm workspace",
  basePreset: "workspace",
  brand: {
    primary: "#2563eb",
    primaryForeground: "#ffffff",
    highlight: "#f59e0b",
  },
  chartPalette: ["#2563eb", "#f59e0b", "#10b981", "#8b5cf6", "#ef4444"],
  surfaces: "ambient",
  personality: "product",
}

describe("theme-brief", () => {
  it("extracts JSON from fenced code blocks", () => {
    const text = `Here you go:\n\`\`\`json\n${JSON.stringify(SAMPLE_BRIEF)}\n\`\`\``
    expect(extractJsonFromAiResponse(text)).toBe(JSON.stringify(SAMPLE_BRIEF))
  })

  it("validates a complete brief", () => {
    const result = validateThemeBrief(SAMPLE_BRIEF)
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.brief.basePreset).toBe("workspace")
      expect(result.brief.brand.primary).toBe("#2563eb")
    }
  })

  it("reports friendly validation errors", () => {
    const result = validateThemeBrief({
      basePreset: "not-a-preset",
      brand: { primary: "blue", primaryForeground: "#fff" },
      chartPalette: ["#111111"],
    })

    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.errors.some((error) => error.includes("basePreset"))).toBe(
        true,
      )
      expect(result.errors.some((error) => error.includes("chartPalette"))).toBe(
        true,
      )
    }
  })

  it("parses pasted AI output and applies theme", () => {
    const pasted = `\`\`\`json\n${JSON.stringify(SAMPLE_BRIEF, null, 2)}\n\`\`\``
    const parsed = parseThemeBriefInput(pasted)
    expect(parsed.ok).toBe(true)

    if (!parsed.ok) return

    const next = applyThemeBrief(createDefaultConfig(), parsed.brief)
    expect(next.brandRoles.primary).toBe("#2563eb")
    expect(next.surfaces.style).toBe("ambient")
    expect(next.personality.cardMode).toBe("elevated")
  })

  it("includes the user description in the generated prompt", () => {
    const prompt = buildThemeBriefPrompt("Warm fintech dashboard")
    expect(prompt).toContain("Warm fintech dashboard")
    expect(prompt).toContain("basePreset")
    expect(prompt).toContain("workspace:")
  })
})
