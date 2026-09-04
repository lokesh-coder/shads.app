import { CheckCircle2Icon, DownloadIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Eyebrow,
  IconTile,
  ListRow,
  MetricValue,
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

export function SuccessReceiptShowcase() {
  return (
    <Card className={showcaseCard.accent}>
      <CardContent className="pt-(--card-spacing)">
        <ShowcaseContent>
          <div className="flex flex-col items-center gap-2 py-2 text-center">
            <IconTile
              icon={CheckCircle2Icon}
              status="success"
              className="size-12 rounded-full border-primary/20 bg-primary/10 [&_svg]:text-primary"
            />
            <p className="font-heading text-lg font-semibold">Thank you!</p>
            <Eyebrow className="normal-case">
              Order #ORD-28491 · confirmation sent to jordan@studio.io
            </Eyebrow>
          </div>
          <Separator />
          <MetricValue label="Amount paid" value="$333.45" />
          <ListRow
            title="Payment method"
            description="Visa •••• 4242"
            className="px-0"
          />
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="border-t border-primary/10 bg-primary/[0.02]">
        <Button variant="outline" className="w-full">
          <DownloadIcon data-icon="inline-start" />
          Download receipt
        </Button>
      </CardFooter>
    </Card>
  )
}
