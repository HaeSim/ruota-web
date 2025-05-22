"use client"

import { IconTrendingUp } from "@tabler/icons-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "1월", 평일행사: 1860000, 주말행사: 800000 },
  { month: "2월", 평일행사: 3050000, 주말행사: 2000000 },
  { month: "3월", 평일행사: 2370000, 주말행사: 1200000 },
  { month: "4월", 평일행사: 730000, 주말행사: 1900000 },
  { month: "5월", 평일행사: 2090000, 주말행사: 1300000 },
  { month: "6월", 평일행사: 2140000, 주말행사: 1400000 },
]

const chartConfig = {
  매출: {
    label: "매출액",
  },
  평일행사: {
    label: "평일 행사",
    color: "var(--primary)",
  },
  주말행사: {
    label: "주말 행사",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function AreaGraph() {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>평일과 주말, 언제 더 바빴나요?</CardTitle>
        <CardDescription>최근 6개월간의 매출 흐름을 살펴보세요.</CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={1.0} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <Area dataKey="주말행사" type="natural" fill="url(#fillMobile)" stroke="var(--color-mobile)" stackId="a" />
            <Area
              dataKey="평일행사"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              이번 달 매출이 5.2% 올랐어요! 좋은 흐름을 이어가고 있어요! <IconTrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">2024년 1월 - 6월</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
