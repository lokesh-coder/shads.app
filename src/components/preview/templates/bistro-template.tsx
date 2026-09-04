import { PhoneIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { TemplateReviews, TemplateSectionHeading } from "./template-sections"
import { ComposedPhoto, LocationBlock } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateLogo,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.bistro

const starters = [
  { name: "Grilled sourdough, cultured butter, Maldon salt", price: "$12" },
  { name: "Roasted beet, whipped goat cheese, candied hazelnut", price: "$16" },
  { name: "Wood-fired mushrooms, thyme, brown butter", price: "$14" },
  { name: "Oysters on ice, mignonette, lemon", price: "$22" },
] as const

const mains = [
  { name: "Line-caught salmon, ember-roasted vegetables, herb jus", price: "$34" },
  { name: "Half chicken, pan jus, seasonal greens, fingerlings", price: "$28" },
  { name: "Hand-cut pappardelle, wild boar ragù, pecorino", price: "$26" },
  { name: "Dry-aged ribeye, bone marrow butter, charred shallot", price: "$48" },
] as const

const chefPicks = [
  {
    name: "Ember-roasted carrots",
    detail: "Harissa yogurt · pistachio · mint",
    price: "$18",
    label: "Vegetarian",
  },
  {
    name: "Wood-fired octopus",
    detail: "Romesco · crispy potatoes · smoked paprika",
    price: "$32",
    label: "Chef's pick",
  },
  {
    name: "Burnt honey panna cotta",
    detail: "Seasonal berries · almond crumble",
    price: "$14",
    label: "Dessert",
  },
] as const

export function BistroTemplate() {
  return (
    <TemplateSurface>
      {/* 1 — Restaurant header with phone */}
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Menu", active: true },
          { label: "Wine list" },
          { label: "Events" },
          { label: "Private dining" },
        ]}
        trailing={
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 text-sm text-muted-foreground sm:flex">
              <PhoneIcon className="size-3.5" />
              (503) 555-0142
            </span>
            <Button>Book a table</Button>
          </div>
        }
      />

      {/* 2 — Food hero */}
      <section className="relative border-b border-border/70">
        <ComposedPhoto
          variant="food"
          label="Open hearth"
          className="min-h-[360px] rounded-none md:min-h-[460px]"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4 text-white md:p-8">
          <p className="text-sm tracking-wide text-white/75">{narrative.tagline}</p>
          <h1 className="mt-2 max-w-2xl font-heading text-3xl font-semibold leading-tight md:text-5xl">
            {narrative.hero}
          </h1>
          <p className="mt-3 max-w-md text-sm text-white/70">{narrative.subhero}</p>
          <Button className="mt-6 w-fit" variant="secondary">
            View dinner menu
          </Button>
        </div>
      </section>

      {/* 3 — About strip */}
      <TemplateBand tint="muted">
        <TemplateContent width="narrow" className="text-center">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Our kitchen
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Chef Ana Morales cooks over an open oak fire in our Pearl District dining room —
            sourcing from Willamette Valley farms and Oregon coast fisheries. Every plate is
            built to share.
          </p>
        </TemplateContent>
      </TemplateBand>

      {/* 4 — Two-column menu */}
      <TemplateBand>
        <TemplateContent width="wide">
          <TemplateSectionHeading
            title="Dinner menu"
            description="Served Tuesday through Saturday · 5:30 PM – 10:00 PM"
          />
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg font-semibold">Starters</h3>
              <ul className="mt-5 flex flex-col gap-4">
                {starters.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-4"
                  >
                    <span className="text-sm leading-snug">{item.name}</span>
                    <span className="shrink-0 text-sm font-medium tabular-nums text-muted-foreground">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold">Mains</h3>
              <ul className="mt-5 flex flex-col gap-4">
                {mains.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-4"
                  >
                    <span className="text-sm leading-snug">{item.name}</span>
                    <span className="shrink-0 text-sm font-medium tabular-nums text-muted-foreground">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TemplateContent>
      </TemplateBand>

      {/* 5 — Chef picks: 3 Cards with ComposedPhoto */}
      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <TemplateSectionHeading
            title="From the hearth"
            description="Three plates our kitchen fires on every service."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {chefPicks.map((dish) => (
              <Card key={dish.name} className="overflow-hidden py-0">
                <ComposedPhoto
                  variant="food"
                  label={dish.label}
                  className="aspect-[4/3] rounded-none"
                />
                <CardHeader className="gap-1">
                  <CardTitle className="text-base">{dish.name}</CardTitle>
                  <CardDescription>{dish.detail}</CardDescription>
                  <p className="font-heading text-lg font-semibold tabular-nums">{dish.price}</p>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" className="w-full">Order à la carte</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TemplateContent>
      </TemplateBand>

      {/* 6 — Reservation Card */}
      <TemplateBand>
        <TemplateContent width="narrow">
          <Card>
            <CardHeader>
              <CardTitle>Reserve your table</CardTitle>
              <CardDescription>
                Dinner service · reservations recommended · parties of 6+ call us directly
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <Label htmlFor="bistro-name">Name</Label>
                <Input id="bistro-name" defaultValue="Jordan Lee" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bistro-date">Date</Label>
                <Input id="bistro-date" type="date" defaultValue="2026-09-12" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bistro-time">Time</Label>
                <Input id="bistro-time" type="time" defaultValue="19:30" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bistro-party">Party size</Label>
                <Input id="bistro-party" type="number" min={1} max={12} defaultValue={2} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="bistro-phone">Phone</Label>
                <Input id="bistro-phone" defaultValue="+1 (503) 555-0198" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Confirm reservation</Button>
            </CardFooter>
          </Card>
        </TemplateContent>
      </TemplateBand>

      {/* 7 — Location */}
      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <TemplateSectionHeading title="Find us" />
          <LocationBlock
            address="412 NW 12th Ave · Pearl District · Portland, OR 97209"
            hours="Tue–Sat 5:30–10 PM · Sun brunch 10 AM–2 PM · Closed Monday"
          />
        </TemplateContent>
      </TemplateBand>

      {/* 8 — Reviews */}
      <TemplateBand>
        <TemplateContent width="wide">
          <TemplateSectionHeading
            title="What guests are saying"
            description="Recent visits from OpenTable and local press."
          />
          <TemplateReviews
            items={[
              {
                quote:
                  "The wood-fired mushrooms alone are worth the reservation. Intimate room, impeccable service, and a wine list that actually pairs with the fire.",
                author: "Rachel K. · Portland",
                rating: 5,
              },
              {
                quote:
                  "Best half chicken in the city — crackling skin, juicy meat, and vegetables that taste like they were picked that morning.",
                author: "David & Sam · Seattle",
                rating: 5,
              },
            ]}
          />
        </TemplateContent>
      </TemplateBand>

      {/* 9 — Footer with hours */}
      <footer className="border-t border-border/70 bg-muted/20 px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-sm font-semibold">{narrative.brand}</p>
            <p className="mt-3 text-sm text-muted-foreground">{narrative.tagline}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Hours</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Tuesday – Thursday · 5:30 – 9:30 PM</li>
              <li>Friday – Saturday · 5:30 – 10:00 PM</li>
              <li>Sunday brunch · 10:00 AM – 2:00 PM</li>
              <li>Monday · Closed</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Contact</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>(503) 555-0142</li>
              <li>hello@emberandoak.com</li>
              <li>412 NW 12th Ave, Portland</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium">Visit</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Private dining (up to 14)</li>
              <li>Chef&apos;s table · Saturdays</li>
              <li>Wine cellar tastings</li>
              <li>Gift cards</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
          © 2026 {narrative.brand} · Wood-fired dining in the Pearl District
        </p>
      </footer>
    </TemplateSurface>
  )
}
