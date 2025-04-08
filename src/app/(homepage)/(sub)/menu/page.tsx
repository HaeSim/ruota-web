import { Metadata } from "next"

export const metadata: Metadata = {
  title: "메뉴 | ruota",
  description: "루오타의 다양한 메뉴를 살펴보세요",
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-4xl font-bold">메뉴</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">음료 메뉴</h2>
            <p className="mb-4 text-gray-700">루오타의 시그니처 커피와 다양한 음료를 소개합니다.</p>
            <a
              href="/menu/drinks"
              className="inline-block rounded-md bg-stone-800 px-4 py-2 text-white transition hover:bg-stone-700"
            >
              자세히 보기
            </a>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">디저트</h2>
            <p className="mb-4 text-gray-700">커피와 완벽한 페어링을 이루는 수제 디저트를 만나보세요.</p>
            <a
              href="/menu/desserts"
              className="inline-block rounded-md bg-stone-800 px-4 py-2 text-white transition hover:bg-stone-700"
            >
              자세히 보기
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
