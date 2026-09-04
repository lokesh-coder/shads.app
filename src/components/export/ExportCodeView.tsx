import { useEffect, useRef } from "react"
import { highlightAll } from "microlighter"
import "microlighter/themes/github.css"

import { cn } from "@/lib/utils"

const SYNTAX_THEME = "github"

type ExportCodeViewProps = {
  content: string
  language: "css" | "markdown"
  className?: string
}

export function ExportCodeView({
  content,
  language,
  className,
}: ExportCodeViewProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    let cancelled = false

    const runHighlight = async () => {
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve())
      })
      if (cancelled) return

      root.dataset.syntaxTheme = SYNTAX_THEME
      await highlightAll({ root, selector: "pre > code" })
    }

    void runHighlight()

    return () => {
      cancelled = true
    }
  }, [content, language])

  return (
    <div
      ref={rootRef}
      data-syntax-theme={SYNTAX_THEME}
      className={cn(
        "export-code-view h-full min-h-0 overflow-auto rounded-lg bg-muted/40 p-4",
        "[&_pre:has(code)]:!m-0 [&_pre:has(code)]:!bg-transparent [&_pre:has(code)]:!p-0 [&_pre:has(code)]:!text-inherit",
        className,
      )}
    >
      <pre className="m-0 bg-transparent font-mono text-[13px] leading-6 text-foreground">
        <code className={`language-${language}`}>{content}</code>
      </pre>
    </div>
  )
}
