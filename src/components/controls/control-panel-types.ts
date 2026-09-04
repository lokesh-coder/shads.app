import type { ThemeConfig } from "@/lib/theme-config"

export type ControlPanelProps = {
  config: ThemeConfig
  onChange: (config: ThemeConfig) => void
  embedded?: boolean
}
