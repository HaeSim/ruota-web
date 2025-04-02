import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "예약 | ruota",
  description: "루오타 케이터링 서비스 예약 안내",
}

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-stone-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold">예약</h1>
        <p className="mb-8 text-center text-lg text-gray-600">
          루오타 케이터링 서비스를 예약하는 방법을 안내해 드립니다
        </p>

        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">예약 안내</h2>
            <p className="mb-4 text-gray-700">
              루오타의 모바일 커피바 케이터링 서비스는 기업 행사, 결혼식, 파티 등 다양한 이벤트에 제공됩니다. 아래
              버튼을 통해 자세한 예약 가이드를 확인해 보세요.
            </p>
            <div className="mt-6">
              <Link
                href="/reservation-guide"
                className="inline-block rounded-md bg-stone-800 px-4 py-2 text-white transition hover:bg-stone-700"
              >
                예약 가이드 보기
              </Link>
            </div>
          </div>

          <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">문의하기</h2>
            <p className="mb-4 text-gray-700">추가 문의사항이 있으시면 아래 연락처로 문의해 주세요.</p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">이메일:</span> contact@ruota.coffee
              </li>
              <li>
                <span className="font-semibold">전화:</span> 02-123-4567
              </li>
              <li>
                <span className="font-semibold">영업시간:</span> 평일 9:00 - 18:00
              </li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">디자인 가이드</h2>
            <p className="mb-4 text-gray-700">케이터링 서비스와 함께 제공되는 맞춤형 디자인 옵션을 확인해 보세요.</p>
            <div className="mt-6">
              <Link
                href="/design-guide"
                className="inline-block rounded-md bg-stone-800 px-4 py-2 text-white transition hover:bg-stone-700"
              >
                디자인 가이드 보기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
