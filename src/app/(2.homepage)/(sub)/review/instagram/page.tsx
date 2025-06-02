import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "인스타그램 | ruota",
  description: "#루오타 태그로 공유된 고객들의 특별한 순간들",
}

/**
 * 인스타그램 페이지
 * @description 인스타그램에 공유된 루오타 관련 게시물들을 보여주는 페이지
 */
export default function InstagramPage() {
  // 임시 인스타그램 게시물 데이터
  const instagramPosts = [
    {
      id: 1,
      imageUrl: "/images/instagram/post1.webp",
      caption: "루오타에서 마시는 완벽한 라떼 ☕️ #루오타 #카페 #라떼아트",
      likes: 245,
      username: "coffee_lover123",
      profileImage: "/images/profiles/user1.webp",
    },
    {
      id: 2,
      imageUrl: "/images/instagram/post2.webp",
      caption: "친구들과 함께하는 달콤한 디저트 타임 🍰 #루오타 #디저트 #친구",
      likes: 189,
      username: "dessert_queen",
      profileImage: "/images/profiles/user2.webp",
    },
    {
      id: 3,
      imageUrl: "/images/instagram/post3.webp",
      caption: "분위기 좋은 루오타에서 독서 타임 📚 #루오타 #카페 #독서",
      likes: 156,
      username: "book_and_coffee",
      profileImage: "/images/profiles/user3.webp",
    },
    {
      id: 4,
      imageUrl: "/images/instagram/post4.webp",
      caption: "오늘의 아메리카노 한 잔 ☕️ #루오타 #아메리카노 #모닝커피",
      likes: 312,
      username: "morning_coffee",
      profileImage: "/images/profiles/user4.webp",
    },
    {
      id: 5,
      imageUrl: "/images/instagram/post5.webp",
      caption: "루오타의 시그니처 메뉴 맛있어요! 🤤 #루오타 #시그니처 #맛있다",
      likes: 278,
      username: "foodie_diary",
      profileImage: "/images/profiles/user5.webp",
    },
    {
      id: 6,
      imageUrl: "/images/instagram/post6.webp",
      caption: "연인과 함께하는 특별한 시간 💕 #루오타 #데이트 #커플",
      likes: 198,
      username: "couple_moments",
      profileImage: "/images/profiles/user6.webp",
    },
  ]

  return (
    <div className="min-h-[calc(100dvh-68px-64px)] bg-gray-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        {/* 헤더 */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900">인스타그램</h1>
          </div>
          <p className="text-gray-600">#루오타 태그로 공유된 고객들의 특별한 순간들</p>
          <Link
            href="https://instagram.com/ruota_cafe"
            target="_blank"
            className="mt-4 inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <span>@ruota_cafe 팔로우하기</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>

        {/* 인스타그램 그리드 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer rounded-lg bg-white shadow-md transition-transform hover:scale-105"
            >
              {/* 이미지 */}
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-200 to-orange-300">
                  <span className="text-sm text-orange-600">이미지 준비중</span>
                </div>
                {/* 호버 오버레이 */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="flex items-center space-x-1">
                      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 포스트 정보 */}
              <div className="p-4">
                <div className="mb-3 flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                      <span className="text-xs font-medium text-gray-600">{post.username.charAt(0).toUpperCase()}</span>
                    </div>
                  </div>
                  <span className="font-medium text-gray-900">{post.username}</span>
                </div>
                <p className="line-clamp-2 text-sm text-gray-600">{post.caption}</p>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
                  <span>{post.likes} 좋아요</span>
                  <button className="text-blue-600 hover:text-blue-700">인스타그램에서 보기</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 더보기 버튼 */}
        <div className="mt-12 text-center">
          <Link
            href="https://instagram.com/explore/tags/루오타"
            target="_blank"
            className="inline-flex items-center space-x-2 rounded-md bg-gradient-to-r from-pink-500 to-orange-500 px-6 py-3 text-white transition-transform hover:scale-105"
          >
            <span>인스타그램에서 더 많은 포스트 보기</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>

        {/* 해시태그 안내 */}
        <div className="mt-12 rounded-lg bg-gradient-to-r from-pink-50 to-orange-50 p-6 text-center">
          <h3 className="mb-2 text-lg font-medium text-gray-900">루오타 방문 사진을 공유해주세요!</h3>
          <p className="mb-4 text-gray-600">
            <span className="font-medium text-pink-600">#루오타</span> 해시태그를 달아주시면 이곳에 소개될 수 있어요.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="rounded-full bg-pink-100 px-3 py-1 text-pink-700">#루오타</span>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-700">#ruota</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">#카페</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">#커피</span>
          </div>
        </div>
      </div>
    </div>
  )
}
