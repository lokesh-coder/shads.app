import type { ReactNode } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

import { StarRating } from "./template-visuals"
import { TemplateBand, TemplateContent } from "./template-ui"

export function TemplateSectionHeading({
  title,
  description,
  className,
}: {
  title: string
  description?: string
  className?: string
}) {
  return (
    <div className={cn("mb-8 max-w-2xl", className)}>
      <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-2 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}

export function TemplateLogoStrip({
  logos,
  caption = "Trusted by product teams worldwide",
}: {
  logos: string[]
  caption?: string
}) {
  return (
    <TemplateBand tint="muted">
      <TemplateContent width="wide">
        <p className="mb-8 text-center text-sm text-muted-foreground">{caption}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {logos.map((name) => (
            <span key={name} className="font-heading text-sm font-semibold opacity-60">
              {name}
            </span>
          ))}
        </div>
      </TemplateContent>
    </TemplateBand>
  )
}

export function TemplateStatsBand({
  stats,
}: {
  stats: { value: string; label: string }[]
}) {
  return (
    <TemplateBand tint="accent">
      <TemplateContent width="wide">
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-semibold tabular-nums md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </TemplateContent>
    </TemplateBand>
  )
}

export function TemplateTestimonials({
  items,
}: {
  items: {
    quote: string
    name: string
    role: string
    company: string
    initials: string
  }[]
}) {
  return (
    <TemplateBand>
      <TemplateContent width="wide">
        <TemplateSectionHeading
          title="Loved by teams who ship fast"
          description="Real feedback from design and engineering leaders."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.name} size="sm">
              <CardHeader>
                <p className="text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              </CardHeader>
              <CardContent className="flex items-center gap-3 pt-0">
                <Avatar>
                  <AvatarFallback className="text-xs">{item.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.role} · {item.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TemplateContent>
    </TemplateBand>
  )
}

export function TemplateFAQ({
  items,
  title = "Frequently asked questions",
}: {
  title?: string
  items: { question: string; answer: string }[]
}) {
  return (
    <TemplateBand tint="muted">
      <TemplateContent width="narrow">
        <TemplateSectionHeading title={title} />
        <Accordion defaultValue={[items[0]?.question]}>
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </TemplateContent>
    </TemplateBand>
  )
}

export function TemplateCTABand({
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: {
  title: string
  description?: string
  primaryLabel: string
  secondaryLabel?: string
}) {
  return (
    <TemplateBand tint="accent">
      <TemplateContent width="narrow" className="text-center">
        <h2 className="font-heading text-2xl font-semibold md:text-3xl">{title}</h2>
        {description ? (
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">{description}</p>
        ) : null}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button size="lg">{primaryLabel}</Button>
          {secondaryLabel ? (
            <Button size="lg" variant="outline">
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </TemplateContent>
    </TemplateBand>
  )
}

export function TemplateTrustStrip({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-y border-border/60 py-4 text-xs text-muted-foreground">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}

export function TemplateReviews({
  items,
}: {
  items: { quote: string; author: string; rating?: number }[]
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <Card key={item.author} size="sm">
          <CardHeader>
            <StarRating count={item.rating ?? 5} />
            <CardDescription className="mt-2 leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-sm font-medium">{item.author}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function TemplateNewsletterBand({
  title = "Stay in the loop",
  description = "Product updates. No spam.",
}: {
  title?: string
  description?: string
}) {
  return (
    <TemplateBand>
      <TemplateContent width="narrow">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 sm:flex-row">
            <Input placeholder="you@company.com" className="flex-1" />
            <Button>Subscribe</Button>
          </CardContent>
        </Card>
      </TemplateContent>
    </TemplateBand>
  )
}

export function TemplatePullQuote({
  quote,
  attribution,
  className,
}: {
  quote: string
  attribution: string
  className?: string
}) {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-primary/40 py-2 pl-6 font-heading text-xl leading-snug italic md:text-2xl",
        className,
      )}
    >
      &ldquo;{quote}&rdquo;
      <footer className="mt-3 font-sans text-sm not-italic text-muted-foreground">
        — {attribution}
      </footer>
    </blockquote>
  )
}

export function TemplateFeatureSplit({
  title,
  description,
  visual,
  reverse = false,
}: {
  title: string
  description: string
  visual: ReactNode
  reverse?: boolean
}) {
  return (
    <div
      className={cn(
        "grid items-center gap-8 lg:grid-cols-2",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div>
        <h3 className="font-heading text-xl font-semibold md:text-2xl">{title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div>{visual}</div>
    </div>
  )
}
