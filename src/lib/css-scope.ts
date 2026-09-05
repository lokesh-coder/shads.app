/** Preview mount point — generated theme CSS is scoped here, never on :root. */
export const PREVIEW_ROOT_ID = "theme-preview-root"

export type CssScope = {
  root: string
  dark: string
  html: string
  /** Prepended to [data-slot] and element selectors inside the preview. */
  prefix: string
}

export const GLOBAL_CSS_SCOPE: CssScope = {
  root: ":root",
  dark: ".dark",
  html: "html",
  prefix: "",
}

export const PREVIEW_CSS_SCOPE: CssScope = {
  root: `#${PREVIEW_ROOT_ID}`,
  dark: `#${PREVIEW_ROOT_ID}.dark`,
  html: `#${PREVIEW_ROOT_ID}`,
  prefix: `#${PREVIEW_ROOT_ID} `,
}

/**
 * Rewrites export-oriented CSS so it only applies inside the preview container.
 * Export paths keep GLOBAL_CSS_SCOPE and emit unchanged :root rules.
 */
export function scopeGeneratedCss(css: string, scope: CssScope): string {
  if (!scope.prefix) return css

  let result = css

  // @theme inline is build-time Tailwind only; strip from runtime preview injection.
  result = result.replace(/@theme\s+inline\s*\{[\s\S]*?\}\s*/g, "")

  result = result.replace(/:root\b/g, scope.root)

  result = result.replace(
    /(^|[\n{},>+~])\s*\.dark\b(?=[\s{,:.[#])/gm,
    `$1${scope.dark}`,
  )

  result = result.replace(/\bhtml\[/g, `${scope.html}[`)
  result = result.replace(/\bhtml\s*\{/g, `${scope.html} {`)
  result = result.replace(/\bbody\s*\{/g, `${scope.root} {`)

  result = prefixScopedSelectors(result, scope.prefix)

  return result
}

function prefixScopedSelectors(css: string, prefix: string): string {
  let result = css

  // [data-slot="…"] and combinator continuations on following lines.
  result = result.replace(
    /(^|[\n,{]\s*)(?!(?:#theme-preview-root)\s)(\[data-slot)/gm,
    `$1${prefix}$2`,
  )

  // Heading / mono element selectors in typography & font layers.
  result = result.replace(
    /(^|[\n,{]\s*)(?!(?:#theme-preview-root)\s)((?:h[1-6]|code|kbd|pre|samp)\b)/gm,
    `$1${prefix}$2`,
  )

  // Utility classes used as selectors (e.g. .font-heading.text-2xl).
  result = result.replace(
    /(^|[\n,{]\s*)(?!(?:#theme-preview-root)\s)(\.font-heading\b)/gm,
    `$1${prefix}$2`,
  )

  return result
}
