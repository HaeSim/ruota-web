"use client"

import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isMainPage = pathname === "/"

  // 메인 페이지이고 스크롤이 되지 않은 경우에만 투명 배경
  const isTransparent = isMainPage && !isScrolled

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white shadow-md"
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="relative">
          <Image
            src={isTransparent ? "/images/_common/logo_light.webp" : "/images/_common/logo_dark.webp"}
            alt="RUOTA"
            width={96}
            height={30}
            className="transition-opacity duration-300"
          />
        </Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/menu"
              className={`text-sm transition-colors hover:text-stone-900 ${
                isTransparent ? "text-white" : "text-stone-600"
              }`}
            >
              메뉴
            </Link>
          </li>
          <li>
            <Link
              href="/reservation"
              className={`text-sm transition-colors hover:text-stone-900 ${
                isTransparent ? "text-white" : "text-stone-600"
              }`}
            >
              예약
            </Link>
          </li>
          <li>
            <Link
              href="/catering-service"
              className={`text-sm transition-colors hover:text-stone-900 ${
                isTransparent ? "text-white" : "text-stone-600"
              }`}
            >
              케이터링 서비스
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`text-sm transition-colors hover:text-stone-900 ${
                isTransparent ? "text-white" : "text-stone-600"
              }`}
            >
              회사 소개
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`text-sm transition-colors hover:text-stone-900 ${
                isTransparent ? "text-white" : "text-stone-600"
              }`}
            >
              고객 문의
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className={`rounded-full p-2 transition-colors ${
          isTransparent ? "text-white hover:bg-white/10" : "text-stone-600 hover:bg-stone-100"
        }`}
      >
        <Search className="h-5 w-5" />
      </button>
    </header>
  )
}
