import { describe, expect, it } from "vitest"

import { createDefaultConfig } from "@/lib/theme-config"
import {
  buildShareUrl,
  galleryTabToIndex,
  indexToGalleryTab,
  parseShareUrl,
  serializeThemeConfig,
  tabFromShowcaseId,
} from "@/lib/share-url"

describe("share-url", () => {
  it("maps gallery tabs to indices", () => {
    expect(galleryTabToIndex("primitives")).toBe(0)
    expect(galleryTabToIndex("components")).toBe(1)
    expect(galleryTabToIndex("template")).toBe(2)
    expect(indexToGalleryTab(0)).toBe("primitives")
    expect(indexToGalleryTab(1)).toBe("components")
    expect(indexToGalleryTab(2)).toBe("template")
  })

  it("resolves showcase tab from id", () => {
    expect(tabFromShowcaseId("table")).toBe("primitives")
    expect(tabFromShowcaseId("auth")).toBe("components")
  })

  it("round-trips theme config compression", () => {
    const config = createDefaultConfig()
    const encoded = serializeThemeConfig(config)
    expect(encoded.length).toBeGreaterThan(0)

    window.location.hash = `#p=components&c=${encoded}&d=1&item=auth`
    const parsed = parseShareUrl()
    expect(parsed.tab).toBe("components")
    expect(parsed.isDark).toBe(true)
    expect(parsed.item).toBe("auth")
    expect(parsed.config.radius).toBe(config.radius)
  })

  it("supports legacy config hash param", () => {
    const encoded = serializeThemeConfig(createDefaultConfig())
    window.location.hash = `#config=${encoded}`
    const parsed = parseShareUrl()
    expect(parsed.tab).toBe("primitives")
    expect(parsed.config.radius).toBe(createDefaultConfig().radius)
  })

  it("maps legacy numeric page indices", () => {
    window.location.hash = "#p=4"
    expect(parseShareUrl().tab).toBe("template")

    window.location.hash = "#p=2"
    expect(parseShareUrl().tab).toBe("components")
  })

  it("builds a full share url", () => {
    window.location.pathname = "/"
    const url = buildShareUrl({
      config: createDefaultConfig(),
      tab: "template",
      isDark: false,
    })
    expect(url).toContain("http://localhost")
    expect(url).toContain("#p=template")
    expect(url).toContain("&c=")
  })
})
