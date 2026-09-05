import { describe, expect, it } from "vitest"

import {
  PREVIEW_CSS_SCOPE,
  PREVIEW_ROOT_ID,
  scopeGeneratedCss,
} from "@/lib/css-scope"

describe("css-scope", () => {
  it("leaves export CSS unchanged without a prefix", () => {
    const css = `:root { --neutral-50: #fff; }\n.dark { --background: #000; }`
    expect(scopeGeneratedCss(css, { root: ":root", dark: ".dark", html: "html", prefix: "" })).toBe(css)
  })

  it("scopes :root and .dark to the preview root", () => {
    const css = `:root { --neutral-50: #fff; }\n.dark { --background: #000; }`
    const scoped = scopeGeneratedCss(css, PREVIEW_CSS_SCOPE)
    expect(scoped).toContain(`#${PREVIEW_ROOT_ID} { --neutral-50: #fff; }`)
    expect(scoped).toContain(`#${PREVIEW_ROOT_ID}.dark { --background: #000; }`)
  })

  it("prefixes [data-slot] selectors", () => {
    const css = `[data-slot="button"] { height: 2rem; }`
    const scoped = scopeGeneratedCss(css, PREVIEW_CSS_SCOPE)
    expect(scoped).toBe(`#${PREVIEW_ROOT_ID} [data-slot="button"] { height: 2rem; }`)
  })

  it("scopes html personality attributes", () => {
    const css = `html[data-card-mode="bordered"] [data-slot="card"] { border: 1px solid; }`
    const scoped = scopeGeneratedCss(css, PREVIEW_CSS_SCOPE)
    expect(scoped).toBe(
      `#${PREVIEW_ROOT_ID}[data-card-mode="bordered"] [data-slot="card"] { border: 1px solid; }`,
    )
  })

  it("strips @theme inline from preview injection", () => {
    const css = `:root { --x: 1; }\n@theme inline { --shadow-sm: var(--surface-shadow-2); }\n[data-slot="card"] {}`
    const scoped = scopeGeneratedCss(css, PREVIEW_CSS_SCOPE)
    expect(scoped).not.toContain("@theme inline")
    expect(scoped).toContain(`#${PREVIEW_ROOT_ID} [data-slot="card"]`)
  })
})
