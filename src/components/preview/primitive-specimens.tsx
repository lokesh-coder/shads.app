import type { ComponentType } from "react"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlertCircleIcon,
  BellIcon,
  BookmarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CopyIcon,
  GridIcon,
  HeartIcon,
  HelpCircleIcon,
  InfoIcon,
  ListIcon,
  LogOutIcon,
  PencilIcon,
  PlusIcon,
  SettingsIcon,
  StarIcon,
  Trash2Icon,
  UserIcon,
} from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { toast } from "sonner"

import { PersonAvatar } from "@/components/media/person-avatar"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const chartData = [
  { day: "M", visits: 120 },
  { day: "T", visits: 186 },
  { day: "W", visits: 142 },
  { day: "T", visits: 210 },
  { day: "F", visits: 168 },
]

const chartConfig = {
  visits: { label: "Visits", color: "var(--chart-1)" },
} satisfies ChartConfig

function ActionsPrimitive() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive" size="sm">
        <Trash2Icon data-icon="inline-start" />
        Delete
      </Button>
    </div>
  )
}

function ButtonGroupsPrimitive() {
  return (
    <div className="flex flex-col items-center gap-3">
      <ToggleGroup defaultValue={["list"]} spacing={0} variant="outline">
        <ToggleGroupItem value="list" aria-label="List view">
          <ListIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="grid" aria-label="Grid view">
          <GridIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup defaultValue={["left"]} spacing={0} variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

function IconsPrimitive() {
  return (
    <div className="flex items-center gap-3 text-muted-foreground">
      <HeartIcon className="size-4" />
      <StarIcon className="size-5 text-primary" />
      <BellIcon className="size-6" />
      <BookmarkIcon className="size-7 opacity-60" />
      <Button size="icon" variant="outline">
        <PlusIcon />
      </Button>
    </div>
  )
}

function MenusPrimitive() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        Open menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ChartsPrimitive() {
  return (
    <ChartContainer config={chartConfig} className="aspect-auto h-32 w-full max-w-xs">
      <BarChart data={chartData} accessibilityLayer>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={6} />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="visits" fill="var(--color-visits)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}

function TablePrimitive() {
  return (
    <Table className="max-w-sm">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">MRR</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Acme Corp</TableCell>
          <TableCell>
            <Badge variant="secondary">Active</Badge>
          </TableCell>
          <TableCell className="text-right tabular-nums">$420</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Northwind</TableCell>
          <TableCell>
            <Badge variant="outline">Trial</Badge>
          </TableCell>
          <TableCell className="text-right tabular-nums">$0</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Globex</TableCell>
          <TableCell>
            <Badge variant="destructive">Past due</Badge>
          </TableCell>
          <TableCell className="text-right tabular-nums">$890</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

function InputsPrimitive() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Input placeholder="Email address" />
      <Select defaultValue="designer">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="designer">Designer</SelectItem>
          <SelectItem value="engineer">Engineer</SelectItem>
        </SelectContent>
      </Select>
      <Textarea placeholder="Message" className="min-h-16 resize-none" />
    </div>
  )
}

function FieldPrimitive() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="prim-name">Display name</FieldLabel>
          <Input id="prim-name" defaultValue="Jordan Lee" />
          <FieldDescription>Shown on comments and shared links.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}

function TogglesPrimitive() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <Label htmlFor="prim-push">Push alerts</Label>
        <Switch id="prim-push" defaultChecked />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="prim-terms" defaultChecked />
        <Label htmlFor="prim-terms" className="font-normal">
          Include updates
        </Label>
      </div>
      <RadioGroup defaultValue="instant" className="flex gap-4">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="instant" id="prim-instant" />
          <Label htmlFor="prim-instant" className="font-normal">
            Instant
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="daily" id="prim-daily" />
          <Label htmlFor="prim-daily" className="font-normal">
            Daily
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}

function SlidersPrimitive() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Slider defaultValue={[72]} max={100} step={1} />
      <Progress value={64}>
        <ProgressLabel>Storage</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  )
}

function PopoversPrimitive() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
      <PopoverContent className="w-64">
        <PopoverHeader>
          <PopoverTitle>Invite</PopoverTitle>
          <PopoverDescription>Share access with your team.</PopoverDescription>
        </PopoverHeader>
        <div className="flex gap-2">
          <Input readOnly value="app.io/r/8xk2" className="text-xs" />
          <Button size="sm">
            <CopyIcon data-icon="inline-start" />
            Copy
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

function TooltipPrimitive() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            <InfoIcon data-icon="inline-start" />
            Hover me
          </TooltipTrigger>
          <TooltipContent>Tooltip content preview</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={<Button variant="ghost" size="icon" aria-label="Help" />}
          >
            <HelpCircleIcon />
          </TooltipTrigger>
          <TooltipContent>More info</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}

function BadgesPrimitive() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}

function TabsPrimitive() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-xs">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="files">Files</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="text-sm text-muted-foreground">
        Tab panel content
      </TabsContent>
    </Tabs>
  )
}

function AccordionPrimitive() {
  return (
    <Accordion defaultValue={["item-1"]} className="w-full max-w-xs">
      <AccordionItem value="item-1">
        <AccordionTrigger>When will I be charged?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Your card is charged when the trial ends.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Yes — cancel from settings with no lock-in.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function CollapsiblePrimitive() {
  return (
    <Collapsible defaultOpen className="w-full max-w-xs rounded-lg border border-border">
      <CollapsibleTrigger className="group flex w-full items-center justify-between px-3 py-2 text-sm font-medium">
        <span>Developer options</span>
        <ChevronDownIcon className="size-4 transition-transform group-data-open:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t border-border px-3 py-3 text-sm text-muted-foreground">
        Debug logging and beta features
      </CollapsibleContent>
    </Collapsible>
  )
}

function AlertsPrimitive() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Alert>
        <InfoIcon />
        <AlertTitle>Update available</AlertTitle>
        <AlertDescription>Version 2.4 is ready to install.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>Update your card to restore access.</AlertDescription>
      </Alert>
    </div>
  )
}

function AlertDialogPrimitive() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        Delete project
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete project?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

function DialogsPrimitive() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <PencilIcon data-icon="inline-start" />
        Open dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rename project</DialogTitle>
          <DialogDescription>Updates the name across your workspace.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="prim-rename">Project name</Label>
          <Input id="prim-rename" defaultValue="Acme Design" />
        </div>
        <Button className="w-fit">Save</Button>
      </DialogContent>
    </Dialog>
  )
}

function AvatarsPrimitive() {
  return (
    <div className="flex items-center -space-x-2">
      <PersonAvatar name="Sam Rivera" seed="Sam Rivera" className="ring-2 ring-background" />
      <PersonAvatar name="Priya Nair" seed="Priya Nair" className="ring-2 ring-background" />
      <PersonAvatar name="Chris Wu" seed="Chris Wu" className="ring-2 ring-background" />
      <Button variant="outline" size="icon-sm" className="relative z-10 rounded-full">
        <PlusIcon />
      </Button>
    </div>
  )
}

function BreadcrumbPrimitive() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRightIcon className="size-3.5" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Projects</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRightIcon className="size-3.5" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Acme</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

function ToastPrimitive() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button variant="outline" size="sm" onClick={() => toast.success("Theme saved")}>
        Success
      </Button>
      <Button variant="outline" size="sm" onClick={() => toast.error("Export failed")}>
        Error
      </Button>
      <Button variant="outline" size="sm" onClick={() => toast.message("Syncing tokens…")}>
        Message
      </Button>
    </div>
  )
}

function SheetPrimitive() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open sheet</SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>Display</SheetTitle>
          <SheetDescription>Adjust how the app looks.</SheetDescription>
        </SheetHeader>
        <div className="flex items-center justify-between gap-3 px-4 py-2">
          <Label htmlFor="prim-compact">Compact mode</Label>
          <Switch id="prim-compact" defaultChecked />
        </div>
      </SheetContent>
    </Sheet>
  )
}

function SkeletonPrimitive() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-3/5" />
          <Skeleton className="h-3 w-2/5" />
        </div>
      </div>
      <Skeleton className="h-16 w-full rounded-lg" />
    </div>
  )
}

function ProgressPrimitive() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Progress value={72}>
        <ProgressLabel>Uploading</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={38}>
        <ProgressLabel>Processing</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  )
}

function SeparatorPrimitive() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 text-sm">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Subtotal</span>
        <span className="tabular-nums">$288.00</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between font-medium">
        <span>Total</span>
        <span className="tabular-nums">$336.00</span>
      </div>
      <div className="flex items-center gap-3 text-muted-foreground">
        <span>Visa ·4242</span>
        <Separator orientation="vertical" className="h-4" />
        <span>Mar 12</span>
      </div>
    </div>
  )
}

function ScrollAreaPrimitive() {
  const items = ["Deploy finished", "Invoice paid", "New comment", "Build failed", "Export ready"]

  return (
    <ScrollArea className="h-32 w-full max-w-xs rounded-md border border-border pr-3">
      <div className="flex flex-col gap-1 p-2">
        {items.map((item) => (
          <div key={item} className="rounded-md px-2 py-1.5 text-sm hover:bg-muted/50">
            {item}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export type PrimitiveSpecimenEntry = {
  id: string
  component: ComponentType
}

export const PRIMITIVE_SPECIMEN_ENTRIES: PrimitiveSpecimenEntry[] = [
  { id: "actions", component: ActionsPrimitive },
  { id: "button-groups", component: ButtonGroupsPrimitive },
  { id: "icons", component: IconsPrimitive },
  { id: "menus", component: MenusPrimitive },
  { id: "charts", component: ChartsPrimitive },
  { id: "table", component: TablePrimitive },
  { id: "inputs", component: InputsPrimitive },
  { id: "field", component: FieldPrimitive },
  { id: "toggles", component: TogglesPrimitive },
  { id: "sliders", component: SlidersPrimitive },
  { id: "popovers", component: PopoversPrimitive },
  { id: "tooltip", component: TooltipPrimitive },
  { id: "badges", component: BadgesPrimitive },
  { id: "tabs", component: TabsPrimitive },
  { id: "accordion", component: AccordionPrimitive },
  { id: "collapsible", component: CollapsiblePrimitive },
  { id: "alerts", component: AlertsPrimitive },
  { id: "alert-dialog", component: AlertDialogPrimitive },
  { id: "dialogs", component: DialogsPrimitive },
  { id: "avatars", component: AvatarsPrimitive },
  { id: "breadcrumb", component: BreadcrumbPrimitive },
  { id: "toast", component: ToastPrimitive },
  { id: "sheet", component: SheetPrimitive },
  { id: "skeleton", component: SkeletonPrimitive },
  { id: "progress", component: ProgressPrimitive },
  { id: "separator", component: SeparatorPrimitive },
  { id: "scroll-area", component: ScrollAreaPrimitive },
]
