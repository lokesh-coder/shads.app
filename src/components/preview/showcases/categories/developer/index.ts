import type { CategoryEntry } from "@/components/preview/showcases/categories/auth"

import { ApiRateLimitShowcase } from "./api-rate-limit-showcase"
import { BuildLogShowcase } from "./build-log-showcase"
import { CliInstallShowcase } from "./cli-install-showcase"
import { DeployPipelineShowcase } from "./deploy-pipeline-showcase"
import { EnvVariablesShowcase } from "./env-variables-showcase"
import { ErrorIncidentShowcase } from "./error-incident-showcase"
import { GitRepoShowcase } from "./git-repo-showcase"
import { WebhookEndpointShowcase } from "./webhook-endpoint-showcase"

export const DEVELOPER_CATEGORY_ENTRIES: CategoryEntry[] = [
  { id: "webhook-endpoint", component: WebhookEndpointShowcase },
  { id: "deploy-pipeline", component: DeployPipelineShowcase },
  { id: "env-variables", component: EnvVariablesShowcase },
  { id: "build-log", component: BuildLogShowcase },
  { id: "cli-install", component: CliInstallShowcase },
  { id: "api-rate-limit", component: ApiRateLimitShowcase },
  { id: "git-repo", component: GitRepoShowcase },
  { id: "error-incident", component: ErrorIncidentShowcase },
]
