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
    name: "메이플피칸 휘낭시에",
    description: "달콤한 메이플 시럽과 고소한 피칸이 들어간 휘낭시에",
    price: "3,200원",
    image: "/images/menu/desserts/maple-pecan-financier.webp",
    category: "구움과자",
  },
  {
    id: 2,
    name: "애플크럼블 휘낭시에",
    description: "사과 크럼블이 올라간 휘낭시에",
    price: "3,600원",
    image: "/images/menu/desserts/apple-crumble-financier.webp",
    category: "구움과자",
  },
  {
    id: 3,
    name: "무화과 르뱅쿠키",
    description: "달콤한 무화과가 들어간 르뱅쿠키",
    price: "3,700원",
    image: "/images/menu/desserts/fig-leban-cookie.webp",
    category: "구움과자",
  },
  {
    id: 4,
    name: "쇼콜라 마들렌",
    description: "진한 초콜릿 풍미의 마들렌",
    price: "3,300원",
    image: "/images/menu/desserts/chocolate-madeleine.webp",
    category: "구움과자",
  },
  {
    id: 5,
    name: "얼그레이가나슈 마들렌",
    description: "향긋한 얼그레이와 부드러운 가나슈가 어우러진 마들렌",
    price: "3,500원",
    image: "/images/menu/desserts/earl-grey-ganache-madeleine.webp",
    category: "구움과자",
  },
  {
    id: 6,
    name: "메이플피칸 마들렌",
    description: "달콤한 메이플 시럽과 고소한 피칸이 들어간 마들렌",
    price: "3,500원",
    image: "/images/menu/desserts/maple-pecan-madeleine.webp",
    category: "구움과자",
  },
  {
    id: 7,
    name: "플레인 휘낭시에",
    description: "클래식한 휘낭시에",
    price: "2,800원",
    image: "/images/menu/desserts/plain-financier.webp",
    category: "구움과자",
  },
  {
    id: 8,
    name: "무화과크림치즈 휘낭시에",
    description: "무화과와 크림치즈가 어우러진 휘낭시에",
    price: "3,300원",
    image: "/images/menu/desserts/fig-cream-cheese-financier.webp",
    category: "구움과자",
  },
  {
    id: 9,
    name: "츄러스 휘낭시에",
    description: "바삭한 츄러스 풍미의 휘낭시에",
    price: "3,000원",
    image: "/images/menu/desserts/churros-financier.webp",
    category: "구움과자",
  },
  {
    id: 10,
    name: "솔티드초콜릿 휘낭시에",
    description: "소금과 초콜릿의 조화로운 휘낭시에",
    price: "3,200원",
    image: "/images/menu/desserts/salted-chocolate-financier.webp",
    category: "구움과자",
  },
  {
    id: 11,
    name: "황치즈 휘낭시에",
    description: "고소한 황치즈가 들어간 휘낭시에",
    price: "3,200원",
    image: "/images/menu/desserts/cheese-financier.webp",
    category: "구움과자",
  },
  {
    id: 12,
    name: "솔티드카라멜 휘낭시에",
    description: "소금과 카라멜의 달콤한 휘낭시에",
    price: "3,200원",
    image: "/images/menu/desserts/salted-caramel-financier.webp",
    category: "구움과자",
  },
  {
    id: 13,
    name: "플레인크로플",
    description: "바삭한 플레인 크로플",
    price: "3,500원",
    image: "/images/menu/desserts/plain-croffle.webp",
    category: "구움과자",
  },
  {
    id: 14,
    name: "미니크로플",
    description: "작고 귀여운 미니 크로플 2개 세트",
    price: "3,500원",
    image: "/images/menu/desserts/mini-croffle.webp",
    category: "구움과자",
  },
  {
    id: 15,
    name: "클램차우더 & 바게트",
    description: "진한 클램차우더와 바게트의 조합",
    price: "6,500원",
    image: "/images/menu/desserts/clam-chowder-baguette.webp",
    category: "브런치",
  },
  {
    id: 16,
    name: "컵과일 (S사이즈)",
    description: "신선한 과일이 가득한 S사이즈 컵과일",
    price: "4,000원",
    image: "/images/menu/desserts/cup-fruit-s.webp",
    category: "과일",
  },
  {
    id: 17,
    name: "컵과일 (M사이즈)",
    description: "신선한 과일이 가득한 M사이즈 컵과일",
    price: "5,500원",
    image: "/images/menu/desserts/cup-fruit-m.webp",
    category: "과일",
  },
  {
    id: 18,
    name: "미니크로와상 샌드위치",
    description: "미니 크로와상으로 만든 샌드위치 2개 세트",
    price: "6,000원",
    image: "/images/menu/desserts/mini-croissant-sandwich.webp",
    category: "브런치",
  },
  {
    id: 19,
    name: "레몬글라쎄 마들렌",
    description: "상큼한 레몬 글라쎄가 올라간 마들렌",
    price: "2,800원",
    image: "/images/menu/desserts/lemon-glazed-madeleine.webp",
    category: "구움과자",
  },
  {
    id: 20,
    name: "초콜릿호두 르뱅쿠키",
    description: "초콜릿과 호두가 들어간 르뱅쿠키",
    price: "3,500원",
    image: "/images/menu/desserts/chocolate-walnut-leban-cookie.webp",
    category: "구움과자",
  },
  {
    id: 21,
    name: "더블초콜릿 르뱅쿠키",
    description: "초콜릿의 풍미를 두 배로 즐길 수 있는 르뱅쿠키",
    price: "3,500원",
    image: "/images/menu/desserts/double-chocolate-leban-cookie.webp",
    category: "구움과자",
  },
  {
    id: 22,
    name: "크랜베리호두 르뱅쿠키",
    description: "상큼한 크랜베리와 고소한 호두가 들어간 르뱅쿠키",
    price: "3,500원",
    image: "/images/menu/desserts/cranberry-walnut-leban-cookie.webp",
    category: "구움과자",
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
