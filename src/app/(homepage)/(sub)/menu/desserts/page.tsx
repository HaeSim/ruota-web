import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { Dessert } from "./components/DessertCard"
import { FilteredDesserts } from "./components/FilteredDesserts"

export const metadata: Metadata = {
  title: "디저트 메뉴 | ruota",
  description: "루오타의 다양한 수제 디저트를 소개합니다",
}

const desserts: Dessert[] = [
  {
    id: 1,
    name: "마들렌 2종 세트",
    description: "클래식한 프랑스식 마들렌",
    price: "5,500원",
    image: "/images/menu/desserts/madeleine-set.jpg",
    category: "구움과자",
  },
  {
    id: 2,
    name: "레몬 마들렌 세트",
    description: "상큼한 레몬 풍미가 가득한 마들렌",
    price: "5,500원",
    image: "/images/menu/desserts/lemon-madeleine.jpg",
    category: "구움과자",
  },
  {
    id: 3,
    name: "초콜릿 마들렌",
    description: "진한 초콜릿 풍미의 마들렌",
    price: "5,500원",
    image: "/images/menu/desserts/chocolate-madeleine.jpg",
    category: "구움과자",
  },
  {
    id: 4,
    name: "크림치즈 파운드",
    description: "부드러운 크림치즈가 들어간 파운드 케이크",
    price: "5,500원",
    image: "/images/menu/desserts/cream-cheese-pound.jpg",
    category: "케이크",
  },
  {
    id: 5,
    name: "메이플 피칸 파운드",
    description: "고소한 피칸과 달콤한 메이플 시럽의 조화",
    price: "5,500원",
    image: "/images/menu/desserts/maple-pecan-pound.jpg",
    category: "케이크",
  },
  {
    id: 6,
    name: "얼그레이 파운드",
    description: "향긋한 얼그레이 티가 들어간 파운드 케이크",
    price: "5,500원",
    image: "/images/menu/desserts/earlgrey-pound.jpg",
    category: "케이크",
  },
  {
    id: 7,
    name: "레몬 파운드",
    description: "상큼한 레몬이 들어간 파운드 케이크",
    price: "5,500원",
    image: "/images/menu/desserts/lemon-pound.jpg",
    category: "케이크",
  },
  {
    id: 8,
    name: "루오타 쿠키",
    description: "초콜릿과 견과류가 들어간 시그니처 쿠키",
    price: "3,500원",
    image: "/images/menu/desserts/ruota-cookie.jpg",
    category: "쿠키",
  },
  {
    id: 9,
    name: "레몬 글레이즈드 쿠키",
    description: "상큼한 레몬 글레이즈가 올라간 쿠키",
    price: "3,500원",
    image: "/images/menu/desserts/lemon-glazed-cookie.jpg",
    category: "쿠키",
  },
  {
    id: 10,
    name: "초콜릿 월넛 쿠키",
    description: "진한 초콜릿과 고소한 호두가 들어간 쿠키",
    price: "3,500원",
    image: "/images/menu/desserts/chocolate-walnut-cookie.jpg",
    category: "쿠키",
  },
  {
    id: 11,
    name: "더블 초콜릿 쿠키",
    description: "초콜릿의 풍미를 두 배로 즐길 수 있는 쿠키",
    price: "3,500원",
    image: "/images/menu/desserts/double-chocolate-cookie.jpg",
    category: "쿠키",
  },
  {
    id: 12,
    name: "크랜베리 월넛 쿠키",
    description: "상큼한 크랜베리와 고소한 호두가 조화로운 쿠키",
    price: "3,500원",
    image: "/images/menu/desserts/cranberry-walnut-cookie.jpg",
    category: "쿠키",
  },
]

export default function DessertsPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-6 pb-12 md:pt-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-12">
          <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">디저트 메뉴</h1>
          <p className="text-muted-foreground text-base md:text-lg">커피와 완벽한 페어링을 이루는 수제 디저트</p>
        </div>

        <FilteredDesserts desserts={desserts} />

        <Separator className="my-8 md:my-12" />

        <div className="text-center">
          <Button variant="outline" size="lg" asChild className="h-11 rounded-full px-6 text-base">
            <a href="/menu">메뉴로 돌아가기</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
