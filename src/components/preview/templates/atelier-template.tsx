import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import {
  TemplateCTABand,
  TemplateFeatureSplit,
  TemplateLogoStrip,
} from "./template-sections"
import { ComposedPhoto } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateLogo,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.atelier

const services = [
  "Brand identity & visual systems",
  "Digital product design",
  "E-commerce experiences",
  "Art direction & photography",
  "Design systems & documentation",
] as const

export function AtelierTemplate() {
  return (
    <TemplateSurface>
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Work", active: true },
          { label: "Studio" },
          { label: "Contact" },
        ]}
        border={false}
      />

      <section className="px-4 py-20 md:px-8 md:py-32">
        <h1 className="max-w-5xl font-heading text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
          {narrative.hero}
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">{narrative.subhero}</p>
      </section>

      <section className="relative border-t border-border/70">
        <ComposedPhoto variant="fashion" className="min-h-[55vh] rounded-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <TemplateContent className="absolute inset-x-0 bottom-0 pb-10 md:pb-14">
          <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Featured case study
          </p>
          <h2 className="mt-2 max-w-2xl font-heading text-3xl font-semibold md:text-4xl">
            Maison Lumière
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            E-commerce rebrand · Identity, art direction, Shopify Plus · 2025
          </p>
          <Button variant="outline" className="mt-6 bg-background/80 backdrop-blur-sm">
            View project
            <ArrowUpRightIcon data-icon="inline-end" />
          </Button>
        </TemplateContent>
      </section>

      <TemplateBand>
        <TemplateContent width="wide">
          <TemplateFeatureSplit
            title="Harbor Hotel"
            description="A booking experience that trades urgency for calm — warm photography, generous type, and a checkout flow designed to feel like checking in, not converting."
            visual={
              <ComposedPhoto variant="warm" className="aspect-[4/3] rounded-xl" />
            }
            reverse
          />
        </TemplateContent>
      </TemplateBand>

      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <p className="mb-8 text-xs tracking-[0.14em] text-muted-foreground uppercase">
            Services
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <li
                key={service}
                className="flex items-baseline gap-4 border-b border-border/50 pb-4 font-heading text-xl font-medium md:text-2xl"
              >
                <span className="text-sm tabular-nums text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {service}
              </li>
            ))}
          </ul>
        </TemplateContent>
      </TemplateBand>

      <TemplateLogoStrip
        logos={["Maison Lumière", "Harbor Hotel", "Archive Museum", "Studio Nine", "Verona"]}
        caption="Selected clients · 2018—2026"
      />

      <TemplateBand>
        <TemplateContent width="narrow">
          <p className="font-heading text-xl leading-relaxed md:text-2xl">
            We believe the best digital work feels inevitable — as though the brand
            always looked this way. Our studio pairs editorial sensibility with
            systems thinking, so every launch is both beautiful and built to last.
          </p>
        </TemplateContent>
      </TemplateBand>

      <TemplateCTABand
        title="Ready for your next chapter?"
        description="Tell us about your brand, timeline, and ambitions."
        primaryLabel="Book a discovery call"
        secondaryLabel="Download capabilities deck"
      />

      <footer className="border-t border-border/70 px-4 py-8 md:px-8">
        <TemplateContent width="wide" className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <TemplateLogo name={`${narrative.brand} Studio`} />
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span>Paris · New York</span>
            <span>hello@atelier.studio</span>
            <span>© 2026</span>
          </div>
        </TemplateContent>
      </footer>
    </TemplateSurface>
  )
}
