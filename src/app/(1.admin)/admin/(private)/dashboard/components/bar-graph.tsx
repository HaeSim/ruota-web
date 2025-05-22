"use client"

import * as React from "react"
import { useEffect, useMemo, useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export const description = "행사 유형별 판매량 차트"

const chartData = [
  { date: "2024-04-01", 기업행사: 222, 페스티벌마켓: 150 },
  { date: "2024-04-02", 기업행사: 97, 페스티벌마켓: 180 },
  { date: "2024-04-03", 기업행사: 167, 페스티벌마켓: 120 },
  { date: "2024-04-04", 기업행사: 242, 페스티벌마켓: 260 },
  { date: "2024-04-05", 기업행사: 373, 페스티벌마켓: 290 },
  { date: "2024-04-06", 기업행사: 301, 페스티벌마켓: 340 },
  { date: "2024-04-07", 기업행사: 245, 페스티벌마켓: 180 },
  { date: "2024-04-08", 기업행사: 409, 페스티벌마켓: 320 },
  { date: "2024-04-09", 기업행사: 59, 페스티벌마켓: 110 },
  { date: "2024-04-10", 기업행사: 261, 페스티벌마켓: 190 },
  { date: "2024-04-11", 기업행사: 327, 페스티벌마켓: 350 },
  { date: "2024-04-12", 기업행사: 292, 페스티벌마켓: 210 },
  { date: "2024-04-13", 기업행사: 342, 페스티벌마켓: 380 },
  { date: "2024-04-14", 기업행사: 137, 페스티벌마켓: 220 },
  { date: "2024-04-15", 기업행사: 120, 페스티벌마켓: 170 },
  { date: "2024-04-16", 기업행사: 138, 페스티벌마켓: 190 },
  { date: "2024-04-17", 기업행사: 446, 페스티벌마켓: 360 },
  { date: "2024-04-18", 기업행사: 364, 페스티벌마켓: 410 },
  { date: "2024-04-19", 기업행사: 243, 페스티벌마켓: 180 },
  { date: "2024-04-20", 기업행사: 89, 페스티벌마켓: 150 },
  { date: "2024-04-21", 기업행사: 137, 페스티벌마켓: 200 },
  { date: "2024-04-22", 기업행사: 224, 페스티벌마켓: 170 },
  { date: "2024-04-23", 기업행사: 138, 페스티벌마켓: 230 },
  { date: "2024-04-24", 기업행사: 387, 페스티벌마켓: 290 },
  { date: "2024-04-25", 기업행사: 215, 페스티벌마켓: 250 },
  { date: "2024-04-26", 기업행사: 75, 페스티벌마켓: 130 },
  { date: "2024-04-27", 기업행사: 383, 페스티벌마켓: 420 },
  { date: "2024-04-28", 기업행사: 122, 페스티벌마켓: 180 },
  { date: "2024-04-29", 기업행사: 315, 페스티벌마켓: 240 },
  { date: "2024-04-30", 기업행사: 454, 페스티벌마켓: 380 },
  { date: "2024-05-01", 기업행사: 165, 페스티벌마켓: 220 },
  { date: "2024-05-02", 기업행사: 293, 페스티벌마켓: 310 },
  { date: "2024-05-03", 기업행사: 247, 페스티벌마켓: 190 },
  { date: "2024-05-04", 기업행사: 385, 페스티벌마켓: 420 },
  { date: "2024-05-05", 기업행사: 481, 페스티벌마켓: 390 },
  { date: "2024-05-06", 기업행사: 498, 페스티벌마켓: 520 },
  { date: "2024-05-07", 기업행사: 388, 페스티벌마켓: 300 },
  { date: "2024-05-08", 기업행사: 149, 페스티벌마켓: 210 },
  { date: "2024-05-09", 기업행사: 227, 페스티벌마켓: 180 },
  { date: "2024-05-10", 기업행사: 293, 페스티벌마켓: 330 },
  { date: "2024-05-11", 기업행사: 335, 페스티벌마켓: 270 },
  { date: "2024-05-12", 기업행사: 197, 페스티벌마켓: 240 },
  { date: "2024-05-13", 기업행사: 197, 페스티벌마켓: 160 },
  { date: "2024-05-14", 기업행사: 448, 페스티벌마켓: 490 },
  { date: "2024-05-15", 기업행사: 473, 페스티벌마켓: 380 },
  { date: "2024-05-16", 기업행사: 338, 페스티벌마켓: 400 },
  { date: "2024-05-17", 기업행사: 499, 페스티벌마켓: 420 },
  { date: "2024-05-18", 기업행사: 315, 페스티벌마켓: 350 },
  { date: "2024-05-19", 기업행사: 235, 페스티벌마켓: 180 },
  { date: "2024-05-20", 기업행사: 177, 페스티벌마켓: 230 },
  { date: "2024-05-21", 기업행사: 82, 페스티벌마켓: 140 },
  { date: "2024-05-22", 기업행사: 81, 페스티벌마켓: 120 },
  { date: "2024-05-23", 기업행사: 252, 페스티벌마켓: 290 },
  { date: "2024-05-24", 기업행사: 294, 페스티벌마켓: 220 },
  { date: "2024-05-25", 기업행사: 201, 페스티벌마켓: 250 },
  { date: "2024-05-26", 기업행사: 213, 페스티벌마켓: 170 },
  { date: "2024-05-27", 기업행사: 420, 페스티벌마켓: 460 },
  { date: "2024-05-28", 기업행사: 233, 페스티벌마켓: 190 },
  { date: "2024-05-29", 기업행사: 78, 페스티벌마켓: 130 },
  { date: "2024-05-30", 기업행사: 340, 페스티벌마켓: 280 },
  { date: "2024-05-31", 기업행사: 178, 페스티벌마켓: 230 },
  { date: "2024-06-01", 기업행사: 178, 페스티벌마켓: 200 },
  { date: "2024-06-02", 기업행사: 470, 페스티벌마켓: 410 },
  { date: "2024-06-03", 기업행사: 103, 페스티벌마켓: 160 },
  { date: "2024-06-04", 기업행사: 439, 페스티벌마켓: 380 },
  { date: "2024-06-05", 기업행사: 88, 페스티벌마켓: 140 },
  { date: "2024-06-06", 기업행사: 294, 페스티벌마켓: 250 },
  { date: "2024-06-07", 기업행사: 323, 페스티벌마켓: 370 },
  { date: "2024-06-08", 기업행사: 385, 페스티벌마켓: 320 },
  { date: "2024-06-09", 기업행사: 438, 페스티벌마켓: 480 },
  { date: "2024-06-10", 기업행사: 155, 페스티벌마켓: 200 },
  { date: "2024-06-11", 기업행사: 92, 페스티벌마켓: 150 },
  { date: "2024-06-12", 기업행사: 492, 페스티벌마켓: 420 },
  { date: "2024-06-13", 기업행사: 81, 페스티벌마켓: 130 },
  { date: "2024-06-14", 기업행사: 426, 페스티벌마켓: 380 },
  { date: "2024-06-15", 기업행사: 307, 페스티벌마켓: 350 },
  { date: "2024-06-16", 기업행사: 371, 페스티벌마켓: 310 },
  { date: "2024-06-17", 기업행사: 475, 페스티벌마켓: 520 },
  { date: "2024-06-18", 기업행사: 107, 페스티벌마켓: 170 },
  { date: "2024-06-19", 기업행사: 341, 페스티벌마켓: 290 },
  { date: "2024-06-20", 기업행사: 408, 페스티벌마켓: 450 },
  { date: "2024-06-21", 기업행사: 169, 페스티벌마켓: 210 },
  { date: "2024-06-22", 기업행사: 317, 페스티벌마켓: 270 },
  { date: "2024-06-23", 기업행사: 480, 페스티벌마켓: 530 },
  { date: "2024-06-24", 기업행사: 132, 페스티벌마켓: 180 },
  { date: "2024-06-25", 기업행사: 141, 페스티벌마켓: 190 },
  { date: "2024-06-26", 기업행사: 434, 페스티벌마켓: 380 },
  { date: "2024-06-27", 기업행사: 448, 페스티벌마켓: 490 },
  { date: "2024-06-28", 기업행사: 149, 페스티벌마켓: 200 },
  { date: "2024-06-29", 기업행사: 103, 페스티벌마켓: 160 },
  { date: "2024-06-30", 기업행사: 446, 페스티벌마켓: 400 },
]

const chartConfig = {
  views: {
    label: "판매량",
  },
  기업행사: {
    label: "기업행사",
    color: "var(--primary)",
  },
  페스티벌마켓: {
    label: "페스티벌/마켓",
    color: "var(--primary)",
  },
  error: {
    label: "오류",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function BarGraph() {
  const [activeChart, setActiveChart] = useState<keyof typeof chartConfig>("기업행사")

  const total = useMemo(
    () => ({
      기업행사: chartData.reduce((acc, curr) => acc + curr.기업행사, 0),
      페스티벌마켓: chartData.reduce((acc, curr) => acc + curr.페스티벌마켓, 0),
    }),
    []
  )

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (activeChart === "error") {
      throw new Error("Mocking Error")
    }
  }, [activeChart])

  if (!isClient) {
    return null
  }

  return (
    <Card className="@container/card !pt-3">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 !py-0">
          <CardTitle>행사 유형별 통계</CardTitle>
          <CardDescription>
            <span className="hidden @[540px]/card:block">최근 3개월 행사 유형별 판매량</span>
            <span className="@[540px]/card:hidden">최근 3개월</span>
          </CardDescription>
        </div>
        <div className="flex">
          {["기업행사", "페스티벌마켓", "error"].map((key) => {
            const chart = key as keyof typeof chartConfig
            if (!chart || total[key as keyof typeof total] === 0) return null
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="data-[active=true]:bg-primary/5 hover:bg-primary/5 relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left transition-colors duration-200 even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-muted-foreground text-xs">{chartConfig[chart].label}</span>
                <span className="text-lg leading-none font-bold sm:text-3xl">
                  {total[key as keyof typeof total]?.toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <BarChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="fillBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.8} />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("ko-KR", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={{ fill: "var(--primary)", opacity: 0.1 }}
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("ko-KR", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill="url(#fillBar)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
