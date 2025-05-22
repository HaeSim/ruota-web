"use client"

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import PageContainer from "../_components/layout/page-container"

export default function OverViewLayout({
  sales,
  pie_stats,
  bar_stats,
  area_stats,
}: {
  sales: React.ReactNode
  pie_stats: React.ReactNode
  bar_stats: React.ReactNode
  area_stats: React.ReactNode
}) {
  return (
    <PageContainer>
      <div className="flex h-full min-h-0 flex-1 flex-col space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">오늘도 커피향 가득한 하루, 운영을 시작해볼까요? ☕️</h2>
        </div>

        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs md:grid-cols-2 lg:grid-cols-4">
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>이번달 누적 매출</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">₩1,250,000</CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <IconTrendingUp />
                  +12.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                이번 달 매출이 12.5% 올랐어요! 성장의 흐름을 함께 확인해요. <IconTrendingUp className="size-4" />
              </div>
              <div className="text-muted-foreground">최근 6개월간 매출 추이도 참고해보세요.</div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>오늘까지 누적 방문자 수</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">1,234</CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <IconTrendingDown />
                  -20%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                방문자 수가 20% 줄었어요. 새로운 고객을 만날 방법을 함께 고민해봐요!{" "}
                <IconTrendingDown className="size-4" />
              </div>
              <div className="text-muted-foreground">고객 유치 전략을 다시 점검해보는 것도 좋아요.</div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>이번 달 예약 수</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">23</CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <IconTrendingUp />
                  +12.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                예약이 늘고 있어요! 고객의 기대에 멋지게 응답해볼까요? <IconTrendingUp className="size-4" />
              </div>
              <div className="text-muted-foreground">참여도가 목표치를 넘어서고 있어요.</div>
            </CardFooter>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription>이번 달 예약취소 수</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">4</CardTitle>
              <CardAction>
                <Badge variant="outline">
                  <IconTrendingUp />
                  +4.5%
                </Badge>
              </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                예약 취소가 증가했어요. 고객과의 소통을 한 번 더 챙겨보면 어떨까요?{" "}
                <IconTrendingUp className="size-4" />
              </div>
              <div className="text-muted-foreground">취소 사유를 분석해보면 개선의 실마리가 보일 거예요.</div>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4">{bar_stats}</div>
          <div className="col-span-4 md:col-span-3">
            {/* sales arallel routes */}
            {sales}
          </div>
          <div className="col-span-4">{area_stats}</div>
          <div className="col-span-4 md:col-span-3">{pie_stats}</div>
        </div>
      </div>
    </PageContainer>
  )
}
