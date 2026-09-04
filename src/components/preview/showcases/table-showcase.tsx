import { MoreHorizontalIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  InsetPanel,
  showcaseCard,
  showcaseHeader,
} from "./showcase-ui"

const rows = [
  { name: "Acme Corp", status: "Active", plan: "Pro", mrr: "$420" },
  { name: "Northwind", status: "Trial", plan: "Starter", mrr: "$0" },
  { name: "Globex", status: "Past due", plan: "Team", mrr: "$890" },
  { name: "Initech", status: "Active", plan: "Enterprise", mrr: "$2.1k" },
]

const totalMrr = "$3.4k"

export function TableShowcase() {
  return (
    <Card className={showcaseCard.base}>
      <CardHeader className={showcaseHeader.data}>
        <CardTitle>Customers</CardTitle>
        <CardAction>
          <Badge variant="outline" className="tabular-nums">
            {rows.length} accounts
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <InsetPanel className="overflow-hidden p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">MRR</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">{row.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {row.plan}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        row.status === "Active"
                          ? "secondary"
                          : row.status === "Past due"
                            ? "destructive"
                            : "outline"
                      }
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {row.mrr}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={<Button variant="ghost" size="icon-sm" />}
                      >
                        <MoreHorizontalIcon />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Send invoice</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </InsetPanel>
      </CardContent>
      <CardFooter className="justify-between border-t border-border/60 bg-muted/20">
        <span className="text-xs text-muted-foreground">Total MRR</span>
        <span className="text-sm font-semibold tabular-nums">{totalMrr}</span>
      </CardFooter>
    </Card>
  )
}
