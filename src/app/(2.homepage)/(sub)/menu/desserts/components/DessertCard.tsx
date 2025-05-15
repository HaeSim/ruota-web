import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export interface Dessert {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: string
}

export function DessertCard({ dessert, priority = false }: { dessert: Dessert; priority?: boolean }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3]">
        <Image
          src={dessert.image}
          alt={dessert.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          priority={priority}
        />
      </div>
      <CardHeader className="space-y-1 p-4 md:p-6">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-lg md:text-xl">{dessert.name}</CardTitle>
          <Badge variant="secondary" className="text-xs md:text-sm">
            {dessert.category}
          </Badge>
        </div>
        <CardDescription className="text-sm md:text-base">{dessert.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
        <div className="flex items-center justify-between">
          <span className="text-base font-medium md:text-lg">{dessert.price}</span>
        </div>
      </CardContent>
    </Card>
  )
}
