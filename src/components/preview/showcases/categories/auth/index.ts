import type { ComponentType } from "react"

import { OauthConnectShowcase } from "./oauth-connect-showcase"
import { PasskeySetupShowcase } from "./passkey-setup-showcase"
import { PasswordStrengthShowcase } from "./password-strength-showcase"
import { RecoveryCodesShowcase } from "./recovery-codes-showcase"
import { SamlConfigShowcase } from "./saml-config-showcase"
import { SessionListShowcase } from "./session-list-showcase"
import { SsoLoginShowcase } from "./sso-login-showcase"
import { TrustedDevicesShowcase } from "./trusted-devices-showcase"
import { TwoFactorSetupShowcase } from "./two-factor-setup-showcase"
import { WorkspaceSwitcherShowcase } from "./workspace-switcher-showcase"

export type CategoryEntry = { id: string; component: ComponentType }

export const AUTH_CATEGORY_ENTRIES: CategoryEntry[] = [
  { id: "sso-login", component: SsoLoginShowcase },
  { id: "passkey-setup", component: PasskeySetupShowcase },
  { id: "two-factor-setup", component: TwoFactorSetupShowcase },
  { id: "session-list", component: SessionListShowcase },
  { id: "oauth-connect", component: OauthConnectShowcase },
  { id: "workspace-switcher", component: WorkspaceSwitcherShowcase },
  { id: "password-strength", component: PasswordStrengthShowcase },
  { id: "recovery-codes", component: RecoveryCodesShowcase },
  { id: "saml-config", component: SamlConfigShowcase },
  { id: "trusted-devices", component: TrustedDevicesShowcase },
]
