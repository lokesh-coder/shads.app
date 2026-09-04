import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { TemplateSectionHeading } from "./template-sections"
import { ComposedPhoto } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateLogo,
  TemplateProductCard,
  TemplateSurface,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.lookbook

const lookOnePieces = [
  { name: "Structured wool coat", detail: "Ink · Italian double-faced wool", price: "$420" },
  { name: "Wide-leg trouser", detail: "Charcoal · high-rise · pressed crease", price: "$240" },
  { name: "Leather belt", detail: "Black · 25mm · brushed silver buckle", price: "$98" },
] as const

const lookTwoPieces = [
  { name: "Cashmere rollneck", detail: "Oat · 2-ply Mongolian cashmere", price: "$310" },
  { name: "Silk slip skirt", detail: "Midnight · bias cut · 90cm", price: "$285" },
  { name: "Suede ankle boot", detail: "Espresso · 40mm block heel", price: "$395" },
] as const

const collectionRow = [
  { name: "Ink wool blazer", detail: "XS–XL · single-breasted", price: "$380", badge: "New" },
  { name: "Ribbed merino tank", detail: "Bone · fine gauge", price: "$145" },
  { name: "Pleated midi skirt", detail: "Slate · knife pleat", price: "$265", badge: "Limited" },
  { name: "Cashmere scarf", detail: "Charcoal · 200×70cm", price: "$195" },
] as const

const sizeGuideRows = [
  ["XS", "32", "24", "34"],
  ["S", "34", "26", "36"],
  ["M", "36", "28", "38"],
  ["L", "38", "30", "40"],
  ["XL", "40", "32", "42"],
] as const

export function LookbookTemplate() {
  return (
    <TemplateSurface>
      {/* 1 — Luxury uppercase header */}
      <TemplateTopNav
        logo={
          <TemplateLogo
            name={narrative.brand}
            className="text-xs tracking-[0.28em] uppercase md:text-sm"
          />
        }
        links={[
          { label: "Collection", active: true },
          { label: "Editorial" },
          { label: "Stores" },
          { label: "Styling" },
        ]}
        trailing={
          <Button variant="outline" className="text-xs tracking-widest uppercase">
            Bag · 1
          </Button>
        }
        border={false}
        className="border-b border-border/40"
      />

      {/* 2 — Full-bleed fashion hero */}
      <section className="relative">
        <ComposedPhoto
          variant="fashion"
          label={narrative.tagline}
          className="min-h-[58vh] rounded-none md:min-h-[68vh]"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/90 to-transparent px-4 pb-12 pt-32 md:px-8 md:pb-16">
          <p className="text-[10px] tracking-[0.24em] text-muted-foreground uppercase md:text-xs">
            {narrative.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-[0.06em] uppercase md:text-6xl lg:text-7xl">
            {narrative.hero}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {narrative.subhero}
          </p>
          <Button className="mt-8 tracking-widest uppercase">Shop collection</Button>
        </div>
      </section>

      {/* 3 — Editorial manifesto */}
      <TemplateBand>
        <TemplateContent width="narrow" className="text-center">
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Maison manifesto
          </p>
          <blockquote className="mt-6 font-heading text-xl leading-snug md:text-2xl lg:text-3xl">
            &ldquo;We design for the woman who moves through the city with intention — garments
            that hold their shape, soften with wear, and outlast the season.&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground">
            Creative director · Camille Laurent · Paris / New York
          </p>
        </TemplateContent>
      </TemplateBand>

      {/* 4 — Look 1: asymmetric shop-the-look */}
      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Look 01
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-wide uppercase md:text-3xl">
                City architecture
              </h2>
            </div>
            <Button variant="outline" className="hidden text-xs tracking-widest uppercase sm:inline-flex">
              Shop the look
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <ComposedPhoto
              variant="fashion"
              label="Look 01"
              className="min-h-[420px] rounded-none lg:col-span-7 lg:min-h-[520px]"
            />
            <div className="flex flex-col justify-center gap-6 lg:col-span-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Ink wool layered over charcoal tailoring — a study in proportion and negative
                space. Photographed on Rue de Rivoli, Paris.
              </p>
              <div className="flex flex-col gap-5">
                {lookOnePieces.map((piece) => (
                  <div
                    key={piece.name}
                    className="flex items-start justify-between gap-4 border-b border-border/60 pb-5"
                  >
                    <div>
                      <p className="font-heading text-sm font-medium tracking-wide uppercase">
                        {piece.name}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{piece.detail}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-sm font-semibold tabular-nums">
                        {piece.price}
                      </p>
                      <Button variant="link" className="h-auto p-0 text-[10px] tracking-widest uppercase">
                        Add
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TemplateContent>
      </TemplateBand>

      {/* 5 — Look 2: reversed split layout */}
      <TemplateBand>
        <TemplateContent width="wide">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Look 02
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-wide uppercase md:text-3xl">
                Evening volume
              </h2>
            </div>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Oat cashmere against midnight silk — fluid layers that catch light as you move.
                Shot at golden hour, Brooklyn Navy Yard.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {lookTwoPieces.map((piece) => (
                  <Card key={piece.name} size="sm">
                    <CardHeader className="gap-1 p-4">
                      <CardTitle className="text-xs font-medium tracking-wide uppercase">
                        {piece.name}
                      </CardTitle>
                      <CardDescription className="text-[11px]">{piece.detail}</CardDescription>
                      <p className="font-heading text-sm font-semibold tabular-nums">
                        {piece.price}
                      </p>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" className="w-full text-[10px] tracking-widest uppercase">
                        Add
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            <ComposedPhoto
              variant="fashion"
              label="Look 02"
              className="order-1 min-h-[380px] rounded-none lg:order-2 lg:min-h-[480px]"
            />
          </div>
        </TemplateContent>
      </TemplateBand>

      {/* 6 — Product row: 4 cards */}
      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <TemplateSectionHeading
            title="The collection"
            description="Limited-run pieces from our Autumn / Winter 2026 atelier."
            className="text-center md:mx-auto md:text-center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {collectionRow.map((piece) => (
              <TemplateProductCard
                key={piece.name}
                name={piece.name}
                detail={piece.detail}
                price={piece.price}
                badge={"badge" in piece ? piece.badge : undefined}
                variant="fashion"
                aspect="portrait"
                cta="Add to bag"
              />
            ))}
          </div>
        </TemplateContent>
      </TemplateBand>

      {/* 7 — Size guide Card with Table */}
      <TemplateBand>
        <TemplateContent width="narrow">
          <Card>
            <CardHeader>
              <CardTitle className="tracking-wide uppercase">Size guide</CardTitle>
              <CardDescription>
                All measurements in inches. Between sizes? Our stylists recommend sizing up for
                outerwear.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Size</TableHead>
                    <TableHead>Bust</TableHead>
                    <TableHead>Waist</TableHead>
                    <TableHead>Hip</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sizeGuideRows.map((row) => (
                    <TableRow key={row[0]}>
                      <TableCell className="font-medium">{row[0]}</TableCell>
                      <TableCell>{row[1]}</TableCell>
                      <TableCell>{row[2]}</TableCell>
                      <TableCell>{row[3]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t border-border/60">
              <Button variant="outline" className="text-xs tracking-widest uppercase">
                Book a fitting
              </Button>
            </CardFooter>
          </Card>
        </TemplateContent>
      </TemplateBand>

      {/* 8 — Craft / details band */}
      <TemplateBand tint="accent">
        <TemplateContent width="wide">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Fabric
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold tracking-wide uppercase">
                Italian mills
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Double-faced wool from Biella, silk from Como — sourced in runs of 200 meters
                or fewer.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Construction
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold tracking-wide uppercase">
                Atelier finish
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Hand-finished buttonholes, bound seams, and canvas interlining on every coat
                and blazer.
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Care
              </p>
              <h3 className="mt-3 font-heading text-lg font-semibold tracking-wide uppercase">
                Made to last
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Complimentary repairs for the life of the garment. Cashmere refreshed annually
                at our Paris atelier.
              </p>
            </div>
          </div>
        </TemplateContent>
      </TemplateBand>

      {/* 9 — Services footer strip */}
      <section className="border-t border-border/70 bg-muted/20 px-4 py-12 md:px-8">
        <TemplateContent width="wide" className="px-0">
          <Separator className="mb-8" />
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <p className="font-heading text-xs tracking-[0.18em] uppercase">Shipping</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Complimentary worldwide on orders over $500
              </p>
            </div>
            <div>
              <p className="font-heading text-xs tracking-[0.18em] uppercase">Returns</p>
              <p className="mt-2 text-sm text-muted-foreground">
                30-day extended returns · Prepaid label included
              </p>
            </div>
            <div>
              <p className="font-heading text-xs tracking-[0.18em] uppercase">Styling</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Personal styling by appointment · SoHo &amp; Le Marais
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            © 2026 {narrative.brand} · {narrative.tagline}
          </p>
        </TemplateContent>
      </section>
    </TemplateSurface>
  )
}
