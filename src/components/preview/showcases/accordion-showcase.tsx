import { HelpCircleIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  IconTile,
  InsetPanel,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function AccordionShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <div className="flex items-start gap-3">
          <IconTile icon={HelpCircleIcon} />
          <div>
            <CardTitle>Billing FAQ</CardTitle>
            <CardDescription>
              Common questions about your subscription
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <InsetPanel className="p-0">
          <Accordion defaultValue={["shipping"]} className="px-1">
            <AccordionItem value="shipping" className="border-border/60">
              <AccordionTrigger className="px-3 text-sm">
                When will I be charged?
              </AccordionTrigger>
              <AccordionContent className="px-3 text-xs text-muted-foreground">
                Your card is charged when the trial ends or you upgrade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns" className="border-border/60">
              <AccordionTrigger className="px-3 text-sm">
                Can I cancel anytime?
              </AccordionTrigger>
              <AccordionContent className="px-3 text-xs text-muted-foreground">
                Yes — cancel from settings with no lock-in period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="refund" className="border-border/60">
              <AccordionTrigger className="px-3 text-sm">
                Do you offer refunds?
              </AccordionTrigger>
              <AccordionContent className="px-3 text-xs text-muted-foreground">
                Full refunds within 14 days of your first payment.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </InsetPanel>
      </CardContent>
      <CardFooter className="border-t border-border/60 bg-muted/20">
        <p className="text-xs text-muted-foreground">
          Need help? Contact support@studio.io
        </p>
      </CardFooter>
    </Card>
  )
}
