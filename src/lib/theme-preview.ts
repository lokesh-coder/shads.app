import {
  generateBrandSemanticCss,
  generateDensityCss,
  generateFocusCss,
  generateFontRuntimeCss,
  generateMenusCss,
  generateOverlaysCss,
  generatePersonalityCss,
  generateSurfacesCss,
  generateThemeCss,
  generateTypographyCss,
} from "@/lib/theme-codegen"
import { PREVIEW_CSS_SCOPE, scopeGeneratedCss } from "@/lib/css-scope"
import type { ThemeConfig } from "@/lib/theme-config"
import { getFontById } from "@/tokens/fonts"

const PREVIEW_STYLE_ID = "theme-preview"

function getOrCreatePreviewStyle(): HTMLStyleElement {
  let style = document.getElementById(PREVIEW_STYLE_ID) as HTMLStyleElement | null
  if (!style) {
    style = document.createElement("style")
    style.id = PREVIEW_STYLE_ID
    document.head.appendChild(style)
  } else {
    document.head.appendChild(style)
  }
  return style
}

function setRampVars(
  root: HTMLElement,
  prefix: "neutral" | "brand",
  ramp: Record<number, string>,
): void {
  for (const [step, color] of Object.entries(ramp)) {
    root.style.setProperty(`--${prefix}-${step}`, color)
  }
}

function setThemeVars(root: HTMLElement, config: ThemeConfig): void {
  setRampVars(root, "neutral", config.neutral)
  setRampVars(root, "brand", config.brand)
  if (config.brandRoles.highlight) {
    root.style.setProperty("--brand-highlight", config.brandRoles.highlight)
  } else {
    root.style.removeProperty("--brand-highlight")
  }
  root.style.setProperty("--radius", config.radius)
}

function setFontVars(root: HTMLElement, config: ThemeConfig): void {
  const sans = getFontById(config.fonts.sans)
  const heading = getFontById(config.fonts.heading)
  const mono = getFontById(config.fonts.mono)

  if (sans) {
    root.style.setProperty("--font-family-sans", sans.family)
    root.style.setProperty("--font-sans", sans.family)
  }
  if (heading) {
    root.style.setProperty("--font-family-heading", heading.family)
    root.style.setProperty("--font-heading", heading.family)
  }
  if (mono) {
    root.style.setProperty("--font-family-mono", mono.family)
    root.style.setProperty("--font-mono", mono.family)
  }
}

function buildPreviewCss(config: ThemeConfig): string {
  const parts: string[] = [generateFontRuntimeCss(config)]

  if (config.layers.brandSemantic) {
    parts.push(generateBrandSemanticCss(config))
  } else {
    parts.push(generateThemeCss(config))
  }

  if (config.layers.surfaces) {
    parts.push(generateSurfacesCss(config))
    parts.push(generatePersonalityCss(config))
  }
  if (config.layers.menus) {
    parts.push(generateMenusCss(config))
  }
  if (config.layers.density) {
    parts.push(generateDensityCss(config))
  }
  if (config.layers.focus) {
    parts.push(generateFocusCss(config))
  }
  if (config.layers.overlays) {
    parts.push(generateOverlaysCss(config))
  }
  if (config.layers.typography) {
    parts.push(generateTypographyCss(config))
  }

  return scopeGeneratedCss(parts.join("\n"), PREVIEW_CSS_SCOPE)
}

export function applyThemePreview(
  root: HTMLElement,
  config: ThemeConfig,
  isDark: boolean,
): void {
  setThemeVars(root, config)
  setFontVars(root, config)
  document.documentElement.classList.toggle("dark", isDark)
  root.classList.toggle("dark", isDark)
  root.dataset.cardMode = config.personality.cardMode
  root.dataset.buttonPersonality = config.personality.buttonPersonality

  const style = getOrCreatePreviewStyle()
  style.textContent = buildPreviewCss(config)
}

export function clearThemePreview(root: HTMLElement): void {
  for (const step of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]) {
    root.style.removeProperty(`--neutral-${step}`)
    root.style.removeProperty(`--brand-${step}`)
  }
  root.style.removeProperty("--brand-highlight")
  root.style.removeProperty("--radius")
  root.style.removeProperty("--font-family-sans")
  root.style.removeProperty("--font-family-heading")
  root.style.removeProperty("--font-family-mono")
  root.style.removeProperty("--font-sans")
  root.style.removeProperty("--font-heading")
  root.style.removeProperty("--font-mono")
  document.documentElement.classList.remove("dark")
  root.classList.remove("dark")
  delete root.dataset.cardMode
  delete root.dataset.buttonPersonality

  document.getElementById(PREVIEW_STYLE_ID)?.remove()
}

export function readCssVar(element: HTMLElement, name: string): string {
  return getComputedStyle(element).getPropertyValue(name).trim()
}
