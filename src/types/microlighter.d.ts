declare module "microlighter" {
  export type HighlightAllOptions = {
    root?: Document | Element
    selector?: string
    languageAliases?: Record<string, string>
  }

  export function highlightAll(
    options?: HighlightAllOptions,
  ): Promise<HTMLElement[]>
}

declare module "microlighter/themes/github.css"
