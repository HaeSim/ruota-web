"use client"

import { differenceInDays, format, isValid, parseISO } from "date-fns"
import { ko } from "date-fns/locale"
import { Edit, ExternalLink, Monitor, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { api } from "@/app/(0.api)/_trpc/react"
import { type Banner } from "@/app/(0.api)/_trpc/server/api/schemas/banner.schema"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BannerDetailProps {
  id: string
  initialData: Banner
}

export function BannerDetail({ id, initialData }: BannerDetailProps) {
  const bannerId = parseInt(id, 10)

  // tRPC를 사용하여 배너 데이터 조회 (initialData와 함께)
  const { data: bannerData = initialData, refetch } = api.banner.getById.useQuery({ id: bannerId }, { initialData })

  // 상태 업데이트 mutation
  const updateStatusMutation = api.banner.updateStatus.useMutation({
    onSuccess: () => {
      refetch()
    },
  })

  const [isActive, setIsActive] = useState(bannerData.is_active)

  const handleStatusChange = (checked: boolean) => {
    setIsActive(checked)
    updateStatusMutation.mutate({
      id: bannerId,
      is_active: checked,
    })
  }

  // 일 평균 노출 수 계산을 위한 함수
  const calculateDailyAverageViews = () => {
    if (!bannerData.view_count || !bannerData.start_date) return 0

    const startDate = parseISO(bannerData.start_date)
    if (!isValid(startDate)) return 0

    const daysSinceStart = Math.max(differenceInDays(new Date(), startDate), 1)
    return Math.round(bannerData.view_count / daysSinceStart)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>배너 이미지</CardTitle>
            <CardDescription>모바일과 PC에 표시되는 배너 이미지입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="mobile" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mobile">
                  <Smartphone className="mr-2 h-4 w-4" />
                  모바일
                </TabsTrigger>
                <TabsTrigger value="pc">
                  <Monitor className="mr-2 h-4 w-4" />
                  PC
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mobile">
                <div className="overflow-hidden rounded-lg border">
                  <div className="relative aspect-[9/16] w-full">
                    <Image
                      src={bannerData.mobile_image_url || "/placeholder.svg"}
                      alt={bannerData.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="pc">
                <div className="overflow-hidden rounded-lg border">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={bannerData.pc_image_url || "/placeholder.svg"}
                      alt={bannerData.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>배너 정보</CardTitle>
            <CardDescription>배너의 기본 정보와 설정입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableHead className="w-32">제목</TableHead>
                  <TableCell>{bannerData.title}</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>설명</TableHead>
                  <TableCell>{bannerData.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>디바이스</TableHead>
                  <TableCell>
                    {bannerData.device_type === "mobile" && (
                      <div className="flex items-center">
                        <Smartphone className="mr-2 h-4 w-4" />
                        모바일
                      </div>
                    )}
                    {bannerData.device_type === "pc" && (
                      <div className="flex items-center">
                        <Monitor className="mr-2 h-4 w-4" />
                        PC
                      </div>
                    )}
                    {bannerData.device_type === "all" && (
                      <div className="flex items-center">
                        <Smartphone className="mr-2 h-4 w-4" />
                        <Monitor className="mr-2 h-4 w-4" />
                        전체
                      </div>
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>상태</TableHead>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        className={
                          isActive
                            ? "border-green-200 bg-green-50 text-green-700"
                            : "border-gray-200 bg-gray-50 text-gray-700"
                        }
                      >
                        {isActive ? "활성" : "비활성"}
                      </Badge>
                      <Switch
                        checked={isActive}
                        onCheckedChange={handleStatusChange}
                        disabled={updateStatusMutation.isPending}
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>링크</TableHead>
                  <TableCell>
                    <div className="flex items-center">
                      <a
                        href={bannerData.link_url}
                        target={bannerData.is_new_window ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:underline"
                      >
                        {bannerData.link_url}
                        {bannerData.is_new_window && <ExternalLink className="ml-1 h-3 w-3" />}
                      </a>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>노출 기간</TableHead>
                  <TableCell>
                    {bannerData.start_date && (
                      <>
                        {format(parseISO(bannerData.start_date), "yyyy-MM-dd", { locale: ko })}
                        {bannerData.end_date && (
                          <> ~ {format(parseISO(bannerData.end_date), "yyyy-MM-dd", { locale: ko })}</>
                        )}
                      </>
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>노출 순서</TableHead>
                  <TableCell>{bannerData.display_order}</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>등록일</TableHead>
                  <TableCell>
                    {bannerData.created_at &&
                      format(parseISO(bannerData.created_at), "yyyy-MM-dd HH:mm", {
                        locale: ko,
                      })}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHead>수정일</TableHead>
                  <TableCell>
                    {bannerData.updated_at &&
                      format(parseISO(bannerData.updated_at), "yyyy-MM-dd HH:mm", {
                        locale: ko,
                      })}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>통계 정보</CardTitle>
          <CardDescription>배너의 노출 및 클릭 통계입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">{bannerData.view_count?.toLocaleString() ?? 0}</div>
              <div className="text-muted-foreground text-sm">총 노출 수</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">{bannerData.click_count?.toLocaleString() ?? 0}</div>
              <div className="text-muted-foreground text-sm">총 클릭 수</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">
                {bannerData.view_count && bannerData.view_count > 0
                  ? ((bannerData.click_count! / bannerData.view_count) * 100).toFixed(2)
                  : "0.00"}
                %
              </div>
              <div className="text-muted-foreground text-sm">클릭률 (CTR)</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">{calculateDailyAverageViews()}</div>
              <div className="text-muted-foreground text-sm">일 평균 노출 수</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CardFooter className="flex justify-end space-x-4 px-0">
        <Button variant="outline" asChild>
          <Link href="/admin/communication/banner">목록으로</Link>
        </Button>
        <Button asChild>
          <Link href={`/admin/communication/banner/${id}/edit`}>
            <Edit className="mr-2 h-4 w-4" />
            수정하기
          </Link>
        </Button>
      </CardFooter>
    </div>
  )
}
