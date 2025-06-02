import { Metadata } from "next"

export const metadata: Metadata = {
  title: "고객 리뷰 | ruota",
  description: "루오타를 방문해주신 고객분들의 생생한 후기",
}

/**
 * 사용자 리뷰 페이지
 * @description 루오타 방문 고객들의 후기를 보여주는 페이지
 */
export default function UserReviewPage() {
  // 임시 리뷰 데이터
  const reviews = [
    {
      id: 1,
      name: "김민수",
      rating: 5,
      date: "2024.01.15",
      content: "커피 맛이 정말 뛰어나고 분위기도 너무 좋아요. 데이트 코스로 완벽합니다!",
      menu: "아메리카노, 티라미수",
    },
    {
      id: 2,
      name: "박지영",
      rating: 5,
      date: "2024.01.14",
      content: "직원분들이 너무 친절하시고 인테리어가 세련되어서 기분이 좋아졌어요. 다시 올게요!",
      menu: "카페라떼, 브라우니",
    },
    {
      id: 3,
      name: "이준호",
      rating: 4,
      date: "2024.01.13",
      content: "업무하기 좋은 환경이에요. 와이파이도 빠르고 콘센트도 충분해서 만족합니다.",
      menu: "드립커피, 크로와상",
    },
    {
      id: 4,
      name: "정수진",
      rating: 5,
      date: "2024.01.12",
      content: "디저트가 정말 맛있어요! 특히 치즈케이크는 꼭 드셔보세요. 강력 추천합니다.",
      menu: "얼그레이, 치즈케이크",
    },
    {
      id: 5,
      name: "최동혁",
      rating: 4,
      date: "2024.01.11",
      content: "아늑한 분위기에서 친구들과 좋은 시간 보냈습니다. 음료도 맛있고 가격도 합리적이에요.",
      menu: "바닐라라떼, 마카롱",
    },
  ]

  return (
    <div className="min-h-[calc(100dvh-68px-64px)] bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">고객 리뷰</h1>
          <p className="text-gray-600">루오타를 방문해주신 고객분들의 소중한 후기입니다</p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-medium text-gray-700">4.8 / 5.0</span>
            <span className="text-gray-500">({reviews.length}개 리뷰)</span>
          </div>
        </div>

        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <span className="font-medium text-orange-600">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400" : "fill-gray-200"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="mb-3 text-gray-700">{review.content}</p>

              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>주문 메뉴:</span>
                <span className="font-medium text-gray-700">{review.menu}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 리뷰 작성 안내 */}
        <div className="mt-12 rounded-lg bg-orange-50 p-6 text-center">
          <h3 className="mb-2 text-lg font-medium text-orange-900">루오타 방문 후기를 남겨주세요</h3>
          <p className="mb-4 text-orange-800">소중한 후기는 다른 고객분들께 큰 도움이 됩니다.</p>
          <button className="rounded-md bg-orange-500 px-6 py-2 text-white transition-colors hover:bg-orange-600">
            리뷰 작성하기
          </button>
        </div>
      </div>
    </div>
  )
}
