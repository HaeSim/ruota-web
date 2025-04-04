import { Metadata } from "next"

export const metadata: Metadata = {
  title: "디저트 메뉴 | ruota",
  description: "루오타의 다양한 수제 디저트를 소개합니다",
}

export default function DessertsPage() {
  const desserts = [
    {
      id: 1,
      name: "티라미수",
      description: "에스프레소를 적신 레이디핑거에 크림 마스카포네 치즈를 층층이 쌓아올린 이탈리안 디저트",
      price: "6,500원",
    },
    {
      id: 2,
      name: "초콜릿 브라우니",
      description: "진한 초콜릿과 고소한 호두가 들어간 수제 브라우니",
      price: "5,500원",
    },
    {
      id: 3,
      name: "치즈케이크",
      description: "부드러운 크림치즈와 바삭한 쿠키 크러스트가 조화로운 클래식 치즈케이크",
      price: "6,000원",
    },
    {
      id: 4,
      name: "마카롱 세트",
      description: "다양한 맛의 프랑스식 마카롱 4종 세트",
      price: "8,000원",
    },
    {
      id: 5,
      name: "바닐라 파운드 케이크",
      description: "향긋한 바닐라 향이 가득한 촉촉한 파운드 케이크",
      price: "4,500원",
    },
    {
      id: 6,
      name: "크로와상",
      description: "겉은 바삭하고 속은 부드러운 전통 방식으로 만든 프랑스식 크로와상",
      price: "4,000원",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold">디저트 메뉴</h1>
        <p className="mb-8 text-center text-lg text-gray-600">커피와 완벽한 페어링을 이루는 수제 디저트</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {desserts.map((dessert) => (
            <div key={dessert.id} className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-semibold">{dessert.name}</h3>
              <p className="mb-3 text-gray-600">{dessert.description}</p>
              <p className="font-medium text-stone-800">{dessert.price}</p>
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
