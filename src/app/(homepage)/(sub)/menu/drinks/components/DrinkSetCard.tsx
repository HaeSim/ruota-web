import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { DrinkSet } from "../data"
import { icons } from "../icons"

export function DrinkSetCard({ set }: { set: DrinkSet }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold sm:text-2xl">
              {set.name}
              <span className="ml-2 text-base text-gray-500 sm:text-lg">({set.nameEn})</span>
            </CardTitle>
            <CardDescription className="mt-1 text-base sm:text-lg">{set.description}</CardDescription>
          </div>
          <div className="ml-4 flex-shrink-0">{icons[set.id as keyof typeof icons]}</div>
        </div>
        <div className="mt-4 space-y-2">
          {set.features.map((feature, index) => (
            <p key={index} className="text-xs text-gray-600 sm:text-sm">
              • {feature}
            </p>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex justify-center">
          {/* 모바일 바텀시트 */}
          <div className="block sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  메뉴판 보기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M3 15h18" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[90vh]">
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">
                    {set.name} 메뉴판
                    <span className="ml-2 text-base text-gray-500">({set.nameEn})</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="relative mt-4 h-[calc(90vh-80px)] w-full overflow-hidden rounded-lg">
                  <Image
                    src={`/images/menu/drink/set-${set.id.charAt(0).toLowerCase()}.webp`}
                    alt={`${set.name} 메뉴판`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* 데스크톱 모달 */}
          <div className="hidden sm:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  메뉴판 보기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M3 15h18" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                  </svg>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    {set.name} 메뉴판
                    <span className="ml-2 text-base text-gray-500">({set.nameEn})</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="relative aspect-[1280/1810] w-full overflow-hidden rounded-lg">
                  <Image
                    src={`/images/menu/drink/set-${set.id.charAt(0).toLowerCase()}.webp`}
                    alt={`${set.name} 메뉴판`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <ScrollArea className="h-[300px] pr-4 sm:h-[400px]">
          {set.categories.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="mb-3 text-base font-semibold sm:text-lg">
                {category.title}
                <span className="ml-2 text-xs text-gray-500 sm:text-sm">({category.titleEn})</span>
              </h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between rounded-lg border p-2 sm:p-3">
                    <div>
                      <p className="text-sm font-medium sm:text-base">{item.name}</p>
                      <p className="text-xs text-gray-500 sm:text-sm">{item.nameEn}</p>
                    </div>
                    <div className="flex gap-1">
                      {item.isHotOnly && (
                        <Badge variant="destructive" className="text-[10px] sm:text-xs">
                          HOT ONLY
                        </Badge>
                      )}
                      {item.isIceOnly && (
                        <Badge variant="default" className="text-[10px] sm:text-xs">
                          ICE ONLY
                        </Badge>
                      )}
                      {!item.isHotOnly && !item.isIceOnly && (
                        <>
                          <Badge variant="outline" className="text-[10px] sm:text-xs">
                            HOT
                          </Badge>
                          <Badge variant="outline" className="text-[10px] sm:text-xs">
                            ICE
                          </Badge>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {index < set.categories.length - 1 && <Separator className="my-4" />}
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
