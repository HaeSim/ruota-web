"use client"

import { GripVertical, Monitor, Smartphone } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for banners
const mobileBanners = [
  {
    id: 1,
    title: "여름 할인 프로모션",
    order: 1,
    status: "active",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "회원가입 이벤트",
    order: 2,
    status: "active",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    title: "모바일 앱 출시 기념",
    order: 3,
    status: "active",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
]

const pcBanners = [
  {
    id: 2,
    title: "신제품 출시 안내",
    order: 1,
    status: "active",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "가을 시즌 특별 할인",
    order: 2,
    status: "active",
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
]

export function BannerOrderManager() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeMobileBanners, setActiveMobileBanners] = useState(mobileBanners)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activePcBanners, setActivePcBanners] = useState(pcBanners)

  const handleSaveOrder = () => {
    // Here you would save the order to the backend
    console.log("Mobile banner order saved:", activeMobileBanners)
    console.log("PC banner order saved:", activePcBanners)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>배너 순서 관리</CardTitle>
        <CardDescription>드래그 앤 드롭으로 배너의 노출 순서를 변경할 수 있습니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="mobile" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mobile">
              <Smartphone className="mr-2 h-4 w-4" />
              모바일 배너
            </TabsTrigger>
            <TabsTrigger value="pc">
              <Monitor className="mr-2 h-4 w-4" />
              PC 배너
            </TabsTrigger>
          </TabsList>
          <TabsContent value="mobile">
            <div className="space-y-2">
              {activeMobileBanners.map((banner, index) => (
                <div key={banner.id} className="flex items-center space-x-4 rounded-md border p-4">
                  <div className="flex items-center justify-center">
                    <GripVertical className="text-muted-foreground h-5 w-5 cursor-move" />
                  </div>
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src={banner.imageUrl || "/placeholder.svg"}
                      alt={banner.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{banner.title}</div>
                    <div className="text-muted-foreground text-sm">현재 순서: {index + 1}</div>
                  </div>
                  <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                    활성
                  </Badge>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pc">
            <div className="space-y-2">
              {activePcBanners.map((banner, index) => (
                <div key={banner.id} className="flex items-center space-x-4 rounded-md border p-4">
                  <div className="flex items-center justify-center">
                    <GripVertical className="text-muted-foreground h-5 w-5 cursor-move" />
                  </div>
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src={banner.imageUrl || "/placeholder.svg"}
                      alt={banner.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{banner.title}</div>
                    <div className="text-muted-foreground text-sm">현재 순서: {index + 1}</div>
                  </div>
                  <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
                    활성
                  </Badge>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleSaveOrder}>순서 저장</Button>
      </CardFooter>
    </Card>
  )
}
