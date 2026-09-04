import type { ReactNode } from "react"

import type { ThemeConfig } from "@/lib/theme-config"
import { cn } from "@/lib/utils"
import { previewCanvasClass } from "@/tokens/preview-settings"

type TemplateRootProps = {
  config: ThemeConfig
  children: ReactNode
}

/** Full-bleed template canvas — applies preset preview background. */
export function TemplateRoot({ config, children }: TemplateRootProps) {
  return (
    <div
      className={cn(
        "min-h-full w-full text-foreground",
        previewCanvasClass(config.preview.canvas),
      )}
    >
      {children}
    </div>
  )
}
