"use client"

import { Instagram, Mail, Phone } from "lucide-react"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function PreFooter() {
  const containerRef = useRef<HTMLElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  // 패럴렉스 효과를 스크롤 이벤트로 개선
  useEffect(() => {
    const handleScroll = () => {
      if (!backgroundRef.current || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const speed = 0.15 // 부드러운 패럴렉스 효과
      const yPosition = 50 + (rect.top * speed) / 10
      backgroundRef.current.style.backgroundPosition = `50% ${yPosition}%`
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden py-20"
      aria-labelledby="contact-heading"
    >
      {/* 배경 이미지와 오버레이 */}
      <div
        ref={backgroundRef}
        className={cn("absolute inset-0 z-0 h-full w-full bg-cover bg-fixed bg-center")}
        style={{
          backgroundImage: `url('/images/index/bg_pre_footer.webp')`,
          transition: "background-position 0.5s ease-out",
        }}
        aria-hidden="true"
      />

      {/* 오버레이 */}
      <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-[2px]" aria-hidden="true" />

      {/* 콘텐츠 */}
      <Card className="relative z-10 mx-4 w-full max-w-3xl border-none bg-black/40 text-white shadow-xl backdrop-blur-md">
        <CardHeader className="pb-4">
          <CardTitle id="contact-heading" className="text-center text-3xl font-bold tracking-tight">
            서포트/행사/케이터링 문의
          </CardTitle>
          <CardDescription className="text-center text-sm text-white/80">
            프리미엄 커피 서비스로 여러분의 특별한 순간을 더욱 빛나게 해드립니다
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <article className="space-y-3 text-center">
            <p className="text-sm leading-relaxed">
              연예인 서포트, 웨딩, 기업 행사, 학교 축제 등 어떤 자리에서든 루오타의 프리미엄 커피와 디저트가 함께합니다.
              장소와 시간에 구애받지 않고 최고급 품질의 커피바 서비스를 경험해보세요.
            </p>
            <p className="text-sm leading-relaxed">
              정확한 견적과 상담을 위해 행사 날짜, 장소, 원하시는 메뉴 및 예상 인원수를 카카오톡 채널이나 문자로
              연락주시면 빠르고 정확한 맞춤형 제안을 드리겠습니다.
            </p>
          </article>

          <nav className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white/60 bg-transparent text-white transition-all duration-300 hover:border-white hover:bg-white/20 sm:w-auto"
              aria-label="전화 문의"
            >
              <Phone className="mr-2 h-5 w-5" />
              010-7158-0228
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white/60 bg-transparent text-white transition-all duration-300 hover:border-white hover:bg-white/20 sm:w-auto"
              aria-label="인스타그램으로 문의"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white/60 bg-transparent text-white transition-all duration-300 hover:border-white hover:bg-white/20 sm:w-auto"
              aria-label="메일로 문의"
            >
              <Mail className="mr-2 h-5 w-5" />
              문의하기
            </Button>
          </nav>
        </CardContent>
      </Card>
    </section>
  )
}
