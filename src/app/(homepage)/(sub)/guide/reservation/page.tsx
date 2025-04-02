import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "예약 가이드 | ruota",
  description: "루오타 케이터링 서비스 예약 가이드",
}

export default function ReservationGuidePage() {
  return (
    <div className="min-h-screen bg-stone-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold">예약 가이드</h1>
        <p className="mb-8 text-center text-lg text-gray-600">루오타 케이터링 서비스를 예약하는 상세 가이드</p>

        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-semibold">예약 절차</h2>

            <div className="mb-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-white">
                  1
                </div>
                <h3 className="text-xl font-medium">문의하기</h3>
              </div>
              <p className="ml-14 text-gray-700">
                이메일(contact@ruota.coffee) 또는 전화(02-123-4567)로 초기 문의를 해주세요. 행사 날짜, 시간, 장소, 예상
                인원수 등의 기본 정보를 알려주시면 됩니다.
              </p>
            </div>

            <div className="mb-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-white">
                  2
                </div>
                <h3 className="text-xl font-medium">상담 및 견적</h3>
              </div>
              <p className="ml-14 text-gray-700">
                루오타 팀이 연락하여 상세한 요구사항을 상담하고, 행사에 맞는 맞춤형 견적을 제공해 드립니다. 메뉴 구성,
                브랜딩 옵션, 추가 서비스 등을 논의합니다.
              </p>
            </div>

            <div className="mb-8">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-white">
                  3
                </div>
                <h3 className="text-xl font-medium">계약 및 선금</h3>
              </div>
              <p className="ml-14 text-gray-700">
                견적에 만족하시면 계약서를 작성하고 총액의 30%를 선금으로 지불합니다. 이때 행사 세부 사항이 확정됩니다.
              </p>
            </div>

            <div>
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-800 text-white">
                  4
                </div>
                <h3 className="text-xl font-medium">최종 확인 및 서비스 제공</h3>
              </div>
              <p className="ml-14 text-gray-700">
                행사 1주일 전 최종 인원과 세부사항을 확인합니다. 행사 당일, 루오타 팀이 약속된 시간에 도착하여 전문적인
                서비스를 제공합니다.
              </p>
            </div>
          </div>

          <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">취소 및 환불 정책</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>행사 30일 이전 취소: 선금의 100% 환불</li>
              <li>행사 15-29일 이전 취소: 선금의 50% 환불</li>
              <li>행사 7-14일 이전 취소: 선금의 30% 환불</li>
              <li>행사 7일 이내 취소: 환불 불가</li>
            </ul>
          </div>

          <div className="text-center">
            <Link
              href="/reservation"
              className="inline-block rounded-md bg-stone-800 px-4 py-2 text-white transition hover:bg-stone-700"
            >
              예약 페이지로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
