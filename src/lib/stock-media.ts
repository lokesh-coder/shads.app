export type StockPhotoVariant =
  | "editorial"
  | "warm"
  | "food"
  | "fashion"
  | "interior"
  | "product"
  | "workspace"
  | "tech"
  | "health"
  | "education"

/** Curated Unsplash photo IDs — free to hotlink per Unsplash guidelines. */
const PHOTO_POOLS: Record<StockPhotoVariant, readonly string[]> = {
  editorial: [
    "1492724441997-5dc865305da7",
    "1456324502040-2a988e724598",
    "1509023469722-b1b001baefcc",
  ],
  warm: [
    "1586023492125-27b2c045efd7",
    "1616486338812-3dadae4b4ace",
    "1560448204-e02f11c3d0e2",
  ],
  food: [
    "1414235077428-338989a2e8c0",
    "1504674900247-0877df9cc836",
    "1546069901-ba9599a7e63c",
  ],
  fashion: [
    "1515886657613-9f3515b0c78f",
    "1469334031218-e982a37af360",
    "1483985988352-763728e0665e",
  ],
  interior: [
    "1616486338812-3dadae4b4ace",
    "1618221195710-dd575b830ff8",
    "1616136257949-3ae8548a2c8e",
  ],
  product: [
    "1523275335684-37898b6baf30",
    "1571781926291-c477ebfd024b",
    "1505740420928-5e560c06d30e",
  ],
  workspace: [
    "1497366216548-37526070297c",
    "1497366811973-8711730197bf",
    "1524758631624-f282581e8e80",
  ],
  tech: [
    "1555066931-4365d14bab8c",
    "1517694712202-14dd953cf4c0",
    "1460925895917-afdab827c52f",
  ],
  health: [
    "1576091160399-112ba8d25d1f",
    "1631217861764-f731b2c5a574",
    "1579684385127-1ef15d508118",
  ],
  education: [
    "1522202176988-66273c2fd55f",
    "1524178232363-1f2cf575da51",
    "1509062520806-0665e0e4d67f",
  ],
}

function hashSeed(input: string): number {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 31 + input.charCodeAt(i)) >>> 0
  }
  return hash
}

export function initialsFromName(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
}

/** Real portrait from pravatar.cc (free placeholder faces). */
export function avatarUrl(seed: string, size = 150): string {
  const index = (hashSeed(seed) % 70) + 1
  return `https://i.pravatar.cc/${size}?img=${index}`
}

export function stockPhotoUrl(
  variant: StockPhotoVariant,
  seed = "default",
  width = 1200,
  height?: number,
): string {
  const pool = PHOTO_POOLS[variant]
  const photoId = pool[hashSeed(seed) % pool.length]!
  const heightParam = height ? `&h=${height}` : ""
  return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}${heightParam}&q=80`
}
