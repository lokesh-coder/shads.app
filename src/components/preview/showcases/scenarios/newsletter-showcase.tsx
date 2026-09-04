import { MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  IconTile,
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function NewsletterShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-center gap-3">
          <IconTile icon={MailIcon} />
          <div>
            <CardTitle>Stay in the loop</CardTitle>
            <CardDescription>
              Get product updates, design tips, and early access to new features.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ShowcaseContent>
          <div className="flex gap-2">
            <Input type="email" placeholder="you@email.com" className="flex-1" />
            <Button size="sm">Subscribe</Button>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Join 12,400+ subscribers · No spam, unsubscribe anytime
          </p>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
