import { Metadata } from "next"

export const metadata: Metadata = {
  title: "연락처 | ruota",
  description: "루오타에 문의하는 방법을 알아보세요",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold">연락처</h1>
        <p className="mb-12 text-center text-lg text-gray-600">루오타에 궁금한 점이나 문의사항이 있으신가요?</p>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-semibold">일반 문의</h2>

            <div className="mb-6 space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">이메일</h3>
                  <p className="text-gray-700">contact@ruota.coffee</p>
                  <p className="mt-1 text-sm text-gray-500">이메일 문의 시 24시간 내에 답변 드립니다.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">전화</h3>
                  <p className="text-gray-700">02-123-4567</p>
                  <p className="mt-1 text-sm text-gray-500">평일 9:00 - 18:00 (점심시간 12:00 - 13:00)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">주소</h3>
                  <p className="text-gray-700">서울특별시 강남구 테헤란로 123 루오타 빌딩 4층</p>
                  <p className="mt-1 text-sm text-gray-500">방문 전 사전 예약이 필요합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-semibold">케이터링 문의</h2>
            <p className="mb-6 text-gray-700">
              케이터링 서비스 예약 및 견적 문의는 아래 전용 연락처로 문의해 주세요. 빠른 시일 내에 상담 전문가가 연락
              드립니다.
            </p>

            <div className="mb-6 space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">케이터링 전용 이메일</h3>
                  <p className="text-gray-700">catering@ruota.coffee</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-stone-800 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium">케이터링 전용 전화</h3>
                  <p className="text-gray-700">02-123-4568</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/reservation"
                className="inline-block rounded-md bg-stone-800 px-6 py-3 text-white transition hover:bg-stone-700"
              >
                케이터링 예약하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
