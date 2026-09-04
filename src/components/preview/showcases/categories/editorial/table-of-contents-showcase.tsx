import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ShowcaseContent,
  showcaseCard,
} from "@/components/preview/showcases/showcase-ui"

const sections = [
  { title: "Introduction", active: false },
  { title: "The problem with monoliths", active: true },
  { title: "A modular approach", active: false },
  { title: "Migration strategies", active: false },
  { title: "Conclusion", active: false },
]

export function TableOfContentsShowcase() {
  return (
    <Card className={showcaseCard.editorial} size="sm">
      <CardHeader>
        <CardTitle className="text-lg">On this page</CardTitle>
      </CardHeader>
      <CardContent>
        <ShowcaseContent className="gap-0">
          <nav className="flex flex-col border-l-2 border-border pl-1">
            {sections.map((section) => (
              <a
                key={section.title}
                href="#"
                className={`rounded-r-lg border-l-2 py-2 pl-4 text-sm transition-colors -ml-0.5 ${
                  section.active
                    ? "border-primary font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:bg-muted/45 hover:text-foreground"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </ShowcaseContent>
      </CardContent>
    </Card>
  )
}
