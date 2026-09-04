import { CreditCardIcon, FileTextIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TEMPLATE_NARRATIVES } from "./template-narratives"
import { TemplateTrustStrip } from "./template-sections"
import { SparkBars } from "./template-visuals"
import {
  TemplateContent,
  TemplateLogo,
  TemplateSurface,
  TemplateTableCard,
  TemplateTopNav,
} from "./template-ui"

const narrative = TEMPLATE_NARRATIVES.ledger

const accounts = [
  { label: "Operating", amount: "$198,240", change: "+2.1% this month" },
  { label: "Payroll", amount: "$62,100", change: "Scheduled Mar 15" },
  { label: "Reserve", amount: "$24,580", change: "+0.4%" },
  { label: "Corporate cards", amount: "$8,420", change: "-$820 MTD" },
] as const

const cashFlow = [42, 58, 51, 67, 72, 68, 84, 78, 91, 86, 94, 88] as const

const upcoming = [
  { label: "Payroll run", amount: "-$48,200", date: "Mar 15", type: "payroll" as const },
  { label: "AWS invoice", amount: "-$3,820", date: "Mar 18", type: "invoice" as const },
  { label: "Stripe payout", amount: "+$12,400", date: "Mar 20", type: "deposit" as const },
  { label: "Office lease", amount: "-$8,500", date: "Mar 22", type: "invoice" as const },
] as const

const corporateCards = [
  { holder: "Jordan Lee", last4: "4821", limit: "$5,000", spent: "$2,140", category: "Travel" },
  { holder: "Sam Patel", last4: "7392", limit: "$3,000", spent: "$1,820", category: "Software" },
  { holder: "Riley Chen", last4: "1056", limit: "$2,500", spent: "$890", category: "Meals" },
] as const

export function LedgerTemplate() {
  return (
    <TemplateSurface>
      {/* 1. Banking header */}
      <TemplateTopNav
        logo={<TemplateLogo name={narrative.brand} />}
        links={[
          { label: "Accounts", active: true },
          { label: "Cards" },
          { label: "Treasury" },
          { label: "Reports" },
        ]}
        trailing={
          <>
            <Button variant="outline" size="sm">
              <FileTextIcon data-icon="inline-start" />
              Statements
            </Button>
            <Button size="sm">Transfer</Button>
          </>
        }
      />

      <TemplateContent width="wide" className="flex flex-col gap-8 py-8">
        {/* 2. Balance hero typography */}
        <div>
          <p className="text-sm text-muted-foreground">{narrative.tagline}</p>
          <p className="mt-2 text-sm text-muted-foreground">Total balance</p>
          <h1 className="font-heading text-4xl font-semibold tabular-nums tracking-tight md:text-5xl">
            {narrative.hero}
          </h1>
          <p className="mt-2 text-sm text-primary">+$12,400 today · {narrative.subhero}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button>Add funds</Button>
            <Button variant="outline">Send wire</Button>
            <Button variant="outline">Pay invoice</Button>
          </div>
        </div>

        {/* 3. Four account Cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {accounts.map((account) => (
            <Card key={account.label} size="sm">
              <CardHeader>
                <CardDescription>{account.label}</CardDescription>
                <CardTitle className="font-heading text-xl tabular-nums">
                  {account.amount}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground">{account.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          {/* 4. Cash flow SparkBars Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Cash flow</CardTitle>
              <CardDescription>Net inflow · last 12 weeks</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-end justify-between">
                <p className="font-heading text-2xl font-semibold tabular-nums">+$34,200</p>
                <Badge variant="secondary">+8.4%</Badge>
              </div>
              <SparkBars values={[...cashFlow]} className="h-16" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>12 wks ago</span>
                <span>This week</span>
              </div>
            </CardContent>
          </Card>

          {/* 5. Transaction table */}
          <div className="lg:col-span-3">
            <TemplateTableCard
              title="Recent transactions"
              description="Operating and payroll accounts"
              action={<Badge variant="secondary">USD</Badge>}
              columns={["Description", "Account", "Amount", "Date", "Status"]}
              rows={[
                [
                  "Stripe payout",
                  "Operating",
                  <span key="s1" className="text-primary">+$12,400</span>,
                  "Today",
                  <Badge key="s1b" variant="outline">Settled</Badge>,
                ],
                [
                  "AWS invoice",
                  "Operating",
                  "-$3,820",
                  "Yesterday",
                  <Badge key="s2b" variant="outline">Settled</Badge>,
                ],
                [
                  "Payroll run",
                  "Payroll",
                  "-$48,200",
                  "Mon",
                  <Badge key="s3b" variant="secondary">Pending</Badge>,
                ],
                [
                  "Wire — Acme Corp",
                  "Operating",
                  <span key="s4" className="text-primary">+$22,000</span>,
                  "Sun",
                  <Badge key="s4b" variant="outline">Settled</Badge>,
                ],
                [
                  "Gusto fees",
                  "Payroll",
                  "-$142",
                  "Sun",
                  <Badge key="s5b" variant="outline">Settled</Badge>,
                ],
              ]}
            />
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* 6. Upcoming payroll / invoices */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming payroll & invoices</CardTitle>
              <CardDescription>Scheduled outflows and deposits · next 14 days</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {upcoming.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border/50 p-3"
                >
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={item.type === "deposit" ? "secondary" : "outline"}
                      className="text-[10px] uppercase"
                    >
                      {item.type}
                    </Badge>
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <span
                    className={
                      item.amount.startsWith("+")
                        ? "text-sm font-medium tabular-nums text-primary"
                        : "text-sm font-medium tabular-nums"
                    }
                  >
                    {item.amount}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 7. Corporate cards snapshot */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCardIcon className="size-4" />
                Corporate cards
              </CardTitle>
              <CardDescription>3 active cards · $4,850 spent MTD</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {corporateCards.map((card) => (
                <div
                  key={card.last4}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border/50 p-3"
                >
                  <div>
                    <p className="text-sm font-medium">{card.holder}</p>
                    <p className="text-xs text-muted-foreground">
                      ···· {card.last4} · {card.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium tabular-nums">{card.spent}</p>
                    <p className="text-xs text-muted-foreground">of {card.limit}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="mt-1 w-fit">
                Manage cards
              </Button>
            </CardContent>
          </Card>
        </div>
      </TemplateContent>

      {/* 8. Compliance reassurance strip */}
      <TemplateTrustStrip
        items={[
          "FDIC insured",
          "SOC 2 Type II",
          "256-bit encryption",
          "24/7 fraud monitoring",
        ]}
      />
    </TemplateSurface>
  )
}
