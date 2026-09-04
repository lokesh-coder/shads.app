import { ShoppingBagIcon } from "lucide-react"

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
  TemplateReviews,
  TemplateSectionHeading,
  TemplateTrustStrip,
} from "./template-sections"
import { ComposedPhoto } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateFooter,
  TemplateLogo,
  TemplateProductCard,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.storefront

const categories = [
  "Ceramics",
  "Textiles",
  "Lighting",
  "Candles",
  "Tableware",
  "Gifts",
] as const

const products = [
  {
    name: "Stone glaze mug",
    detail: "350ml · handmade in Portugal",
    price: "$28",
    badge: "Bestseller",
    variant: "interior" as const,
  },
  {
    name: "Oat linen throw",
    detail: "130×170cm · stonewashed",
    price: "$68",
    badge: "New",
    variant: "warm" as const,
  },
  {
    name: "Brass desk lamp",
    detail: "Dimmable LED · matte brass",
    price: "$124",
    variant: "interior" as const,
  },
  {
    name: "Cedar candle set",
    detail: "Set of 3 · 45hr burn",
    price: "$42",
    badge: "Gift pick",
    variant: "warm" as const,
  },
  {
    name: "Walnut serving board",
    detail: "42cm · food-safe oil finish",
    price: "$56",
    variant: "interior" as const,
  },
  {
    name: "Cloud weave pillow",
    detail: "50×50cm · down alternative",
    price: "$38",
    badge: "Limited",
    variant: "warm" as const,
  },
] as const

export function StorefrontTemplate() {
  return (
    <TemplateSurface>
      {/* 1 — Shop header with cart count */}
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Shop", active: true },
          { label: "New arrivals" },
          { label: "Gifts" },
          { label: "About" },
        ]}
        trailing={
          <Button variant="outline">
            <ShoppingBagIcon data-icon="inline-start" />
            Bag · 3
          </Button>
        }
      />

      {/* 2 — Promo hero with ComposedPhoto interior + CTA */}
      <section className="relative border-b border-border/70">
        <ComposedPhoto
          variant="interior"
          label="Spring 2026"
          className="min-h-[340px] rounded-none md:min-h-[420px]"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/55 to-transparent p-4 md:p-8">
          <Badge variant="secondary" className="mb-3 w-fit">
            {narrative.hero}
          </Badge>
          <h1 className="max-w-xl font-heading text-3xl font-semibold leading-tight md:text-5xl">
            Objects for everyday rituals
          </h1>
          <p className="mt-3 max-w-md text-muted-foreground">{narrative.subhero}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg">Shop collection</Button>
            <Button size="lg" variant="outline">Gift guide</Button>
          </div>
        </div>
      </section>

      {/* 3 — Trust strip */}
      <TemplateTrustStrip
        items={[
          "Free shipping over $75",
          "30-day returns",
          "Handmade & small-batch",
          "Gift wrapping available",
        ]}
      />

      {/* 4 — Category badge chips */}
      <TemplateBand>
        <TemplateContent width="wide">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm text-muted-foreground">Browse:</span>
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className="cursor-default px-3 py-1"
              >
                {category}
              </Badge>
            ))}
          </div>
        </TemplateContent>
      </TemplateBand>

      {/* 5 — 6-product grid */}
      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <TemplateSectionHeading
            title="Curated for calm interiors"
            description="Ceramics, textiles, and lighting chosen for texture, warmth, and longevity."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <TemplateProductCard
                key={product.name}
                name={product.name}
                detail={product.detail}
                price={product.price}
                badge={"badge" in product ? product.badge : undefined}
                variant={product.variant}
                cta="Add to bag"
              />
            ))}
          </div>
        </TemplateContent>
      </TemplateBand>

      {/* 6 — Featured product spotlight */}
      <TemplateBand>
        <TemplateContent width="wide">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <ComposedPhoto
                variant="interior"
                label="Spotlight"
                className="min-h-[280px] rounded-none lg:min-h-full"
              />
              <div className="flex flex-col justify-center p-6 md:p-10">
                <Badge variant="secondary" className="mb-4 w-fit">Editor&apos;s pick</Badge>
                <CardHeader className="p-0">
                  <CardTitle className="font-heading text-2xl md:text-3xl">
                    Arched brass floor lamp
                  </CardTitle>
                  <CardDescription className="mt-2 text-base leading-relaxed">
                    A sculptural arc of brushed brass with a linen shade — designed to cast
                    a warm pool of light over reading nooks and side tables.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4 p-0">
                  <p className="font-heading text-3xl font-semibold tabular-nums">$248</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ships in 3–5 days · Bulb included
                  </p>
                </CardContent>
                <CardFooter className="mt-6 gap-3 p-0">
                  <Button size="lg">Add to bag</Button>
                  <Button size="lg" variant="outline">View details</Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </TemplateContent>
      </TemplateBand>

      {/* 7 — Reviews */}
      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <TemplateSectionHeading
            title="From our community"
            description="Homes styled with Hearth & Co. pieces across Portland, Brooklyn, and Austin."
          />
          <TemplateReviews
            items={[
              {
                quote:
                  "The stone glaze mugs are the first thing guests notice. Subtle, weighty, and they photograph beautifully on a breakfast table.",
                author: "Elena R. · Portland, OR",
                rating: 5,
              },
              {
                quote:
                  "Finally homeware that feels intentional without being precious. The oat linen throw has been on our sofa for two years and only gets softer.",
                author: "Marcus & Priya · Brooklyn, NY",
                rating: 5,
              },
            ]}
          />
        </TemplateContent>
      </TemplateBand>

      {/* 8 — Editorial band */}
      <TemplateBand tint="accent">
        <TemplateContent width="wide">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                The Hearth journal
              </p>
              <h2 className="mt-3 font-heading text-2xl font-semibold md:text-3xl">
                How to build a calm morning ritual
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                From the weight of a handmade mug to the flicker of a cedar candle — small
                objects shape the rhythm of your day. Our spring edit pairs ceramics with
                natural textiles for spaces that breathe.
              </p>
              <Button variant="link" className="mt-4 h-auto p-0">
                Read the story →
              </Button>
            </div>
            <ComposedPhoto
              variant="warm"
              label="Editorial"
              className="min-h-[220px] rounded-lg"
            />
          </div>
        </TemplateContent>
      </TemplateBand>

      {/* 9 — Footer */}
      <TemplateFooter
        logo={narrative.brand}
        columns={[
          {
            title: "Shop",
            links: ["New arrivals", "Bestsellers", "Gift cards", "Trade program"],
          },
          {
            title: "Help",
            links: ["Shipping & returns", "Care guide", "Contact us", "FAQ"],
          },
          {
            title: "Company",
            links: ["Our story", "Sustainability", "Stockists", "Careers"],
          },
        ]}
      />
    </TemplateSurface>
  )
}
