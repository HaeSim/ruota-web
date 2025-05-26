"use client"

import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { ArrowUpDown, Edit, Monitor, MoreHorizontal, Smartphone, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { type Banner } from "@/app/(0.api)/_trpc/server/api/schemas/banner.schema"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface BannerListProps {
  initialData: {
    items: Banner[]
    total: number
  }
}

export function BannerList({ initialData }: BannerListProps) {
  const [selectedBanners, setSelectedBanners] = useState<number[]>([])
  const banners = initialData.items

  const toggleBanner = (id: number) => {
    setSelectedBanners((prev) => (prev.includes(id) ? prev.filter((bannerId) => bannerId !== id) : [...prev, id]))
  }

  const toggleAll = () => {
    setSelectedBanners((prev) => (prev.length === banners.length ? [] : banners.map((banner) => banner.id)))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
            활성
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="border-gray-200 bg-gray-50 text-gray-700">
            비활성
          </Badge>
        )
      case "scheduled":
        return (
          <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">
            예약됨
          </Badge>
        )
      default:
        return null
    }
  }

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case "mobile":
        return <Smartphone className="h-4 w-4 text-gray-500" />
      case "pc":
        return <Monitor className="h-4 w-4 text-gray-500" />
      case "all":
        return (
          <div className="flex">
            <Smartphone className="h-4 w-4 text-gray-500" />
            <Monitor className="ml-1 h-4 w-4 text-gray-500" />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-4">
      {/* 데스크탑 테이블 */}
      <div className="hidden rounded-md border sm:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedBanners.length === banners.length}
                  onCheckedChange={toggleAll}
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead className="w-20">썸네일</TableHead>
              <TableHead>
                <div className="flex items-center">
                  제목
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead className="w-20">디바이스</TableHead>
              <TableHead className="w-24">상태</TableHead>
              <TableHead className="w-40">노출기간</TableHead>
              <TableHead className="w-16">순서</TableHead>
              <TableHead className="w-32">등록일</TableHead>
              <TableHead className="w-20">관리</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {banners.map((banner) => (
              <TableRow key={banner.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedBanners.includes(banner.id)}
                    onCheckedChange={() => toggleBanner(banner.id)}
                    aria-label={`Select banner ${banner.id}`}
                  />
                </TableCell>
                <TableCell>
                  <div className="relative h-10 w-10 overflow-hidden rounded-md">
                    <Image
                      src={banner.mobile_image_url || "/placeholder.svg"}
                      alt={banner.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <Link href={`/admin/communication/banner/${banner.id}`} className="hover:underline">
                    {banner.title}
                  </Link>
                </TableCell>
                <TableCell>{getDeviceIcon(banner.device_type)}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {getStatusBadge(banner.is_active ? "active" : "inactive")}
                    <Switch checked={banner.is_active} aria-label="Toggle status" />
                  </div>
                </TableCell>
                <TableCell>
                  {format(new Date(banner.start_date), "yyyy-MM-dd", { locale: ko })} ~{" "}
                  {banner.end_date ? format(new Date(banner.end_date), "yyyy-MM-dd", { locale: ko }) : "무제한"}
                </TableCell>
                <TableCell>{banner.display_order}</TableCell>
                <TableCell>{format(new Date(banner.created_at), "yyyy-MM-dd", { locale: ko })}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Link href={`/admin/communication/banner/${banner.id}/edit`}>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </Link>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="text-red-600">
                          <Trash className="mr-2 h-4 w-4" />
                          삭제
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* 모바일 카드형 리스트 */}
      <div className="space-y-3 sm:hidden">
        {banners.map((banner) => (
          <div key={banner.id} className="relative flex flex-col rounded-lg border bg-white p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={selectedBanners.includes(banner.id)}
                onCheckedChange={() => toggleBanner(banner.id)}
                aria-label={`Select banner ${banner.id}`}
                className="shrink-0"
              />
              <div className="relative h-12 w-12 overflow-hidden rounded-md border">
                <Image
                  src={banner.mobile_image_url || "/placeholder.svg"}
                  alt={banner.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <Link
                  href={`/admin/communication/banner/${banner.id}`}
                  className="block truncate text-base font-semibold hover:underline"
                >
                  {banner.title}
                </Link>
                <div className="mt-1 flex items-center gap-2">
                  {getDeviceIcon(banner.device_type)}
                  {getStatusBadge(banner.is_active ? "active" : "inactive")}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Link href={`/admin/communication/banner/${banner.id}/edit`}>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" />
                      삭제
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
              <span>
                노출기간: {format(new Date(banner.start_date), "yyyy-MM-dd", { locale: ko })} ~{" "}
                {banner.end_date ? format(new Date(banner.end_date), "yyyy-MM-dd", { locale: ko }) : "무제한"}
              </span>
              <span>순서: {banner.display_order}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 선택/액션 영역 */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-muted-foreground text-sm">
          총 {banners.length}개 배너 중 {selectedBanners.length}개 선택됨
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled={selectedBanners.length === 0}>
            선택 활성화
          </Button>
          <Button variant="outline" size="sm" disabled={selectedBanners.length === 0}>
            선택 비활성화
          </Button>
          <Button variant="outline" size="sm" className="text-red-600" disabled={selectedBanners.length === 0}>
            선택 삭제
          </Button>
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
