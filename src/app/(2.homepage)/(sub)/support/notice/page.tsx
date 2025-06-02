import { Metadata } from "next"

export const metadata: Metadata = {
  title: "공지사항 | ruota",
  description: "루오타의 최신 소식과 중요한 공지사항",
}

/**
 * 공지사항 페이지
 * @description 루오타의 공지사항을 보여주는 페이지
 */
export default function NoticePage() {
  // 임시 공지사항 데이터
  const notices = [
    {
      id: 1,
      title: "2024년 1월 신메뉴 출시 안내",
      content: "새해를 맞아 루오타만의 특별한 신메뉴를 선보입니다. 시즌 한정 음료와 디저트를 만나보세요.",
      date: "2024.01.15",
      isImportant: true,
      views: 1234,
    },
    {
      id: 2,
      title: "설 연휴 운영시간 변경 안내",
      content: "설 연휴 기간 중 운영시간이 변경됩니다. 방문 전 확인 부탁드립니다.",
      date: "2024.01.10",
      isImportant: true,
      views: 856,
    },
    {
      id: 3,
      title: "루오타 멤버십 프로그램 런칭",
      content: "고객님들께 더 나은 혜택을 제공하기 위한 멤버십 프로그램이 시작됩니다.",
      date: "2024.01.08",
      isImportant: false,
      views: 679,
    },
    {
      id: 4,
      title: "겨울 시즌 이벤트 진행",
      content: "12월부터 2월까지 겨울 시즌 특별 이벤트를 진행합니다. 많은 참여 부탁드립니다.",
      date: "2024.01.05",
      isImportant: false,
      views: 542,
    },
    {
      id: 5,
      title: "매장 인테리어 리뉴얼 완료",
      content: "더욱 쾌적하고 아늑한 환경을 위해 진행된 인테리어 리뉴얼이 완료되었습니다.",
      date: "2024.01.03",
      isImportant: false,
      views: 398,
    },
  ]

  return (
    <div className="min-h-[calc(100dvh-68px)] bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">공지사항</h1>
          <p className="text-gray-600">루오타의 최신 소식과 중요한 공지사항을 확인하세요.</p>
        </div>

        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-2">
                    {notice.isImportant && (
                      <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600">중요</span>
                    )}
                    <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600">{notice.title}</h2>
                  </div>
                  <p className="mb-3 line-clamp-2 text-gray-600">{notice.content}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{notice.date}</span>
                    <span>•</span>
                    <span>조회 {notice.views.toLocaleString()}</span>
                  </div>
                </div>
                <div className="ml-4 flex items-center text-gray-400">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="rounded-md border border-gray-300 px-3 py-2 text-gray-500 hover:bg-gray-50">이전</button>
            <button className="rounded-md bg-blue-600 px-3 py-2 text-white">1</button>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-gray-500 hover:bg-gray-50">2</button>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-gray-500 hover:bg-gray-50">3</button>
            <button className="rounded-md border border-gray-300 px-3 py-2 text-gray-500 hover:bg-gray-50">다음</button>
          </nav>
        </div>

        {/* 검색 */}
        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-lg font-medium text-gray-900">공지사항 검색</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="제목 또는 내용으로 검색"
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
            <button className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">검색</button>
          </div>
        </div>
      </div>
    </div>
  )
}
