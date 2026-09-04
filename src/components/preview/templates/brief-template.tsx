import {
  AlertCircleIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CopyIcon,
  SearchIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import {
  TemplateBand,
  TemplateContent,
  TemplateLogo,
  TemplateSurface,
  TemplateTableCard,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.brief

const toc = [
  { label: "Overview", active: false },
  { label: "Authentication", active: false },
  { label: "OAuth 2.0", active: true },
  { label: "API keys", active: false },
  { label: "Webhooks", active: false },
  { label: "Rate limits", active: false },
  { label: "Errors", active: false },
] as const

const onPage = [
  { label: "Overview", active: false },
  { label: "Authorization flow", active: true },
  { label: "Token refresh", active: false },
  { label: "Scopes", active: false },
  { label: "Errors", active: false },
] as const

const parameters = [
  ["client_id", "string", "required", "Your application's client identifier"],
  ["redirect_uri", "string", "required", "HTTPS callback URL registered in the dashboard"],
  ["scope", "string", "optional", "Space-delimited list of permission scopes"],
  ["state", "string", "recommended", "Opaque value for CSRF protection"],
  ["code_challenge", "string", "PKCE", "SHA-256 challenge for public clients"],
] as const

const nextSteps = [
  { title: "API keys", description: "Server-to-server authentication without user consent" },
  { title: "Webhooks", description: "Receive real-time events for token lifecycle" },
  { title: "Rate limits", description: "Understand quotas and backoff strategies" },
] as const

const curlExample = `curl -X POST https://api.studio.dev/oauth/token \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=authorization_code" \\
  -d "code=AUTH_CODE_HERE" \\
  -d "client_id=your_client_id" \\
  -d "client_secret=your_client_secret" \\
  -d "redirect_uri=https://app.example.com/callback"`

export function BriefTemplate() {
  return (
    <TemplateSurface>
      {/* 1 — Docs header */}
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Guides" },
          { label: "API", active: true },
          { label: "SDKs" },
          { label: "Changelog" },
        ]}
        trailing={
          <>
            <div className="relative hidden sm:block">
              <SearchIcon className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search docs..." className="h-8 w-44 pl-8 text-sm" />
            </div>
            <Button variant="ghost" size="sm">
              <BookOpenIcon data-icon="inline-start" />
              Guides
            </Button>
            <Button size="sm">Dashboard</Button>
          </>
        }
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[180px_1fr_160px] md:px-8 md:py-12">
        {/* 2 — Sticky left TOC */}
        <nav className="sticky top-20 hidden h-fit flex-col gap-1 text-sm md:flex">
          <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Documentation
          </p>
          {toc.map((item) => (
            <span
              key={item.label}
              className={
                item.active
                  ? "rounded-md bg-muted px-2 py-1.5 font-medium text-foreground"
                  : "px-2 py-1.5 text-muted-foreground hover:text-foreground"
              }
            >
              {item.label}
            </span>
          ))}
        </nav>

        {/* 3–7 — Article body */}
        <article className="flex min-w-0 flex-col gap-6">
          {/* Breadcrumb + version */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">Authentication</Badge>
            <Badge variant="outline" className="font-mono text-[10px]">
              v2.4
            </Badge>
            <span className="text-xs text-muted-foreground">Updated Mar 4, 2026</span>
          </div>

          {/* Prose H1 */}
          <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            {narrative.hero}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            {narrative.subhero} Request scopes incrementally — start with read-only access
            and expand only when users explicitly grant permission.
          </p>

          {/* Alert callout */}
          <Alert>
            <AlertCircleIcon />
            <AlertTitle>Server-side only</AlertTitle>
            <AlertDescription>
              Never expose client secrets in browser code. Exchange authorization codes on
              your backend and store refresh tokens encrypted at rest.
            </AlertDescription>
          </Alert>

          {/* Code Card with curl */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-3 pb-2">
              <div>
                <CardTitle className="font-mono text-xs font-normal text-muted-foreground">
                  Request example
                </CardTitle>
                <CardDescription>Exchange an authorization code for tokens</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="size-8 shrink-0" aria-label="Copy">
                <CopyIcon className="size-3.5" />
              </Button>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-lg bg-muted/50 p-4 font-mono text-xs leading-relaxed">
                {curlExample}
              </pre>
            </CardContent>
          </Card>

          {/* Prose H2 */}
          <h2 className="font-heading text-xl font-semibold">Authorization flow</h2>
          <p className="leading-relaxed text-muted-foreground">
            Redirect users to the authorize URL with your client ID and requested scopes.
            After consent, exchange the authorization code for access and refresh tokens
            server-side. Access tokens expire after one hour; use the refresh token to
            obtain a new pair without re-prompting the user.
          </p>

          <h2 className="font-heading text-xl font-semibold">Parameters</h2>
          <p className="text-sm text-muted-foreground">
            Required and optional fields for the authorization request.
          </p>

          {/* Parameters table */}
          <TemplateTableCard
            columns={["Parameter", "Type", "Required", "Description"]}
            rows={parameters.map((row) => [
              <code key={row[0]} className="font-mono text-xs">
                {row[0]}
              </code>,
              <Badge key={`${row[0]}-type`} variant="outline" className="font-mono text-[10px]">
                {row[1]}
              </Badge>,
              <Badge
                key={`${row[0]}-req`}
                variant={row[2] === "required" ? "default" : "secondary"}
                className="text-[10px]"
              >
                {row[2]}
              </Badge>,
              row[3],
            ])}
          />

          <Button>
            Try in API explorer
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </article>

        {/* 8 — Sticky right "On this page" */}
        <aside className="sticky top-20 hidden h-fit flex-col gap-1 text-xs md:flex">
          <p className="mb-2 text-sm font-medium text-foreground">On this page</p>
          {onPage.map((item) => (
            <span
              key={item.label}
              className={
                item.active
                  ? "border-l-2 border-primary py-1 pl-3 font-medium text-foreground"
                  : "border-l-2 border-transparent py-1 pl-3 text-muted-foreground hover:text-foreground"
              }
            >
              {item.label}
            </span>
          ))}
        </aside>
      </div>

      {/* 9 — Next steps footer band */}
      <TemplateBand tint="muted" className="py-8">
        <TemplateContent width="wide">
          <p className="mb-4 text-sm font-medium">Next steps</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {nextSteps.map((step) => (
              <Card key={step.title} size="sm" className="transition-colors hover:bg-muted/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm">
                    {step.title}
                    <ArrowRightIcon className="size-3.5 text-muted-foreground" />
                  </CardTitle>
                  <CardDescription className="text-xs">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TemplateContent>
      </TemplateBand>
    </TemplateSurface>
  )
}
