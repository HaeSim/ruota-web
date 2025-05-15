import { Instagram, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-stone-100 py-8", className)}>
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
      </div>
    </footer>
  )
}
