"use client"

import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <Link href="/" className="relative">
          <Image
            src={isScrolled ? "/images/_common/logo_dark.webp" : "/images/_common/logo_light.webp"}
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
                isScrolled ? "text-stone-600" : "text-white"
              }`}
            >
              메뉴
            </Link>
          </li>
          <li>
            <Link
              href="/how-to-reserve"
              className={`text-sm transition-colors hover:text-stone-900 ${
                isScrolled ? "text-stone-600" : "text-white"
              }`}
            >
              예약방법
            </Link>
          </li>
          <li>
            <Link
              href="/our-catering"
              className={`text-sm transition-colors hover:text-stone-900 ${
                isScrolled ? "text-stone-600" : "text-white"
              }`}
            >
              케이터링 후기
            </Link>
          </li>
          <li>
            <Link
              href="/customer-service"
              className={`text-sm transition-colors hover:text-stone-900 ${
                isScrolled ? "text-stone-600" : "text-white"
              }`}
            >
              고객서비스
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className={`rounded-full p-2 transition-colors ${
          isScrolled ? "text-stone-600 hover:bg-stone-100" : "text-white hover:bg-white/10"
        }`}
      >
        <Search className="h-5 w-5" />
      </button>
    </header>
  )
}
