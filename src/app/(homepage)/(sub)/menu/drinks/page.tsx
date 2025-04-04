import { Metadata } from "next"

export const metadata: Metadata = {
  title: "음료 메뉴 | ruota",
  description: "루오타의 시그니처 커피와 다양한 음료를 소개합니다",
}

export default function DrinksPage() {
  const drinks = [
    {
      id: 1,
      name: "에스프레소",
      description: "진한 풍미와 아로마가 특징인 클래식 에스프레소",
      price: "4,500원",
    },
    {
      id: 2,
      name: "아메리카노",
      description: "에스프레소에 뜨거운 물을 더한 깔끔한 맛의 커피",
      price: "5,000원",
    },
    {
      id: 3,
      name: "카페라떼",
      description: "에스프레소와 부드러운 스팀 밀크의 조화",
      price: "5,500원",
    },
    {
      id: 4,
      name: "카푸치노",
      description: "에스프레소, 스팀 밀크, 그리고 풍성한 우유 거품의 완벽한 조합",
      price: "5,500원",
    },
    {
      id: 5,
      name: "바닐라 라떼",
      description: "달콤한 바닐라 시럽이 더해진 카페라떼",
      price: "6,000원",
    },
    {
      id: 6,
      name: "카라멜 마키아또",
      description: "카라멜 시럽과 부드러운 우유 거품이 올라간 에스프레소",
      price: "6,000원",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold">음료 메뉴</h1>
        <p className="mb-8 text-center text-lg text-gray-600">루오타의 시그니처 커피와 다양한 음료</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {drinks.map((drink) => (
            <div key={drink.id} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">{drink.name}</h3>
              <p className="mb-3 text-gray-600">{drink.description}</p>
              <p className="font-medium text-stone-800">{drink.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/menu"
            className="inline-block rounded-md bg-stone-800 px-4 py-2 text-white transition hover:bg-stone-700"
          >
            메뉴로 돌아가기
          </a>
        </div>
      </div>
    </div>
  )
}
