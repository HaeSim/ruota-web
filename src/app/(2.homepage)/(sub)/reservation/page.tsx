import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "예약 | ruota",
  description: "루오타 카페 예약 안내",
}

/**
 * 예약 페이지
 * @description 루오타 카페 예약 및 문의 안내 페이지
 */
export default function ReservationPage() {
  return (
    <div className="min-h-[calc(100dvh-68px-64px)] bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">예약 안내</h1>
          <p className="mb-12 text-lg text-gray-600">
            루오타에서 특별한 시간을 보내세요. 개인 방문부터 단체 예약까지 언제든 환영합니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* 개인 예약 */}
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">개인 예약</h2>
            <p className="mb-6 text-gray-600">소중한 사람과의 특별한 시간을 위한 개인 예약 서비스입니다.</p>
            <ul className="mb-6 space-y-2 text-sm text-gray-600">
              <li>• 2-4인 테이블 예약</li>
              <li>• 최대 7일 전 예약 가능</li>
              <li>• 예약 변경은 1일 전까지</li>
            </ul>
            <Link
              href="tel:02-123-4567"
              className="inline-block w-full rounded-md bg-orange-500 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-orange-600"
            >
              전화 예약하기
            </Link>
          </div>

          {/* 단체 예약 */}
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">단체 예약</h2>
            <p className="mb-6 text-gray-600">회사 모임, 스터디 그룹, 생일파티 등 단체 예약을 위한 서비스입니다.</p>
            <ul className="mb-6 space-y-2 text-sm text-gray-600">
              <li>• 5-20인 단체 예약</li>
              <li>• 최소 3일 전 예약 필수</li>
              <li>• 별도 메뉴 구성 가능</li>
            </ul>
            <Link
              href="mailto:contact@ruota.co.kr"
              className="inline-block w-full rounded-md bg-blue-500 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-blue-600"
            >
              이메일 문의하기
            </Link>
          </div>
        </div>

        {/* 운영 시간 및 위치 정보 */}
        <div className="mt-12 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">운영 정보</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-lg font-medium text-gray-900">운영 시간</h3>
              <div className="space-y-1 text-gray-600">
                <p>평일: 오전 8시 - 오후 10시</p>
                <p>주말: 오전 9시 - 오후 11시</p>
                <p>공휴일: 오전 10시 - 오후 9시</p>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-medium text-gray-900">연락처</h3>
              <div className="space-y-1 text-gray-600">
                <p>전화: 02-123-4567</p>
                <p>이메일: contact@ruota.co.kr</p>
                <p>주소: 서울시 강남구 루오타로 123</p>
              </div>
            </div>
          </div>
        </div>

        {/* 주의사항 */}
        <div className="mt-8 rounded-lg bg-orange-50 p-6">
          <h3 className="mb-3 text-lg font-medium text-orange-900">예약 시 주의사항</h3>
          <ul className="space-y-1 text-sm text-orange-800">
            <li>• 예약 취소는 방문 예정일 1일 전까지 가능합니다.</li>
            <li>• 노쇼(No-show) 발생 시 향후 예약에 제한이 있을 수 있습니다.</li>
            <li>• 단체 예약의 경우 사전 메뉴 선택이 필요할 수 있습니다.</li>
            <li>• 반려동물 동반은 사전 문의 후 가능합니다.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
