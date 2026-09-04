import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  InsetPanel,
  ListRow,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

const cookies = [
  { id: "essential", label: "Essential", desc: "Required for the site to work", on: true, disabled: true },
  { id: "analytics", label: "Analytics", desc: "Help us improve the product", on: true },
  { id: "marketing", label: "Marketing", desc: "Personalized ads and offers", on: false },
]

export function CookieBannerShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle>Cookie preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <p className="text-sm text-muted-foreground">
            We use cookies to improve your experience and analyze site traffic. You
            can customize which cookies we use.
          </p>
          <InsetPanel className="flex flex-col gap-0 p-0">
            {cookies.map((cookie, i) => (
              <div key={cookie.id}>
                {i > 0 ? <Separator /> : null}
                <ListRow
                  title={cookie.label}
                  description={cookie.desc}
                  trailing={
                    <Switch
                      id={`sc-cookie-${cookie.id}`}
                      defaultChecked={cookie.on}
                      disabled={cookie.disabled}
                    />
                  }
                  className="px-3"
                />
              </div>
            ))}
          </InsetPanel>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="gap-2 border-t border-border/60 bg-muted/20">
        <Button variant="outline" size="sm" className="flex-1">
          Reject all
        </Button>
        <Button size="sm" className="flex-1">
          Accept all
        </Button>
      </CardFooter>
    </Card>
  )
}
