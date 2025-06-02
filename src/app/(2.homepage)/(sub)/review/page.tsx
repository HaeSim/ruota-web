import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "리뷰 | ruota",
  description: "루오타 방문 고객들의 진솔한 후기를 만나보세요",
}

/**
 * 리뷰 페이지
 * @description 사용자 리뷰와 인스타그램 리뷰로 분기하는 메인 리뷰 페이지
 */
export default function ReviewPage() {
  return (
    <div className="h-[calc(100dvh-68px-64px)] overflow-hidden md:h-[calc(100dvh-68px-140px)]">
      {/* 사용자 리뷰 섹션 */}
      <Link href="/review/user" className="group relative block h-1/2 md:float-left md:h-full md:w-1/2">
        <div className="absolute inset-0 bg-[url('/images/review/user-review-bg.webp')] bg-cover bg-center transition-all duration-300 group-hover:brightness-50" />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
          <h2 className="mb-4 text-4xl font-bold">고객 리뷰</h2>
          <p className="max-w-md text-center text-lg">루오타를 방문해주신 고객분들의 생생한 후기를 만나보세요.</p>
          <div className="mt-4 flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm">4.8 / 5.0</span>
          </div>
        </div>
      </Link>

      {/* 인스타그램 리뷰 섹션 */}
      <Link href="/review/instagram" className="group relative block h-1/2 md:float-left md:h-full md:w-1/2">
        <div className="absolute inset-0 bg-[url('/images/review/instagram-bg.webp')] bg-cover bg-center transition-all duration-300 group-hover:brightness-50" />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
          <h2 className="mb-4 text-4xl font-bold">인스타그램</h2>
          <p className="max-w-md text-center text-lg">#루오타 태그로 공유된 고객들의 특별한 순간들을 확인하세요.</p>
          <div className="mt-4 flex items-center space-x-1">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="font-medium">@ruota_cafe</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
