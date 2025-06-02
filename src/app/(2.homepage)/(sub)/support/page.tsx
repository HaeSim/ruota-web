import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "고객지원 | ruota",
  description: "루오타 고객지원 센터 - 공지사항, FAQ, 문의하기",
}

/**
 * 고객지원 페이지
 * @description 공지사항, FAQ, QNA로 분기하는 고객지원 메인 페이지
 */
export default function SupportPage() {
  return (
    <div className="min-h-[calc(100dvh-68px)] bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">고객지원</h1>
          <p className="text-lg text-gray-600">루오타에 대한 궁금한 점이나 필요한 도움을 받으실 수 있습니다.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* 공지사항 */}
          <Link href="/support/notice" className="group">
            <div className="h-full rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-200">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">공지사항</h2>
              <p className="mb-4 text-gray-600">루오타의 최신 소식과 중요한 공지사항을 확인하세요.</p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                <span className="text-sm font-medium">바로가기</span>
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* FAQ */}
          <Link href="/support/faq" className="group">
            <div className="h-full rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 transition-colors group-hover:bg-green-200">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">자주 묻는 질문</h2>
              <p className="mb-4 text-gray-600">고객님들이 자주 묻는 질문들과 답변을 모아놓았습니다.</p>
              <div className="flex items-center text-green-600 group-hover:text-green-700">
                <span className="text-sm font-medium">바로가기</span>
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Q&A 문의 */}
          <Link href="/support/qna" className="group">
            <div className="h-full rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-200">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">문의하기</h2>
              <p className="mb-4 text-gray-600">궁금한 점이나 건의사항이 있으시면 언제든 문의해주세요.</p>
              <div className="flex items-center text-orange-600 group-hover:text-orange-700">
                <span className="text-sm font-medium">바로가기</span>
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* 연락처 정보 */}
        <div className="mt-16 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-900">연락처 정보</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-medium text-gray-900">전화 문의</h3>
              <p className="text-gray-600">02-123-4567</p>
              <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
            </div>

            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-medium text-gray-900">이메일 문의</h3>
              <p className="text-gray-600">contact@ruota.co.kr</p>
              <p className="text-sm text-gray-500">24시간 접수</p>
            </div>

            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              </div>
              <h3 className="mb-2 font-medium text-gray-900">방문 문의</h3>
              <p className="text-gray-600">서울시 강남구 루오타로 123</p>
              <p className="text-sm text-gray-500">매일 08:00 - 22:00</p>
            </div>
          </div>
        </div>

        {/* 도움말 섹션 */}
        <div className="mt-12 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-8">
          <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">더 빠른 도움이 필요하신가요?</h3>
            <p className="mb-6 text-gray-600">FAQ를 먼저 확인해보시면 대부분의 궁금증을 빠르게 해결하실 수 있습니다.</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/support/faq"
                className="rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
              >
                FAQ 바로가기
              </Link>
              <Link
                href="/support/qna"
                className="rounded-md border border-blue-600 px-6 py-3 text-blue-600 transition-colors hover:bg-blue-50"
              >
                1:1 문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
