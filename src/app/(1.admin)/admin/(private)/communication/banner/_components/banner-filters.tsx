"use client"

import { Search } from "lucide-react"
import { useState } from "react"
import type { DateRange } from "react-day-picker"
import { DatePickerWithRange } from "@/app/(1.admin)/admin/(private)/communication/banner/_components/date-range-picker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BannerFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [date, setDate] = useState<DateRange | undefined>()

  return (
    <div className="bg-card rounded-lg border p-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="배너 제목 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
          <Button size="icon" variant="ghost">
            <Search className="h-4 w-4" />
            <span className="sr-only">검색</span>
          </Button>
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="상태" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체</SelectItem>
            <SelectItem value="active">활성</SelectItem>
            <SelectItem value="inactive">비활성</SelectItem>
            <SelectItem value="scheduled">예약됨</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="디바이스 타입" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체</SelectItem>
            <SelectItem value="mobile">모바일</SelectItem>
            <SelectItem value="pc">PC</SelectItem>
          </SelectContent>
        </Select>
        <DatePickerWithRange date={date} setDate={setDate} />
      </div>
    </div>
  )
}
