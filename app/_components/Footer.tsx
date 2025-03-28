import { Instagram, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-stone-100 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-4 text-center">
          <p className="mb-2 text-xs text-stone-600 uppercase">RUOTA COFFEE & DESSERT CATERING SERVICE</p>
          <div className="flex justify-center space-x-4">
            <Link href="http://pf.kakao.com/_uIxcxgb" target="_blank" className="text-stone-600 hover:text-stone-900">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/ruota_espresso"
              target="_blank"
              className="text-stone-600 hover:text-stone-900"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="tel:010-7118-0228" className="text-stone-600 hover:text-stone-900">
              <Phone className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="text-center text-xs text-stone-500">
          <p>
            루오타 | 대표: 김수영 | 개인정보책임관리자: 김수영 | 사업자등록번호: 331-35-01036 | 문의: 010-7118-0228 |
            이메일: ruota_espresso@naver.com | © Copyright 2022 All rights reserved.
          </p>
        </div>
        <div className="mt-4 text-right">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
            <span className="text-xs text-stone-700">루오타 에스프레소</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-200">
              <Image src="/placeholder.svg?height=24&width=24" alt="Logo" width={16} height={16} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
