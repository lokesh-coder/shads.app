import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ShowcaseContent,
  showcaseCard,
  showcaseHeader,
} from "@/components/preview/showcases/showcase-ui"

export function SsoLoginShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.form}>
        <CardTitle className="text-center">Sign in to Acme</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-3">
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full">
            Continue with Microsoft
          </Button>
          <Button variant="outline" className="w-full">
            Continue with Okta
          </Button>
          <div className="flex items-center gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">or</span>
            <Separator className="flex-1" />
          </div>
          <Button className="w-full">
            Use email instead
          </Button>
        </ShowcaseContent>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-xs text-muted-foreground">
          SSO enabled by your organization
        </p>
      </CardFooter>
    </Card>
  )
}
