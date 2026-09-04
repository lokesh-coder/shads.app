import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import {
  TemplateNewsletterBand,
  TemplatePullQuote,
} from "./template-sections"
import { ComposedPhoto } from "./template-visuals"
import {
  TemplateBand,
  TemplateContent,
  TemplateFooter,
  TemplateLogo,
  TemplateSurface,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.reading

const categories = ["Latest", "Culture", "Design", "Technology", "Essays"] as const

const stories = [
  {
    title: "Why margins matter more than grids",
    meta: "Design · 12 min",
    tag: "Essay",
    variant: "editorial" as const,
  },
  {
    title: "Inside a newsroom redesign",
    meta: "Process · 8 min",
    tag: "Case study",
    variant: "warm" as const,
  },
  {
    title: "Reading modes that respect attention",
    meta: "UX · 6 min",
    tag: "Culture",
    variant: "fashion" as const,
  },
] as const

export function ReadingTemplate() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return (
    <TemplateSurface>
      <header className="border-b border-border/70 px-4 py-8 text-center md:px-8">
        <TemplateLogo
          name={narrative.brand}
          className="font-heading text-2xl font-semibold tracking-tight md:text-3xl"
        />
        <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          {narrative.tagline}
        </p>
        <p className="mt-4 text-sm text-muted-foreground">{today}</p>
      </header>

      <nav className="sticky top-0 z-20 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <TemplateContent width="wide" className="flex flex-wrap items-center justify-between gap-3 py-3">
          <div className="flex flex-wrap gap-1">
            {categories.map((category, index) => (
              <span
                key={category}
                className={
                  index === 0
                    ? "rounded-md bg-muted px-2.5 py-1.5 text-sm font-medium"
                    : "rounded-md px-2.5 py-1.5 text-sm text-muted-foreground"
                }
              >
                {category}
              </span>
            ))}
          </div>
          <Button variant="outline" size="sm">
            Subscribe
          </Button>
        </TemplateContent>
      </nav>

      <section className="border-b border-border/70">
        <ComposedPhoto variant="editorial" className="aspect-[21/9] max-h-[480px] rounded-none" />
        <TemplateContent width="narrow" className="py-10 md:py-14">
          <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
            Cover story
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            {narrative.hero}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            As product UI converges, publishers are reinvesting in typography, pacing,
            and narrative structure — and readers are noticing the difference.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">{narrative.subhero}</p>
        </TemplateContent>
      </section>

      <TemplateContent width="narrow" className="py-10 md:py-14">
        <article className="flex flex-col gap-8 text-base leading-relaxed">
          <p>
            <span className="float-left mr-3 mt-1 font-heading text-5xl leading-none text-primary md:text-6xl">
              T
            </span>
            he web was supposed to flatten everything into feeds. Instead, a new
            generation of publishers is betting on depth — long reads, generous
            whitespace, and typography that earns attention rather than demanding it.
            The shift is not aesthetic nostalgia; it is a response to trust erosion
            in algorithmic surfaces.
          </p>
          <p className="text-muted-foreground">
            Design systems that power product UI have made interfaces predictable.
            That predictability, paradoxically, has created appetite for editorial
            voice — pages that feel authored, not assembled. Readers return to
            publications that treat their time as finite and valuable.
          </p>

          <TemplatePullQuote
            quote="Craft is not nostalgia — it is how trust is rebuilt on the web."
            attribution="Maya Chen, Editor in Chief"
          />

          <p className="text-muted-foreground">
            The most successful redesigns share a common thread: they slow the reader
            down at the right moments. Drop caps, pull quotes, and inline photography
            are not decorative flourishes — they are pacing devices that signal
            intentionality in an attention economy built on speed.
          </p>

          <figure>
            <ComposedPhoto variant="warm" className="aspect-video rounded-lg" />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              The newsroom at Meridian Press, where designers and editors share a
              single layout system. Photo: Studio Archive
            </figcaption>
          </figure>

          <p className="text-muted-foreground">
            What comes next is less about abandoning digital formats and more about
            importing the best of print discipline — hierarchy, rhythm, and respect
            for the reader&apos;s eye — into responsive layouts that still feel human
            at every breakpoint.
          </p>
        </article>
      </TemplateContent>

      <Separator className="mx-auto max-w-6xl" />

      <TemplateBand tint="muted">
        <TemplateContent width="wide">
          <h2 className="mb-8 font-heading text-xl font-semibold tracking-tight md:text-2xl">
            More from this week
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {stories.map((story) => (
              <Card key={story.title} className="overflow-hidden py-0">
                <ComposedPhoto
                  variant={story.variant}
                  className="aspect-video rounded-none"
                />
                <CardHeader>
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    {story.tag}
                  </p>
                  <CardTitle className="leading-snug">{story.title}</CardTitle>
                  <CardDescription>{story.meta}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TemplateContent>
      </TemplateBand>

      <TemplateNewsletterBand
        title="The Weekly in your inbox"
        description="One essay, three stories, and a design note every Sunday morning."
      />

      <TemplateFooter
        logo={narrative.brand}
        columns={[
          { title: "Sections", links: ["Culture", "Design", "Technology", "Essays"] },
          { title: "Subscribe", links: ["Newsletter", "Podcast", "Print edition"] },
          { title: "About", links: ["Masthead", "Advertise", "Contact", "Careers"] },
        ]}
      />
    </TemplateSurface>
  )
}
