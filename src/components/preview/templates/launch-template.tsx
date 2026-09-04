import { ArrowRightIcon, CheckIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import {
  TemplateCTABand,
  TemplateFAQ,
  TemplateFeatureSplit,
  TemplateLogoStrip,
  TemplateNewsletterBand,
  TemplateSectionHeading,
  TemplateStatsBand,
  TemplateTestimonials,
} from "./template-sections"
import { DashboardMock } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateFeatureGrid,
  TemplateFooter,
  TemplateLogo,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.launch

const plans = [
  {
    name: "Starter",
    price: "$29",
    detail: "For solo founders shipping their first product",
    features: ["3 projects", "Basic analytics", "Email support"],
    featured: false,
  },
  {
    name: "Team",
    price: "$79",
    detail: "For squads scaling design and engineering together",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "SSO"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    detail: "Security, SLA, and dedicated success",
    features: ["Custom contracts", "Audit logs", "Dedicated CSM"],
    featured: false,
  },
] as const

export function LaunchTemplate() {
  return (
    <TemplateSurface>
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Product" },
          { label: "Customers" },
          { label: "Pricing", active: true },
          { label: "Docs" },
        ]}
        trailing={
          <>
            <Button variant="ghost">Sign in</Button>
            <Button>Get started</Button>
          </>
        }
      />
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div className="flex flex-col justify-center gap-5">
            <Badge variant="secondary" className="w-fit">
              Public beta · 2,400 teams
            </Badge>
            <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              {narrative.hero}
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">{narrative.subhero}</p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">
                Start free trial
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
              <Button size="lg" variant="outline">
                Book a demo
              </Button>
            </div>
          </div>
          <DashboardMock className="self-center md:scale-105" />
        </div>
      </section>
      <TemplateLogoStrip
        logos={["Verona", "Atlas Labs", "Monocle", "Harbor Co.", "Studio Nine"]}
      />
      <TemplateBand>
        <TemplateContent width="wide">
          <TemplateSectionHeading
            title="Built for velocity"
            description="One design language from marketing to in-app UI."
          />
          <TemplateFeatureGrid
            features={[
              {
                title: "Marketing surfaces",
                description:
                  "Heroes, pricing, and proof blocks that inherit radius, shadow, and type from one source.",
              },
              {
                title: "Product UI",
                description:
                  "Dashboards and settings with consistent density — no drift between teams.",
              },
              {
                title: "Dark mode native",
                description:
                  "Semantic tokens tuned for both expressions without rebuilding layouts.",
              },
            ]}
          />
        </TemplateContent>
      </TemplateBand>
      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <TemplateFeatureSplit
            title="Ship campaigns and product from one system"
            description="Designers publish landing pages while engineers reuse the same tokens in React — no handoff drift, no duplicate specs."
            visual={<DashboardMock />}
          />
        </TemplateContent>
      </TemplateBand>
      <TemplateTestimonials
        items={[
          {
            quote:
              "We cut our design-to-ship cycle from three weeks to four days. Northstar is the single source of truth.",
            name: "Maya Chen",
            role: "Head of Design",
            company: "Atlas Labs",
            initials: "MC",
          },
          {
            quote:
              "Our marketing site and app finally feel like the same brand. The token pipeline just works.",
            name: "David Okonkwo",
            role: "VP Engineering",
            company: "Harbor Co.",
            initials: "DO",
          },
          {
            quote:
              "Onboarding new designers used to take a month. Now it's a afternoon with the preset library.",
            name: "Elena Vasquez",
            role: "Design Ops",
            company: "Monocle",
            initials: "EV",
          },
        ]}
      />
      <TemplateStatsBand
        stats={[
          { value: "99.98%", label: "Uptime SLA" },
          { value: "2,400+", label: "Teams onboarded" },
          { value: "48", label: "Countries" },
        ]}
      />
      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <TemplateSectionHeading title="Pricing" />
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={plan.featured ? "ring-2 ring-primary/30" : undefined}
              >
                <CardHeader>
                  {plan.featured ? <Badge className="w-fit">Most popular</Badge> : null}
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.detail}</CardDescription>
                  <p className="font-heading text-4xl font-semibold tabular-nums">
                    {plan.price}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 text-sm">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckIcon className="size-3.5 text-primary" />
                      {feature}
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.featured ? "default" : "outline"}>
                    Choose {plan.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TemplateContent>
      </TemplateBand>
      <TemplateFAQ
        items={[
          {
            question: "Can I use Northstar with my existing React app?",
            answer:
              "Yes. Export CSS variables or Tailwind config and wire them into any React stack. shadcn/ui components are supported out of the box.",
          },
          {
            question: "Is there a free trial?",
            answer:
              "Starter includes a 14-day trial with full Team features. No credit card required.",
          },
          {
            question: "How does dark mode work?",
            answer:
              "Every preset ships paired light and dark semantic tokens. Toggle once in the builder — both expressions stay in sync.",
          },
          {
            question: "Do you offer SSO for Enterprise?",
            answer:
              "SAML and OIDC are included on Enterprise plans with dedicated onboarding support.",
          },
        ]}
      />
      <TemplateCTABand
        title="Ready to ship faster?"
        description="Join 2,400 teams building with one design language."
        primaryLabel="Start free trial"
        secondaryLabel="Talk to sales"
      />
      <TemplateNewsletterBand />
      <TemplateFooter
        logo={narrative.brand}
        columns={[
          { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
          { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
          { title: "Legal", links: ["Privacy", "Terms", "Security", "SOC 2"] },
        ]}
      />
    </TemplateSurface>
  )
}
