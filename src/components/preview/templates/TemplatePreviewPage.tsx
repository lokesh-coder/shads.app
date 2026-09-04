import { matchGlobalPresetId, type ThemeConfig } from "@/lib/theme-config"
import type { GlobalPresetId } from "@/tokens/global-presets"

import { TEMPLATE_BY_PRESET } from "./template-registry"
import { TemplateRoot } from "./TemplateRoot"

type TemplatePreviewPageProps = {
  config: ThemeConfig
}

export function TemplatePreviewPage({ config }: TemplatePreviewPageProps) {
  const presetId = (matchGlobalPresetId(config) ?? "workspace") as GlobalPresetId
  const Template = TEMPLATE_BY_PRESET[presetId]

  return (
    <TemplateRoot config={config}>
      <Template />
    </TemplateRoot>
  )
}
