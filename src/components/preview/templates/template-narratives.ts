import type { GlobalPresetId } from "@/tokens/global-presets"

export type TemplateNarrative = {
  brand: string
  tagline: string
  hero: string
  subhero?: string
}

export const TEMPLATE_NARRATIVES: Record<GlobalPresetId, TemplateNarrative> = {
  workspace: {
    brand: "Northstar",
    tagline: "Product workspace",
    hero: "Monday standup prep",
    subhero: "Three approvals and a launch review before noon.",
  },
  brief: {
    brand: "Studio Docs",
    tagline: "Engineering documentation",
    hero: "OAuth 2.0",
    subhero: "Authorize third-party apps with scoped bearer tokens.",
  },
  guild: {
    brand: "Guild",
    tagline: "People & culture",
    hero: "Find your team",
    subhero: "124 people across design, engineering, and operations.",
  },
  operator: {
    brand: "Control",
    tagline: "Fleet operations",
    hero: "Fleet status",
    subhero: "Live health across production services · us-east-1",
  },
  metrics: {
    brand: "Pulse Analytics",
    tagline: "Growth intelligence",
    hero: "$218,420",
    subhero: "Net revenue · last 30 days · +14.2%",
  },
  dispatch: {
    brand: "Dispatch",
    tagline: "Incident command",
    hero: "SEV-2 · Checkout degradation",
    subhero: "Active incident · Platform on-call engaged",
  },
  ledger: {
    brand: "Meridian Treasury",
    tagline: "Business banking",
    hero: "$284,920.40",
    subhero: "Total balance across operating accounts",
  },
  canvas: {
    brand: "Canvas",
    tagline: "AI workspace",
    hero: "Board deck summary",
    subhero: "Refining Q3 narrative for enterprise stakeholders",
  },
  workbench: {
    brand: "Workbench",
    tagline: "Developer platform",
    hero: "acme/web",
    subhero: "Production deploy · main · a3f9c2",
  },
  launch: {
    brand: "Northstar",
    tagline: "Design system for product teams",
    hero: "Ship experiences your team can scale",
    subhero: "From marketing sites to in-app UI — one language, every surface.",
  },
  reading: {
    brand: "The Weekly",
    tagline: "Culture & design",
    hero: "The quiet return of editorial craft",
    subhero: "Essay · 12 min read · By Maya Chen",
  },
  atelier: {
    brand: "Atelier",
    tagline: "Digital studio",
    hero: "Craft-led experiences for cultural brands",
    subhero: "Portfolio · Case studies · 2018—2026",
  },
  storefront: {
    brand: "Hearth & Co.",
    tagline: "Homeware & objects",
    hero: "Spring collection",
    subhero: "Ceramics, textiles, and lighting for calm interiors.",
  },
  lookbook: {
    brand: "MAISON ÉTÉ",
    tagline: "Autumn / Winter 2026",
    hero: "Structured silhouettes",
    subhero: "Ink wool · architectural tailoring · limited run",
  },
  bistro: {
    brand: "Ember & Oak",
    tagline: "Wood-fired dining",
    hero: "Seasonal plates, shared tables",
    subhero: "Open flame · local farms · reservation only",
  },
  pulse: {
    brand: "Pulse Care",
    tagline: "Patient portal",
    hero: "Welcome back, Jordan",
    subhero: "Your care plan and next visit at a glance.",
  },
  campus: {
    brand: "Campus",
    tagline: "Learning hub",
    hero: "Product Design Certificate",
    subhero: "62% complete · 5 of 8 modules · Est. 2 weeks left",
  },
}

export function getTemplateNarrative(presetId: GlobalPresetId): TemplateNarrative {
  return TEMPLATE_NARRATIVES[presetId]
}
