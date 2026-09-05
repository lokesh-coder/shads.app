import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

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
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { ComposedPhoto } from "./template-visuals"

/** Transparent page wrapper — canvas comes from TemplateRoot. */
export function TemplateSurface({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={cn("min-h-full w-full", className)}>{children}</div>
}

export function TemplateTopNav({
  logo,
  links,
  trailing,
  className,
  border = true,
}: {
  logo: ReactNode
  links?: { label: string; active?: boolean }[]
  trailing?: ReactNode
  className?: string
  border?: boolean
}) {
  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 bg-background/90 px-4 py-3 backdrop-blur-md md:px-8",
        border && "border-b border-border/70",
        className,
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-6">
        <div className="shrink-0">{logo}</div>
        {links?.length ? (
          <nav className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <span
                key={link.label}
                className={cn(
                  "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                  link.active
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </span>
            ))}
          </nav>
        ) : null}
      </div>
      {trailing ? (
        <div className="flex shrink-0 flex-wrap items-center gap-2">{trailing}</div>
      ) : null}
    </header>
  )
}

export function TemplateLogo({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  return (
    <span className={cn("font-heading text-sm font-semibold tracking-tight", className)}>
      {name}
    </span>
  )
}

export function TemplateContent({
  className,
  children,
  width = "default",
}: {
  className?: string
  children: ReactNode
  width?: "narrow" | "default" | "wide" | "full"
}) {
  const widthClass = {
    narrow: "max-w-3xl",
    default: "max-w-5xl",
    wide: "max-w-6xl",
    full: "max-w-none",
  }[width]

  return (
    <div className={cn("mx-auto w-full px-4 md:px-8", widthClass, className)}>
      {children}
    </div>
  )
}

export function TemplateBand({
  className,
  children,
  tint = "default",
}: {
  className?: string
  children: ReactNode
  tint?: "default" | "muted" | "accent"
}) {
  return (
    <div
      className={cn(
        "w-full py-10 md:py-14",
        tint === "muted" && "bg-muted/30",
        tint === "accent" && "bg-primary/[0.04]",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function TemplateHero({
  eyebrow,
  title,
  description,
  actions,
  media,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  actions?: ReactNode
  media?: ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <section className={cn("relative w-full", align === "center" && "text-center", className)}>
      {media}
      <div
        className={cn(
          "flex flex-col gap-4 px-4 py-12 md:px-8 md:py-16",
          align === "center" && "mx-auto max-w-3xl items-center",
          !media && "max-w-3xl",
        )}
      >
        {eyebrow ? (
          <Badge variant="secondary" className="w-fit">
            {eyebrow}
          </Badge>
        ) : null}
        <h1 className="font-heading text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">{description}</p>
        ) : null}
        {actions ? <div className="flex flex-wrap gap-2 pt-2">{actions}</div> : null}
      </div>
    </section>
  )
}

export function TemplateFooter({
  logo,
  columns,
}: {
  logo: string
  columns: { title: string; links: string[] }[]
}) {
  return (
    <footer className="border-t border-border/70 bg-muted/20 px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-heading text-sm font-semibold">{logo}</p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-medium">{column.title}</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              {column.links.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator className="mx-auto my-8 max-w-6xl" />
      <p className="mx-auto max-w-6xl text-xs text-muted-foreground">© 2026 {logo}</p>
    </footer>
  )
}

/** Metric tiles using shadcn Card — respects data-card-mode personality. */
export function TemplateMetricGrid({
  stats,
  columns = 4,
}: {
  stats: { label: string; value: string; change?: string; trend?: "up" | "down" }[]
  columns?: 2 | 3 | 4
}) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 xl:grid-cols-4",
  }[columns]

  return (
    <div className={cn("grid gap-3", colClass)}>
      {stats.map((stat) => (
        <Card key={stat.label} size="sm">
          <CardHeader className="pb-2">
            <CardDescription className="text-[11px] uppercase tracking-wide">
              {stat.label}
            </CardDescription>
            <CardTitle className="font-heading text-2xl font-semibold tabular-nums">
              {stat.value}
            </CardTitle>
          </CardHeader>
          {stat.change ? (
            <CardFooter className="border-t-0 pt-0">
              <p
                className={cn(
                  "text-xs",
                  stat.trend === "down" ? "text-destructive" : "text-primary",
                )}
              >
                {stat.change}
              </p>
            </CardFooter>
          ) : null}
        </Card>
      ))}
    </div>
  )
}

/** Data table inside Card — theme-native density and borders. */
export function TemplateTableCard({
  title,
  description,
  action,
  columns,
  rows,
}: {
  title?: string
  description?: string
  action?: ReactNode
  columns: string[]
  rows: ReactNode[][]
}) {
  return (
    <Card>
      {title ? (
        <CardHeader className="flex flex-row items-start justify-between gap-3">
          <div>
            <CardTitle>{title}</CardTitle>
            {description ? <CardDescription>{description}</CardDescription> : null}
          </div>
          {action}
        </CardHeader>
      ) : null}
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column}>{column}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export function TemplateProductCard({
  name,
  price,
  detail,
  aspect = "portrait",
  cta = "Add to bag",
  badge,
  variant = "interior",
}: {
  name: string
  price: string
  detail?: string
  aspect?: "square" | "portrait" | "video"
  cta?: string
  badge?: string
  variant?: "editorial" | "warm" | "food" | "fashion" | "interior"
}) {
  const aspectClass = {
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    video: "aspect-video",
  }[aspect]

  return (
    <Card className="overflow-hidden py-0">
      <div className="relative">
        <ComposedPhoto
          variant={variant}
          seed={name}
          alt={name}
          className={cn(aspectClass, "rounded-none")}
        />
        {badge ? (
          <Badge className="absolute top-3 left-3" variant="secondary">
            {badge}
          </Badge>
        ) : null}
      </div>
      <CardHeader className="gap-1">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        {detail ? <CardDescription>{detail}</CardDescription> : null}
        <p className="font-heading text-base font-semibold tabular-nums">{price}</p>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="w-full">
          {cta}
        </Button>
      </CardFooter>
    </Card>
  )
}

export function TemplateFeatureGrid({
  features,
}: {
  features: { title: string; description: string }[]
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <Card key={feature.title} size="sm">
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription className="leading-relaxed">
              {feature.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}

export function TemplateNavItem({
  label,
  icon: Icon,
  active,
}: {
  label: string
  icon?: LucideIcon
  active?: boolean
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-sm",
        active ? "font-medium text-foreground" : "text-muted-foreground",
      )}
    >
      {Icon ? <Icon className="size-4 shrink-0" /> : null}
      {label}
    </span>
  )
}

export const TemplatePage = TemplateSurface
