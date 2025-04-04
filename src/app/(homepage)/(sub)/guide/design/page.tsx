import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "디자인 가이드 | ruota",
  description: "루오타 케이터링 서비스 맞춤형 디자인 가이드",
}

export default function DesignGuidePage() {
  return (
    <div className="min-h-screen bg-stone-100">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold">디자인 가이드</h1>
        <p className="mb-8 text-center text-lg text-gray-600">루오타와 함께하는 이벤트를 위한 맞춤형 디자인 옵션</p>

        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-semibold">맞춤형 브랜딩 서비스</h2>
            <p className="mb-6 text-gray-700">
              루오타는 고객의 브랜드 아이덴티티나 이벤트 테마에 맞춘 다양한 맞춤형 디자인 서비스를 제공합니다. 귀사의
              로고, 색상, 스타일을 적용하여 특별한 경험을 선사합니다.
            </p>

            <div className="mb-6 space-y-4">
              <div className="rounded-md border border-gray-200 p-4">
                <h3 className="mb-2 text-lg font-medium">메뉴판 커스터마이징</h3>
                <p className="text-gray-700">
                  귀사의 브랜드 색상과 로고를 적용한 맞춤형 메뉴판을 제작해 드립니다. 이벤트 테마에 맞는 특별한 음료
                  이름도 가능합니다.
                </p>
              </div>

              <div className="rounded-md border border-gray-200 p-4">
                <h3 className="mb-2 text-lg font-medium">컵 브랜딩</h3>
                <p className="text-gray-700">
                  종이컵, 텀블러 등에 귀사의 로고나 이벤트 관련 그래픽을 인쇄하여 제공합니다. 최소 200개 이상 주문 시
                  가능합니다.
                </p>
              </div>

              <div className="rounded-md border border-gray-200 p-4">
                <h3 className="mb-2 text-lg font-medium">배너 및 사이니지</h3>
                <p className="text-gray-700">
                  커피바 주변에 설치할 수 있는 맞춤형 배너, 테이블 텐트 카드, 사이니지 등을 디자인하고 제작해 드립니다.
                </p>
              </div>

              <div className="rounded-md border border-gray-200 p-4">
                <h3 className="mb-2 text-lg font-medium">바리스타 유니폼</h3>
                <p className="text-gray-700">
                  귀사의 브랜드 색상이나 로고가 적용된 앞치마나 유니폼을 제작하여 바리스타가 착용할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">디자인 의뢰 절차</h2>
            <ol className="list-inside list-decimal space-y-3 text-gray-700">
              <li>초기 상담 시 디자인 요구사항 전달</li>
              <li>루오타 디자인 팀의 컨셉 제안 및 견적 제공</li>
              <li>디자인 시안 검토 및 수정 (최대 2회)</li>
              <li>최종 디자인 확정 및 제작</li>
              <li>이벤트 당일 세팅 및 활용</li>
            </ol>
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
