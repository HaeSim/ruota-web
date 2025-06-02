import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "메뉴 | ruota",
  description: "루오타의 다양한 메뉴를 살펴보세요",
}

/**
 * 메뉴 페이지
 * @description 루오타의 메뉴를 소개하는 페이지(음료, 디저트 메뉴로 분기 처리)
 */
export default function MenuPage() {
  return (
    <div className="h-[calc(100dvh-68px-64px)] overflow-hidden md:h-[calc(100dvh-68px=140px)]">
      {/* 음료 메뉴 섹션 */}
      <Link href="/menu/drinks" className="group relative block h-1/2 md:float-left md:h-full md:w-1/2">
        <div className="absolute inset-0 bg-[url('/images/menu/drinks-bg.webp')] bg-cover bg-center transition-all duration-300 group-hover:brightness-50" />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
          <h2 className="mb-4 text-4xl font-bold">음료 메뉴</h2>
          <p className="max-w-md text-center text-lg">루오타의 시그니처 커피와 다양한 음료를 소개합니다.</p>
        </div>
      </Link>

      {/* 디저트 섹션 */}
      <Link href="/menu/desserts" className="group relative block h-1/2 md:float-left md:h-full md:w-1/2">
        <div className="absolute inset-0 bg-[url('/images/menu/desserts-bg.webp')] bg-cover bg-center transition-all duration-300 group-hover:brightness-50" />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
          <h2 className="mb-4 text-4xl font-bold">디저트</h2>
          <p className="max-w-md text-center text-lg">커피와 완벽한 페어링을 이루는 수제 디저트를 만나보세요.</p>
        </div>
      </Link>
    </div>
  )
}
