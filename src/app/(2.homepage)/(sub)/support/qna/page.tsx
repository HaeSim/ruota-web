"use client"

import { Metadata } from "next"
import { useState } from "react"

const metadata: Metadata = {
  title: "1:1 문의 | ruota",
  description: "루오타에 대한 문의사항을 남겨주세요",
}

/**
 * QNA 페이지
 * @description 1:1 문의 폼을 제공하는 페이지
 */
export default function QNAPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    title: "",
    content: "",
    agreeToPrivacy: false,
  })

  const categories = ["메뉴 문의", "예약 문의", "매장 문의", "이벤트 문의", "결제 문의", "기타 문의"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 폼 제출 로직
    console.log("문의 제출:", formData)
    alert("문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.")
  }

  return (
    <div className="min-h-[calc(100dvh-68px)] bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">1:1 문의</h1>
          <p className="text-gray-600">
            궁금한 점이나 건의사항이 있으시면 언제든 문의해주세요. 영업일 기준 24시간 내에 답변드리겠습니다.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* 문의 폼 */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">문의하기</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 기본 정보 */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                      이메일 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                      연락처
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="010-1234-5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">
                      문의 유형 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">선택해주세요</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
                    제목 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder="문의 제목을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="mb-2 block text-sm font-medium text-gray-700">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    required
                    rows={6}
                    value={formData.content}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                    placeholder="문의하실 내용을 자세히 작성해주세요"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="agreeToPrivacy"
                    name="agreeToPrivacy"
                    required
                    checked={formData.agreeToPrivacy}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="agreeToPrivacy" className="text-sm text-gray-700">
                    개인정보 수집 및 이용에 동의합니다. <span className="text-red-500">*</span>
                    <br />
                    <span className="text-xs text-gray-500">
                      수집된 개인정보는 문의 답변 목적으로만 사용되며, 답변 완료 후 즉시 삭제됩니다.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 disabled:bg-gray-400"
                  disabled={!formData.agreeToPrivacy}
                >
                  문의 제출하기
                </button>
              </form>
            </div>
          </div>

          {/* 사이드바 정보 */}
          <div className="space-y-6">
            {/* 연락처 정보 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">직접 연락하기</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">전화 문의</p>
                    <p className="text-sm text-gray-600">02-123-4567</p>
                    <p className="text-xs text-gray-500">평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">이메일</p>
                    <p className="text-sm text-gray-600">contact@ruota.co.kr</p>
                    <p className="text-xs text-gray-500">24시간 접수</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 답변 안내 */}
            <div className="rounded-lg bg-orange-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-orange-900">답변 안내</h3>
              <ul className="space-y-2 text-sm text-orange-800">
                <li>• 영업일 기준 24시간 내 답변</li>
                <li>• 복잡한 문의는 2-3일 소요</li>
                <li>• 답변은 이메일로 발송</li>
                <li>• 긴급한 경우 전화 문의 권장</li>
              </ul>
            </div>

            {/* FAQ 링크 */}
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-blue-900">빠른 해결</h3>
              <p className="mb-4 text-sm text-blue-800">
                자주 묻는 질문을 확인해보시면 더 빠르게 답을 찾으실 수 있어요.
              </p>
              <a
                href="/support/faq"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                FAQ 바로가기
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
