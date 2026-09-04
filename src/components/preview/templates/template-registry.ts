import type { ComponentType } from "react"

import type { GlobalPresetId } from "@/tokens/global-presets"

import { AtelierTemplate } from "./atelier-template"
import { BistroTemplate } from "./bistro-template"
import { BriefTemplate } from "./brief-template"
import { CampusTemplate } from "./campus-template"
import { CanvasTemplate } from "./canvas-template"
import { DispatchTemplate } from "./dispatch-template"
import { GuildTemplate } from "./guild-template"
import { LaunchTemplate } from "./launch-template"
import { LedgerTemplate } from "./ledger-template"
import { LookbookTemplate } from "./lookbook-template"
import { MetricsTemplate } from "./metrics-template"
import { OperatorTemplate } from "./operator-template"
import { PulseTemplate } from "./pulse-template"
import { ReadingTemplate } from "./reading-template"
import { StorefrontTemplate } from "./storefront-template"
import { WorkbenchTemplate } from "./workbench-template"
import { WorkspaceTemplate } from "./workspace-template"

export const TEMPLATE_BY_PRESET = {
  workspace: WorkspaceTemplate,
  brief: BriefTemplate,
  guild: GuildTemplate,
  operator: OperatorTemplate,
  metrics: MetricsTemplate,
  dispatch: DispatchTemplate,
  ledger: LedgerTemplate,
  canvas: CanvasTemplate,
  workbench: WorkbenchTemplate,
  launch: LaunchTemplate,
  reading: ReadingTemplate,
  atelier: AtelierTemplate,
  storefront: StorefrontTemplate,
  lookbook: LookbookTemplate,
  bistro: BistroTemplate,
  pulse: PulseTemplate,
  campus: CampusTemplate,
} as const satisfies Record<GlobalPresetId, ComponentType>

export const APP_TEMPLATE_PAGE_INDEX = 4

export const GALLERY_PAGE_COUNT = 5
