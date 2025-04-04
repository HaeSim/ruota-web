import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "케이터링 서비스 | ruota",
  description: "루오타의 모바일 커피바 케이터링 서비스 소개",
}

export default function CateringServicePage() {
  const services = [
    {
      title: "기업 행사",
      description:
        "컨퍼런스, 세미나, 워크샵, 사내 행사 등을 위한 고품질 커피 서비스. 브랜드에 맞는 맞춤형 경험을 제공합니다.",
    },
    {
      title: "웨딩",
      description:
        "특별한 날을 더욱 특별하게 만들어 줄 웨딩 커피바 서비스. 우아한 세팅과 함께 고품질 커피를 제공합니다.",
    },
    {
      title: "전시회 & 팝업",
      description: "전시회, 팝업 스토어, 제품 론칭 등의 행사에서 방문객들에게 특별한 커피 경험을 선사합니다.",
    },
    {
      title: "프라이빗 파티",
      description: "생일파티, 집들이, 홈파티 등 소규모 프라이빗 모임을 위한 맞춤형 케이터링 서비스를 제공합니다.",
    },
  ]

  const features = [
    {
      title: "맞춤형 메뉴",
      description: "행사 성격과, 계절, 고객 선호도에 맞춘 커스텀 메뉴를 제공합니다.",
    },
    {
      title: "전문 바리스타",
      description: "숙련된 전문 바리스타가 고품질 커피를 제공합니다.",
    },
    {
      title: "모든 장비 제공",
      description: "에스프레소 머신, 그라인더 등 필요한 모든 장비를 준비합니다.",
    },
    {
      title: "브랜딩 옵션",
      description: "귀사의 로고와 브랜드 색상을 적용한 맞춤형 경험을 제공합니다.",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold">케이터링 서비스</h1>
        <p className="mb-12 text-center text-lg text-gray-600">특별한 이벤트를 위한 루오타의 프리미엄 모바일 커피바</p>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-semibold">서비스 유형</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-semibold">특징</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-16 max-w-3xl rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-4 text-center text-2xl font-semibold">이용 방법</h2>
          <p className="mb-6 text-center text-gray-700">
            루오타의 모바일 커피바 서비스를 예약하는 것은 간단합니다. 아래 버튼을 클릭하여 예약 과정을 확인해보세요.
          </p>
          <div className="flex justify-center">
            <Link
              href="/reservation"
              className="rounded-md bg-stone-800 px-6 py-3 text-white transition hover:bg-stone-700"
            >
              예약하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
