"use client"

import { Metadata } from "next"
import { useState } from "react"

export const metadata: Metadata = {
  title: "자주 묻는 질문 | ruota",
  description: "루오타에 대해 자주 묻는 질문들과 답변",
}

/**
 * FAQ 페이지
 * @description 자주 묻는 질문들을 아코디언 형태로 보여주는 페이지
 */
export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // FAQ 데이터
  const faqs = [
    {
      id: 1,
      category: "운영시간",
      question: "루오타의 운영시간은 어떻게 되나요?",
      answer:
        "평일은 오전 8시부터 오후 10시까지, 주말은 오전 9시부터 오후 11시까지 운영합니다. 공휴일은 오전 10시부터 오후 9시까지 운영하며, 일부 특별한 날에는 운영시간이 변경될 수 있습니다.",
    },
    {
      id: 2,
      category: "예약",
      question: "테이블 예약이 가능한가요?",
      answer:
        "네, 가능합니다. 2-4인 테이블은 최대 7일 전까지 예약 가능하며, 5인 이상 단체 예약은 최소 3일 전까지 예약해주셔야 합니다. 전화(02-123-4567) 또는 이메일(contact@ruota.co.kr)로 예약 가능합니다.",
    },
    {
      id: 3,
      category: "메뉴",
      question: "비건 메뉴가 있나요?",
      answer:
        "네, 다양한 비건 메뉴를 준비하고 있습니다. 식물성 우유(오트밀크, 아몬드밀크, 코코넛밀크)로 제조한 음료와 비건 디저트를 제공합니다. 자세한 메뉴는 직원에게 문의해주세요.",
    },
    {
      id: 4,
      category: "주차",
      question: "주차 공간이 있나요?",
      answer:
        "매장 전용 주차장은 없지만, 인근에 공영주차장이 있습니다. 대중교통 이용을 권해드리며, 지하철 3호선 강남역에서 도보 5분 거리에 위치해 있습니다.",
    },
    {
      id: 5,
      category: "와이파이",
      question: "무료 와이파이를 제공하나요?",
      answer:
        "네, 고객님들께 무료 와이파이를 제공합니다. 네트워크명은 'RUOTA_FREE'이며, 비밀번호는 매장 내 안내문을 확인하시거나 직원에게 문의해주세요.",
    },
    {
      id: 6,
      category: "반려동물",
      question: "반려동물과 함께 입장할 수 있나요?",
      answer:
        "소형 반려동물의 경우 캐리어나 가방에 넣고 입장 가능합니다. 다른 고객님들에게 피해가 되지 않도록 조용히 해주시길 부탁드리며, 사전에 전화로 문의해주시면 더욱 좋습니다.",
    },
    {
      id: 7,
      category: "결제",
      question: "어떤 결제 수단을 사용할 수 있나요?",
      answer:
        "현금, 신용카드, 체크카드는 물론 카카오페이, 네이버페이, 삼성페이 등 다양한 모바일 결제 수단을 지원합니다. 또한 루오타 멤버십 포인트로도 결제 가능합니다.",
    },
    {
      id: 8,
      category: "멤버십",
      question: "멤버십 혜택은 무엇인가요?",
      answer:
        "루오타 멤버십 가입 시 구매 금액의 3% 포인트 적립, 생일 쿠폰 제공, 신메뉴 우선 체험 기회, 특별 이벤트 초대 등의 혜택을 받으실 수 있습니다. 멤버십 가입은 무료입니다.",
    },
  ]

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-[calc(100dvh-68px)] bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">자주 묻는 질문</h1>
          <p className="text-gray-600">
            고객님들이 자주 묻는 질문들과 답변을 모아놓았습니다. 원하는 답변을 찾지 못하셨다면 언제든 문의해주세요.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white">전체</button>
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full bg-white px-4 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-50"
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ 목록 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="rounded-lg bg-white shadow-md">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                      {faq.category}
                    </span>
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                  </div>
                  <svg
                    className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="border-t border-gray-200 px-6 pb-6">
                  <p className="pt-4 text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 추가 도움말 */}
        <div className="mt-12 rounded-lg bg-blue-50 p-6">
          <h3 className="mb-3 text-lg font-medium text-blue-900">원하는 답변을 찾지 못하셨나요?</h3>
          <p className="mb-4 text-blue-800">
            더 자세한 문의사항이 있으시면 언제든 연락해주세요. 친절하고 신속하게 답변드리겠습니다.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:02-123-4567"
              className="flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              전화 문의
            </a>
            <a
              href="mailto:contact@ruota.co.kr"
              className="flex items-center justify-center rounded-md border border-blue-600 px-4 py-2 text-blue-600 transition-colors hover:bg-blue-50"
            >
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              이메일 문의
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
