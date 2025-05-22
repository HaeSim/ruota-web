"use client"

import { IconTrendingUp } from "@tabler/icons-react"
import * as React from "react"
import { useMemo } from "react"
import { Label, Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { coffee: "아메리카노", sales: 275, fill: "var(--primary)" },
  { coffee: "라떼", sales: 200, fill: "var(--primary-light)" },
  { coffee: "크림커피", sales: 287, fill: "var(--primary-lighter)" },
  { coffee: "에스프레소", sales: 173, fill: "var(--primary-dark)" },
  { coffee: "기타", sales: 190, fill: "var(--primary-darker)" },
]

const chartConfig = {
  sales: {
    label: "판매량",
  },
  아메리카노: {
    label: "아메리카노",
    color: "var(--primary)",
  },
  라떼: {
    label: "라떼",
    color: "var(--primary)",
  },
  크림커피: {
    label: "크림커피",
    color: "var(--primary)",
  },
  에스프레소: {
    label: "에스프레소",
    color: "var(--primary)",
  },
  기타: {
    label: "기타",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function PieGraph() {
  const totalSales = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0)
  }, [])

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>행사에서 가장 사랑받는 메뉴는?</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">최근 6개월간 고객들이 가장 많이 찾은 음료를 확인해보세요.</span>
          <span className="@[540px]/card:hidden">행사별 인기 메뉴를 한눈에!</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-[250px]">
          <PieChart>
            <defs>
              {["아메리카노", "라떼", "크림커피", "에스프레소", "기타"].map((coffee, index) => (
                <linearGradient key={coffee} id={`fill${coffee}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity={1 - index * 0.15} />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.8 - index * 0.15} />
                </linearGradient>
              ))}
            </defs>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData.map((item) => ({
                ...item,
                fill: `url(#fill${item.coffee})`,
              }))}
              dataKey="sales"
              nameKey="coffee"
              innerRadius={60}
              strokeWidth={2}
              stroke="var(--background)"
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalSales.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground text-sm">
                          총 판매량
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          크림커피가 요즘 가장 인기예요! 재고를 미리 체크해두세요. <IconTrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">2024년 1월 - 6월 케이터링 데이터 기준</div>
      </CardFooter>
    </Card>
  )
}
