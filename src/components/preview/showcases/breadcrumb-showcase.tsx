import { ChevronRightIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Eyebrow,
  InsetPanel,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

export function BreadcrumbShowcase() {
  return (
    <Card className={showcaseCard.editorial}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Campaign editor</CardTitle>
        <CardDescription>Spring launch · Draft</CardDescription>
        <CardAction>
          <Button size="sm">Publish</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <InsetPanel>
          <Eyebrow>Navigation</Eyebrow>
          <Breadcrumb className="mt-2">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="size-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Campaigns</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="size-3.5" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Spring launch</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </InsetPanel>
      </CardContent>
      <CardFooter className="justify-between border-t border-border/60 bg-muted/20">
        <span className="text-xs text-muted-foreground">Last saved 5 min ago</span>
        <span className="text-xs text-muted-foreground">Auto-save on</span>
      </CardFooter>
    </Card>
  )
}
